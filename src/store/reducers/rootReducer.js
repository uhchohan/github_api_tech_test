import { combineReducers } from 'redux';
import repositoryReducer from './repositoryReducer';

const rootReducer = combineReducers({
    repositories: repositoryReducer
});

export default rootReducer;