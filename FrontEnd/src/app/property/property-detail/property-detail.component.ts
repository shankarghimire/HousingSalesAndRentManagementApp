import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = 'id';
    //Method I : To convert the path Id into number
    //here .params[id], id should be exactly same as in app.module.ts's '/:id' as like {path:'property-detail/:id',component: PropertyDetailComponent},
    this.propertyId = +this.route.snapshot.params[id];
    //Method II:
    //this.propertyId =Number(this.route.snapshot.params[id]);

    //////////////////////
    this.route.params.subscribe(
      (params)=>{
        this.propertyId = +params['id'];  // + to convert string id value to int value
      }
    );

  }

  onSelectNext():void{
    this.propertyId +=1;
    this.router.navigate(['property-detail',this.propertyId]);
  }

}
