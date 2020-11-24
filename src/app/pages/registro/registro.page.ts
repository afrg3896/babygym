import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  registroForm: FormGroup;
  usuario: Usuario = {
    email: '',
    nombre: '',
    telefono: 0,
    nido: '',
    genero: '',
    imagen: ''
  };
  constructor(private uS: UsuarioService, public formBuilder: FormBuilder, private nav: NavController) {
    this.buildForm();
  }

  ngOnInit() {
  }

  registro() {
    this.asignar();
    this.uS.registerUser(this.usuario.email, this.registroForm.value.password, this.usuario).then(() => {
      this.nav.navigateForward('/login');
    });
  }

  buildForm(){
    this.registroForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-ZÁÉÍÓÚñáéíóúÑ\s]{2,16}$/)])],
      // tslint:disable-next-line: max-line-length
      telefono: Validators.compose([Validators.required, Validators.minLength(7),Validators.maxLength(10)]),
      nido: ['1', Validators.required],
      genero: ['f', Validators.required]
    });
  }

  asignar() {
    this.usuario.email = this.registroForm.value.email;
    this.usuario.nombre = this.registroForm.value.name;
    this.usuario.telefono = this.registroForm.value.telefono;
    this.usuario.nido = this.registroForm.value.nido;
    this.usuario.genero = this.registroForm.value.genero;
    this.usuario.imagen = '';

  }

}
