import { Component, OnInit, forwardRef, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormTagsComponent),
    multi: true
};
@Component({
    selector: 'form-tags',
    templateUrl: './form-tags.html',
    styleUrls: [
        './form-tags.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        EXE_COUNTER_VALUE_ACCESSOR
    ]
})
export class FormTagsComponent implements ControlValueAccessor {
    @Input() items: any[] = [];
    _model: any;
    set model(val) {
        this._model = val;
        this.propagateChange(this._model);
    }
    get model() {
        return this._model;
    }
    constructor(
        public cd: ChangeDetectorRef
    ) { }

    ngOnInit() { }

    select(item: any) {
        this.items.map(res => {
            res.active = false
        })
        item.active = true;
        this.model = item;
        this.cd.detectChanges();
    }

    propagateChange = (_: any) => { };

    writeValue(value: any) {
        if (value) {
            this.model = value;
        }
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }

}