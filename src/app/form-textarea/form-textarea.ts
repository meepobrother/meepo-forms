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
    ngOnInit() { }

    _change() {
        this.model = this._textarea.nativeElement.value;
        this.modelChange.emit(this.model);
    }
}
