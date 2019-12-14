import React from 'react';
import PropTypes from 'prop-types';
import left_shape from '../../images/left_shape.svg';
import right_shape from '../../images/right_shape.svg';
import './MainPage.scss'
import MainContent from "../MainContent/MainContent";

const MainPage = props => {
  return (
    <div className="main">
      <div className="main__shape">
        <img className="main__shape_top" src={left_shape} alt="main-shape" />
        <img className="main__shape_bottom" src={right_shape} alt="main-shape" />
      </div>

      <MainContent/>
    </div>
  );
};

MainPage.propTypes = {

};

export default MainPage;
