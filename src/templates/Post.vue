<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <time :datetime="$page.post.date">{{ $page.post.date }}</time>

    <p v-html="$page.post.content" />
  
  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      author
    }
  }
</static-query>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y") 
    content
    excerpt
    path
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    const siteUrl = this.$static.metadata.siteUrl
    const postPath = this.$page.post.path

    return {
      title: this.$page.post.title,

      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.post.excerpt
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: `${siteUrl}${postPath}`
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.post.title
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.post.excerpt
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.post.excerpt
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: this.$page.post.title
        }
      ],

      script: [
        {
          type: 'application/ld+json',
          json: {
            '@content': 'http://schema.org',
            '@type': 'BlogPosting',
            description: this.$page.post.description,
            datePublished: this.$page.post.date,
            author: {
              name: this.$static.metadata.author
            },
            headline: this.$page.post.title
          }
        }
      ]
    }
  }
}
</script>
