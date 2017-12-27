import {
    Component, OnInit, Input, ContentChildren,
    QueryList, Output, EventEmitter,
    ChangeDetectionStrategy, ChangeDetectorRef, AfterContentInit
} from '@angular/core';
import { FormCheckboxItemComponent } from './form-checkbox-item/form-checkbox-item';
import { FormCheckboxService } from './form-checkbox.service';
@Component({
    selector: 'form-checkbox',
    templateUrl: './form-checkbox.html',
    styleUrls: ['./form-checkbox.scss'],
    providers: [
        FormCheckboxService
    ]
})

export class FormCheckboxComponent implements OnInit, AfterContentInit {
    @ContentChildren(FormCheckboxItemComponent) items: QueryList<FormCheckboxItemComponent>;

    _model: any[] = [];
    @Input()
    set model(val: any[]) {
        this._model = val;
        this.setActive();
    }
    get model() {
        return this._model;
    }
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    constructor(
        public cd: ChangeDetectorRef,
        public form: FormCheckboxService
    ) {
        this.form.change$.subscribe(res => {
            let index = this.model.indexOf(res.model);
            if (index === -1) {
                this.model.push(res.model);
            } else {
                if (!res.active) {
                    this.model.splice(index, 1);
                }
            }
            this.modelChange.emit(this.model);
        });
    }

    ngOnInit() { }

    ngAfterContentInit() { 
        this.setActive();
    }

    setActive() {
        if(this.items){
            this.items.map(res => {
                this._model.map(model => {
                    if (res.model === model) {
                        res.setActive();
                    }
                });
            });
        }
    }
}