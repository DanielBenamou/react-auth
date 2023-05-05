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

function Product_Solo_Ops() {

  const [Product_Solo_Ops_HR_Operations, setProduct_Solo_Ops_HR_Operations] = useState<Product_solo[]>([]);

  const [Product_Solo_Ops_Operations_General, setProduct_Solo_Ops_Operations_General] = useState<Product_solo[]>([]);

  const [Product_Solo_Ops_Product_Operations, setProduct_Solo_Ops_Product_Operations] = useState<Product_solo[]>([]);

  const [Product_Solo_Ops_Project_managment, setProduct_Solo_Ops_Project_managment] = useState<Product_solo[]>([]);

  const [Product_Solo_Ops_Sales_Operations, setProduct_Solo_Ops_Sales_Operations] = useState<Product_solo[]>([]);

  const option26 = {
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
      text: "HR_Operations",
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
      categories: Product_Solo_Ops_HR_Operations.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "HR_Operations",
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
        data: Product_Solo_Ops_HR_Operations.map((item) => [item.ratio_job_class_ouf_of_total]),
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

  const option27 = {
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
      text: "Operations_General",
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
      categories: Product_Solo_Ops_Operations_General.map((item) => [item.company]),
    },
    yAxis: {
      gridLineWidth: 0.4, // add this line to remove gridlines
      title: {
        text: "Operations_General",
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
        data: Product_Solo_Ops_Operations_General.map((item) => [item.ratio_job_class_ouf_of_total]),
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
  
  const option28 = {
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
    text: "Product_Operations",
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
    categories: Product_Solo_Ops_Product_Operations.map((item) => [item.company]),
  },
  yAxis: {
    gridLineWidth: 0.4, // add this line to remove gridlines
    title: {
      text: "Product_Operations",
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
      data: Product_Solo_Ops_Product_Operations.map((item) => [item.ratio_job_class_ouf_of_total]),
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

  const option29 = {
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
    text: "Project_managment",
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
    categories: Product_Solo_Ops_Project_managment.map((item) => [item.company]),
  },
  yAxis: {
    gridLineWidth: 0.4, // add this line to remove gridlines
    title: {
      text: "Project_managment",
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
      data: Product_Solo_Ops_Project_managment.map((item) => [item.ratio_job_class_ouf_of_total]),
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

  const option30 = {
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
    text: "Sales_Operations",
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
    categories: Product_Solo_Ops_Sales_Operations.map((item) => [item.company]),
  },
  yAxis: {
    gridLineWidth: 0.4, // add this line to remove gridlines
    title: {
      text: "Sales_Operations",
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
      data: Product_Solo_Ops_Sales_Operations.map((item) => [item.ratio_job_class_ouf_of_total]),
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
      .get("http://localhost:8000/api/Product_Solo_Ops_HR_Operations")
      .then((response) => {
        setProduct_Solo_Ops_HR_Operations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Solo_Ops_Operations_General")
      .then((response) => {
        setProduct_Solo_Ops_Operations_General(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Solo_Ops_Product_Operations")
      .then((response) => {
        setProduct_Solo_Ops_Product_Operations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Solo_Ops_Project_managment")
      .then((response) => {
        setProduct_Solo_Ops_Project_managment(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Solo_Ops_Sales_Operations")
      .then((response) => {
        setProduct_Solo_Ops_Sales_Operations(response.data);
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
          <HighchartsReact highcharts={Highcharts} options={option26} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option27} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option28} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option29} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option30} />
        </div>
      </div>
    </>
  );

}

export default Product_Solo_Ops;