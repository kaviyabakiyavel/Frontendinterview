//App.js
import React from 'react';
import './style.css';
import MovieList from './MovieList';

const movieListarr = [
  {
    Name: 'MovieA',
    ReleaseDate: '03-06-2021',
    Actor: 'Vijay1'
  },
  {
    Name: 'MovieB',
    ReleaseDate: '03-06-2021',
    Actor: 'Vijay2'
  },
  {
    Name: 'MovieC',
    ReleaseDate: '03-06-2021',
    Actor: 'Vijay3'
  },
  {
    Name: 'MovieD',
    ReleaseDate: '03-06-2021',
    Actor: 'Vijay4'
  },
  {
    Name: 'MovieE',
    ReleaseDate: '03-06-2021',
    Actor: 'Vijay5'
  }
];

export default function App() {
  return (
    <div>
      <MovieList  movielist = {movieListarr}/>
    </div>
  );
}

//Search.js
import React from 'react';

export default function search(props) {
  const debouncefn = (fn, delay) => {
    let timer;
    return function(...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn(args);
      }, delay);
    };
  };
  const handleonChange = value => {
    props.getSearchedValue(value);
  };
  const optimizedsearch = debouncefn(value => handleonChange(value), 3000);
  return (
    <div>
      <input
        type="search"
        onChange={event => optimizedsearch(event.target.value)}
      />
    </div>
  );
}

//MovieList.js
import React, { PureComponent } from 'react';
import { map, isEmpty } from 'lodash';
import Search from './Search';

class MovieList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchedvalue: 'There is No searched Data'
    };
  }
  getSearchedValue = value => {
    let movielist = [...this.props.movielist];
    if (value === '') {
      this.setState({
        searchedvalue: 'There is No searched Data'
      });
    } else {
      let filtered = movielist.filter(function(obj) {
        if (obj['Name']) {
          return obj['Name'].includes(value);
        }
      });
      this.setState({
        searchedvalue: filtered[0]['Name']
      });
    }
  };
  render() {
    console.log('searchdvalue', this.state.searchedvalue);
    return (
      <div>
        <Search getSearchedValue={this.getSearchedValue} />
        <h1>Dispaly Movie List Name : </h1>
        {this.props.movielist.map((data, index) => {
          return <div key={index}>{data['Name']}</div>;
        })}
        <h1>Display searched values : </h1>
        <div>{this.state.searchedvalue}</div>
      </div>
    );
  }
}
export default MovieList;
