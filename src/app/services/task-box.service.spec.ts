import { TestBed } from '@angular/core/testing';

import { TaskBoxService } from './task-box.service';

describe('TaskBoxService', () => {
  let service: TaskBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
