import { Component, Prop, State } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'room-page',
  styleUrl: 'room-page.css'
})
export class RoomPage {

  @Prop() name: string;

  @State() messages: any[] = [];
  @State() messageValue: string;

  componentDidLoad() {
    // Loads the last 12 rooms and listen for new ones.
    const callback = (snap) => {
      const data = snap.val();
      console.log(data);

      this.messages = this.messages.concat(data);
    };

    firebase.database().ref(`/messages/${this.name}`).limitToLast(12).on('child_added', callback);
    firebase.database().ref(`/messages/${this.name}`).limitToLast(12).on('child_changed', callback);
  }

  handleInputValue(event) {
    this.messageValue = event.target.value;
  }

  async newMessage() {
    if (this.messageValue) {
      try {
        await firebase.database().ref(`/messages/${this.name}`).push({
          message: this.messageValue,
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
        <ion-back-button defaultHref="/" />
      </app-header>,

      <ion-content>
        <ion-list>
          {
            this.messages.map((message) => {
              return (
                <ion-item class='messageItem' key={message.message}>
                  <ion-avatar slot='start'>
                    <ion-img src={message.user.photo}></ion-img>
                  </ion-avatar>
                  <ion-label>
                    <h2>{message.message}</h2>
                  </ion-label>
                </ion-item>
              )
            })
          }
        </ion-list>
      </ion-content>,

      <ion-footer>
        <ion-toolbar>
          <ion-input onIonInput={(ev) => this.handleInputValue(ev)} type='text' placeholder='New Message...'></ion-input>

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