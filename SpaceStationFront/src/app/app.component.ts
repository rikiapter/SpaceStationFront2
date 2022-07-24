import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from './app.service';
import { DialogElementsExampleDialog } from './dialog/dialog.component';
import { IssNow } from './iisnow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'SpaceStationFront';
  data : any ;
  timeLeft: number = 2;
  listData:any;
  
  constructor(private appService: AppService,public dialog: MatDialog) { }

 

  openDialog() {
    const dialogRef  = this.dialog.open(DialogElementsExampleDialog, {
      data: 
       this.data
      ,
    });

    dialogRef.afterClosed().subscribe(result => {
    this.  listData=result;//  console.log(`Dialog result: ${result}`);
    });
  }

 ngOnInit(): void {
   var interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
      this.appService.getissnowAsync().subscribe(res => {
        this.data = res;
        
      })
    } else {
      this.timeLeft = 2;
    }
  },1000
   )

}
onClickSubmit(result:any) {
  console.log("You have entered : " + result.username); 
}

}


