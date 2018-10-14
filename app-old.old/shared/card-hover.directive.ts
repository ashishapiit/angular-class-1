import { Directive, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[card-hover]'
})
export class CardHoverDirective{
  @HostBinding('class.className-added')
  private isHovering: boolean;

  @Input('card-hover') cardColor: string;

  constructor(private el: ElementRef){
    //el.nativeElement.style.backgroundColor = "grey";
  }
  @HostListener('mouseover')
  onHover(){
    this.el.nativeElement.style.color = this.cardColor;
    this.isHovering = true;
  }
  @HostListener('mouseout')
  onOut(){
    this.el.nativeElement.style.color = "red";
    this.isHovering = false;
  }


}
