import { Component, Element } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'auth-page',
  styleUrl: 'auth-page.css'
})
export class AuthPage {

  @Element() el: HTMLElement;

  componentDidLoad() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        (this.el.closest('ion-nav') as HTMLIonNavElement).setRoot('app-home', null, { animated: false, direction: 'forward' });
      }
    })
  }

  private login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  
  render() {
    return (
      <ion-content>
        <main>
          <section id='titleBlock'>
            <h1>Chatty</h1>
          </section>

          <section id='buttonBlock'>
            <ion-button onClick={() => this.login()} shape='round' color='secondary'>Login with Google</ion-button>
          </section>
        </main>
      </ion-content>
    );
  }
}