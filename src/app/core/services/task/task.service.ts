import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  getTaskListByProjectId(projectId: string) {
    let api: string = environment.url + `tasks?api=${projectId}`;
    return this.httpClient.get(api).pipe(
      tap(() => console.log('get task list')),
      catchError(this.handleError)
    );
  }

  getTaskById(taskId: string) {
    let api: string = environment.url + `tasks/${taskId}`;
    return this.httpClient.get(api).pipe(
      tap(() => console.log('get task by id')),
      catchError(this.handleError)
    );
  }

  getAllDependencyByTaskId(taskId: string) {
    let api: string = environment.url + `task/${taskId}/dependencies`;
    return this.httpClient.get(api).pipe(
      tap(() => {
        console.log('call api get all dependencies');
      }),
      catchError(this.handleError)
    );
  }

  getSubtaskList(taskId: string) {
    let api: string = environment.url + `tasks/${taskId}/subtasks`;
    return this.httpClient.get(api).pipe(
      tap(() => console.log('get subtask list')),
      catchError(this.handleError)
    );
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
