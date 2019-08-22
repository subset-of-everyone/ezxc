import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import "semantic-ui-css/semantic.css";
import { Roles } from "meteor/alanning:roles";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import Landing from "../pages/Landing";
import ListStuff from "../pages/ListStuff";
import ListStuffAdmin from "../pages/ListStuffAdmin";
import AddStuff from "../pages/AddStuff";
import EditStuff from "../pages/EditStuff";
import NotFound from "../pages/NotFound";
import Signin_Instructor from "../pages/Signin_Instructor";
import Signin_Student from "../pages/Signin_Student";
import Signup_Instructor from "../pages/Signup_Instructor";
import Signup_Student from "../pages/Signup_Student";
import Signout from "../pages/Signout";
import CreateCourse from "../pages/CreateCourse";
import ViewSection from "../pages/ViewSection";
import StudentSignUp from "../pages/StudentSignUp";

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component
{
  render()
  {
    return (
        <Router>
          <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/instructor/create_course" component={CreateCourse}/>
              <Route path="/instructor/view_section" component={ViewSection}/>
              <Route path="/signin_instructor" component={Signin_Instructor}/>
              <Route path="/signin_student" component={Signin_Student}/>
              <Route path="/signup_instructor" component={Signup_Instructor}/>
              <Route path="/signup_student" component={Signup_Student}/>
              <ProtectedRoute path="/list" component={ListStuff}/>
              <ProtectedRoute path="/add" component={AddStuff}/>
              <ProtectedRoute path="/edit/:_id" component={EditStuff}/>
              <AdminProtectedRoute path="/admin" component={ListStuffAdmin}/>
              <ProtectedRoute path="/signout" component={Signout}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
    {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname: "/signin", state: { from: props.location } }}/>
      );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
        {
          const isLogged = Meteor.userId() !== null;
          const isAdmin = Roles.userIsInRole(Meteor.userId(), "admin");
          return (isLogged && isAdmin) ?
              (<Component {...props} />) :
              (<Redirect to={{ pathname: "/signin", state: { from: props.location } }}/>
              );
        }}
    />
);

/** Require a component and location to be passed to each ProtectedRoute. */
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

/** Require a component and location to be passed to each AdminProtectedRoute. */
AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default App;
