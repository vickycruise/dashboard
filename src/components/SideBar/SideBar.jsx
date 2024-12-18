import React from "react";

// import "../../assets/css/demo1/style.css";
import {
  FaBeer,
  FaCalendar,
  FaChartArea,
  FaChevronDown,
  FaDashcube,
  FaDocker,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebookMessenger,
  FaRedRiver,
  FaSign,
  FaTable,
  FaUikit,
  FaWpforms,
} from "react-icons/fa";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <a href="#" className="sidebar-brand">
          Noble UI
        </a>
        <div className="sidebar-toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="nav" id="sidebarNav">
          <li className="nav-item nav-category">Main</li>
          <li className="nav-item">
            <a href="dashboard.html" className="nav-link">
              <FaDashcube />
              <span className="link-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item nav-category">web apps</li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#emails"
              role="button"
              aria-expanded="false"
              aria-controls="emails"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaEnvelope style={{ fontSize: "20px" }} />
                  <span className="link-title ">Email</span>
                </div>
                <FaChevronDown className="ms-2" />
              </div>
            </a>
            <div className="collapse" data-bs-parent="#sidebarNav" id="emails">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/email/inbox.html" className="nav-link">
                    Inbox
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/email/read.html" className="nav-link">
                    Read
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/email/compose.html" className="nav-link">
                    Compose
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a href="pages/apps/chat.html" className="nav-link">
              <FaFacebookMessenger />
              <span className="link-title">Chat</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/apps/calendar.html" className="nav-link">
              <FaCalendar />
              <span className="link-title">Calendar</span>
            </a>
          </li>
          <li className="nav-item nav-category">Components</li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#uiComponents"
              role="button"
              aria-expanded="false"
              aria-controls="uiComponents"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaBeer />

                  <span className="link-title">UI Kit</span>
                </div>
                <FaChevronDown className="ms-2" />{" "}
              </div>
            </a>
            <div
              className="collapse"
              data-bs-parent="#sidebarNav"
              id="uiComponents"
            >
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a
                    href="pages/ui-components/accordion.html"
                    className="nav-link"
                  >
                    Accordion
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/alerts.html"
                    className="nav-link"
                  >
                    Alerts
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/badges.html"
                    className="nav-link"
                  >
                    Badges
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/breadcrumbs.html"
                    className="nav-link"
                  >
                    Breadcrumbs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/buttons.html"
                    className="nav-link"
                  >
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/button-group.html"
                    className="nav-link"
                  >
                    Button group
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/ui-components/cards.html" className="nav-link">
                    Cards
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/carousel.html"
                    className="nav-link"
                  >
                    Carousel
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/collapse.html"
                    className="nav-link"
                  >
                    Collapse
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/dropdowns.html"
                    className="nav-link"
                  >
                    Dropdowns
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/list-group.html"
                    className="nav-link"
                  >
                    List group
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/media-object.html"
                    className="nav-link"
                  >
                    Media object
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/ui-components/modal.html" className="nav-link">
                    Modal
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/ui-components/navs.html" className="nav-link">
                    Navs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/navbar.html"
                    className="nav-link"
                  >
                    Navbar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/pagination.html"
                    className="nav-link"
                  >
                    Pagination
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/popover.html"
                    className="nav-link"
                  >
                    Popovers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/progress.html"
                    className="nav-link"
                  >
                    Progress
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/scrollbar.html"
                    className="nav-link"
                  >
                    Scrollbar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/scrollspy.html"
                    className="nav-link"
                  >
                    Scrollspy
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/spinners.html"
                    className="nav-link"
                  >
                    Spinners
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/ui-components/tabs.html" className="nav-link">
                    Tabs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/ui-components/tooltips.html"
                    className="nav-link"
                  >
                    Tooltips
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#advancedUI"
              role="button"
              aria-expanded="false"
              aria-controls="advancedUI"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaUikit />
                  <span className="link-title">Advanced UI</span>
                </div>
                <FaChevronDown className="ms-2" />
              </div>
            </a>
            <div
              className="collapse"
              data-bs-parent="#sidebarNav"
              id="advancedUI"
            >
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/advanced-ui/cropper.html" className="nav-link">
                    Cropper
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/advanced-ui/owl-carousel.html"
                    className="nav-link"
                  >
                    Owl carousel
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/advanced-ui/sortablejs.html"
                    className="nav-link"
                  >
                    SortableJs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/advanced-ui/sweet-alert.html"
                    className="nav-link"
                  >
                    Sweet Alert
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#forms"
              role="button"
              aria-expanded="false"
              aria-controls="forms"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaWpforms />
                  <span className="link-title">Forms</span>
                </div>
                <FaChevronDown className="ms-2" />{" "}
              </div>
            </a>
            <div className="collapse" data-bs-parent="#sidebarNav" id="forms">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a
                    href="pages/forms/basic-elements.html"
                    className="nav-link"
                  >
                    Basic Elements
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="pages/forms/advanced-elements.html"
                    className="nav-link"
                  >
                    Advanced Elements
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/forms/editors.html" className="nav-link">
                    Editors
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/forms/wizard.html" className="nav-link">
                    Wizard
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#charts"
              role="button"
              aria-expanded="false"
              aria-controls="charts"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaChartArea />
                  <span className="link-title">Charts</span>
                </div>
                <FaChevronDown className="ms-2" />
              </div>
            </a>
            <div className="collapse" data-bs-parent="#sidebarNav" id="charts">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/charts/apex.html" className="nav-link">
                    Apex
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/chartjs.html" className="nav-link">
                    ChartJs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/flot.html" className="nav-link">
                    Flot
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/peity.html" className="nav-link">
                    Peity
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/charts/sparkline.html" className="nav-link">
                    Sparkline
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#tables"
              role="button"
              aria-expanded="false"
              aria-controls="tables"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaTable />
                  <span className="link-title">Table</span>
                </div>
                <FaChevronDown className="ms-2" />
              </div>
            </a>
            <div className="collapse" data-bs-parent="#sidebarNav" id="tables">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/tables/basic-table.html" className="nav-link">
                    Basic Tables
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/tables/data-table.html" className="nav-link">
                    Data Table
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#icons"
              role="button"
              aria-expanded="false"
              aria-controls="icons"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaTable />
                  <span className="link-title">Icons</span>
                </div>
                <FaChevronDown className="ms-2" />{" "}
              </div>
            </a>
            <div className="collapse" data-bs-parent="#sidebarNav" id="icons">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/icons/feather-icons.html" className="nav-link">
                    Feather Icons
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/icons/flag-icons.html" className="nav-link">
                    Flag Icons
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/icons/mdi-icons.html" className="nav-link">
                    Mdi Icons
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Pages</li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#general-pages"
              role="button"
              aria-expanded="false"
              aria-controls="general-pages"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaExternalLinkAlt />
                  <span className="link-title">Special pages</span>
                </div>
                <FaChevronDown className="ms-2" />{" "}
              </div>
            </a>
            <div
              className="collapse"
              data-bs-parent="#sidebarNav"
              id="general-pages"
            >
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/general/blank-page.html" className="nav-link">
                    Blank page
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/faq.html" className="nav-link">
                    Faq
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/invoice.html" className="nav-link">
                    Invoice
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/profile.html" className="nav-link">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/pricing.html" className="nav-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/timeline.html" className="nav-link">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#authPages"
              role="button"
              aria-expanded="false"
              aria-controls="authPages"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaSign />
                  <span className="link-title">Authentication</span>
                </div>
                <FaChevronDown className="ms-2" />{" "}
              </div>
            </a>
            <div
              className="collapse"
              data-bs-parent="#sidebarNav"
              id="authPages"
            >
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/auth/login.html" className="nav-link">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/auth/register.html" className="nav-link">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#errorPages"
              role="button"
              aria-expanded="false"
              aria-controls="errorPages"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaRedRiver />
                  <span className="link-title">Error</span>
                </div>
                <FaChevronDown className="ms-2" />{" "}
              </div>
            </a>
            <div
              className="collapse"
              data-bs-parent="#sidebarNav"
              id="errorPages"
            >
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/error/404.html" className="nav-link">
                    404
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/error/500.html" className="nav-link">
                    500
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Docs</li>
          <li className="nav-item">
            <a
              href="https://www.nobleui.com/html/documentation/docs.html"
              target="_blank"
              className="nav-link" rel="noreferrer"
            >
              <div className="d-flex justify-content-between w-100 align-items-center">
                <div className="d-flex align-items-center">
                  <FaDocker />
                </div>
                <span className="link-title">Documentation</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
