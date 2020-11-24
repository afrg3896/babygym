import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  resetForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private uServices: UsuarioService) {
    this.buildForm();
   }

  ngOnInit() {
  }

  resetP() {
    this.uServices.recover(this.resetForm.value.email);
  }

  buildForm(){
    this.resetForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]) ]
    });
  }

}
