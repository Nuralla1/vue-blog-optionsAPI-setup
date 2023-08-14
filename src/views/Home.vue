<script>
import { ref, reactive, computed } from "vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    const showPosts = ref(true);
    const togglePosts = () => {
      showPosts.value = !showPosts.value;
    };
    // const name = ref("luigi");
    // const age = ref(14);
    // const names = ref(["naruto", "saske", "obito", "zabuza", "cunade"]);
    // const search = ref("");

    // const matchedNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value));
    // });

    // const value = reactive({ name: "katya" });

    // const handleClick = () => {
    //   name.value = "mario";
    //   age.value = 20;
    // };

    // const updateReactive = () => {
    //   value.name = "serj";
    // };

    return {
      posts,
      showPosts,
      togglePosts,
      error,
      //   name,
      //   age,
      //   handleClick,
      //   value,
      //   updateReactive,
      //   names,
      //   search,
      //   matchedNames,
    };
  },
};
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }} alsdlsadlsa</div>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <button @click="togglePosts">toggle Posts</button>
    <button @click="posts.pop()">delete post</button>
  </div>
  <!-- <div class="container">
    <div>
      <input v-model="name" />
      <div>Hi, my name is {{ name }}, I am {{ age }} years old</div>
    </div>
    <div>
      <button @click="handleClick">Change age and name</button>
      <button @click="age++">Add age</button>
    </div>
    <div>
      <h3>Reactive</h3>
      <p>This value was created by using reactive: {{ value.name }}</p>
      <button @click="updateReactive">update reactive value</button>
    </div>
    <div>
      <input v-model="search" />
      <ul v-for="name in matchedNames" :key="name">
        <li>{{ name }}</li>
      </ul>
    </div>
  </div> -->
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>
