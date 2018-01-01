import {
    Component, OnInit, ViewEncapsulation, Input, Output,
    EventEmitter, ViewChild, ElementRef
} from '@angular/core';

@Component({
    selector: 'form-textarea',
    templateUrl: './form-textarea.html',
    styleUrls: ['./form-textarea.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormTextareaComponent implements OnInit {
    @Input() tip: string;
    @Input() model: string = '';
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    @Input() max: number = 200;
    @ViewChild('textarea') _textarea: ElementRef;
    constructor() { }
    ngOnInit() {
        this._textarea.nativeElement.value = this.model;
    }

    _change() {
        this.model = this._textarea.nativeElement.value;
        this.model = this.model.substr(0, this.max);
        this.modelChange.emit(this.model);
    }
}
