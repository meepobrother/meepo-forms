import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'form-root',
    templateUrl: './form-root.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './form-root.scss'
    ]
})
export class FormRootComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
