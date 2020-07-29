import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import NotFound from './pages/NotFound'
import Repositories from './repostories/repositories'
import RepositoryIssueTable from './repostories/issues/repository.issues.table'

const Routes = () => {
    return (
    <Switch>
        <Route path="/" exact component={Repositories}  />
        <Route path="/repos" exact component={Repositories}  />
        <Route path="/git_hub_repos_test" exact component={Repositories}  />
        <Route path="/issues/:user/:name" component={RepositoryIssueTable} />
        <Route path="*" component={NotFound} />
      </Switch>) 
  }

  export default Routes;