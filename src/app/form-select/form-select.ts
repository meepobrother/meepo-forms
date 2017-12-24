import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'form-select',
    templateUrl: './form-select.html',
    styleUrls: ['./form-select.scss']
})

export class FormSelectComponent implements OnInit {
    @Input() items: any[] = [];
    constructor() { }

    ngOnInit() { }
}