"use client"
import Feed from "@components/Feed"
import { useEffect,useState } from "react";

const Home = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null;
    }

    return (
        <main>
            <h1 className="header_text">Connect with developers around the world and showcase your coding skills - welcome to Devgram!</h1>
            <Feed />
        </main>
    )
}

export default Home