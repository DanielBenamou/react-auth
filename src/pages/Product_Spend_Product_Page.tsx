import axios from "axios";
import { useEffect, useState } from "react";
import "./Sales.css";
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

function Product_Spend_Product() {

  const [Product_Spend_Product_Product_Design, setProduct_Spend_Product_Product_Design] = useState<Product_Spend[]>([]);

  const [Product_Spend_Product_Product_Manager, setProduct_Spend_Product_Product_Manager] = useState<Product_Spend[]>([]);

  const option56 = {
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
      text: "Product Design",
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
      categories: Product_Spend_Product_Product_Design.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Product Design",
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
        data: Product_Spend_Product_Product_Design.map((item) => [item.avg_salary_pp_in_job_class]),
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

  const option57 = {
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
      text: "Product Managment",
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
      categories: Product_Spend_Product_Product_Manager.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Product Managment",
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
        data: Product_Spend_Product_Product_Manager.map((item) => [item.avg_salary_pp_in_job_class]),
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
      .get("http://localhost:8000/api/Product_Spend_Product_Product_Design")
      .then((response) => {
        setProduct_Spend_Product_Product_Design(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Product_Product_Manager")
      .then((response) => {
        setProduct_Spend_Product_Product_Manager(response.data);
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
          <HighchartsReact highcharts={Highcharts} options={option56} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option57} />
        </div>
      </div>
    </>
  );

}

export default Product_Spend_Product;