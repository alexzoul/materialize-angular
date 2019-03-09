import { FormField } from '../custom-form/custom-form.model';

export interface CustomCheckbox extends FormField {
  iconName: string;
  value: boolean;
}