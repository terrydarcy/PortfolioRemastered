import { Component, HostBinding, OnInit, ChangeDetectorRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ScrollToService } from '../services/scroll-to.service';
import { scrollToEnum } from '../models/Interfaces';
var scrollToElement = require('scroll-to-element');
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = false;
  faCode = faCode as IconProp;
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';
  parentRef = this.overlay.getContainerElement().parentElement;
  darkModeLocal: boolean = localStorage.getItem('darkMode') === 'true' ? true : false;
  scrollToEnum = scrollToEnum;
  isProduction: boolean = false;

  constructor(public overlay: OverlayContainer, public dialog: MatDialog, private cdr: ChangeDetectorRef, private ScrollToService: ScrollToService) {
    this.isProduction = environment.production;
  }
  
  ngOnInit(): void {
    this.setDarkModeFromLocalStorage();
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode && this.parentRef) {
        this.isDarkMode = true;
        this.parentRef.classList.add(darkClassName);
        localStorage.setItem('darkMode', 'true');
      } else if (this.parentRef) {
        this.isDarkMode = false;
        this.parentRef.classList.remove(darkClassName);
        localStorage.setItem('darkMode', 'false');
      }
    });
    this.cdr.detectChanges();
  }
  
  setScrollToSubject(value: string) {
    this.ScrollToService.scrollToSubject.next(value);
  }

  resetScroll() {
    let body = document.getElementsByTagName('body')[0];
    scrollToElement(body, { offset: -70, ease: 'inQuad', duration: 300 });
  }

  setDarkModeFromLocalStorage = () => {
    if (this.darkModeLocal && this.parentRef) {
      this.cdr.detectChanges();
      this.toggleControl.setValue(this.darkModeLocal);
      this.parentRef.classList.add('darkMode');
      this.isDarkMode = true;
    } else if (this.parentRef) {
      this.parentRef.classList.remove('darkMode');
      this.isDarkMode = false;
    }
  };
}
