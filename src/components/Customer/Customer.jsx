import React from "react";
import Chart from "react-apexcharts";

const Customer = () => {
  const customersChartOptions = {
    chart: {
      type: "line",
      height: 60,
      sparkline: {
        enabled: true,
      },
    },
    series: [
      {
        name: "",
        data: [
          3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843,
        ],
      },
    ],
    xaxis: {
      type: "datetime",
      categories: [
        "Jan 01 2024",
        "Jan 02 2024",
        "Jan 03 2024",
        "Jan 04 2024",
        "Jan 05 2024",
        "Jan 06 2024",
        "Jan 07 2024",
        "Jan 08 2024",
        "Jan 09 2024",
        "Jan 10 2024",
        "Jan 11 2024",
      ],
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
  };

  return (
    <div className="col-md-4 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-baseline">
            <h6 className="card-title mb-0">New Customers</h6>
            <div className="dropdown mb-2">
              <a
                type="button"
                id="dropdownMenuButton"
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
                aria-labelledby="dropdownMenuButton"
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
          <div className="row">
            <div className="col-6 col-md-12 col-xl-5">
              <h3 className="mb-2">3,897</h3>
              <div className="d-flex align-items-baseline">
                <p className="text-success">
                  <span>+3.3%</span>
                  <i data-feather="arrow-up" className="icon-sm mb-1"></i>
                </p>
              </div>
            </div>
            <div className="col-6 col-md-12 col-xl-7">
              <Chart
                options={customersChartOptions}
                series={customersChartOptions.series}
                type="line"
                height={60}
                className="mt-md-3 mt-xl-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
