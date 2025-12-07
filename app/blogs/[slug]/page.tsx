import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Kora Creators Blog`,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back link */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Author & Date */}
          <div className="flex items-center gap-4 text-gray-400">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-white">{post.author}</p>
              <p className="text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300 prose-blockquote:border-blue-500 prose-blockquote:text-gray-400 prose-code:text-purple-400 prose-hr:border-slate-700">
            {/* Simple markdown rendering - for production, use MDX or remark */}
            <div
              dangerouslySetInnerHTML={{
                __html: simpleMarkdownToHtml(post.content),
              }}
            />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-400 bg-slate-800 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want Results Like This?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Apply for a free strategy call and see how we can help you scale.
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

// Simple markdown to HTML converter (for basic rendering)
// For production, consider using remark/rehype or MDX
function simpleMarkdownToHtml(markdown: string): string {
  return markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
    // Unordered lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Blockquotes
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Code inline
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    // Horizontal rule
    .replace(/^---$/gim, '<hr>')
    // Paragraphs (double newlines)
    .replace(/\n\n/gim, '</p><p>')
    // Wrap in paragraph
    .replace(/^(.+)$/gim, (match) => {
      if (match.startsWith('<')) return match;
      return `<p>${match}</p>`;
    });
}

