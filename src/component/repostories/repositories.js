import React from "react";
import { connect } from 'react-redux';
import RepositoryTable from  './repository.table'

import {  RepositorySearchText,
          getRepositoriesByTopRatings, 
          getRepositoriesByMostRecentUpdated, 
          getRepositoriesSearchBy,
          RepositorySearchReset } from '../../store/actions/repositoryAction';

class Repositories extends React.Component {
    constructor(props) {
      super(props);

      this.onClick_Search = this.onClick_Search.bind(this);
      this.onClick_Reset = this.onClick_Reset.bind(this);
      this.onClickRepository = this.onClickRepository.bind(this);
    }
    
    componentDidMount() {
      if(this.props.repositories && this.props.repositories.repos_by_stars.length === 0){
        this.props.getRepositoriesByTopRatings();
      }

      if(this.props.repositories && this.props.repositories.repos_by_updated.length === 0){
        this.props.getRepositoriesByMostRecentUpdated();
      }
    }

    onChangeHandler = (event) => {
      this.props.searchKeyword(event.target.value);
    }

    onClick_Search = (event) => {
      const keyword = this.props.repositories.search_keyword.trim();

      if(keyword.length > 0){
        this.props.getRepositoriesSearchBy(keyword);
      } else {
        this.props.getRepositorySearchReset();
      }
    }

    onClick_Reset = (event) => {
      this.props.searchKeyword('');
      this.props.getRepositorySearchReset();
    }

    onClickRepository(user, name){
      this.props.history.push(`/issues/${user}/${name}`);
    }

    render() {
      const repositories_by_stars = this.props.repositories.repos_by_stars;
      const repositories_by_updated = this.props.repositories.repos_by_updated;
      const repositories_by_search = this.props.repositories.repos_by_search;

      return (
        <div>
            <div className="row">
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Search by repository or user" name="search" 
                        onChange={this.onChangeHandler.bind(this)} value={this.props.repositories.search_keyword} 
                        style={{display: 'inline-block', width: 'calc(100% - 200px)'}}/>

                <button className="btn btn-primary" style={{transform: 'translate(2px, -3px)'}}
                  onClick={this.onClick_Search}>
                    <i className="fa fa-search"></i>
                    &nbsp;
                    Search
                </button> 
                &nbsp; 
                <button className="btn btn-danger" style={{transform: 'translate(2px, -3px)'}}
                  onClick={this.onClick_Reset}>
                    <i className="fa fa-search"></i>
                    &nbsp;
                    Reset
                </button>        
              </div>
            </div>
            
            <div id="divBySearch">
              <br/>
              <RepositoryTable repositories={repositories_by_search} title={"Repositories by search"} onClickRepository={this.onClickRepository} />
            </div>

            <div id="divByTopRanks">
              <br/>
              <RepositoryTable repositories={repositories_by_stars} title={"Repositories by top rankings"} onClickRepository={this.onClickRepository}/>
            </div>

            <div id="divByMostRecentlyUpdated">
              <br/>
              <RepositoryTable repositories={repositories_by_updated} title={"Repositories by most recently updated"} onClickRepository={this.onClickRepository}/>                        
            </div>
        </div>
      );
    }
  }

const mapStateToProps = state => ({
  repositories: state.repositories
})

const mapDispatchToProps = (dispatch) => ({
  searchKeyword: (keyword) => dispatch(RepositorySearchText(keyword)),
  getRepositoriesByTopRatings: () => dispatch(getRepositoriesByTopRatings()),
  getRepositoriesByMostRecentUpdated: () => dispatch(getRepositoriesByMostRecentUpdated()),
  getRepositoriesSearchBy: (keyword) => dispatch(getRepositoriesSearchBy(keyword)),
  getRepositorySearchReset: () => dispatch(RepositorySearchReset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);