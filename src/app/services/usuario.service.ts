import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { BaseImagen } from '../models/baseImage.model';
import { ImagenS } from '../models/ImagenS.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  isLoading = false;
  constructor( private firestore: AngularFirestore, public toastController: ToastController, private loadingController: LoadingController,
               private navCtrl: NavController, private storageA: AngularFireStorage, private router: Router) { }

  registerUser(email, password, value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
      res => {resolve(res); this.registro(value).then(() => this.presentToast('Registro de Usuario Exitoso!')); },
      err => reject(err));
    });
  }

  recover(email: string) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email).then(
      res => {resolve(res); this.presentToast('Se ha enviado un correo a su email para restablecer la contraseña'); },
      err => {reject(err); this.presentToast('No fue posible restablecer su contraseña, Intente nuevamente'); }
      );
    });
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.presentLoading('Ingresando');
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => {resolve(res); this.dismiss(); this.navCtrl.navigateForward('home'); },
        err => {reject(err); this.presentToast('No se puede ingresar, intente nuevamente'); this.dismiss(); });
      }).catch(() => {
    });
  }

  registro(vale) {
    const uid = this.userDetails().uid;
    return this.firestore.collection('Usuarios').doc(uid).set(vale);
  }
  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
      .then(() => {
        resolve();
        this.presentToast('Sesión Cerrada');
        this.router.navigateByUrl('/login');
      }).catch((error) => {
        reject();
      });
      }
    });
  }
  userDetails() {
    return firebase.auth().currentUser;
  }

  getUsuario(id: string) {
    return this.firestore.collection('Usuarios').doc(id).valueChanges();
  }


  async presentLoading(mensaje: string) {
    this.isLoading = true;
    return await this.loadingController.create({
      message: mensaje,
      duration: 5000,
      }).then(a => {
      a.present().then(() => {
      if (!this.isLoading) {
      a.dismiss();
      }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
    message: mensaje,
    duration: 2000
    });
    toast.present();
  }

  listarImagen() {
    return this.firestore.collection('Imagenes', ref => ref.orderBy('fechacreado', 'desc')).snapshotChanges();
  }


  // Firebase Storage
  cargar_imagen_firebase(archivo: BaseImagen) {
    const promesa = new Promise((resolve, reject) => {
    this.presentToast('Subiendo imagen...');
    const storeRef = firebase.storage().ref();
    const nombreArchivo = new Date().valueOf().toString();
    const uploadTask: firebase.storage.UploadTask =
    storeRef.child(`imagenes/${archivo.nombre}`)
             .putString(archivo.base, 'data_url', {contentType: 'image/jpeg'});
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
       () => {},
       (error) => {
         this.presentToast('Error: No se pudo subir la imagen');
         reject();
       },
       () => {
         this.presentToast('Imagen cargada correctamente');
         uploadTask.snapshot.ref.getDownloadURL().then(urlImage => {
           this.cargar_imagenes(archivo.base, archivo.nombre, archivo.fechacreado, urlImage, nombreArchivo);
           }).catch((error) => {
             this.presentToast('Error: No se pudo subir la imagen');
           });
         resolve();
       }
     );
    });
    return promesa;
  }

  private cargar_imagenes(base64: string, name: string, fecha: number, urlI: string, id: string) {
    const post: ImagenS = {
    base: base64 ,
    nombre: name,
    url: urlI,
    fechacreado: fecha
    };
    return this.firestore.collection('Imagenes').doc(id).set(post);
  }

  updateInfoU(uid: string, dato: string) {
    return this.firestore.collection('Usuarios').doc(uid).update({imagen: dato}).then(() => {
      this.presentToast('Actualización del Avatar completa');
    }).catch(() => {
      this.presentToast('No se pudo actualizar la información');
    });
  }
}
