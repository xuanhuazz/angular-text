import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {
  CalendarModule,
  DateInputsModule
} from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { CmpCollectionModuleRouter } from './cmp-collection.routes';
import { RootCmpComponent } from './root-cmp/root-cmp.component';
import { CmpBtnsComponent } from './cmp-btns/cmp-btns.component';
import { CmpInputsComponent } from './cmp-inputs/cmp-inputs.component';
import { CmpDatesComponent } from './cmp-dates/cmp-dates.component';
import { CmpDialogComponent } from './cmp-dialog/cmp-dialog.component';
import { CmpPanelComponent } from './cmp-panel/cmp-panel.component';
import { CmpTabComponent } from './cmp-tab/cmp-tab.component';
import { FDropdownDirectiveTypeModule } from '@farris/ui-dropdown';
import { DataTableModule } from '@farris/ui-datatable';
import { LookupModule } from '@farris/ui-lookup';

import { CmpProcessComponent } from './cmp-process/cmp-process.component';
import { CmpIconsComponent } from './cmp-icons/cmp-icons.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { CodeShowModule } from '../code-show/code-show.module';
import { TextModule } from '@farris/ui-text';
import { DatalistModule } from '@farris/ui-datalist';
import { ComboListModule } from '@farris/ui-combo-list';
import { FarrisDatePickerModule } from '@farris/ui-datepicker';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
    CmpCollectionModuleRouter,
    FDropdownDirectiveTypeModule,
    DropDownsModule,
    InputsModule,
    CalendarModule,
    DateInputsModule,
    DataTableModule,
    LookupModule,
    TextModule,
    CodeShowModule,
    DatalistModule,
    ComboListModule,
    FarrisDatePickerModule
  ],
  declarations: [
    RootCmpComponent,
    CmpBtnsComponent,
    CmpInputsComponent,
    CmpDatesComponent,
    CmpDialogComponent,
    CmpPanelComponent,
    CmpTabComponent,
    CmpProcessComponent,
    CmpIconsComponent
  ]
})
export class CmpCollectionModule {}
/**
 *????????????
 *    ????????????
 *    ????????????
 *    ????????????
 *    ????????????
 * ????????????
 *   ??????????????????
 *   ??????
 *   ??????
 *   ????????????
 *   ?????????

 * ??????????????????
 *    ???????????????
 *    ?????????
 *    ?????????
 * ????????????
 *    ????????????
 *    kendo??????
 * ?????????
 * ???????????????????????????
 * 
 * 
 * 
 * 
 */
