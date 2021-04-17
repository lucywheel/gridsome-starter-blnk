<template>
  <div>
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      author
      twitter {
        site
        creator
      }
    }
  }
</static-query>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },

  metaInfo () {
    return {
      meta: [
        {
          key: 'author',
          name: 'author',
          content: this.$static.metadata.author
        },
        {
          key: 'twitter:site',
          name: 'twitter:site',
          content: this.$static.metadata.twitter.site
        },
        {
          key: 'twitter:creator',
          name: 'twitter:creator',
          content: this.$static.metadata.twitter.creator
        }
      ]
    }
  }
}
</script>