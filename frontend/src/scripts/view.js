/**
 * Kiran Earle. Frontend view entry point.
 */
import { SiftView, registerSiftView } from '@redsift/sift-sdk-web';
import React from 'react';
import { render } from 'react-dom';
import App from '../components/App'

export default class MyView extends SiftView {
  constructor() {
    // You have to call the super() method to initialize the SiftView base class.
    super();

    this.controller.subscribe('colors', this.onReceive.bind(this));
  }

  presentView(value) {
    const { data } = value || {};

    render(
      <App data={data} />,
    document.getElementById('root'));
  }

  onReceive(value) {
    this.presentView({ data: value });
  }
}

registerSiftView(new MyView(window));
