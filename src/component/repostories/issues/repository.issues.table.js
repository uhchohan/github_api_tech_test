import React from "react";
import { connect } from 'react-redux';
import RepositoryIssueRow from  './repository.issue.row'
import { getRepositoryIssues, getIssuesReset } from '../../../store/actions/repositoryAction';

class RepositoryIssueTable extends React.Component {
  constructor(props) {
    super(props);
    const { user, name } = props.match.params;

    this.state = { user:  user, name: name}
    this.onClick_Back = this.onClick_Back.bind(this);
  }

  componentDidMount() {
    this.props.getRepositoryIssues(this.state.user, this.state.name);
  }

  onClick_Back(event){
    event.preventDefault();
    this.props.getIssuesReset();
    this.props.history.push(`/repos`);
  }
  
  render() {
    const footerDisplay = {
      display: this.props.repositoryIssues.length === 0 ? 'block' : 'none'
    }

    return (<div id="issues">
              <br></br>
              <div className="row">
                  <div className="col-md-6">
                    <h1>Issue Details</h1>
                  </div>
                  <div className="col-md-6 text-right">
                    <a className="btn btn-info" href='/empty' onClick={this.onClick_Back}>
                      <i className="fa fa-angle-left"></i>
                      &nbsp;
                      Back
                    </a>
                  </div>
                  <div className="col-md-12">
                    <hr/>
                  </div>
              </div>
              <table className="table table-hover text-left">
                <thead>
                  <tr className="text-white bg-primary">
                    <th>#</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.props.repositoryIssues.map(issue => 
                    {
                    return (
                    <RepositoryIssueRow key={issue.id} repositoryIssue={issue} />
                  )})
                  }
                </tbody>
                <tfoot>
                  <tr style={footerDisplay}>
                    <td colSpan="10">
                      No issues found!
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>);
  }
}

const mapStateToProps = state => ({
  repositoryIssues: state.repositories.issues
})

const mapDispatchToProps = (dispatch) => ({
  getRepositoryIssues: (user, name) => dispatch(getRepositoryIssues(user, name)),
  getIssuesReset: () => dispatch(getIssuesReset())
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryIssueTable);