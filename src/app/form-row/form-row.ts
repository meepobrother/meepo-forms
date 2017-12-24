import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'form-row',
    templateUrl: './form-row.html',
    styleUrls: ['./form-row.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormRowComponent implements OnInit {
    @Input() title: string;
    constructor() { }

    ngOnInit() { }
}
