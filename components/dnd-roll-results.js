import {PolymerElement, html} from '@polymer/polymer';
import "./styles/material-styles.js";
import "./styles/my-styles.js";
import { rollEventChannel } from '../util/roll.js';
import { getEditModeChannel } from '../util/editMode.js';

class DndRollResults extends PolymerElement {
  
  static get properties() {
    return {
      rollResults: {
        type: Array,
        value: []
      },
      focusRoll: {
        type: Number,
        value: 0
      },
      isOpen: {
        type: Boolean,
        value: false
      }
    };
  }

  
  connectedCallback() {
    super.connectedCallback();

    this.rollHandler = (e) => {
      console.error('new-roll', e.detail);
      this.push('rollResults', e.detail);
      this.focusRoll = this.rollResults.length - 1;
      this.isOpen = true;

      setTimeout(() => {
        this.$.scrollContainer.scrollTo({top: this.$.scrollContainer.scrollHeight, behavior: 'smooth'});
      }, 500);
    };
    rollEventChannel().addEventListener('new-roll', this.rollHandler);

    // this.$.scrollContainer.addEventListener('click', (e) => {
    //   if (!e.target.closest('.roll-result')) {
    //     this.isOpen = false;
    //   }
    // });

    this.editModeHandler = (e) => {
      if (e.detail.isEditMode) {
        this.isOpen = false;
      }
    };
    getEditModeChannel().addEventListener('editModeChange', this.editModeHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    rollEventChannel().removeEventListener('new-roll', this.rollHandler);
    getEditModeChannel().removeEventListener('editModeChange', this.editModeHandler);
  }

  _setFocusRoll(e) {
    const index = parseInt(e.target.closest('.roll-result').getAttribute('index'));
    this.focusRoll = index;
  }

  _deleteRoll(e) {
    const index = parseInt(e.target.closest('.roll-result').getAttribute('index'));
    this.splice('rollResults', index, 1);
    setTimeout(() => {
      if (this.focusRoll > this.rollResults.length - 1) {
        this.focusRoll = this.rollResults.length - 1;
      }
      setTimeout(() => {
        this.$.scrollContainer.scrollTo({top: this.$.scrollContainer.scrollHeight, behavior: 'smooth'});
      }, 500);
    }, 0);
    if (this.rollResults.length === 0) {
      this.isOpen = false;
    }
  }

  _toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  _clearRolls() {
    this.rollResults = [];
    this.isOpen = false;
  }

  _diceIconClass(roll) {
    let rollValue = '20';
    if (roll) {
      const rollSplit = roll.match(/(?:d)(\d+)/);
      if (rollSplit.length > 1) {
        rollValue = rollSplit[1];
      }
    }
    return `roll-result__dice fal fa-dice-d${rollValue}`;
  }

  _equals(a, b) {
    return a === b;
  }

  _isLast(index, array) {
    return array.length && array.length - 1 === index;
  }

  _and(a, b) {
    return a && b;
  }

  static get template() {
    return html`
      <style include="material-styles fa-styles">

        [hidden] {
          display: none !important;
        }

        .roll-results__toggle-btn {
          position: absolute;
          right: 90px;
          bottom: 4px;
          height: 20px;
          border-radius: 20px;
          width: 60px;
          z-index: 3;
        }
        .roll-results__toggle-btn[open] {
          transform: rotate(180deg);
        }
        .roll-results__toggle-btn[disabled] {
          display: none;
        }
        .roll-results__clear-btn {
          background: var(--mdc-theme-primary);
          color: var(--mdc-theme-on-primary);
          font-size: 14px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: absolute;
          bottom: 4px;
          height: 24px;
          border-radius: 20px;
          width: 60px;
          z-index: 3;
          right: 168px;
        }

        .roll-results {
          position: absolute;
          bottom: -250px;
          right: calc(100% - 20px);
          flex-direction: column;
          align-items: flex-end;
          width: 110vw;
          margin-bottom: -20px;
          margin-right: -92px;
          pointer-events: none;
          transition: bottom 0.2s;
        }
        .roll-results[open] {
          bottom: -4px;
        }
        .roll-results__mask {
          position: fixed;
          right: 0;
          bottom: 63px;
          width: 100%;
          height: 100%;
          max-width: 800px;
          max-height: 255px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .roll-results[open] .roll-results__mask {
          opacity: 1;
        }
        .roll-results__background {
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, black, transparent);
        }
        .roll-results__scroll-container {
          max-height: 202px;
          overflow-y: scroll;
          scroll-snap-type: y mandatory;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          pointer-events: all;
          padding: 0 17px 50px 0;
          box-sizing: content-box;
          width: 100%;
        }
        .roll-results__scroll-wrap {
          position: relative;
          right: 133px;
          z-index: 2;
          overflow: hidden;
          width: fit-content;
          margin-left: auto;
        }

        .roll-result {
          background: var(--mdc-theme-surface-surface);
          color: var(--mdc-theme-on-surface);
          border-radius: 6px;
          margin-bottom: 16px;
          display: flex;
          width: 225px;
          padding: 12px;
          height: 82px;
          transition: height 0.3s, width 0.3s;
          outline: none;
          scroll-snap-align: start;
          position: relative;
        }
        .roll-result[crit]:before {
          content: 'CRITICAL!!!';
          color: var(--lumo-error-color);
          position: absolute;
          left: -15px;
          top: -4px;
          font-weight: bold;
          transform: rotate(-12deg);
          background: var(--mdc-theme-surface-surface);
          padding: 0 8px;
          border: 2px solid var(--lumo-error-color);
          transition: left 0.3s, top 0.3s, transform 0.3s;
        }
        .roll-result[crit][little]:before {
          left: 13px;
          top: 10px;
          transform: rotate(0deg);
        }
        .roll-result__summary {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding-right: 10px;
          border-right: 1px solid var(--mdc-theme-on-surface-surface);
          margin-right: 10px;
          flex-grow: 1;
        }
        .roll-result:after {
          content: '=';
          font-size: 29px;
          padding: 0px 0 3px;
          background: var(--mdc-theme-surface-surface);
          color: var(--mdc-theme-on-surface-surface);
          position: absolute;
          right: 78px;
          line-height: 1;
          top: 34px;
          opacity: 1;
          transition: opacity 0.3s, top 0.3s, right 0.3s;
        }
        .roll-result__title {
          margin-top: -4px;
          margin-bottom: 4px;
          overflow: hidden;
          width: auto;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          font-weight: bold;
        }
        .roll-result__type {
          color: var(--mdc-theme-primary);
        }
        .roll-result__type-separator {
          margin-left: -4px;
        }
        .roll-result__total {
          font-size: 32px;
          font-weight: bold;
          justify-content: center;
          display: flex;
          align-items: center;
          width: 64px;
          flex-shrink: 0;
          transition: width 0.3s, font-size 0.3s;
        }
        .roll-result__dice-wrap {
          display: flex;
          align-items: center;
          height: 30px;
          transition: height 0.3s;
          overflow: hidden;
        }
        .roll-result__dice {
          font-size: 30px;
          margin-right: 10px;
          color: var(--mdc-theme-on-surface-surface);
        }
        .roll-result__dice-results {
          font-size: 20px;
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .roll-result__dice-results span {
          color: var(--mdc-theme-on-surface-surface);
          position: relative;
          font-size: 17px;
          bottom: 7px;
          margin-right: 4px;
        }
        .roll-result__dice-results span:after {
          display: block;
          content: '';
          position: absolute;
          left: -1px;
          bottom: 8px;
          border-bottom: 1px solid var(--mdc-theme-on-surface-surface);
          width: 100%;
          transform: rotate(-25deg);
        } 
        .roll-result__roll {
          color: var(--mdc-theme-on-surface-surface);
          font-weight: bold;
          height: 28px;
          display: flex;
          align-items: flex-end;
          transition: height 0.3s;
          overflow: hidden;
        }
        .roll-result__roll span {
          font-size: 10px;
          line-height: 1;
          width: min-content;
          margin-right: 4px;
          display: inline-flex;
        }
        .roll-result__close {
          position: absolute;
          height: 20px;
          width: 20px;
          right: 0px;
          top: 0px;
          border: 0;
          margin: 0;
          background: none;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--mdc-theme-on-surface);
        }

        .roll-result[little] {
          width: 175px;
          height: 24px;
          cursor: zoom-in;
        }
        .roll-result[little] .roll-result__dice-wrap {
          height: 0;
        }
        .roll-result[little] .roll-result__roll {
          height: 0;
        }
        .roll-result[little]:after {
          opacity: 0;
          right: 47px;
          top: 7px;
        }
        .roll-result[little] .roll-result__total {
          font-size: 18px;
          width: 34px;
        }
        .roll-result[little] .roll-result__title {
          margin: 0;
        }
        .roll-result[little] .roll-result__close {
          display: none;
        }

        @media(min-width: 420px) {
          .roll-results__mask {
            bottom: 0;
            -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
            mask-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
          }
        }

        @media(min-width: 921px) {
          .roll-results {
            bottom: -380px;
          }
          .roll-results__scroll-container {
            max-height: 330px;
          }
          .roll-results__mask {
            max-height: 400px;
          }
          .roll-results__toggle-btn {
            right: 100px;
          }
          .roll-results__clear-btn {
            right: 178px;
          }
          .roll-result {
            width: min-content !important;
          }
        }
      </style>
      <div class="roll-results__clear-btn" on-click="_clearRolls" hidden$=[[!isOpen]]>Clear</div>
      <button class="roll-results__toggle-btn mdc-icon-button mdc-button--raised" on-click="_toggleOpen" disabled$="[[_equals(rollResults.length, 0)]]" open$=[[isOpen]]>
        <i class="fas fa-angle-up"></i>
      </button>
      <div class="roll-results" open$="[[isOpen]]">
        <div class="roll-results__scroll-wrap">
          <div class="roll-results__scroll-container" id="scrollContainer">
            <template is="dom-repeat" items="[[rollResults]]">
              <div class="roll-result" crit$="[[item.isCrit]]" little$="[[!_equals(index, focusRoll)]]" on-click="_setFocusRoll" index$="[[index]]">
                <div class="roll-result__summary">
                  <div class="roll-result__title">
                    <span class="roll-result__name">[[item.name]]</span>
                    <span class="roll-result__type-separator" hidden$="[[!_and(item.name, item.type)]]">:</span>
                    <span class="roll-result__type">[[item.type]]</span>
                  </div>
                  <div class="roll-result__dice-wrap">
                    <i class$="[[_diceIconClass(item.roll)]]"></i>
                    <div class="roll-result__dice-results" inner-h-t-m-l="[[item.result]]"></div>
                  </div>
                  <div class="roll-result__roll" inner-h-t-m-l="[[item.roll]]"></div>
                </div>
                <div class="roll-result__total">[[item.total]]</div>
                <button class="roll-result__close fal fa-times" on-click="_deleteRoll"></button>
              </div>
            </template>
          </div>
        </div>
        <div class="roll-results__mask">
          <div class="roll-results__background"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('dnd-roll-results', DndRollResults);