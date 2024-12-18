import React from "react";
import Chart from "react-apexcharts";

const CloudStorage = () => {
  const storageChartOptions = {
    chart: {
      height: 260,
      type: "radialBar",
    },
    series: [67], // Represents 67% storage used
    colors: ["#00A3E0"], // Replace with actual color from your color scheme
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },
        track: {
          show: true,
          background: "#E6E6E6", // Replace with actual color from your theme
          strokeWidth: "100%",
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -11,
            show: true,
            color: "#6C757D", // Replace with actual color
            fontSize: "13px",
          },
          value: {
            color: "#6C757D", // Replace with actual color
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      opacity: 1,
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Storage Used"],
  };

  return (
    <div className="col-lg-5 col-xl-4 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-baseline">
            <h6 className="card-title mb-0">Cloud storage</h6>
            <div className="dropdown mb-2">
              <a
                type="button"
                id="dropdownMenuButton5"
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
                aria-labelledby="dropdownMenuButton5"
              >
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="eye" className="icon-sm me-2"></i> View
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="edit-2" className="icon-sm me-2"></i> Edit
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="trash" className="icon-sm me-2"></i> Delete
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="printer" className="icon-sm me-2"></i> Print
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="javascript:;"
                >
                  <i data-feather="download" className="icon-sm me-2"></i>{" "}
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* Render the radial chart */}
          <Chart
            options={storageChartOptions}
            series={storageChartOptions.series}
            type="radialBar"
            height={260}
          />

          <div className="row mb-3">
            <div className="col-6 d-flex justify-content-end">
              <div>
                <label className="d-flex align-items-center justify-content-end fs-10px text-uppercase fw-bolder">
                  Total storage{" "}
                  <span className="p-1 ms-1 rounded-circle bg-secondary"></span>
                </label>
                <h5 className="fw-bolder mb-0 text-end">8TB</h5>
              </div>
            </div>
            <div className="col-6">
              <div>
                <label className="d-flex align-items-center fs-10px text-uppercase fw-bolder">
                  <span className="p-1 me-1 rounded-circle bg-primary"></span>{" "}
                  Used storage
                </label>
                <h5 className="fw-bolder mb-0">~5TB</h5>
              </div>
            </div>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary">Upgrade storage</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudStorage;
