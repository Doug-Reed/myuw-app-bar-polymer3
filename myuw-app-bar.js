import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/app-layout/helpers/helpers.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-box/app-box.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';

/**
 * `myuw-app-bar`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyuwAppBar extends PolymerElement {
  static get template() {
    return html`
      <style>
        app-header {
          background-color: #00552a;
          font-family: 'Roboto', 'Noto', sans-serif;
          color: #fff;
        }
        app-header a {
          text-decoration: inherit;
          color: inherit;
        }
        app-drawer-layout {
          --app-drawer-layout-content-transition: margin 0.2s;
        }
        app-drawer {
          --app-drawer-content-container: {
            background-color: #eee;
          }
        }
        paper-icon-button {
          --paper-icon-button-ink-color: white;
        }
        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }
        paper-item {
          cursor: pointer;
        }
        .drawer-content {
          margin-top: 80px;
          height: calc(100% - 80px);
          overflow: auto;
        }
      </style>
      <app-header-layout>
        <app-header slot="header" reveals>
          <app-toolbar>
            <div main-title>[[pageTitle]]</div>
          </app-toolbar>
        </app-header>
        <app-drawer-layout>
          <app-drawer class="genre-drawer" slot="drawer">
            <div class="drawer-content">
              <slot name="drawer">Hello from drawer</slot>
            </div>
          </app-drawer>
        <slot name="main">Hello from main</slot>
        </app-drawer-layout>
      </app-header-layout>
    `;
  }
  static get properties() {
    return {
      pageTitle: {
        type: String,
        value: 'myuw-app-bar',
      },
    };
  }
}

window.customElements.define('myuw-app-bar', MyuwAppBar);
