import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class news extends Component {
    articles= [
        // {
        // "source": {
        // "id": "bbc-news",
        // "name": "BBC News"
        // },
        // "author": "BBC News",
        // "title": "Hi sonu vishwakarma. you know how to join the office ",
        // "description": "Here, sonu vishwakarma do not know how to join office. who can remmeber him to join the office ",
        // "url": "http://www.bbc.co.uk/news/uk-politics-63110541",
        // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4725/production/_126931281_shapps.jpg",
        // "publishedAt": "2022-10-03T05:22:26.5165603Z",
        // "content": "By Chris MasonPolitical editor, BBC News\r\nMedia caption, Watch Grant Shapps: \"Let's not muddy the water with... tax cuts for wealthy people right now\"\r\nLiz Truss would lose a Commons vote on cutting … [+3745 chars]"
        // },
        // {
        // "source": {
        // "id": "bbc-news",
        // "name": "BBC News"
        // },
        // "author": "BBC News",
        // "title": "Drax: UK power station owner cuts down primary forests in Canada",
        // "description": "The owner of the UK's biggest power station, Drax, is cutting down key forests in Canada.",
        // "url": "http://www.bbc.co.uk/news/science-environment-63089348",
        // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13DA1/production/_126931318_mediaitem126931317.jpg",
        // "publishedAt": "2022-10-03T05:22:23.673518Z",
        // "content": "By BBC PanoramaReporting team\r\nA company that has received billions of pounds in green energy subsidies from UK taxpayers is cutting down environmentally-important forests, a BBC Panorama investigati… [+5052 chars]"
        // },
        // {
        // "source": {
        // "id": "bbc-news",
        // "name": "BBC News"
        // },
        // "author": "BBC News",
        // "title": "Brazil election: Lula and Bolsonaro to face run-off",
        // "description": "Neither presidential candidate got more than 50% of the overall vote, meaning they will face off on 30 October.",
        // "url": "http://www.bbc.co.uk/news/world-latin-america-63112509",
        // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/672D/production/_126931462_mediaitem126931458.jpg",
        // "publishedAt": "2022-10-03T01:37:25.9227278Z",
        // "content": "The race to be the next president of Brazil will go to a run-off after neither of the leading candidates received more than 50% of the vote in the first round.\r\nWith nearly all votes counted, former … [+831 chars]"
        // },
        // {
        // "source": {
        // "id": "bbc-news",
        // "name": "BBC News"
        // },
        // "author": "BBC News",
        // "title": "Liu Jingyao and Liu Qiangdong: Chinese billionaire sexual assault case settled in US",
        // "description": "A closely-watched case where business titan Richard Liu was accused of rape was settled hours before trial.",
        // "url": "http://www.bbc.co.uk/news/world-asia-china-63070735",
        // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D6D6/production/_126889945_gettyimages-501687560.jpg",
        // "publishedAt": "2022-10-03T00:22:22.0947606Z",
        // "content": "By Tessa WongBBC News\r\nIt was meant to be one of the biggest #MeToo trials China had ever seen, set to play out on the other side of the world in the US state of Minnesota.\r\nThe defendant was a 49-ye… [+9577 chars]"
        // },
        // {
        // "source": {
        // "id": "bbc-news",
        // "name": "BBC News"
        // },
        // "author": "BBC News",
        // "title": "Iran protests: Reports of students trapped amid clashes in Tehran",
        // "description": "Reports say a large number of student protesters at Sharif university have been trapped on the campus.",
        // "url": "http://www.bbc.co.uk/news/world-middle-east-63111767",
        // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BD81/production/_126931584_e19a8cd20f06641586f08ab4bcb7692a8624d3b5.jpg",
        // "publishedAt": "2022-10-02T21:52:22.063413Z",
        // "content": "By Alys DaviesBBC News\r\nIranian police clashed with students at one of the country's most prestigious universities on Sunday, according to social and state media reports.\r\nReports say a large number … [+2039 chars]"
        // },
        // {
        // "source": {
        // "id": "bbc-news",
        // "name": "BBC News"
        // },
        // "author": "BBC News",
        // "title": "London Marathon 2022: Race attracts 42,000 participants",
        // "description": "An estimated 42,000 people took part in the 26.2-mile London Marathon as large crowds watched.",
        // "url": "http://www.bbc.co.uk/news/uk-england-london-63102270",
        // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17248/production/_126929749_capture.png",
        // "publishedAt": "2022-10-02T18:52:18.7613023Z",
        // "content": "A Spiderman, Shrek and a red postbox featuring the King's new cypher were among the fancy dress costumes donned by some of the thousands who took part in the London Marathon this year.\r\nWhether as a … [+3832 chars]"
        // },
        // {
        // "source": {
        // "id": "bbc-news",
        // "name": "BBC News"
        // },
        // "author": "BBC News",
        // "title": "After chess, cheating rows rock poker and fishing",
        // "description": "Viral videos in the US have shown a surprising card game win - and fish stuffed with weights.",
        // "url": "http://www.bbc.co.uk/news/world-us-canada-63108879",
        // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11F1F/production/_126930537_pokergetty.jpg",
        // "publishedAt": "2022-10-02T17:52:22.400964Z",
        // "content": "First it was chess - now top-level US poker and match fishing have been dogged by their own claims of cheating.\r\nA casino is investigating after one player stunned poker fans by making an audacious b… [+3646 chars]"
        // },
        // {
        // "source": {
        // "id": "bbc-news",
        // "name": "BBC News"
        // },
        // "author": "BBC News",
        // "title": "Indonesia: More than 120 dead in football stampede",
        // "description": "At least 127 died after police tear-gassed rioting supporters after a match on East Java.",
        // "url": "http://www.bbc.co.uk/news/world-asia-63105945",
        // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/18666/production/_126924999_mediaitem126924995.jpg",
        // "publishedAt": "2022-10-02T00:52:18.2614958Z",
        // "content": "By George WrightBBC News\r\nAt least 127 people have died in a stampede at an Indonesian football match after police tear-gassed rioting supporters, officials say.\r\nAround 180 were injured in a crush a… [+521 chars]"
        // },
        // {
        // "source": {
        // "id": "bbc-news",
        // "name": "BBC News"
        // },
        // "author": "BBC News",
        // "title": "US frees President Maduro's relatives in Venezuela prisoner swap",
        // "description": "Two nephews of Venezuela's first lady had been serving 18-year sentences for trafficking drugs.",
        // "url": "http://www.bbc.co.uk/news/world-latin-america-63105944",
        // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E1F2/production/_126924875_mediaitem126924871.jpg",
        // "publishedAt": "2022-10-01T23:52:16.9955037Z",
        // "content": "By George WrightBBC News\r\nVenezuela has freed seven jailed Americans in exchange for the release of two relatives of Venezuelan President Nicolas Maduro, the two countries have confirmed.\r\nThe swap i… [+1930 chars]"
        // }
       
        ]
    constructor(){
        super();
        console.log("hello i am sonu form newsitem");
        this.state = {
            articles: this.articles,
            loading: false , 
            page:1                    // for loading page

        }
        
   
       }
      async componentDidMount(){                        //is a life cycle
        // console.log("mount");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2330600c93514261a3e154566903362f&page=1"
        let data = await fetch(url);
        let parseddata = await data.json()
        console.log(parseddata);
        this.setState({articles: parseddata.articles, totalResult: parseddata.totalResult})

      }
heandlenext = async ()=>{
  console.log("next");
  if(this.state.page +1 > Math.ceil(this.state.totalResult/20)){

  }
  else{
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2330600c93514261a3e154566903362f&page=${this.state.page + 1}`;
  let data = await fetch(url);
  let parseddata = await data.json()
  console.log(parseddata);

  this.setState({
    page: this.state.page + 1,
    articles: parseddata.articles
  })
  }

}

 heandleprev = async ()=>{
  console.log("previous");
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2330600c93514261a3e154566903362f&page=${this.state.page - 1}`;
  let data = await fetch(url);
  let parseddata = await data.json()
  console.log(parseddata);
 
  this.setState({
    page: this.state.page - 1,
    articles: parseddata.articles
  })



}

  render() {
    // console.log("sdfhdf");

    return (
      <div className="container my-4">
      <h2 className="text-center">Free Today- News</h2>
      
      <div className="row">
      {this.state.articles.map((element)=>{
        return   <div className="col-md-4" key={element.url}>
         <Newsitem  title={element.title?element.title.slice(0,55):""}  description={element.description?element.description:""}  imageurl={element.urlToImage} newsurl={element.url} />
          
           </div>

      })}
       

       
         
        
      </div>

        <div class="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.heandleprev}> &larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResult/20)} type="button" class="btn btn-dark" onClick={this.heandlenext}>&rarr; Next</button>
        </div>

        
        
      </div>
    )
  }
}

export default news
