import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "Testing Testing 123"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row p-2">

                <div className="fixed">
                    <img src={require(`./../images/${tuit.image}`)} height={48} width={48} className="rounded-circle align-top"/>
                </div>

                <div className="col">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <span className="fw-bold">
                        {tuit.userName + ' '}
                        <i className="bi bi-patch-check-fill text-primary"> </i>
                    </span>
                    <span className="text-secondary">{tuit.handle} • {tuit.time}</span>
                    <p>{tuit.tuit}</p>

                    {/*image and image link code -- can be reimplemented later
                    {`${tuit.image}` !== "undefined" ?
                        <div className="rounded-5 border overflow-hidden"> <img src={tuit.image} className="border-bottom border-secondary img-fluid"/>
                            {((`${tuit.linkTitle}` !== "undefined") &&
                                (`${tuit.linkText}` !== "undefined") &&
                                (`${tuit.link}` !== "undefined")) ?
                                <div className="p-3">
                                    <span>{tuit.linkTitle}</span><br/>
                                    <span className="text-secondary">{tuit.linkText}</span><br/>
                                    <span className="text-secondary"><i className="bi bi-link-45deg"></i> {tuit.link}</span></div>: null
                            }
                        </div>: null
                    }*/}
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;