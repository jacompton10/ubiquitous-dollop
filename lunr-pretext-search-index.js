var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase",
  "level": "1",
  "url": "#shorttitlelowercase",
  "type": "Article",
  "number": "",
  "title": "Math 232 Lecture Notes",
  "body": " Math 232 Lecture Notes  Finding the formula for area between curves: \\vspace{5cm} Example 1. Find the area between the lines and over the interval . \\vvs{3} Example 2. Find the area bounded between the curves and . \\vvs{3} Example 3. Find the area between the graphs of and on the interval . \\vvs{4} Example 4. Find the area of the region bounded by the curves and and the -axis. \\vvs{4} Regions defined with respect to : \\vvs{3} Example 5. Find the area of the region bounded by the curves and and the -axis. \\vvs{5} Example 6. Find the area of the region bounded by the curves and and the -axis.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
