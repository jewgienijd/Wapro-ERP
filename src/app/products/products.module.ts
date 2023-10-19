import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../core/shared/shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule    
  ]
})
export class ProductsModule { }