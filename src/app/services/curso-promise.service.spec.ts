import { TestBed } from '@angular/core/testing';

import { CursoPromiseService } from './curso-promise.service';

describe('CursoPromiseService', () => {
  let service: CursoPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
