import { Routes, RouterModule } from '@angular/router';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderListcardComponent } from './sales-order-listcard/sales-order-listcard.component';
import { SalesOrderTreeComponent } from './sales-order-tree/sales-order-tree.component';
import { SalesNavComponent } from './sales-nav/sales-nav.component';
// import { GridModeCalendarComponent } from './grid-mode-calendar/grid-mode-calendar.component';
import { SalesOrderTreeSubtableComponent } from './sales-order-tree-subtable/sales-order-tree-subtable.component';
import { SalesOrderListcardSubtableComponent } from './sales-order-listcard-subtable/sales-order-listcard-subtable.component';
import { SalesOrderTreeListComponent } from './sales-order-tree-list/sales-order-tree-list.component';
import { SalesOrderListListComponent } from './sales-order-list-list/sales-order-list-list.component';
import { CardAccordionComponent } from './card-accordion/card-accordion.component';
import { CardDesComponent } from './card-des/card-des.component';
import { CardSingleComponent } from './card-single/card-single.component';
import { CardSingleTabComponent } from './card-single-tab/card-single-tab.component';
import { CardSubsubComponent } from './card-subsub/card-subsub.component';
import { ListCardLayoutComponent } from './list-card-layout/list-card-layout.component';
import { TreeCardLayoutComponent } from './tree-card-layout/tree-card-layout.component';
import { ListListLayoutComponent } from './list-list-layout/list-list-layout.component';
import { ListScrollComponent } from './list-scroll/list-scroll.component';
import { ListCardFilterComponent } from './list-card-filter/list-card-filter.component';
import { ModifyDesComponent } from './modify-des/modify-des.component';
const routes: Routes = [
  {
    path: '',
    component: SalesNavComponent,
    children: [
      { path: '', redirectTo: 'list' },
      { path: 'list', component: SalesOrderListComponent },
      { path: 'list-scroll', component: ListScrollComponent },
      { path: 'card', component: SalesOrderDetailComponent }, // ??????
      { path: 'card-accordion', component: CardAccordionComponent }, // ?????????????????????????????????
      { path: 'card-des', component: CardDesComponent }, // ???????????????????????????
      { path: 'card-single-tab', component: CardSingleTabComponent }, // ?????????????????????
      { path: 'card-single', component: CardSingleComponent }, // ????????????????????????????????????
      { path: 'card-subsub', component: CardSubsubComponent }, // ?????????????????????
      { path: 'listcard', component: SalesOrderListcardComponent }, // ????????????
      { path: 'listlist', component: SalesOrderListListComponent }, // ????????????
      { path: 'tree', component: SalesOrderTreeComponent }, // ???-??????
      { path: 'tree-subtable', component: SalesOrderTreeSubtableComponent }, // ??????????????????
      { path: 'tree-list', component: SalesOrderTreeListComponent }, // ??????????????????
      { path: 'listcard-filter', component: ListCardFilterComponent }, // ??????-??????-?????????
      {
        path: 'listcard-subtable',
        component: SalesOrderListcardSubtableComponent
      },
      {
        path: 'listcard-layout', // ?????????????????????Layout
        component: ListCardLayoutComponent
      },
      {
        path: 'treecard-layout', // ??????????????????Layout
        component: TreeCardLayoutComponent
      },
      {
        path: 'listlist-layout', // ????????????????????????Layout
        component: ListListLayoutComponent
      },
      {
        path: 'modify-des',
        component: ModifyDesComponent
      }
    ]
  }
];

export const PageTemplateRoutes = RouterModule.forChild(routes);
