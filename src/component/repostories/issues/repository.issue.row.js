import React from "react";

const RepositoryIssueRow = ({repositoryIssue}) => {
    
    return (<tr>
                <td>
                    <i className="fa fa-newspaper-o"></i>
                    &nbsp;
                    {repositoryIssue.id}
                    </td>
                <td className="white-space-normal">
                    <i className="fa fa-tasks"></i>
                    &nbsp;
                    {repositoryIssue.title}
                </td>
                <td>
                    <i className="fa fa-commenting-o"></i>
                    &nbsp;
                    {repositoryIssue.status}
                </td>
                <td>
                    <i className="fa fa-calendar-o"></i>
                    &nbsp;
                    {repositoryIssue.updated}
                </td>
            </tr>)
}

export default RepositoryIssueRow;