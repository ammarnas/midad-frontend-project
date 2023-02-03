import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Response } from './interface/response.interface';
import { User } from './interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.userUrl).pipe(
        map((response : any) => this.processResponse(response))
    );
  }


  getUser(userid:string|number|any): Observable<any> {
    return this.http.get<any>(this.userUrl+'/'+userid).pipe(
    //     map((user : any) => 
    //     (user: any) =>
    //     <User>{
    //       id: user.id,
    //       email: user.email,
    //       first_name: user.first_name,
    //       last_name: user.last_name,
    //       avatar: user.avatar,
    //     }
    // ))
  )}

  DeleteUser(userid:any): Observable<any> {
    return this.http.delete(this.userUrl+ '/' + userid ).pipe(
      tap((response) => {
        // console.log(response);
      })
    )
  
  }



  private processResponse(response: Response): Response {
    return {
      metadata: { ...response },
      data: {
        ...response.data.map(
          (user: any) =>
            <User>{
              id: user.id,
              email: user.email,
              first_name: user.first_name,
              last_name: user.last_name,
              avatar: user.avatar,
            }
        ),
      },
    };
  }
}

