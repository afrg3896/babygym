import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../../models/usuarioLogin.model';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginUser: UsuarioLogin = {
    email: '',
    password: ''
  };
  constructor(private uS: UsuarioService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  login(fLogin: NgForm) {
    if (fLogin.invalid) {
      this.uS.presentToast('Ingreso invalido, revise email y/o contraseña');
    } else {
      this.uS.loginUser(this.loginUser).then(() => {
      }).catch(err => {
        this.navCtrl.navigateForward('login');
      });
    }

  }

  atras() {
    this.navCtrl.navigateBack('inicio');
  }

}
