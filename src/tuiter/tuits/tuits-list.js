import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";

const TuitList = () => {

    const tuitArray = useSelector(state => state.tuits)

    return (
        <ul className="list-group">
            {
                tuitArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/>
                )
            }
        </ul>
    )
};
export default TuitList;

