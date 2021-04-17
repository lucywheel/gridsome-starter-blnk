<template>
  <Layout>
    <h1>Blog Posts</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
  
    <article v-for="post in $page.allPost.edges" v-bind="post.node.id">
      <h2>{{ post.node.title }}</h2>
      <time :datetime="post.node.date">{{ post.node.date }}</time>
      <p>{{ post.node.timeToRead }} minutes</p>
      <p>{{ post.node.excerpt }}</p>

      <g-link :to="post.node.path">Read More</g-link>
    </article>
  </Layout>
</template>

<page-query>
  query {
    allPost {
      totalCount
      edges {
        node {
          title
          date (format: "MMMM D, Y")
          excerpt
          timeToRead
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Posts'
  }
}
</script>
