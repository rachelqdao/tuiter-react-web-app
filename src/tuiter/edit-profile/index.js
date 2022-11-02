import React, {useState} from "react";
import "./index.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "./profile-reducer";

const EditProfileComponent = () => {

    const profile = useSelector(state => state.profile)[0]

    let [name, setName] = useState(profile.name);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website)
    let [birthday, setBirthday] = useState(profile.birthday);

    const dispatch = useDispatch();

    const saveHandler = () => {
        let updatedProfile = {
            "_id": profile._id,
            "name": name,
            "bio": bio,
            "location": location,
            "website": website,
            "birthday": birthday
        }

        dispatch(updateProfile(updatedProfile))
    }

    return (
        <div>
            <div className="my-3">
                <Link to="/tuiter/profile">
                    <span className="bi bi-x-lg"></span>
                </Link>
                <span className="fw-bold fs-5 ps-4"> Edit Profile </span>
                <Link to="/tuiter/profile">
                    <button className="btn btn-dark rounded-pill float-end"
                            onClick={() => {saveHandler()}}>
                        <span className="fw-bold px-1">Save</span>
                    </button>
                </Link>
            </div>

            <div className="position-relative mb-5">
                <img className="wd-cover" src="./../images/starship.jpg"/>
                <img className="position-absolute rounded-circle wd-avatar-nudge"
                     height={125}
                     width={125}
                     src={require("./../images/nasa.png")}/>
            </div>

            <div className="pt-5">
                <div>
                    <div className="form-floating">
                        <input type="text"
                               className="form-control"
                               id="name"
                               value={name}
                               onChange = {(event) => setName(event.target.value)}
                               />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            id="bio"
                            style={{height: 100}}
                            onChange={(event) => setBio(event.target.value)}
                            value = {bio}
                        />
                        <label htmlFor="bio">Bio</label>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                        />
                        <label htmlFor="location">Location</label>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="website"
                            value={website}
                            onChange={(event) => setWebsite(event.target.value)}
                        />
                        <label htmlFor="website">Website</label>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="form-floating">
                        <input
                            type="date"
                            className="form-control"
                            id="birthday"
                            value={birthday}
                            onChange={(event) => setBirthday(event.target.value)}
                        />
                        <label htmlFor="birthday">Birthday</label>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default EditProfileComponent