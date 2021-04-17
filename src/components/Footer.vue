<template>
  <div>
    <p>&#169;{{ currentYear }} {{ $static.metadata.siteName }}. All Rights Reserved.</p>

    <div>
      <a class="mr-4" :href="connect.email.link" :title="connect.email.title" target="_blank"><font-awesome :icon="['fas', 'envelope']" /></a>
      <a class="mr-4" :href="connect.twitter.link" :title="connect.twitter.title" target="_blank"><font-awesome :icon="['fab', 'twitter']" /></a>
      <a class="mr-4" :href="connect.github.link" :title="connect.github.title" target="_blank"><font-awesome :icon="['fab', 'github']" /></a>
      <a class="mr-4" :href="connect.linkedin.link" :title="connect.linkedin.title" target="_blank"><font-awesome :icon="['fab', 'linkedin']" /></a>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import connect from '~/data/connect.json'

export default {
  data () {
    return {
      connect,
      currentYear: new Date().getFullYear()
    }
  }  
}
</script>