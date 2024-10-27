/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeetService } from './meet.service';

describe('Service: Meet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetService]
    });
  });

  it('should ...', inject([MeetService], (service: MeetService) => {
    expect(service).toBeTruthy();
  }));
});
