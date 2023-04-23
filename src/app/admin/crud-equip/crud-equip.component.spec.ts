import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEquipComponent } from './crud-equip.component';

describe('CrudEquipComponent', () => {
  let component: CrudEquipComponent;
  let fixture: ComponentFixture<CrudEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEquipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
