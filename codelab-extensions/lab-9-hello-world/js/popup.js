$(document).ready(function () {
    $('#test').click(function() {
        $('#overview-data').toggle();
    });
    // Chartist Line Graph
    $('#chart-data').hide();
    // Event Handler for Chart Area
    $('#show-chart').on('click', function() {
        // Draw the Chart
        new Chartist.Bar('.ct-chart', {
            labels: ['CAT 0', 'CAT 1', 'CAT 2'],
            series: [
                [20, 35, 55],
                [10, 25, 35],
                [33,22,11]
            ]
        }, {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            axisY: {
                offset: 70
            }
        });
        // Show/Hide The Chart
        $('#chart-data').toggle()
    })
});