<template>
  <div>
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>

    <nav class="nav">
      <g-link to="/">Home</g-link>
      <g-link to="/about/">About</g-link>
      <g-link to="/posts/">Blog</g-link>
    </nav>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>