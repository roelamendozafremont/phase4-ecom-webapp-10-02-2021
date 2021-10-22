import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CIListComponent implements OnInit {


  public cartItems: any = [
    {
      id: 111,
      date: 'Oct 21, 2021 11:00am',
      totalPrice: 20.00,
      customer: {
        first: "Roel",
        middle: "A",
        last: "Mendoza",
        phone: "5105094731",
        address: "gelndwood st fremont ca"
      },
      products: [
        {
          name: "diniguan",
          price: 10.00,
          description: "pork blood stew"
        }, {
          name: "sinigang",
          price: 10.00,
          description: "pork sour stew"
        }]
    }, {
      id: 222,
      date: 'Oct 212, 2021 11:00am',
      totalPrice: 110.2,
      customer: {
        first: "Roel",
        middle: "A",
        last: "Mendoza",
        phone: "5105094731",
        address: "gelndwood st fremont ca"
      },
      products: [
        {
          name: "diniguan",
          price: 10.00,
          description: "pork blood stew"
        }, {
          name: "sinigang",
          price: 10.00,
          description: "pork sour stew"
        }]
    }



  ]

  constructor() { }

  ngOnInit(): void {
  }

}
