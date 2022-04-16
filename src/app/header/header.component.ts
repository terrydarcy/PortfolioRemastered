import { Component, HostBinding, OnInit, ChangeDetectorRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  toggleControl = new FormControl(false);
  user: any = false;
  parentRef = this.overlay.getContainerElement().parentElement;
  isDarkMode: boolean = false;

  @HostBinding('class') className = '';
  darkModeLocal: boolean =
    localStorage.getItem('darkMode') === 'true' ? true : false;

  constructor(public overlay: OverlayContainer, public dialog: MatDialog, private cdr: ChangeDetectorRef) {
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

  // manualToggle() {
  //   console.log(this.toggleControl.value);
  //   switch (this.toggleControl.value) {
  //     case true:
  //       this.toggleControl.setValue(false);
  //       break;
  //       case false:
  //         this.toggleControl.setValue(true);
  //         break;
  //       }
  //       this.cdr.detectChanges();
  //       console.log(this.toggleControl.value);
  // }

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
