/*


d3.json("/load_data", function (data) {

  data = data['users'];

    // Part 1

    // ------ YOUR CODE GOES HERE -------- 

    // Convert experience_yr, hw1_hrs and age into numerical values


  var svg = d3.select("#scatter");

      margin = {top: 20, right: 10, bottom: 50, left: 20},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  
  var radius = d3.scaleSqrt()
    .range([2,5]);


  // Part 2  

  // ------ YOUR CODE GOES HERE -------- 

  // a. Create xScale and yScale scales

  var xScale;
  var yScale;


  // b. Create axes
  var xAxis;
  var yAxis;
  

  // c. define xScale and yScale domain() 


  // this is radius domain - use it as a hint! :)
  radius.domain(d3.extent(data, function(d){
    return d.age;
  })).nice();


  // d. call xAxis

  // e. call yAxis

  // f. use variable "bubble" to store cicrles
  var bubble; 


  // ------ YOUR CODE END HERE -------- 
  

  bubble.
        attr("transform", "translate(30,15)scale(0.85)");

  g.append('text')
    .attr("transform", "rotate(-90)")
    .attr('x', -90)
    .attr('y', 15)
    .attr('class', 'label')
    .text('Hours spent on HW1');

  g.append('text')
    .attr('x', (width/2) + 60)
    .attr('y', height + 35)
    .attr('text-anchor', 'end')
    .attr('class', 'label')
    .text('Programming experience');

});

*/
