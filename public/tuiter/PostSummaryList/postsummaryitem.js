const PostSummaryItem = (post) => {
    let html =
        '<li class="list-group-item"> ' +
        '<div class="row"> ' +
        '<div class="col-9">';

    /*Topic*/
    if (`${post.topic}` !== "undefined") {
        html += `<div class="text-secondary">${post.topic}</div>`
    }

    html += '<div>'

    /*Username*/
    if (`${post.userName}` !== "undefined") {
        html += `<span class="fw-bold">${post.userName} </span>`
    }

    html += '<i class="fa fa-check-circle"></i>'

    /*Time*/
    if (`${post.time}` !== "undefined") {
        html += `<span class="text-secondary"> - ${post.time}</span>`
    }

    html += '</div>'


    /*Title*/
    if (`${post.title}` !== "undefined") {
        html += `<div class="fw-bold">${post.title}</div>`
    }

    /*Tweets*/
    if (`${post.tweets}` !== "undefined") {
        html += `<div class="text-secondary">${post.tweets} Tweets</div>`
    }

    html += '</div>'

    /*Image*/
    if (`${post.image}` !== "undefined") {
        html += `<div class="col-3"> <img src="${post.image}" class="float-end img-thumbnail"> </div>`
    }

    html += '</div></li>'


    return(html);
}

export default PostSummaryItem;