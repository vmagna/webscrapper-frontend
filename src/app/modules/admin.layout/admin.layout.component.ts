import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: 'admin.layout.component.html',
  styleUrls: ['admin.layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {

  items: any[];

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

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this.items = [
      {
        label:'File',
        icon:'pi pi-fw pi-file',
        items:[
          {
            label:'New',
            icon:'pi pi-fw pi-plus',
            items:[
              {
                label:'Bookmark',
                icon:'pi pi-fw pi-bookmark'
              },
              {
                label:'Video',
                icon:'pi pi-fw pi-video'
              },

            ]
          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-trash'
          },
          {
            separator:true
          },
          {
            label:'Export',
            icon:'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
        items:[
          {
            label:'Left',
            icon:'pi pi-fw pi-align-left'
          },
          {
            label:'Right',
            icon:'pi pi-fw pi-align-right'
          },
          {
            label:'Center',
            icon:'pi pi-fw pi-align-center'
          },
          {
            label:'Justify',
            icon:'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label:'Users',
        icon:'pi pi-fw pi-user',
        items:[
          {
            label:'New',
            icon:'pi pi-fw pi-user-plus',

          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-user-minus',

          },
          {
            label:'Search',
            icon:'pi pi-fw pi-users',
            items:[
              {
                label:'Filter',
                icon:'pi pi-fw pi-filter',
                items:[
                  {
                    label:'Print',
                    icon:'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon:'pi pi-fw pi-bars',
                label:'List'
              }
            ]
          }
        ]
      },
      {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
              {
                label:'Save',
                icon:'pi pi-fw pi-calendar-plus'
              },
              {
                label:'Delete',
                icon:'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label:'Archieve',
            icon:'pi pi-fw pi-calendar-times',
            items:[
              {
                label:'Remove',
                icon:'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
      }
    ];

  }

}
