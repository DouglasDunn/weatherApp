var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, browserHistory} = require("react-router");
var Main = require("Main");
var About = require("About");
var Examples = require("Examples");
var Weather = require("Weather");

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);


//api.openweathermap.org/data/2.5/weather?q={city name} // main url
//&units=imperial // farenheight format
//&appid=e0e5f6bac14b6ebffa0ad78d1bfa8136 api key
