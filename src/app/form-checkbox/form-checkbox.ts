import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'form-checkbox',
    templateUrl: './form-checkbox.html',
    styleUrls: ['./form-checkbox.scss']
})

export class FormCheckboxComponent implements OnInit {
    @Input() items: any[] = [];
    constructor() { }

    ngOnInit() { }
}