import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticles } from "../actions";

class ArticlesIndex extends Component {
  componentDidMount() {
    this.props.fetchArticles(1);
  }

  renderArticles() {
    return _.map(this.props.articles, article => {
      return (
        <li className="list-group-item" key={article.article_id}>
          <Link to={`/article/${article.article_id}`}>
            {article.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-right">
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
    articles: state.articles.articles
  };
}

export default connect(mapStateToProps, { fetchArticles })(ArticlesIndex);
