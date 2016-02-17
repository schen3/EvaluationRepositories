(function() {

    angular.module('main', [])
        .controller('ChartCtrl', function($http) {
          //  $http.get('/api/interview_by_year')
             //  .then(function(data) {
                    var data =[1,2,3,4,5];
            //        console.log('data', data);
                    var xAxis = [2,3,4,5,6];
                    var series = [2,3,4,5];
                    data = data.sort(function(a, b) {
                        return a.year - b.year
                    })
                    console.log(data)

                    data.forEach(function(item) {
                        xAxis.push(item.year);
                        series.push(item.count);
                    })
                    $('#id_chart').highcharts({
                        chart: {
                            type: 'line'
                        },
                        xAxis: {
                            categories: xAxis,
                            title: {
                                text: 'year'
                            }
                        },
                        series: [{
                            name: 'year',
                            data: series
                        }],
                        labels:{
                            
                        }
                    });
                    // new highChart;
 //               })
        })


})();

