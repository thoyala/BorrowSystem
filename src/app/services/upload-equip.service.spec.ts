import { TestBed } from '@angular/core/testing';

import { UploadEquipService } from './upload-equip.service';

describe('UploadEquipService', () => {
  let service: UploadEquipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadEquipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
