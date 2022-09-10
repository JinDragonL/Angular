import {  Component, ComponentFactoryResolver, Inject, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { HomeService } from 'src/services/home.service';
import { SiteComponent } from '../configuration/site/site/site.component';
import { SystemComponent } from '../configuration/system/system.component';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent implements OnInit, OnDestroy {
  @ViewChild("system", {read: ViewContainerRef}) system: ViewContainerRef;
  @ViewChild("site", {read: ViewContainerRef}) site: ViewContainerRef;

 
  constructor(
    private _homeService: HomeService, 
    private componentFactoryResolver: ComponentFactoryResolver
    ) { 

    

  }
  private _unSubject$ = new Subject();
  public message: string = "";

  ngOnInit(): void {

   this._homeService._behaviorSubject.pipe(takeUntil(this._unSubject$))
                                     .subscribe(data => {
                                          this.message = data;
                                        });
  }

  ngOnDestroy(): void {
    this._unSubject$.unsubscribe();
  }

  handleChange(evt:any){
    let target = evt.target.id;

    // if(target === "tab1"){
    //   this.system.clear();
    //   const factory = this.componentFactoryResolver.resolveComponentFactory(SystemComponent);
    //   this.system.createComponent(factory);
    // }
    // else
    // {
    //   //this.system.remove();
    //   this.site.clear();
    //   const factory = this.componentFactoryResolver.resolveComponentFactory(SiteComponent);
    //   this.site.createComponent(factory);
    // }
  }


  // ComponentFactoryResolver
  // ViewContainerRef





}
