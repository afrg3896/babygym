import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { AgregarImagePage } from '../agregar-image/agregar-image.page';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.page.html',
  styleUrls: ['./imagenes.page.scss'],
})
export class ImagenesPage implements OnInit {
  private ngUnsubscribe = new Subject();
  imagenes: any;
  u = '';
  esperando = false;
  constructor(private modalController: ModalController, private uService: UsuarioService, private nav: NavController) { }

  ngOnInit() {
    if(this.uService.userDetails()) {
      this.u = this.uService.userDetails().uid;
      this.uService.listarImagen().pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
        this.imagenes = data.map(e => {
          return {
            base: e.payload.doc.data()['base'],
            nombre: e.payload.doc.data()['nombre'],
            fechacreado: e.payload.doc.data()['fechacreado'],
            url: e.payload.doc.data()['url']
          };
        });
        this.esperando = true;
      });
    } else {
      this.nav.navigateBack('/pagina2');
    }
  }

  async irAgregarE() {
    const modal = await this.modalController.create({
      component: AgregarImagePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
