import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BmapAddressSelectService } from 'meepo-bmap';
import { UuidService } from 'meepo-uuid';
@Component({
    selector: 'form-address',
    templateUrl: './form-address.html',
    styleUrls: ['./form-address.scss']
})
export class FormAddressComponent implements OnInit {
    @Input() tip: any;
    @Input() model: any = {};
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    time: any = new Date().getTime();
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public bmap: BmapAddressSelectService,
        public uuid: UuidService
    ) {
        this.time = this.uuid.v1();
        this.bmap.show$.subscribe(res => {
            if (res.data) {
                if(this.time === res.sn){
                    this.model = res.data;
                    this.modelChange.emit(res.data);
                }
            }
        });
    }
    ngOnInit() { }

    selectAddress() {
        this.onSelect.emit();
    }
}