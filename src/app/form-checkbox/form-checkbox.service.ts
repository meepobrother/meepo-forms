import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FormCheckboxService {
    change$: Subject<any> = new Subject();
    constructor() { }

    setValue(e: any) {
        this.change$.next(e);
    }
}