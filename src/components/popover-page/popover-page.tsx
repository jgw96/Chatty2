import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'popover-page'
})
export class PopoverPage {

  @Prop({ connect: 'ion-popover-controller' }) popoverCtrl: HTMLIonPopoverControllerElement;

  @Event() closePopover: EventEmitter;

  @Element() el: Element;

  async logout() {
    console.log('here');
    this.closePopover.emit();
    await firebase.auth().signOut();
    // this.history.replace('/', {});
    (document.querySelector('ion-nav') as HTMLIonNavElement).setRoot('auth-page');
  }

  render() {
    return (
      <ion-list no-lines>
        <ion-item onClick={() => this.logout()}><ion-label color='danger'>Logout</ion-label></ion-item>
      </ion-list>
    );
  }
}