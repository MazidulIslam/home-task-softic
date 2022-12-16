import React, { useEffect ,useState} from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux";
import { deletePosts } from "../redux";

const PostsContainer = ({ postsData, fetchPosts,deletePosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);
const [showModal, setShowModal] = useState(false);
const [modalData, setModalData]=useState([]);
const handleShowModal=(id)=>{
  debugger
setShowModal(true);
postsData.posts.map((post)=>{
  if(post.id===id){
setModalData(post);
  }
})


}
  return ( postsData.loading ? (
    
    <h2>Loading...</h2>
    
  ) : postsData.error ? (
    <h2>{postsData.error}</h2>
  ) : (
    <div>
      <h2><b>Posts</b></h2>
      
          
      <div class="grid grid-cols-1 gap-2 d-flex p-2">
        
         
          {postsData &&
          postsData.posts &&
          postsData.posts.map((post) => {
            var index=0;
          // console.log(post);
          return(
          <div class="border-2 border-green-600 p-3">
            <div>

               <button
                className="bg-pink-400 text-white active:bg-pink-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="text"
                onClick={() => {
                  debugger
                  handleShowModal(post.id)
                }}
              >
                <h class="text-lg font-semibold hover:font-bold">Title: {post.title} </h>
              </button>

            </div>
            <hr/>
            <div class="text-left pb-2">
              <p><strong>Post Description:</strong> {post.body}</p>
            </div>
            <hr/>
            <div class="bg-slate-100 pb-2">
              {post.allComments.map((comment)=>{
                index +=1;
             debugger
             return(
                <ul class="list-outside ...">
                  <li class="flex text-left">
                    <p><b>Comment {index} :</b>
                    {comment.body}</p>
                  
                  </li>
                  
                </ul>)
              })}
            </div>
            <div class="flex place-content-center">
              <h2><b>Author:</b></h2>
              <img class="w-8 pl-2" src={post.allUsers[0].thumbnailUrl}/>
              <h2 class="pl-2"><b>{post.allUsers[0].name}</b></h2>
            </div>
            <div class="pt-2">
              <button class="border-2 border-rose-600 p-1"
              onClick={()=>{deletePosts(post.id)}}
             
              >Delete This Post</button>
            </div>
            
          </div>)}
)} 
          </div>
        
     
     <>
     {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {modalData?.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                 <div class="text-left pb-2">
              <p class="p-3"><strong>Post Description:</strong> {modalData?.body}</p>
            </div>

            {/* comments */}
            <hr/>
            <div class="bg-slate-100 pb-2">
              {modalData?.allComments.map((comment)=>{
                
             debugger
             return(
                <ul class="list-outside ...">
                  <li class="flex text-left ">
                    <p class="p-1"><b>Comment :</b>
                    {comment.body}</p>
                  
                  </li>
                  
                </ul>)
              })}
            </div>
            {/* author */}
            <div class="flex place-content-center">
              <h2><b>Author:</b></h2>
              <img class="w-8 pl-2" src={modalData?.allUsers[0].thumbnailUrl}/>
              <h2 class="pl-2"><b>{modalData?.allUsers[0].name}</b></h2>
            </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={ ()=>{setShowModal(false);deletePosts(modalData.id);
                    
                    }}
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
     </>
    </div>
  )
  
  );
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
