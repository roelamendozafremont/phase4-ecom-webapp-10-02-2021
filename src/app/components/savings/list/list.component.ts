import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class SavingListComponent implements OnInit {

  constructor() { }

  public show:boolean= false;
  ngOnInit(): void {
  }

  showMore(){
    this.show =! this.show;
  }



}
