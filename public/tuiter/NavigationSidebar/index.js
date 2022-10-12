const NavigationSidebar = (active) => {
    let sidebar = `
        <div class="list-group">
            <a href="#" class="list-group-item">
               <i class="fab fa-twitter"></i>
            </a>
            
            <a href="../HomeScreen/index.html" id="home" class="list-group-item">
                <i class="fa fa-home"></i>
                <span class="d-none d-xl-inline-block">Home</span>
            </a>

            <a href="../ExploreScreen/index.html" id="explore" class="list-group-item">
                <i class="fa fa-hashtag"></i>
                <span class="d-none d-xl-inline-block">Explore</span>
            </a>

            <a href="#" id="notifications" class="list-group-item">
                <i class="fa fa-bell"></i>
                <span class="d-none d-xl-inline-block">Notifications</span>
            </a>

            <a href="#" id="messages" class="list-group-item">
                <i class="fa fa-envelope"></i>
                <span class="d-none d-xl-inline-block">Messages</span>
            </a>

            <a href="#" id="bookmarks" class="list-group-item">
                <i class="fa fa-bookmark"></i>
                <span class="d-none d-xl-inline-block">Bookmarks</span>
            </a>

            <a href="#" id="lists" class="list-group-item">
                <i class="fa fa-list"></i>
                <span class="d-none d-xl-inline-block">Lists</span>
            </a>

            <a href="#" id="profile" class="list-group-item">
                <i class="fa fa-user"></i>
                <span class="d-none d-xl-inline-block">Profile</span>
            </a>

            <a href="#" id="more" class="list-group-item">
                <i class="fa fa-ellipsis-h"></i>
                <span class="d-none d-xl-inline-block">More</span>
            </a>
        </div>
        
        <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
                Tweet
            </a>
        </div>
    `;

    let activeItem = '#' + active

    const activeSidebar = $('<div></div>').html(sidebar).find(activeItem).addClass('active').end().html();

    return (activeSidebar)
}

export default NavigationSidebar;