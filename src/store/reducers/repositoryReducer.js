import * as actionTypes from '../actions/constants';

let defaultRepositories = {
    search_keyword: '',
    repos_by_stars: [],
    repos_by_updated: [],
    repos_by_search: [],
    issues: []
};

const repositoryReducer = (state = defaultRepositories, {type, payload}) => {
    switch (type) {
        case actionTypes.REPOSITORIES_SEARCH_RESET:
        {
            return {...state, search_keyword: '', repos_by_search: []}
        }
        case actionTypes.ISSUES_RESET:
        {
            return {...state, issues: []}
        }
        case actionTypes.REPOSITORIES_SEARCH_KEYWORD:
        {
            return {...state, search_keyword: payload}
        }
        case actionTypes.GET_REPOSITORIES_BY_TOP_RATINGS:
        {
            return {...state, repos_by_stars: payload}
        }
        case actionTypes.GET_REPOSITORIES_BY_MOST_RECENT_UPDATED:
        {
            return {...state, repos_by_updated: payload}
        }
        case actionTypes.GET_REPOSITORIES_BY_SEARCH_KEYWORDS:
        {
            return {...state, repos_by_search: payload}
        }
        case actionTypes.GET_REPOSITORY_ISSUES:
        {
            return {...state, issues: payload}
        }
        default:
        {
            return state
        }
    }
  }
  
  export default repositoryReducer