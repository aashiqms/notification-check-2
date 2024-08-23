import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {
  FirebaseMessaging,
  GetTokenOptions,
} from "@capacitor-firebase/messaging";
import { Capacitor } from "@capacitor/core";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ HttpClientModule, RouterModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  token: any;

	constructor(
	) {
    this.getToken()
	}

  public async requestPermissions(): Promise<void> {
    if (Capacitor.getPlatform() === "ios") {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
           console.log('FIREBASE CLOUD MESSAGING Notification permission granted.');
  
           
        }
     })    
     return
    }
    let result = await FirebaseMessaging.requestPermissions();
    if(result?.receive === 'granted') {
      this.getToken()
    }
    console.log('result', result)
  }

  public async getToken(): Promise<void> {
    const options: GetTokenOptions = {
      vapidKey: "BFncumAuqdn0UuKOX2qDDDYrgmB123jDB9Fxbr7h4y7TIWk65lFMqzKaTyldo7LWcHkIfHez4mnRe2imG9BkrcI",
    };
    if (Capacitor.getPlatform() === "web") {
      options.serviceWorkerRegistration =
        await navigator.serviceWorker.register("firebase-messaging-sw.js");
    }
    const { token } = await FirebaseMessaging.getToken(options);
    this.token = token;
  }

  copyMessage(){
    if(!this.token) {
      alert('token not present');
      return;
    }
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.token;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
