import { useState } from 'react';

async function fetchPosts() {
  const res = await fetch('/api/posts');
  return res.json();
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Simple Fullstack App</h1>
      <button onClick={getPosts} className="bg-blue-500 text-white px-4 py-2 rounded">
        Load Posts
      </button>
      <ul className="mt-4">
        {posts.map((post: { id: number; title: string; content: string }) => (
          <li key={post.id} className="border-b py-2">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
