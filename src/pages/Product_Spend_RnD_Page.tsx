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

function Product_Spend_RnD() {
  // DevOps
  const [Product_Spend_RnD_DevOps, setProduct_Spend_RnD_DevOps] = useState<Product_Spend[]>([]);
  // Software_Engineer
  const [Product_Spend_RnD_Software_Engineer, setProduct_Spend_RnD_Software_Engineer] = useState<Product_Spend[]>([]);
  //   FE_FS_BE_developer
  const [Product_Spend_RnD_FE_FS_BE_developer, setProduct_Spend_RnD_FE_FS_BE_developer] = useState<Product_Spend[]>([]);
  //   QA
  const [Product_Spend_RnD_QA, setProduct_Spend_RnD_QA] = useState<Product_Spend[]>([]);
  // RnD_General
  const [Product_Spend_RnD_RnD_General, setProduct_Spend_RnD_RnD_General] = useState<Product_Spend[]>([]);


  const option34 = {
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
      text: "DevOps",
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
      categories: Product_Spend_RnD_DevOps.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "DevOps",
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
        data: Product_Spend_RnD_DevOps.map((item) => [item.avg_salary_pp_in_job_class]),
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

  //   Software_Engineer
  const option35 = {
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
      text: "Software Engineer",
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
      categories: Product_Spend_RnD_Software_Engineer.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Software Engineer",
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
        data: Product_Spend_RnD_Software_Engineer.map((item) => [item.avg_salary_pp_in_job_class]),
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
  // FE_FS_BE_developer
  const option36 = {
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
      text: "FE | FS | BE | developer",
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
      categories: Product_Spend_RnD_FE_FS_BE_developer.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "FE | FS | BE | developer",
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
        data: Product_Spend_RnD_FE_FS_BE_developer.map((item) => [item.avg_salary_pp_in_job_class]),
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
  // QA
  const option37 = {
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
      text: "QA",
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
      categories: Product_Spend_RnD_QA.map((item) => [item.company]),
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
        data: Product_Spend_RnD_QA.map((item) => [item.avg_salary_pp_in_job_class]),
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
  //   RND GENERAL
  const option38 = {
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
      text: "RnD General",
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
      categories: Product_Spend_RnD_RnD_General.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "RnD General",
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
        data: Product_Spend_RnD_RnD_General.map((item) => [item.avg_salary_pp_in_job_class]),
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
      .get("http://localhost:8000/api/product_spend_devops")
      .then((response) => {
        setProduct_Spend_RnD_DevOps(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product_spend_software_engineer")
      .then((response) => {
        setProduct_Spend_RnD_Software_Engineer(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product_spend_FE_FS_BE_developer")
      .then((response) => {
        setProduct_Spend_RnD_FE_FS_BE_developer(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product_spend_QA")
      .then((response) => {
        setProduct_Spend_RnD_QA(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product_spend_RnD_General")
      .then((response) => {
        setProduct_Spend_RnD_RnD_General(response.data);
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
          <HighchartsReact highcharts={Highcharts} options={option34} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option35} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option36} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option37} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option38} />
        </div>
      </div>
    </>
  );
}

export default Product_Spend_RnD;