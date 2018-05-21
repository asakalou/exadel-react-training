import React, {Component} from 'react';


export class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.handleChangeName = this.handleChangeName.bind(this);

        this.logEvent('constructor');
    }

    logEvent(eventName) {
        console.log(`${this.props.item.name} - ${eventName}`);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');

        return nextProps;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        this.logEvent('getSnapshotBeforeUpdate');

        return null;
    }

    // componentWillMount() {
    //     this.logEvent('componentWillMount');
    // }

    componentDidMount() {
        this.logEvent('componentDidMount');
    }

    // componentWillReceiveProps() {
    //     this.logEvent('componentWillReceiveProps');
    // }

    shouldComponentUpdate() {
        this.logEvent('shouldComponentUpdate');
        return true;
    }

    // componentWillUpdate() {
    //     this.logEvent('componentWillUpdate');
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.logEvent('componentDidUpdate');
    }

    componentWillUnmount() {
        this.logEvent('componentWillUnmount');
    }

    componentDidCatch() {
        this.logEvent('componentDidCatch');
    }

    handleChangeName() {
        this.props.onChangeName(this.props.item);
    }

    render() {
        this.logEvent('render');
        return (
            <div className="item">
                {this.props.item.name}
                <button type="button" onClick={this.handleChangeName}>Change Name</button>
                <button type="button" onClick={this.props.onDelete}>x</button>
            </div>
        );
    }

}

export default Item;