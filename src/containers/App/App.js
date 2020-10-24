import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as hotdogActions from '../../actions/hotdog';
import {v4 as id} from 'uuid'
import Content from '../Content/Content';
import Modal from '../../components/modal/Modal';
import './styles.scss';

const initialState = {
    image: null,
    nameFile: null
}

class App extends Component {

    state = {
        image: null,
        imageName: null,
        product: null
    }

    componentDidMount() {
        this.getProducts();
    }

    componentDidUpdate() {
        const {modal} = this.props;
        let bodyStyle = document.querySelector('body');
        modal
            ? bodyStyle.style = 'overflow: hidden'
            : bodyStyle.style = 'overflow: auto'
    }

    getProducts = () => {
        const {addNewHotdog} = this.props;
        fetch('http://localhost:3001')
            .then(response => {
                return response.json();
            })
            .then(result => {
                addNewHotdog(result);
            })
            .catch(error => {
                console.log('Error message: ', error);
            })
    }

    createProduct = async (e) => {
        e.preventDefault();
        const {formData, addNewHotdog, showHideModal} = this.props;
        const {image, imageName, product: {title, description}} = this.state;
        let result = {
            name: formData.values.name,
            title,
            description,
            price: 2,
            imageName,
            image
        }
        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                addNewHotdog(data);
                showHideModal();
            });
    }

    resetModal = () => {
        const {showHideModal} = this.props;
        this.setState(initialState);
        showHideModal();
    }

    changeImage = (e) => {
        const {formData} = this.props;
        let reader = new FileReader();
        let file = e.target.files[0];
        let imageName = file.name;   //.split('.')[0];
        reader.onload = () => {
            this.setState({
                image: reader.result,
                imageName
            })
        }
        reader.readAsDataURL(file);
    }

    changeProduct = ({target: {name, value}}) => {
        this.setState(prevState => {
            return {
                product: {
                    ...prevState.product,
                    [name]: value
                }
            }
        })
    }

    render() {
        const {imageName} = this.state;
        const {modal} = this.props;
        return (
            <div className={modal ? 'disable-app' : 'app'}>
                <Modal
                    fileName={imageName}
                    handleSubmit={this.submit}
                    changeImage={this.changeImage}
                    resetModal={this.resetModal}
                    modal={modal}
                    create={this.createProduct}
                    changeProduct={this.changeProduct}
                />
                <Content/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    formData: state.form.hotDogs,
    modal: state.hotdog.modal
})

export default connect(
    mapStateToProps,
    hotdogActions
)(App);
