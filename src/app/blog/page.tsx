import styles from './styles.module.css';

type Post = {
  id: number;
  title: string;
  content: string;
};

export default async function Blog() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();
  return (
    <main className={styles.blog}>
      <h1 className="text-slate-50 text-center mb-8 text-2xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
        {posts.map((post: Post) => (
          <div key={post.id} className="bg-zinc-200 shadow-xl p-4 rounded-md">
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p className="text-sm">{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
