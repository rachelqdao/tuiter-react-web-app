import PostItem from "./postitem.js";
import post from "./posts.js"

const PostComponent = () => {
    let html = ''

    for (let i = 0; i < post.length; i++) {
        html += `${PostItem(post[i])}`
    }

    return(html);
}

export default PostComponent;