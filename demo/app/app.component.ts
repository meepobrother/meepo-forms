import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  checkboxs: any[] = ["1"];

  selects: any[] = [{
    title: '1',
    value: 1
  },{
    title: '2',
    value: 2,
    active: true
  }];
  constructor() {}
  ngOnInit(){}

  change(e: any){
    console.log(e);
  }
}
