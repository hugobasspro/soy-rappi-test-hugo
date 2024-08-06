import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  DataFields,
  Fileds,
  FormDynamic,
} from 'src/app/utils/strapi/form-dynamic/models/form-dynamic';
import { FormDynamicService } from 'src/app/utils/strapi/form-dynamic/services/form-dynamic.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss'],
})
export class FormDynamicComponent implements OnInit, OnChanges {
  @Input() data: FormDynamic | undefined;

  @Output() submit = new EventEmitter<boolean>();

  dataForm = this.fb.group({
    fields: this.fb.array([]),
  });

  fields: FormArray | undefined;

  constructor(
    private fb: FormBuilder,
    private formDynamicService: FormDynamicService,
    public uploadService: UploadService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      this.dataForm.removeControl('fields');
      this.dataForm.addControl('fields', this.fb.array([]));
      this.fields = undefined;
      const fields = this.dataForm.get('fields') as FormArray;
      const data = changes.data.currentValue;
      data.fields.forEach((e: any) => {
        fields.push(this.createFormGroup(e));
      });
      this.fields = fields;
    }
  }

  ngOnInit(): void {
    const fields = this.dataForm.get('fields') as FormArray;
    this.data?.fields.forEach((e) => {
      fields.push(this.createFormGroup(e));
    });
    this.fields = fields;
  }

  onSubmit() {
    const fields = this.fields;
    if (fields && !fields.valid) {
      this.validateAllFormFields(fields);
      return;
    }
    const data: DataFields[] = [];
    fields?.controls.forEach((field) => {
      data.push({
        [field.value.label]: field.value[field.value.label],
      });
    });
    const query = {
      title: this.data?.title,
      data: data,
    };
    this.formDynamicService.createEntry(query).subscribe((res) => {
      console.log(res);
    });
    this.submit.emit(true);
  }

  private createFormGroup(filed: Fileds): FormGroup {
    return this.fb.group({
      [filed.label]:
        filed.type === 'email'
          ? ['', [Validators.required, Validators.email]]
          : ['', [Validators.required]],
      label: [filed.label],
      input: [filed.input],
      type: [filed.type],
    });
  }

  private validateAllFormFields(formGroup: FormArray) {
    formGroup.controls.forEach((field) => {
      if (field instanceof AbstractControl) {
        field.markAsTouched();
      }
    });
  }
}
