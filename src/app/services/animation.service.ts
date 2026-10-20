import { Injectable, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private intersectionObserver?: IntersectionObserver;

  constructor() {
    this.setupIntersectionObserver();
  }

  // Observer pour les animations au scroll
  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver !== 'undefined') {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              entry.target.classList.remove('animate-out');
            } else {
              entry.target.classList.remove('animate-in');
              entry.target.classList.add('animate-out');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );
    }
  }

  // Observer un élément pour les animations au scroll
  observeElement(element: Element): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.observe(element);
    }
  }

  // Arrêter d'observer un élément
  unobserveElement(element: Element): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.unobserve(element);
    }
  }

  // Observable pour la position de scroll
  getScrollPosition(): Observable<number> {
    return fromEvent(window, 'scroll').pipe(
      throttleTime(16), // ~60fps
      map(() => window.pageYOffset)
    );
  }

  // Observable pour la progression de scroll
  getScrollProgress(): Observable<number> {
    return this.getScrollPosition().pipe(
      map(scrollY => {
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        return Math.min(scrollY / documentHeight * 100, 100);
      })
    );
  }

  // Animations utilitaires
  fadeIn(element: HTMLElement, duration = 300): void {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
    }, 10);
  }

  slideIn(element: HTMLElement, direction: 'left' | 'right' | 'up' | 'down' = 'up', duration = 300): void {
    const transforms = {
      left: 'translateX(-20px)',
      right: 'translateX(20px)',
      up: 'translateY(20px)',
      down: 'translateY(-20px)'
    };

    element.style.opacity = '0';
    element.style.transform = transforms[direction];
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translate(0)';
    }, 10);
  }

  // Animation de typing effect
  typeWriter(element: HTMLElement, text: string, speed = 50): Promise<void> {
    return new Promise((resolve) => {
      element.textContent = '';
      let i = 0;
      
      const typing = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typing, speed);
        } else {
          resolve();
        }
      };
      
      typing();
    });
  }

  // Animation de compteur
  counterAnimation(element: HTMLElement, start: number, end: number, duration = 2000): void {
    const range = end - start;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + range * easeOut);
      
      element.textContent = current.toString();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  // Cleanup
  destroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}