import { Injectable } from '@angular/core';
import { User } from '../util/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDTO } from '../../dto/userDTO';
import { LoginDTO } from '../../dto/loginDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logged: boolean
  http: HttpClient;
  user: User | undefined

  constructor(http: HttpClient) {
    this.logged = false
    this.http = http
  }

  register(data: {username: string, password: string}): boolean{
    return true
  }

  // login(loginDTO: LoginDTO): Observable<UserDTO> {
  //   return this.http.post<any>('http://localhost:8080/' + this.type + '/login', loginDTO)
  // }
  login(data: { username: string, password: string }): boolean {
    let logindto = new LoginDTO(data.username, data.password)
    const res: Observable<UserDTO> = this.http.post<any>('http://localhost:8080/user/login', logindto)
     res.subscribe((user: UserDTO) => {
      this.user = new User(user.username)
    })
    if(this.user){
      this.logged = true;
      return true
    } else {
      return false
    }
  }

  logout(){
    this.user?.destroy()
    this.logged = false
  }

  isLogged(){
    return this.logged
  }
}
