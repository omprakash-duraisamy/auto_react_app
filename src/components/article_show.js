import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticle, deleteArticle, isLoadingShowAction } from "../actions";

class ArticleShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.isLoadingShowAction(true);
    this.props.fetchArticle(id);
    this.props.isLoadingShowAction(false);
  }

  onDeleteClick() {
    console.log(this.props);
    const { id } = this.props.match.params;

    this.props.deleteArticle(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { article } = this.props;

    if (!article) {
      const { id } = this.props.match.params;
      this.props.fetchArticle(id);
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <Link to="/" className="text-left">Back To Index</Link>
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-danger text-right"
              onClick={this.onDeleteClick.bind(this)}
            >
              Delete Post
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-offset-1 col-md-1">
            <img src={article.thumbnail_image} className="thumbnail img-responsive" />
          </div>
          <div className="col-md-10 col-md-offset-0">
            <h3>{article.title}</h3></div>
        </div>

        <div className="row col-md-offset-1 col-md-2">
          <h6>Manufacturer: {article.manufacturer}</h6>
        </div>
        <div className="row col-md-offset-1 col-md-11">
          <img src={article.image} className="img-responsive" alt={article.title} max-width= "100%" max-height="100%" />
        </div>

        <div>
          <h6> <a href={article.url} target="_blank">Click </a> for More about it </h6>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { article, isLoadingShow } = state.articles
  return { article: article[0], isLoadingShow };
}

export default connect(mapStateToProps, { fetchArticle, deleteArticle, isLoadingShowAction })(ArticleShow);
