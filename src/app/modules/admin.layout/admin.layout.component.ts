import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: 'admin.layout.component.html',
  styleUrls: ['admin.layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {

  listMenu = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      router: '/dashboard'
    },
    {
      icon: 'historico',
      label: 'Histórico',
      router: '/historico'
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
