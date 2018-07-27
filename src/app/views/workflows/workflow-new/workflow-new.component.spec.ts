import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowNewComponent } from './workflow-new.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromWorkflows from '@app-workflows-store';
import {RouterTestingModule} from '@angular/router/testing';
import {Actions} from '@ngrx/effects';
import {WorkflowsEffects} from '../store/effects/workflows-effects';
import {HttpClientModule} from '@angular/common/http';
import {WorkflowFormComponent} from '@app-core/components/workflow-form/workflow-form.component';
import {WorkflowsService} from '@app-core/services/workflows.service';
import * as fromRoot from '@app-root-store';


describe('WorkflowNewComponent', () => {
  let component: WorkflowNewComponent;
  let fixture: ComponentFixture<WorkflowNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowNewComponent, WorkflowFormComponent ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'workflows': combineReducers(fromWorkflows.reducers)
        }),
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        WorkflowsEffects,
        Actions,
        WorkflowsService,
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
