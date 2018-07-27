import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { Workflow } from '@app-core/models';
import {ActionsSubject, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

import * as fromRoot from '@app-root-store';
import {WorkflowsActionTypes, Create, CreateSuccess} from '../store/actions/workflows-actions';
import {ofType} from '@ngrx/effects';

@Component({
  selector: 'app-workflow-new',
  templateUrl: './workflow-new.component.html',
  styleUrls: ['./workflow-new.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowNewComponent implements OnInit, OnDestroy {

  redirectSub: Subscription;

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private actionsSubject: ActionsSubject
  ) { }

  ngOnInit() {
    this.redirectSub = this.actionsSubject.asObservable().pipe(
      ofType(WorkflowsActionTypes.CREATE_SUCCESS)
    ).subscribe(
      (action: CreateSuccess) => this.router.navigate(['/workflows', action.payload.id])
    );

  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(workflow: Workflow) {
    this.store.dispatch(new Create(workflow));
  }

}
