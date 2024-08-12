const AdminHeader = () => {
    return (
        <div>
            <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">خانه</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">تماس</a>
                    </li>
                </ul>
                {/* SEARCH FORM */}
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="جستجو" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fa fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                {/* Right navbar links */}
                <ul className="navbar-nav mr-auto">
                    {/* Messages Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa fa-comments-o" />
                            <span className="badge badge-danger navbar-badge">۳</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                            <a href="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 ml-3 img-circle" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            رضا محمدپور
                                            <span className="float-left text-sm text-danger"><i className="fa fa-star" /></span>
                                        </h3>
                                        <p className="text-sm">با من تماس بگیر لطفا...</p>
                                        <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1" /> ۴ ساعت قبل</p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle ml-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            پیمان احمدی
                                            <span className="float-left text-sm text-muted"><i className="fa fa-star" /></span>
                                        </h3>
                                        <p className="text-sm">من پیامتو دریافت کردم</p>
                                        <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1" /> ۴ ساعت قبل</p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle ml-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            سارا وکیلی
                                            <span className="float-left text-sm text-warning"><i className="fa fa-star" /></span>
                                        </h3>
                                        <p className="text-sm">پروژه اتون عالی بود مرسی واقعا</p>
                                        <p className="text-sm text-muted"><i className="fa fa-clock-o mr-1" />۴ ساعت قبل</p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item dropdown-footer">مشاهده همه پیام‌ها</a>
                        </div>
                    </li>
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell-o" />
                            <span className="badge badge-warning navbar-badge">۱۵</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                            <span className="dropdown-item dropdown-header">۱۵ نوتیفیکیشن</span>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fa fa-envelope ml-2" /> ۴ پیام جدید
                                <span className="float-left text-muted text-sm">۳ دقیقه</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fa fa-users ml-2" /> ۸ درخواست دوستی
                                <span className="float-left text-muted text-sm">۱۲ ساعت</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fa fa-file ml-2" /> ۳ گزارش جدید
                                <span className="float-left text-muted text-sm">۲ روز</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item dropdown-footer">مشاهده همه نوتیفیکیشن</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i className="fa fa-th-large" /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AdminHeader
