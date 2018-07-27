import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkflowsComponent} from './workflows.component';
import {WorkflowEditComponent} from './workflow-edit/workflow-edit.component';
import {WorkflowNewComponent} from './workflow-new/workflow-new.component';
import {WorkflowsIndexComponent} from './workflows-index/workflows-index.component';
import {SharedModule} from '@app-core/modules/shared.module';
import {WorkflowsRoutingModule} from './workflows-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromWorkflows from './store';
import {EffectsModule} from '@ngrx/effects';
import {WorkflowsEffects} from './store/effects/workflows-effects';
import { MomentModule } from 'ngx-moment';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WorkflowsRoutingModule,
    StoreModule.forFeature('workflows', fromWorkflows.reducers),
    EffectsModule.forFeature([WorkflowsEffects]),
    MomentModule
  ],
  declarations: [
    WorkflowsComponent,
    WorkflowEditComponent,
    WorkflowNewComponent,
    WorkflowsIndexComponent
  ]
})
export class WorkflowsModule { }
