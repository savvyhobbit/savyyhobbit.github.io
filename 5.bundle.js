(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(t,e,i){"use strict";i(91),i(42);var s=i(104),a=i(56),n=i(2);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=n.b`
  :host {
    width: 8em;
  }

  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input),
  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'],
  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;Object(n.c)("vaadin-number-field",[a.a,s.a,o],{moduleId:"lumo-number-field"});i(73);var l=i(3),r=i(32),d=i(33),c=i(57),p=i(102),h=i(55),u=i(74);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(n.c)("vaadin-number-field",u.a,{moduleId:"vaadin-number-field-styles"});class m extends(Object(p.a)(Object(n.a)(Object(r.a)(l.a)))){static get is(){return"vaadin-number-field"}static get template(){return l.b`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!_isStepButtonVisible(hasControls, stepButtonsVisible)]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number},max:{type:Number},step:{type:Number}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const t=this.localName;return[...super.slotStyles,`\n        ${t} input[type="number"]::-webkit-outer-spin-button,\n        ${t} input[type="number"]::-webkit-inner-spin-button {\n          -webkit-appearance: none;\n          margin: 0;\n        }\n\n        ${t} input[type="number"] {\n          -moz-appearance: textfield;\n        }\n\n        ${t}[dir='rtl'] input[type="number"]::placeholder {\n          direction: rtl;\n        }\n\n        ${t}[dir='rtl']:not([step-buttons-visible]):not([has-controls]) input[type="number"]::placeholder {\n          text-align: left;\n        }\n      `]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new c.a(this,t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t})),this.addController(new h.a(this.inputElement,this._labelController)),this._tooltipController=new d.a(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top")}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_decreaseButtonTouchend(t){t.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(t){t.preventDefault(),this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(t){if(this.disabled||this.readonly)return;const e=this.step||1;let i=parseFloat(this.value);this.value?i<this.min?(t=0,i=this.min):i>this.max&&(t=0,i=this.max):0===this.min&&t<0||0===this.max&&t>0||0===this.max&&0===this.min?(t=0,i=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?i=0:this.min>0?(i=this.min,this.max<0&&t<0&&(i=this.max),t=0):this.max<0&&(i=this.max,t<0?t=0:this._getIncrement(1,i-e)>this.max?i-=2*e:i-=e);const s=this._getIncrement(t,i);this.value&&0!==t&&!this._incrementIsInsideTheLimits(t,i)||this._setValue(s)}_setValue(t){this.value=this.inputElement.value=String(parseFloat(t)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(t,e){let i=this.step||1,s=this.min||0;const a=Math.max(this._getMultiplier(e),this._getMultiplier(i),this._getMultiplier(s));i*=a,s*=a;const n=((e=Math.round(e*a))-s)%i;return t>0?(e-n+i)/a:t<0?(e-(n||i))/a:e/a}_getDecimalCount(t){const e=String(t),i=e.indexOf(".");return-1===i?1:e.length-i-1}_getMultiplier(t){if(!isNaN(t))return 10**this._getDecimalCount(t)}_incrementIsInsideTheLimits(t,e){return t<0?null==this.min||this._getIncrement(t,e)>=this.min:t>0?null==this.max||this._getIncrement(t,e)<=this.max:this._getIncrement(t,e)<=this.max&&this._getIncrement(t,e)>=this.min}_allowed(t){const e=t*(this.step||1),i=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(e,i)}_stepChanged(t,e){e&&(e.step=t||"any")}_valueChanged(t,e){t&&isNaN(parseFloat(t))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,e)}_onKeyDown(t){"ArrowUp"===t.key?(t.preventDefault(),this._increaseValue()):"ArrowDown"===t.key&&(t.preventDefault(),this._decreaseValue()),super._onKeyDown(t)}_isStepButtonVisible(t,e){return t||e}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0||e.validity.badInput}}customElements.define(m.is,m);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class b extends m{static get is(){return"vaadin-integer-field"}constructor(){super(),this.allowedCharPattern="[-+\\d]"}_valueChanged(t,e){if(""!==t&&!this.__isInteger(t))return console.warn(`Trying to set non-integer value "${t}" to <vaadin-integer-field>. Clearing the value.`),void(this.value="");super._valueChanged(t,e)}_stepChanged(t,e){if(null!=t&&!this.__hasOnlyDigits(t))return console.warn(`<vaadin-integer-field> The \`step\` property must be a positive integer but \`${t}\` was provided, so the property was reset to \`null\`.`),void(this.step=null);super._stepChanged(t,e)}__isInteger(t){return/^(-\d)?\d*$/.test(String(t))}__hasOnlyDigits(t){return/^\d+$/.test(String(t))}}customElements.define(b.is,b);console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-text-field" is deprecated. Use "@vaadin/integer-field" instead.')},167:function(t,e,i){"use strict";var s=i(3),a=i(31),n=i(1),o=(i(103),i(37));class l extends s.a{static get properties(){return{options:{type:Array},model:{type:String},addCallback:{type:Function},value:{type:String,value:"",observer:"valueUpdated"},choices:{type:Number,observer:"choicesUpdated"},paren:{type:String},label:{type:String},placeholder:{type:String},multiValue:{type:String,value:""},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}choicesUpdated(){this.listBox&&(this.listBox.remove(),delete this.listBox),this.$.select.requestContentUpdate()}valueUpdated(){if(this.choices)if(Array.isArray(this.value)&&this.options){const t=this.value.map(t=>-1!==this.options.indexOf(t)?this.options.indexOf(t):this.options.findIndex(e=>e.name===t.name&&e.source===t.source)).filter(t=>-1!==t);this.listBox&&(this.listBox.selectedValues=t),this.multiValue=t.map(t=>{let e=this.options[t];return e.name?e.name:Object(n.util_capitalizeAll)(e)}).join(", ")}else this.listBox&&(this.listBox.selectedValues=[]),this.multiValue="";else this.value&&this.options?this.value.source?this.$.select.value=this.options.findIndex(t=>t.name===this.value.name&&t.source===this.value.source||t===this.value.name)+"":this.value.name?this.$.select.value=this.options.findIndex(t=>t.name===this.value.name||t===this.value.name)+"":this.$.select.value=this.options.findIndex(t=>t.name===this.value||t===this.value)+"":this.$.select.value=""}ready(){super.ready(),setTimeout(async()=>{this.model&&(this.options=await Object(o.b)(this.model));const t=this.$.select._overlayElement.shadowRoot.querySelector("#content");let e=0;t.addEventListener("scroll",i=>{e=t.scrollTop},{passive:!0}),this.$.select.renderer=(i,s)=>{if(!this.listBox){if(this.listBox=document.createElement("vaadin-list-box"),this.choices&&(this.listBox.setAttribute("multiple",!0),this.listBox.addEventListener("click",i=>{s.opened=!0;let a=null!==i.srcElement.getAttribute("selected");t.scroll(0,e),setTimeout(()=>{this.listBox.selectedValues.length>this.choices&&!a&&this.listBox.selectedValues.splice(this.listBox.selectedValues.length-2,1);let t=this.listBox.selectedValues.map(t=>this.options[t]);this.multiValue=t.map(t=>t.name?t.name:Object(n.util_capitalizeAll)(t)).join(", "),this.addCallback&&this.addCallback(t)},0)})),this.options&&this.options.length)for(let t=0;t<this.options.length;t++){const e=this.options[t],i=document.createElement("vaadin-item"),s=e.name||Object(n.util_capitalizeAll)(e);i.innerHTML=`<span style='margin-left: 10px;'>${s}</span> ${e.name?`<span style='font-size: 14px;color: var(--lumo-primary-color-50pct);'>${e.source||""}</span>`:""}`,i.setAttribute("value",t),this.listBox.appendChild(i)}i.appendChild(this.listBox),this.$.select._assignMenuElement(),this.valueUpdated()}}},0)}connectedCallback(){super.connectedCallback(),this.selectChangeHandler=()=>{const t=this.$.select.value;if(t&&!this.choices){const e=this.options[t];this.addCallback?this.addCallback(e,this.model):Object(a.Z)(void 0,e,this.model),this.value||(this.$.select.value="")}},this.$.select.addEventListener("change",this.selectChangeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.$.select.removeEventListener("change",this.selectChangeHandler)}_exists(t){return!!t}_label(t,e,i){let s="";return t&&(s=t,e&&1!==e&&100!==e&&(s+=` (pick ${e})`),i&&(s+=` (${i})`)),s}static get template(){return s.b`
      <style>
        :host {
          display: inline-block;
        }
        [slot="prefix"] {
          width: calc(100% - 46px);
          padding: 12px;
          line-height: 1.4;
        }
        vaadin-select {
          width: 100%;
        }
        .prefix {
          white-space: normal;
          color: var(--lumo-body-text-color);
        }
      </style>
      <vaadin-select add theme="dark add" id="select" label="[[_label(label, choices, paren)]]" placeholder="[[placeholder]]" disabled$="[[disabled]]">
        <div hidden$="[[!_exists(multiValue)]]" slot="prefix">
          <span class="prefix">[[multiValue]]</span>
        </div>
      </vaadin-select>
      
    `}}customElements.define("dnd-select-add",l)},175:function(t,e,i){"use strict";i.r(e);var s=i(3),a=(i(166),i(167),i(101),i(124),i(127),i(31)),n=i(72),o=i(1),l=i(105);class r extends s.a{static get properties(){return{str:{type:Number},dex:{type:Number},con:{type:Number},int:{type:Number},wis:{type:Number},cha:{type:Number},strAdj:{type:Number,value:0},dexAdj:{type:Number,value:0},conAdj:{type:Number,value:0},intAdj:{type:Number,value:0},wisAdj:{type:Number,value:0},chaAdj:{type:Number,value:0},skillProfs:{type:String,value:""},customSkillProfs:{type:String},saves:{type:Array,value:[]},classSkillProfOptions:{type:Object,value:{}},backgroundSkillProfOptions:{type:Object,value:[]},defaultBackgroundSkillProf:{type:String,value:""},maxHP:{type:Number},tempHP:{type:Number,value:0},isEditMode:{type:Boolean,value:!1},initiative:{type:String,value:""},customInitiative:{type:Boolean,value:!1},customInitiativeVal:{type:Number},customACVal:{type:Number},customACHealth:{type:Number},otherProfsOpen:{type:Boolean},featuresOpen:{type:Boolean},languages:{type:String},toolProfs:{type:String},weaponProfs:{type:String},armorProfs:{type:String},feats:{type:String},darkvision:{type:Number},resists:{type:String},conditionImmunes:{type:String},hasDarkvision:{type:Boolean,value:!1}}}static get observers(){return["updateCharAttr(str, dex, con, int, wis, cha)","updateCustomInitiative(customInitiativeVal)","updateCustomAC(customACVal)","updateCustomHealth(customHealthVal)"]}updateCharAttr(t,e,i,s,n,o){t&&e&&i&&s&&n&&o&&Object(a.Fb)({str:t,dex:e,con:i,int:s,wis:n,cha:o})}updateCustomInitiative(t){void 0!==t&&""!==t&&Object(a.pb)(t)}updateCustomAC(t){void 0!==t&&""!==t&&Object(a.nb)(t)}updateCustomHealth(t){void 0!==t&&""!==t&&Object(a.ob)(t)}hpChangeHandler(t){this.$.hpField.focusElement.blur()}hpBlurHandler(t){const e=parseInt(this.$.hpField.value);Number.isNaN(e)?this.$.hpField.value=a.F:Object(a.mb)(e)}connectedCallback(){super.connectedCallback(),this.characterChangeHandler=t=>{let e=t.detail.character;this.updateAttributesFromCharacter(e)},this.updateAttributesFromCharacter(Object(a.P)()),Object(a.n)().addEventListener("character-selected",this.characterChangeHandler),this.editModeHandler=t=>{this.isEditMode=t.detail.isEditMode},Object(n.b)().addEventListener("editModeChange",this.editModeHandler),this.isEditMode=Object(n.c)()}disconnectedCallback(){super.disconnectedCallback(),Object(a.n)().removeEventListener("character-selected",this.characterChangeHandler),Object(n.b)().removeEventListener("editModeChange",this.editModeHandler)}async updateAttributesFromCharacter(t){if(t&&t.attr){const e=t.attr;e.str===this.str&&e.dex===this.dex&&e.con===this.con&&e.int===this.int&&e.wis===this.wis&&e.cha===this.cha||this.setProperties({str:t.attr.str,dex:t.attr.dex,con:t.attr.con,int:t.attr.int,wis:t.attr.wis,cha:t.attr.cha}),this.saves=await Object(a.D)();let i=await Object(a.k)();this.strAdj=i.str,this.dexAdj=i.dex,this.conAdj=i.con,this.intAdj=i.int,this.wisAdj=i.wis,this.chaAdj=i.cha,this.skillProfs=(await Object(a.Q)()).join(","),this.customSkillProfs=t.customSkills?t.customSkills.join(","):"",this.customHealth=!!t.customHealth,this.customHealthVal=t.customHealthVal,this.maxHP=await Object(a.M)(),this.currentHP=await Object(a.F)(),this.tempHP=await Object(a.V)();const s=await Object(a.J)(),n=[];for(let t of s){const e=n.find(e=>e.die===t.die);e?(0===e.current&&(e.className=t.className),e.current+=t.current,e.total+=t.total):n.push(t)}this.hitDice=n.sort(),this.customAC=!!t.customAC,this.customACVal=t.customACVal,this.ac=await Object(a.m)(),this.customInitiative=!!t.customInitiative,this.customInitiativeVal=t.customInitiativeVal,this.initiative=await Object(a.o)(),this.speed=await Object(a.q)(),this.proficiencyBonus=await Object(a.p)(),this.weaponProfs=Object(a.z)().map(o.util_capitalizeAll).join(", "),this.armorProfs=Object(a.s)().map(o.util_capitalizeAll).join(", "),this.toolProfs=Object(a.y)().map(o.util_capitalizeAll).join(", "),this.languages=Object(a.w)().map(o.util_capitalizeAll).join(", "),this.feats=Object(a.v)().map(o.util_capitalizeAll).join(", "),this.darkvision=Object(a.u)(),this.resists=Object(a.x)().map(o.util_capitalizeAll).join(", "),this.conditionImmunes=Object(a.t)().map(o.util_capitalizeAll).join(", "),this.hasDarkvision=null!==this.darkvision,this.spellMods=await Object(a.R)(t),this.dispatchEvent(new CustomEvent("loadingChange",{bubbles:!0,composed:!0}))}}_adjustString(t){return 0!==t&&void 0!==t?Object(o.absInt)(t):""}_total(t,e){let i=parseInt(t),s=parseInt(e);return i=isNaN(i)?0:i,s=isNaN(s)?0:s,i+s}_mod(t,e){return Object(o.absInt)(Math.floor((this._total(t,e)-10)/2))}_contains(t,e){return t.indexOf(e)>-1}_join(t){return t.join(", ")}_abs(t){return t>=0?"+"+t:t}_exists(){for(let t of arguments)if(t&&(t.constructor!==Object||Object.entries(t).length>0)&&(!Array.isArray(t)||t.length>0))return!0;return!1}_editModeClass(t){return t?"edit-mode":"not-edit-mode"}_tempHpStr(t){return t&&"number"==typeof t&&t>0?" + "+t:""}_toggleButtonField(t){const e=t.target.closest(".btn-field"),i=e.classList.contains("btn-field--open"),s=e.classList.contains("btn-field--temp"),n=e.querySelector("vaadin-integer-field"),o=e.querySelector("button");if(e.classList.toggle("btn-field--open"),o.classList.toggle("icon-only"),o.classList.toggle("hard-left"),s)if(i){const t=parseInt(n.value);t&&(Object(a.e)(parseInt(this.tempHP)+t),n.value="")}else n.focus();else if(i){const t=parseInt(n.value);if(t){const i=e.classList.contains("btn-field--heal")?1:-1;Object(a.mb)(parseInt(this.currentHP)+i*t),n.value=""}}else n.focus()}_submitButtonField(t){"Enter"===t.key&&this._toggleButtonField(t)}_blurButtonField(t){this._toggleButtonField(t)}_useHitDice(t){const e=t.target.closest(".hit-dice__item");if(t.model.__data.item.current>0&&this.currentHP<this._maxHP(this.customHealthVal,this.maxHP,this.customHealth)){const t=e.dataset.className;Object(a.Ib)(t)}else e.classList.add("hit-dice__item--error"),setTimeout(()=>{e.classList.remove("hit-dice__item--error")},500)}_strContains(t,e){return t.indexOf(e)>-1}_strContainsTwo(t,e){return(t.match(new RegExp(e,"g"))||[]).length>=2}_resetHitDice(t){Object(a.gb)()}async _roll(t){const e=Object(o.findInPath)(".proficiency-item",t);if(this.isEditMode)e&&await Object(a.Bb)(e.innerText.toLowerCase());else{const i=Object(o.findInPath)(".stat-box",t),s=Object(o.findInPath)(".initiative",t);let a,n,r,d;if(e?(n=e.hasAttribute("enabled"),d=e.hasAttribute("expertise"),a=parseInt(e.closest(".attribute-wrap").querySelector(".stat-box__mod").innerText,10),r=e.innerText):i?(n=i.querySelector(".stat-box__save").hasAttribute("enabled"),a=parseInt(i.querySelector(".stat-box__mod").innerText,10),r=i.querySelector("vaadin-integer-field").label+" Save"):s&&(n=!1,a=this.customInitiative?this.customInitiativeVal:parseInt(this.initiative,10),r="Initiative"),r){let t="1d20";n&&(a+=this.proficiencyBonus),d&&(a+=this.proficiencyBonus),a>0?t+="+"+a:a<0&&(t+=a),Object(l.b)(r,t)}}}_swapCustomInitiative(t){Object(a.Ab)()}_swapCustomAC(t){Object(a.yb)()}_swapCustomHealth(t){Object(a.zb)()}_plusMinus(t){if(void 0!==t&&t>-1)return"+"}_triggerShortRest(t){}_triggerLongRest(t){}_maxHP(t,e,i){return i?t:e}_toggleOtherProfs(){this.otherProfsOpen=!this.otherProfsOpen}_toggleFeatures(){this.featuresOpen=!this.featuresOpen}static get template(){return s.b`
      <style include="material-styles fa-styles">
        :host {
          display: block;
          padding: 14px;
        }

        [hidden] {
          display: none !important;
        }

        .wrap {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-bottom: 50px;
          position: relative;
        }
        .attribute-wrap {
          display: flex;
          flex-direction: row;
          min-width: 0;
        }
        .health-wrap {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          min-width: 0;
          flex-shrink: 0;
          justify-content: space-between;
          max-width: 360px;
        }
        .health-wrap > div {
          width: calc(33% - 8px);
          max-width: 120px;
        }
        .health-wrap > * {
          margin-bottom: 16px;
        }

        /* Proficiencies */
        .proficiencies {
          margin-left: 10px;
          line-height: 1.4;
          min-width: 0;
          position: relative;
          top: 3px;
        }
        .proficiency-item {
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: relative;
          cursor: pointer;
          user-select: none;
        }

        .proficiency-item--ah,
        .proficiency-item--soh {
          font-size: 12px;
        }
        .proficiency-item {
          padding-left: 13px;
        }
        .proficiency-item[expertise] {
          padding-left: 24px;
        }
        .proficiency-item::before,
        .proficiency-item[expertise]::after {
          content: '\\f111';
          display: block;
          height: 10px;
          width: 10px;
          margin-right: 8px;
          position: absolute;
          left: -4px;
          bottom: 8px;
          font-size: 12px;
          font-family: 'Font Awesome 5 Pro';
          font-weight: 400;
          color: var(--mdc-theme-primary);
        }
        .proficiency-item[enabled]::before {
          font-weight: 900;
        }
        .proficiency-item[expertise]::after {
          left: 9px;
        }
        .proficiency-item[expertise]::after {
          font-weight: 900;
        }
        .proficiency-item[enabled][custom-enabled]::before,
        .proficiency-item[expertise][custom-expertise]::after {
          content: '\\f055';
        }
        .not-edit-mode .proficiency-item[enabled][custom-enabled]::before,
        .not-edit-mode .proficiency-item[expertise][custom-expertise]::after {
          content: '\\f111';
        }
        .proficiency-item[expertise]::before {
          margin-right: 20px;
        }


        .stats {
          display: flex;
          flex-direction: column;
          min-width: 0;
          flex-shrink: 0;
        }

        /* Other profs */
        .stats-other-wrap {
          position: relative;
        }
        .others {
          margin-bottom: 130px;
          position: absolute;
          top: 0;
          right: 0;
        }
        .other {
          font-size: 14px;
          flex-shrink: 1;
          height: fit-content;
          margin-bottom: 8px;
          line-height: 1.5;
          max-width: calc(100vw - 245px);
          margin-left: auto;
        }
        .other[open]  .other__header .material-icons {
          transform: rotate(180deg);
        }
        .other__header {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-bottom: 8px;
          padding: 0;
          cursor: pointer;
          transition: color .1s ease-in;
          font-size: 16px;
          font-weight: bold;
          text-align: left;
          line-height: 1.6;
          user-select: none;
          color: var(--mdc-theme-primary);
          background: none;
          border: 0;
        }
        .other__header:hover {
          color: var(--mdc-theme-primary-darker);
        }
        .other__header .material-icons {
          font-size: 24px;
          position: relative;
          transition: transform .1s ease-in;
          margin: -2px 8px 0 0;
        }
        .other__wrap {
          opacity: 0;
          height: 0;
          overflow: hidden;
        }
        .other[open] .other__wrap {
          opacity: 1;
          height: auto;
          transform: scale(1, 1);
          animation-duration: .3s;
          animation-name: scaleIn;
          animation-timing-function: cubic-bezier(.71,.55,.62,1.57);
        }

        .other__item h4 {
          margin: 0;
          font-size: 14px;
        }
        .other__item {
          margin-bottom: 16px;
          margin-left: 16px;
        }
        .other__item div {
          margin-left: 12px;
        }

        @keyframes scaleIn {
          0% {
            height: 0;
          }
          1% {
            height: fit-content;
            opacity: 0;
            transform: scale(.9, .9);
          }
          100% {
            opacity: 1;
            height: auto;
            transform: scale(1, 1);
          }
        }
        @keyframes scaleOut {
          0% {
            opacity: 1;
            transform: scale(1, 1);
          }
          100% {
            opacity: 0;
            transform: scale(.9, .9);
          }
        }

        /* Stat Box */
        .stat-box {
          cursor: pointer;
          position: relative;
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: var(--lumo-contrast-10pct);
          border-radius: 4px;
        }
        .stat-box:not(:last-child) {
          margin-bottom:16px;
        }
        .stat-box__save {
          position: absolute;
          height: 12px;
          width: 12px;
          border: 2px solid var(--mdc-theme-primary);
          border-radius: 50%;
          top: -8px;
          background-color: #33383C;
          display: none;
        }
        .stat-box__save[enabled] {
          background-color: var(--mdc-theme-primary);
          display: block;
        }
        .stat-box__mod {
          font-size: 32px;
          font-weight: normal;
          margin: 14px 8px 7px;
          line-height: 1;
          position: relative;
          left: 1px;
        }
        .stat-box__footer {
          display: inline-block;
        }
        .stat-box__adj {
          position: relative;
          right: 0px;
        }
        .not-edit-mode .stat-box__adj {
          right: 15px;
          color: var(--lumo-body-text-color);
          -webkit-text-fill-color: var(--lumo-body-text-color);
        }
        .stat-box__side {
          padding: 8px 0;
        }

        /* Stat Box HP  */
        .stat-box--hp {
          width: calc(66% - 2px) !important;
          max-width: 236px !important;
          flex-direction: row;
          min-width: 160px;
          justify-content: space-between;
          flex-wrap: wrap;
          height: fit-content;
          height: 148px;
          cursor: unset;
        }
        .stat-box__total {
          font-size: 14px;
        }
        .stat-box--hp .stat-box__adj--hp {
          position: absolute;
          bottom: -10px;
          right: 5px;
          font-size: 18px;
        }
        .stat-box--hp .stat-box__adj--hp span {
          transform: rotate(200deg);
          font-size: 24px;
          display: inline-block;

        }
        .stat-box--hp .stat-box__footer {
          width: 100%;
        }
        .stat-box__side {
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            margin: 8px;
        }
        .stat-box--hp .btn-field {
          margin-top: 12px;
          width: auto;
        }

        .stat-box--hp .btn-field:not(:last-child) {
          margin-bottom: 0px
        }
        .stat-box__side {
          max-width: 80px;
          margin: 0 8px 0 0;
        }
        .stat-box--hp .btn-field {
          margin-top: 0;
          width: 100%;
        }
        .stat-box--hp .btn-field:not(:last-child) {
          margin-bottom: 12px
        }
        .edit-mode .stat-box--hp {
          justify-content: center;
          align-items: center;
        }
        .stat-box--hp-edit {
          height: 100%;
          width: 100%;
          margin-top: 4px;
          align-items: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
          position: relative;
          font-size: 18px;
        }
        .stat-box--hp-edit .custom-val__swap {
          top: 0px;
          right: 0;
          position: absolute;
        }
        .prof-bonus-box {
          padding: 6px;
          width: calc(2 * (100vw - 54px) / 3);
          max-width: 200px;
          cursor: initial;
        }
        .prof-bonus-box__label {
          font-size: 15px;
          color: var(--mdc-theme-primary);
          text-align: center;
          line-height: 1.2;
          margin-top: 5px;
        }
        .prof-bonus-box__value {
          font-size: 24px;
        }

        /* Button Field */
        .btn-field {
          display: inline-flex;
          flex-direction: row;
          flex-wrap: nowrap;
          width: 100%;
          height: 36px;
          background: var(--lumo-contrast-10pct);
          border-radius: 4px;
          overflow: hidden;
        }
        .btn-field:not(:last-child){
          margin-bottom: 12px;
        }
        .btn-field__btn {
          display: block;
          width: 100%;
          cursor: pointer;
          padding-top: 2px;
          background: transparent;
          border: none;
          min-width: 0;
        }
        .btn-field__input {
          display: none;
        }
        .btn-field .btn-field__btn-label {
          display: none;
        }
        .btn-field--open .btn-field__btn {
          width: calc(100% - 50px);
        }
        .btn-field--open .btn-field__btn-label {
          width: 0;
          overflow: hidden;
        }
        .btn-field--open .btn-field__input {
          display: block;
          width: 50px;
          margin-top: -40px;
        }
        .btn-field--heal.btn-field--open .btn-field__btn-label {
          margin-left: -16px;
        }
        .btn-field vaadin-integer-field {
          --lumo-contrast-10pct: transparent;
        }
        .btn-field__btn-label--temp,
        .btn-field__btn-label--damage {
          font-size: 12px;
        }
        .btn-field--heal button i:before {
          color: #83f675;
        }
        .btn-field--dmg button i:before {
          color: #e34449;
        }
        .btn-field--temp button i:before {
          color: #2069c9;
        }


        /* Hit Dice */
        .hit-dice {
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          padding: 6px 0 0;
          background: var(--lumo-contrast-10pct);
          margin-bottom: 16px;
        }
        .hit-dice__heading {
          display: inline-block;
          text-align: center;
          margin-bottom: 8px;
          color: var(--mdc-theme-primary);
          font-size: 14px;
        }
        .hit-dice__item {
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
        }
        .hit-dice__item dnd-button {
          width: 100%;
        }
        .hit-dice__item--error dnd-button {
          --mdc-theme-primary: var(--lumo-error-color-50pct);
        }
        .hit-dice__item-label {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hit-dice__item-label dnd-svg {
          stroke: var(--mdc-theme-on-primary);
          fill: var(--mdc-theme-primary);
          width: 30px;
          height: 30px;
        }
        .hit-dice__count {
          color: var(--mdc-theme-on-surface);
        }
        .hit-dice__reset {
          margin-top: auto;
        }

        .basic-box__wrap {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .basic-box__wrap-wrap {
          width: 100%;
          max-width: 360px;
        }
        .basic-box__margin {
          margin-bottom: 40px;
        }
        .basic-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4px;
          background: var(--lumo-contrast-10pct);
          border-radius: 4px;
          height: min-content;
          width: calc(33% - 16px);
          max-width: 120px;
        }
        .basic-box--short {
          height: fit-content;
        }
        
        .basic-box__label {
          color: var(--mdc-theme-primary);
          font-size: 14px;
          text-align: center;
        }
        .basic-box__value {
          font-size: 18px;
          width: 100%;
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .basic-box__no-flex {
          display: block;
        }
        .not-edit-mode .initiative {
          cursor: pointer;
        }

        .speed-val {
          font-size: 16px;
        }

        .custom-val__swap {
          font-size: 10px;
          margin: -4px 0 8px auto;
          background-color: var(--lumo-contrast-10pct);
          /* background-color: var(--mdc-theme-secondary-lighter); */
          padding: 4px 5px 4px;
          line-height: 1;
          border-radius: 4px;
          cursor: pointer;
        }
        .custom-val__swap .material-icons {
          font-size: 11px;
          position: relative;
          top: 1px;
        }

        /* Rest Buttons */
        .rest-btn {
          margin-bottom: 16px;
        }

        .mod-val {
          position: relative;
        }
        .mod-val:focus .tooltip,
        .mod-val:hover .tooltip {
          display: block;
        }
        .mod-val:focus {
          outline: none;
        }
        .mod-val:not(:last-of-type)::after {
          content: '|';
          margin-left: 4px;
          color: var(--lumo-contrast-30pct);
        }
        .tooltip {
          position: absolute;
          background: lightgray;
          color: black;
          font-size: 14px;
          padding: 2px 10px;
          border-radius: 4px;
          white-space: nowrap;
          left: 5px;
          top: -32px;
          display: none;
        }
        .tooltip::after {
          content: '';
          height: 0;
          width: 0;
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid lightgray;
          bottom: -4px;
          left: 2px;
        }

        @media(max-width: 380px) {
          .prof-bonus-box__label span {
            display: none;
          }
        }

        @media(min-width: 420px) {
          .wrap {
            padding-bottom: 0;
          }
          .other {
            max-width: calc(100vw - 305px);
          }
          .prof-bonus-box {
            max-width: 224px;
          }
        }
        @media(min-width: 505px) {
          .stats {
            width: 250px;
          }
          .proficiency-item--ah,
          .proficiency-item--soh {
            font-size: 14px;
          }
        }
        @media(min-width: 555px) {
          .other {
            max-width: 250px;
          }
        }
        @media(min-width: 920px) {
          .basic-box__wrap-wrap {
            position: absolute;
            right: 0;
          }
          .others {
            margin-bottom: 0;
            top: 20px;
          }
          .other .other__header {
            cursor: unset;
            font-size: 18px;
          }
          .other .other__header:hover {
            color: var(--mdc-theme-primary);
          }
          .other .other__header .material-icons {
            display: none;
          }
          .other .other__wrap {
            opacity: 1;
            height: auto;
            transform: scale(1, 1);
            animation-name: none !important;
          }
          .other__header {
            font-size: 18px;
          }
          .other__item h4 {
            font-size: 16px;
          }
          .other__item div {
            margin-left: 16px;
          }
        }
      </style>

      <div class$="[[_editModeClass(isEditMode)]]">
        <div class="wrap">
          <div class="health-wrap">
            <!-- Hit Points -->
            <div class="stat-box stat-box--hp">

              <vaadin-integer-field hidden$=[[isEditMode]] id="hpField" theme="hp" value={{currentHP}} on-change="hpBlurHandler" on-blur="hpChangeHandler" min="0" max="[[_maxHP(customHealthVal, maxHP, customHealth)]]" has-controls label="Hit Points">
                <span class="stat-box__adj--hp" slot="suffix"><span>/</span> [[_maxHP(customHealthVal, maxHP, customHealth)]] [[_tempHpStr(tempHP)]]</span>
              </vaadin-integer-field>

              <div class="stat-box--hp-edit" hidden$=[[!isEditMode]]>
                <div class="custom-val__swap" on-click="_swapCustomHealth" hidden$=[[!isEditMode]]>
                  <span class="custom-val__option" hidden$=[[customHealth]]><span class="material-icons">edit</span> Edit</span>
                  <span class="custom-val__option" hidden$=[[!customHealth]]><span class="material-icons">restart_alt</span> Use Standard</span>
                </div>
                <div class="basic-box__label">Max HP</div>

                <div hidden$=[[!customHealth]]>
                  <vaadin-integer-field  value={{customHealthVal}} min="0" has-controls hidden$="[[!isEditMode]]"></vaadin-integer-field>
                  <span hidden$="[[isEditMode]]">[[customHealthVal]]</span>
                </div>
                <div hidden$=[[customHealth]]>[[maxHP]]</div>
              </div>

              <div class="stat-box__side" hidden$=[[isEditMode]]>
                <!--  Healing / Damage -->
                <div class="btn-field btn-field--heal">
                    <button class="mdc-button btn-field__btn" on-click="_toggleButtonField"><i class="fas fa-lg fa-heart"></i></button>
                    <vaadin-integer-field class="btn-field__input" min="0" on-keydown="_submitButtonField" on-blur="_blurButtonField">
                      <span slot="prefix">+</span>
                    </vaadin-integer-field>
                </div>
                <div class="btn-field btn-field--dmg">
                    <button class="mdc-button btn-field__btn" on-click="_toggleButtonField"><i class="fas fa-lg fa-swords"></i></button>
                    <vaadin-integer-field class="btn-field__input" min="0" on-keydown="_submitButtonField" on-blur="_blurButtonField">
                      <span slot="prefix">-</span>
                    </vaadin-integer-field>
                </div>
                <div class="btn-field btn-field--temp">
                    <button class="mdc-button btn-field__btn" on-click="_toggleButtonField"><i class="fas fa-lg fa-shield-cross"></i></button>
                    <vaadin-integer-field class="btn-field__input" min="0" on-keydown="_submitButtonField" on-blur="_blurButtonField">
                      <span slot="prefix">+</span>
                    </vaadin-integer-field>
                </div>
              </div>
            </div>


            <!--  Hit Dice -->
            <div class="hit-dice">
              <div class="hit-dice__heading">Hit Dice</div>
              <template is="dom-repeat" items="[[hitDice]]">
                <div class="hit-dice__item" data-class-name$="[[item.className]]">
                  <dnd-button on-click="_useHitDice">
                    <div class="hit-dice__item-label" slot="label">
                      <dnd-svg id="[[item.die]]"></dnd-svg>
                      <div class="hit-dice__count">[[item.current]] / [[item.total]]</div>
                    </div>
                  </dnd-button>
                </div>
              </template>
              <dnd-button class="hit-dice__reset" label="Reset" on-click="_resetHitDice"></dnd-button>
            </div>
          </div>

          <div class="basic-box__wrap-wrap">
            <div class="basic-box__wrap">
              <div class="basic-box basic-box--short ac">
                <div class="basic-box__value">
                  <div class="custom-val__swap" on-click="_swapCustomAC" hidden$=[[!isEditMode]]>
                    <span class="custom-val__option" hidden$=[[customAC]]><span class="material-icons">edit</span> Edit</span>
                    <span class="custom-val__option" hidden$=[[!customAC]]><span class="material-icons">restart_alt</span> Use Standard</span>
                  </div>

                  <div hidden$=[[!customAC]]>
                    <vaadin-integer-field theme="mini" value={{customACVal}} min="0" max="40" has-controls hidden$="[[!isEditMode]]"></vaadin-integer-field>
                    <div hidden$="[[isEditMode]]">[[customACVal]]</div>
                  </div>
                  <div hidden$=[[customAC]]>[[ac]]</div>
                </div>
                <div class="basic-box__label">AC</div>
              </div>

              <div class="basic-box basic-box--short initiative" on-click="_roll">
                <div class="basic-box__value">
                  <div class="custom-val__swap" on-click="_swapCustomInitiative" hidden$=[[!isEditMode]]>
                    <span class="custom-val__option" hidden$=[[customInitiative]]><span class="material-icons">edit</span> Edit</span>
                    <span class="custom-val__option" hidden$=[[!customInitiative]]><span class="material-icons">restart_alt</span> Use Standard</span>
                  </div>

                  <div hidden$=[[!customInitiative]]>
                    <vaadin-integer-field theme="mini" value={{customInitiativeVal}} min="-20" max="20" has-controls hidden$="[[!isEditMode]]"></vaadin-integer-field>
                    <div hidden$="[[isEditMode]]">[[_plusMinus(customInitiativeVal)]][[customInitiativeVal]]</div>
                  </div>
                  <div hidden$=[[customInitiative]]>[[initiative]]</div>
                </div>
                <div class="basic-box__label">Initiative</div>
              </div>

              <div class="basic-box basic-box--short speed">
                <div class="basic-box__value" inner-h-t-m-l=[[speed]]></div>
                <div class="basic-box__label">Speed</div>
              </div>

              <!--  Short Rest -->
              <!-- <dnd-button icon="watch" class="rest-btn rest-btn--short" background="var(--lumo-contrast-10pct)" label="Short" on-click="_triggerShortRest"></dnd-button> -->

              <!--  Long Rest -->
              <!-- <dnd-button icon="watch_later" class="rest-btn rest-btn--long" background="var(--lumo-contrast-10pct)" label="Long" on-click="_triggerLongRest"></dnd-button> -->
            </div>

            <!-- Spell Mods -->
            <div hidden$="[[!_exists(spellMods)]]" class="basic-box__wrap basic-box__margin">
              <div class="basic-box">
                <span class="basic-box__value basic-box__no-flex">
                  <template is="dom-repeat" items="[[spellMods]]">
                    <span class="mod-val" tabindex="0">[[_abs(item.mod)]]<span class="tooltip">[[_join(item.classes)]]</span></span>
                  </template>
                </span>
                <span class="basic-box__label">Spell Mod</span>
              </div>
              <div class="basic-box">
                <span class="basic-box__value basic-box__no-flex">
                  <template is="dom-repeat" items="[[spellMods]]">
                    <span class="mod-val" tabindex="0">+[[item.spellAttackBonus]]<span class="tooltip">[[_join(item.classes)]]</span></span>
                  </template>
                </span>
                <span class="basic-box__label">Spell ATK+</span>
              </div>
              <div class="basic-box">
                <span class="basic-box__value basic-box__no-flex">
                  <template is="dom-repeat" items="[[spellMods]]">
                    <span class="mod-val" tabindex="0">[[item.dc]]<span class="tooltip">[[_join(item.classes)]]</span></span>
                  </template>
                </span>
                <span class="basic-box__label">Spell DC</span>
              </div>
            </div>
          </div>

          <div class="stats-other-wrap">
            <div class="stats">
              <div class="stat-box prof-bonus-box">
                <span class="prof-bonus-box__value">+[[proficiencyBonus]]</span>
                <span class="prof-bonus-box__label">Proficiency Bonus</span>
              </div>
              <!--  Attributes -->
              <div class="attribute-wrap">
                <div class="stat-box" on-click="_roll">
                  <div class="stat-box__save" enabled$="[[_contains(saves, 'str')]]"></div>
                  <div class="stat-box__mod">[[_mod(strAdj, str)]]</div>
                  <div class="stat-box__footer">
                    <vaadin-integer-field theme="mini" value={{str}} min="1" max="25" has-controls label="Strength" disabled$="[[!isEditMode]]">
                      <span class="stat-box__adj" slot="suffix">[[_adjustString(strAdj)]]</span>
                    </vaadin-integer-field>
                  </div>
                </div>
                <div class="proficiencies">
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'athletics')]]" custom-enabled$="[[_strContains(customSkillProfs, 'athletics')]]" enabled$="[[_strContains(skillProfs, 'athletics')]]" expertise$="[[_strContainsTwo(skillProfs, 'athletics')]]">Athletics</div>
                </div>
              </div>
              <div class="attribute-wrap">
                <div class="stat-box" on-click="_roll">
                  <div class="stat-box__save" enabled$="[[_contains(saves, 'dex')]]"></div>
                  <div class="stat-box__mod">[[_mod(dexAdj, dex)]]</div>
                  <div class="stat-box__footer">
                    <vaadin-integer-field theme="mini" value={{dex}} min="1" max="25" has-controls label="Dexterity" disabled$="[[!isEditMode]]">
                      <span class="stat-box__adj" slot="suffix">[[_adjustString(dexAdj)]]</span>
                    </vaadin-integer-field>
                  </div>
                </div>
                <div class="proficiencies">
                  <!-- <div class="proficiency-item" on-click="_roll" is-custom$="[[_strContains(customSkillProfs, 'acrobatics')]]" expertise$="[[_strContainsTwo(skillProfs, 'acrobatics')]]" enabled$="[[_strContains(skillProfs, 'acrobatics')]]">Acrobatics</div> -->
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'acrobatics')]]" custom-enabled$="[[_strContains(customSkillProfs, 'acrobatics')]]" expertise$="[[_strContainsTwo(skillProfs, 'acrobatics')]]" enabled$="[[_strContains(skillProfs, 'acrobatics')]]">Acrobatics</div>
                  <div class="proficiency-item proficiency-item--soh" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'sleight of hand')]]" custom-enabled$="[[_strContains(customSkillProfs, 'sleight of hand')]]" expertise$="[[_strContainsTwo(skillProfs, 'sleight of hand')]]" enabled$="[[_strContains(skillProfs, 'sleight of hand')]]">Sleight of Hand</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'stealth')]]" custom-enabled$="[[_strContains(customSkillProfs, 'stealth')]]" expertise$="[[_strContainsTwo(skillProfs, 'stealth')]]" enabled$="[[_strContains(skillProfs, 'stealth')]]">Stealth</div>
                </div>
              </div>
              <div class="attribute-wrap">
                <div class="stat-box" on-click="_roll">
                  <div class="stat-box__save" enabled$="[[_contains(saves, 'con')]]"></div>
                  <div class="stat-box__mod">[[_mod(conAdj, con)]]</div>
                  <div class="stat-box__footer">
                    <vaadin-integer-field theme="mini" mini-label value={{con}} min="1" max="25" has-controls label="Constitution" disabled$="[[!isEditMode]]">
                      <span class="stat-box__adj" slot="suffix">[[_adjustString(conAdj)]]</span>
                    </vaadin-integer-field>
                  </div>
                </div>
                <div class="proficiencies">
                
                </div>
              </div>
              <div class="attribute-wrap">
                <div class="stat-box" on-click="_roll">
                  <div class="stat-box__save" enabled$="[[_contains(saves, 'int')]]"></div>
                  <div class="stat-box__mod">[[_mod(intAdj, int)]]</div>
                  <div class="stat-box__footer">
                    <vaadin-integer-field theme="mini" mini-ish-label value={{int}} min="1" max="25" has-controls label="Intelligence" disabled$="[[!isEditMode]]">
                      <span class="stat-box__adj" slot="suffix">[[_adjustString(intAdj)]]</span>
                    </vaadin-integer-field>
                  </div>
                </div>
                <div class="proficiencies">
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'arcana')]]" custom-enabled$="[[_strContains(customSkillProfs, 'arcana')]]" expertise$="[[_strContainsTwo(skillProfs, 'arcana')]]" enabled$="[[_strContains(skillProfs, 'arcana')]]">Arcana</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'history')]]" custom-enabled$="[[_strContains(customSkillProfs, 'history')]]" expertise$="[[_strContainsTwo(skillProfs, 'history')]]" enabled$="[[_strContains(skillProfs, 'history')]]">History</div>
                  <div class="proficiency-item proficiency-item--inv" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'investigation')]]" custom-enabled$="[[_strContains(customSkillProfs, 'investigation')]]" expertise$="[[_strContainsTwo(skillProfs, 'investigation')]]" enabled$="[[_strContains(skillProfs, 'investigation')]]">Investigation</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'nature')]]" custom-enabled$="[[_strContains(customSkillProfs, 'nature')]]" expertise$="[[_strContainsTwo(skillProfs, 'nature')]]" enabled$="[[_strContains(skillProfs, 'nature')]]">Nature</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'religion')]]" custom-enabled$="[[_strContains(customSkillProfs, 'religion')]]" expertise$="[[_strContainsTwo(skillProfs, 'religion')]]" enabled$="[[_strContains(skillProfs, 'religion')]]">Religion</div>
                </div>
              </div>
              <div class="attribute-wrap">
                <div class="stat-box" on-click="_roll">
                  <div class="stat-box__save" enabled$="[[_contains(saves, 'wis')]]"></div>
                  <div class="stat-box__mod">[[_mod(wisAdj, wis)]]</div>
                  <div class="stat-box__footer">
                    <vaadin-integer-field theme="mini" value={{wis}} min="1" max="25" has-controls label="Wisdom" disabled$="[[!isEditMode]]">
                      <span class="stat-box__adj" slot="suffix">[[_adjustString(wisAdj)]]</span>
                    </vaadin-integer-field>
                  </div>
                </div>
                <div class="proficiencies">
                  <div class="proficiency-item proficiency-item--ah" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'animal handling')]]" custom-enabled$="[[_strContains(customSkillProfs, 'animal handling')]]" expertise$="[[_strContainsTwo(skillProfs, 'animal handling')]]" enabled$="[[_strContains(skillProfs, 'animal handling')]]">Animal Handling</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'insight')]]" custom-enabled$="[[_strContains(customSkillProfs, 'insight')]]" expertise$="[[_strContainsTwo(skillProfs, 'insight')]]" enabled$="[[_strContains(skillProfs, 'insight')]]">Insight</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'medicine')]]" custom-enabled$="[[_strContains(customSkillProfs, 'medicine')]]" expertise$="[[_strContainsTwo(skillProfs, 'medicine')]]" enabled$="[[_strContains(skillProfs, 'medicine')]]">Medicine</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'perception')]]" custom-enabled$="[[_strContains(customSkillProfs, 'perception')]]" expertise$="[[_strContainsTwo(skillProfs, 'perception')]]" enabled$="[[_strContains(skillProfs, 'perception')]]">Perception</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'survival')]]" custom-enabled$="[[_strContains(customSkillProfs, 'survival')]]" expertise$="[[_strContainsTwo(skillProfs, 'survival')]]" enabled$="[[_strContains(skillProfs, 'survival')]]">Survival</div>
                </div>
              </div>
              <div class="attribute-wrap">
                <div class="stat-box" on-click="_roll">
                  <div class="stat-box__save" enabled$="[[_contains(saves, 'cha')]]"></div>
                  <div class="stat-box__mod">[[_mod(chaAdj, cha)]]</div>
                  <div class="stat-box__footer">
                    <vaadin-integer-field theme="mini" value={{cha}} min="1" max="25" has-controls label="Charisma" disabled$="[[!isEditMode]]">
                      <span class="stat-box__adj" slot="suffix">[[_adjustString(chaAdj)]]</span>
                    </vaadin-integer-field>
                  </div>
                </div>
                <div class="proficiencies">
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'deception')]]" custom-enabled$="[[_strContains(customSkillProfs, 'deception')]]" expertise$="[[_strContainsTwo(skillProfs, 'deception')]]" enabled$="[[_strContains(skillProfs, 'deception')]]">Deception</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'intimidation')]]" custom-enabled$="[[_strContains(customSkillProfs, 'intimidation')]]" expertise$="[[_strContainsTwo(skillProfs, 'intimidation')]]" enabled$="[[_strContains(skillProfs, 'intimidation')]]">Intimidation</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'performance')]]" custom-enabled$="[[_strContains(customSkillProfs, 'performance')]]" expertise$="[[_strContainsTwo(skillProfs, 'performance')]]" enabled$="[[_strContains(skillProfs, 'performance')]]">Performance</div>
                  <div class="proficiency-item" on-click="_roll" custom-expertise$="[[_strContainsTwo(customSkillProfs, 'persuasion')]]" custom-enabled$="[[_strContains(customSkillProfs, 'persuasion')]]" expertise$="[[_strContainsTwo(skillProfs, 'persuasion')]]" enabled$="[[_strContains(skillProfs, 'persuasion')]]">Persuasion</div>
                </div>
              </div>
            </div>
  
            <div class="others">
              <div class="other" open$="[[featuresOpen]]">
                <button class="other__header" on-click="_toggleFeatures">
                  <span class="material-icons">expand_more</span>
                  <span class="other__header-text">Features</span>
                </button>  

                <div class="other__wrap">
                  <div class="other__item" hidden$="[[!hasDarkvision]]">
                    <h4>Darkvision [[darkvision]] ft.</h4>
                  </div>
                  <div class="other__item" hidden$="[[!_exists(feats)]]">
                    <h4>Feats</h4>
                    <div>[[feats]]</div>
                  </div>
                  <div class="other__item" hidden$="[[!_exists(resists)]]">
                    <h4>Resistances</h4>
                    <div>[[resists]]</div>
                  </div>
                  <div class="other__item" hidden$="[[!_exists(conditionImmunes)]]">
                    <h4>Condition Immunities</h4>
                    <div>[[conditionImmunes]]</div>
                  </div>
                </div>
              </div>

              <div class="other" open$="[[otherProfsOpen]]">
                <button class="other__header" on-click="_toggleOtherProfs">
                  <span class="material-icons">expand_more</span>
                  <span class="other__header-text">Proficiencies</span>
                </button>  

                <div class="other__wrap">
                  <div class="other__item" hidden$="[[!_exists(armorProfs)]]">
                    <h4>Armor</h4>
                    <div>[[armorProfs]]</div>
                  </div>
                  <div class="other__item" hidden$="[[!_exists(weaponProfs)]]">
                    <h4>Weapons</h4>
                    <div>[[weaponProfs]]</div>
                  </div>
                  <div class="other__item" hidden$="[[!_exists(toolProfs)]]">
                    <h4>Tools</h4>
                    <div>[[toolProfs]]</div>
                  </div>
                  <div class="other__item" hidden$="[[!_exists(languages)]]">
                    <h4>Languages</h4>
                    <div>[[languages]]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("dnd-character-builder-attributes",r)}}]);
//# sourceMappingURL=5.bundle.js.map