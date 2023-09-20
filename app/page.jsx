"use client"

import Feed from "@components/Feed";
import { useState, useEffect } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        // const res = await fetch('/api/post', { cache: 'no-cache' });
        // const data = await res.json();

        try {
            const res = await fetch('/api/post', { cache: 'no-store' });
            const data = await res.json()
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // dispatch(fetchPosts())
        fetchPosts()
    }, [])

    return (
        <main>
            <h1 className="header_text">Connect with developers around the world and showcase your coding skills - welcome to Devgram!</h1>
            <Feed data={posts}/>
        </main>
    )
}

export default Home