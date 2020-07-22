import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { searchRepos } from './actions/repos'
import Card from './Card'

class App extends React.Component {
  state = { search: "" }
  
  searchGithub = async (search) => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${search}`);
    const results = await response.json();
    console.log(results)
    this.props.dispatch(searchRepos(results))
  }

  onInputChange = (e) => {
    if (e.target.value.length > 2) {
      this.setState({[e.target.name]: e.target.value})
      this.searchGithub(this.state.search)
    } 
  }

  render() {
    return (    
      <div className="App">
        <input type="text" name="search" onChange={this.onInputChange}></input>
        {this.props.repos && this.props.repos.items.map((repo) => {
          return <Card name={repo.name} stargazers_count={repo.stargazers_count} watchers_count={repo.watchers_count}/>
        }) }
      </div>
    );
  }
}

const mapStateToProps = repos => (
  {
    repos: repos
  }
)
  
export default connect(mapStateToProps)(App)
