<script>
import BlogPostBtn from './BlogPostBtn.vue'

export default {
  components: {
    BlogPostBtn
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 3
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div :style="{ fontSize: postFontSize + 'em' }">
            <BlogPostBtn
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                @enlarge-text="postFontSize += 0.1"
            />
        </div>
    </div>
</template>
