import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[isSelect]' })
export class isSelectDirective {
    @Input()
    set isSelect(val: boolean) {
        if (this.ele) {
            setTimeout(()=>{
                if (val) {
                    this.render.setAttribute(this.ele.nativeElement, 'selected', 'selected');
                } else {
                    this.render.removeAttribute(this.ele.nativeElement, 'selected');
                }
            },300);
        }
    }
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) { }
}