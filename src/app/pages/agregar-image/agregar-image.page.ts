import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { BaseImagen } from '../../models/baseImage.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-image',
  templateUrl: './agregar-image.page.html',
  styleUrls: ['./agregar-image.page.scss']
})
export class AgregarImagePage {
  image: string;
  IMAGE_PATH: any;
  setZoom = 1;
  isToBack = false;
  subidaForm: FormGroup;
  constructor(private modalCtl: ModalController, private uS: UsuarioService, private cameraPreview: CameraPreview,
              public formBuilder: FormBuilder) {
                this.buildForm();
              }


  cerrar() {
    this.stopCamera();
    this.modalCtl.dismiss();
  }

  startCameraAbove() {
    this.stopCamera();
    this.cameraPreview.startCamera({x: 50, y: 50, width: 300, height: 300, toBack: false, previewDrag: true, tapPhoto: true});
  }

  stopCamera() {
    this.cameraPreview.stopCamera();
  }

  takePicture() {
    this.cameraPreview.takePicture({
      width: 1280,
      height: 1280,
      quality: 85
    }).then((imageData) => {
      this.IMAGE_PATH = 'data:image/jpeg;base64,' + imageData;
      this.stopCamera();
    }, (err) => {
      console.log(err);
      this.IMAGE_PATH = 'assets/img/test.jpg';
    });
  }
  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  changeZoom() {
    this.cameraPreview.setZoom(this.setZoom);
  }

  show() {
    this.cameraPreview.show();
  }

  hide() {
    this.cameraPreview.hide();
  }

  buildForm() {
    this.subidaForm = this.formBuilder.group({
      // tslint:disable-next-line: max-line-length
      nombreI: ['', Validators.compose([Validators.required, Validators.maxLength(60)])]
    });
  }

  upload() {
    const imagen: BaseImagen = {
      base: this.IMAGE_PATH,
      nombre: this.subidaForm.value.nombreI,
      fechacreado: Date.now()
    };
    this.uS.cargar_imagen_firebase(imagen).then(() => {
      this.subidaForm.reset();
      this.IMAGE_PATH = '';
      this.cerrar();
    });

  }


}
