import { Component, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { NavContentComponent } from './nav-content/nav-content.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule, CommonModule, NavContentComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logged: boolean = false;
  isNavbarContentOpen: boolean = false;
  currentSection: string = ''

  login(){
    this.logged = true
  }

  logout(){
    this.logged = false
  }

  isLogged(){
    return this.logged
  }

  openNavbarContent(section: string){
    this.currentSection = section
    this.isNavbarContentOpen = true;
  }

  closeNavbarContent(){
    this.currentSection = ''
    this.isNavbarContentOpen = false;
  }

  navigateTo(path:string){

  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent){
    const modalContainer = document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button");

    let clickInsideButton = false;

    openButtons.forEach((button:Element) => {
      if(button.contains(event.target as Node)){
        clickInsideButton = true;
      }
    })

    if(modalContainer && !clickInsideButton && this.isNavbarContentOpen){
      this.closeNavbarContent();
    }
  }

}
