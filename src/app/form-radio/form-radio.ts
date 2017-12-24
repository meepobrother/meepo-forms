import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'form-radio',
    templateUrl: './form-radio.html',
    styleUrls: [
        './form-radio.scss'
    ]
})

export class FormRadioComponent implements OnInit {
    @Input() items: any[] = [];
    constructor() { }

    ngOnInit() { }
}