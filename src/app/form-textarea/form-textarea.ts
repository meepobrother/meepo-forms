import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'form-textarea',
    templateUrl: './form-textarea.html',
    styleUrls: ['./form-textarea.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormTextareaComponent implements OnInit {
    @Input() tip: string;
    @Input() model: any;
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    constructor() { }
    ngOnInit() { }
}
