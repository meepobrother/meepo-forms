import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddressComponent } from './form-address/form-address';
import { FormRootComponent } from './form-root/form-root';
import { FormRowComponent } from './form-row/form-row';
import { FormInputComponent } from './form-input/form-input';

export const formsComponents = [
    FormAddressComponent,
    FormRootComponent,
    FormRowComponent,
    FormInputComponent
];
import { UuidModule } from 'meepo-uuid';
import { MeepoBmapModule } from 'meepo-bmap';

@NgModule({
    declarations: [
        ...formsComponents
    ],
    imports: [
        CommonModule,
        MeepoBmapModule
    ],
    exports: [
        ...formsComponents
    ],
    providers: [],
})
export class MeepoFormsModule { }
