import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnEquipComponent } from './return-equip.component';

describe('ReturnEquipComponent', () => {
  let component: ReturnEquipComponent;
  let fixture: ComponentFixture<ReturnEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnEquipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
