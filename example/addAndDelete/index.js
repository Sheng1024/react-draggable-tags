import React, {Component} from 'react';
import { fromJS } from 'immutable';

import {DraggableArea, DraggableAreasGroup} from '../../src/index';
import deleteBtn from '../imgs/delete.png';
import deleteBtn2x from '../imgs/delete@2x.png';
import styles from './style.less';

import mock from './mock.js';

export default class AddAndDelete extends Component {
  constructor() {
    super();
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  handleClickAdd() {
    this.addTag({id: this.input.value , name: this.input.value});
    this.input.value = '';
  }

  render() {
    return (
      <div className="AddAndDelete">
        <div className="main">
          <DraggableArea
            initailTags={mock.tags}
            build={({tag, deleteThis}) => {
              return (
                <div className="tag">
                  <img
                    className="delete"
                    src={deleteBtn}
                    srcSet={`${deleteBtn2x} 2x`}  
                    onClick={deleteThis}
                  />
                  {tag.name}
                </div>
              )
            }}
            getAddTagFunc={addTag => this.addTag = addTag}
            style={{height: '231px'}}
          />
        </div>
        <div className="inputs">
          <input ref={r => this.input = r} />
          <button onClick={this.handleClickAdd.bind(this)}>Add</button>
        </div>
      </div>
    );
  }
}