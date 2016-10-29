import {Directive , ElementRef , Renderer} from 'angular2/core';

@Directive({
    selector : '[autoGrow]',
    host : {
        '(focus)' : 'onFocus()',
        '(blur)' : 'onBlur()'
    }
})
export class AutoGrowDirective{
    // _el : ElementRef;
    // _render : Renderer;

    constructor(private elementRef : ElementRef ,private render : Renderer){
        // this._el = elementRef;
        // this._render = render;
    }

    onFocus(){
        this.render.setElementStyle(this.elementRef.nativeElement , 'width' , '300');
    }   

    onBlur(){
        this.render.setElementStyle(this.elementRef.nativeElement , 'width' , '120');
    }
}