import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    };
  }

  async componentDidMount(){
    let url  = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1e4a17c7b26d49858adb585f8053047e";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Birdie - Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
            <NewsItem
              title={element.title?element.title.slice(0,45):""}
              description={element.description?element.description.slice(0,88):""}
              imageUrl={element.urlToImage?element.urlToImage:"https://www.newsapi.ai/landing/img/logo.png"}
              newsUrl={element.url}
            />
          </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
