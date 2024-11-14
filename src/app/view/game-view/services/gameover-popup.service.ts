import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable()
export class GameOverService {
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  public async onPopup(points: number, afterConfirmNewGame: () => void) {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Twój wynik: ' + points,
      buttons: [
        {
          text: 'powrót',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/app-view/home']);
          },
        },
        {
          text: 'Zagraj ponownie',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/game-view']);
            afterConfirmNewGame();
          },
        },
      ],
    });

    await alert.present();
  }
}
