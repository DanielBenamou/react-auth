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
// brandlight(Highcharts);

function Product_Solo_Marketing() {

  const [Product_Solo_Marketing_Product_Marketing_Manger, setProduct_Solo_Marketing_Product_Marketing_Manger] = useState<Product_solo[]>([]);

  const [Product_Solo_Marketing_Field_Marketing, setProduct_Solo_Marketing_Field_Marketing] = useState<Product_solo[]>([]);

  const [Product_Solo_Marketing_SDR_BDR_MIR, setProduct_Solo_Marketing_SDR_BDR_MIR] = useState<Product_solo[]>([]);

  const [Product_Solo_Marketing_User_Acquisition, setProduct_Solo_Marketing_User_Acquisition] = useState<Product_solo[]>([]);

  const option15 = {
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
      categories: Product_Solo_Marketing_Product_Marketing_Manger.map((item) => [item.company]),
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
          format: "{point.y:.1f}%",
        },
        // borderColor: "#303030",
      },
    },

    series: [
      {
        data: Product_Solo_Marketing_Product_Marketing_Manger.map((item) => [item.ratio_job_class_ouf_of_total]),
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

  const option16 = {
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
      categories: Product_Solo_Marketing_Field_Marketing.map((item) => [item.company]),
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
          format: "{point.y:.1f}%",
        },
        borderColor: "#303030",
      },
    },

    series: [
      {
        data: Product_Solo_Marketing_Field_Marketing.map((item) => [item.ratio_job_class_ouf_of_total]),
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
  
  const option17 = {
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
    categories: Product_Solo_Marketing_SDR_BDR_MIR.map((item) => [item.company]),
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
        format: "{point.y:.1f}%",
      },
      borderColor: "#303030",
    },
  },

  series: [
    {
      data: Product_Solo_Marketing_SDR_BDR_MIR.map((item) => [item.ratio_job_class_ouf_of_total]),
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

const option18 = {
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
    categories: Product_Solo_Marketing_User_Acquisition.map((item) => [item.company]),
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
        format: "{point.y:.1f}%",
      },
      borderColor: "#303030",
    },
  },

  series: [
    {
      data: Product_Solo_Marketing_User_Acquisition.map((item) => [item.ratio_job_class_ouf_of_total]),
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
      .get("http://localhost:8000/api/Product_Solo_Marketing_Product_Marketing_Manger")
      .then((response) => {
        setProduct_Solo_Marketing_Product_Marketing_Manger(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Solo_Marketing_Field_Marketing")
      .then((response) => {
        setProduct_Solo_Marketing_Field_Marketing(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Solo_Marketing_SDR_BDR_MIR")
      .then((response) => {
        setProduct_Solo_Marketing_SDR_BDR_MIR(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Solo_Marketing_User_Acquisition")
      .then((response) => {
        setProduct_Solo_Marketing_User_Acquisition(response.data);
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
          <HighchartsReact highcharts={Highcharts} options={option15} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option16} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option17} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option18} />
        </div>
      </div>
    </>
  );

}

export default Product_Solo_Marketing;