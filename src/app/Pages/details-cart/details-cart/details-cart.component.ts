import { ProductService } from './../../../core/services/product/product.service';
import { Component, inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { IFakeProducts2 } from '../../../shared/interfaces/product/iproduct';
import { CustomSlicePipe } from '../../../shared/pipes/custom-slice.pipe';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LoadingComponent } from "../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-details-cart',
  imports: [CustomSlicePipe, CommonModule, RouterLink, LoadingComponent],
  templateUrl: './details-cart.component.html',
  styleUrl: './details-cart.component.css'
})
export class DetailsCartComponent implements OnInit {
  cartDetails: IFakeProducts2 = {} as IFakeProducts2;
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  isLoading: boolean = true;
platform_id=inject(PLATFORM_ID)
  ngOnInit(): void {
    this.getCart();
  }

  getCart(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productService.getSpecificProduct(id).subscribe({
      next: (res) => {
        if(isPlatformBrowser(this.platform_id)){
          setTimeout(() => {
            this.isLoading = false;
            this.cartDetails = res;
          }, 2000)
        }

      }
    })
  }










}
