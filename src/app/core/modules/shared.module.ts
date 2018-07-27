import { NgModule } from '@angular/core';
import {WorkflowListComponent} from '../components/workflow-list/workflow-list.component';
import {WorkflowFormComponent} from '../components/workflow-form/workflow-form.component';
import {ToolbarComponent} from '../components/toolbar/toolbar.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MomentModule
  ],
  declarations: [
    WorkflowListComponent,
    WorkflowFormComponent,
    ToolbarComponent
  ],
  exports: [
    WorkflowListComponent,
    WorkflowFormComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
