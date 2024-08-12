import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'

const AdminLayout = ({ children }) => {
    return (
        <div>
            <AdminHeader />
            <div>
                <div>
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                    <link rel="stylesheet" href="admin-assets/css/vendor/materialdesignicons.css" />
                    <link rel="stylesheet" href="admin-assets/css/vendor/bootstrap.css" />
                    <link rel="stylesheet" href="admin-assets/css/vendor/owl.carousel.min.css" />
                    <link rel="stylesheet" href="admin-assets/css/vendor/nice-select.css" />
                    <link rel="stylesheet" href="admin-assets/css/vendor/jquery.jqZoom.css" />
                    <link rel="stylesheet" href="admin-assets/css/vendor/sweetalert2.min.css" />
                    {/* <link rel="stylesheet" href="admin-assets/css/main.css" /> */}
                    <link rel="stylesheet" href="admin-assets/css/responsive.css" />
                    <link rel="stylesheet" href="admin-assets/css/style.css" />
                    <link rel="stylesheet" href="admin-assets/plugins/font-awesome/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                    <link rel="stylesheet" href="admin-assets/dist/css/adminlte.min.css" />
                    <link rel="stylesheet" href="admin-assets/plugins/iCheck/flat/blue.css" />
                    <link rel="stylesheet" href="admin-assets/plugins/morris/morris.css" />
                    <link rel="stylesheet" href="admin-assets/plugins/jvectormap/jquery-jvectormap-1.2.2.css" />
                    <link rel="stylesheet" href="admin-assets/plugins/datepicker/datepicker3.css" />
                    <link rel="stylesheet" href="admin-assets/plugins/daterangepicker/daterangepicker-bs3.css" />
                    <link rel="stylesheet" href="admin-assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
                    <link rel="stylesheet" href="admin-assets/dist/css/bootstrap-rtl.min.css" />
                    <link rel="stylesheet" href="admin-assets/dist/css/custom-style.css" />


                    <script src="admin-assets/js/vendor/jquery-3.2.1.min.js" defer></script>
                    <script src="admin-assets/js/vendor/bootstrap.js" defer></script>
                    <script src="admin-assets/js/vendor/owl.carousel.min.js"></script>
                    <script src="admin-assets/js/vendor/jquery.countdown.js"></script>
                    <script src="admin-assets/js/vendor/jquery.nice-select.min.js"></script>
                    <script src="admin-assets/js/vendor/jquery.jqZoom.js"></script>
                    <script src="admin-assets/js/vendor/sweetalert2.all.min.js"></script>
                    <script src="admin-assets/js/main.js"></script>
                    <script src="https://cdn.ckeditor.com/4.15.0/full/ckeditor.js"></script>
                    <script src="admin-assets/plugins/jquery/jquery.min.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
                    <script src="admin-assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
                    <script src="admin-assets/plugins/morris/morris.min.js"></script>
                    <script src="admin-assets/plugins/sparkline/jquery.sparkline.min.js"></script>
                    <script src="admin-assets/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
                    <script src="admin-assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
                    <script src="admin-assets/plugins/knob/jquery.knob.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>
                    <script src="admin-assets/plugins/daterangepicker/daterangepicker.js"></script>
                    <script src="admin-assets/plugins/datepicker/bootstrap-datepicker.js"></script>
                    <script src="admin-assets/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
                    <script src="admin-assets/plugins/slimScroll/jquery.slimscroll.min.js"></script>
                    <script src="admin-assets/plugins/fastclick/fastclick.js"></script>
                    <script src="admin-assets/dist/js/adminlte.js"></script>
                    <script src="admin-assets/dist/js/pages/dashboard.js"></script>
                    <script src="admin-assets/dist/js/demo.js"></script>
                </div>
                <div className="wrapper">
                    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ minHeight: '484.033px' }}>
                        {/* Sidebar */}
                        <div className="sidebar" style={{ direction: 'ltr' }}>
                            <div style={{ direction: 'rtl' }}>
                                {/* Sidebar user panel (optional) */}
                                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                    <div className="image">
                                        <img src="main-assets/images/profile.jpg" className="img-circle elevation-2" alt="User Image" />
                                    </div>
                                    <div className="info">
                                        <a href="#" className="d-block">ساسان فرهادی</a>
                                    </div>
                                </div>
                                <nav className="mt-2">
                                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                                        <li className="nav-item has-treeview">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon fa fa-pie-chart" />
                                                <p>
                                                    چارت‌ها
                                                    <i className="right fa fa-angle-left" />
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="pages/charts/chartjs.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>نمودار ChartJS</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/charts/flot.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>نمودار Flot</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/charts/inline.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>نمودار Inline</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item has-treeview">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon fa fa-tree" />
                                                <p>
                                                    اشیای گرافیکی
                                                    <i className="fa fa-angle-left right" />
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="pages/UI/general.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>عمومی</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/UI/icons.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>آیکون‌ها</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/UI/buttons.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>دکمه‌ها</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/UI/sliders.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>اسلایدر‌ها</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li className="nav-item has-treeview">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon fa fa-edit" />
                                                <p>
                                                    فرم‌ها
                                                    <i className="fa fa-angle-left right" />
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="pages/forms/general.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>اجزا عمومی</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/forms/advanced.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>پیشرفته</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/forms/editors.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>ویشرایشگر</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item has-treeview">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon fa fa-table" />
                                                <p>
                                                    جداول
                                                    <i className="fa fa-angle-left right" />
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="pages/tables/simple.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>جداول ساده</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="pages/tables/data.html" className="nav-link">
                                                        <i className="fa fa-circle-o nav-icon" />
                                                        <p>جداول داده</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                {/* /.sidebar-menu */}
                            </div>
                        </div>
                        {/* /.sidebar */}
                    </aside>




                    {children}




                </div>
            </div>
            <AdminFooter />
        </div>
    )
}
export default AdminLayout