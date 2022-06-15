import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepitoComponent } from './pepito.component';

describe('PepitoComponent', () => {
  let component: PepitoComponent;
  let fixture: ComponentFixture<PepitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PepitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
