import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class NgrxService {
    state: Model = new Model();
    state$: Subject<any> = new Subject();
    constructor() { }

    get<T>(): Observable<T> {
        return this.state$.asObservable();
    }

    dispatch(action: Action): void {
        let { type, payload } = action;
        let types = type.split('.');
        let _model = types[0];
        let _do = types[1];
        
        this.state$.next(action);
    }
}

export class Model {
    state: any;
}

export class addModel {
    state: number = 0;
    add(payload: number) {
        this.state++;
    }
    red(payload: number) {
        this.state--;
    }
}

export interface Action {
    type: string;
    payload?: any;
}