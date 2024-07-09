import React,{useState,useEffect} from 'react';
import appwriteService from "../appwrite/configuration";
import {Container,PostCard} from "../Components";

function AllPosts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      appwriteService.getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .finally(()=>{
        setLoading(false);
      });
    }, []);

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold">Loading...</h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    if(posts.length > 0){
      return (
        <div className='w-full py-8'>
          <Container>
            <div className='flex flex-wrap'>
                {posts && posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
          </Container>
        </div>
        );
    }
    if(!posts.some((post)=>post.trim==="")){
      return (
        <div className='my-10 text-2xl font-bold'>
          <h1>No posts found</h1>
        </div>
      );
    }
}

export default AllPosts
