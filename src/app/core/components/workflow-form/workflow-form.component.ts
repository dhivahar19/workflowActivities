import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { Workflow } from '@app-core/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-workflow-form',
  templateUrl: './workflow-form.component.html',
  styleUrls: ['./workflow-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowFormComponent implements OnInit, OnChanges {

  @Input() workflow: Workflow = {
    id: undefined,
    name: '',
    actual_start_date: '',
    actual_end_date: ''
  };

  @Output() save = new EventEmitter<Workflow>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.workflow.id],
      'name': [this.workflow.name, Validators.required],
      'actual_start_date': [this.workflow.actual_start_date],
      'actual_end_date': [this.workflow.actual_end_date]
    });
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.workflow) {
      this.form.patchValue({...this.workflow});
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }

  }

}
