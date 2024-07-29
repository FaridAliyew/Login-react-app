import React, { useEffect, useState } from 'react';
import img from '../man.jpg';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";
import axios from "axios";

function Post() {
    const [posts, setPosts] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/posts";

    const getPost = async () => {
        try {
            const response = await axios(url);
            setPosts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className='main-container-4' style={{display: 'none'}}>
            {posts.map((post, index) => (
                <div key={index} className='post-card'>
                    <img src={img} width={70} height={65} alt="Post" />
                    <h1 className='title'>{post.title}</h1>
                    <p className='body'>{post.body}</p>
                    <div className='icons'>
                        <AiOutlineLike className='like' />
                        <FaRegComment className='comment' />
                        <FaWhatsapp className='send' />
                        <PiShareFatBold className='share' />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Post;
