$(document).ready(function() {
    $("a.mobile").click(function() {
        $("sidebar").slideToggle('fast');
    });
    window.onresize = function(event) {
        if ($(window).width() > 320) {
            $("sidebar").show();
        }

    };
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        var data = new google.visualization.DataTable();
        data.addColumn('timeofday', 'Дни');
        data.addColumn('number', 'Количество просмотров');

        data.addRows([
            [{ v: [1, 0, 0], f: '1 число' }, 1],
            [{ v: [2, 0, 0], f: '2 число' }, 2],
            [{ v: [3, 0, 0], f: '3 число' }, 3],
            [{ v: [4, 0, 0], f: '4 число' }, 4],
            [{ v: [5, 0, 0], f: '5 число' }, 5],
            [{ v: [6, 0, 0], f: '6 число' }, 6],
            [{ v: [7, 0, 0], f: '7 число' }, 7],
            [{ v: [8, 0, 0], f: '8 число' }, 8],
            [{ v: [9, 0, 0], f: '9 число' }, 9],
            [{ v: [10, 0, 0], f: '10 число' }, 10],

        ]);

        var options = {
            title: 'Статистика просмотров за 10 дней',
            hAxis: {
                title: 'дни',
                format: 'd',
                viewWindow: {
                    min: [1],
                    max: [10]
                }
            },
            vAxis: {
                title: 'Количество просмотров'
            }
        };

        var chart = new google.visualization.ColumnChart(
            document.getElementById('chart_div'));

        chart.draw(data, options);
    }


});
