import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'form-select',
    templateUrl: './form-select.html',
    styleUrls: ['./form-select.scss']
})

export class FormSelectComponent implements OnInit {
    @Input() items: any[] = [];

    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    _change(e: any) {
        let value = e.target.value;
        this.items.map(res => {
            if (res.value === value) { 
                this.modelChange.next(res);
            }
        });
    }
}