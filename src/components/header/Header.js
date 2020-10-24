import React from 'react';
import PropType from 'prop-types';
// import *as hotdogActions from '../../actions/hotdog';
// import {connect} from 'react-redux';
import './styles.scss';

const Header = (props) => {
    const {handleClick} = props;
    return(
        <div className="header">
            <button className="header__button" onClick={handleClick}>Add hot-dog</button>
        </div> 
    )
}

Header.propTypes = {
    handleClick: PropType.func
}

export default Header;