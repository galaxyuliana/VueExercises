<script>
import BlogPost from './BlogPost.vue'

export default {
  components: {
    BlogPost
  },
  data() {
    return {
      post: {
        id: 1,
        title: 'My Journey with Vue',
        author: {
            name: 'Yuliana'
        }
      },
    }
  }
}
</script>

<template>
    <div class="exercise">
        <BlogPost title="My journey with Vue" />
        <!-- Dynamically assign the value of a variable -->
        <BlogPost :title="post.title" />
        <!-- Dynamically assign the value of a complex expression -->
        <BlogPost :title="post.title + ' by ' + post.author.name" />
    </div>
</template>
