import { useSelector } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, selectPostIds } from "./postSlice";
 import PostsExcerpt from "./PostExcerpt";

const PostsList = () => {
 
    // const posts = useSelector(selectAllPosts);
    const orderedPostIds=useSelector(selectPostIds)
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

   

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
         content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}
export default PostsList