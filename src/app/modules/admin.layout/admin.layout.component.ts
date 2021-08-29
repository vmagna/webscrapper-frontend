import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: 'admin.layout.component.html',
  styleUrls: ['admin.layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {

  visibleSidebar1 = false;
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
        label: 'Dashboard',
        icon: 'pi pi-chart-bar',
        routerLink: 'dashboard'
      },
      {
        label:'Grau de Indisponíbilidade',
        icon:'pi pi-exclamation-triangle',
        routerLink: 'historico'
        // id
        // label
        // icon
        // command
        // url
        // routerLink
        // routerLinkActiveOptions
        // queryParams
        // fragment
        // queryParamsHandling
        // merge
        // preserve
        // preserveFragment
        // skipLocationChange
        // replaceUrl
        // state
        // items
        // expanded
        // disabled
        // visible
        // target
        // escape
        // separator
        // style
        // styleClass
        // badge
        // badgeStyleClass
        // title
        // automationId
        // tabindex
      },

      /***
       * Exampla dropdown
       */
      // {
      //   label:'File',
      //   icon:'pi pi-fw pi-file',
      //   items:[
      //     {
      //       label:'New',
      //       icon:'pi pi-fw pi-plus',
      //       items:[
      //         {
      //           label:'Bookmark',
      //           icon:'pi pi-fw pi-bookmark'
      //         },
      //         {
      //           label:'Video',
      //           icon:'pi pi-fw pi-video'
      //         },
      //       ]
      //     },
      //     {
      //       label:'Delete',
      //       icon:'pi pi-fw pi-trash'
      //     },
      //     {
      //       separator:true
      //     },
      //   ]
      // },
    ];
  }

  toggle() {
    this.visibleSidebar1 = !this.visibleSidebar1;
    console.log(this.visibleSidebar1);
  }



}
