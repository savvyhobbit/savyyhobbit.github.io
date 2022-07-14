import { PolymerElement, html } from "@polymer/polymer";
import {
  getBackgroundReference,
  getCharacterChannel,
  getRaceReference,
  getSelectedCharacter,
} from "../../../util/charBuilder";
import './dnd-character-builder-suboptions';
import { getEditModeChannel, isEditMode } from "../../../util/editMode";
import { util_capitalizeAll, absInt, initCollapseToggles, encodeForHash } from "../../../js/utils"; 

class DndCharacterBuilderBackgroundRace extends PolymerElement {
  
  static get properties() {
    return {
      selectedBackground: {
        type: String,
        value: ""
      },
      selectedBackgroundRef: {
        type: Object,
      },
      selectedRace: {
        type: String,
        value: ""
      },
      selectedRaceRef: {
        type: Object,
      },
      isEditMode: {
        type: Boolean,
        value: false
      },
      backgroundName: {
        type: String,
        value: ''
      },
      raceName: {
        type: String,
        value: ''
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this.characterChangeHandler = (e) => {
      let character = e.detail.character;
      this.updateFromCharacter(character);
    };
    
    this.updateFromCharacter(getSelectedCharacter());
    getCharacterChannel().addEventListener("character-selected", this.characterChangeHandler);

    this.editModeHandler = (e) => {
      this.isEditMode = e.detail.isEditMode;
    }
    getEditModeChannel().addEventListener('editModeChange', this.editModeHandler);
    this.isEditMode = isEditMode();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    getCharacterChannel().removeEventListener("character-selected", this.characterChangeHandler);
    getEditModeChannel().removeEventListener('editModeChange', this.editModeHandler);
  }

  async updateFromCharacter(character) {
    this.selectedBackground = character.background;
    this.selectedBackgroundRef = await getBackgroundReference();
    this.backgroundName = this.selectedBackground.name;
    this.selectedRace = character.race;
    this.selectedRaceRef = await getRaceReference();
    this.raceName = this.selectedRace.name;
    
    this.dispatchEvent(new CustomEvent("loadingChange", { bubbles: true, composed: true }));
  }

  _getRaceLink(race) {
    let linkData = [race.name];
    if (race.source) {
      linkData.push(race.source);
    }
    let dataLink = encodeForHash(linkData);
    return race ? `#/races/${dataLink}` : '#/races'
  }

  _getBackgroundLink(bg) {
    let linkData = [bg.name];
    if (bg.source) {
      linkData.push(bg.source);
    }
    let dataLink = encodeForHash(linkData);
    return bg ? `#/backgrounds/${dataLink}` : '#/backgrounds'
  }

  _linkClick(e) {
    const isBackground = e.target.classList.contains('background');
    this.dispatchEvent(new CustomEvent("open-drawer", {
      bubbles: true,
      composed: true,
      detail: {
        selectedItem: isBackground ? this.selectedBackground : this.selectedRace,
        viewId: isBackground ? 'backgrounds' : 'races'
      }
    }));
  }

  _showEmpty(isEditMode, value) {
    return !isEditMode && !value;
  }

  _exists() {
    for (let arg of arguments) {
      if (!!arg && (arg.constructor !== Object || Object.entries(arg).length > 0) && (!Array.isArray(arg) || arg.length > 0)) {
        return true;
      }
    }
    return false;
  }

  static get template() {
    return html`
      <style include="material-styles my-styles">
        body {}
        :host {
          display: block;
          padding: 14px;
        }
        [hidden] {
          display: none !important;
        }

        .col-wrap {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 200px;
        }

        .row-wrap {
          width: 100%;
        }
        .row-wrap:first-child {
          margin-bottom: 24px;
        }

        .row-wrap > *:not(h2):not(:last-child) {
          margin-bottom: 10px;
        }

        .heading {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--lumo-contrast-10pct);
        }
        .reference-link:hover {
          color: var(--mdc-theme-secondary);
        }

        .default-selection {
          font-size: 14px;
          margin-bottom: 0 !important;
        }

        .default-selection span {
          color: var(--mdc-theme-secondary)
        }

        .missing-text {
          font-style: italic;
          font-size: 14px;
        }

        @media(min-width: 420px) {
          .heading {
            justify-content: flex-start;
          }
          .reference-link {
            margin-left: 8px;
          }
        }

        @media(min-width: 921px) {
          .row-wrap {
            width: calc(50% - 10px);
          }
          .row-wrap:first-child {
            margin-bottom: 0;
          }
        }

        h2 {
          display: block;
          font-size: 1.5em;
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          font-weight: bold;
        }

        h3 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .details-container  {
          background: var(--lumo-contrast-10pct);
          padding: 14px;
          border-radius: 4px;
          font-size: 14px;
        }
        .stats-wrapper.margin-bottom_large {
          margin-bottom: 0px !important;
        }
        dnd-select-add {
          --lumo-font-size-m: 20px;
          width: 100%;
        }

        dnd-character-builder-suboptions {
          display: block;
          margin-left: 30px;
        }
      </style>

      <div class="col-wrap">
        <div class="row-wrap">
          <div class="heading">
            <h2>Race</h2>
            <button class="mdc-icon-button material-icons" on-click="_linkClick">logout</button>
          </div>
          <dnd-select-add model="races" value="[[selectedRace]]" placeholder="<Choose Race>" disabled$="[[!isEditMode]]" hidden$="[[_showEmpty(isEditMode, selectedRace)]]"></dnd-select-add>
          <div class="missing-text" hidden$="[[_exists(selectedRace)]]">Select Race to add Attribute Bonuses</div>
          <dnd-character-builder-suboptions storage-key="race" selected-item="[[selectedRaceRef]]"></dnd-character-builder-suboptions>
        </div>

        <div class="row-wrap">
          <div class="heading">
            <h2>Background</h2>
            <button class="mdc-icon-button material-icons background" on-click="_linkClick">logout</button>
          </div>
          <dnd-select-add model="backgrounds" value="[[selectedBackground]]" placeholder="<Choose Background>" disabled$="[[!isEditMode]]" hidden$="[[_showEmpty(isEditMode, selectedBackground)]]"></dnd-select-add>
          <div class="missing-text" hidden$="[[_exists(selectedBackground)]]">Select Background to add Skill Proficiencies</div>
          <dnd-character-builder-suboptions storage-key="background" selected-item="[[selectedBackgroundRef]]"></dnd-character-builder-suboptions>
        </div>
      </div>
    `;
  }
}

customElements.define("dnd-character-builder-background-race", DndCharacterBuilderBackgroundRace);