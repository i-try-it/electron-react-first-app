var React = require('react');
var ReactDOM = require('react-dom');







var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');

var MainInterface = React.createClass({
  render: function(){
    return(
      <h1>Hello from React!</h1>
    )
  }
})

ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
)