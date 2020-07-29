import React from "react";

const RepositoryRow = ({repository, onClickRepository}) => {    
    return (<tr onClick={()=> onClickRepository(repository.user, repository.name)}>
                <td>
                    <i className="fa fa-file-code-o"></i>
                    &nbsp;
                    {repository.name}
                    </td>
                <td>
                    <i className="fa fa-user-o"></i>
                    &nbsp;
                    {repository.user}
                </td>
                <td>
                    <i className="fa fa-star-o"></i>
                    &nbsp;
                    {repository.stars_count}
                </td>
                <td>
                    <span className="badge badge-pill badge-info">{repository.issues_count}</span>
                </td>
                <td>
                    <i className="fa fa-code-fork"></i>
                    &nbsp;
                    {repository.forks_count}
                </td>
                <td>
                    <i className="fa fa-calendar-o"></i>
                    &nbsp;
                    {repository.updated}
                </td>
            </tr>)
}

export default RepositoryRow;