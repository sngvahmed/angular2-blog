import {Directive , ElementRef , Renderer , HostListener} from 'angular2/core';

@Directive({
    selector : '[onMouseHoverDirective]',
    
})
export class OnMouseHoverDirective{
    constructor(private elementRef : ElementRef ,private render : Renderer){
      console.log(elementRef.nativeElement , render);
    }

    @HostListener ('mouseenter') onMouseEnter(){
        console.log("mouse enter" , this.render);
        this.render.setElementClass(this.elementRef.nativeElement , 'mouse.enter.directive.class' , true);
    }

    @HostListener ('mouseleave') onMouseLeave(){
        console.log("mouse leave" , this.render);
        this.render.setElementClass(this.elementRef.nativeElement , 'mouse.enter.directive.class' , false);
    }
}
