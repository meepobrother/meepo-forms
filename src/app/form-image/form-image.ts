import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'form-image',
    templateUrl: './form-image.html',
    styleUrls: ['./form-image.scss']
})
export class FormImageComponent implements OnInit {
    currentLength: number = 0;
    @Input() max: number = 6;
    @Input() model: any[] = [];
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    constructor() { }
    ngOnInit() { }
}