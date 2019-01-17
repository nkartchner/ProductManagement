import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: string[];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getAll()
        .subscribe(data => {
          console.log("got the data back", data)
          this.products = data['data'];
        });
  };

  remove(id:any){
    console.log(id);
    this._httpService.delete(id)
        .subscribe(data => {
          console.log('deleted', data);
        });
  }

}
