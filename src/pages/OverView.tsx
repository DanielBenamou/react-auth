import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { product_overview } from "../model/product_overview";
import  "./OverView.css";

function ColumnChart() {
  const [overview, setOverview] = useState<product_overview[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/overview")
      .then((response) => {
        setOverview(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const categories = Array.from(new Set(overview.map((item) => item.division)));
  const companies = Array.from(new Set(overview.map((item) => item.company)));

  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent"
    },
    title: {
      text: "Ratio Division Out Of Total",
      style: {
        fontFamily: "Montserrat, sans-serif"
      }
    },
    xAxis: {
      categories: categories,
      labels: {
        style: {
          fontFamily: "Montserrat, sans-serif"
        }
      }
    },
    yAxis: {
      gridLineColor: "#ebebeb",
      gridLineWidth: 1,
      lineWidth: 0,
      tickWidth: 0,
      title: {
        text: "Ratio",
        style: {
          fontFamily: "Montserrat, sans-serif"
        }
      },
      // labels: {
      //   formatter: function() {
      //     return this.axis.defaultLabelFormatter.call(this) + "%";
      //   },
      //   style: {
      //     fontFamily: "Montserrat, sans-serif"
      //   }
      // }
    },
    
    plotOptions: {
      column: {
        stacking: false,
        dataLabels: {
          enabled: true,
          format: "{y:.f}%",
          style: {
            fontFamily: 'Montserrat, sans-serif'
          }
        },
        labels: {
          style: {
            fontFamily: 'Montserrat, sans-serif'
          }
        },
      },
    },
    series: companies.map((company) => {
      const data = overview
        .filter((item) => item.company === company)
        .map((item) => item.ratio_division_out_of_total);
      return {
        name: company,
        data: data,
        colorByPoint: false,
        style: {
          fontFamily: 'Montserrat, sans-serif'
        }
      };
    }),
  };

  return (
    <div className="chart-wrapper">
      <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ className: "highcharts-container" }} />
    </div>
  );
}

export default ColumnChart;