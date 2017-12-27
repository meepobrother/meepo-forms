import {
    Component, OnInit, Input,
    Output, EventEmitter,
    ViewEncapsulation, ChangeDetectionStrategy,
    ChangeDetectorRef, ViewChild, ElementRef, Renderer2
} from '@angular/core';
import { UuidService } from 'meepo-uuid';

@Component({
    selector: 'form-switch',
    templateUrl: './form-switch.html',
    styleUrls: ['./form-switch.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormSwitchComponent implements OnInit {
    _model: boolean = false;
    @Input()
    set model(val: boolean) {
        this._model = val;
        if (this._model) {
            this.setActive();
        } else {
            this.setUnActive();
        }
    }
    @Output() modelChange: EventEmitter<any> = new EventEmitter();

    id: string;
    @ViewChild('checkbox') checkbox: ElementRef;
    constructor(
        public uuid: UuidService,
        public cd: ChangeDetectorRef,
        public render: Renderer2
    ) {
        this.id = this.uuid.v1();
    }

    ngOnInit() { }

    _change() {
        this._model = !this._model;
        this.modelChange.emit(this._model);
        this.cd.markForCheck();
        if (this._model) {
            this.setActive();
        } else {
            this.setUnActive();
        }
    }

    setActive() {
        if (this.checkbox) {
            this.render.setAttribute(this.checkbox.nativeElement, 'checked', 'true');
        }
    }

    setUnActive() {
        if (this.checkbox) {
            this.render.removeAttribute(this.checkbox.nativeElement, 'checked');
        }
    }
}