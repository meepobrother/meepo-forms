import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddressComponent } from './form-address/form-address';
import { FormRootComponent } from './form-root/form-root';
import { FormRowComponent } from './form-row/form-row';
import { FormInputComponent } from './form-input/form-input';
import { FormTextareaComponent } from './form-textarea/form-textarea';
import { FormImageComponent } from './form-image/form-image';


export const formsComponents = [
    FormAddressComponent,
    FormRootComponent,
    FormRowComponent,
    FormInputComponent,
    FormTextareaComponent,
    FormImageComponent
];

import { UuidModule } from 'meepo-uuid';
import { MeepoBmapModule } from 'meepo-bmap';
import { AutoSizeModule } from 'meepo-autosize';
@NgModule({
    declarations: [
        ...formsComponents
    ],
    imports: [
        CommonModule,
        MeepoBmapModule,
        AutoSizeModule
    ],
    exports: [
        ...formsComponents
    ],
    providers: [],
})
export class MeepoFormsModule { }
