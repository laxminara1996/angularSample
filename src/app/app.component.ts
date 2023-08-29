import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  country:string="";
  items:any=[];
   itemValue:string="";
   
  addItem(someData:any){
    this.items.push({
  item:someData.value
    });
  }


  productnames:string[]=["item1","item2","item3"];
productprices:number[]=[20.0,30.0,40.0];
products=
[{
  'id':'101',
  'name':'item1',
  'img':'../assets/Acer_Wallpaper_01_5000x2814.jpg',
  'price':'20.0',
},
{
  'id':'102',
  'name':'item2',
  'img':'../assets/Acer_Wallpaper_02_5000x2813.jpg',
  'price':'30.0',
},
{
  'id':'103',
  'name':'item3',
  'img':'../assets/Acer_Wallpaper_03_5000x2814.jpg',
  'price':'40.0',
}];
x:number=100;
}