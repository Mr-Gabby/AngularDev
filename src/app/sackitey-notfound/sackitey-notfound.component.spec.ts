import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SackiteyNotfoundComponent } from './sackitey-notfound.component';

describe('SackiteyNotfoundComponent', () => {
  let component: SackiteyNotfoundComponent;
  let fixture: ComponentFixture<SackiteyNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SackiteyNotfoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SackiteyNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
