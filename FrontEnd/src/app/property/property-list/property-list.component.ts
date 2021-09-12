
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../../model/iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;

  properties!: Array<IProperty>;
  constructor(private route:ActivatedRoute, private housingService: HousingService ) {}

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; //Means we are on rent-property URL else we are on base URL
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties = data;

        let i ;
        for(i = 0; i < this.properties.length; i++){
          console.log(this.properties[i]);
        }
        //console.log(this.route.snapshot.url.toString());
      },error=>{
        console.log('httperror!');
        console.log(error);
      }
    );
    // this.http.get("data/properties.json").subscribe(
    //   data=>{
    //     this.properties = data;
    //     console.log(data)
    //   }
    // );
  }

}
