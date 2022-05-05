import './PostItem.css';

function PostItem(props){
    return <li className="item">
        <h2 className='id'>{props.id}</h2>
        <p>{props.title}</p>
        <img src={props.url} />
    </li>
}

export default PostItem;