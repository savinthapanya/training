import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class SearchBox extends Component {
  render() { 
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <label htmlFor="location">
              Location
              <input
                onChange={context.handleLocationChange}
                id="location"
                value={context.location}
                placeholder="Location"
              />
            </label>
            <label htmlFor="animal">
              Animal
              <select
                onChange={context.handleAnimalChange}
                onBlur={context.handleAnimalChange}
                id="animal"
                value={context.animal}
              >
                <option />
                {ANIMALS.map(animal => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="breed">
              Breed
              <select
                disabled={!context.breeds.length}
                onChange={context.handleBreedChange}
                onBlur={context.handleBreedChange}
                id="breed"
                value={context.breed}
              >
                <option />
                {context.breeds.map((breed, i) => (
                  <option key={breed + i} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </label>
            <button>Submit</button>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
