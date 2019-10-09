import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeserviceService } from 'src/app/recipeservice.service';
import { HomeModel } from '../home.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  recipie: HomeModel;
  // tslint:disable-next-line: max-line-length
  constructor(private activatedRoute: ActivatedRoute , private recipiService: RecipeserviceService , private router: Router , private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        if (!data.has('id')) {
          return;
        }
        // tslint:disable-next-line:radix
        const id = parseInt(data.get('id'));
        this.recipie = this.recipiService.getRecipie(id);
      }

    );
  }
  onDelete() {
    this.alertCtrl.create({
      header: 'Étes vous Sur',
      message: 'Do you want to deletze this product',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'

      },
    {
        text: 'Supprimer',
        handler: () => {
             this.recipiService.deleteRecipie(this.recipie.id);
             this.router.navigate(['/home']);
        }
    }]
    }).then(alertEl => {
        alertEl.present();
    })

  }

}
