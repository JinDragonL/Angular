import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public isShowSlider: boolean = false;

  public onShowSlider(){
    this.isShowSlider = !this.isShowSlider;
  }


}
