import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowEditComponent } from './workflow-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import * as fromWorkflows from '@app-workflows-store';
import {ActivatedRoute} from '@angular/router';
import {Actions} from '@ngrx/effects';
import {WorkflowsEffects} from '../store/effects/workflows-effects';
import {HttpClientModule} from '@angular/common/http';
import {WorkflowFormComponent} from '@app-core/components/workflow-form/workflow-form.component';
import {WorkflowsService} from '@app-core/services/workflows.service';
import * as fromRoot from '@app-root-store';


describe('WorkflowEditComponent', () => {
  let component: WorkflowEditComponent;
  let fixture: ComponentFixture<WorkflowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowEditComponent, WorkflowFormComponent ],
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
    fixture = TestBed.createComponent(WorkflowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
