import { Component, inject } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { TokenHandlerService } from 'src/services/token.handler.service';
import { TranslateService } from '@ngx-translate/core';

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
  private tokenHandlerService = inject(TokenHandlerService);

  private translateService = inject(TranslateService);

  constructor() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en')
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

  switchLanguage(language: string) {
   this.translateService.use(language);
  }
}


//i18n - i18net
//ngx-translate/core
//transloco
//..
