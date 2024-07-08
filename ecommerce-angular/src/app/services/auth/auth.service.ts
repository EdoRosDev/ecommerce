import { Injectable } from '@angular/core';
import { User } from '../util/User';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserDTO } from '../../components/dto/userDTO';
import { LoginDTO } from '../../components/dto/loginDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logged: boolean
  http: HttpClient;
  user: User | undefined
  userChange: Subject<User> = new Subject<User>();

  /*

      constructor()  {
          this.sidebarVisibilityChange.subscribe((value) => {
              this.isSidebarVisible = value
          });
      }

      toggleSidebarVisibility() {
          this.sidebarVisibilityChange.next(!this.isSidebarVisible);
      }
  }
  */
 
 

  constructor(http: HttpClient) {
    this.logged = false
    this.http = http
    this.userChange.subscribe((value) => {
      this.user = value
    });
  }

  register(data: {username: string, password: string}): Observable<UserDTO>{
    return this.http.post<any>('http://localhost:8080/user/insert', data)
  }

  login(data: { username: string, password: string }, callback?: any) {
    let logindto = new LoginDTO(data.username, data.password)
    const res: Observable<UserDTO> = this.http.post<any>('http://localhost:8080/user/login', logindto)
    res.subscribe((user: UserDTO) => {
      this.userChange.next(new User(user.username))
      if(this.user) {
        this.logged = true;
        callback(true)
      } else callback(false)
    })
  }

  logout(){
    this.user?.destroy()
    this.logged = false
  }

  isLogged(){
    return this.logged
  }
}
