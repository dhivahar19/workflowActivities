import { Workflow } from '@app-core/models';
import {EntityState, createEntityAdapter} from '@ngrx/entity';

import {
  WorkflowsActionTypes,
  All as AllWorkflowsActions
} from '../actions/workflows-actions';

// This adapter will allow is to manipulate workflows (mostly CRUD operations)
export const workflowsAdapter = createEntityAdapter<Workflow>({
  selectId: (workflow: Workflow) => workflow.id,
  sortComparer: false
});

// -----------------------------------------
// The shape of EntityState
// ------------------------------------------
// interface EntityState<Workflow> {
//   ids: string[] | number[];
//   entities: { [id: string]: Workflow };
// }
// -----------------------------------------
// -> ids arrays allow us to sort data easily
// -> entities map allows us to access the data quickly without iterating/filtering though an array of objects

export interface State extends EntityState<Workflow> {
  currentWorkflowId?: number;
}

export const INIT_STATE: State = workflowsAdapter.getInitialState({
  currentWorkflowId: undefined
});



export function reducer(
  state: State = INIT_STATE,
  {type, payload}: AllWorkflowsActions
) {

  switch (type) {

    case WorkflowsActionTypes.SET_CURRENT_CONTACT_ID : {
      return {
        ...state,
        currentWorkflowId: payload
      };
    }

    case WorkflowsActionTypes.LOAD_ALL_SUCCESS : {
      return workflowsAdapter.addAll(payload, state);
    }

    case WorkflowsActionTypes.LOAD_SUCCESS || WorkflowsActionTypes.CREATE_SUCCESS : {
      return workflowsAdapter.addOne(payload, {
        ...state,
        currentWorkflowId: payload.id
      });
    }

    case WorkflowsActionTypes.PATCH_SUCCESS : {
      return workflowsAdapter.updateOne(payload, state);
    }

    case WorkflowsActionTypes.DELETE_SUCCESS : {
      return workflowsAdapter.removeOne(payload, state);
    }

    default: return state;

  }
}

export const getCurrentWorkflowId = (state: State) => state.currentWorkflowId;
