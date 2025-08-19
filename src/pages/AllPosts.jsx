import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config"

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                setError(null)
                
                const response = await appwriteService.getPosts([])
                if (response && response.documents) {
                    setPosts(response.documents)
                } else {
                    setPosts([])
                }
            } catch (error) {
                console.error("Error fetching all posts:", error)
                setError("Failed to load posts. Please check your permissions.")
                setPosts([])
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return (
            <div className='w-full py-8 text-center'>
                <Container>
                    <h2 className="text-2xl font-bold text-gray-600">Loading posts...</h2>
                </Container>
            </div>
        )
    }

    if (error) {
        return (
            <div className='w-full py-8 text-center'>
                <Container>
                    <h2 className="text-2xl font-bold text-red-600">{error}</h2>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <div className="w-full text-center py-8">
                            <h2 className="text-2xl font-bold text-gray-600">
                                No posts available
                            </h2>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts