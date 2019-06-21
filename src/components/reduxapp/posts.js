import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class Posts extends React.Component{
    render(){
        return(
            <div>
                {
                   this.props.posts ? (
                       this.props.posts.map(post=>{
                           return(
                            <div key={post.id} className="container">
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card darken-1">
                                            <div className="card-content">
                                                <Link to={'/' + post.id}><span className="card-title">{post.title}</span></Link>
                                                <p>{post.body}</p>
                                            </div>
                                            <div className="center">
                                                <button className="btn btn-grey" 
                                                onClick={()=>{
                                                    this.props.deletePost(post.id);
                                                }}>Delete Post</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           )
                       })
                   ) : (<p>No Post</p>)
                }
            </div>
        );
    }
}

const mapStatetoProps = (state, ownProps) => {
    return {
        ...state,
        posts: state.posts
    }
};

const mapDispatchtoProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch({type:'DELETE_POST', payload: id})}
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Posts);