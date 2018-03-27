import { TestBed, inject } from '@angular/core/testing';

import { RxjsExampleService } from './rxjs-example.service';

describe('RxjsExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxjsExampleService]
    });
  });

  it('should be created', inject([RxjsExampleService], (service: RxjsExampleService) => {
    expect(service).toBeTruthy();
  }));
});
