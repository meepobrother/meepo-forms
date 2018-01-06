import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddressComponent } from './form-address/form-address';
import { FormRootComponent } from './form-root/form-root';
import { FormRowComponent } from './form-row/form-row';
import { FormInputComponent } from './form-input/form-input';
import { FormTextareaComponent } from './form-textarea/form-textarea';
import { FormImageComponent } from './form-image/form-image';

import { FormRadioComponent } from './form-radio/form-radio';
import { FormRadioItemComponent } from './form-radio/form-radio-item/form-radio-item';

import { FormCheckboxComponent } from './form-checkbox/form-checkbox';
import { FormCheckboxItemComponent } from './form-checkbox/form-checkbox-item/form-checkbox-item';

import { FormSelectComponent } from './form-select/form-select';
import { isSelectDirective } from './form-select/isSelect';
import { FormSwitchComponent } from './form-switch/form-switch';
import { FormTagsComponent } from './form-tags/form-tags';


export const formsComponents = [
    FormAddressComponent,
    FormRootComponent,
    FormRowComponent,
    FormInputComponent,
    FormTextareaComponent,
    FormImageComponent,
    FormRadioComponent,
    FormRadioItemComponent,
    FormCheckboxComponent,
    FormSelectComponent,
    FormSwitchComponent,
    FormCheckboxItemComponent,
    isSelectDirective,
    FormTagsComponent
];

import { UuidModule } from 'meepo-uuid';
import { MeepoBmapModule } from 'meepo-bmap';
import { AutoSizeModule } from 'meepo-autosize';
import { UploaderModule } from 'meepo-uploader';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ...formsComponents
    ],
    imports: [
        CommonModule,
        MeepoBmapModule,
        AutoSizeModule,
        UploaderModule,
        UuidModule,
        ReactiveFormsModule
    ],
    exports: [
        ...formsComponents
    ],
    providers: [],
})
export class MeepoFormsModule { }
