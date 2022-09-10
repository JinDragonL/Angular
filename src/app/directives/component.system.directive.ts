import { ComponentFactoryResolver, Directive, ViewContainerRef} from '@angular/core';
import { SystemComponent } from '../configuration/system/system.component';

@Directive({
  selector: '[system]'
})

export class ComponentSystemDirective {

  constructor(private factoryResolver: ComponentFactoryResolver, private viewContainerRef : ViewContainerRef) {
    const factory = this.factoryResolver.resolveComponentFactory(SystemComponent);
    this.viewContainerRef.createComponent(factory);
  }

}
