import React from "react";
import RepositoryRow from  './repository.row'

class RepositoryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  
  render() {
    const footerDisplay = {
      display: this.props.repositories.length === 0 ? 'block' : 'none'
    }

    return (
          <div>
            <h1>{this.props.title}</h1>
            <hr/>
            <table className="table table-hover text-left">
              <thead>
                <tr className="text-white bg-primary">
                  <th>Name</th>
                  <th>User</th>
                  <th>Stars</th>
                  <th>Issues</th>
                  <th>Forks</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
              {
                this.props.repositories.map(repository => 
                  {
                  return (
                  <RepositoryRow key={repository.id} repository={repository} onClickRepository={this.props.onClickRepository}/>
                )})
                }
              </tbody>
              <tfoot>
                <tr style={footerDisplay}>
                  <td colSpan="10">
                    No record found!
                  </td>
                </tr>
              </tfoot>
            </table>
    </div>);
  }
}

export default RepositoryTable;