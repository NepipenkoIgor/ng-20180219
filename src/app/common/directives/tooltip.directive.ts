import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

  @HostBinding('class.tooltip-container')
  public tooltipContainer = true;

  // @HostListener('click', ['$event'])
  // public exampleEvent(e: MouseEvent) {
  //   console.log(e);
  // }


  private _tooltipContext = document.createElement('div');

  @Input()
  public set appTooltip(value: string) {
    if (!value) {
      return;
    }

    this._tooltipContext.textContent = value;

  }

  constructor(private _elementRef: ElementRef) {
  }

  public ngOnInit(): void {
    this._tooltipContext.className = 'tooltip';
    this._elementRef.nativeElement.appendChild(this._tooltipContext);
  }

  public hide(): void {
    this._tooltipContext.classList.remove('tooltip-active');
  }

  public show(): void {
    this._tooltipContext.classList.add('tooltip-active');
  }

}
