import React from "react";

const Inbox = () => {
  return (
    <div className="col-lg-5 col-xl-4 grid-margin grid-margin-xl-0 stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-baseline mb-2">
            <h6 className="card-title mb-0">Inbox</h6>
            <div className="dropdown mb-2">
              <a
                type="button"
                id="dropdownMenuButton6"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  className="icon-lg text-secondary pb-3px"
                  data-feather="more-horizontal"
                ></i>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton6"
              >
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="eye" className="icon-sm me-2"></i>{" "}
                  <span className="">View</span>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="edit-2" className="icon-sm me-2"></i>{" "}
                  <span className="">Edit</span>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="trash" className="icon-sm me-2"></i>{" "}
                  <span className="">Delete</span>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="printer" className="icon-sm me-2"></i>{" "}
                  <span className="">Print</span>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="download" className="icon-sm me-2"></i>{" "}
                  <span className="">Download</span>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <a
              href="javascript:;"
              className="d-flex align-items-center border-bottom pb-3"
            >
              <div className="me-3">
                <img
                  src="https://via.placeholder.com/35x35"
                  className="rounded-circle w-35px"
                  alt="user"
                />
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <h6 className="text-body mb-2">Leonardo Payne</h6>
                  <p className="text-secondary fs-12px">12.30 PM</p>
                </div>
                <p className="text-secondary fs-13px">
                  Hey! there I'm available...
                </p>
              </div>
            </a>
            <a
              href="javascript:;"
              className="d-flex align-items-center border-bottom py-3"
            >
              <div className="me-3">
                <img
                  src="https://via.placeholder.com/35x35"
                  className="rounded-circle w-35px"
                  alt="user"
                />
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <h6 className="text-body mb-2">Carl Henson</h6>
                  <p className="text-secondary fs-12px">02.14 AM</p>
                </div>
                <p className="text-secondary fs-13px">
                  I've finished it! See you so..
                </p>
              </div>
            </a>
            <a
              href="javascript:;"
              className="d-flex align-items-center border-bottom py-3"
            >
              <div className="me-3">
                <img
                  src="https://via.placeholder.com/35x35"
                  className="rounded-circle w-35px"
                  alt="user"
                />
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <h6 className="text-body mb-2">Jensen Combs</h6>
                  <p className="text-secondary fs-12px">08.22 PM</p>
                </div>
                <p className="text-secondary fs-13px">
                  This template is awesome!
                </p>
              </div>
            </a>
            <a
              href="javascript:;"
              className="d-flex align-items-center border-bottom py-3"
            >
              <div className="me-3">
                <img
                  src="https://via.placeholder.com/35x35"
                  className="rounded-circle w-35px"
                  alt="user"
                />
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <h6 className="text-body mb-2">Amiah Burton</h6>
                  <p className="text-secondary fs-12px">05.49 AM</p>
                </div>
                <p className="text-secondary fs-13px">Nice to meet you</p>
              </div>
            </a>
            <a
              href="javascript:;"
              className="d-flex align-items-center border-bottom py-3"
            >
              <div className="me-3">
                <img
                  src="https://via.placeholder.com/35x35"
                  className="rounded-circle w-35px"
                  alt="user"
                />
              </div>
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <h6 className="text-body mb-2">Yaretzi Mayo</h6>
                  <p className="text-secondary fs-12px">01.19 AM</p>
                </div>
                <p className="text-secondary fs-13px">
                  Hey! there I'm available...
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
