/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PastesService } from './pastes.service';

describe('CommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastesService]
    });
  });

  it('should ...', inject([PastesService], (service: PastesService) => {
    expect(service).toBeTruthy();
  }));
});
