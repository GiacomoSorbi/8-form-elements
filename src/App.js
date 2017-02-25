import React, { Component } from 'react';
import UserInfoCollect from './UserInfoCollect';
import UserDisplay from './UserDisplay';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        level: '',
        bio: '',
        languages: {
          javascript: false,
          python: false,
          ruby: false,
          crystal: false,
          go: false,
          haskell: false,
          swift: false
        }
      },
      showResults: false
    }
  }

  handleHideResults() {
    this.setState({
      showResults: false
    });
  }

  handleFormSubmit(e) {
    this.setState({
      showResults: true
    });
    e.preventDefault();
  }

  handleFirstNameChange(e) {
    const obj = Object.assign({}, this.state);
    obj.formData.firstName = e.target.value;
    this.setState(obj);
  }

  handleLastNameChange(e) {
    const obj = Object.assign({}, this.state);
    obj.formData.lastName = e.target.value;
    this.setState(obj);
  }

  handleLevelChange(e) {
    const obj = Object.assign({}, this.state);
    obj.formData.level = e.target.value;
    this.setState(obj);
  }

  handleBioChange(e) {
    const obj = Object.assign({}, this.state);
    obj.formData.bio = e.target.value;
    this.setState(obj);
  }

  render() {
    const {formData: {firstName, lastName, level, bio}, showResults} = this.state;
    return (
      <div className="App">
        <UserInfoCollect 
          firstName={firstName}
          lastName={lastName}
          level={level}
          bio={bio}
          handleHideResults={this.handleHideResults.bind(this)}
          handleFormSubmit={this.handleFormSubmit.bind(this)}
          handleFirstNameChange={this.handleFirstNameChange.bind(this)}
          handleLastNameChange={this.handleLastNameChange.bind(this)}
          handleLevelChange={this.handleLevelChange.bind(this)}
          handleBioChange={this.handleBioChange.bind(this)}
        />
        {showResults && <UserDisplay 
          firstName={firstName}
          lastName={lastName}
          level={level}
          bio={bio}
          showResults={showResults}
        />
        }
      </div>
    );
  }
}

export default App;
