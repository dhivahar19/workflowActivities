import {Action} from '@ngrx/store';
import { Workflow } from '@app-core/models';
import {Update} from '@ngrx/entity/src/models';



export enum WorkflowsActionTypes {

  LOAD_ALL = '[Workflows] LOAD ALL',
  LOAD_ALL_SUCCESS = '[Workflows] LOAD ALL SUCCESS',

  LOAD = '[Workflows] LOAD',
  LOAD_SUCCESS = '[Workflows] LOAD SUCCESS',

  CREATE = '[Workflows] CREATE',
  CREATE_SUCCESS = '[Workflows] CREATE SUCCESS',

  PATCH = '[Workflows] PATCH',
  PATCH_SUCCESS = '[Workflows] PATCH SUCCESS',

  DELETE = '[Workflows] DELETE',
  DELETE_SUCCESS = '[Workflows] DELETE SUCCESS',

  FAILURE = '[Workflows] FAILURE',

  SET_CURRENT_CONTACT_ID = '[Workflows] SET CURRENT CONTACT ID',

}

export class SetCurrentWorkflowId implements Action {
  readonly type = WorkflowsActionTypes.SET_CURRENT_CONTACT_ID;
  constructor(public payload: number) {}
}

export class LoadAll implements Action {
  readonly type = WorkflowsActionTypes.LOAD_ALL;
  constructor(public payload = null) {}
}

export class Load implements Action {
  readonly type = WorkflowsActionTypes.LOAD;
  constructor(public payload: number) {}
}

export class Create implements Action {
  readonly type = WorkflowsActionTypes.CREATE;
  constructor(public payload: Workflow) {}
}


export class Patch implements Action {
  readonly type = WorkflowsActionTypes.PATCH;
  constructor(public payload: Workflow) {}
}

export class Delete implements Action {
  readonly type = WorkflowsActionTypes.DELETE;
  constructor(public payload: number) {}
}

export class LoadAllSuccess implements Action {
  readonly type = WorkflowsActionTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: Workflow[]) {}
}

export class LoadSuccess implements Action {
  readonly type = WorkflowsActionTypes.LOAD_SUCCESS;
  constructor(public payload: Workflow) {}
}

export class CreateSuccess implements Action {
  readonly type = WorkflowsActionTypes.CREATE_SUCCESS;
  constructor(public payload: Workflow) {}
}

export class PatchSuccess implements Action {
  readonly type = WorkflowsActionTypes.PATCH_SUCCESS;
  constructor(public payload: Update<Workflow>) {}
}

export class DeleteSuccess implements Action {
  readonly type = WorkflowsActionTypes.DELETE_SUCCESS;
  constructor(public payload: number) {}
}

export class Failure implements Action {
  readonly type = WorkflowsActionTypes.FAILURE;
  constructor (public payload: {concern: 'CREATE' | 'PATCH', error: any}) {}
}

export type All =
    | SetCurrentWorkflowId
    | LoadAll
    | Load
    | Create
    | Patch
    | Delete
    | LoadAllSuccess
    | LoadSuccess
    | PatchSuccess
    | CreateSuccess
    | DeleteSuccess
    | Failure;
