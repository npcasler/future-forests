Forests.Headline = DS.Model.extend({
  title       : DS.attr(),
  classId     : DS.attr(),
  orderId     : DS.attr(),
  pageId      : DS.attr(),
  detail      : DS.attr(),
  chart       : DS.attr(),
  loss	      : DS.attr(),

  detailId: function() {
    return this.get('classId') + '-detail';
  }.property('classId'),

  chartName: function() {
    return this.get('chart') + '-names';
  }.property('chart'),

  chartContainer: function() {
    return this.get('chart') + '-container';
  }.property('chart'),
  
  pictureContainer: function() {
    return this.get('chart') + '-picture';
  }.property('chart'),

  figureContainer: function() {
    return this.get('chart') + '-figure';
  }.property('chart'),
});

Forests.Headline.FIXTURES = [{
   
  id: 1,
  title: 'The planet is warming, and this warming is driven primarily by human activity',
  classId: 'climate-home',
  orderId: 'a',
  pageId: 'climate',
  detail: "<div class=\"col-md-6 leftAlign\"><p>Human activities are the primary cause of global warming over the past 50 years. The release of greenhouse gases from fossil fuels has increased the concentration of carbon dioxide in the atmosphere by more than 40% since the Industrial Revolution. Scientists have known for more than 200 years that carbon dioxide traps heat in our atmosphere. The pattern of temperature change in the atmosphere - warming near the surface vs. cooling in upper levels - confirms that the buildup of greenhouse gases has caused most of the Earth's warming over the past century.</p> <p>The chart shows the increase of both atmospheric carbon dioxide (CO<sub>2</sub>) and global annual average temperature since 1880. The black line is CO<sub>2</sub> concentration, in parts per million. The red bars show temperatures above the long-term average, and blue bars indicate temperatures below the long-term average. Global annual average temperature (as measured over both land and oceans) has increased by more than 1.5&#176;F(0.8&#176;C) since 1880 (through 2012).</p> <p>&nbsp;</p></div><div class=\"col-md-6\"> <div class=\"global-temp-and-co2 figure\"></div> <p><em>Global Temperature and Carbon Dioxide</em></strong>    Figure source: <a href=\"http://nca2014.globalchange.gov/report/our-changing-climate/observed-change#tab1-images\">NCA</a> updated from Karl et al. 2009 <super>1</super>.</p></div>"
}, {

 id: 2,
  title: "It's going to get warmer, but how much warmer is up to us",
  classId: 'climate-choice',
  orderId: 'b',
  pageId: 'climate',
  detail: "<div class=\"row\"><div class=\"col-md-6 leftAlign\"><p>Choices made now and in the next few decades will determine the magnitude of future warming. Lower levels of heat-trapping gases, under scenarios with reduced greenhouse gas emissions, will lead to noticeably less future warming. Higher emissions levels will result in more warming, and thus more severe impacts on human society and the natural world.</p><p>You’ll notice in the rest of this site that we used two emissions scenarios to explore how forests will be affected by climate change &#8212; the best case vs. the worst case &#8212; which are identified by the labels RCP 2.6 vs. RCP 8.5. The letters RCP stand for &quot;representative concentration pathway&quot; – referring to the concentration of greenhouse gasses in the atmosphere. The numbers refer to the amount of extra energy retained by the atmosphere because of greenhouse gases, expressed in units of watts per square meter, relative to conditions in 1750 (before the Industrial Revolution). The best-case scenario (rcp 2.6) is characterized by a &quot;peak-then-decline&quot; pattern, where CO<sub>2</sub> emissions rise from current-day rates of ~9 billion tons per year, peak around mid-21<super>st</super> century, then decline to zero by the end of the 21<super>st</super>century. Under the worst-case scenario (rcp 8.5) &#8212; &quot;business as usual&quot; &#8212; emissions continue to rise at a relatively high rate throughout most of the 21<super>st</super> century, then stabilize at ~30 billion tons per year by the end of the century. The change in global average temperature predicted under these two scenarios (relative to 1901-1960 conditions) is shown in the chart &#8212; the best-case in blue vs. the worst-case in red. Shading indicates the range (5<super>th</super> to 95<super>th</super> percentile) of results from a suite of climate models.</p></div><div class=\"col-md-6\"><p>&nbsp;</p><div class=\"rcp-overview\"></div><div class=\"average_temp_global figure\"></div><p></strong><em>Emissions Levels Determine Temperature Rises</em>.  Data from CMIP3, CMIP5 and NOAA NCDC. Graph and overview from <a href=\"http://nca2014.globalchange.gov/report/our-changing-climate/future-climate-change\">NCA</a></p></div></div>"
}, {

  id: 3,
  title: 'Higher Average Annual Temperature will cause stress to forests',
  classId: 'climate-temp',
  orderId: 'c',
  pageId: 'climate',
  detail: " <div class=\"col-md-6 leftAlign\"><p>Plants need more water to survive as temperatures rise. Rising temperatures are already causing stress to forests (in North America and beyond) <sup>1-8</sup>, including increased rates of tree mortality and large-scale die-offs. Our future climate will be warmer, but dramatically less so if we choose to control the emission of greenhouse gasses. The map shows projected change in average annual temperature over the period 2071-2099 (compared to the period 1970-1999) under the best-case scenario that assumes rapid reductions in emissions and concentrations of heat-trapping gases (RCP 2.6), vs. the worst-case scenario that assumes continued increases in emissions (RCP 8.5).</p> </div><div class=\"col-md-6\"><div class=\"temp_projection figure\"></div> <p><em>Projected Change in Average Annual Temperature</em> Figure source: NOAA NCDC / CICS-NC. Graph and description from <a href=\"http://nca2014.globalchange.gov/report/our-changing-climate/future-climate-change\">NCA</a></p></div>"
}, {

  id: 4,
  title: 'Reduced winter snowpack and earlier melt dates will add to forest stress',
  classId: 'climate-influence',
  orderId: 'd',
  pageId: 'climate',
  detail: "<div class=\"col-md-6 leftAlign\"><p>With increasing temperatures, less precipitation comes in the form of snow, and snow melts earlier. Melting snow normally releases water slowly in spring and summer, when both natural ecosystems and people have the greatest need for water. This is key to the functioning of certain forests in the western U.S., and in particular to the Southwest's hydrology and water supplies. Less snow, and earlier snowmelt, means that both natural and human communities will face water shortages.</p><p>The map shows projected snow water equivalent (SWE), the amount of water held in a volume of snow, for the Southwestern states, as a percentage of 1971-2000, under the worst-case emissions scenario (RCP 8.5). Declines in peak SWE are strongly correlated with early timing of runoff and decreases in total runoff. For watersheds that depend on snowpack like the Sierra Nevada, and the Upper Colorado and Upper Rio Grande River basins, lower SWE also translates to reduced reservoir water. The size of bars is proportional to the amount of snow each state contributes to the regional total.</p></div> <div class=\"col-md-6\"><div class=\"snow_water figure\"></div> <p><br><em>Projected Snow Water Equivalent</em><br> Data from Scripps Institution of Oceanography. Graphic and legend from <a href=\"http://nca2014.globalchange.gov/report/regions/southwest#intro-section-2\">NCA</a></p></div>"
}, {

  id: 5,
  title: 'Less precipitation will also contribute to drought stress',
  classId: 'climate-dry',
  orderId: 'e',
  pageId: 'climate',
  detail: " <div class=\"col-md-6 leftAlign\"><p>In addition to the drought stress caused by rising temperatures, the newest climate change predictions indicate that there will be less precipitation in the winter-spring in the Southwest and a stronger summer drought in the Pacific Northwest. The map shows anticipated seasonal precipitation change for 2071-2099, compared to 1970-1999. Under the worst-case scenario (RCP 8.5), large reductions in winter and spring precipitation are forecast for the Southwest. Rapid emissions reductions would be required for the modest changes in the best-case scenario (RCP 2.6) &#8212; more than 70% cuts from current levels by 2050. Hatched areas indicate that the projected changes are significant and consistent among models. White areas indicate that the changes are not projected to be larger than could be expected from natural variability.</p></div> <div class=\"col-md-6\"><div class=\"precip-change figure\"></div><br>Seasonal precipitation change.    Figure source: NOAA NCDC / CICS-NC. Graph and legend from <a href=\"http://nca2014.globalchange.gov/report/our-changing-climate/precipitation-change\">NCA</a></p></div>"
    
}, {
  id: 6,
  title: 'These changes in climate will lead to higher-than-normal rates of tree mortality, and reduction of forest areas.',
  classId: 'climate-mortality',
  orderId: 'f',
  pageId: 'climate',
  detail: "<div class=\"col-md-6 leftAlign\"> <p>The changes in climate described above are already causing changes in patterns of wildfires and insect outbreaks<sup>8, 18</sup>, and will continue to do so<super>16</super>. Wildfires are a natural part of all forest ecosystems, but they have been suppressed in western forests for the better part of a century, leading to increased fuel loads. At the same time, warmer and drier conditions have led to an increase in the number, extent, and intensity of wildfires in western U.S. forests since the 1970s<sup>15, 18</sup>. Higher temperatures and drought stress are also contributing to outbreaks of beetles that are increased pine mortality<sup>7,8,13,16</sup>.</p><p>Recently, the NCA summarized how these factors will likely influence western U. S. forests: higher temperatures and drought stress subject trees to enhanced risk of mortality either from physiological stress, fire, or by making them vulnerable to insect and pathogen attack. The chart illustrates this expectation via a conceptual climate envelope analysis. As conditions become drier, either through increased temperatures or decreased precipitation (or both), forests reach a critical threshold beyond which the climatic conditions are no longer suitable for their success.</p></div><div class=\"col-md-6\"> <div class=\"forest-vulnerable figure\"></div> <p><em>Forest Vulnerability to Changing Climate</em> <super></super>Figure source: Allen et al. 2010<super>2</super>. Graphic from <a href=\"http://nca2014.globalchange.gov/report/sectors/forests\">NCA</a></p></div>"
}, {
  id: 7,
  title: 'Connecting the dots: from emissions of greenhouse gasses to loss of Western U.S. forests',
  classId: 'climate-precip',
  orderId: 'g',
  pageId: 'climate',
  detail: "<p class=\"leftAlign\">With increased concentrations of greenhouse gas emissions will come warmer temperatures and drought. These changes will put western forests increasingly at risk of higher-than-normal rates of tree mortality, and ultimately, reduction of the area that is climatically-suitable for forests. For many tree species, the most climatically-suitable areas will shift from their current locations, increasing vulnerability to insects, disease, and fire in areas that become unsuitable.</p><div class=\"bottom-nav\"><div class=\"circle-nav\">Greenhouse<br>Gas Emissions</div><div class=\"greenArrow-bottom\">&nbsp;</div><div class=\"circle-nav\">Forest<br>Change</div><div class=\"greenArrow-bottom\">&nbsp;</div><div class=\"circle-nav-active\"><a href=\"#/headlines/forest\">Forest<br>Loss</a></div></div></p>"
}, {
  id: 8,
  title: 'Citations',
  classId: 'climate-cite',
  orderId: 'h',
  pageId: 'climate',
  detail: " <ol style=\"text-align: left;\"> <li>Allen, C. D. et al. 2010. A global overview of drought and heat-induced tree mortality reveals emerging climate change risks for forests. For. Ecol. Manage 259: 660–684.</li><br> <li>van Mantgem, P. J. et al. 2009. Widespread increase of tree mortality rates in the western United States. Science 323:521–524.</li><br> <li>Breshears, D. D. et al. 2005. Regional vegetation die-off in response to global-change-type drought. Proc. Natl. Acad. Sci. USA 102: 144–148.</li><br> <li>McDowell, N. G., D. J. Beerling, D. D. Breshears, R. A. Fisher, K. F. Raffa, and M. Stitt. 2011. The interdependence of mechanisms underlying climate-driven vegetation mortality. Trends Ecol. Evol. 26: 523–532, doi:10.1016/j.tree.2011.06.003.</li><br> <li>Williams AP, Allen CD, Macalady AK, Woodhouse C, Meko D, Allen CD, Swetnam TW, Cook ER, Griffin D, Rauscher SA, Seager R, Dean J, Grissino-Mayer H, Gangodagamage C, Cai M, McDowell N. 2013. Temperature as a potent driver of regional forest-drought stress and tree mortality. Nature Climate Change 3: 292–297.</li><br> <li>Adams, H. D. et al. 2009. Temperature sensitivity of drought-induced tree mortality portends increased regional die-off under global change-type drought. Proc. Natl. Acad. Sci. USA 106: 7063-7066.</li><br> <li>Bentz, B. J. et al. 2010. Climate change and bark beetles of the western United States and Canada: direct and indirect effects. Bioscience 60: 602-613.</li><br> <li>Williams, A. P., et al. 2010. Forest responses to increasing aridity and warmth in the southwestern United States. Proc. Natl. Acad. Sci. USA 107: 21298-21294.</li><br> <li>Notaro, M., A. Mauss, and J. W. Williams. 2012. Projected vegetation changes for the American Southwest: combined dynamic modeling and bioclimatic-envelope approach. Ecological Applications 22(4): 1365-1388.</li><br> <li>Diffenbaugh, N. S., F. Giorgi, and J. S. Pal. 2008. Climate change hotspots in the United States. Geophsyical Research Letters 35.</li><br> <li>Garfin, G., A. Jardine, R. Merideth, M. Blackm and S. LeRoy, eds. 2013. Assessment of Climate Change in the Southwest United States: A Report Prepared for the National Climate Assessment. Island Press, Washington, D.C.</li><br> <li>Cook, B. I. and R. Seager. 2013. The response of the North American monsoon to increased greenhouse gas forcing. Journal of Climate 118(4).</li><br> <li>Raffa, K. F. et al. 2008. Cross-scale drivers of natural disturbances prone to anthropogenic amplification: the dynamics of bark beetle eruptions. BioScience 58: 501-517.</li><br> <li>Seager, R. et al. 2007. Model projections of an imminent transition to a more arid climate in southwestern North America. Science 316: 1181-1184.</li><br> <li>Westerling, A. L., H. G. Hidalgo, D. R. Cayan, and T. W. Swetnam. 2006. Warming and earlier spring increase western U. S. forest wildfire activity. Science 313:940-943.</li><br> <li>Westerling, A. L., M. G. Turner, E. A. H. Smithwick, W. H. Romme, M. G. Ryan. 2011. Continued warming could transform Greater Yellowstone fire regimes by mid-21st century. Proc. Natl. Acad. Sci. USA 108: 13165-13170.</li><br> <li>Gaylord, M. L., T. E. Kolb, W. T. Pockman, J. A. Plaut, E. Y. Yepez, A. K. Macalady, R. E. Pangle, and N. G. McDowell. 2013. Drought predisposes pinon-juniper woodlands to insect attacks and mortality. New Phytologist 198: 567-578.</li><br><li>Stephens, S. L., J. K. Agee, P. Z. Fule, M. P. North, T. W. Swetnam, and M. G. Turner. 2013. Managing forests and fire in changing climates. Science 342:41-42.</li> </ol>"
}, {
  id: 12,
  title: 'Societal choices for greenhouse gas emissions will have consequences for our Western forests, including what our landscapes and backyards look like. Here we summarize what these consequences are, based on our own forecasts and the consensus in the scientific literature.',
  classId: 'summary',
  orderId: 'l',
  pageId: 'forest'
//  detail: "<h3>Societal choices for greenhouse gas emissions will have consequences for our Western forests, including what our landscapes and backyards look like. Here we summarize what these consequences are, based on our own forecasts and the consensus in the scientific literature.</h3>"
}, {
  id: 13,
  title: 'The Western U.S. will see a loss of forests, but how much will depend on our choices',
  classId: 'cover-change',
  orderId: 'm',
  pageId: 'forest',
  detail: " <div class=\"col-md-4\"><p class=\"leftAlign\">Forest loss will be influenced by the pace of greenhouse gas emissions. The worst-case emissions scenario (RCP 8.5) will reduce the area climatically suitable for dominant forest species by up to 40% (red line). In contrast, the best-case climate change scenario (RCP 2.6) will reduce the area suitable for these species by only 15-20% (blue line).</p> </div><div class=\"col-md-8\"><div class=\"forest-cover\"></div> <p>Change through time in the area climatically-suitable for 52 Western U.S. tree species.  </p></div>"
}, {
  id: 14,
  title: 'This forest loss is dramatic enough to be visible from space',
  classId: 'forest-loss',
  orderId: 'n',
  pageId: 'forest',
  detail: "<div class=\"row\"><div class=\"col-md-12\"><p class=\"leftAlign\">The images below show the area climatically-suitable for nine dominant tree species in the state of Colorado, viewed from the perspective of the upper atmosphere. Forested areas are dark green. Compare the dark green area in the left-most image (current) to the right-most image (worst-case future, RCP 8.5): there is a dramatic loss of forested area throughout the southern Rocky Mountains, the Mogollon Rim area of northern Arizona, and southern Utah. Less forest cover is lost under the best-case climate change scenario (RCP 2.6, middle image). These images are derived from the Outerra climate change simulator.</p></div></div><div class=\"row\"><div class=\"col-md-4\"><h3>Current climate</h3><div class=\"atmo-current figure\"></div></div><div class=\"col-md-4\"><h3>2081 best-case</h3><div class=\"atmo-rcp26 figure\"></div></div><div class=\"col-md-4\"><h3>2081 worst-case</h3><div class=\"atmo-rcp85 figure\"></div></div></div><p>&nbsp;</p>"
}, {
  id: 15,
  title: 'Forest loss will also be visible at a local scale...',
  classId: 'summary-impacts',
  orderId: 'o',
  pageId: 'forest',
  detail: "<p class=\"leftAlign\">Forest loss caused by changing climate will affect what our backyards and landscapes look like. Here we offer current vs. future views of three locations in the western U. S. under the best-case climate scenarioi (RCP 2.6) vs. the worst-case climate change scenario (RCP 8.5). These views were generated by the Outerra climate change simulator.</p> <div class=\"row\"><h3>Aspen, CO</h3><div class=\"col-md-4\"><h3>Current<br>climate</h3></div><div class=\"col-md-4\"><h3>Best-case<br>future</h3></div><div class=\"col-md-4\"><h3>Worst-case<br>future</h3></div></div><div class=\"row\"> <div class=\"col-md-4\"> <div class=\"aspen-current\"></div> </div> <div class=\"col-md-4\">  <div class=\"aspen26\"></div> </div> <div class=\"col-md-4\"> <div class=\"aspen85\"></div> </div> </div> <div class=\"row\"><h3>Tucson, AZ</h3><div class=\"col-md-4\"><h3>Current<br>climate</h3></div><div class=\"col-md-4\"><h3>Best-case<br>future</h3></div><div class=\"col-md-4\"><h3>Worst-case<br>future</h3></div></div><div class=\"row\"><div class=\"col-md-4\"><div class=\"lemmon-current\"></div></div><div class=\"col-md-4\"> <div class=\"lemmon-26\"></div> </div> <div class=\"col-md-4\"> <div class=\"lemmon-85\"></div> </div> </div> <div class=\"row\"><h3>Crested Butte, CO</h3><div class=\"col-md-4\"><h3>Current<br>climate</h3></div><div class=\"col-md-4\"><h3>Best-case<br>future</h3></div><div class=\"col-md-4\"><h3>Worst-case<br>future</h3></div></div><div class=\"row\"><div class=\"col-md-4\"><div class=\"butte-current\"></div></div><div class=\"col-md-4\"><div class=\"butte-26\"></div></div><div class=\"col-md-4\"><div class=\"butte-85\"></div></div></div>"
}, {
  id: 16,
  title: 'Trees predicted to decline include high-elevation species, commercially-important species, and others...',
  classId: 'summary-elev',
  orderId: 'p',
  pageId: 'forest',
  detail: " <p class=\"textMd\">These  forecasts are supported by large-scale die-offs that we are witnessing today.</p>",
  chart: 'loss',
  loss: 'y'
}, {
  id: 17,
  title: 'The area suitable for forests will move up in elevation',
  classId: 'summary-diff',
  orderId: 'q',
  pageId: 'forest',
  detail: "<div class=\"row\"><div class=\"col-md-6\"><p class=\"leftAlign\">The speed of this change will be affected by how much greenhouse gases we choose to emit over the next 10-20 years. The chart shows this shift in elevation for one species, aspen. Both panels show aspen's predicted elevation distribution in ten-year time slices (colored lines), from YEAR to YEAR. On the left is the best-case scenario: a noticeable upslope shift during the first decade, that stabilizes by the end of the century. On the right is the worst-case scenario: a consistent march upwards in elevation each decade, that will translate into less and less area for this species.</p><p>&nbsp;</p></div><div class=\"col-md-6\"><div class=\"elev26 centerAlign\"></div><p>&nbsp;</p><div class=\"elev85 centerAlign\"></div><p>&nbsp;</p><p class=\"leftAlign\">Change in elevation for aspen (<em>Populus tremuloides</em>) under best- vs worst-case scenarios.</p></div></div>"
}, {
  id: 18,
  title: 'High-elevation forests will likely experience greater loss than other forest types',
  classId: 'range-change',
  orderId: 'r',
  pageId: 'forest',
  detail: "<div class=\"row\"><div class=\"col-md-4\"><p class=\"leftAlign\">Climate change will lead to a dramatic reduction in the total area of subalpine forest, but this will be greatly influenced by our greenhouse gas emissions. If we continue as we are (the worst-case scenario), subalpine forests could be reduced in area by  ~ 90% (left chart). Controlling greenhouse gas emissions will reduce those losses, halting them at a lower level (right chart).</p><p>&nbsp;</p><div class=\"subalpine-legend\"></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"subalpine26\"></div><div class=\"subalpine85\"></div></div><p class=\"leftAlign\">Change in the area climatically suitable for 11 western tree species characteristic of subalpine forests. Each line represents a different species.(see <em>Methods</em> for which species corresponds to which number.</p></div></div>"
}, {
  id: 19,
  title: 'The lower-elevation forest ecotone is also expected to be hit hard',
  classId: 'shift',
  orderId: 's',
  pageId: 'forest',
  detail: "<div class=\"row\"><div class=\"col-md-4\"><p class=\"leftAlign\">Certain trees in arid forests of the Southwest and central Rocky Mountains are also expected to experience dramatic declines. The charts shows the change in area that is climatically-suitable for 23 tree species characteristc of arid forests in the western U.S. Each line represents a different species. Ponderosa pine (#66) and pinyon pine (#58) are some of the species forecast to decline dramatically.</p><div class=\"arid-legend\"></div></div><div class=\"col-md-8\"><div class=\"row\"><div class=\"arid26\"></div><div class=\"arid85\"></div></div><p></p></div></div>"
}, {
  id: 20,
  title: 'Deserts and shrublands will expand at the expense of forests',
  classId: 'desert-expansion',
  orderId: 't',
  pageId: 'forest',
  detail: "<div class=\"row\"><div class=\"col-md-5\"><p class=\"leftAlign\">Our models also predict that certain species characteristic of deserts and arid shrublands will increase with climate change. However, the rate of expansion will be altered dramatically by choices that we make. The charts show the change in area that is climatically-suitable for 81 tree species that are characteristic of the major habitat types across the western United States, compared to their present-day area. Controlling greenhouse gas emissions (top panel) will reduce the total area predicted to become suitable for these species (compared to the bottom panel, the business as usual scenario). These forecasts are supported by similar predictions originating from other scientific studies using very different modeling methods<sup>1-3</sup>.</p><div class=\"habitat-legend\"></div></div><div class=\"col-md-7\"><div class=\"habitat\"></div><p class=\"leftAlign\">Change in the area climatically-suitable for tree species of major habitat types across the Western United States, compared to their present-day area.</p></div></div><div class=\"row\"><hr class=\"headline\"></div><p class=\"textMd\">Some of the shrub and desert species that our models suggest are likely to experience increased climatic suitability throughout the West are listed here.</p>",
  chart: 'gain',

}, {
  id: 21,
  title: 'Forests in some regions will be hit harder than others',
  classId: 'summary-green',
  orderId: 'u',
  pageId: 'forest',
  detail: " <div class=\"row\"><div class=\"col-md-5\"><p class=\"leftAlign\">Forests of the Rocky Mountains and Southwestern states (Madrean woodlands) will likely experience the worst declines. The chart shows the change in area predicted to be suitable for important tree species in each of the different regions of the western United States, relative to their present-day area. Under the worst-case climate change scenario (business as usual), even the forests of the Pacific Northwest are forecast to experience considerable degradation of the climatic conditions required for their success.</p><p><div class=\"region-legend\"></div></p></div><div class=\"col-md-7\"><div class=\"region\"></div> <p>Change in the area climatically-suitable for important trees in each of the regions of the Western United States, relative to the area they presently occupy.</p></div></div><div class=\"bottom-nav\"><div class=\"circle-nav\">Forest<br>change</div><div class=\"greenArrow-bottom\">&nbsp;</div><div class=\"circle-nav\">Forest<br>loss</div><div class=\"greenArrow-bottom\">&nbsp;</div><div class=\"circle-nav-active\"><a href=\"#/headlines/lost\">Lost<br>services</a></div></div>"
}, {
  id: 22,
  title: 'People will be affected by these changes in three mainways: fire, water, and carbon',
  classId: 'lost-main',
  orderId: 'v',
  pageId: 'lost',
  detail: " <p>Climate change influences us through its imapct on the services that ecosystems and biodiversity provide. Ecosystem services are the benefits that humans derive from the earth's ecosystems &#8212; including fisheries, drinking water, fertile soils for growing crops, climate regulation, inspiration, and aesthetic and cultural values. Some of these benefits, like food, are more easily quantified than others, such as climate regulation, or cultural values. Yet even the more easily quantified ecosystem services are often taken for granted.</p> <p>Forests provide numerous benfits to humanity: they contribute to jobs, economic growth, health, and human well-being. Perturbations of forests from climate change quality, reduced forest productivity, including both commercially-harvestable wood, and carbon storage capacity,as well as the reduction of recreational opportunities and animal species that depend upon forests, loss of iconic species and landscapes, and distorted rhythms of nature.</p> <p><strong>Fire &#8212;</strong> Fires are a natural part of the ecology of all forest systems, but they have been suppressed in the western U.S. forests for nearly a century, leading to increased fuel loads. This, combined with warming and drying(earlier spring and snowmelt), have been linked to increases in the size and severity of fires in the western U.S.<super>4-5</super>, a trend that is expected to continue with further warming and drying<super>6</super>. This includes the threat of so-called \"mega-fires\", characterized by \"catastrophic damages in terms of human casualties and economic losses... with deep, long-lasting social, economic, and environmental consequences.\"<super>7</super></p> <p><strong>Water &#8212;</strong> When forest cover is lost, either through drought-induced die-off or fire, the hydrology of the landscape is changed, reducing its capacity to yield drinking water. Throughout the west, human populations depend on snow-pack in forested areas for drinking water - they literally act as \"water towers\" for near-by lower-elevation, semi-arid and arid areas where millions live. Forested areas yield more drinkable water than other vegetation types (shrublands, grasslands).</p> <p<strong>Carbon &#8212;</strong> An important ecosystem service provided by forests is that forests absorb and store carbon dioxide. They play a role in global climate regulation, potentially helping to slow the pace of climate change.</p>"
}, { 
  id: 23,
  title: 'References',
  classId: 'summary-cite',
  orderId: 'w',
  pageId: 'forest',
  detail: " <ol style=\"text-align: left\"> <li>Jiang, X., S. A. Rauscher, T. D. Ringler, D. M. Lawrence, A. Park Williams, C. D. Allen, A. L. Steiner, D. M. Cai, and N. G. McDowell. 2013. Projected future changes in vegetation in western North America in the twenty-first century. Journal of Climate 26:3671-3687.</li> <li>Notaro, M., A. Mauss, and J. W. Williams. 2012. Projected vegetation changes for the American Southwest: combined dynamic modeling and bioclimatic-envelope approach. Ecological Applications 22: 1365-1388.</li> <li>Rehfeldt, G. E., N. L. Crookston, M. V. Warwell, and J. S. Evans. 2006. Empirical analyses of plant-climate relationships for the western United States. International Journal of Plant Sciences. 167: 1123-1150.</li> <li> Stephens, S. L., J. K. Agee, P. Z. Fule, M. P. North, T. W. Swetnam, and M. G. Turner. 2013. Managing forests and fire in changing climates. Science 342:41-42.</li> <li> Westerling, A. L., H. G. Hidalgo, D. R. Cayan, and T. W. Swetnam. 2006. Warming and earlier spring increase western U. S. forest wildfire activity. Science 313:940-943.</li> <li>Westerling, A. L., M. G. Turner, E. A. H. Smithwick, W. H. Romme, M. G. Ryan. 2011. Continued warming could transform Greater Yellowstone fire regimes by mid-21st century. Proc. Natl. Acad. Sci. USA 108: 13165-13170.</li> <li>Attiwill, P. and D. Binkley, 2013. Exploring the mega-fire reality: a “Forest Ecology and Management” conference. Forest Ecology and Management 294, 1–3 .</li> <li>Boisvenue, C., and S. W. Running, 2010: Simulations show decreasing carbon stocks and potential for carbon emissions in Rocky Mountain forests over the next century. Ecological Applications, 20, 1302-1319, doi:10.1890/09-0504.1.</li> </ol>"
}, {
  id: 24,
  title: 'Climate change influences us through its impact on the services that ecosystems and biodiversity provide.',
  classId: 'lost-summary',
  orderId: 'y',
  pageId: 'lost',
  detail: "<p>Ecosystem services are the benefits that humans derive from the earth's ecosystems &#8212; including fisheries, drinking water, fertile soils for growing crops, climate regulation, inspiration, and aesthetic and cultural values. Some of these benefits, like food, are more easily quantified than others, such as climate regulation, or cultural values. Yet even the more easily quantified ecosystem services are often taken for granted.</p> <div class=i\"habitat figure\"></div>"
}, {
  id: 25,
  title: 'Forests provide numerous ecosystems services to humanity: they contribute to jobs, economic growth, health, and human well-being',
  classId: 'lost-humanity',
  orderId: 'z',
  pageId: 'lost',
  detail: '<p>Perturbations of forests from climate change ____ quality, reduced forest productivity, including commercially-harvestable wood, as well as the reduction of recreational opportunities and animal species that depend upon forests, loss of iconic species and landscapes, and distorted rhythms of nature.</p>'
}, {
  id: 26,
  title: 'People will be affected by climate change impacts on forests in three main ways - through fire, water and carbon',
  classId: 'lost-three',
  orderId: 'za',
  pageId: 'lost',
  detail: 'Addd some text???'
}, {
  id: 27,
  title: 'Climate change will increase the risk of fire',
  classId: 'lost-fire',
  orderId: 'zb',
  pageId: 'lost',
  detail: ' <div class="region figure">Fires are a natural part of the ecology of all forest systems, but they have been suppressed in the western U.S. forests for nearly a century, leading to increased fuel loads. This, combined with warming and drying (earlier spring and snowmelt), have been linked to increases in the size and severity of fires in the western U.S.  <super>4-5</super> , a trend that is expected to continue with further warming and drying <super>6</super> . This includes the threat of so-called &quot;mega-fires&quot;, characterized by &quot;catastrophic damages in terms of human casualties and economic losses... with deep, long-lasting social, economic, and environmental consequences.&quot; <super>7</super> [perhaps add mention of one or two recent, high-impact fires in the west...]</div>'
}, {
  id: 28,
  title: 'Forest loss means lost drinking water',
  classId: 'lost-water',
  orderId: 'zc',
  pageId: 'lost',
  detail: ' <div class="elev26">When forest cover is lost, either through drought-induced die-off or fire, the hydrology of the landscape is changed, reducing its capacity to yield drinking water. Throughout the west, human populations depend on snow-pack in forested areas for drinking water - they literally act as &quot;water towers&quot; for near-by lower-elevation, semi-arid and arid areas where millions live. Forested areas yield more drinkable water than other vegetation types (shrublands, grasslands). [needs more hydrology expertise]</div>'
}, {
  id: 29,
  title: 'Forest loss also contributes to the climate change problem',
  classId: 'lost-climate',
  orderId: 'zd',
  pageId: 'lost',
  detail: "<p>An important ecosystem service provided by forests is that they absorb and store carbon dioxide, thus they play an important role in global climate regulation. On a global scale, forests store almost half of the carbon found in terrestrial ecosystems (Bonan 2008), and may sequester as much as one quarter of humanity's carbon emissions (Pan et al. 2011). Thus forests currently help to slow the pace of climate change.  </p><p> If climate-change induced forest loss is great though, forests may become a net source, contributing to the CO<sub>2</sub> problem, rather than a net sink, removing CO<sub>2</sub> from the atmosphere (Anderegg et al. 2012 NCC).</p>"
}, {
  id: 30,
  title: 'References',
  classId: 'lost-references',
  orderId: 'ze',
  pageId: 'lost',
  detail: " <ol style=\"text-align: left\"> <li>Jiang, X., S. A. Rauscher, T. D. Ringler, D. M. Lawrence, A. Park Williams, C. D. Allen, A. L. Steiner, D. M. Cai, and N. G. McDowell. 2013. Projected future changes in vegetation in western North America in the twenty-first century. Journal of Climate 26:3671-3687.</li> <li>Notaro, M., A. Mauss, and J. W. Williams. 2012. Projected vegetation changes for the American Southwest: combined dynamic modeling and bioclimatic-envelope approach. Ecological Applications 22: 1365-1388.</li> <li>Rehfeldt, G. E., N. L. Crookston, M. V. Warwell, and J. S. Evans. 2006. Empirical analyses of plant-climate relationships for the western United States. International Journal of Plant Sciences. 167: 1123-1150.</li> <li> Stephens, S. L., J. K. Agee, P. Z. Fule, M. P. North, T. W. Swetnam, and M. G. Turner. 2013. Managing forests and fire in changing climates. Science 342:41-42.</li> <li> Westerling, A. L., H. G. Hidalgo, D. R. Cayan, and T. W. Swetnam. 2006. Warming and earlier spring increase western U. S. forest wildfire activity. Science 313:940-943.</li> <li>Westerling, A. L., M. G. Turner, E. A. H. Smithwick, W. H. Romme, M. G. Ryan. 2011. Continued warming could transform Greater Yellowstone fire regimes by mid-21st century. Proc. Natl. Acad. Sci. USA 108: 13165-13170.</li> <li>Attiwill, P. and D. Binkley, 2013. Exploring the mega-fire reality: a “Forest Ecology and Management” conference. Forest Ecology and Management 294, 1–3 .</li> <li>Boisvenue, C., and S. W. Running, 2010: Simulations show decreasing carbon stocks and potential for carbon emissions in Rocky Mountain forests over the next century. Ecological Applications, 20, 1302-1319, doi:10.1890/09-0504.1.</li> </ol>"
}, {
  id: 31,
  title: 'Movies',
  classId: 'lost-water',
  orderId: 'va',
  pageId: 'forest',
  detail: '<div class=\"row\"><div class=\"col-md-6\"><p class=\"leftAlign\"><strong>Movie 1 Legend &#8212;</strong>View of Aspen CO, looking South, with predicted change in the climatic suitability of the landscape for aspen trees (Populus tremuloides) through time. These animations use our Future Forest Distribution Model to show what happens to the climate conditions aspen requires to be successful at 10-year intervals &#8212; from the current climate to future climates ending in the year 2081 &#8212; under the best-case emissions scenario vs. the worst-case emissions scenario. Darker green regions on the landscape correspond to good conditions for aspen trees, whereas light green grading into white regions, indicate poor conditions for aspen. In the worst-case climate change scenario, most of the area around Aspen, CO is unlikely to be climatically suitable for aspen trees. However, in the best case scenario the reduction in suitability slows by the end of the century.</p><div class=\"movie1\"></div></div><div class=\"col-md-6\"><iframe src=\"//player.vimeo.com/video/107734991\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><div class=\"row\"><hr class=\"headline\"></div><div class=\"row\"><div class=\"col-md-6\"><p class=\"leftAlign\"><strong>Movie 2 Legend &#8212;</strong> Predicted reduction in the area suitable for Engelmann spruce(<em>Picea engelmannii</em>) through time. The animations use our Future Forest Distribution Model to project suitability through time at 10 year intervals &#8212; from the current climate to future climates ending in the year 2081. This shows conditions under the worst-case, &quot;business-as-usual&quot; emissions scenario. Darker green regions on the landscape correspond to high suitability for Engelmann spruce, while light green and white regions indicate low suitability. Engelmann spruce is predicted to experience a continuous collapse of climatic suitability and hence a shift to increasing higher elevations that cover a smaller and smaller area.</p></div><div class=\"col-md-6\"><iframe src=\"//player.vimeo.com/video/107734987\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><div class=\"row\"><hr class=\"headline\"></div><div class=\"row\"><div class=\"col-md-6\"><p class=\"leftAlign\"><strong>Movie 3 Legend &#8212;</strong> Predicted change in climatic suitability for subalpine fir(<em>Abies lasiocarpa</em>) through time. The animationuse our Future Forest Distribution Mode to project suitability through time at 10 year time slices &#8212; from current climate to future projected climate in the year 2081. Two movies are shown, the best-case scenario vs. the worst-case climate scenario. Darker green  regions on the landscape correspond to high suitability for subalpine fir while light green grading into white regions indicate regions of poor suitability. In the worst-case climate change scenario, subalpine fir is predicted to experience a continuous collapse of suitable area.In contrast, under the best-case scenario, the decline of conditions suitable for subalpine fir slows by the end of the century.</p></div><div class=\"col-md-6\"><iframe src=\"//player.vimeo.com/video/107734984\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div><div class=\"row\"><hr class=\"headline\"></div><div class=\"row\"><div class=\"col-md-6\"><p class=\"leftAlign\"><strong>Movie 4 Legend &#8212</strong> A view of the high-elevation forests of central Colorado, looking west over Summit County Colorado. The ski areas of Keystone and Breckenridge are clearly visible. This animation shows the predicted future expansion of suitable growing conditions for pinyon pine, <em>Pinus edulis</em>, through time. These animations use our Future Forest Distribution Model to prject climatic suitability through time at 10 year intervals &#8212; from the current climate to future climates ending in the year 2081. Under the \"business-as-usual\" climate scenario, high-elevation regions that currently support forest become increasingly more suitable for the more arid-adapted pinyon pine. Darker green coloring on the landscape corresponds to high local suitability, whereas light green and white regions indicate low suitability.</p></div><div class=\"col-md-6\"><iframe src=\"//player.vimeo.com/video/99374132\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>'
}, {
  id: 32,
  title: 'About ForestForecasts.org',
  classId: 'about-1',
  orderId: 'aa',
  pageId: 'about',
  detail: '<div class=\"row textMd\"><div class=\"col-md-1\"></div><div class=\"col-md-10\"><h1>About ForestForecasts.org</h1><h2><em>What will happen to our forests in 20 or 100 years from now?</em></h2><h2><em>What will your backyard look like with increasing changes in climate?</em></h2><h2><em>How will changes in greenhouse gas emissions influence out forests?</em></h2><p>Within our lifetime, forests are going to change. But how much they will change is up to us. Forests may experience dramatic reductions in cover and enhanced <em>mortality</em> events ultimately due to increased drought and changing temperatures.</p><p>ForestForecasts.org allows you to explore current and futuremaps and similations. It uses the largest compilation of forest data, the most recent science forecasts, and new <em>tools</em> to visualize future forecasts for our forests and landscapes.</p><p>&nbsp;</p><p>Learn about the <a href=\"https://www.aspennature.org/about\" class=\"aces-link\">Aspen Center for Environmental Studies</a></p></div><div class=\"col-md-1\"></div></div>'
},{
  id: 33,
  title: 'Why ForesForecasts.org?',
  classId: 'about-2',
  orderId: 'ab',
  pageId: 'about',
  detail: '<div class=\"row textMd\"><h1>Why ForestForecasts.org?</h1><p>We as a society have critical choices to make - What forest landscapes do we want our children to inherity? What will be the consequences of continued increases in greenhouse gas emissions? What will happen to forests if greenhouse gas emissions decrease?</p></div>'
},{
  id: 34,
  title: 'What is ForestForecasts.org?',
  classId: 'about-3',
  orderId: 'ac',
  pageId: 'about',
  detail: '<div class=\"row textMd\"><h1>What is ForestForecasts.org?</h1><p>ForestForecasts.org allows you to access and use interactive maps and forecasts - animated \'weather channel-like\' forecasts at local, landscape, and regional levels.</p></div>',
},{
  id: 35,
  title: 'How does ForestForecasts.org work?',
  classId: 'about-4',
  orderId: 'ad',
  pageId: 'about',
  detail: '<div class=\"row textMd\"><h1>How does ForestForecasts.org work?</h1><p>For the first time, ForestForecasts.org accesses the large amount of species data and detailed computational forecasts combined with powerful visualization tools so that you can explore the current and future distribution of forests and species. You can choose how different species and visualize how they will respond to two different climate forecasts.</p></div>'
},{
  id: 36,
  title: 'Who is ForestForecasts?',
  classId: 'about-5',
  orderId: 'ae',
  pageId: 'about',
  detail: '<div class=\"row textMd\"><h1>Who is ForestForecasts.org?</h1><p id=\"who-links\">We are a collaberative group of scientists, educators, informaticians, and public outreach practitioners. ForestForecasts.org is directed by <a href=\"https://brianjenquist.wordpress.com/\">B.J. Enquist</a> at the University of Arizona/Santa Fe Institute and the <a href=\"https://www.aspennature.org/\">Aspen Center for Environmental Studies</a>. Core project collaborators include Nathan Casler, Margaret Evans, Jamie Cundif, Chris Lane, Noah Charney, Martha Narro, and Francina Dominguez. Computational and data collaborators include <a href=\"http://www.iplantcollaborative.org/\">iPlant</a>, <a href=\"https://www.nceas.ucsb.edu/\">NCEAS</a>, <a href=\"http://www.outerra.com/\">Outerra</a>, <a href=\"http://ltrr.arizona.edu/\">The Tree Ring Labratory</a>, and <a href=\"http://bien.nceas.ucsb.edu/bien/\">BIEN</a>. Project support and advising - Chris Lane and Jerry Murdock.</p></div><div class=\"row\"><div class=\"aces\"></div><div class=\"iplant\"></div><div class=\"ua\"></div><div class=\"ltrr\"></div><div class=\"bien\"></div><div class=\"nceas\"></div><div class=\"usgist\"></div><div class=\"sfi\"></div></div>'
},{
  id: 37,
  title: 'Aspen Center for Environmental Studies',
  classId: 'about-6',
  orderId: 'af',
  pageId: 'about',
  detail: '<div class=\"row textMd\"><div class="col-md-1"></div><div class="col-md-10 about-h1"><h1>Aspen Center for Environmental Studies (ACES)</h1><p>ACES is a non-profit environmental science education center with four sites in Colorado\'s Roaring For Valley. ACES provides programs in environmental science and ecological literacy for everyone from school children, to leaders and decision makers, working to build a community of knowledgeable, motivated, and capable environmental stewards.</p><p>ACES mission: \"To inspire a life-long commitment to the Earth by educating for environmental responsibility, conserving, and restoring the balance of natural communities and advancing the ethic that the Earth must be respected and nurtured\". has guided their programming since 1968.</p><p>Since then, ACES has set a high standard for land stewardship on our four sites. The 2012 addition of our For the Forest program expanded the influence of that ethic, creating a nexus between scientific research, conservation values, and active forest restoration. Their involvement with the the Future Forest Distribution Model, which seeks to bridge the gap between scientific research on climate change and public percetption, epitomize the larger goals of their program.</p></div><div class="col-md-1"></div></div>'
},{
  id: 38,
  title: '',
  classId: 'about-7',
  orderId: 'ag',
  pageId: 'about',
  details: ''
},{
  id: 39,
  title: '',
  classId: 'summary-cite',
  orderId: 'wa',
  pageId: 'forest',
  details: ''
},{
  id: 40,
  title: '',
  classId: 'climate-cite',
  orderId: 'hb',
  pageId: 'climate',
  details: ''
},{
  id: 41,
  title: '',
  classId: 'lost-references',
  orderId: 'zf',
  pageId: 'lost',
  details: '',
}

];
