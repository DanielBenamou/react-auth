import axios from "axios";
import { useEffect, useState } from "react";
import "./Sales.css";
import { Product_solo } from "../model/solo.entity";
import React, { Component } from "react";
import Highcharts, { chart } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Chart } from "highcharts";
import darkUnica from "highcharts/themes/dark-unica";
import sandsignika from "highcharts/themes/sand-signika";
import gridlight from "highcharts/themes/grid-light";
import brandlight from "highcharts/themes/brand-light";
import { Link } from "react-router-dom";
import NavTwo from "../components/navbar/NavTwo";

// darkUnica(Highcharts);
brandlight(Highcharts);

function Product_Solo_Sales() {
  // sales management
  const [solo, setSolo] = useState<Product_solo[]>([]);
  // accounts management
  const [solo2, setSolo2] = useState<Product_solo[]>([]);
  // Customer success management
  const [solo3, setSolo3] = useState<Product_solo[]>([]);
  // 
  const [Product_Solo_Sales_Sales_Enablement, setProduct_Solo_Sales_Sales_Enablement] = useState<Product_solo[]>([]);
  //
  const options = {
    chart: {style: {
      fontFamily: '"Montserrat", sans-serif',
    },
      type: "bar",
      width: 500,
      height: 400,
      backgroundColor: "rgba(255, 255, 255)",
      margin: [50, 10, 80, 80], // add this line to adjust margins
    },
    colors: ["rgba(217, 217, 217"],
    title: {
      align: "left",
      text: "Sales Management",
      style: {
        fontWeight: "bold",
      },
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      categories: solo.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Sales Management",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
        // borderColor: "#303030",
      },
    },

    series: [
      {
        data: solo.map((item) => [item.ratio_job_class_ouf_of_total]),
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
    },
  };
  
  const options2 = {
    chart: {style: {
      fontFamily: '"Montserrat", sans-serif',
    },
      type: "bar",
      width: 500,
      height: 400,
      backgroundColor: "rgba(255, 255, 255)",
      margin: [50, 10, 80, 80], // add this line to adjust margins
    },
    colors: ["rgba(217, 217, 217"],
    title: {
      align: "left",
      text: "Account Management",
      style: {
        fontWeight: "bold",
      },
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      categories: solo2.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Account Management",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
        // borderColor: "#303030",
      },
    },

    series: [
      {
        data: solo2.map((item) => [item.ratio_job_class_ouf_of_total]),
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
    },
  };

  const options33 = {
    chart: {style: {
      fontFamily: '"Montserrat", sans-serif',
    },
      type: "bar",
      width: 500,
      height: 400,
      backgroundColor: "rgba(255, 255, 255)",
      margin: [50, 10, 80, 80], // add this line to adjust margins
    },
    colors: ["rgba(217, 217, 217"],
    title: {
      align: "left",
      text: "Sales_Enablement",
      style: {
        fontWeight: "bold",
      },
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      categories: Product_Solo_Sales_Sales_Enablement.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Sales_Enablement",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
        borderColor: "#303030",
      },
    },

    series: [
      {
        data: Product_Solo_Sales_Sales_Enablement.map((item) => [item.ratio_job_class_ouf_of_total]),
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
    },
  };

  const options3 = {
    chart: {style: {
      fontFamily: '"Montserrat", sans-serif',
    },
      type: "bar",
      width: 500,
      height: 400,
      backgroundColor: "rgba(255, 255, 255)",
      margin: [50, 10, 80, 80], // add this line to adjust margins
    },
    colors: ["rgba(217, 217, 217"],
    title: {
      align: "left",
      text: "Customer Success",
      style: {
        fontWeight: "bold",
      },
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      categories: solo3.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Customer Success",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
        borderColor: "#303030",
      },
    },

    series: [
      {
        data: solo3.map((item) => [item.ratio_job_class_ouf_of_total]),
      },
    ],
    drilldown: {
      breadcrumbs: {
        position: {
          align: "right",
        },
      },
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sales-management")
      .then((response) => {
        setSolo(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/account-management")
      .then((response) => {
        setSolo2(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/customer-success")
      .then((response) => {
        setSolo3(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Solo_Sales_Sales_Enablement")
      .then((response) => {
        setProduct_Solo_Sales_Sales_Enablement(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  return (
    <>
      <NavTwo />
      <div className="papa">
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={options2} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={options3} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={options33} />
        </div>
      </div>
    </>
  );
}

export default Product_Solo_Sales;
