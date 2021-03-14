const API = {
    COMMENTS: "https://jsonplaceholder.typicode.com/comments",
    POSTS: "https://jsonplaceholder.typicode.com/posts",
    USERS: "https://jsonplaceholder.typicode.com/users"
};

const addAccordionToComments = () => {
    const commentCounters = document.getElementsByClassName("post__commentCount");

    for (let commentCounter of commentCounters) {
        commentCounter.addEventListener("click", function () {
            const commentsContainer = this.nextElementSibling;
            const isCommentsContainerVisible = commentsContainer.style.display === "block";

            commentsContainer.style.display = isCommentsContainerVisible ? "none" : "block";
        });
    }
};

const populateComments = (commentData) => {
    const commentContainer = document.getElementsByClassName("post__commentsContainer");

    commentData.forEach((comment) => {
        commentContainer[commentContainer.length - 1].innerHTML += `
      <div class="post__comment">
        <div class="post__commenter">${comment.email}</div>
        <div class="post__commentName">${comment.name}</div>
        <div class="post__commentBody">${comment.body}</div>
      </div>
    `;
    });
};

const populateCard = (cardData) => {
    const container = document.getElementsByClassName("postsContainer");

    container[0].innerHTML += `
    <div class="post">
      <div class="post__username">${cardData.user.username}</div>
      <div class="post__title">${cardData.title}</div>
      <div class="post__body">${cardData.body}</div>
      <div class="post__comments">
      <div class="post__commentCount">Comments (${cardData.comments.length})</div>
      <div class="post__commentsContainer"></div>
      </div>
      </div>
    </div>
  `;
    populateComments(cardData.comments);
};

const setLoader = (isLoading) => {
    const loader = document.getElementsByClassName("postsContainer__loader");
    loader[0].style.display = isLoading ? "block" : "none";
};

const setError = (error) => {
    const errorPlaceholder = document.getElementsByClassName("postsContainer__error");
    errorPlaceholder[0].style.display = error ? "block" : "none";

    if (error.length) {
        errorPlaceholder[0].innerHTML = `<p>${error}</p>`;
    }
};

const fetchApiData = async (dataUrl) => {
    let results;
    setError("");
    setLoader(true);

    try {
        const data = await fetch(dataUrl);
        results = await data.json();
    } catch (e) {
        setError(e);
    }

    setLoader(false);
    return results;
};

Promise.all([fetchApiData(API.POSTS), fetchApiData(API.COMMENTS), fetchApiData(API.USERS)]).then((values) => {
    const [posts, comments, users] = values;

    posts.forEach((post) => {
        let postCardData;

        postCardData = post;
        postCardData.comments = comments.filter((comment) => comment.postId === post.id);
        [postCardData.user] = users.filter((user) => user.id === post.userId);
        populateCard(postCardData);
    });

    addAccordionToComments();
});
