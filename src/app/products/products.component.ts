import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products!: Product[];
  public listViewMode: boolean = true;
  public showErrorDialog: boolean = false;
  public errorText: string = '';
  public showError: boolean = false;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products
    },
      (error: Error) => {
        this.handleError(error)
      });
  }

  toggleViewMode() {
    this.listViewMode = !this.listViewMode;
  }

  hideErrorDialog() {
    this.showErrorDialog = false;
  }

  navigateToProductDetails(productId: number) {
    this.router.navigate(['/productDetails', productId]);
  }

  handleError(error: any) {
    this.errorText = error.message;
    this.showError = true;
  }
}
