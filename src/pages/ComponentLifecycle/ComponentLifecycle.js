import React, {Component} from 'react';
import Item from "./Item";

/**
 * Component Lifecycle at https://reactjs.org/docs/react-component.html
 */
class ComponentLifecycle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleChangeItemName = this.handleChangeItemName.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleAddItem() {
        const id = new Date().getTime();
        this.setState({
            items: this.state.items.concat([{id, name: id}])
        })
    }

    handleChangeItemName(item) {
        this.setState((prevState, props) => {
            const indexOfItem = prevState.items.indexOf(item);
            prevState.items[indexOfItem].name = `${item.name} -> ${new Date().getTime()}`;
            return {
                items: prevState.items
            }
        });
    }

    handleDeleteItem(item) {
        this.setState((prevState, props) => {
            const indexOfItem = prevState.items.indexOf(item);
            const items = prevState.items.splice(indexOfItem, 1);
            return {items}
        });
    }

    render() {
        return (
            <div>
                <h1>Component Life Cycle</h1>

                <button type="button" onClick={this.handleAddItem}>Add Item</button>

                <div>
                    <ul>
                        {
                            this.state.items.map(item =>
                                <li key={item.id}>
                                    <Item ref={(itm) => {
                                        console.log(`Ref is set for ${item.id}`)
                                    }}
                                          item={item}
                                          onChangeName={this.handleChangeItemName}
                                          onDelete={this.handleDeleteItem}/>
                                </li>
                            )
                        }
                    </ul>
                </div>

            </div>
        );
    }

}

export default ComponentLifecycle;