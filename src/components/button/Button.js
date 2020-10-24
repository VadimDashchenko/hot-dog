import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = (props) => {
    const {title, handleClick, type, types} = props;
    return(
        <button className={types === 'modal'
            ? 'button modal-button'
            : 'button content-button'}
                onClick={handleClick}
                type={type}
        >
            {title}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    handleClick: PropTypes.func,
    types: PropTypes.string
}

export default Button;