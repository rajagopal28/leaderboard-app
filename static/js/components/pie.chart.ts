/// <reference path="./../../../typings/tsd.d.ts" />
import {Component, Input, Attribute, onChange, ElementRef, Inject, OnInit} from '@angular/core';
import * as d3 from 'd3';
declare var $:any;

@Component({
    selector: 'pie-chart',
    templateUrl: 'templates/pie-chart.html',
    stylesUrl: ['static/css/main.css']
})
export class PieChart implements OnInit {
    @Input() data:number[];
    divs:any;
    width:string;
    height:string;
    elementRef:any;
    title:string;
    color:any;

    constructor(@Inject(ElementRef) elementRef:ElementRef,
                @Attribute('width') width:string,
                @Attribute('height') height:string,
                @Attribute('title') title:string) {
        this.title = title;
        this.color = d3.scale.category20();
        this.elementRef = elementRef;
        this.width = width;
        this.height = height;
        // console.log('width=' + width + 'height=' + height);
    }

    render(newValue) {
        if (!newValue) return;

        var self = this;

        var tot = 0;
        $.each(self.data, (index, item) => {
            tot += item.value;
            item.pos = index
        });
        var chartContainer = $(this.elementRef.nativeElement).find('.chart-container');
        $(chartContainer).empty();
        var el:any = chartContainer[0];
        //console.log('rendering');
        var graph:any = d3.select(el);
        let r = (this.height / 2) - 50;
        this.divs = graph
            .append("svg:svg")
            .data([self.data])
            .attr("width", self.width)
            .attr("height", self.height)
            .append("svg:g")
            .attr("transform", "translate(" + r + "," + r + ")");

        var pie = d3.layout.pie().value(function (d) {
            return d.value;
        });

        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);

        // select paths, use arc generator to draw
        var arcs = this.divs.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
        arcs.append("svg:path")
            .attr("fill", function (d, i) {
                return self.color(i);
            })
            .attr("d", function (d) {
                // log the result of the arc generator to show how cool it is :)
                // console.log(arc(d));
                return arc(d);
            })
            .attr("data-legend", function (d) {
                return d.data.label;
            })
            .attr("data-legend-pos", function (d) {
                return d.data.pos;
            })
            .classed("slice", true);

        // add the text
        arcs.append("svg:text").attr("transform", function (d) {
            d.innerRadius = 0;
            d.outerRadius = r;
            return "translate(" + arc.centroid(d) + ")";
        }).attr("text-anchor", "middle").text(function (d, i) {
                return '' + self.data[i].value;
            }
        );
        //// add legend
        // Add a legendLabel to each arc slice...
        arcs.append("svg:text")
            .attr("transform", function (d) { //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.outerRadius = r + 50; // Set Outer Coordinate
                d.innerRadius = r + 45; // Set Inner Coordinate
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle") //center the text on it's origin
            .style("fill", "Purple")
            .style("font", "bold 12px Arial")
            .text(function (d, i) {
                return self.data[i].label;
            }); //get the label from our original data array

    }

    ngOnChanges() {
        this.render(this.data);
    }
}
