import React from "react";
import Chart from "react-apexcharts";

const Revenue = () => {
  const revenueChartData = [
    49.33, 48.79, 50.61, 53.31, 54.78, 53.84, 54.68, 56.74, 56.99, 56.14, 56.56,
    60.35, 58.74, 61.44, 61.11, 58.57, 54.72, 52.07, 51.09, 47.48, 48.57, 48.99,
    53.58, 50.28, 46.24, 48.61, 51.75, 51.34, 50.21, 54.65, 52.44, 53.06, 57.07,
    52.97, 48.72, 52.69, 53.59, 58.52, 55.1, 58.05, 61.35, 57.74, 60.27, 61.0,
    57.78, 56.8, 58.9, 62.45, 58.75, 58.4, 56.74, 52.76, 52.3, 50.56, 55.4,
    50.49, 52.49, 48.79, 47.46, 43.31, 38.96, 34.73, 31.03, 32.63, 36.89, 35.89,
    32.74, 33.2, 30.82, 28.64, 28.44, 27.73, 27.75, 25.96, 24.38, 21.95, 22.08,
    23.54, 27.3, 30.27, 27.25, 29.92, 25.14, 23.09, 23.79, 23.46, 27.99, 23.21,
    23.91, 19.21, 15.13, 15.08, 11.0, 9.2, 7.47, 11.64, 15.76, 13.99, 12.59,
    13.53, 15.01, 13.95, 13.23, 18.1, 20.63, 21.06, 25.37, 25.32, 20.94, 18.75,
    15.38, 14.56, 17.94, 15.96, 16.35, 14.16, 12.1, 14.84, 17.24, 17.79, 14.03,
    18.65, 18.46, 22.68, 25.08, 28.18, 28.03, 24.11, 24.28, 28.23, 26.24, 29.33,
    26.07, 23.92, 28.82, 25.14, 21.79, 23.05, 20.71, 29.72, 30.21, 32.56, 31.46,
    33.69, 30.05, 34.2, 36.93, 35.5, 34.78, 36.97,
  ];

  const revenueChartCategories = [
    "Jan 01 2024",
    "Jan 02 2024",
    "Jan 03 2024",
    "Jan 04 2024", // More categories here...
  ];

  const chartOptions = {
    chart: {
      type: "line",
      height: 350,
    },
    xaxis: {
      categories: revenueChartCategories,
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Revenue Chart",
      align: "left",
    },
  };

  const series = [
    {
      name: "Revenue",
      data: revenueChartData,
    },
  ];

  return (
    <div className="col-12 col-xl-12 grid-margin stretch-card">
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
            <h6 className="card-title mb-0">Revenue</h6>
            <div className="dropdown">
              <a
                type="button"
                id="dropdownMenuButton3"
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
                aria-labelledby="dropdownMenuButton3"
              >
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <i data-feather="eye" className="icon-sm me-2"></i>
                  <span className="">View</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <i data-feather="edit-2" className="icon-sm me-2"></i>
                  <span className="">Edit</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <i data-feather="trash" className="icon-sm me-2"></i>
                  <span className="">Delete</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <i data-feather="printer" className="icon-sm me-2"></i>
                  <span className="">Print</span>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <i data-feather="download" className="icon-sm me-2"></i>
                  <span className="">Download</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-md-7">
              <p className="text-secondary fs-13px mb-3 mb-md-0">
                Revenue is the income that a business has from its normal
                business activities, usually from the sale of goods and services
                to customers.
              </p>
            </div>
            <div className="col-md-5 d-flex justify-content-md-end">
              <div
                className="btn-group mb-3 mb-md-0"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-outline-primary">
                  Today
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary d-none d-md-block"
                >
                  Week
                </button>
                <button type="button" className="btn btn-primary">
                  Month
                </button>
                <button type="button" className="btn btn-outline-primary">
                  Year
                </button>
              </div>
            </div>
          </div>
          <Chart
            options={chartOptions}
            series={series}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
