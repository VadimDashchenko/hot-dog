import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import Button from '../button/Button';
import './styles.scss';

const Modal = (props) => {
    const {handleSubmit, changeImage, reset, fileName, resetModal, modal, changeProduct, create} = props;
    return(
        <div className={modal ? "modal modal-show" : "modal"}>
            <p className="modal__header">add new hot-dog</p>
            <form className="modal__form" onSubmit={create} >
                <div className="modal__input-field">
                    <Field placeholder="name" name="name" component="input" type="text" required />
                </div>
                <div className="modal__input-field">
                    <input placeholder="title" name="title" type="text" onChange={changeProduct} required />
                </div>
                <div className="modal__input-field">
                    <input placeholder="description" name="description" type="text" onChange={changeProduct} required />
                </div>
                <div className="modal__input-field">
                    <input placeholder="price" name="price" type="number" min="0" onChange={changeProduct} required />
                </div>
                <div className="modal__input-field">
                    <label htmlFor="image">{!fileName ? 'image' : fileName}</label>
                    <input id="image" placeholder="image" name="image" onChange={(e) => changeImage(e)} type="file" required />
                </div>
                <div className="modal__buttons">
                    <Button type="button" types="modal" handleClick={() => {resetModal();reset()}} title="No Thanks" />
                    <Button type="submit" types="modal" title="Add" handleClick={create} />
                </div>
            </form>
        </div>
    )
}

Modal.propTypes = {
    handleClick: PropTypes.func,
    handleSubmit: PropTypes.func,
    create: PropTypes.func,
    fileName: PropTypes.string
}

export default reduxForm({
    form: 'hotDogs'
})(Modal);