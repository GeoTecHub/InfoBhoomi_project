import { TestBed } from '@angular/core/testing';

import { GeometryServicesService } from './geometry-services.service';

describe('GeometryServicesService', () => {
  let service: GeometryServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeometryServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
