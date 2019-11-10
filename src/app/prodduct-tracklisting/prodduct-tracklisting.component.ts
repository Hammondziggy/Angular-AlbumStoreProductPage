import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Album } from '../album';

@Component({
  selector: 'app-prodduct-tracklisting',
  templateUrl: './prodduct-tracklisting.component.html',
  styleUrls: ['./prodduct-tracklisting.component.css']
})
export class ProdductTracklistingComponent implements OnInit {

  albumInfo:Album;
  
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
