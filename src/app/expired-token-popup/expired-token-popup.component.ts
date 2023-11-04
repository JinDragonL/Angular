import { Component, OnInit, Inject, inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-expired-token-popup',
  templateUrl: './expired-token-popup.component.html',
  styleUrls: ['./expired-token-popup.component.scss']
})

export class ExpiredTokenPopupComponent implements OnInit {
  private router = inject(Router);
  private authenticationService = inject(AuthenticationService);


  constructor(public dialogRef: MatDialogRef<ExpiredTokenPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close();
    this.authenticationService.logout();
    this.router.navigate(['/auth']);
  }
}
