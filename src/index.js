var React = require('react');
var Main = React.createFactory(require('./views/main.jsx'));
if (typeof window !== 'undefined') {
  window.onload = function() {
    React.render(Main(), document.getElementById('content'));
  }
}