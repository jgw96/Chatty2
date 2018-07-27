import { Component, State, Prop } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  alert: HTMLIonAlertElement;

  @State() rooms: any[] = [];

  @Prop({ connect: 'ion-alert-controller' }) alertCtrl: HTMLIonAlertControllerElement;

  componentDidLoad() {
    // Loads the last 12 rooms and listen for new ones.
    const callback = (snap) => {
      const data = snap.val();
      console.log(data);
      // this.rooms.push(data);
      this.rooms = this.rooms.concat(data);
    };

    firebase.database().ref('/rooms/').limitToLast(12).on('child_added', callback);
    firebase.database().ref('/rooms/').limitToLast(12).on('child_changed', callback);
  }

  private async newRoom() {
    this.alert = await this.alertCtrl.create({
      header: 'New Chat Room',
      inputs: [
        {
          type: 'text',
          name: 'roomName',
          placeholder: 'My Room Name'
        }
      ],
      buttons: [
        {
          text: 'Confirm',
          handler: async (value) => {
            console.log(value.roomName);

            try {
              console.log('pushing new room');
              await firebase.database().ref('/rooms').push({
                name: value.roomName,
                startedBy: {
                  name: firebase.auth().currentUser.displayName,
                  photo: firebase.auth().currentUser.photoURL
                }
              });
            }
            catch (err) {
              console.error(err);
            }
          }
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ]
    });
    await this.alert.present();
  }

  render() {
    return [
      <app-header></app-header>,
      <ion-content>

        <ion-list>
          {
            this.rooms.map((room) => {
              return (
                <ion-item href={`/room/${room.name}`}>
                  <ion-avatar slot='start'>
                    <ion-img src={room.startedBy.photo} alt='User Avatar'></ion-img>
                  </ion-avatar>
                  <ion-label>
                    <h2>{room.name}</h2>
                    <p>Started by {room.startedBy.name}</p>
                  </ion-label>

                  <ion-icon color='primary' slot='end' name='star-outline'></ion-icon>
                </ion-item>
              )
            })
          }
        </ion-list>

        <section id='newRoomButtonBlock'>
          <ion-button onClick={() => this.newRoom()} color='secondary' shape='round'>New Chat Room</ion-button>
        </section>
      </ion-content>
    ];
  }
}
