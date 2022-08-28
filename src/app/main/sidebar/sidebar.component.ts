import { Component, OnInit } from '@angular/core';
import { SidebarDOI } from './sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  sidebar!: SidebarDOI[];

  constructor() { }

  ngOnInit(): void {
    this.sidebar = [
      { name: 'Dashboard', routerLink: '/' },
      { name: 'Income', routerLink: '/main/income' },
      { name: 'Outgoing', routerLink: '/main/outgoing' },
      { name: 'Balance', routerLink: '/main/balance' },
    ] 
  }

}
