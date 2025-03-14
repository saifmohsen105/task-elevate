import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IFakeProducts, IFakeProducts2 } from '../../shared/interfaces/product/iproduct';
import { ProductService } from '../../core/services/product/product.service';
import { CustomSlicePipe } from '../../shared/pipes/custom-slice.pipe';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CustomSlicePipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input({ required: true }) products: IFakeProducts = {} as IFakeProducts;

  @Input({ required: true }) isEmpty: boolean = false;

  productService = inject(ProductService);

  CartDetails: IFakeProducts2 = {} as IFakeProducts2;

  isDetailsVisible = false;

  router = inject(ActivatedRoute)

  getCard(id: number): void {
    this.productService.getSpecificProduct(id).subscribe({
      next: (res) => {
        this.CartDetails = res;
      },
    });
  }
}
