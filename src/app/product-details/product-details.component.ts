import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product!: Product;
  public errorText: string = '';
  public showError: boolean = false;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productsService.getAllProducts().subscribe((products: Product[]) => {
      this.product = products.filter((p: any) => p.productId == productId)[0];
    },
      (error: Error) => {
        this.handleError(error)
      });
  }

  handleError(error: any) {
    this.errorText = error.message;
    this.showError = true;
  }

}
