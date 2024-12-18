import React from "react";
import Customer from "../../components/Customer/Customer";
import Orders from "../../components/Order/Orders";
import Growth from "../../components/Growth/Growth";
import Revenue from "../../components/Revenue/Revenue";
import Sales from "../../components/Sales/Sales";
import CloudStorage from "../../components/CloudStorage/CloudStorage";
import Inbox from "../../components/Inbox/Inbox";
import Project from "../../components/Project/Project";

const DashboardPage = () => {
  return (
    <div className="page-content">
      <div className="d-flex justify-content-between align-items-center flex-wrap grid-margin">
        <div>
          <h4 className="mb-3 mb-md-0">Welcome to Dashboard</h4>
        </div>
        <div className="d-flex align-items-center flex-wrap text-nowrap">
          <div
            className="input-group flatpickr w-200px me-2 mb-2 mb-md-0"
            id="dashboardDate"
          >
            <span
              className="input-group-text input-group-addon bg-transparent border-primary"
              data-toggle
            >
              <i data-feather="calendar" className="text-primary"></i>
            </span>
            <input
              type="text"
              className="form-control bg-transparent border-primary"
              placeholder="Select date"
              data-input
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-icon-text me-2 mb-2 mb-md-0"
          >
            <i className="btn-icon-prepend" data-feather="printer"></i>
            Print
          </button>
          <button
            type="button"
            className="btn btn-primary btn-icon-text mb-2 mb-md-0"
          >
            <i className="btn-icon-prepend" data-feather="download-cloud"></i>
            Download Report
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-xl-12 stretch-card">
          <div className="row flex-grow-1">
            <Customer />
            <Orders />
            <Growth />
          </div>
        </div>
      </div>

      <div className="row">
        <Revenue />
      </div>

      <div className="row">
        <Sales />
        <CloudStorage />
      </div>

      <div className="row">
        <Inbox />
        <Project />
      </div>
    </div>
  );
};

export default DashboardPage;
