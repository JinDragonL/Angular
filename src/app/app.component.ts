import { Component, inject } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Subscription } from 'rxjs';
import { TokenHandlerService } from 'src/services/token.handler.service';
import { TranslocoService } from '@ngneat/transloco';

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

  constructor(private translocoService: TranslocoService) {
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

  onChangeLanguage(language: string) {
    this.translocoService.setActiveLang(language);
  }
}

