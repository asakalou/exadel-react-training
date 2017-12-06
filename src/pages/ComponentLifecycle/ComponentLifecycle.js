import React, {Component} from 'react';
import Item from "./Item";


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
        const indexOfItem = this.state.items.indexOf(item);
        this.state.items[indexOfItem] = {...item, name: `${item.name} -> ${new Date().getTime()}`};
        this.setState({
            items: this.state.items
        });
    }

    handleDeleteItem(item) {
        const indexOfItem = this.state.items.indexOf(item);
        this.state.items.splice(indexOfItem, 1);

        this.setState({
            items: this.state.items
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
                                    <Item ref={(itm) => {console.log(`Ref is set for ${item.id}`)}}
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