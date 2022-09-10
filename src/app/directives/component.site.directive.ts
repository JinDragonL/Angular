import { ComponentFactoryResolver, Directive, ViewContainerRef} from '@angular/core';
import { SiteComponent } from '../configuration/site/site/site.component';

@Directive({
  selector: '[site]'
})
export class ComponentSiteDirective {

  constructor(private factoryResolver: ComponentFactoryResolver, private viewContainerRef : ViewContainerRef) {
    const factory = this.factoryResolver.resolveComponentFactory(SiteComponent);
    this.viewContainerRef.createComponent(factory);
  }

}
