import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let modalsRoot = document.getElementById('modals');


class MyModal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalsRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalsRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}


class Portals extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }


    handleShow() {
        this.setState({
            showModal: true
        });
    }

    handleHide() {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <div>
                <h1>Portals</h1>

                <button type="button" onClick={this.handleShow}>Show Modal</button>

                {this.state.showModal ?
                    <MyModal>
                        <button type="button" onClick={this.handleHide}>Hide Modal</button>
                    </MyModal>
                :null}

            </div>
        );
    }

}


export default Portals;