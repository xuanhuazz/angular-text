import { Routes, RouterModule } from '@angular/router';

import { PageNavComponent } from './page-nav/page-nav.component';
import { ManageListComponent } from './manage-list/manage-list.component';
import { ManageListSchemeComponent } from './manage-list-scheme/manage-list-scheme.component';
import { PageStructureComponent } from './page-structure/page-structure.component';

import { NavigateStructureComponent } from './navigate-structure/navigate-structure.component';
import { NavigateListviewComponent } from './navigate-listview/navigate-listview.component';
import { DictionaryGridCardComponent } from './dictionary-grid-card/dictionary-grid-card.component';

import { CardStructureComponent } from './card-structure/card-structure.component';
import { CardMainsubcardComponent } from './card-mainsubcard/card-mainsubcard.component';
import { CardExtendComponent } from './card-extend/card-extend.component';
import { GridSubgridcardComponent } from './grid-subgridcard/grid-subgridcard.component';
import { DictionarySidebarComponent } from './dictionary-sidebar/dictionary-sidebar.component';
import { WizardPageEntranceComponent } from './wizard-page-entrance/wizard-page-entrance.component';
import { CardOnepageComponent } from './card-onepage/card-onepage.component';
import { TreeCardComponent } from './tree-card/tree-card.component';
import { TreeMainsubcardComponent } from './tree-mainsubcard/tree-mainsubcard.component';
import { GridGridComponent } from './grid-grid/grid-grid.component';
import { CardMainsubcardScrollspyComponent } from './card-mainsubcard-scrollspy/card-mainsubcard-scrollspy.component';
import { ManageListChartComponent } from './manage-list-chart/manage-list-chart.component';
import { ManageListChartListgridComponent } from './manage-list-chart/components/manage-list-chart-listgrid/manage-list-chart-listgrid.component';
import { ManageListChartListchartComponent } from './manage-list-chart/components/manage-list-chart-listchart/manage-list-chart-listchart.component';
import { ManageListChartListcardComponent } from './manage-list-chart/components/manage-list-chart-listcard/manage-list-chart-listcard.component';
import { ManageListChartListviewComponent } from './manage-list-chart/components/manage-list-chart-listview/manage-list-chart-listview.component';
import { WorkCenterComponent } from './work-center/work-center.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { GridGridPortraitComponent } from './grid-grid-portrait/grid-grid-portrait.component';
import { ManageListFilterComponent } from './manage-list-filter/manage-list-filter.component';
import { VerifyCardCollapseComponent } from './verify-card-collapse/verify-card-collapse.component';

const routes: Routes = [
  {
    path: '',
    component: PageNavComponent,
    children: [
      { path: '', redirectTo: 'list' },
      // ???????????????????????????
      { path: 'structure', component: PageStructureComponent },
      // ??????????????????
      { path: 'list', component: ManageListComponent },
      // ????????????????????????
      { path: 'list-scheme', component: ManageListSchemeComponent },
      // ????????????????????????????????????
      {
        path: 'dictionary-sidebar',
        component: DictionarySidebarComponent
      },
      // ????????????-????????????
      {
        path: 'list-chart',
        component: ManageListChartComponent,
        children: [
          {
            path: '',
            redirectTo: 'list-grid'
          },
          {
            path: 'list-grid',
            component: ManageListChartListgridComponent
          },
          {
            path: 'list-echart',
            component: ManageListChartListchartComponent
          },
          {
            path: 'list-view',
            component: ManageListChartListviewComponent
          },
          {
            path: 'list-card',
            component: ManageListChartListcardComponent
          }
        ]
      },
      { path: 'list-filter', component: ManageListFilterComponent },
      // ????????????
      { path: 'wizard', component: WizardPageEntranceComponent },
      // ????????????
      { path: 'work-center', component: WorkCenterComponent },
      // ?????????????????????
      { path: 'card-structure', component: CardStructureComponent },
      // ????????????
      { path: 'mainsubcard', component: CardMainsubcardComponent },
      // ???????????????????????????
      {
        path: 'mainsubcard-scroll',
        component: CardMainsubcardScrollspyComponent
      },
      // ????????????-?????????????????????
      { path: 'card-extend', component: CardExtendComponent },
      { path: 'verify-card', component: VerifyCardCollapseComponent },
      // ???????????????????????????
      { path: 'navigate', component: NavigateStructureComponent },
      // Listview??????
      { path: 'listview', component: NavigateListviewComponent },
      // ??????(??????)
      { path: 'grid-card', component: DictionaryGridCardComponent },
      // ??????(?????????-????????????)
      {
        path: 'grid-mainsubcard',
        component: GridSubgridcardComponent
      },
      {
        path: 'onepage',
        component: CardOnepageComponent
      },
      // ??????(??????)
      {
        path: 'tree-card',
        component: TreeCardComponent
      },
      // ??????(?????????)
      {
        path: 'tree-mainsubcard',
        component: TreeMainsubcardComponent
      },
      // ?????????
      {
        path: 'grid-grid',
        component: GridGridComponent
      },
      // ???????????????
      {
        path: 'tree-grid',
        component: TreeGridComponent
      },
      {
        path: 'grid-grid-portrait',
        component: GridGridPortraitComponent
      }
      //   {
      //     path: 'listcard-layout', // ?????????????????????Layout
      //     component: ListCardLayoutComponent
      //   },
      //   {
      //     path: 'treecard-layout', // ??????????????????Layout
      //     component: TreeCardLayoutComponent
      //   },
      //   {
      //     path: 'listlist-layout', // ????????????????????????Layout
      //     component: ListListLayoutComponent
      //   },
      //   {
      //     path: 'modify-des',
      //     component: ModifyDesComponent
      //   },
      //   {
      //     path: 'leftnavrightgrid', // ??????????????????
      //     component: LeftNavRightGridComponent
      //   },
      //   {
      //     path: 'programe-ywzfsq',
      //     component: ProgrameYwzfsqComponent
      //   }
    ]
  }
];

export const NewPageStructureRoutes = RouterModule.forChild(routes);
