import { Component, OnInit, ElementRef, Renderer2, ViewChild, Input } from '@angular/core';
import { UuidService } from 'meepo-uuid';
import { FormCheckboxService } from '../form-checkbox.service';
@Component({
    selector: 'form-checkbox-item',
    templateUrl: './form-checkbox-item.html'
})

export class FormCheckboxItemComponent implements OnInit {
    id: string;
    active: boolean = false;
    @ViewChild('checkbox') checkbox: ElementRef;
    @Input() model: any;
    constructor(
        public uuid: UuidService,
        public render: Renderer2,
        public form: FormCheckboxService
    ) {
        this.id = this.uuid.v1();
    }

    ngOnInit() { }

    _change() {
        this.active = !this.active;
        this.form.setValue(this);
    }

    setActive() {
        this.active = true;
        this.render.setAttribute(this.checkbox.nativeElement, 'checked', 'true');
    }

    setUnActive() {
        this.active = false;
        this.render.removeAttribute(this.checkbox.nativeElement, 'checked');
    }
}