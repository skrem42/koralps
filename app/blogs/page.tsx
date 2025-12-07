import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | OnlyFans Growth Tips & Strategies | Kora Creators',
  description: 'Learn proven strategies to grow your OnlyFans. Tips on content, monetization, marketing, and more from our team of experts.',
  keywords: 'onlyfans tips, onlyfans growth, creator strategies, content tips',
};

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Creator{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Resources
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
            Proven strategies, tips, and insights to help you scale your OnlyFans business.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 sm:py-24">
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
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                  
                  <div className="p-6">
                    {/* Category & Read Time */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
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
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Scale Your OnlyFans?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Stop reading about success. Start living it. Apply for a free strategy call.
          </p>
          <Link
            href="/#apply"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
          >
            Book Your Free Call →
          </Link>
        </div>
      </section>
    </main>
  );
}

