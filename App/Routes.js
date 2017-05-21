import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Routes = () => (
  <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
  </Router>
)

export default Routes