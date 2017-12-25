import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddressComponent } from './form-address/form-address';
import { FormRootComponent } from './form-root/form-root';
import { FormRowComponent } from './form-row/form-row';
import { FormInputComponent } from './form-input/form-input';
import { FormTextareaComponent } from './form-textarea/form-textarea';
import { FormImageComponent } from './form-image/form-image';

import { FormRadioComponent } from './form-radio/form-radio';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox';
import { FormSelectComponent } from './form-select/form-select';
import { FormSwitchComponent } from './form-switch/form-switch';

export const formsComponents = [
    FormAddressComponent,
    FormRootComponent,
    FormRowComponent,
    FormInputComponent,
    FormTextareaComponent,
    FormImageComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    FormSelectComponent,
    FormSwitchComponent
];

import { UuidModule } from 'meepo-uuid';
import { MeepoBmapModule } from 'meepo-bmap';
import { AutoSizeModule } from 'meepo-autosize';
import { UploaderModule } from 'meepo-uploader';

@NgModule({
    declarations: [
        ...formsComponents
    ],
    imports: [
        CommonModule,
        MeepoBmapModule.forRoot(),
        AutoSizeModule,
        UploaderModule,
        UuidModule
    ],
    exports: [
        ...formsComponents
    ],
    providers: [],
})
export class MeepoFormsModule { }
