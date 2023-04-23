import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBorrowComponent } from './show-borrow.component';

describe('ShowBorrowComponent', () => {
  let component: ShowBorrowComponent;
  let fixture: ComponentFixture<ShowBorrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBorrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
