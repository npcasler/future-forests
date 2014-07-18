Forests.Highlight = DS.Model.extend({
  title         : DS.attr(),
  content       : DS.attr(),
  subcontent    : DS.attr(),
  photoUrl      : DS.attr(),
  classId       : DS.attr(),
  orderId         : DS.attr()
});

Forests.Highlight.FIXTURES = [{

  id: 1,
  title: 'Summary',
  content: 'Future Forests is an effort to see effects of climate change may have on our forests in the coming years',
  subcontent: 'The data from our study shows some of the predicted effects on our environment.',
  photoUrl: '../images/fall_aspens.jpg"',
  classId: 'summary',
  orderId: 'a'
}, {
  id: 2,
  title: 'Cover Change',
  content: 'Total cover of western forests will change dramatically',
  subcontent: 'but will be influenced by the pace of greenhouse gas emissions. The worst case emissions scenario will reduce the area climatically suitable for dominant forest speceis by up to 70%. In contrast the best case climate change scenario will reduce the area suitable for these species by only 30%. Our choices now matter.',
  photoUrl: '../images/fall_aspens.jpg',
  classId: 'cover-change',
  orderId: 'b'
}, {
  id: 3,
  title: 'Forest Loss',
  subcontent: 'Subalpine forests - Future climate change will lead toa dramatic reduction in the coverage of subalpine forest but the amount of reduction will be greatly influenced by greenhouse gas emissions. If we continue as we are (the worst-case scenario), subalpine forests cold be reduced in area by ~90%. However, simulations show that controlling greenhouse gas emissions will reduce those losses, halting them at a lower level.',
  content: 'Higher elevation and more arid forests are the most susceptible and will likely experience more dramatic changes than other forest types.',
  photoUrl: '../images/dead_trees.jpg',
  classId: 'forest-loss',
  orderId: 'c'
}, {
  id: 4,
  title: 'Desert Expansion',
  content: 'Expansion of deserts and shrublands at the expense of forests',
  subcontent: 'Our model predicts that certain species characteristic of desert and arid shrublands will increase in dominance and geographical expanse with climate change. However, the rate of expansion will be altered dramatically by choices that wemake about emissions - i.e, climate policy. Controlling greenhouse gas emissions will reduce the total area predicted to become suitable for these species - from an ## area(8.5) to ## area(2.6) These forecasts are supported by similar predictions from other scientific studies using very different modeling methods.',
  photoUrl: '../images/aspen_forest.jpg',
  classId: 'desert-expansion',
  orderId: 'd'
}, {
  id: 5,
  title: 'Range Loss',
  content: 'Forests in most regions of the west will experience declining climatic conditions',
  subcontent: 'Forests of the central Rocky Mountains and the mountainous southwest will likely experience the worst declines. Under worst-case climate change scenarios, even the forests of the Pacific Northwest are forecast to experience considerable degradation of the climatic conditions required for their success.',
  photoUrl: '../images/new_growth.jpg',
  classId: 'range-change',
  orderId: 'e'
}, {
  id: 6,
  title: 'Elevation Change',
  content: 'The remaining forests will be smaller in area and move up in elevation',
  subcontent: 'How fast forests will shit in elevation will be affected by how much greenhouse gases we choose to emit over the next 10-20 years.',
  photoUrl: '../images/dead_trees_with_plane.jpg',
  classId: 'elevation',
  orderId: 'f'
}, {
  id: 7,
  title: 'Shift in Ranges',
  content: 'Forest species will shift in different directions - not all species will go North',
  subcontent: 'Species ranges will shift in all different directions, breaking up many ecosystems.',
  photoUrl: '../images/aspens_with_pine.jpg',
  classId: 'shift',
  orderId: 'g'
}, {
  id: 8,
  title: 'Services',
  content: 'Ecosystem services from Western forests',
  subcontent: 'Changes in climate will influence the supply of water, potential lumber and wood supply along with recreational opportunities.',
  photoUrl: '../images/meadow.jpg',
  classId: 'services',
  orderId: 'h'
}, {
  id: 9,
  title: 'Impact on Ecosystems',
  content: 'carbon storage...',
  subcontent: 'The release of carbon dioxide from fossil fuel burning in North America vastly exceeds the amount that is taken up and temporarily stored in forests, crops and other ecosystems. Nonetheless, forests help provide an important break on greenhouse gas emissions. Any reduction in forested areas would further increase the ability for us to slow the effects of climate change.',
  photoUrl: '../images/mbp_damage.jpg',
  classId: 'impacts',
  orderId: 'i'
}, {
  id: 10,
  title: 'References',
  content: '',
  subcontent: 'Boisvenue, C., and S.W.Running,2010: Simulations show decreasing carbon stocks and potential for carbon emissions in Rocky Mountain forests over the next century. Ecological Applications,20,1302-1319,doi:10.1890/09-0504.1.',
  photoUrl: '../images/spruce_bud.jpg',
  classId: 'biblio',
  orderId: 'j'
}];
