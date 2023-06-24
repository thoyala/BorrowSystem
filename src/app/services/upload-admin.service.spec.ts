import { TestBed } from '@angular/core/testing';

import { UploadAdminService } from './upload-admin.service';

describe('UploadAdminService', () => {
  let service: UploadAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
