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

function Product_Spend_Ops() {

  const [Product_Spend_Ops_HR_Operations, setProduct_Spend_Ops_HR_Operations] = useState<Product_Spend[]>([]);

  const [Product_Spend_Ops_Operations_General, setProduct_Spend_Ops_Operations_General] = useState<Product_Spend[]>([]);

  const [Product_Spend_Ops_Product_Operations, setProduct_Spend_Ops_Product_Operations] = useState<Product_Spend[]>([]);

  const [Product_Spend_Ops_Project_managment, setProduct_Spend_Ops_Project_managment] = useState<Product_Spend[]>([]);

  const [Product_Spend_Ops_Sales_Operations, setProduct_Spend_Ops_Sales_Operations] = useState<Product_Spend[]>([]);

  const option43 = {
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
      categories: Product_Spend_Ops_HR_Operations.map((item) => [item.company]),
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
          format: "{point.y:.0f}",
        },
        // borderColor: "#303030",
      },
    },

    series: [
      {
        data: Product_Spend_Ops_HR_Operations.map((item) => [item.avg_salary_pp_in_job_class]),
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

  const option44 = {
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
      categories: Product_Spend_Ops_Operations_General.map((item) => [item.company]),
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
          format: "{point.y:.0f}",
        },
        borderColor: "#303030",
      },
    },

    series: [
      {
        data: Product_Spend_Ops_Operations_General.map((item) => [item.avg_salary_pp_in_job_class]),
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
  
  const option45 = {
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
    categories: Product_Spend_Ops_Product_Operations.map((item) => [item.company]),
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
        format: "{point.y:.0f}",
    },
      borderColor: "#303030",
    },
  },

  series: [
    {
      data: Product_Spend_Ops_Product_Operations.map((item) => [item.avg_salary_pp_in_job_class]),
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

  const option46 = {
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
    categories: Product_Spend_Ops_Project_managment.map((item) => [item.company]),
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
        format: "{point.y:.0f}",
    },
      borderColor: "#303030",
    },
  },

  series: [
    {
      data: Product_Spend_Ops_Project_managment.map((item) => [item.avg_salary_pp_in_job_class]),
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

  const option47 = {
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
    categories: Product_Spend_Ops_Sales_Operations.map((item) => [item.company]),
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
        format: "{point.y:.0f}",
    },
      borderColor: "#303030",
    },
  },

  series: [
    {
      data: Product_Spend_Ops_Sales_Operations.map((item) => [item.avg_salary_pp_in_job_class]),
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
      .get("http://localhost:8000/api/Product_Spend_Ops_HR_Operations")
      .then((response) => {
        setProduct_Spend_Ops_HR_Operations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Ops_Operations_General")
      .then((response) => {
        setProduct_Spend_Ops_Operations_General(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Ops_Product_Operations")
      .then((response) => {
        setProduct_Spend_Ops_Product_Operations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Ops_Project_managment")
      .then((response) => {
        setProduct_Spend_Ops_Project_managment(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.messagae);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product_Spend_Ops_Sales_Operations")
      .then((response) => {
        setProduct_Spend_Ops_Sales_Operations(response.data);
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
          <HighchartsReact highcharts={Highcharts} options={option43} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option44} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option45} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option46} />
        </div>
        <div className="graph">
          <HighchartsReact highcharts={Highcharts} options={option47} />
        </div>
      </div>
    </>
  );

}

export default Product_Spend_Ops;