import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-workflows',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkflowsComponent {}
