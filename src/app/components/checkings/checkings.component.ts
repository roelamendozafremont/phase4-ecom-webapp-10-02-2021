import { Component, OnInit } from '@angular/core';

import { CheckingService } from 'src/app/services/checking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkings',
  templateUrl: './checkings.component.html',
  styleUrls: ['./checkings.component.css']
})
export class CheckingsComponent implements OnInit {

  public checkings: any;

  // inject dependencies
  constructor(private checkingService: CheckingService, private router:Router) { }

  ngOnInit(): void {

    this.getCheckings();
  }

  public getCheckings() {
    this.checkingService.getCheckings().subscribe(
      (res) => {
        this.checkings = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public onDelete(id:string) {
    this.checkingService.deleteChecking(id).subscribe(
      res => { 
        console.log("Checking is deleted !",id);
        this.getCheckings();
       },
      err => { console.log("Checking delete failed! ");}
    )
  }

  public onUpdate(checking:any){
    this.router.navigateByUrl('/checkings/update', { state: checking});
  }

}
