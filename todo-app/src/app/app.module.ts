import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { ColumnComponent } from './component/column/column.component';
import { TaskComponent } from './component/task/task.component';
import {CdkDrag, CdkDragPlaceholder, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import { ColumnsComponent } from './component/columns/columns.component';
import {NzCardModule} from "ng-zorro-antd/card";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColumnComponent,
    TaskComponent,
    ColumnsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkDropList,
    NzCardModule,
    CdkDrag,
    CdkDropListGroup,
    CdkDragPlaceholder
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
