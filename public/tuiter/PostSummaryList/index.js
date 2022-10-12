import PostSummaryItem from "./postsummaryitem.js";
import post from "./posts.js";

const PostSummaryList = () => {
    let html = '<ul class=\"list-group\">'

    for (let i = 0; i < post.length; i++) {
        html += `${PostSummaryItem(post[i])}`
    }

    html += '</ul>'

    return(html);
}

export default PostSummaryList;