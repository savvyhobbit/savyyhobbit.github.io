import {PolymerElement, html} from '@polymer/polymer';
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "@vaadin/vaadin-select";
import "@vaadin/vaadin-grid";
import "@vaadin/vaadin-grid/vaadin-grid-filter";
import "@vaadin/vaadin-grid/vaadin-grid-filter-column"
import "@vaadin/vaadin-grid/vaadin-grid-sorter";
import './styles/material-styles.js';
import "./styles/my-styles.js";
import "./dnd-spinner.js";
import "./dnd-button.js";
import { setRouteSelection } from '../util/routing';
import { cloneDeep, encodeForHash, isFirstCharNum } from '../js/utils.js';
import Parser from "../util/Parser.js";
import { RARITY_TYPES } from '../util/consts.js';

class DndList extends PolymerElement {
  static get properties() {
    return {
      columns: {
        type: Array
      },
      listItems: {
        type: Array
      },
      filters: {
        type: Array
      },
      isMobile: {
        type: Boolean
      },
      searchString: {
        type: String
      },
      selectedFilters: {
        type: Object
      },
      resultsCount: {
        type: Number
      }
    };
  }

  ready() {
    super.ready();

    setTimeout(() => {
      this.$.grid.addEventListener('active-item-changed', (e) => {
        const item = e.detail.value;
        this.$.grid.selectedItems = item ? [item] : [];
        const linkData = [item.name];
        if (item.source) {
          linkData.push(item.source);
        }
        setRouteSelection(encodeForHash(linkData));
      });
    }, 0);

    window.addEventListener('resize', () => {
      this._checkBreakpoint();
      this._adjustHeight();
    });
    this._checkBreakpoint();
    this._adjustHeight();
    setInterval(() => {
      this._checkBreakpoint();
      this._adjustHeight();
    }, 500);
  }

  _checkBreakpoint() {
    this.isMobile = window.innerWidth <= 768;
  }

  _adjustHeight() {
    if (window.innerWidth < 921) {
      const top = this.$.grid.getBoundingClientRect().top;
      if (top) {
        this.$.grid.style.height = `${window.innerHeight - top - 85}px`;
      }
    } else {
      this.$.grid.style.height = `600px`;
    }
  }

  _renderPath(id) {
    return `render-${id}`;
  }

  _getPathValue(item, col) {
    return item && item[`render-${col.id}`];
  }

  _filterOptions(listItems, id) {
    let options = [{label: '', value: ''}];
    let skipSort = false;

    if (listItems && listItems.length > 0) {
      listItems = listItems.flat();
  
      // special parsing for specific filter types
      if (id === 'proficiencies') {
        skipSort = true;
        const profOptions = Object.keys(Parser.SKILL_JSON_TO_FULL)
          .map(profAbv => ({
            label: profAbv,
            value: profAbv
          }));
        options = options.concat(profOptions);
  
      } else if (id === 'ability') {
        skipSort = true;
        const abilityOptions = Object.keys(Parser.ATB_ABV_TO_FULL)
          .map(abilityAbv => ({
            label: Parser.ATB_ABV_TO_FULL[abilityAbv],
            value: abilityAbv
          }));
        options = options.concat({ label: '"Any"', value: 'any'}, abilityOptions);

      } else if (id === 'item-rarity') {
        skipSort = true;
        options = RARITY_TYPES
          .map(rarity => ({
            label: rarity,
            value: rarity
          }));
  
      } else if (id ==='source') {
        listItems.forEach(item => {
          const val = item[`render-${id}`];
          if (!options.some(option => option.value === val)) {
            options.push({
              label: Parser.sourceJsonToFullCompactPrefix(val) || val,
              value: val
            })
          }
        });

      } else {
        // 'general' parsing for other filter types
        listItems.forEach(item => {
          const val = item[`render-${id}`];
          if (Array.isArray(val)) {
            options = options.concat(val.map(valItem => ({label: valItem, value: valItem})));
          } else if (id === 'prerequisite' && val.includes('/')) {
            options = options.concat(val.split('/').map(i => ({label: i.trim(), value: i.trim()})));
          } else if ((id !== 'monster-type') && val.includes(',')) {
            options = options.concat(val.split(',').map(i => ({label: i.trim(), value: i.trim()})));
          } else {
            options.push({label: val, value: val});
          }
        });
      }
    }

    // De-duping options
    const uniqueVals = [];
    options = options.filter(option => {
      if (!uniqueVals.includes(option.value)) {
        uniqueVals.push(option.value);
        return true;
      }
      return false;
    });

    // Sorting options
    if (!skipSort) {
      options =  options.sort((a, b) => {
        const labelA = a.label,
          labelB = b.label,
          startsWithNumA = isFirstCharNum(labelA),
          startsWithNumB = isFirstCharNum(labelB);
        if (startsWithNumA && !startsWithNumB) {
          return 1
        }
        if (startsWithNumB && !startsWithNumA) {
          return -1
        }
        if (startsWithNumA && startsWithNumB) {
          const numA = parseFloat(labelA);
          const numB = parseFloat(labelB);
          return (numA < numB) ? -1 : (numA > numB) ? 1 : 0;
        }
        return (labelA < labelB) ? -1 : (labelA > labelB) ? 1 : 0;
      });
    }

    console.error('_filterOptions', options);
    return options;
  }

