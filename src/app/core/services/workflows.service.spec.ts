import { TestBed, inject } from '@angular/core/testing';

import { WorkflowsService } from './workflows.service';
import {HttpClientModule} from '@angular/common/http';


describe('WorkflowsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowsService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([WorkflowsService], (service: WorkflowsService) => {
    expect(service).toBeTruthy();
  }));
});
