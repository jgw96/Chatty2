import '@ionic/core';
import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {
  @Prop({ connect: 'ion-toast-controller' })
  toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen('window:swUpdate')
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'New version available',
      showCloseButton: true,
      closeButtonText: 'Reload'
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="auth-page" />
          <ion-route url='/home' component='app-home' />
          <ion-route url='/room/:name' component='room-page'></ion-route>
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>

        {/*<ion-split-pane>
          <ion-menu>
            <ion-header>
              <ion-toolbar color="primary">
                <ion-title>Menu</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content>
              <ion-list>
                <ion-menu-toggle>
                  <ion-item href="/home">
                    <ion-icon slot="start" name="home"></ion-icon>
                    <ion-label>
                      Home
                    </ion-label>
                  </ion-item>
                </ion-menu-toggle>
              </ion-list>
            </ion-content>
          </ion-menu>

          <ion-nav main></ion-nav>

        </ion-split-pane>*/}

        <ion-nav></ion-nav>
      </ion-app>
    );
  }
}
