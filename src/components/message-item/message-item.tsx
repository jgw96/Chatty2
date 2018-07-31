import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'message-item',
  styleUrl: 'message-item.css'
})
export class MessageItem {

  @Prop() message: any;

  render() {
    return (
      <ion-item class='messageItem' key={this.message.message}>
        <ion-avatar slot='start'>
          <ion-img src={this.message.user.photo}></ion-img>
        </ion-avatar>
        <ion-label>
          <h2>{this.message.message}</h2>
        </ion-label>
      </ion-item>
    );
  }
}