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

function Product_Spend_Marketing() {

  const [Product_Spend_Marketing_Product_Marketing_Manger, setProduct_Spend_Marketing_Product_Marketing_Manger] = useState<Product_Spend[]>([]);

  const [Product_Spend_Marketing_Field_Marketing, setProduct_Spend_Marketing_Field_Marketing] = useState<Product_Spend[]>([]);

  const [Product_Spend_Marketing_SDR_BDR_MIR, setProduct_Spend_Marketing_SDR_BDR_MIR] = useState<Product_Spend[]>([]);

  const [Product_Spend_Marketing_User_Acquisition, setProduct_Spend_Marketing_User_Acquisition] = useState<Product_Spend[]>([]);

  const option52 = {
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
      text: "Product Marketing Manger",
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
      categories: Product_Spend_Marketing_Product_Marketing_Manger.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Product Marketing Manger",
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
        data: Product_Spend_Marketing_Product_Marketing_Manger.map((item) => [item.avg_salary_pp_in_job_class]),
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

  const option53 = {
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
      text: "Field Marketing",
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
      categories: Product_Spend_Marketing_Field_Marketing.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Field Marketing",
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
        data: Product_Spend_Marketing_Field_Marketing.map((item) => [item.avg_salary_pp_in_job_class]),
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
  
  const option54 = {
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
    text: "SDR | BDR | MIR",
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
    categories: Product_Spend_Marketing_SDR_BDR_MIR.map((item) => [item.company]),
  },
  yAxis: {
    gridLineWidth: 0.4, // add this line to remove gridlines
    title: {
      text: "SDR | BDR | MIR",
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
      data: Product_Spend_Marketing_SDR_BDR_MIR.map((item) => [item.avg_salary_pp_in_job_class]),
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

const option55 = {
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
    text: "User Acquisition",
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
    categories: Product_Spend_Marketing_User_Acquisition.map((item) => [item.company]),
  },
  yAxis: {
    gridLineWidth: 0.4, // add this line to remove gridlines
    title: {
      text: "User Acquisition",
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
      data: Product_Spend_Marketing_User_Acquisition.map((item) => [item.avg_salary_pp_in_job_class]),
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
      .get("http://localhost:8000/api/Product_Spend_Marketing_Product_Marketing_Manger")
      .then((response) => {
        setProduct_Spend_Marketing_Product_Marketing_Manger(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Marketing_Field_Marketing")
      .then((response) => {
        setProduct_Spend_Marketing_Field_Marketing(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Marketing_SDR_BDR_MIR")
      .then((response) => {
        setProduct_Spend_Marketing_SDR_BDR_MIR(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Marketing_User_Acquisition")
      .then((response) => {
        setProduct_Spend_Marketing_User_Acquisition(response.data);
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
          <HighchartsReact highcharts={Highcharts} options={option52} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option53} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option54} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option55} />
        </div>
      </div>
    </>
  );

}

export default Product_Spend_Marketing;