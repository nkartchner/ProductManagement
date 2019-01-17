import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getAll() {
    return this._http.get("/api/all");
  }

  getSingle(prodId) {
    return this._http.get(`/api/${prodId}`);
  }

  newModel(newprod) {
    return this._http.post('/api/new', newprod);
  }

  update(prodId, prodData){
    console.log('Hit the Services');
    
    console.log(prodData);
    return this._http.put(`/api/update/${prodId}`,prodData);
  }

  delete(prodId){
    return this._http.delete(`/api/delete/${prodId}`);
  }


}
