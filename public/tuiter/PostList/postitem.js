const PostItem = (post) => {
    let html =
        `<div class="row border-top border-start border-end border-secondary px-2 pt-3">` +
        `<div class="fixed">` +
        `<img src="${post.avatarIcon}" class="rounded-circle wd-avatar align-top">` +
        `</div>` +
        `<div class="col ms-3">` +
        `<span class="fw-bold text-white">${post.userName} </span>` +
        `<i class="fa fa-check-circle text-white"></i> @${post.handle} • ${post.time} </span>` +
        `<a href="#"><i class="fa fa-ellipsis-h text-secondary float-end"></i></a>` +
        `<p class="text-white">${post.text}</p>`

    if (`${post.image}` !== "undefined") {
        html +=
            `<div class="rounded-5 border border-secondary overflow-hidden">` +
            `<img src="${post.image}" class="border-bottom border-secondary img-fluid">`

        if ((`${post.linkTitle}` !== "undefined") &&
            (`${post.linkText}` !== "undefined") &&
            (`${post.link}` !== "undefined")) {

            html +=
                `<div class="p-3">
                <span class="text-white">${post.linkTitle}</span> <br>
                <span class="text-secondary">${post.linkText}</span> <br>
                <span class="text-secondary"><i class="fa fa-link"></i> ${post.link}</span>
                </div>`
        }
        html += `</div>`
    }

    html +=
            `<ul class="list-inline d-flex link-secondary mt-3">
                <li class="list-inline-item flex-fill">
                    <a href="#">
                        <i class="fa fa-comment pe-2"></i> ${post.replies}
                    </a>
                </li>
                <li class="list-inline-item flex-fill">
                    <a href="#">
                        <i class="fa fa-retweet pe-2"></i> ${post.retweets}
                    </a>
                </li>
                <li class="list-inline-item flex-fill">
                    <a href="#">
                        <i class="fa fa-heart pe-2"></i> ${post.likes}
                    </a>
                </li>
                <li class="list-inline-item flex-fill">
                    <a href="#">
                        <i class="fa fa-arrow-up pe-2"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>`

    return(html);
}

export default PostItem;
