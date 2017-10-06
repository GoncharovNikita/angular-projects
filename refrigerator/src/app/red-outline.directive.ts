import { Directive, ElementRef, Input } from '@angular/core'

@Directive({
    selector: '[redOutline]'
}) 
export class RedOutlineDirective {
    @Input() 
    set redOutline(active: boolean){
        if (active) this.el.nativeElement.style.outline = "1px auto red"
        else this.el.nativeElement.style.outline = "none"
    }

    el: ElementRef

    constructor(el: ElementRef) {
        this.el = el 
    }
}