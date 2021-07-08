const createPost = (title, body, author, category) => {
  if (!title || !body || !author || !category) return;
  const shortTitle = title.length > 50 ? title.slice(48) + "..." : title;
  return { shortTitle, title, body, author, category, comments: [], points: 0 };
};

export default createPost;
