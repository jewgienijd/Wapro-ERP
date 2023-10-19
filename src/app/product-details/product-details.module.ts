import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { SharedModule } from '../core/shared/shared/shared.module';


@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
