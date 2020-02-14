import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomePageModule } from "./pages/welcome-page/welcome-page.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    WelcomePageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
