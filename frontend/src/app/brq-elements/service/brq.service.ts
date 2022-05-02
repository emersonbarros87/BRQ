import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { UserResponse, HeaderData } from '../models/user-model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private _headerData = new BehaviorSubject<HeaderData>({
    routeUrl: ''
  })

  baseUrl = 'https://app-brq-backend.herokuapp.com/users';

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMensage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(client: UserResponse): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.baseUrl, client).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  read(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  readById(id: string): Observable<UserResponse> {
    const urlRead = `${this.baseUrl}/${id}`
    return this.http.get<UserResponse>(urlRead).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  update(user: UserResponse): Observable<UserResponse> {
    const urlUpdate = `${this.baseUrl}/${user.id}`
    return this.http.put<UserResponse>(urlUpdate, user).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  delete(user: UserResponse): Observable<UserResponse> {
    const urlDelete = `${this.baseUrl}/${user.id}`
    return this.http.delete<UserResponse>(urlDelete).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  profileList(user: UserResponse): Observable<UserResponse> {
    const urlList = `${this.baseUrl}/${user.id}`
    return this.http.get<UserResponse>(urlList).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  errorHandler(error: any): Observable<any> {
    console.log('Ocorreu um erro!', true);
    return EMPTY
  }

}

