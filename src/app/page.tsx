'use client';

import { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
};

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('/api/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  const handleAddPost = async () => {
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) {
        throw new Error('Failed to add post');
      }

      const newPost: Post = await res.json();
      setPosts((prev) => [...prev, newPost]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Simple Fullstack App</h1>
      <div className="mb-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 mr-2" />
        <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="border p-2" />
        <button onClick={handleAddPost} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
          Add Post
        </button>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border-b py-2">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
