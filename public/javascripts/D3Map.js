
//load json
d3.json("jsonFiles/china.geo.json", function(json) {

    svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .on('mouseover', function(data) {
            d3.select(this).attr('fill', 'rgba(189, 67, 37, 0.96)');

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
            //show titles
            svg.append("text")
                .attr("id", "text2")
                .attr("x", 65)
                .attr("y", 250)
                .attr("text-anchor", "start")
                .attr("font-family", "sans-serif")
                .attr("font-size", "12px")
                .attr("font-weight", "lighter")
                .attr("fill", "black")
                .text(data.title + "- please click here if you wanna explore more!")
            ;



        })
        .on('click', function(data){
            // d3.select(this).attr('fill', '#FFFFFF');
            var url = '/homePage';
            window.location = url;
            // ;

        })
        .on('mouseout', function(data) {
            d3.select(this).attr('fill', '#BFB7B7');
             //Remove the tooltip
            d3.select("#text1").remove();
            d3.select("#image").remove();
            d3.select("#rect").remove();
            d3.select("#text2").remove();
        })

        .attr('fill', '#BFB7B7')
        .attr('stroke', '#FFFFFF')
        .attr('stroke-width', 1.2)
    ;
});
