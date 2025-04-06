import { Injectable } from '@angular/core';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class GsapService {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  getGsap(): GSAP {
    return gsap;
  }
}
