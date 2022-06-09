import React, { Component } from 'react'
import { Cards } from './cards';
import { SearchBox } from './searchbox/searchbox';

export default class CardList extends Component {

    constructor(){
        super();

        this.state= {
            monsters: [],
            searchField: '',
            loading: true,
            loadingError: '' 
        }

        // this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(response) return response.json()
            else throw Error('Failed ot fetch')
        })
        .then((user) => {
            this.setState(
                {
                    monsters: user,
                    loading: false
                },
            )
        })
        .catch(e => this.setState({ loadingError: e.message}))
    }
    
    handleChange = (e) => {
        this.setState({searchField: e.target.value}, () => {console.log(this.state)})  
    }

    render() {

        const {monsters, searchField} = this.state
        const filteredMonster = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return (
        <>
            <h1 style={{textAlign: 'center'}}>Zapnode</h1>
            <SearchBox 
                type='text' 
                placeholder='Search now...'
                handleChange={this.handleChange}
        />
            {this.state.loading && <h1> Loading...</h1>}
            {this.state.loadingError && <h1> {this.state.loadingError}</h1>}
            <Cards list={filteredMonster}/>
        </>
        )
    }
}
