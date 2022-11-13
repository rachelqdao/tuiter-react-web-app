import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "liked": true,
            "disliked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
        }
    }
) => {

    const dispatch = useDispatch();

    return (
        <ul className="list-inline mt-3 d-flex justify-content-evenly">
            <li className="list-inline-item me-5">
                <a href="#" className="text-secondary">
                    <i className="bi bi-chat"></i> {tuit.replies}
                </a>
            </li>
            <li className="list-inline-item me-5">
                <a href="#" className="text-secondary">
                    <i className="bi bi-arrow-left-right"></i> {tuit.retuits}
                </a>
            </li>
            <li className="list-inline-item me-5">
                {!tuit.liked &&
                    <a href="#"
                       className = "text-secondary"
                       onClick = {() => dispatch(updateTuitThunk({
                           ...tuit,
                           likes: tuit.likes + 1,
                           liked: true
                       }))}
                    >
                        <i className="bi bi-heart pe-2"></i><span className="text-secondary">{tuit.likes}</span>
                    </a>
                }
                {tuit.liked &&
                    <a href="#"
                       className = "text-secondary"
                       onClick = {() => dispatch(updateTuitThunk({
                           ...tuit,
                           likes: tuit.likes - 1,
                           liked: false
                       }))}
                    >
                        <i className="bi bi-heart-fill pe-2 text-danger"></i><span className="text-danger">{tuit.likes}</span>
                    </a>
                }
            </li>
            <li className="list-inline-item me-5">
                {!tuit.disliked &&
                    <a href="#"
                       className = "text-secondary"
                       onClick = {() => dispatch(updateTuitThunk({
                           ...tuit,
                           dislikes: tuit.dislikes + 1,
                           disliked: true
                       }))}
                    >
                        <i className="bi bi-hand-thumbs-down pe-2"></i><span className="text-secondary">{tuit.dislikes}</span>
                    </a>
                }
                {tuit.disliked &&
                    <a href="#"
                       className = "text-secondary"
                       onClick = {() => dispatch(updateTuitThunk({
                           ...tuit,
                           dislikes: tuit.dislikes - 1,
                           disliked: false
                       }))}
                    >
                        <i className="bi bi-hand-thumbs-down-fill pe-2 text-dark"></i><span className="text-dark">{tuit.dislikes}</span>
                    </a>
                }
            </li>
            <li className="list-inline-item me-5">
                <a href="#" className="text-secondary">
                    <i className="bi bi-upload pe-2"></i>
                </a>
            </li>
        </ul>
    )
}
export default TuitStats;