import React, { Component } from 'react'

export class newsitem extends Component {
    // constructor(){
    //  super();
    //  console.log("hello i am sonu");

    // }
  render() {
   

let {title, description, imageurl, newsurl}  = this.props;
return (
  <div className="my-3">
  <div className="card" style={{width: "18rem"}}>
<img src={!imageurl?"https://i.ytimg.com/vi/OqMiOTy0msE/hqdefault.jpg":imageurl} className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">{title}</h5>
<p className="card-text">{description}..</p>
<a href={newsurl} target="blank" className="btn btn-sm btn-dark">Read More</a>
</div>
</div>

  </div>
)
  }
}

export default newsitem
