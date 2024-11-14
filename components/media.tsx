'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from './navbar'
import { Footer } from './footer'

// Mock data for latest blog posts
const latestPosts = [
  { id: 1, title: 'The Future of AI', image: '/images/picture2.png', author: 'Jane Doe' },
  { id: 2, title: 'Web Development Trends', image: '/images/picture3.png', author: 'John Smith' },
  { id: 3, title: 'Mastering React Hooks', image: '/images/picture4.png', author: 'Alice Johnson' },
  { id: 4, title: 'The Art of UX Design', image: '/images/picture5.png', author: 'Bob Williams' },
  { id: 5, title: 'Cybersecurity Essentials', image: '/images/picture6.png', author: 'Eve Brown' },
  { id: 6, title: 'Machine Learning Basics', image: '/images/picture7.png', author: 'Charlie Davis' },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-8">
        {/* Main featured post */}
        <div className="relative mb-12">
          <Image
            src="/images/picture1.png"
            alt="Featured blog post"
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full"
          />
          <div className="absolute bottom-0 left-0 w-1/2 bg-white/90 p-6 m-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-2">The Evolution of Technology</h1>
            <p className="text-gray-600">By Alex Thompson</p>
            <Link href="#" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Read More
            </Link>
          </div>
        </div>

        {/* Ad section */}
        <div className="bg-gray-200 p-4 mb-12 text-center rounded-lg">
          <p className="text-lg font-bold">Advertisement</p>
          <p>Your ad could be here!</p>
        </div>

        {/* Latest blog posts */}
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <div key={post.id} className="space-y-4">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full"
              />
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600">By {post.author}</p>
            </div>
          ))}
        </div>

        {/* Bottom ad section */}
        <div className="bg-gray-200 p-4 text-center rounded-lg">
          <p className="text-lg font-bold">Advertisement</p>
          <p>Another ad opportunity!</p>
        </div>
      </div>

      <Footer />
    </>
  )
}