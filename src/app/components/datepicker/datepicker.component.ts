import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { CalendarDayModel } from '../calendar/calendar.model';
import { DatePickerModel } from './datepicker.model';
import { FormFieldAbstract } from '../form/form-field.abstract';
import { getBooleanValue } from '../../utils/get-boolean-value.util';

@Component({
  providers: [{
    provide: FormFieldAbstract,
    useExisting: forwardRef(() => DatePickerComponent)
  }],
  selector: 'materialize-datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatePickerComponent extends FormFieldAbstract implements OnInit {
  static readonly defaultProps: DatePickerModel = {
    autocomplete: 'none',
    className: '',
    disabled: false,
    errorMessage: '',
    floatLabel: '',
    hasCounter: false,
    id: '',
    label: '',
    maxLength: 500,
    name: '',
    patternName: '',
    placeholder: '',
    required: false,
    textAlign: 'left',
    type: 'text',
    validateOnBlur: false,
    validateOnChange: false,
    value: ''
  };

  @Input('className') classNameInput: string;
  @Input('disabled') disabledInput: boolean;
  @Input('floatLabel') floatLabelInput: string;
  @Input('id') idInput: string;
  @Input('label') labelInput: string;
  @Input('name') nameInput: string;
  @Input('required') requiredInput: boolean;
  @Input('value') valueInput: string;

  public className: string;
  public disabled: boolean;
  public errorMessage: string;
  public floatLabel: string;
  public id: string;
  public isFocused: boolean;
  public isTouched: boolean;
  public isValid: boolean;
  public label: string;
  public name: string;
  public required: boolean;
  public value: string;

  constructor() {
    super();

    this.onInputBlur = this.onInputBlur.bind(this);
  }

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    const { defaultProps } = DatePickerComponent;

    this.className = this.classNameInput || defaultProps.className;
    this.disabled = getBooleanValue(this.disabledInput, defaultProps.disabled);
    this.floatLabel = this.floatLabelInput || defaultProps.floatLabel;
    this.id = this.idInput || defaultProps.id;
    this.label = this.labelInput || defaultProps.label;
    this.name = this.nameInput || defaultProps.name;
    this.required = getBooleanValue(this.requiredInput, defaultProps.required);
    this.value = this.valueInput || defaultProps.value;

    this.isFocused = false;
    this.isTouched = false;
    this.isValid = false;
  }

  onSelectDay(day: CalendarDayModel) {
    this.value = day.isoDate;
    this.isFocused = false;
  }

  onInputFocus() {
    this.isFocused = true;
  }

  onInputBlur(event: any) {
    const { relatedTarget } = event;

    if (!relatedTarget || relatedTarget.className !== 'calendar-container') {
      this.isFocused = false;
    }
  }

  onCalendarBlur(event: Event) {
    this.isFocused = false;
  }

  updateAndValidity() {
    this.isTouched = true;

    // TODO: this.isValid = this.validate(this.value, this.required);
  }
}