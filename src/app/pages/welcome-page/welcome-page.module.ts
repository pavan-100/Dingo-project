import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { WelcomePageComponent } from "../../pages/welcome-page/welcome-page.component";
import { Routes, RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ItemsComponent } from "../../components/items/items.component";
const routes: Routes = [{ path: "", component: WelcomePageComponent }];
@NgModule({
  declarations: [
    NavbarComponent,
    ItemsComponent,
    BannerComponent,
    WelcomePageComponent
  ],
  imports: [CommonModule, FlexLayoutModule, RouterModule.forChild(routes)]
})
export class WelcomePageModule {}
