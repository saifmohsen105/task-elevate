import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./Pages/home-page/home-page.component";
import { FooterComponent } from "./layouts/footer/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShopGallery';
}
