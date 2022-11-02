import React from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {

    const profile = useSelector(state => state.profile)[0]

    const birthday = new Date(profile.birthday.replace(/-/g, '\/'))

    return (
        <>
            <div className="my-3">
                <h5 className="my-0 fw-bold">{profile.name}</h5>
                <span className="my-0 text-secondary">6,114 Tweets</span>
            </div>

            <div className="position-relative">
                <img className="wd-cover" src={require(`./../images/${profile.bannerPicture}`)}/>
                <img className="position-absolute rounded-circle wd-avatar-nudge" height={125} width={125} src={require(`./../images/${profile.profilePicture}`)}/>
            </div>

            <div className="row py-0">
                <div>
                    <Link to="/tuiter/edit-profile">
                        <button className="rounded-pill float-end py-2 px-3 my-3 mx-2 border-1">
                            <span className="fw-bold">Edit profile</span>
                        </button>
                    </Link>
                </div>
            </div>

            <div>
                <div className="my-3">
                    <h5 className="my-0 fw-bold">{profile.name}</h5>
                    <span className="my-0 text-secondary">@jannunzi</span>
                    <p className="my-2">{profile.bio}</p>
                </div>

                <div className="text-secondary">
                    <div className="mb-2">
                        {
                            profile.location !== "" ?
                                <div className="d-inline-block pe-3"><i className="bi bi-geo-alt"> </i>{profile.location}</div> :
                                null
                        }

                        {
                            profile.website !== "" ?
                                <div className="d-inline-block pe-3"><i className="bi bi-link-45deg"> </i>{profile.website}</div> :
                                null

                        }

                        <div className="d-inline-block pe-3"><i className="bi bi-balloon"> </i>Born {birthday.toLocaleDateString('en-us', {year:"numeric", month:"long", day:"numeric"})}</div>
                        <div className="d-inline-block pe-3"><i className="bi bi-calendar"> </i>Joined April 2009</div>
                    </div>

                    <div>
                        <span className="pe-4">
                            <span className="text-black fw-bold">340</span> Following
                        </span>
                        <span className="pe-4">
                            <span className="text-black fw-bold">223</span> Followers
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
};
export default ProfileComponent;