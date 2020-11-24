import { Component, OnDestroy, OnInit } from '@angular/core';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  smallPreview: boolean;
  IMAGE_PATH: any;
  colorEffect = 'none';
  setZoom = 1;
  flashMode = 'off';
  isToBack = false;
  sw = false;
  constructor(
    private cameraPreview: CameraPreview
  ) { }


  ngOnInit() {
  }

  startCameraAbove() {
      this.stopCamera();
      this.isToBack = false;
      this.cameraPreview.startCamera({x: 50, y: 50, width: 300, height: 300, toBack: false, previewDrag: true, tapPhoto: true});
  }

  startCameraBelow() {
      this.isToBack = true;
      this.sw = true;
      this.cameraPreview.startCamera({ x: 0, y: 50, width: window.screen.width, height: window.screen.height, camera: 'front', tapPhoto: true, previewDrag: false, toBack: true });
  }


  stopCamera() {
    this.sw = false;
    this.isToBack = false;
    this.cameraPreview.stopCamera();
  }

  takePicture() {
    this.cameraPreview.takePicture({
      width: 1280,
      height: 1280,
      quality: 85
    }).then((imageData) => {
      this.IMAGE_PATH = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.IMAGE_PATH = 'assets/img/test.jpg';
    });
  }

  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  show() {
    this.cameraPreview.show();
  }

  hide() {
    this.cameraPreview.hide();
  }

  changeColorEffect() {
    this.cameraPreview.setColorEffect(this.colorEffect);
  }

  changeFlashMode() {
    this.cameraPreview.setFlashMode(this.flashMode);
  }

  changeZoom() {
    this.cameraPreview.setZoom(this.setZoom);
  }

}
