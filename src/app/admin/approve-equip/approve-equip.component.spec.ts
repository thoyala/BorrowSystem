import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveEquipComponent } from './approve-equip.component';

describe('ApproveEquipComponent', () => {
  let component: ApproveEquipComponent;
  let fixture: ComponentFixture<ApproveEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveEquipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
