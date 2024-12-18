import React from "react";
import Chart from "react-apexcharts";

const Sales = () => {
  const monthlySalesChartOptions = {
    chart: {
      type: "bar",
      height: "318",
      parentHeightOffset: 0,
      foreColor: "#6c757d", // Example secondary color, replace with actual
      toolbar: {
        show: false,
      },
    },
    theme: {
      mode: "light",
    },
    tooltip: {
      theme: "light",
    },
    colors: ["#00A3E0"], // Replace 'colors.primary' with actual color code
    fill: {
      opacity: 0.9,
    },
    grid: {
      padding: {
        bottom: -4,
      },
      borderColor: "#e0e0e0", // Example grid border, replace with actual
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    series: [
      {
        name: "Sales",
        data: [152, 109, 93, 113, 126, 161, 188, 143, 102, 113, 116, 124],
      },
    ],
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2024",
        "02/01/2024",
        "03/01/2024",
        "04/01/2024",
        "05/01/2024",
        "06/01/2024",
        "07/01/2024",
        "08/01/2024",
        "09/01/2024",
        "10/01/2024",
        "11/01/2024",
        "12/01/2024",
      ],
      axisBorder: {
        color: "#e0e0e0", // Example grid border, replace with actual
      },
      axisTicks: {
        color: "#e0e0e0", // Example grid border, replace with actual
      },
    },
    yaxis: {
      title: {
        text: "Number of Sales",
        style: {
          size: 9,
          color: "#6c757d", // Example secondary color, replace with actual
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
      fontFamily: "Arial, sans-serif", // Example font, replace with actual
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "10px",
        fontFamily: "Arial, sans-serif", // Example font, replace with actual
      },
      offsetY: -27,
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 4,
        dataLabels: {
          position: "top",
          orientation: "vertical",
        },
      },
    },
  };

  return (
    <div className="col-lg-7 col-xl-8 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-baseline mb-2">
            <h6 className="card-title mb-0">Monthly Sales</h6>
            <div className="dropdown mb-2">
              <a
                type="button"
                id="dropdownMenuButton4"
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
                aria-labelledby="dropdownMenuButton4"
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
          <p className="text-secondary">
            Sales are activities related to selling or the number of goods or
            services sold in a given time period.
          </p>
          <Chart
            options={monthlySalesChartOptions}
            series={monthlySalesChartOptions.series}
            type="bar"
            height={318}
            className="mt-md-3 mt-xl-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
