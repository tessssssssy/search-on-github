import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { searchRepos } from './actions/repos'
import Card from './Card'

class App extends Component {
  state = { search: "" }

  searchGithub = async (search) => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${search}`);
    const results = await response.json();
    console.log(results)
    this.props.dispatch(searchRepos(results))
  }

  onInputChange = (e) => { 
    if (e.target.value.length > 2) {   
      this.searchGithub(e.target.value)
      this.setState({[e.target.id]: e.target.value})
    } 
  }

  render() {
    console.log(this.props.repos)
    return (    
      <div className="App">
        <input type="text" id="search" onChange={this.onInputChange}></input>
        {this.props.repos && this.props.repos.results.items.map((repo, index) => {
          return <Card key={index} name={repo.name} stargazersCount={repo.stargazers_count} watchersCount={repo.watchers_count} url={repo.svn_url}/>
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
