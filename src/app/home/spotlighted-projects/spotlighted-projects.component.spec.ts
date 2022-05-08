import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightedProjectsComponent } from './spotlighted-projects.component';

describe('SpotlightedProjectsComponent', () => {
  let component: SpotlightedProjectsComponent;
  let fixture: ComponentFixture<SpotlightedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotlightedProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
