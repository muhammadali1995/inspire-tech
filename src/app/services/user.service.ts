import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {finalize, map, tap} from 'rxjs/operators';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private users = [];

  isUserListLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  fetchAll(): Observable<User[]> {
    this.isUserListLoading$.next(true);
    return this.http.get<User[]>(`${environment.API_URL}/users`)
      .pipe(
        tap((users: User[]) => this.users$.next(users)),
        finalize(() => this.isUserListLoading$.next(false)
        ));
  }

  fetchById(id: number): Observable<User> {
    return this.users$.pipe(map((users: User []) => {
      return users.find(user => user.id === id);
    }));
  }

}

