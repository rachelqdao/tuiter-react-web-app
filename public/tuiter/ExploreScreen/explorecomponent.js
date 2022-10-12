import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
        <div class="row d-flex align-items-center">
            <div class="col-11 position-relative d-flex">
                <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                <i class="fa fa-search position-absolute wd-search-icon"></i>
            </div>
            <div class="col-1">
                <i class="fa fa-cog fa-2x wd-color-primary mt-1"></i>
            </div>
        </div>
           
        <ul class="nav nav-tabs mt-2 mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
                
        <div class="position-relative mb-2">
            <img src="../../images/starship.jpg" class="w-100">
            <h2 class="position-absolute bottom-0 left-0 text-white m-2">SpaceX's Starship</h2>
        </div>                

        ${PostSummaryList()}
    `);
}

export default ExploreComponent;
