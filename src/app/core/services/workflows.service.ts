import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Workflow } from '@app-core/models';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer GfR6vIHG0zTWaJle6TjNXvYUrjDn6g'
  })
};

@Injectable({
  providedIn: 'root',
})
export class WorkflowsService {

  constructor(private http: HttpClient ) { }

  index(): Observable<Workflow[]> {
    return this.http
        .get<Workflow[]>(`${environment.appApi.baseUrl}/workflowlevel2/?workflowlevel1__id=94`, httpOptions);
  }

  create(workflow: Workflow): Observable<Workflow> {
    return this.http.post<Workflow>(`${environment.appApi.baseUrl}/workflowlevel2/?workflowlevel1__id=94`, workflow, httpOptions);
  }

  update(workflow: Workflow): Observable<Workflow> {
    return this.http.put<Workflow>(`${environment.appApi.baseUrl}/workflowlevel2/${workflow.id}`, workflow,httpOptions);
  }

  destroy(id: number): Observable<Workflow> {
    return this.http.delete<Workflow>(`${environment.appApi.baseUrl}/workflowlevel2/${id}`,httpOptions);
  }

}
