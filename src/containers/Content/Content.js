import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as hotdogActions from '../../actions/hotdog';
import Header from '../../components/header/Header';
import Product from '../../components/product/Product'
import './styles.scss';

class Content extends Component {

    state = {
        editableProduct: null
    }

    showHideModal = () => {
        const {showHideModal} = this.props;
        showHideModal();
    }

    editProduct = (editableProduct) => {
        const {editHotdog} = this.props;
        this.setState({editableProduct})
        editHotdog();
    }

    changeEditableProduct = ({target: {name, value}}) => {
        this.setState(oldState => {
            return {
                editableProduct: {
                    ...oldState.editableProduct,
                    [name]: value
                }
            }
        })
    }

    deleteProduct = (id) => {
        const {deleteHotdog} = this.props;
        fetch(`http://localhost:3001/products/delete/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                // this.getProducts();
                deleteHotdog(id);
            })
            .catch(error => console.log('error:', error))
    }

    upgradeProduct = (product) => {
        const {upgradeHotdog} = this.props;
        const {editableProduct} = this.state;
        fetch(`http://localhost:3001/products/update/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editableProduct)
        })
            .then((res) => {
                return res.json()
            })
            .then(results => {
                upgradeHotdog(results)
            })
    }

    render() {
        const {products, modal, edit} = this.props;
        const {editableProduct} = this.state;
        return (
            <div className="content">
                <Header handleClick={!modal ? this.showHideModal : undefined}/>
                {products.length === 0
                    ?
                    <div className="content__title">
                        <h1 className="content__title-text" onClick={this.showHideModal}>Create a new product</h1>
                    </div>
                    : <div className="content__products">
                        <Product
                            editableProduct={editableProduct}
                            editProduct={!modal ? this.editProduct : undefined}
                            edit={edit}
                            items={products}
                            modal={modal}
                            deleteProduct={this.deleteProduct}
                            upgrade={this.upgradeProduct}
                            changeEditableProduct={!modal ? this.changeEditableProduct : undefined}
                        />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.hotdog.hotdogs,
    modal: state.hotdog.modal,
    edit: state.hotdog.edit,
    editableProduct: state.hotdog.editableProduct
})

export default connect(
    mapStateToProps,
    hotdogActions
)(Content);