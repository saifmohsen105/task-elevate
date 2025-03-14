import { CommonModule, isPlatformBrowser  } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID  } from '@angular/core';
import { IFakeProducts } from '../../shared/interfaces/product/iproduct';
import { ProductService } from '../../core/services/product/product.service';
import { CartComponent } from "../cart/cart.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, CartComponent , FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  productService = inject(ProductService);
  // skilton loadingF
  isLoading: boolean = true;

  products: IFakeProducts = {} as IFakeProducts;
  // using in setTimeOut
  platform_id = inject(PLATFORM_ID);

  filteredProducts: IFakeProducts = {} as IFakeProducts;
  searchTerm: string = '';

  ngOnInit(): void {
    this.getProducts();
  }


  // get all prodcut in fake products
  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (res) => {
        if (isPlatformBrowser(this.platform_id)) {
          setTimeout(() => {
            this.isLoading = false;
            this.products = res;
            this.filteredProducts = res;
          }, 2000)
        }

      },
    });
  }

  searchProducts() {
    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}



