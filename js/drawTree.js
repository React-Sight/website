var treeData =
  {
    name: 'Provider',
    state: null,
    children: [
      {
        name: 'BrowserRouter',
        state: null,
        children: [
          {
            name: 'Router',
            state: null,
            children: [
              {
                name: 'Switch',
                state: null,
                children: [
                  {
                    name: 'Route',
                    state: null,
                    children: [
                      {
                        name: 'App',
                        state: null,
                        children: [
                          {
                            name: 'div',
                            state: null,
                            children: [
                              {
                                name: 'Login',
                                state: null,
                                children: [
                                  {
                                    name: 'div',
                                    state: null,
                                    children: [
                                      {
                                        name: 'form',
                                        state: null,
                                        children: [
                                          {
                                            name: 'input',
                                            state: null
                                          },
                                          {
                                            name: 'input',
                                            state: null,
                                          },
                                          {
                                            name: 'button',
                                            state: null,
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
    ]
  };

document.addEventListener('DOMContentLoaded', () => {
  function update(source) {
    // Creates a curved (diagonal) path from parent to the child nodes
    const diagonal = (s, d) => {
      const path = 'M' + s.x + ',' + s.y
        + 'C' + s.x + ',' + (s.y + d.y) / 2
        + ' ' + d.x + ',' + (s.y + d.y) / 2
        + ' ' + d.x + ',' + d.y
      return path
    }

    // Toggle children on click.
    const click = d => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      d3.selectAll("text").attr("class", "text");
      update(d);
    }

    console.log('Updating Tree with current source...', source)

    // treemap = d3.tree()
    //   .nodeSize([hSlider * 5, hSlider * 5])

    // Assigns the x and y position for the nodes
    var treeData = treemap(root);

    // Compute the new tree layout.
    var nodes = treeData.descendants()
    var links = treeData.descendants().slice(1)

    // Normalize for fixed-depth.
    nodes.forEach(d => { d.y = d.depth * vSlider * 10 }); // magic number is distance between each node

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = svg.selectAll('g.node')
      .data(nodes, function (d) { return d.id || (d.id = ++i); })

    // Remove any exiting nodes
    var nodeExit = node.exit().transition()
      .duration(duration)
      .attr('transform', d => 'translate(' + source.x + ',' + source.y + ')')
      .remove();

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function (d) {
        return "translate(" + source.x0 + "," + source.y0 + ")";
      })
      .on('click', click);

    // Add Circle for the nodes
    nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 5)
      .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff"
      })
      .style('pointer-events', 'visible')

    // Add labels for the nodes
    nodeEnter.append('text')
      .attr('dy', '.35em')
      .attr('y', d => d.children || d._children ? -24 : 24)
      .attr('text-anchor', 'middle')
      .text(d => d.data.name)

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
      .duration(duration)
      .attr('transform', d => 'translate(' + d.x + ',' + d.y + ')');

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style('fill', d => d._children ? 'lightsteelblue' : '#fff')
      .attr('cursor', 'pointer');    // On exit reduce the node circles size to 0

    nodeExit.select('circle')
      .attr('r', 1e-6);


    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = svg.selectAll('path.link')
      .data(links, function (d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function (d) {
        var o = { x: source.x0, y: source.y0 }
        return diagonal(o, o)
      });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
      .duration(duration)
      .attr('d', function (d) { return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function (d) {
        var o = { x: source.x, y: source.y }
        return diagonal(o, o)
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function (d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  function drawChart(treeData) {
    // declares a tree layout and assigns the size
    treemap = d3.tree()
      .size([height - 500, width - 500])

    // Assigns parent, children, height, depth
    root = d3.hierarchy(treeData, d => d.children);
    root.x0 = height - 500 / 2;
    root.y0 = 0;
    update(root);
  }

  // **************
  // **** MAIN ****
  //***************
  var i = 0
  var duration = 500
  var root
  var treemap

  var hSlider = 10
  var vSlider = 10

  var margin = { top: 50, right: 50, bottom: 50, left: 50 }
  var width = 1000 - margin.right - margin.left
  var height = 960 - margin.top - margin.bottom

  d3.select("#vSlider").on("input", () => {
    let val = document.querySelector('#vSlider').value
    vSlider = val
    update(root)
  });

  d3.select("#hSlider").on("input", () => {
    let val = document.querySelector('#hSlider').value
    hSlider = val
    update(root)
  });

  var svg = d3.select(".tree").append("svg")
    .attr("width", '100%')
    .attr("height", '500')
    .attr('viewBox', '0 0 ' + Math.min(width, 500) + ' ' + Math.min(width, 500))
    .attr('preserveAspectRatio', 'xMinYMin')
    .call(d3.zoom()
      .scaleExtent([0.05, 2])
      .on('zoom', () => {
        svg.attr('transform', d3.event.transform)
      }))
    .append("g")
    .attr("transform", "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")");

  drawChart(treeData)
})
