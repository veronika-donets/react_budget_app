import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from "semantic-ui-react";
import './MainContent.scss';

const MainContent = props => {
  return (
    <div className="main__wrapper">
      <div className="main__wrapper_border">
        <div className="main__wrapper_text">
          Calculate your budget
        </div>
        <button className="main__wrapper_button">
          <Icon name='chevron right' />
          Try now
        </button>
      </div>
    </div>
  );
};

MainContent.propTypes = {

};

export default MainContent;
