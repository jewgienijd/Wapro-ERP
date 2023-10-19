import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxListModule, DxTemplateModule, DxTileViewModule } from 'devextreme-angular';
import { ErrorPopupComponent } from '../../popups/error-popup/error-popup.component';

@NgModule({
  declarations: [
    ErrorPopupComponent
  ],
  imports: [
    CommonModule,
    DxListModule,
    DxTemplateModule,
    DxTileViewModule,
    DxButtonModule
  ],
  exports: [
    CommonModule,
    DxListModule,
    DxTemplateModule,
    DxTileViewModule,
    DxButtonModule,
    ErrorPopupComponent
  ]
})
export class SharedModule { }