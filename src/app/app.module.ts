import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginBlockComponent } from './header/login-block/login-block.component';
import { ProductsComponent } from './products/products.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, HeaderComponent,LoginBlockComponent, ProductsComponent],
  imports: [BrowserModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
