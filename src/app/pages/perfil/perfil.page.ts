import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FotoperfilPage } from '../fotoperfil/fotoperfil.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuarioData: any;
  id: any;
  colorfondo = '#fb8ef7';
  constructor(private route: ActivatedRoute, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuarioData = JSON.parse(params["datos"]);
      this.id = JSON.parse(params["ui"]);
    });
    if (this.usuarioData.genero === 'f') {
      this.colorfondo = '#fb8ef7';
    } else {
      this.colorfondo = '#ffb30f';
    }
  }

  async actualizar() {
    const modal = await this.modalCtrl.create({
      component: FotoperfilPage,
      cssClass: 'my-custom-class',
      componentProps: {
        id: this.id
      }
    });
    return await modal.present();
  }

}
