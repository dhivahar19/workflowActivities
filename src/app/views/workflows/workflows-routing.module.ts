import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkflowsComponent} from './workflows.component';
import {WorkflowNewComponent} from './workflow-new/workflow-new.component';
import {WorkflowsIndexComponent} from './workflows-index/workflows-index.component';
import {WorkflowEditComponent} from './workflow-edit/workflow-edit.component';
import {TitleResolver} from '@app-core/resolvers/title.resolver';

const routes: Routes = [
  {
    path: '',
    component: WorkflowsComponent,
    children: [
      {
        path: '',
        component: WorkflowsIndexComponent,
        data: {title: 'Activities'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: 'new',
        component: WorkflowNewComponent,
        data: {title: 'New Activity'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      },
      {
        path: ':workflowId/edit',
        component: WorkflowEditComponent,
        data: {title: 'Edit Activity'},
        pathMatch: 'full',
        resolve: {title: TitleResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowsRoutingModule { }
