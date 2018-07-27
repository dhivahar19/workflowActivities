import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Workflow } from '@app-core/models';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

import * as fromWorkflows from '../store';
import {Delete, SetCurrentWorkflowId} from '../store/actions/workflows-actions';
import * as fromRoot from '@app-root-store';


@Component({
  selector: 'app-workflows-index',
  templateUrl: './workflows-index.component.html',
  styleUrls: ['./workflows-index.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowsIndexComponent implements OnInit {

  workflows$: Observable<Workflow[]>;

  constructor(public store: Store<fromRoot.State>, private router: Router, private actR: ActivatedRoute) { }

  ngOnInit() {
    // getAllWorkflows selector from the main store allows us to monitor changes only on id list from the main state
    // without monitoring the rest of the state
    this.workflows$ = this.store.select(fromWorkflows.getAllWorkflows);
  }

  editWorkflow(workflow: Workflow) {
    this.store.dispatch(new SetCurrentWorkflowId(workflow.id));
    this.router.navigate(['/workflows', workflow.id, 'edit']);
  }

  showWorkflow(workflow: Workflow) {
    this.store.dispatch(new SetCurrentWorkflowId(workflow.id));
    this.router.navigate(['/workflows', workflow.id]);
  }

  deleteWorkflow(workflow: Workflow) {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new Delete(workflow.id));
    }
  }

}
