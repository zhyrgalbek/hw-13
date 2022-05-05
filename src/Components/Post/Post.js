import './Post.css';
import PostItem from './PostItem';

function Post(props){
    return <ul className="block">
            {
                props.posts.map(el=>{
                    return <PostItem key={el.id} title={el.title} url={el.thumbnailUrl} id={el.id} />
                })
            }
        </ul>
}

export default Post;