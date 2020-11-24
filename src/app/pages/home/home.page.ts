import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: any;
  esperando = false;
  userInfo: any;
  private ngUnsubscribe = new Subject();
  constructor( private nav: NavController, private us: UsuarioService) { }

  ngOnInit() {
    if (this.us.userDetails()) {
      this.usuario = this.us.userDetails().uid;
      this.us.getUsuario(this.usuario).pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
        this.userInfo = data;
      });
    } else {
      this.nav.navigateBack('/login');
    }
  }


  irColorear() {
    this.nav.navigateForward('/colorear');
  }

  irCamara() {
    this.nav.navigateForward('/camara');
  }

  irLinterna() {
    this.nav.navigateForward('/linterna');
  }

  irEmociones() {
    this.nav.navigateForward('/emociones');
  }

  irImagen() {
    this.nav.navigateForward('/imagenes');
  }

  logout() {
    this.us.logoutUser();
  }

  irPerfil() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        datos: JSON.stringify(this.userInfo),
        ui: JSON.stringify(this.usuario)
      }
    };
    this.nav.navigateForward(['/perfil'], navigationExtras);
  }

}
