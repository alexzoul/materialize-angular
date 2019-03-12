import { CommonModule } from '@angular/common';
import { CustomAutocompleteComponent } from './custom-autocomplete/custom-autocomplete.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { CustomCheckboxListComponent } from './custom-checkbox-list/custom-checkbox-list.component';
import { CustomCollapsibleComponent } from './custom-collapsible/custom-collapsible.component';
import { CustomDatePickerComponent } from './custom-datepicker/custom-datepicker.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { CustomFormGroupComponent } from './custom-form-group/custom-form-group.component';
import { CustomIconComponent } from './custom-icon/custom-icon.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomNavbarComponent } from './custom-navbar/custom-navbar.component';
import { CustomRadioComponent } from './custom-radio/custom-radio.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { CustomSideNavComponent } from './custom-sidenav/custom-sidenav.component';
import { CustomSwitchComponent } from './custom-switch/custom-switch.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CustomTextAreaComponent } from './custom-textarea/custom-textarea.component';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { DivTreeComponent } from './div-tree/div-tree.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CustomAutocompleteComponent,
    CustomButtonComponent,
    CustomCalendarComponent,
    CustomCheckboxComponent,
    CustomCheckboxListComponent,
    CustomCollapsibleComponent,
    CustomDatePickerComponent,
    CustomDropdownComponent,
    CustomFormComponent,
    CustomFormGroupComponent,
    CustomIconComponent,
    CustomInputComponent,
    CustomNavbarComponent,
    CustomRadioComponent,
    CustomSelectComponent,
    CustomSideNavComponent,
    CustomSwitchComponent,
    CustomTableComponent,
    CustomTextAreaComponent,
    CustomTooltipComponent,
    DivTreeComponent
  ],
  exports: [
    CustomAutocompleteComponent,
    CustomButtonComponent,
    CustomCalendarComponent,
    CustomCheckboxComponent,
    CustomCheckboxListComponent,
    CustomCollapsibleComponent,
    CustomDatePickerComponent,
    CustomDropdownComponent,
    CustomFormComponent,
    CustomFormGroupComponent,
    CustomIconComponent,
    CustomInputComponent,
    CustomNavbarComponent,
    CustomRadioComponent,
    CustomSelectComponent,
    CustomSideNavComponent,
    CustomSwitchComponent,
    CustomTableComponent,
    CustomTextAreaComponent,
    CustomTooltipComponent,
    DivTreeComponent
  ],
  imports: [CommonModule]
})
export class ComponentsModule {}
