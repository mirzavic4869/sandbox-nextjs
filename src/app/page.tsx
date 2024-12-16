import Image from 'next/image';

export default function Home() {
  return (
    <main className="mx-auto flex flex-row items-center min-h-fit justify-center gap-20">
      <div className="flex md:flex-col">
        <h1 className="block bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight animate-gradient w-2/3">Akhirnya Bisa Bahasa Arab</h1>
        <p className="mt-4 max-w-3xl w-2/3 sm:text-xl sm:leading-relaxed">Buat kamu yang belum pernah belajar bahasa arab dari dasar, bisa mulai disini.</p>
      </div>
      <Image className="aspect-[4/3] rounded-lg object-cover object-center" src="/home.jpg" width={200} height={200} alt="gambar" />
    </main>
  );
}
