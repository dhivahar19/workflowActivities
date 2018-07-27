import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Workflow } from '@app-core/models';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowListComponent implements OnInit {


  @Input() workflows: Workflow[];
  @Output() edit = new EventEmitter<Workflow>();
  @Output() show = new EventEmitter<Workflow>();
  @Output() remove = new EventEmitter<Workflow>();

  workflowsTrackByFn = (index: number, workflow: Workflow) => workflow.id;

  constructor() {}

  ngOnInit() {}

  editWorkflow(workflow: Workflow) {
    this.edit.emit(workflow);
  }

  deleteWorkflow(workflow: Workflow) {
    this.remove.emit(workflow);
  }

}
