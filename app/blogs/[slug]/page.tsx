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
    title: `${post.title} | Kora Blog`,
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
    <main className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Back link */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            {post.title}
          </h1>

          {/* Author & Date */}
          <div className="flex items-center gap-4 text-gray-400">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold">
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
      <section className="py-12 sm:py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:marker:text-amber-400 prose-blockquote:border-amber-500 prose-blockquote:text-gray-400 prose-code:text-amber-400 prose-hr:border-gray-800">
            <div
              dangerouslySetInnerHTML={{
                __html: simpleMarkdownToHtml(post.content),
              }}
            />
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-gray-400 bg-gray-900 px-3 py-1 rounded-full border border-gray-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Want Results Like This?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Apply for a free strategy call and see how we can help you scale.
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

// Simple markdown to HTML converter (for basic rendering)
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
