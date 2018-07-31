import { Component, Prop, State } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'room-page',
  styleUrl: 'room-page.css'
})
export class RoomPage {

  contentElement: HTMLIonContentElement;

  @Prop() name: string;

  @State() messages: any[] = [];
  @State() messageValue: string;

  componentDidLoad() {
    // Loads the last 12 rooms and listen for new ones.
    const callback = async (snap) => {
      const data = snap.val();

      this.messages = this.messages.concat(data);
      await this.contentElement.getScrollElement().scrollToBottom(0);
    };

    firebase.database().ref(`/messages/${this.name}`).limitToLast(15).on('child_added', callback);
    firebase.database().ref(`/messages/${this.name}`).limitToLast(15).on('child_changed', callback);

    setTimeout(() => {
      this.contentElement.getScrollElement().scrollToBottom(0);
    }, 300);
  }

  handleInputValue(event) {
    this.messageValue = event.target.value;
  }

  async newMessage() {
    if (this.messageValue) {
      // store message value
      const messageData = this.messageValue;

      // set to empty string to clear input
      this.messageValue = '';

      try {
        await firebase.database().ref(`/messages/${this.name}`).push({
          message: messageData,
          user: {
            name: firebase.auth().currentUser.displayName,
            photo: firebase.auth().currentUser.photoURL
          }
        });
      }
      catch (err) {
        console.error(err);
      }
    }
  }

  render() {
    return [
      <app-header>
        <ion-back-button defaultHref="/home" />
      </app-header>,

      <ion-content ref={(el: HTMLIonContentElement) => this.contentElement = el}>
        <ion-list>
          {
            this.messages.map((message) => {
              if (message.user.photo === firebase.auth().currentUser.photoURL) {
                return (
                  <message-item local={true} message={message}></message-item>
                )
              } else {
                return (
                  <message-item local={false} message={message}></message-item>
                )
              }
            })
          }
        </ion-list>
      </ion-content>,

      <ion-footer>
        <ion-toolbar>
          <ion-input onIonInput={(ev) => this.handleInputValue(ev)} value={this.messageValue} type='text' placeholder='New Message...'></ion-input>

          <ion-buttons slot='end'>
            <ion-button onClick={() => this.newMessage()} fill='clear' icon-only>
              <ion-icon name='send'></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer>
    ]
  }
}