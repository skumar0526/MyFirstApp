import { Component } from '@angular/core';
import { IProduct } from './services/product';
import { ProductService } from './services/products.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'app';
 appTitle = 'Welcome';
appStatus = true;
 appList: any[]= [
 {'ID': '1', 'NAME': 'Tour of Heroes' , 'HREF': 'https://angular.io/tutorial'},
    {'ID': '2', 'NAME': 'CLI Documentation', 'HREF': 'https://github.com/angular/angular-cli/wiki' },
    {'ID': '3', 'NAME': 'Angular blog', 'HREF': 'https://blog.angular.io/' }
 ];

  iproducts: IProduct[];
 constructor(private _product: ProductService) {
 console.log('Constructer called');

 }

  onInit(): void {
  console.log('onInit called');
  this._product.getproducts()
  .subscribe(iproducts => this.iproducts = iproducts);
}

}
