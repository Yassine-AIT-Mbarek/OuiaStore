import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesClientsComponent } from './liste-des-clients.component';

describe('ListeDesClientsComponent', () => {
  let component: ListeDesClientsComponent;
  let fixture: ComponentFixture<ListeDesClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
