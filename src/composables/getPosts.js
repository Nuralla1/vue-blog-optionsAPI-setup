import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const data = await fetch("http://localhost:5000/posts");
      if (!data.ok) {
        throw new Error("data is not available");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(err.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
