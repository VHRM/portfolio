import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes: {
    path: string,
    name: string
  }[] = [];
  isMenuActive: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.routes = [{
      path: '',
      name: 'home'
    },
    {
      path: 'projects',
      name: 'projetos'
    },
    {
      path: 'about',
      name: 'sobre mim'
    }
  ]
  }

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }
}