import React from "react";

const Posts = (props) => {

    return (
       <div className="alert alert-warning mt-3 w-100 w-md-50">
       <div >
       <h3>
       {props.Post.title}
       </h3>
       <p>
       {props.Post.body}
       </p>
       </div>
       </div>
    )
}

export default Posts ;