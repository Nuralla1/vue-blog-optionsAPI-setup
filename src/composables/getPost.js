import { ref } from "vue";

const getPost = () => {
  const post = ref(null);

  const loadPost = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/posts/${id}`);

      if (!res.ok) {
        throw new Error("failed to fetch post");
      }
      post.value = await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  return {
    post,
    loadPost,
  };
};

export default getPost;
