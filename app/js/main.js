// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead.className += " strong";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'pie',
            styledMode: true,
            spacingBottom: 25,
            spacingLeft: -20,
            spacingRight: -20
        }, 
        plotOptions: {
            pie: {
                innerSize: '50%'
            },
            series: {
                animation: false,
                dataLabels: {
                    crop: false,
                    distance: '-40%',
                    useHTML: true,
                    formatter: function () {
                        return  '<span class="strong">' + this.point.y + '%</span><br />' + this.point.name;
                    }
                }
            }
        },  
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        series: [{
            data: [{
                name: 'Payment<br>history',
                y: 35,
                dataLabels: {
                    className: 'payhist',
                }
              }, {
                name: 'Utilization',
                y: 30,
                dataLabels: {
                    className: 'util'
                }
              }, {
                name: 'Length of credit history',
                y: 15,
                dataLabels: {
                    className: 'chist',
                }
              }, {
                name: 'New credit',
                y: 10,
                dataLabels: {
                    className: 'newc',
                }
              }, {
                name: 'Credit mix',
                y: 10,
                dataLabels: {
                    className: 'cmix',
                }
              }]
        }]
    });
});