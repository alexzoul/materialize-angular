import { Component, Input, OnInit } from '@angular/core';
import { CustomInput } from './custom-input.model';
import { getBooleanValue } from '../../utils/get-boolean-value.util';

const fieldValidations = require('../../fixtures/field-validations.json');

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html'
})
export class CustomInputComponent implements CustomInput, OnInit {
  static readonly defaultProps: CustomInput = {
    autocomplete: 'none',
    className: '',
    disabled: false,
    errorMessage: '',
    floatLabel: true,
    iconName: '',
    isFocused: false,
    isTouched: false,
    isValid: false,
    label: '',
    maxLength: 500,
    name: '',
    patternName: '',
    placeholder: '',
    required: false,
    type: 'text',
    value: ''
  };

  @Input() onBlur: (value: string) => void;
  @Input() onChange: (value: string) => void;

  @Input('autocomplete') autocompleteInput: string;
  @Input('className') classNameInput: string;
  @Input('disabled') disabledInput: boolean;
  @Input('floatLabel') floatLabelInput: boolean;
  @Input('iconName') iconNameInput: string;
  @Input('label') labelInput: string;
  @Input('maxLength') maxLengthInput: number;
  @Input('name') nameInput: string;
  @Input('placeholder') placeholderInput: string;
  @Input('required') requiredInput: boolean;
  @Input('type') typeInput: 'text' | 'password';
  @Input('patternName') patternNameInput: string;
  @Input('value') valueInput: string;

  public autocomplete: string;
  public className: string;
  public disabled: boolean;
  public errorMessage: string;
  public floatLabel: boolean;
  public iconName: string;
  public isTouched: boolean;
  public isFocused: boolean;
  public isValid: boolean;
  public label: string;
  public maxLength: number;
  public name: string;
  public patternName: string;
  public placeholder: string;
  public required: boolean;
  public type: string;
  public value: string;

  constructor() {
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  ngOnInit() {
    this.initValues();
  }

  initValues(): void {
    const { defaultProps } = CustomInputComponent;

    this.autocomplete = this.autocompleteInput || defaultProps.autocomplete;
    this.className = this.classNameInput || defaultProps.className;
    this.disabled = getBooleanValue(this.disabledInput, defaultProps.disabled);
    this.floatLabel = getBooleanValue(this.floatLabelInput, defaultProps.floatLabel);
    this.label = this.labelInput || defaultProps.label;
    this.iconName = this.iconNameInput || defaultProps.iconName;
    this.maxLength = this.maxLengthInput || defaultProps.maxLength;
    this.name = this.nameInput || defaultProps.name;
    this.patternName = this.patternNameInput || defaultProps.patternName;
    this.placeholder = this.placeholderInput || defaultProps.placeholder;
    this.required = getBooleanValue(this.requiredInput, defaultProps.required);
    this.type = this.typeInput || defaultProps.type;
    this.value = this.valueInput || defaultProps.value;

    this.isFocused = defaultProps.isFocused;
    this.isTouched = defaultProps.isTouched;
    this.isValid = this.validate(this.value, this.required);
  }

  validate(value: string, required: boolean): boolean {
    const cleanValue = value.trim();

    this.errorMessage = '';

    if (!required && this.patternName && cleanValue.length) {
      const fieldValidation = fieldValidations[this.patternName];

      if (!this.validRegex(cleanValue, fieldValidation.regex)) {
        this.errorMessage = fieldValidation.errorMessage;

        return false;
      }
    }

    if (required && !cleanValue.length && !this.patternName) {
      const fieldValidation = fieldValidations['required'];

      this.errorMessage = fieldValidation.errorMessage;

      return false;
    }

    if (required && this.patternName) {
      const fieldValidation = fieldValidations[this.patternName];

      if (!this.validRegex(cleanValue, fieldValidation.regex)) {
        this.errorMessage = fieldValidation.errorMessage;

        return false;
      }
    }

    return true;
  }

  validRegex(value: string, regex: string): boolean {
    const customRegex = new RegExp(regex);
    const resultRegexValidation = customRegex.test(value);

    if (resultRegexValidation) {
      return true;
    }

    return false;
  }

  onInputBlur(event: any): void {
    const { value } = event.target;

    this.isTouched = true;
    this.isFocused = false;

    if (this.onBlur) {
      this.onBlur(value);
    }
  }

  onInputFocus() {
    this.isFocused = true;
  }

  onInputChange(event: any): void {
    const { value } = event.target;

    this.isValid = this.validate(value, this.required);
    this.value = value;

    if (this.onChange) {
      this.onChange(value);
    }
  }
}
