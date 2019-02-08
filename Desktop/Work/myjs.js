$( document ).ready(function() {

	
    $("ul a").click(function() {

        $("ul a").removeClass('current');
        $("ul #firstnav").removeClass('current');
        $(this).addClass('current');
    });

    if (window.matchMedia('(max-width: 767px)').matches) {
       $('#make-it-center').remove(); // Delete existing details
      $(this).after('<div class="parent-flex" id="mobile"><div class="flex-item"><center>HTML5</center></div><div class="flex-item"><center>CSS3</center></div><div class="flex-item"><center>BOOTSTRAP</center></div><div class="flex-item"><center>JAVASCRIPT</center></div><div class="flex-item"><center>PYTHON</center></div><div class="flex-item"><center>PHP</center></div><div class="flex-item"><center>JAVA</center></div><div class="flex-item"><center>C</center></div><div class="flex-item"><center>C++</center></div></div>'); // Add new one below
    };

    if (window.matchMedia('(min-width: 768px)').matches) {
       $('#mobile').remove(); // Delete existing details
      //$(this).after('<div id="make-it-center"><div id = "contain" style = "width: 550px; height: 400px; margin: 0 auto"></div><script type="text/javascript">function drawChart() {// Define the chart to be drawn.var data = google.visualization.arrayToDataTable([['Skill', 'Level'],['C',  9.5],['C++',  8],['HTML5', 9],['Java',  7.5],['CSS',  8],['Python', 6],['javascript', 8.5],['Mysql', 9],['Php', 8]  ]);var options = {title: 'Skills( on a scale of 10 )'};var chart = new google.visualization.BarChart(document.getElementById('contain'));chart.draw(data, options);}google.charts.setOnLoadCallback(drawChart);$(window).resize(function(){drawChart();});</script>    </div>'); 
// Instantiate and draw the chart.
 // Add new one below
     };    
});

