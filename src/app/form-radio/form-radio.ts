import {
    Component, OnInit,
    Input, ContentChildren, AfterContentInit,
    QueryList, Output, EventEmitter
} from '@angular/core';
import { FormRadioItemComponent } from './form-radio-item/form-radio-item';
import { UuidService } from 'meepo-uuid';
import { FormRadioService } from './form-radio.service';
@Component({
    selector: 'form-radio',
    templateUrl: './form-radio.html',
    styleUrls: ['./form-radio.scss'],
    providers: [FormRadioService]
})
export class FormRadioComponent implements OnInit, AfterContentInit {
    @ContentChildren(FormRadioItemComponent) items: QueryList<FormRadioItemComponent>;
    name: string;

    _model: any;
    @Input() 
    set model(val: any){
        this._model = val;
    }
    get model(){
        return this._model;
    }
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    constructor(
        public uuid: UuidService,
        public radio: FormRadioService
    ) { 
        this.radio.change$.subscribe((e: any)=>{
            this.modelChange.emit(e.model);
        });
    }
    ngOnInit() { 
        this.name = this.uuid.v1();
    }

    ngAfterContentInit(){
        this.items.map(item=>{
            item.setName(this.name);
            console.log(item.model, this.model);
            if(this._model === item.model){
                item.setActive();
            }
        })
    }
}