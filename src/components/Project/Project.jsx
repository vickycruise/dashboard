import React from 'react'

const Project = () => {
  return (
    <div className="col-lg-7 col-xl-8 stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-baseline mb-2">
            <h6 className="card-title mb-0">Projects</h6>
            <div className="dropdown mb-2">
              <a
                type="button"
                id="dropdownMenuButton7"
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
                aria-labelledby="dropdownMenuButton7"
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
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th className="pt-0">#</th>
                  <th className="pt-0">Project Name</th>
                  <th className="pt-0">Start Date</th>
                  <th className="pt-0">Due Date</th>
                  <th className="pt-0">Status</th>
                  <th className="pt-0">Assign</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>NobleUI jQuery</td>
                  <td>01/01/2024</td>
                  <td>26/04/2024</td>
                  <td>
                    <span className="badge bg-danger">Released</span>
                  </td>
                  <td>Leonardo Payne</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>NobleUI Angular</td>
                  <td>01/01/2024</td>
                  <td>26/04/2024</td>
                  <td>
                    <span className="badge bg-success">Review</span>
                  </td>
                  <td>Carl Henson</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>NobleUI ReactJs</td>
                  <td>01/05/2024</td>
                  <td>10/09/2024</td>
                  <td>
                    <span className="badge bg-info">Pending</span>
                  </td>
                  <td>Jensen Combs</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>NobleUI VueJs</td>
                  <td>01/01/2024</td>
                  <td>31/11/2024</td>
                  <td>
                    <span className="badge bg-warning">Work in Progress</span>
                  </td>
                  <td>Amiah Burton</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>NobleUI Laravel</td>
                  <td>01/01/2024</td>
                  <td>31/12/2024</td>
                  <td>
                    <span className="badge bg-danger">Coming soon</span>
                  </td>
                  <td>Yaretzi Mayo</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>NobleUI NodeJs</td>
                  <td>01/01/2024</td>
                  <td>31/12/2024</td>
                  <td>
                    <span className="badge bg-primary">Coming soon</span>
                  </td>
                  <td>Carl Henson</td>
                </tr>
                <tr>
                  <td className="border-bottom">3</td>
                  <td className="border-bottom">NobleUI EmberJs</td>
                  <td className="border-bottom">01/05/2024</td>
                  <td className="border-bottom">10/11/2024</td>
                  <td className="border-bottom">
                    <span className="badge bg-info">Pending</span>
                  </td>
                  <td className="border-bottom">Jensen Combs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project