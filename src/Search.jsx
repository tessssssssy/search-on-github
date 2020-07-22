import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = { search: "" };
    this.callAjax = debounce(500, this.callAjax);
  }

  searchGithub = async (search) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${search}`
    );
    const results = await response.json();
    console.log(results);
    this.props.dispatch(searchRepos(results));
  };

  callAjax = (value) => {
    debounce(300, () => {
      this.searchGithub(value);
    })();
  };
  onInputChange = (e) => {
    this.callAjax(e.target.value);
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    console.log(this.props.repos);
    return (
      <div className="App">
        <h1>Search Github</h1>
        <input
          type="text"
          id="search"
          placeholder="search"
          onChange={this.onInputChange}
        ></input>
        <div className="cards-container">
          {this.props.repos &&
            this.props.repos.results.items.map((repo, index) => {
              return (
                <Card
                  key={index}
                  name={repo.name}
                  stargazersCount={repo.stargazers_count}
                  watchersCount={repo.watchers_count}
                  url={repo.svn_url}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Search;