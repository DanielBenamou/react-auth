import axios from "axios";
import { useEffect, useState } from "react";
import "./Sales.css";
import { Product_solo } from "../model/solo.entity";
import { Product_Spend } from "../model/product_spend";
import React, { Component } from "react";
import Highcharts, { chart } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Chart } from "highcharts";
import darkUnica from "highcharts/themes/dark-unica";
import sandsignika from "highcharts/themes/sand-signika";
import gridlight from "highcharts/themes/grid-light";
import brandlight from "highcharts/themes/brand-light";
import { Link } from "react-router-dom";
import Product_Spend_Nav from "../components/navbar/Product_Spend_Navbar_Comp";

// darkUnica(Highcharts);
// brandlight(Highcharts);

function Product_Spend_Sales() {

  const [Product_Spend_Sales_Sales_Managment, setProduct_Spend_Sales_Sales_Managment] = useState<Product_Spend[]>([]);

  const [Product_Spend_Sales_Account_Managment, setProduct_Spend_Sales_Account_Managment] = useState<Product_Spend[]>([]);

  const [Product_Spend_Sales_Customer_Success, setProduct_Spend_Sales_Customer_Success] = useState<Product_Spend[]>([]);

  const [Product_Spend_Sales_Sales_Enabelment, setProduct_Spend_Sales_Sales_Enabelment] = useState<Product_Spend[]>([]);


  const option39 = {
    chart: {style: {
      fontFamily: '"Montserrat", sans-serif',
    },
    type: "column",
      width: 500,
      height: 400,
      backgroundColor: "rgba(255, 255, 255)",
      margin: [50, 10, 80, 80], // add this line to adjust margins
    },
    colors: ["rgba(217, 217, 217"],
    title: {
      align: "left",
      text: "Sales_Managment",
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
      categories: Product_Spend_Sales_Sales_Managment.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Sales_Managment",
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
          format: "{point.y:.0f}",
        },
        // borderColor: "#303030",
      },
    },

    series: [
      {
        data: Product_Spend_Sales_Sales_Managment.map((item) => [item.avg_salary_pp_in_job_class]),
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

  const option40 = {
      chart: {style: {
        fontFamily: '"Montserrat", sans-serif',
      },
      type: "column",
      width: 500,
      height: 400,
      backgroundColor: "rgba(255, 255, 255)",
      margin: [50, 10, 80, 80], // add this line to adjust margins
    },
    colors: ["rgba(217, 217, 217"],
    title: {
      align: "left",
      text: "Account_Managment",
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
      categories: Product_Spend_Sales_Account_Managment.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Account_Managment",
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
          format: "{point.y:.0f}",
        },
        borderColor: "#303030",
      },
    },

    series: [
      {
        data: Product_Spend_Sales_Account_Managment.map((item) => [item.avg_salary_pp_in_job_class]),
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

  const option41 = {
    chart: {style: {
        fontFamily: '"Montserrat", sans-serif',
      },
      type: "column",
      width: 500,
      height: 400,
      backgroundColor: "rgba(255, 255, 255)",
      margin: [50, 10, 80, 80], // add this line to adjust margins
    },
    colors: ["rgba(217, 217, 217"],
    title: {
      align: "left",
      text: "Customer_Success",
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
      categories: Product_Spend_Sales_Customer_Success.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Customer_Success",
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
          format: "{point.y:,.0f}",
        },
        borderColor: "#303030",
      },
    },

    series: [
      {
        data: Product_Spend_Sales_Customer_Success.map((item) => [item.avg_salary_pp_in_job_class]),
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

  const option42 = {
    chart: {style: {
      fontFamily: '"Montserrat", sans-serif',
    },
      type: "column",
      width: 500,
      height: 400,
      backgroundColor: "rgba(255, 255, 255)",
      margin: [50, 10, 80, 80], // add this line to adjust margins
    },
    colors: ["rgba(217, 217, 217"],
    title: {
      align: "left",
      text: "Sales_Enabelment",
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
      categories: Product_Spend_Sales_Sales_Enabelment.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {},
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.0f}",
        },
        borderColor: "#303030",
      },
    },

    series: [
      {
        data: Product_Spend_Sales_Sales_Enabelment.map((item) => [item.avg_salary_pp_in_job_class]),
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
      .get("http://localhost:8000/api/Product_Spend_Sales_Sales_Managment")
      .then((response) => {
        setProduct_Spend_Sales_Sales_Managment(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Sales_Account_Managment")
      .then((response) => {
        setProduct_Spend_Sales_Account_Managment(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Sales_Customer_Success")
      .then((response) => {
        setProduct_Spend_Sales_Customer_Success(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Sales_Sales_Enabelment")
      .then((response) => {
        setProduct_Spend_Sales_Sales_Enabelment(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);


  return (
    <>
      <Product_Spend_Nav />
      <div className="papa">
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option39} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option40} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option41} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option42} />
        </div>
      </div>
    </>
  );
}

export default Product_Spend_Sales;