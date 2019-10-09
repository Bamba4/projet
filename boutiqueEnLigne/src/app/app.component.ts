import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    const config = {
      apiKey: "AIzaSyBKV_6IFGdO14PowyoimKLU9WWlg8KFbGk",
      authDomain: "appareils-8820a.firebaseapp.com",
      databaseURL: "https://appareils-8820a.firebaseio.com",
      projectId: "appareils-8820a",
      storageBucket: "appareils-8820a.appspot.com",
      messagingSenderId: "361700675831",
      appId: "1:361700675831:web:6445693aee5608aa"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
