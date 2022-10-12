import WhoToFollowListItem from "./whotofollowlistitem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    let html = '<ul class=\"list-group\">' +
        '<li class="list-group-item fw-bold">Who to follow</li>';

    for (let i = 0; i < who.length; i++) {
        html += `${WhoToFollowListItem(who[i])}`
    }

    html += '</ul>';

    return (html);
}

export default WhoToFollowList;