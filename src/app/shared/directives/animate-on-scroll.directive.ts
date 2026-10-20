import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { AnimationService } from '../../services/animation.service';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animationType: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' = 'fade';
  @Input() animationDelay = 0;

  constructor(
    private element: ElementRef,
    private animationService: AnimationService
  ) {}

  ngOnInit(): void {
    // Ajouter la classe initiale
    this.element.nativeElement.classList.add('animate-element');
    this.element.nativeElement.classList.add(`animate-${this.animationType}`);
    
    if (this.animationDelay > 0) {
      this.element.nativeElement.style.animationDelay = `${this.animationDelay}ms`;
    }

    // Observer l'élément
    this.animationService.observeElement(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.animationService.unobserveElement(this.element.nativeElement);
  }
}