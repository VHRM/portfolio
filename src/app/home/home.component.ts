import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  frontendKnowledge = [
    'HTML',
    'CSS',
    'SCSS',
    'Bootstrap',
    'Material',
    'Ant Design',
    'Javascript',
    'Angular',
    'React',
    'Redux'
  ]

  backendKnowledge = [
    'PHP',
    'Python',
    'Laravel',
    'CodeIgniter',
    'Lumen',
    'SlimFramework',
    'NodeJs',
    'MySql'
  ]
}