import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  scrollToSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  getScrollToSubject() {
    return this.scrollToSubject.asObservable();
  }
}
