import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

import {
  WorkflowsActionTypes,
  Create,
  CreateSuccess,
  Delete,
  DeleteSuccess,
  Failure,
  Load,
  LoadAll,
  LoadAllSuccess,
  LoadSuccess,
  Patch,
  PatchSuccess
} from '../actions/workflows-actions';

import {Actions, Effect, ofType} from '@ngrx/effects';
import { Workflow } from '@app-core/models';
import {WorkflowsService} from '@app-core/services/workflows.service';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Injectable()
export class WorkflowsEffects {

  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
      ofType(WorkflowsActionTypes.LOAD_ALL), /* When [Workflows] LOAD ALL action is dispatched */
      startWith(new LoadAll()),
      switchMap(() => this.workflowsService.index()), /* Hit the Workflows Index endpoint of our REST API */
      /* Dispatch LoadAllSuccess action to the central store with id list returned by the backend as id*/
      /* 'Workflows Reducers' will take care of the rest */
      map((workflows: Workflow[]) => new LoadAllSuccess(workflows))
    );

  @Effect()
  create$: Observable<Action> = this.actions$.pipe(
      ofType(WorkflowsActionTypes.CREATE),
      map((action: Create) => action.payload),
      switchMap((workflow) => this.workflowsService.create(workflow)),
      map( (createdWorkflow: Workflow) => new CreateSuccess(createdWorkflow)),
      catchError(err => {
        alert(err['error']['error']['message']);
        return of(new Failure({concern: 'CREATE', error: err}));
      })
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(WorkflowsActionTypes.PATCH),
    map((action: Patch) => action.payload),
    switchMap((workflow: Workflow) => this.workflowsService.update(workflow)),
    map((updatedWorkflow: Workflow) => new PatchSuccess({
      id: updatedWorkflow.id,
      changes: updatedWorkflow
    })),
    catchError(err => {
      alert(err['error']['error']['message']);
      return of(new Failure({concern: 'PATCH', error: err}));
    })
  );


  @Effect()
  destroy$: Observable<Action> = this.actions$.pipe(
    ofType(WorkflowsActionTypes.DELETE),
    map((action: Delete) => action.payload),
    switchMap(
      (id: number) => this.workflowsService.destroy(id).pipe(
        map( () => new DeleteSuccess(id))
      )
    )
  );

  constructor(
      private actions$: Actions,
      private workflowsService: WorkflowsService
  ) {}


}
