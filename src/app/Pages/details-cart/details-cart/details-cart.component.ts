import { ProductService } from './../../../core/services/product/product.service';
import { Component, inject, Input, OnInit } from '@angular/core';
import { IFakeProducts2 } from '../../../shared/interfaces/product/iproduct';
import { CustomSlicePipe } from '../../../shared/pipes/custom-slice.pipe';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-cart',
  imports: [CustomSlicePipe, CommonModule, RouterLink],
  templateUrl: './details-cart.component.html',
  styleUrl: './details-cart.component.css'
})
export class DetailsCartComponent implements OnInit {
  cartDetails: IFakeProducts2 = {} as IFakeProducts2;
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);


  ngOnInit(): void {
    this.getCart();
  }

  getCart(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productService.getSpecificProduct(id).subscribe({
      next: (res) => {
        this.cartDetails = res;
      }
    })
  }










}
