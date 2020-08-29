import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Usuario',  icon:'person', class: '' },
    { path: '/table-list', title: 'Medicos',  icon:'assignment_ind', class: '' },
    { path: '/typography', title: 'Pacientes',  icon:'people', class: '' },
    { path: '/icons', title: 'Consultas',  icon:'event_available', class: '' },
    { path: '/maps', title: 'Agenda',  icon:'insert_invitation', class: '' },
    { path: '/notifications', title: 'Configurações',  icon:'build', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
