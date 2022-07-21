import { Component } from '@angular/core';
import { AppService } from './app.service';
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
  
  constructor(private appService: AppService,
 ) { }
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
check()
{}
}


