/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'blog_home') {
    return '/'
  }

  if (doc.type === 'search') {
    return '/search/' + doc.uid
  }

  if (doc.type === 'post') {
    return '/blog/' + doc.uid
  }

  if (doc.type === 'falda') {
    return '/falda/' + doc.uid
  }

 
  return '/not-found'
}