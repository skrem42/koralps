import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Creator Growth Tips & Strategies | Kora',
  description: 'Learn proven strategies to grow your creator business. Tips on content, monetization, marketing, and more from SA\'s leading agency.',
  keywords: 'creator tips, creator growth, content strategies, onlyfans tips',
};

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Resources
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Creator{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proven strategies, tips, and insights to help you scale your creator business.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-xl">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-amber-500/30 transition-all duration-300"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-amber-500/10 to-amber-500/5 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  
                  <div className="p-6">
                    {/* Category & Read Time */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{post.author}</span>
                      <span className="text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Ready to Scale Your Creator Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Stop reading about success. Start living it. Apply for a free strategy call.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
}
