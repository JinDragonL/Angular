import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  constructor(private viewContainerRef: ViewContainerRef) { }


  isShow: boolean = false;

  @ViewChild("templateContact")  public templateContact: TemplateRef<any>;


  ngOnInit(): void {
    console.log(this.templateContact);
   

  }

  ngAfterViewInit(): void {
    console.log(this.templateContact);

    this.viewContainerRef.createEmbeddedView(this.templateContact);
  }

}
