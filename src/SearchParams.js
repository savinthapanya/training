import React, { Component } from 'react';

class SearchParams extends Component {
    state = {
        location: 'Seattle, WA',
        animal: '',
        breed: ''
    }
    render() {
        return (
            <div className='search-params'>
                <label htmlFor='location'>
                    location
                    <input 
                        id='location'
                        value={this.state.location}
                        placeholder='Location'
                    
                    />
                    
                   
                </label>
                    
            </div>
        );
    }
}

export default SearchParams;