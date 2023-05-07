import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowEquipComponent } from './borrow-equip.component';

describe('BorrowEquipComponent', () => {
  let component: BorrowEquipComponent;
  let fixture: ComponentFixture<BorrowEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowEquipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
