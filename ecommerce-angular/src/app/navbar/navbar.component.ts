import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logged: boolean = false;

  login(){
    this.logged = true
  }

  logout(){
    this.logged = false
  }

  isLogged(){
    return this.logged
  }

  openNavbarContent(menu: string){

  }

  navigateTo(path:string){

  }

}
