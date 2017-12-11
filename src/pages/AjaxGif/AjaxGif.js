import React, {Component} from 'react';
import axios from 'axios';

const URL = 'http://api.giphy.com/v1/gifs/search';
const API_KEY = 'JokfEsQ6phaio2LlwNgGHhpBr47QE89e';

/**
 * axios documentation and examples at https://github.com/axios/axios
 */

class AjaxGif extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: [],
            query: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleQueryChange = this.handleQueryChange.bind(this);
    }

    componentDidMount() {
    }

    handleSearch(event) {
        event.preventDefault();

        axios.get(URL, {
            params: {api_key: API_KEY, q: this.state.query}
        }).then(response => {
            this.setState({results: response.data.data});
        }).catch(error => {
            console.log(error);
        });
    }

    handleQueryChange(event) {
        this.setState({
            query: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Ajax Example</h1>
                <hr/>

                <form onSubmit={this.handleSearch}>
                    <label htmlFor="ajaxGifQuery">Query</label>
                    <input id="ajaxGifQuery" type="text"
                           value={this.state.query}
                           onChange={this.handleQueryChange}/>
                </form>

                <ul>
                    {
                        this.state.results.map(item => {
                            return (
                                <li key={item.id}>
                                    <img src={item.images.preview_gif.url} alt={item.slug}/>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default AjaxGif;