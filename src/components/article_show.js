import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArticle, deleteArticle } from "../actions";

class ArticleShow extends Component {

  // const { divStyle, thumbnailStyle, headStyle } = styles;

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchArticle(id);
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
      return <div>Loading...</div>;
    }

    return (
    <div>
      <div className="row">
          <div className="col-md-offset-1 col-md-8">
            <Link to="/" className="text-left">Back To Index</Link>
            </div>
            <div className="col-md-offset-2 col-md-1">
            <button
              className="btn btn-danger"
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
        
        <div className="row">        
        <h6>Manufacturer: {article.manufacturer}</h6>
        </div>
        <div className="row col-md-offset-1 col-md-11">
        <img src={article.image} className="img-responsive" alt="Vehicle Image" width="auto" height="auto"/>
        </div>

        <div>
        <h6> <a href={article.url} target="_blank">Click </a> for More about it </h6>
      </div>
      </div>
    );
  }
}

function mapStateToProps({ articles }, ownProps) {
  return { article: articles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchArticle, deleteArticle })(ArticleShow);
