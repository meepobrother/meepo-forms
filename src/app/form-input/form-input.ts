import {
    Component, OnInit, ViewEncapsulation, Input,
    Output, EventEmitter, ViewChild, ElementRef,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'form-input',
    templateUrl: './form-input.html',
    styleUrls: ['./form-input.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormInputComponent implements OnInit {
    @Input() tip: '请输入内容'
    @Input()
    set model(val: string) {
        if (val) {
            this._input.nativeElement.value = val;
        }
    }
    get model() {
        let value = this._input.nativeElement.value;
        value = value || '';
        return value;
    }

    _type: string = 'text';
    @Input()
    set type(val: string) {
        this._type = val;
    }
    get type() {
        return this._type;
    }
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    @ViewChild('input') _input: ElementRef;
    constructor() { }
    ngOnInit() { }
    _change() {
        this.model = this._input.nativeElement.value;
        this.modelChange.emit(this.model);
    }

    _changeReal(){
        this.model = this._input.nativeElement.value;
        this.modelChange.emit(this.model);
    }
}
