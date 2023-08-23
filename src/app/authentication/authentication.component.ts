import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnChanges {

  @Output("company") company: string;

  private authenticationService = inject(AuthenticationService);

  formLogin = this.formBuild.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(1)]],
  });

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {

  }

  @Input() public name: any;

  ngOnChanges(changes: SimpleChanges): void {
    // Do your check here
    console.log("name: ", this.name);
  }

  onSubmit() {

    const md = {
      username: this.formLogin.controls.username.value,
      password: this.formLogin.controls.password.value
    }

    this.authenticationService.login(md).subscribe();
  }
}
