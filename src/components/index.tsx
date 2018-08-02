import * as React from 'react'
import { HashRouter as Router, Route, Redirect,Switch,NavLink} from 'react-router-dom'
// import {Button} from 'antd'
import Contenxtcom from './context/index'
import ErrorBoundaries from './error/index'
import Fragments from './fragments/index'
import Portals from './portals/index'

export default class Root extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <div>
            <span><NavLink to='/context'>context</NavLink> </span>
            <span><NavLink to='/error'>error</NavLink> </span>
            <span><NavLink to='/fragments'>fragments</NavLink> </span>
            <span><NavLink to='/portals'>portals</NavLink> </span>
          </div>
          <div>
              <Switch>
                <Redirect exact strict  from="/" to="/context" /> 
                <Route exact path="/context" component = {Contenxtcom}>
                </Route>
                <Route exact path="/error" component = {ErrorBoundaries}>
                </Route>
                <Route exact path="/fragments" component = {Fragments}>
                </Route>
                <Route exact path="/portals" component = {Portals}>
                </Route>

              </Switch>
              {this.props.children}
          </div>
          {/* <Button>啊啊啊啊</Button> */}
        </div>     
      </Router>
    )
  }
}