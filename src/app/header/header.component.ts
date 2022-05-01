import { Component, HostBinding, OnInit, ChangeDetectorRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

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

  constructor(public overlay: OverlayContainer, public dialog: MatDialog, private cdr: ChangeDetectorRef) {}
  
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
