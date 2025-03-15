document.addEventListener("DOMContentLoaded", function () {
    let postButton = document.getElementById("postButton");
    let postContent = document.getElementById("postContent");
    let postList = document.getElementById("postList");

    if (postButton) {
        postButton.addEventListener("click", function () {
            let content = postContent.value.trim();
            if (content === "") {
                alert("Post content cannot be empty!");
                return;
            }

            let newPost = document.createElement("li");
            newPost.textContent = content;
            newPost.classList.add("post-item");
            postList.appendChild(newPost);
            postContent.value = "";
        });
    }
});
