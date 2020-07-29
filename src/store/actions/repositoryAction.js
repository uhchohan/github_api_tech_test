import * as actionTypes from './constants';
import GithubService from "../../service/github.service";

export const RepositorySearchReset = () => 
({
    type: actionTypes.REPOSITORIES_SEARCH_RESET,
    payload: ''
})

export const getIssuesReset = () => 
({
    type: actionTypes.ISSUES_RESET,
    payload: ''
})

export const RepositorySearchText = (keyword) => 
({
    type: actionTypes.REPOSITORIES_SEARCH_KEYWORD,
    payload: keyword
})

export const getRepositoriesByTopRatings = () => (dispatch) => {
    GithubService.getRepositoriesByTopRatings()
    .then(response => 
    {
        dispatch({ 
                    type: actionTypes.GET_REPOSITORIES_BY_TOP_RATINGS, 
                    payload: response.data.items.map((item) => formatData(item)) 
                })
    })
}

export const getRepositoriesByMostRecentUpdated = () => (dispatch) => {
    GithubService.getRepositoriesByMostRecentUpdated()
    .then(response => 
    {
        dispatch({ 
                    type: actionTypes.GET_REPOSITORIES_BY_MOST_RECENT_UPDATED, 
                    payload: response.data.items.map((item) => formatData(item)) 
                })
    })
}

export const getRepositoriesSearchBy = (keyword) => (dispatch) => {
    GithubService.getRepositoriesSearchBy(keyword)
    .then(response => 
    {
        dispatch({ 
                    type: actionTypes.GET_REPOSITORIES_BY_SEARCH_KEYWORDS, 
                    payload: response.data.items.map((item) => formatData(item)) 
                })
    })
}

export const getRepositoryIssues = (user, name) => (dispatch) => {
    GithubService.getRepositoryIssues(user, name)
    .then(response => 
    {
        dispatch({ 
                    type: actionTypes.GET_REPOSITORY_ISSUES, 
                    payload: response.data.map((item) => formatIssueData(item)) 
                })
    })
}

const formatData = (repository) => ({
    id: repository.id,
    name: repository.name,
    user: repository.owner.login,
    full_name: repository.full_name,
    stars_count: repository.stargazers_count,
    issues_count: repository.open_issues,
    forks_count: repository.forks_count,
    updated: new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(repository.updated_at)).replace(", ", " ")
  })

  const formatIssueData = (issue) => ({
    id: issue.number,
    title: issue.title,
    status: issue.state,
    updated: new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit'}).format(new Date(issue.updated_at)).replace(", ", " ")
  })