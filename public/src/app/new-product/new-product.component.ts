import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProd = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    imgUrl: new FormControl()
  })
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  
    get title() {
      return this.newProd.get('title');
    }
  
    get price() {
      return this.newProd.get('price');
    }
  
    get imgUrl() {
      return this.newProd.get('imgUrl');
    }


  ngOnInit() {
    this.newProd = new FormGroup({
      title: new FormControl("", [Validators.required, Validators.minLength(4)]),
      price: new FormControl("", Validators.required),
      imgUrl: new FormControl()
    });
  }

  addProd(){
    this._httpService.newModel(this.newProd.value)
        .subscribe(data => {
          console.log("Added one!");
          console.log(data);
          this._router.navigate(['/products']);
        });
  }


}
