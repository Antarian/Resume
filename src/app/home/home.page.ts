import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    showBtn: boolean = false;
    deferredPrompt;
    constructor(public navCtrl: NavController) {

    }

    ionViewWillEnter(){
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later on the button event.
            this.deferredPrompt = e;

            // Update UI by showing a button to notify the user they can add to home screen
            this.showBtn = true;
        });

        //button click event to show the promt

        window.addEventListener('appinstalled', (event) => {
            // console.log('installed');
        });


        if (window.matchMedia('(display-mode: standalone)').matches) {
            // console.log('display-mode is standalone');
        }
    }

    add_to_home(){
        debugger
        // hide our user interface that shows our button
        // Show the prompt
        this.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice
          .then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                  // console.log('User accepted the prompt');
              } else {
                  // console.log('User dismissed the prompt');
              }
              this.deferredPrompt = null;
          });
    };

}
