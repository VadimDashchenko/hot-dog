import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const EditForm = (props) => {
    const {product, changeProduct} = props;
    return (
        <div className="edit-form">
            {/*<input type="file" name="image" value={product.imageName} onChange={changeProduct}/>*/}
            <input type="text" name="name" value={product.name} onChange={changeProduct}/>
            <input type="text" name="title" value={product.title} onChange={changeProduct}/>
            <input type="number" name="price" value={product.price} onChange={changeProduct}/>
            <textarea rows="5" name="description" value={product.description} onChange={changeProduct}/>
        </div>
    )
}

EditForm.propTypes = {
    product: PropTypes.object,
    changeProduct: PropTypes.func,
}

export default EditForm;