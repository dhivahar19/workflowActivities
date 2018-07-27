import * as fromWorkflows from './reducers/workflows-reducer';
import * as fromRoot from '@app-root-store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface WorkflowsState {
  workflows: fromWorkflows.State;
}

// This is a lazy loaded state, so we need to extend from the App Root State
export interface State extends fromRoot.State {
  workflows: WorkflowsState;
}

export const reducers = {
  workflows: fromWorkflows.reducer
};

export const getWorkflowsRootState = createFeatureSelector<WorkflowsState>('workflows');

export const getWorkflowsState = createSelector(
    getWorkflowsRootState,
    state => state.workflows
);

export const getSelectedWorkflowId = createSelector(
  getWorkflowsState,
  fromWorkflows.getCurrentWorkflowId
);

export const {
  selectAll: getAllWorkflows,
  selectEntities: getWorkflowEntities
} = fromWorkflows.workflowsAdapter.getSelectors(getWorkflowsState);

export const getCurrentWorkflow = createSelector(
  getWorkflowEntities,
  getSelectedWorkflowId,
  (entities, id) => id && entities[id]
);
