import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.page.html',
  styleUrls: ['./fotoperfil.page.scss'],
})
export class FotoperfilPage implements OnInit {
  uid: string;
  imagenes: string[];
  imagen = '';
  constructor(private navp: NavParams, private modal: ModalController, private alertController: AlertController,
              private uS: UsuarioService) { }

  ngOnInit() {
    this.uid = this.navp.get('id');
    this.imagenes = ['https://firebasestorage.googleapis.com/v0/b/babygym-8a2fc.appspot.com/o/perfil%2FUsuario.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/babygym-8a2fc.appspot.com/o/perfil%2FUsuario2.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/babygym-8a2fc.appspot.com/o/perfil%2FUsuario3.png?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/babygym-8a2fc.appspot.com/o/perfil%2FUsuario4.png?alt=media'
    ];

  }

  cerrar() {
    this.modal.dismiss();
  }

  selectImage(i: any) {
    this.imagen = i;
  }

  actualizar() {
    if (this.imagen === '') {
      this.presentAlert();
    } else if (this.imagen !== '') {
      this.uS.updateInfoU(this.uid, this.imagen).then(() => {
        this.cerrar();
      });
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Icono',
      subHeader: 'Seleccion Imagen',
      message: 'Por favor, selecciona una imagen para tu avatar',
      buttons: ['OK']
    });

    await alert.present();
  }

}
