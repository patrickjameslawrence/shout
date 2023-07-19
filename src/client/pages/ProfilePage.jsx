import { useEffect, useState } from "react";
import Axios from 'axios';
import PostComponent from '../components/feed/PostComponent.jsx';
import Cookies from "js-cookie";

export default function ProfilePage(props) {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/v1/posts", {
            params: {
                username: Cookies.get('username')
            }
        }).then((res) => {
          const posts = res.data;
          setPosts(posts);
        })
    }, []);
    
    return (
        <div className="postsContainer">
        {posts.map((post) => {
            const { id, text, poster, timestamp } = post;
            return <PostComponent key={id} text={text} poster={poster} timestamp={timestamp} />;
        })}
        </div>
    );
}