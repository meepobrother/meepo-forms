import {
    Component, OnInit, Input,
    Output, EventEmitter,
    ViewEncapsulation, ChangeDetectionStrategy,
    ChangeDetectorRef
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
    @Input() model: any = {
        active: false
    };

    @Input() modelChange: EventEmitter<any> = new EventEmitter();

    id: string;
    constructor(
        public uuid: UuidService,
        public cd: ChangeDetectorRef
    ) {
        this.id = this.uuid.v1();
    }

    ngOnInit() { }

    _change(e: any) {
        this.model.active = !this.model.active;
        this.modelChange.emit({
            active: e.target.value
        });
        this.cd.markForCheck();
    }
}