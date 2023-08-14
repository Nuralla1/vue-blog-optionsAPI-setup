<template>
  <div>{{ post?.title }}</div>
  <div>{{ post?.body }}</div>
</template>
<script>
import getPost from "../composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    const { post, loadPost } = getPost();
    loadPost(props.id);

    return { post };
  },
};
</script>
<style></style>
