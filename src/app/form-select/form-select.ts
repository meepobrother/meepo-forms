import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'form-select',
    templateUrl: './form-select.html',
    styleUrls: ['./form-select.scss']
})

export class FormSelectComponent implements OnInit {
    _items: any[] = [];
    @Input()
    set items(val: any[]) {
        this._items = val;
        this.setDefault();
    }
    get items() {
        return this._items;
    }
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    active: any = {
        value: 0
    };
    constructor() { }

    ngOnInit() { }

    setDefault() {
        this._items.map(res => {
            if (res.active) {
                this.active = res;
            }
        });
    }

    _change(e: any) {
        let value = e.target.value;
        this.items.map(res => {
            if (res.value === value) {
                this.modelChange.next(res);
            }
        });
    }
}