import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticles } from "../actions";

class ArticlesIndex extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  renderArticles() {
    return _.map(this.props.articles, article => {
      return (
        <li className="list-group-item" key={article.articleID}>
          <Link to={`/article/${article.articleID}`}>
            {article.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/article/new">
            + Add Article
          </Link>
        </div>
        <h3>Articles</h3>
        <ul className="list-group">
          {this.renderArticles()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state);
  return {  
    articles: state.articles 
  };
}

export default connect(mapStateToProps, { fetchArticles })(ArticlesIndex);