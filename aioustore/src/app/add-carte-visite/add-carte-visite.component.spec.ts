import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarteVisiteComponent } from './add-carte-visite.component';

describe('AddCarteVisiteComponent', () => {
  let component: AddCarteVisiteComponent;
  let fixture: ComponentFixture<AddCarteVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarteVisiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarteVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
