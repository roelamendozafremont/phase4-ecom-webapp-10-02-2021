import { Component, OnInit } from '@angular/core';

import { SavingService } from 'src/app/services/saving.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  public savings: any;

  // inject dependencies
  constructor(private savingService: SavingService, private router:Router) { }

  ngOnInit(): void {

    this.getSavings();
  }

  public getSavings() {
    this.savingService.getSavings().subscribe(
      (res) => {
        this.savings = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public onDelete(id:string) {
    this.savingService.deleteSaving(id).subscribe(
      res => { 
        console.log("Saving is deleted !",id);
        this.getSavings();
       },
      err => { console.log("Saving delete failed! ");}
    )
  }

  public onUpdate(saving:any){
    this.router.navigateByUrl('/savings/update', { state: saving});
  }

}
