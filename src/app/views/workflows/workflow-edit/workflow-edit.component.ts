import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { Workflow } from '@app-core/models';
import {Store, ActionsSubject} from '@ngrx/store';

import {State} from '../store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromWorkflows from '../store';
import {WorkflowsActionTypes, Load, Patch, PatchSuccess} from '../store/actions/workflows-actions';
import {filter} from 'rxjs/operators';
import {ofType} from '@ngrx/effects';


@Component({
  selector: 'app-workflow-edit',
  templateUrl: './workflow-edit.component.html',
  styleUrls: ['./workflow-edit.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowEditComponent implements OnInit, OnDestroy {

  workflow$: Observable<Workflow>;
  redirectSub: Subscription;

  constructor(
      public store: Store<State>,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private actionsSubject: ActionsSubject

  ) { }

  ngOnInit() {

    this.workflow$ = this.store.select(fromWorkflows.getCurrentWorkflow);

    // If the update effect fires, we check if the current id is the one being updated, and redirect to its details
    this.redirectSub = this.actionsSubject.pipe(
        ofType(WorkflowsActionTypes.PATCH_SUCCESS),
        filter((action: PatchSuccess) => action.payload.id === +this.activatedRoute.snapshot.params['workflowId'])
    ).subscribe(
      (action: PatchSuccess) => this.router.navigate(['/workflows', action.payload.id])
    );

    this.activatedRoute.params.subscribe(params => {
      // update our id from the backend in case it was modified by another client
      this.store.dispatch(new Load(+params['workflowId']));
    });

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(workflow: Workflow) {
    this.store.dispatch(new Patch(workflow));
  }

}
