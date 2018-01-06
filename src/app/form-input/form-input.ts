import {
    Component, OnInit, ViewEncapsulation, Input,
    Output, EventEmitter, ViewChild, ElementRef,
    Renderer2
} from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'form-input',
    templateUrl: './form-input.html',
    styleUrls: ['./form-input.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormInputComponent {
    @Input() tip: '请输入内容'
    @Input()
    set model(val: string) {
        if (val) {
            this.form.get('val').setValue(val);
        }
    }
    @Input() type: string = 'text';
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    @ViewChild('input') _input: ElementRef;

    form: FormGroup;
    constructor(
        public fb: FormBuilder
    ) { 
        this.form = this.fb.group({
            val: ''
        });
        this.form.get('val').valueChanges.subscribe(res=>{
            this.modelChange.emit(res);
        })
    }
}
