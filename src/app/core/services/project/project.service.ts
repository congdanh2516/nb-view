import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}

  getProjectById(projectId: string) {
    let api: string = environment.url + `projects/${projectId}`;
    return this.httpClient.get(api).pipe(
      tap(() => console.log('get project by id: ')),
      catchError(this.handleError)
    );
  }

  updateProjectById(project: Project) {
    let api: string = environment.url + `projects/${project.projectId}`;
    return this.httpClient.patch(api, project).pipe(
      tap(() => console.log('update project successfully')),
      catchError(this.handleError)
    );
  }

  deleteProject(projectId: string) {
    let api: string = environment.url + `projects/${projectId}`;
    return this.httpClient.delete(api).pipe(
      tap(() => console.log('delete project successfully')),
      catchError(this.handleError)
    );
  }

  scheduleProcess(projectId: any) {
    let api: string = environment.url + `projects/${projectId}/schedule`;
    return this.httpClient.post(api, {});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
