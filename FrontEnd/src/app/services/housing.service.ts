import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../model/iproperty';
import { Observable } from 'rxjs';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  getAllProperties(SellRent:number):Observable<IProperty[]>{
    console.log("SellRent:" + SellRent);
    return this.http.get("data/properties.json")
    .pipe(
      map(data=>{
        //Method I:
        const jsonData = JSON.stringify(data);
        const propertiesArray:Array<IProperty> = JSON.parse(jsonData);
        const selectedProperties:Array<IProperty>=[];

        for(let i=0; i < propertiesArray.length; i++){
          //console.log(propertiesArray[i]);
          if(propertiesArray[i].SellRent === SellRent){
            //console.log("SellRent:" + propertiesArray[i].SellRent);
            selectedProperties.push(propertiesArray[i]);
            //propertiesArray.splice(i,1);
          }
        }
        return selectedProperties;
        //return propertiesArray;

        //Method II:(but giving an error)
        // const propertiesArray:Array<IProperty>=[];
        // for(const id in data){
        //   if(data.hasOwnProperty(id)){
        //     propertiesArray.push(data[id]);
        //   }
        // }
        // return propertiesArray;

      })
    );
  }
}
