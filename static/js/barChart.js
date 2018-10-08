/*

var data, txt, svg, x, y, bins, bar;
var formatCount = d3.format(",.0f");

d3.json("/load_data", function (error, json_data) {

  if(!error){
     data = json_data['users'];
     map = data.map(function(d,i){ return parseFloat(d.age); })
     createVis()
  }

  else{
    console.log("Data not loaded!!!")
  }

});

function createVis(){
   
    // visualize the total number of users
    // use txt variable defined above
   
    txt = d3.select("#total_users_text")
      .append("text");

    // Part 1  

    // ------ YOUR CODE GOES HERE -------- 

    // into .text attribute pass the lenghts of the data

    txt  
      .style("text-anchor", "start")
      .style("font-size", "30px")
      .style("font-style", "italic")
      .attr("fill", "#888")
      .attr("y", 440)
      .attr("x", 10);

    svg = d3.select("#barChart")
        margin = {top: 0, right: 45, bottom: 45, left: 0},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g")
               .attr("transform",
                     "translate(" + margin.left + "," + margin.top + ")");

    // Part 2  

    // ------ YOUR CODE GOES HERE -------- 

    // a. Create x and y scale

    // b. Create bins and histogram

    // c. Create bars (rect)

    // d. Create bar labels

    // e. Call Axes

    // f. Create Axes label

}


*/
