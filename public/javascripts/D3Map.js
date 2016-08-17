
//create svg
// var width = 1000, height = 600;
//
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height);
//
// //create projection
// var projection = d3.geo.mercator().translate([width / 2, height / 2]).center([105, 38]).scale(550);
//
// //create path
// var path = d3.geo.path().projection(projection);

//load json
d3.json("jsonFiles/china.geo.json", function(json) {

    svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .on('mouseover', function(data) {
            d3.select(this).attr('fill', '#FCB094');

            //create tooltip rect
            svg.append("rect")
                .attr("id", "rect")
                .attr("x", 50)
                .attr("y", 30)
                .attr("width",300)
                .attr("height",300)
                .attr("stroke","grey")
                .attr('stroke-width', 1.5)
                .attr("fill","white")
            ;

            //show tooltip text
            svg.append("text")
                .attr("id", "text1")
                .attr("x", 205)
                .attr("y", 20)
                .attr("text-anchor", "middle")
                .attr("font-family", "sans-serif")
                .attr("font-size", "18px")
                .attr("font-weight", "bold")
                .attr("fill", "black")
                .text(data.properties.name)
            ;
            
            // show img in the rect
            svg.append("svg:image")
                .attr("id", "image")
                .attr("xlink:href", "/images/"+data.id+".png")
                .attr("x", 57)
                .attr("y", 30)
                .attr("width", 285)
                .attr("height", 200)
            ;



        })
        .on('mouseout', function(data) {
            d3.select(this).attr('fill', '#BFB7B7');
            //Remove the tooltip
            d3.select("#text1").remove();
            d3.select("#image").remove();
            d3.select("#rect").remove();
        })
        .attr('fill', '#BFB7B7')
        .attr('stroke', 'rgba(255,255,255,1)')
        .attr('stroke-width', 1.2)
    ;
});
