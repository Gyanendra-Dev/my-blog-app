import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                setError(null)
                
                const response = await appwriteService.getPosts()
                if (response && response.documents) {
                    setPosts(response.documents)
                } else {
                    setPosts([])
                }
            } catch (error) {
                console.error("Error fetching posts:", error)
                setError("Failed to load posts")
                setPosts([])
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold text-gray-600">
                            Loading posts...
                        </h1>
                    </div>
                </Container>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold text-red-600">
                            {error}
                        </h1>
                        {!authStatus && (
                            <p className="mt-4 text-gray-600">
                                Please login to view posts
                            </p>
                        )}
                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {authStatus ? "No posts found" : "Login to read posts"}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home