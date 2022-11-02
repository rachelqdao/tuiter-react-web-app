import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "./tuits-reducer";

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
        }
    }
) => {

    const dispatch = useDispatch();
    const tuitLikeHandler = () => {
        dispatch(likeTuit(tuit))
    }
    const tuitUnlikeHandler = () => {
        dispatch(unlikeTuit(tuit))
    }


    return (
        <ul className="list-inline d-flex link-secondary mt-3">
            <li className="list-inline-item flex-fill text-secondary">
                <a href="#" className="text-secondary">
                    <i className="bi bi-chat"></i> {tuit.replies}
                </a>
            </li>
            <li className="list-inline-item flex-fill">
                <a href="#" className="text-secondary">
                    <i className="bi bi-arrow-left-right"></i> {tuit.retuits}
                </a>
            </li>
            <li className="list-inline-item flex-fill">
                {!tuit.liked &&
                    <a href="#"
                       className = "text-secondary"
                       onClick = {() => {tuitLikeHandler()}}
                    >
                        <i className="bi bi-heart pe-2"></i><span className="text-secondary">{tuit.likes}</span>
                    </a>
                }
                {tuit.liked &&
                    <a href="#"
                       className = "text-secondary"
                       onClick = {() => {tuitUnlikeHandler()}}
                    >
                        <i className="bi bi-heart-fill pe-2 text-danger"></i><span className="text-danger">{tuit.likes}</span>
                    </a>
                }
            </li>
            <li className="list-inline-item flex-fill">
                <a href="#" className="text-secondary">
                    <i className="bi bi-upload pe-2"></i>
                </a>
            </li>
        </ul>
    )
}
export default TuitStats;