import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list/product-list/product-list.component';
import { AddProductComponent } from './components/product/add-product/add-product/add-product.component';
import { ProductHttpService } from './http-services/product.service';
import { ProductService } from './services/product.service';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page/login-page.component';
import { AuthService } from './http-services/auth.service';
import { UserService } from './http-services/user.service';
import { RegComponent } from './reg/reg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    LoginPageComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ product: ProductReducer }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }), HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [ProductHttpService, ProductService,AuthService,UserService]
})
export class AppModule { }
