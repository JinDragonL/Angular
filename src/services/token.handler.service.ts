import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import jwtDecode from 'jwt-decode';
import { ExpiredTokenPopupComponent } from 'src/app/expired-token-popup/expired-token-popup.component';
import { environment } from 'src/environments/environment';
import { JwtTokenModel } from 'src/models/JwtTokenModel';

@Injectable({providedIn: 'root'})

export class TokenHandlerService {

    intervalExpiredToken: any;

    constructor(public dialog: MatDialog) { }
    
    TOKEN_NAME = "access_token";

    showConfirmExpiredToken(): void {
        
        const defaultTimeOutToken = environment.expiredTokenTime;

        this.intervalExpiredToken = setInterval(() => {
            const remainingTime = this.getTokenRemainingTime();

            if(remainingTime <= defaultTimeOutToken) {
                this.destroyExpiredTokenInterval();
                
                let dialogRef = this.dialog.open(ExpiredTokenPopupComponent, {
                    width: '250px',
                    data: { remainingTime: remainingTime }
                });

                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed');
                });
            }
        }, 3000);
    }

    getTokenRemainingTime(): number {
        const tokenStorage = localStorage.getItem(this.TOKEN_NAME);

        if(!tokenStorage) {
          return 0;
        }

        const token = jwtDecode<JwtTokenModel>(tokenStorage);

        const expiredDate = token.exp;   //1696860923

        const currentDate = Math.floor(Date.now() / 1000);

        const seconds = expiredDate - currentDate;

        return seconds;
    }
 
    destroyExpiredTokenInterval() {

        if(!this.intervalExpiredToken) return;

        clearInterval(this.intervalExpiredToken);
    }
}