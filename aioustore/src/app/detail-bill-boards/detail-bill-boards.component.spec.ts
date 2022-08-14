import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBillBoardsComponent } from './detail-bill-boards.component';

describe('DetailBillBoardsComponent', () => {
  let component: DetailBillBoardsComponent;
  let fixture: ComponentFixture<DetailBillBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBillBoardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBillBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
