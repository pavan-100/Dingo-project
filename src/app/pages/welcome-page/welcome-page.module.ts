import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { WelcomePageComponent } from "../../pages/welcome-page/welcome-page.component";
import { Routes, RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ItemsComponent } from "../../components/items/items.component";
import { ThebestComponent } from "../../components/thebest/thebest.component";
import { FoodMenuComponent } from "../../components/food-menu/food-menu.component";
import { OurchefsComponent } from "../../components/ourchefs/ourchefs.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { SharedModule } from "../../shared/shared.module";
const routes: Routes = [{ path: "", component: WelcomePageComponent }];
@NgModule({
  declarations: [
    NavbarComponent,
    ItemsComponent,
    BannerComponent,
    WelcomePageComponent,
    ThebestComponent,
    FoodMenuComponent,
    OurchefsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomePageModule {}
