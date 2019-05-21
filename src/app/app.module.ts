import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EaterMeComponent } from "./eater-me/eater-me.component";
import { FoodService } from "./food.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, EaterMeComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [FoodService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
