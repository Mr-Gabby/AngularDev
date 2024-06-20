import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SackiteyAboutComponent } from './sackitey-about.component';

describe('SackiteyAboutComponent', () => {
  let component: SackiteyAboutComponent;
  let fixture: ComponentFixture<SackiteyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SackiteyAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SackiteyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
