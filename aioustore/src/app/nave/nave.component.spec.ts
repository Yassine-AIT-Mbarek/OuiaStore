import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAVEComponent } from './nave.component';

describe('NAVEComponent', () => {
  let component: NAVEComponent;
  let fixture: ComponentFixture<NAVEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NAVEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NAVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
