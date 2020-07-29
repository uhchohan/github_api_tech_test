import http from "./http-common";

class GithubService {
    
    getRepositoriesByTopRatings() {
        return http.get('search/repositories?q=stars:>=1+sort:stars-desc&page=1&per_page=10');
    }

    getRepositoriesByMostRecentUpdated() {
        return http.get('search/repositories?q=stars:>=1+sort:updated-desc&page=1&per_page=10');
    }

    getRepositoriesSearchBy(keyword) {
        return http.get(`search/repositories?q=${keyword}+in:name&page=1&per_page=10`);
    }

    getRepositoryIssues(user, name) {
        return http.get(`repos/${user}/${name}/issues`);
    }
}

export default new GithubService();