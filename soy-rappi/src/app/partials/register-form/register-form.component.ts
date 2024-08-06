import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cities } from 'src/app/utils/rappi/countries/models/cities';
import { Countries } from 'src/app/utils/rappi/countries/models/countries';
import { CountriesService } from 'src/app/utils/rappi/countries/services/countries.service';
import { WhatsappRegister } from 'src/app/utils/rappi/whatsapp/models/whatapp-register';
import {
  WhatsappCode,
  WhatsappVerification,
} from 'src/app/utils/rappi/whatsapp/models/whatsapp-verification';
import { WhatsappVerificationService } from 'src/app/utils/rappi/whatsapp/services/whatsapp-verification.service';
import { FormModal } from 'src/app/utils/strapi/form-modal/models/form-modal.interface';
import { FormModalService } from 'src/app/utils/strapi/form-modal/services/form-modal.service';
import { RegisterFormPlaceholder } from 'src/app/utils/strapi/models/partials/register-form-placeholder.interface';
import { locale } from 'src/environments/locale/locale';

//Regex Expresions for name validation and email - Register Form
const regexExpNames =
  /^[\u00F1A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ _]*[\u00F1A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ][\u00F1A-Za-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ _]*$/;
const regexEmail = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Input() registerFormPlaceholders?: RegisterFormPlaceholder;

  @Input() registerNowBannerText: string = '';

  @Input() title: string = '';

  @Input() callToAction: string = 'Registrate ahora';

  modalRef?: BsModalRef;

  show: boolean = false;

  cities: Cities[] = [];

  countries: Countries[] = [];

  verification: WhatsappVerification | undefined;

  flag: string = '';

  codeIso: string = '';

  texts: FormModal | undefined;

  registration: boolean = false;

  userData: WhatsappRegister | undefined;

  registerForm!: FormGroup;
  errorExist: boolean = false;

  errorResponse: any;

  checkSubmitted: boolean = false;

  constructor(
    private modalService: BsModalService,
    private countriesService: CountriesService,
    private whatsappVerificationService: WhatsappVerificationService,
    private formModalService: FormModalService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const lang = this.countriesService.getLocale(locale);
    this.countriesService.getCountries().subscribe((res: Countries[]) => {
      this.countries = res;
      const initialCountry = this.countries.find((el) => el.code === lang);
      this.codeIso = initialCountry?.code_iso_2 + '';
      this.registerForm.controls.code.setValue(this.codeIso);
      this.flag = initialCountry ? initialCountry.code.toLowerCase() : '';
    });
    this.countriesService.getCities(locale, lang).subscribe((res: Cities[]) => {
      this.cities = res;
    });

    this.formModalService.getDialogsTexts().subscribe((res) => {
      this.texts = res.data ? res.data : undefined;
    });

    //Form initialization
    this.formSetter();
  }

  checkNumLength(e: any) {
    e.target.value = this.validateNumber(e.target.value);
  }

  validateNumber(value: string) {
    const onlyNumbers = value.replace(/[^\d.]/g, '');
    if (onlyNumbers.length > 11) {
      return onlyNumbers.slice(0, 11);
    }
    return onlyNumbers;
  }

  openModal(template: TemplateRef<Object>) {
    if (this.registerForm.valid) {
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'modal-dialog-centered modal-verification' })
      );
    }
  }

  closeModal() {
    this.errorExist = false;
    this.errorResponse = undefined;
    this.modalRef?.hide();
  }

  password() {
    this.show = !this.show;
  }

  onSubmit() {
    this.checkSubmitted = true;

    if (this.registerForm.valid) {
      const data = {
        phone: this.validateNumber(`${this.registerForm.value.contactPhone}`),
        country_code: this.registerForm.value.code
          ? `+${this.registerForm.value.code}`
          : `+${this.codeIso}`,
      };
      const lang = this.countriesService.getLocale(locale);
      const flag = this.flags(
        this.registerForm.value.code
          ? `${this.registerForm.value.code}`
          : `${this.codeIso}`
      ).toUpperCase();
      this.verification = data;
      this.whatsappVerificationService.sendWhatsappCode(data, locale).subscribe(
        (res: WhatsappCode) => {
          this.userData = {
            firstName: `${this.registerForm.value.firstNames.trim()}`,
            lastName: `${this.registerForm.value.lastNames.trim()}`,
            city: `${this.registerForm.value.city}`,
            telephone: `${this.registerForm.value.contactPhone}`,
            accessToken: `${res.uuid}`,
            applicantUser: {
              email: `${this.registerForm.value.inputEmail}`,
              password: `${this.registerForm.value.password}`,
            },
            country: `${flag}`,
            phoneValidationProvider: 'whatsapp',
          };
        },
        ({ error }) => {
          this.errorExist = true;
          this.errorResponse = error.error;
        }
      );
    } else {
      Object.keys(this.registerForm.controls).forEach((field) => {
        const control = this.registerForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  getFlag(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.value) {
      this.updateCode(target.value);
    }
  }

  updateCode(code: string) {
    this.registerForm.controls.code.setValue(code);
    this.flag = this.flags(code);
    this.codeIso = code;
  }

  flags(value: string) {
    switch (value) {
      case '57': {
        return 'co';
      }

      case '58': {
        return 've';
      }

      case '52': {
        return 'mx';
      }

      case '55': {
        return 'br';
      }

      case '54': {
        return 'ar';
      }

      case '51': {
        return 'pe';
      }

      case '593': {
        return 'ec';
      }

      case '598': {
        return 'uy';
      }

      case '56': {
        return 'cl';
      }

      case '506': {
        return 'cr';
      }

      case '595': {
        return 'py';
      }

      case '591': {
        return 'bo';
      }

      default:
        return 'co';
    }
  }

  formSetter() {
    this.registerForm = this._formBuilder.group({
      firstNames: new FormControl('', [
        Validators.required,
        Validators.pattern(regexExpNames),
      ]),
      lastNames: new FormControl('', [
        Validators.required,
        Validators.pattern(regexExpNames),
      ]),
      inputEmail: new FormControl('', [
        Validators.required,
        Validators.pattern(regexEmail),
      ]),
      city: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      contactPhone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      check: new FormControl(0, [Validators.requiredTrue]),
    });
  }

  getClass(inputName: string, type?: string): string {
    if (
      (this.registerForm.controls[inputName].touched ||
        this.registerForm.controls[inputName].dirty) &&
      (this.registerForm.controls[inputName].invalid ||
        this.registerForm.controls[inputName].hasError('pattern'))
    ) {
      if (inputName === 'code' && type === 'select') {
        return 'inner-select';
      }
      return 'errorsStyle';
    }
    return '';
  }
}
