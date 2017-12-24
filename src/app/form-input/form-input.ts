import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'form-input',
    templateUrl: './form-input.html',
    styleUrls: ['./form-input.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormInputComponent implements OnInit {
    @Input() widget: any = {
        title: '标题',
        tip: '请输入内容'
    };
    @Input() model: any;
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    @ViewChild('input') _input: ElementRef;
    constructor() { }
    ngOnInit() { }
    _change(){
        this.model = this._input.nativeElement.value;
        this.modelChange.emit(this.model);
    }
}
