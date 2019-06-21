import React from 'react';
import {connect} from 'react-redux';
class Post extends React.Component{
    componentDidMount(){
        //console.log(this.props);
    }
    render(){
        const post = this.props.posts.filter(post => post.id === parseInt(this.props.match.params.postid));

        const postList = post ? post.map((post)=>{
            return(
                <div className="center">
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </div>
            )
        }) : (<div className="center"><p>"No Post found"</p></div>);
                    
       
        return(
            <div className="center">
                {postList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ...state
    }
}

export default connect(mapStateToProps)(Post);