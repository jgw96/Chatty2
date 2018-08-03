import { Component, Prop, State, Listen } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css'
})
export class AppHeader {

  popover: HTMLIonPopoverElement;

  @Prop({ connect: 'ion-popover-controller' }) popoverCtrl: HTMLIonPopoverControllerElement;

  @State() profilePic: string;

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.profilePic = user.photoURL;
      }
    });
  }

  @Listen('body:closePopover')
  closePopover() {
    this.popover.dismiss();
  }

  async openPopover(event) {
    console.log(event);
    this.popover = await this.popoverCtrl.create({
      component: 'popover-page',
      ev: event
    });

    await this.popover.present();
  }

  render() {
    return (
      <ion-header md-height="96px">
        <ion-toolbar color='primary'>
          <ion-buttons slot="start">
            <slot></slot>
          </ion-buttons>
          <ion-title>Chatty Alpha</ion-title>

          <ion-buttons slot='end'>
            <ion-button fill='clear' onClick={(ev) => this.openPopover(ev)} icon-only>
              {this.profilePic ? <img id='userImage' src={this.profilePic} alt='user profile'></img> : <div id='fake-image'></div>}
            </ion-button>
          </ion-buttons>
        </ion-toolbar>

        <slot name='searchbarSlot'></slot>
      </ion-header>
    );
  }
}