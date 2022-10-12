const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row align-items-center">
                <div class="col-2">
                    <img src="../../images/${who.avatarIcon}" class="rounded-circle wd-avatar"/>
                </div>
                <div class="col-6 px-1">
                    <div class="fw-bold">${who.userName} <i class="fa fa-check-circle"></i></div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-4">
                    <button class="btn btn-primary rounded-pill w-100">Follow</button>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;