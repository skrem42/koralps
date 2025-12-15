// ============================================
// SEO UTILITIES
// ============================================

const BASE_URL = 'https://koracreators.net';

export interface IndexingPolicy {
  noindex: boolean;
  canonical?: string; // If different from current URL
}

/**
 * Determines the indexing policy for a given pathname.
 * Used to centralize noindex/canonical logic for all pages.
 */
export function getIndexingPolicy(pathname: string): IndexingPolicy {
  // Avatar pages (numbered + variants like /2, /2a, /2b, /2c)
  const avatarMatch = pathname.match(/^\/(\d+)([abc])?$/);
  if (avatarMatch) {
    const [, baseId, variant] = avatarMatch;
    return {
      noindex: true,
      canonical: variant ? `${BASE_URL}/${baseId}` : undefined,
    };
  }

  // Lead magnet pages (e.g., /lm-playbook, /lm-playbooka)
  const lmMatch = pathname.match(/^\/lm-([^/]+?)([abc])?$/);
  if (lmMatch) {
    const [, baseSlug, variant] = lmMatch;
    return {
      noindex: true,
      canonical: variant ? `${BASE_URL}/lm-${baseSlug}` : undefined,
    };
  }

  // Legacy avatars (avatar1southafrica, avatar2uk, etc.)
  if (pathname.startsWith('/avatar')) {
    return { noindex: true };
  }

  // All other pages are indexable
  return { noindex: false };
}

/**
 * Generate robots meta content based on indexing policy
 */
export function getRobotsContent(policy: IndexingPolicy): string {
  return policy.noindex ? 'noindex, follow' : 'index, follow';
}

/**
 * Site configuration for SEO
 */
export const seoConfig = {
  baseUrl: BASE_URL,
  siteName: 'Kora',
  defaultTitle: "Kora | South Africa's Leading Creator Management Agency",
  defaultDescription:
    "The agency behind SA's top creators. In-person content direction, brilliant organic strategy, and the fastest deployment in the game.",
};


