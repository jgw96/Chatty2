/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@ionic/core';
import 'ionicons';


declare global {

  namespace StencilComponents {
    interface AppHeader {

    }
  }

  interface HTMLAppHeaderElement extends StencilComponents.AppHeader, HTMLStencilElement {}

  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
  }
  interface ElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-header': JSXElements.AppHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHome {

    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfile {
      'name': string;
    }
  }

  interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'name'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AuthPage {

    }
  }

  interface HTMLAuthPageElement extends StencilComponents.AuthPage, HTMLStencilElement {}

  var HTMLAuthPageElement: {
    prototype: HTMLAuthPageElement;
    new (): HTMLAuthPageElement;
  };
  interface HTMLElementTagNameMap {
    'auth-page': HTMLAuthPageElement;
  }
  interface ElementTagNameMap {
    'auth-page': HTMLAuthPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'auth-page': JSXElements.AuthPageAttributes;
    }
  }
  namespace JSXElements {
    export interface AuthPageAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MessageItem {
      'local': boolean;
      'message': any;
    }
  }

  interface HTMLMessageItemElement extends StencilComponents.MessageItem, HTMLStencilElement {}

  var HTMLMessageItemElement: {
    prototype: HTMLMessageItemElement;
    new (): HTMLMessageItemElement;
  };
  interface HTMLElementTagNameMap {
    'message-item': HTMLMessageItemElement;
  }
  interface ElementTagNameMap {
    'message-item': HTMLMessageItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'message-item': JSXElements.MessageItemAttributes;
    }
  }
  namespace JSXElements {
    export interface MessageItemAttributes extends HTMLAttributes {
      'local'?: boolean;
      'message'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyApp {

    }
  }

  interface HTMLMyAppElement extends StencilComponents.MyApp, HTMLStencilElement {}

  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface PopoverPage {

    }
  }

  interface HTMLPopoverPageElement extends StencilComponents.PopoverPage, HTMLStencilElement {}

  var HTMLPopoverPageElement: {
    prototype: HTMLPopoverPageElement;
    new (): HTMLPopoverPageElement;
  };
  interface HTMLElementTagNameMap {
    'popover-page': HTMLPopoverPageElement;
  }
  interface ElementTagNameMap {
    'popover-page': HTMLPopoverPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'popover-page': JSXElements.PopoverPageAttributes;
    }
  }
  namespace JSXElements {
    export interface PopoverPageAttributes extends HTMLAttributes {
      'onClosePopover'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface RoomPage {
      'name': string;
    }
  }

  interface HTMLRoomPageElement extends StencilComponents.RoomPage, HTMLStencilElement {}

  var HTMLRoomPageElement: {
    prototype: HTMLRoomPageElement;
    new (): HTMLRoomPageElement;
  };
  interface HTMLElementTagNameMap {
    'room-page': HTMLRoomPageElement;
  }
  interface ElementTagNameMap {
    'room-page': HTMLRoomPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'room-page': JSXElements.RoomPageAttributes;
    }
  }
  namespace JSXElements {
    export interface RoomPageAttributes extends HTMLAttributes {
      'name'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
