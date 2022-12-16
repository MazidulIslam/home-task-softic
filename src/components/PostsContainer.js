import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux";
import { deletePosts } from "../redux";

const PostsContainer = ({ postsData, fetchPosts,deletePosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return ( postsData.loading ? (
    
    <h2>Loading...</h2>
    
  ) : postsData.error ? (
    <h2>{postsData.error}</h2>
  ) : (
    <div>
      <h2>Posts List</h2>
      
          
      <div class="grid grid-cols-4 gap-4 d-flex p-2">
        
         
          {postsData &&
          postsData.posts &&
          postsData.posts.map((post) => 
          <div class="border-2 border-green-600 p-3">
            <h>Title: {post.title} 
            <span class="pl-2"><button class="border-2 border-rose-600 p-1"
          onClick={()=>{deletePosts(post.id)}}
          >Delete</button></span></h>
          </div>
)} 
          </div>
        
     
    </div>
  ));
};

const mapStateToProps = (state) => {
  debugger
  return {
    postsData: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePosts:(postId)=>dispatch(deletePosts(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
