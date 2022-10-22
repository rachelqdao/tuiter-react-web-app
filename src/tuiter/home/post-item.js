import React from "react";
import "./index.css";

const PostItem = (
    {
        post = {
        "avatarIcon": "https://image.cnbcfm.com/api/v1/image/107118394-1663162493777-SpaceX-1568010239185944576-img1.jpg?v=1663168463",
        "userName": "Elon Musk",
        "handle": "elonmusk",
        "time": "23h",
        "text": "Amazing show about @Inspiration4x mission!",
        "image": "https://occ-0-300-38.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfCf8CWNH7SYaPjyY2E8MTCpUNP39NZxcYUgF2Rn9lUy1M8oacnNhGmL1X74qR7y7l8fYjsEnf5ptP2ScpS6Q9MQ-tpYolYcf0Fs.jpg?r=3d5",
        "linkTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "linkText": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "link": "netflix.com",
        "replies": "4.2K",
        "retweets": "3.5K",
        "likes": "37.5K"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row p-2">

                <div className="fixed">
                    <img src = {post.avatarIcon} height={48} width={48} className="rounded-circle align-top"/>
                </div>

                <div className="col">
                    <span className="fw-bold">
                        {post.userName + ' '}
                        <i className="bi bi-patch-check-fill text-primary"> </i>
                    </span>
                    <span className="text-secondary">@{post.handle} • {post.time}</span>
                    <a href="#"><i className="bi bi-three-dots float-end text-secondary"></i></a>
                    <p>{post.text}</p>

                    {`${post.image}` !== "undefined" ?
                        <div className="rounded-5 border overflow-hidden"> <img src={post.image} className="border-bottom border-secondary img-fluid"/>
                            {((`${post.linkTitle}` !== "undefined") &&
                                (`${post.linkText}` !== "undefined") &&
                                (`${post.link}` !== "undefined")) ?
                                <div className="p-3">
                                    <span>{post.linkTitle}</span><br/>
                                    <span className="text-secondary">{post.linkText}</span><br/>
                                    <span className="text-secondary"><i className="bi bi-link-45deg"></i> {post.link}</span></div>: null
                            }
                        </div>: null
                    }

                    <ul className="list-inline d-flex link-secondary mt-3">
                        <li className="list-inline-item flex-fill text-secondary">
                            <a href="#" className="text-secondary">
                                <i className="bi bi-chat"></i> {post.replies}
                            </a>
                        </li>
                        <li className="list-inline-item flex-fill">
                            <a href="#" className="text-secondary">
                                <i className="bi bi-arrow-left-right"></i> {post.retweets}
                            </a>
                        </li>
                        <li className="list-inline-item flex-fill">
                            <a href="#" className="text-secondary">
                                <i className="bi bi-heart pe-2"></i> {post.likes}
                            </a>
                        </li>
                        <li className="list-inline-item flex-fill">
                            <a href="#" className="text-secondary">
                                <i className="bi bi-upload pe-2"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default PostItem;