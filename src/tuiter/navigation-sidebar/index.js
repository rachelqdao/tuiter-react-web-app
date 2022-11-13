import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    console.log(paths)
    console.log(paths[2])

    return (
        <div className="list-group">

            <a className="list-group-item">
                <i className="bi bi-twitter"> </i>
                <span className="d-none d-xl-inline-block">Tuiter</span>
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house"> </i>
                <span className="d-none d-xl-inline-block">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''} 
                    ${active === undefined ? 'active':''}
                    ${active === '' ? 'active':''}
                    `}>
                <i className="bi bi-hash"> </i>
                <span className="d-none d-xl-inline-block">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-journal"> </i>
                <span className="d-none d-xl-inline-block">Labs</span>
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell"> </i>
                <span className="d-none d-xl-inline-block">Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope"> </i>
                <span className="d-none d-xl-inline-block">Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark"> </i>
                <span className="d-none d-xl-inline-block">Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-card-list"> </i>
                <span className="d-none d-xl-inline-block">Lists</span>
            </a>
            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}
                    ${active === 'edit-profile'?'active':''}
                    `}>
                <i className="bi bi-person"> </i>
                <span className="d-none d-xl-inline-block">Profile</span>
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"> </i>
                <span className="d-none d-xl-inline-block">More</span>
            </a>
        </div>
    );
};
export default NavigationSidebar;
