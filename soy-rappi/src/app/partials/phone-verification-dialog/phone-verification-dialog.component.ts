import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeInputComponent } from 'angular-code-input';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CountriesService } from 'src/app/utils/rappi/countries/services/countries.service';
import { WhatsappRegister } from 'src/app/utils/rappi/whatsapp/models/whatapp-register';
import { WhatsappValidationCode } from 'src/app/utils/rappi/whatsapp/models/whatsapp-validation-code';
import {
  WhatsappCode,
  WhatsappVerification,
} from 'src/app/utils/rappi/whatsapp/models/whatsapp-verification';
import { WhatsappVerificationService } from 'src/app/utils/rappi/whatsapp/services/whatsapp-verification.service';
import { FormModal } from 'src/app/utils/strapi/form-modal/models/form-modal.interface';
import { ThankYouService } from 'src/app/utils/strapi/thank-you/services/thank-you.service';
import { locale } from 'src/environments/locale/locale';
import { LocationService } from '../../utils/location/location.service';

@Component({
  selector: 'app-phone-verification-dialog',
  templateUrl: './phone-verification-dialog.component.html',
  styleUrls: ['./phone-verification-dialog.component.scss'],
})
export class PhoneVerificationDialogComponent {
  @ViewChild('codeInput') codeInput!: CodeInputComponent;

  @Output() modalClose: EventEmitter<any> = new EventEmitter();

  @Input() whatsappVerification: WhatsappVerification | undefined;

  @Input() texts: FormModal | undefined;

  @Input() errorExist: boolean = false;

  @Input() userData: WhatsappRegister | undefined;

  @Input() errorResponse: any;

  modalRef?: BsModalRef;

  messageResend: string = '';

  verificationForm = new FormGroup({});

  code: string = '';

  errorImg: string = '';

  errorMessage: string = '';

  errorTitle: string = '';

  downloadApp = 'https://rt.onelink.me/NnNe/fdzcacrv';

  error: string = '';

  isVisible: boolean = true;

  constructor(
    private modalService: BsModalService,
    private whatsappVerificationService: WhatsappVerificationService,
    private countriesService: CountriesService,
    private router: Router,
    private thankYouService: ThankYouService,
    private _locationService: LocationService
  ) {}

  onCodeChanged(code: string) {}

  onCodeCompleted(code: string) {
    this.code = code;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-dialog-centered modal-registration' })
    );
  }

  close() {
    this.modalClose.emit();
  }

  onSubmit() {
    if (this.code) {
      const query = {
        phone: this.whatsappVerification?.phone,
        country_code: this.whatsappVerification?.country_code,
        code: `${this.code}`,
      };
      this.whatsappVerificationService
        .sendValidateWhatsappCode(query, locale)
        .subscribe((res: WhatsappValidationCode) => {
          if (res.success) {
            this.error = '';
            this.messageResend = '';
            this.whatsappVerificationService
              .sendUserRegister(locale, this.userData)
              .subscribe(
                (res) => {
                  this.thankYouService.getEntries().subscribe((res) => {
                    this.whatsappVerificationService
                      .sendDownloadLink({
                        users: [
                          {
                            cellphone: this.whatsappVerification?.phone,
                            country_code:
                              this.whatsappVerification?.country_code,
                            user_session_keys: [],
                          },
                        ],
                      })
                      .subscribe((_) => {
                        this.close();
                        this.router.navigate([`/${res.data?.slug}`]);
                      });
                  });
                },
                ({ error }) => {
                  this.errorExist = true;
                  this.errorResponse = error.error;
                  this.checkErrorResponse();
                }
              );
          } else {
            this.error = 'El código es erroneo';
          }
        });
    }
  }

  returnCode() {
    const lang = this.countriesService.getLocale(locale);
    const data = {
      phone: `${this.whatsappVerification?.phone}`,
      country_code: this.whatsappVerification?.country_code,
    };
    this.whatsappVerificationService
      .sendWhatsappCode(data, lang)
      .subscribe((res: WhatsappCode) => {
        this.messageResend = 'Un nuevo código fue enviado a tu WhatsApp.';
      });
  }

  closeModal() {
    this.modalRef?.hide();
  }

  registrationModal() {}

  getErrorMessage(value: string) {
    switch (value) {
      case '¡Número registrado!': {
        this.errorMessage =
          'Ese número esta registrado, descarga la App Soyrappi e inicia sesión';
        this.errorImg = 'ilustracion-warning.svg';
        break;
      }

      case 'Número de Whatsapp é inválido':
      case 'Número de Whatsapp inválido': {
        this.errorMessage = '';
        this.errorImg = 'ilustracion-warning.svg';
        break;
      }

      default:
        this.errorMessage = this.errorResponse
          ? this.errorResponse.message
          : 'Se ha producido un error';
        this.errorImg = 'ilustracion-warning.svg';
    }
  }

  checkErrorResponse() {
    if (
      this.errorResponse?.message ===
      'Ya existe una solicitud de rappitendero para el teléfono suministrado'
    ) {
      this.errorTitle = '¡Número registrado!';
    }

    if (this.errorResponse?.code === 'invalid_phone') {
      this.isVisible = false;
      this._locationService.domainPage === 'BR'
        ? (this.errorTitle = 'Número de Whatsapp é inválido')
        : (this.errorTitle = 'Número de Whatsapp inválido');
    }

    this.getErrorMessage(this.errorTitle);
  }

  ngOnChanges() {
    this.checkErrorResponse();
  }
}
