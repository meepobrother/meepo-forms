import {
    Component, OnInit, Input,
    ChangeDetectionStrategy, ChangeDetectorRef,
    Output, EventEmitter, ViewChild, ElementRef,
    Renderer2
} from '@angular/core';
import { UuidService } from 'meepo-uuid';
import { FormRadioService } from '../form-radio.service';

@Component({
    selector: 'form-radio-item',
    templateUrl: './form-radio-item.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FormRadioItemComponent implements OnInit {
    id: string;
    @Input() model: boolean = false;
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    name: string;
    active: boolean = false;

    @ViewChild('radio') _radio: ElementRef;
    constructor(
        public uuid: UuidService,
        public cd: ChangeDetectorRef,
        public radio: FormRadioService,
        public render: Renderer2
    ) {
        this.id = this.uuid.v1();
    }

    ngOnInit() {

    }

    setName(name: string) {
        this.name = name;
    }

    _change() {
        this.radio.setValue(this);
    }

    setActive() {
        this.render.setAttribute(this._radio.nativeElement, 'checked', 'true');
    }

    setUnActive() {
        this.render.removeAttribute(this._radio.nativeElement, 'checked');
    }
}