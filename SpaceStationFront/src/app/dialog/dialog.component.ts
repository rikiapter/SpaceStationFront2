  import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../app.service';
import { IssNow } from '../iisnow';


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogElementsExampleDialog {
  constructor(private appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data: any
    , public dialogRef: MatDialogRef<DialogElementsExampleDialog>) { }

 
  check(result:any)
{
this.data.message=result.note;
  this.appService.setissnowAsync(this.data).subscribe(res => {
    this.dialogRef.close(res);
  })

}


}