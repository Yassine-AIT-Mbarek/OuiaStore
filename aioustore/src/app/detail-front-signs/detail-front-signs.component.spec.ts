import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFrontSignsComponent } from './detail-front-signs.component';

describe('DetailFrontSignsComponent', () => {
  let component: DetailFrontSignsComponent;
  let fixture: ComponentFixture<DetailFrontSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFrontSignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFrontSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
