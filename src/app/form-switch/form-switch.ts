import { Component, OnInit, Input } from '@angular/core';
import { UuidService } from 'meepo-uuid';

@Component({
    selector: 'form-switch',
    templateUrl: './form-switch.html',
    styleUrls: [
        './form-switch.scss'
    ]
})

export class FormSwitchComponent implements OnInit {
    @Input() model: any = {
        active: false
    };

    id: string;
    constructor(
        public uuid: UuidService
    ) { 
        this.id = this.uuid.v1();
    }

    ngOnInit() { }
}