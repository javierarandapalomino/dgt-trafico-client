import { Component } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private numElements:number = 0;

  private bills: Item[] = [];

  addBill(description:string){
    this.bills.push({description});
    this.numElements++;
    console.log(this.numElements);
  }

  deleteBill(index:number){
    this.bills.splice(index, 1);
    this.numElements--;
  }
}
