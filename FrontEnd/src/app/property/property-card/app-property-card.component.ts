import { Component, Input } from "@angular/core";
import { IProperty } from '../IProperty.interface';


@Component({
    selector:'app-property-card',
    //template:'<h1>This is a card!</h1>',
    templateUrl:'app-property-card.component.html',
    // styles:['h1{color:red;}'],
    styleUrls:['app-property-card.component.css']
})

export class AppPropertyComponent{
    @Input() property!: IProperty;
   
}