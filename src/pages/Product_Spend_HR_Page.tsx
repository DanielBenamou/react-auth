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


function Product_Spend_HR() {

  const [Product_Spend_HR_HRBP, setProduct_Spend_HR_HRBP] = useState<Product_Spend[]>([]);

  const [Product_Spend_HR_Talent_Acquisition, setProduct_Spend_HR_Talent_Acquisition] = useState<Product_Spend[]>([]);

  const [Product_Spend_HR_HR_General, setProduct_Spend_HR_HR_General] = useState<Product_Spend[]>([]);

  const [Product_Spend_HR_HR_Office, setProduct_Spend_HR_HR_Office] = useState<Product_Spend[]>([]);

  const option48 = {
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
      text: "HRBP",
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
      categories: Product_Spend_HR_HRBP.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "HRBP",
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
        data: Product_Spend_HR_HRBP.map((item) => [item.avg_salary_pp_in_job_class]),
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

  const option49 = {
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
      text: "Talent_Acquisition",
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
      categories: Product_Spend_HR_Talent_Acquisition.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Talent_Acquisition",
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
        data: Product_Spend_HR_Talent_Acquisition.map((item) => [item.avg_salary_pp_in_job_class]),
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
  
  const option50 = {
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
    text: "HR_General",
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
    categories: Product_Spend_HR_HR_General.map((item) => [item.company]),
  },
  yAxis: {
    gridLineWidth: 0.4, // add this line to remove gridlines
    title: {
      text: "HR_General",
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
      data: Product_Spend_HR_HR_General.map((item) => [item.avg_salary_pp_in_job_class]),
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

const option51 = {
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
    text: "HR_Office",
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
    categories: Product_Spend_HR_HR_Office.map((item) => [item.company]),
  },
  yAxis: {
    gridLineWidth: 0.4, // add this line to remove gridlines
    title: {
      text: "HR_Office",
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
      data: Product_Spend_HR_HR_Office.map((item) => [item.avg_salary_pp_in_job_class]),
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
      .get("http://localhost:8000/api/Product_Spend_HR_HRBP")
      .then((response) => {
        setProduct_Spend_HR_HRBP(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_HR_Talent_Acquisition")
      .then((response) => {
        setProduct_Spend_HR_Talent_Acquisition(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_HR_HR_General")
      .then((response) => {
        setProduct_Spend_HR_HR_General(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_HR_HR_Office")
      .then((response) => {
        setProduct_Spend_HR_HR_Office(response.data);
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
          <HighchartsReact highcharts={Highcharts} options={option48} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option49} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option50} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option51} />
        </div>
      </div>
    </>
  );

}

export default Product_Spend_HR;