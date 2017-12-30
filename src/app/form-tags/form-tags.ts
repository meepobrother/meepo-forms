import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'form-tags',
    templateUrl: './form-tags.html',
    styleUrls: [
        './form-tags.scss'
    ]
})
export class FormTagsComponent implements OnInit {
    @Input() items: any[] = [];
    @Output() onSelect: EventEmitter<any> = new EventEmitter()
    constructor() { }

    ngOnInit() { }

    select(item: any) {
        this.items.map(res => {
            res.active = false
        })
        item.active = true;
        this.onSelect.emit(item)
    }
}