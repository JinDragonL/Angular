import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { AESEncryptionService } from '../services/AESEncryption';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnChanges {

  @Output("company") company: string;

  private authenticationService = inject(AuthenticationService);
  private aESEncryptionService = inject(AESEncryptionService);

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

    const keySecret = this.aESEncryptionService.generateRandomKey();

    const encryptedPassword = this.aESEncryptionService.encrypt(this.formLogin.controls.password.value ?? '', keySecret);

    const md = {
      username: this.formLogin.controls.username.value,
      password: encryptedPassword,
      key: keySecret
    }

    this.authenticationService.login(md).subscribe();
  }
}
