import React, { Component } from "react";
import pf, { ANIMALS } from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class SearchParams extends Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: "",
    breeds: []
  };

  handleLocationChange = event => {
    this.setState({ location: event.target.value });
  };

  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value,
        breed: ""
      },
      this.getbreeds
    );
  };

  handleBreedChange = event => {
    this.setState({ breed: event.target.value });
  };

  getbreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({ breeds: data.petfinder.breeds.breed });
        } else {
          this.setState({ breeds: [] });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  };

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
            id="animal"
            value={this.state.animal}
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
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            id="breed"
            value={this.state.breed}
            disabled={!this.state.breeds.length}
          >
            <option />
            {this.state.breeds.map((breed, i) => (
              <option key={breed + i} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default SearchParams;
