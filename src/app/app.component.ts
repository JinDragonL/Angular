import { Component, inject } from '@angular/core';
import { LoadingBarService } from './services/loading-bar.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showFiller:boolean;
  loadingComplete = true;
  isShowSubMenu: boolean = false;
  isShowSubOtherMenu: boolean = false;
  isShowSlider: boolean = false;

  protected authenticationService = inject(AuthenticationService);

  constructor() {
    
  }

  public onShowSlider(){
    this.isShowSlider = !this.isShowSlider;
  }

  showSubMenu() {
    this.isShowSubMenu = !this.isShowSubMenu;
  }

  showSubMenuOther() {
    this.isShowSubOtherMenu = !this.isShowSubOtherMenu;
  }


  logOut(){
    this.authenticationService.logout();
  }

}
