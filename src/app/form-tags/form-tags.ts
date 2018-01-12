import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'form-tags',
    templateUrl: './form-tags.html',
    styleUrls: [
        './form-tags.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTagsComponent implements OnInit {
    @Input() items: any[] = [];
    @Output() onSelect: EventEmitter<any> = new EventEmitter()
    constructor(
        public cd: ChangeDetectorRef
    ) { }

    ngOnInit() { }

    select(item: any) {
        this.items.map(res => {
            res.active = false
        })
        item.active = true;
        console.log(item);
        this.onSelect.emit(item)
        this.cd.detectChanges();
    }
}