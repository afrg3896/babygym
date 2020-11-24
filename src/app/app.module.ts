import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, AngularFireDatabaseModule, AngularFireStorageModule, AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Base64ToGallery,
    Flashlight,
    CameraPreview,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
