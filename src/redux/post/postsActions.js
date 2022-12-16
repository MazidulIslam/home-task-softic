import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  DELETE_POSTS,
} from "./postsTypes";
import axios from "axios";

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const deletePosts = (postId)=>{
  // debugger
         return {
           type: DELETE_POSTS,
           payload: postId,
         };
        };

// export const deletePosts = (postId) => {
//    dispatch({
//       type: DELETE_POSTS,
//       payload: postId
//    })
// }

const commentMerged =(postData,users,comments,photos)=>{
  // debugger
  postData?.map((post)=>{
    post.allComments=[];
    post.allUsers=[];
    users?.map((user)=>{
      if(post.userId===user.id){
        user.thumbnailUrl=photos[post.userId].thumbnailUrl;
        post.allUsers.push(user);
        
      }
    })
    comments?.map((comment)=>{
      if(post.id===comment.postId){
        post.allComments.push(comment);
        
      }
    })
  })
  return postData;
}

var postData=[];
var users=[];
var comments=[];
var photos=[];

export const fetchPosts = () => {
  return (dispatch) => {
    // dispatch(fetchPostsRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/photos/")
      .then((res) => {
        photos=res.data;
        // console.log(postData)
        if(photos.length>0){
          // dispatch(fetchPostsRequest);
            axios.get('https://jsonplaceholder.typicode.com/users')
              
              // .then(res => res.json())
              .then(res => {
                debugger
                users=res.data;
                // console.log(users)
                // dispatch(fetchPostsRequest);
                  axios.get('https://jsonplaceholder.typicode.com/comments')
                    // .then(res => res.json())
                    .then(res => {
                      comments=res.data
                      // console.log(comments)
                      dispatch(fetchPostsRequest);
                          axios.get('https://jsonplaceholder.typicode.com/posts')
                            // .then(res => res.json())
                            .then(res => {
                                postData = res.data.splice(0,20);
                              
                              
                              // console.log(photos)
                              commentMerged(postData?postData:[], users, comments, photos)
                              if(postData){
                                dispatch(fetchPostsSuccess(postData));
                              }
                               
                            })
                            // .catch((err)=>{
                            //   console.log(err);
                             
                            // })
                            .catch((error) => {
                              const errorMsg = error.message;
                              dispatch(fetchPostsFailure(errorMsg));
                            });
                    })
                    // .catch((err)=>{
                    //   // console.log(err);
                    // })
                    .catch((error) => {
                      const errorMsg = error.message;
                      dispatch(fetchPostsFailure(errorMsg));
                    });
                
                
              })
              // .catch((err)=>{
              //   console.log(err);
              // }) 
            .catch((error) => {
              const errorMsg = error.message;
              dispatch(fetchPostsFailure(errorMsg));
            });
        }
        
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostsFailure(errorMsg));
      });
  };
};
