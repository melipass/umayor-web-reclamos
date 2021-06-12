import { TestBed } from '@angular/core/testing';

import { AuthenticatorGuard } from './authenticator.guard';

describe('AuthenticatorGuard', () => {
  let guard: AuthenticatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
