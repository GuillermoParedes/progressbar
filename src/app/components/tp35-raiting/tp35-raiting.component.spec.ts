import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp35RaitingComponent } from './tp35-raiting.component';

describe('Tp35RaitingComponent', () => {
  let component: Tp35RaitingComponent;
  let fixture: ComponentFixture<Tp35RaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tp35RaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tp35RaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
