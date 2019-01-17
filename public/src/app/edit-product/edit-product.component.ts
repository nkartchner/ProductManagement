import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  prod: any;
  prodEdit = new FormGroup({
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
    return this.prodEdit.get('title');
  }

  get price() {
    return this.prodEdit.get('price');
  }

  get imgUrl() {
    return this.prodEdit.get('imgUrl');
  }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._httpService.getSingle(params['id'])
        .subscribe(data => {
          console.log("Got the data")
          console.log(data);
          this.prod = data['data'][0];
          this.prodEdit = new FormGroup({
            title: new FormControl(this.prod.title, [Validators.required, Validators.minLength(4)]),
            price: new FormControl(this.prod.price, Validators.required),
            imgUrl: new FormControl(this.prod.imgUrl)
          })
        });
    });
  }

  update() {
    this._httpService.update(this.prod._id, this.prodEdit.value)
      .subscribe(data => {
        console.log("Updated", data);
        this._router.navigate(['/products']);
      });
  };

  remove() {
    this._httpService.delete(this.prod._id)
      .subscribe(data => {
        console.log('deleted', data);
        this._router.navigate(['/products'])
      });
  };


}
