import { TestBed } from '@angular/core/testing';

import { ControllerApiService } from './controller-api.service';

describe('ControllerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControllerApiService = TestBed.get(ControllerApiService);
    expect(service).toBeTruthy();
  });
});
