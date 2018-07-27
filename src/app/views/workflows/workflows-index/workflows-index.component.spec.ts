import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromRoot from '@app-root-store';
import * as fromWorkflows from '@app-workflows-store';
import { WorkflowsIndexComponent } from './workflows-index.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';
import {WorkflowListComponent} from '@app-core/components/workflow-list/workflow-list.component';


describe('WorkflowsIndexComponent', () => {
  let component: WorkflowsIndexComponent;
  let fixture: ComponentFixture<WorkflowsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [ WorkflowsIndexComponent, WorkflowListComponent ],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'workflows': combineReducers(fromWorkflows.reducers)
        }),
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
