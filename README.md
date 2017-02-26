# LEARNING REACT 8 - FORM ELEMENTS
React Introduction

## Installation

Clone this repository and use `npm start` in your terminal to make it start

## Activities and Objectives

You are tasked to two components: `UserDisplay` and `UserInfoCollect`.

The latter is populated with information typed by the user and the former gets updated when a submit button is pressed.

You are free to collect as much information as you wish, just be sure to include at least name, surname and level; also, using different input fields (select or checkbox fields, textareas, etc) is highly recommended.

Quick Example of how to manage a React Form:

```
class YourForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: []};
  }
  handleChange(event, index) {
    this.setState({value[index]: event.target.value});
  }
  handleSubmit(event) {
    callAPIMemo({payload: this.state.value});
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <input type="radio" name="salutation" value="mr"  onChange={::this.handleChange(event, 0)}  /> Mr. 
         <input type="radio" name="salutation" value="Mrs" onChange={::this.handleChange(event, 0)} /> Mrs.
         <input type="text" placeholder=”Name” onChange={::this.handleChange(event, 1)} />
         <input type="text" placeholder=”Surname” onChange={::this.handleChange(event, 2)} />
         <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## Extra notes and tips

How would you split each components into subcompoments? Is it worth it? If so, why? Otherwise, why not?

How could you make the `UserInfoCollect` disappear when the submit button is pressed? How could you make it appear again when an "edit profile" button is pressed?

Do you think you could make each subfield editable directly on `UserDisplay`? If so, which would be the best approach? If not, why?
