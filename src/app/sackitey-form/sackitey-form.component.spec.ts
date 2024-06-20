import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SackiteyFormComponent } from './sackitey-form.component';

describe('SackiteyFormComponent', () => {
  let component: SackiteyFormComponent;
  let fixture: ComponentFixture<SackiteyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SackiteyFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SackiteyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
