import { Component, OnInit } from '@angular/core';
import { PlacaBaseModel } from  "../placa-base-model"

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  public items: Array<any>;
   
 
  private placaBase: PlacaBaseModel[] = [
    {
      id: '1',
      title: "Placa base AMD",
      imageURL:
        "https://www.toureiffel.paris/themes/custom/tour_eiffel/img/picto_myGoogleBusiness_1.jpg",
      comments: ["Awesome flavor", "fresh and ready"]
    },
    {
      id: "2",
      title: "Placa base ASUS",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/71Inv9RA9CL._AC_SL1000_.jpg",
      comments: ["Awesome place", "wonderful experience"]
    },
    {
      id: "3",
      title: "Placa base INTEL",
      imageURL:
        "https://inteng-storage.s3.amazonaws.com/img/iea/ypwqn1mmON/sizes/statue-of-liberty_resize_md.jpg",
      comments: ["Awesome place", "wonderful experience"]
    }
  ];

  

}
