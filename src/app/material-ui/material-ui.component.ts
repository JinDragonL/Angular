import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AdvancedFormComponent } from '../advanced-form/advanced-form.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-material-ui',
  templateUrl: './material-ui.component.html',
  styleUrls: ['./material-ui.component.scss']
})
export class MaterialUiComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }

  student = {
    name: 'A',
    age: 100
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdvancedFormComponent, {
      data: 1000,
      width: '500px',
      height: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
