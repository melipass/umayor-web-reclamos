import { TestBed } from '@angular/core/testing';

import { ReclamosService } from './reclamos.service';

describe('ReclamosService', () => {
  let service: ReclamosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