  _filterValue(id, selectedFilters) {
    if (selectedFilters && selectedFilters[id]) {
      return selectedFilters[id];
    }
  }

  _selectFilter(e) {
    const id = e.model ? e.model.__data.col.id : 'name';
    console.error('_selectFilter', e)
    
    const newFilters = this.selectedFilters ? cloneDeep(this.selectedFilters) : {};
    newFilters[id] = e.target.value;
    this.set('selectedFilters', newFilters);
  }

  _clearFilters() {
    const filters = this.root.querySelectorAll('vaadin-select, vaadin-grid-filter, vaadin-text-field');
    filters.forEach(filter => {
      filter.value = '';
    });
  }

  _nameColWidth(isMobile) {
    return isMobile ? '175px' : '300px';
  }

  _colWidth(index, columns) {
    if (columns.length && index === columns.length - 1) {
      return '200px';
    }
    return '175px'
  }

  _optionValue(option) {
    return option.value !== undefined ? option.value : option;
  }

  _optionLabel(option) {
    if (option.label !== undefined) {
      return option.label
    } else {
      return option;
    }
  }
  
  _optionLabelClass(option, col) {
    if (option && option.value && col && col.id === 'source') {
      return `source${option.value}`
    }
    return '';
  }

  _dataItemClass(item, col) {
    if (col && item && col.id === 'source') {
      return `source${item.source}`
    }
    return '';
  }

  _isLast(index, columns) {
    return columns.length && index === columns.length - 1
  }

  static get template() {
    return html`
      <style include="material-styles my-styles">
        :host {
          display: block;
        }


        .search-wrap {
          margin-bottom: 20px;
          display: flex;
          align-items: flex-end;
          flex-wrap: wrap;
        }
        .search-reset {
          margin-top: 16px;
        }

        .col-header-wrap {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 44px;
        }

        .col-header-wrap[last-item] {
          margin-right: 20px;
        }

        .col-header-wrap--name {
          align-items: center;
        }

        .col-header-wrap--name vaadin-grid-sorter {
          position: absolute;
          right: 0px;
          top: 16px;
          padding-right: 0;
          width:100%;
        }
        .name-label {
          display: inline-flex;
          font-size: 16px;
          color: var(--lumo-secondary-text-color);
        }
        .search-count {
          color: var(--lumo-secondary-text-color);
          margin-left: auto;
          font-size: 12px;
          margin-top: 4px;
        }

        .data-item {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        vaadin-grid-sorter {
          padding: 0 8px;
        }

        vaadin-text-field {
          margin-bottom: -4px;
          margin-right: 16px;
        }

        vaadin-select {
          width: 120px;
        }

        vaadin-grid {
          width: calc(100% + 32px);
          margin-left: -16px;
        }

        vaadin-grid-filter[path="name"] {
          display: none;
        }

        @media(min-width: 921px) {
          vaadin-select {
            width: 134px;
          }

          vaadin-grid {
            width: 100%;
            margin-left: 0;
          }
        }
      </style>

      <div class="search-wrap">
        <vaadin-text-field on-keyup="_selectFilter" label="Search"></vaadin-text-field>
        <dnd-button class="search-reset" on-click="_clearFilters" label="Reset"></dnd-button>
      </div>

      <vaadin-grid id="grid" items="[[listItems]]" theme="no-border no-row-borders" size="{{resultsCount}}">
        <vaadin-grid-column frozen width="[[_nameColWidth(isMobile)]]">
          <template class="header">
            <div class="col-header-wrap col-header-wrap--name">
              <span class="name-label">Name</span>
              <span class="search-count">[[resultsCount]] result(s)</span>
              <vaadin-grid-sorter path="name" ></vaadin-grid-sorter>
              <vaadin-grid-filter path="name" value='[[_filterValue("name", selectedFilters)]]'></vaadin-grid-filter>
            </div>
          </template>
          <template>
            <span>[[item.name]]</span>
          </template>
        </vaadin-grid-column>

        <template is="dom-repeat" items="[[columns]]" as="col">
          <vaadin-grid-column width="[[_colWidth(index, columns)]]" >
            <template class="header">
              <div class="col-header-wrap" last-item$="[[_isLast(index, columns)]]">
                <vaadin-grid-filter aria-label="[[col.label]]" path="[[_renderPath(col.id)]]" value="[[_filterValue(col.id, selectedFilters)]]">
                  <vaadin-select placeholder="[[col.label]]" on-change="_selectFilter">
                    <template>
                      <vaadin-list-box>
                        <template is="dom-repeat" items="[[_filterOptions(listItems, col.id)]]" as="option">
                          <vaadin-item value="[[_optionValue(option)]]">[[_optionLabel(option)]]</vaadin-item>
                        </template>
                      </vaadin-list-box>
                    </template>
                  </vaadin-select>
                </vaadin-grid-filter>

                <vaadin-grid-sorter path="[[_renderPath(col.id)]]" ></vaadin-grid-sorter>
              </div>
            </template>
            <template>
              <div class="data-item">
                [[_getPathValue(item, col)]]
                <!-- <span class$="[[_dataItemClass(item, col)]]">[[_getPathValue(item, col)]]</span> -->
              </div>
            </template>
          </vaadin-grid-column>
        </template>
      </vaadin-grid>
    `;
  }
}

customElements.define('dnd-list', DndList);