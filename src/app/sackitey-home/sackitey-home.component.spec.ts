import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SackiteyHomeComponent } from './sackitey-home.component';

describe('SackiteyHomeComponent', () => {
  let component: SackiteyHomeComponent;
  let fixture: ComponentFixture<SackiteyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SackiteyHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SackiteyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
