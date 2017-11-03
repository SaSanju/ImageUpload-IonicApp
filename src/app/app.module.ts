import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
import { MyApp } from './app.component';
 
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { ImagesProvider } from '../providers/images/images';
import { HomePage } from '../pages/home/home';
import { UploadModalPage } from '../pages/upload-modal/upload-modal';
import { PreviewModalPage } from '../pages/preview-modal/preview-modal';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UploadModalPage,
    PreviewModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UploadModalPage,
    PreviewModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImagesProvider,
    Camera,
    FileTransfer
  ]
})
 
export class AppModule {}
