import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import EditFrom from '../editForm/EditForm';
import './stylel.scss';

const Product = (props) => {
    const {items, edit, editProduct, editableProduct, changeEditableProduct, modal, deleteProduct, upgrade} = props;
    return (
        <>
            {items.map(item => (
                <div key={item.id} className="product">
                    <img className="product__image" src={item.image} alt="hot-dog"/>
                    {edit && item.id === editableProduct.id
                        ?
                        <div className="product__form">
                            <EditFrom changeProduct={changeEditableProduct} product={editableProduct}/>
                            <Button title="upgrade" handleClick={() => upgrade(editableProduct)} />
                            <Button title="delete" handleClick={() => deleteProduct(item.id)}/>
                        </div>
                        :
                        <div className="product__description">
                            <h3 className="title">{item.title}</h3>
                            <span className="price">{item.price}$</span>
                            <p className="description">{item.description}</p>
                            <Button handleClick={!modal ? () => editProduct(item) : undefined} title="Edit"/>
                        </div>
                    }
                </div>
            ))}
        </>
    )
}

Product.propTypes = {
    items: PropTypes.array,
    edit: PropTypes.bool,
    modal: PropTypes.bool,
    editProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
    upgrade: PropTypes.func,
    editableProduct: PropTypes.object,
}

export default Product;