Forests.Title = DS.Model.extend({
  title       : DS.attr(),
  classId     : DS.attr(),
  orderId     : DS.attr(),
  pageId      : DS.attr(),
  detail      : DS.attr(),

  detailId: function() {
    return this.get('classId') + '-detail';
  }.property('classId')
});

Forests.Title.FIXTURES = [{
   
  id: 1,
  title: 'The planet is warming, and this warming is driven primarily by human activity',
  classId: 'climate-home',
  orderId: 'a',
  pageId: 'climate',
  detail: " <p>Human activities are the primary cause of global warming over the past 50 years. The release of greenhouse gases from fossil fuels has  increased the concentration of carbon dioxide in the atmosphere by more that 40% since the Industrial Revolution. Scientists  have known for more than 200 years that carbon dioxide traps heat in our atmosphere.  The pattern of temperature change in the atmosphere - warming near the surface vs. cooling  in upper levels of the atmosphere - confirms that the buildup of greenhouse gases has caused most of the Earth's warming over the past century.</p> <p>Figure 1 shows the increase of both atmospheric carbon dioxide (CO2)  and global annual average temperature since 1880. The black line is CO2 concentration, in parts per million. The red bars show temperatures above the long-term average, and blue bars indicate temperatures below the long-term average. Global annual average temperature (as measured over both land and oceans) has increased by more than 1.5&#176;F(0.8&#176;C) since 1880 (through 2012).</p> <p>&nbsp;</p> <div class=\"global-temp-and-co2 figure\"></div> <p><strong>Figure 1 legend - <em>Global Temperature and Carbon Dioxide</em></strong>    Figure source: <a href=\"http://nca2014.globalchange.gov/report/our-changing-climate/observed-change#tab1-images\">NCA</a> updated from Karl et al. 2009 <super>1</super>.</p>"
}, {
  id: 2,
  title: 'Climate change is already here and is affecting us in far-reaching ways',
  classId: 'climate-overview',
  orderId: 'b',
  pageId: 'climate',
  detail: "<p> Certain types of extreme weather events with links to climate change have become more frequent and/or intense, including prolonged periods of heat, heavy downpours, and, in some regions, floods and droughts. In addition, warming is causing sea levels to rise and glaciers and Arctic sea ice to melt. Oceans are becoming more acidic as they absorb carbon dioxide. These aspects of climate change are disrupting people's lives and damaging sectors of our economy. [Link to NCA website/report.]</p>"
}, {
  id: 3,
  title: "It's going to get warmer, but how much warmer is up to us",
  classId: 'climate-current',
  orderId: 'c',
  pageId: 'climate',
  detail: " <p>Average  temperatures are projected to rise another 2°F to 4°F in most areas of the  United States over the next few decades – past emissions have &ldquo;committed&rdquo; us to  a certain amount of warming. How much the climate changes beyond that  depends primarily on the amount of heat-trapping gases we choose to emit globally.  By the end of this century, a roughly 3°F to 5°F rise is projected under a  lower emissions scenario, which would require substantial reductions in  emissions, vs. a 5°F to 10°F rise for a higher emissions scenario assuming  continued increases in emissions, predominantly from fossil fuel combustion.</p>"
}, {
  id: 4,
  title: 'As a society we face an important choice - between the best case or worst case climate change future',
  classId: 'climate-choice',
  orderId: 'd',
  pageId: 'climate',
  detail: " <p>Choices made now and in the next few decades will determine the magnitude of  future warming. Lower levels of heat-trapping gases, under scenarios with reduced greenhouse gas emissions, will lead to noticeably less future warming. Higher emissions levels will result in more warming, and thus more severe impacts on human society and the natural world.</p> <p>In  modeling how climate change will affect forests, we explored two scenarios &#8212; the best case vs. the worst case &#8212; which are identified by the labels rcp 2.6 vs. rcp 8.5. The numbers refer to the amount of extra energy retained by the atmosphere because of greenhouse gases, expressed in units of watts per square meter, relative to conditions in 1750 (before the Industrial Revolution). The best-case scenario (rcp 2.6) is characterized by a &quot;peak-then-decline&quot; pattern, where CO<sub>2</sub> emissions rise from current-day rates of ~9 billion tons per year, peak around mid-21 <super>st</super> century, then decline to zero by the end of the 21 <super>st</super> century. Under the worst-case scenario (rcp 8.5) &#8212; &quot;business as usual&quot; &#8212; emissions continue to rise at a relatively high rate throughout most of the 21 <super>st</super> century, then stabilize  at ~30 billion tons per year by the end of the century. These best- vs. worst-case emissions scenarios  span the range of plausible, contrasting trajectories with respect to CO<sub>2</sub> concentrations in the atmosphere, arising from economic activity, energy sources, human population growth, and various other factors &#8212; thus their name, representative concentration pathways (rcp).</p> <p>The  change in global average temperature predicted under these two scenarios (relative to 1901-1960 conditions) is shown in Figure 2 &#8212; the best-case in blue vs. the worst-case in red. Shading indicates the range (5 <super>th</super> to 95 <super>th</super> percentile) of results from a suite of climate models.</p> <p>&nbsp;</p> <div class=\"rcp-overview\"></div> <div class=\"average_temp_global figure\"></div> <p><strong>Figure 2 Legend &#8212;</strong><em>Emissions Levels Determine Temperature Rises</em>.  Data from CMIP3, CMIP5 and NOAA NCDC. Graph and overview from <a href=\"http://nca2014.globalchange.gov/report/our-changing-climate/future-climate-change\">NCA</a></p>"
}, {
  id: 5,
  title: 'The best case and worst case temperature projection will lead to dramatically different future worlds',
  classId: 'climate-future',
  orderId: 'e',
  pageId: 'climate',
  detail: " <p><strong>Climate change will affect forests in the western United States through (1) increased temperatures, (2) reduced winter snowpack and earlier melt dates, and  (3) drier conditions overall</strong>...each of which will be influenced by the best vs. worst case scenario of our future climate.</p>"
}, {
  id: 6,
  title: 'Higher Average Annual Temperature will cause stress to forests',
  classId: 'climate-temp',
  orderId: 'f',
  pageId: 'climate',
  detail: " <h2>A growing consensus in the scientific literature is that rising temperatures are already causing stress to forests (in North America and beyond) <super>1-8</super> , including increased rates of tree mortality and large-scale die-offs. Our future climate will be warmer,<strong> </strong>but dramatically less so if we choose to control  the emission of greenhouse gasses. Figure 3 shows projected change in average annual temperature over the period 2071-2099 (compared to the period 1970-1999) under a best-case scenario that assumes rapid reductions in emissions and concentrations of heat-trapping gases (RCP 2.6), vs. a worst-case scenario that assumes continued increases in emissions (RCP 8.5).</h2> <div class=\"temp_projection figure\"></div> <p><strong>Figure 3 Legend &#8212;</strong><em>Projected Change in Average Annual Temperature</em> Figure source: NOAA NCDC / CICS-NC. Graph and description from <a href=\"http://nca2014.globalchange.gov/report/our-changing-climate/future-climate-change\">NCA</a></p>"
}, {
  id: 7,
  title: 'Reduced winter snowpack and earlier melt dates will add to forest stress',
  classId: 'climate-influence',
  orderId: 'g',
  pageId: 'climate',
  detail: " <ol type=\"i\" style=\"text-align: left;\"> <li><strong>Reduction in winter snowpack and earlier melt dates</strong><br> The amount of winter snowpack and timing of snowmelt is critically important for the functioning of Western forests. With increasing temperatures, less precipitation comes in the form of snow, and snow melts earlier. Melting snow slowly releases water in spring and summer, when both natural ecosystems and people have the greatest need for water, and is key to the Southwest's hydrology and water supplies. Less snow, and earlier snowmelt, means that both natural and human communities face water shortages. Figure 4 shows projected snow water equivalent (SWE), the amount of water held in a volume of snow, for the Southwestern states, as a percentage of 1971-2000, under the worst-case emissions scenario (RCP 8.5). Declines in peak SWE are strongly correlated with early timing of runoff and decreases in total runoff. For watersheds that depend on snowpack like  the Sierra Nevada, and the Upper Colorado and Upper Rio Grande River basins, lower SWE also translates to reduced reservoir water. The size of bars is proportional to the amount of snow each state contributes to the regional total. <br> <div class=\"snow_water figure\"></div> <br> <strong>Figure 4 legend &#8212;</strong><em>Projected Snow Water Equivalent</em><br> Data from Scripps Institution of Oceanography. Graphic and legend from <a href=\"http://nca2014.globalchange.gov/report/regions/southwest#intro-section-2\">NCA</a></li> </ol>"
}, {
  id: 8,
  title: 'Less precipitation will also contribute to drought stress',
  classId: 'climate-dry',
  orderId: 'h',
  pageId: 'climate',
  detail: " <p><span class=\"avg_precip figure\"> The newest climate change predictions indicate that western forests  will be drier and experience increased drought,  largely driven by increasing temperatures, but also by less precipitation in the winter-spring in the Southwest and a stronger summer drought in the Pacific Northwest.</span> Figure 5 shows anticipated seasonal precipitation change<span class=\"hsContent\" style=\"text-align: left\"> for 2071-2099(compared to 1970-1999)</span>. Under the worst-case scenario (RCP 8.5), <span class=\"hsContent\" style=\"text-align: left\">large reductions in winter and spring precipitation are forecast for the Southwest. Rapid emissions reductions would be required for the modest changes in the best-case scenario (RCP 2.6) <span class=\"hsContent\" style=\"text-align: left\">&#8212; more than 70% cuts from current levels by 2050</span>. Hatched areas indicate that the projected changes are significant and consistent among models. White areas indicate that the changes are not projected to be larger than could be expected from natural variability.</span></p> <div class=\"avg_precip figure\"><br> </div> <div class=\"precip-change figure\"></div><br> <strong>Figure 5 Legend &#8212;</strong> Seasonal precipitation change.    Figure source: NOAA NCDC / CICS-NC. Graph and legend from <a href=\"http://nca2014.globalchange.gov/report/our-changing-climate/precipitation-change\">NCA</a></p>"
    
}, {
  id: 9,
  title: 'These changes in climate will lead to higher-than-normal rates of tree mortality, and reduction of forest areas.',
  classId: 'climate-mortality',
  orderId: 'i',
  detail: " <p><strong><em>Climate,  Fire, and Insects. </em></strong>The above changes in climate are already causing changes in  patterns of wildfires and insect outbreaks8, 18, and will continue  to do so16. Wildfires are a natural part of all forest ecosystems, but  they have been suppressed in western forests for the better part of a century,  leading to increased fuel loads. At the same time, warmer and drier conditions  have led to an increase in the number, extent, and intensity of wildfires in  western U.S. forests since the 1970s15, 18. Higher temperatures and  drought stress are also contributing to outbreaks of beetles that are  increased pine mortality7,8,13,16.</p> <p>Recently, the NCA summarized how these factors will likely  influence western U. S. forests: higher temperatures and drought stress subject  trees to enhanced risk of mortality either from physiological stress, fire, or by  making them vulnerable to insect and pathogen attack. Figure 6        illustrates this expectation via a conceptual climate envelope analysis. As conditions become drier, either through increased temperatures or decreased precipitation (or both), forests reach a critical  threshold beyond which the climatic conditions are no longer suitable for their success.  </p> <div class=\"forest-vulnerable figure\"></div> <p><strong>Figure 7 Legend &#8212; </strong><em>Forest Vulnerability to Changing Climate</em> <super></super>Figure source: Allen et al. 2010<super>2</super>. Graphic from <a href=\"http://nca2014.globalchange.gov/report/sectors/forests\">NCA</a></p>"
}, {
  id: 10,
  title: 'Connecting the dots: from emissions of greenhouse gasses to loss of Western U.S. forests',
  classId: 'climate-precip',
  orderId: 'j',
  pageId: 'climate',
  detail: " <p>With  increased  concentrations of greenhouse gas emissions will come warmer temperatures and  drought. These changes will put western forests  increasingly  at risk of higher-than-normal rates of tree mortality, and ultimately, reduction of the area  that is climatically-suitable for forests. For many tree species, the most climatically-suitable  areas will shift from their current locations, increasing vulnerability to  insects, disease, and fire in areas that become unsuitable. [Add a figure that shows the dots connected: greenhouse gas emisions -&gt; climate change -&gt; forest loss]</p> <p>[bottom of the pretty picture page should have a button to &quot;forest loss&quot;]</p>"
}, {
  id: 11,
  title: 'Citations',
  classId: 'climate-cite',
  orderId: 'k',
  pageId: 'climate',
  detail: " <ol style=\"text-align: left;\"> <li>Allen, C. D. et al. 2010. A global overview of drought and heat-induced tree mortality reveals emerging climate change risks for forests. For. Ecol. Manage 259: 660–684.</li><br> <li>van Mantgem, P. J. et al. 2009. Widespread increase of tree mortality rates in the western United States. Science 323:521–524.</li><br> <li>Breshears, D. D. et al. 2005. Regional vegetation die-off in response to global-change-type drought. Proc. Natl. Acad. Sci. USA 102: 144–148.</li><br> <li>McDowell, N. G., D. J. Beerling, D. D. Breshears, R. A. Fisher, K. F. Raffa, and M. Stitt. 2011. The interdependence of mechanisms underlying climate-driven vegetation mortality. Trends Ecol. Evol. 26: 523–532, doi:10.1016/j.tree.2011.06.003.</li><br> <li>Williams AP, Allen CD, Macalady AK, Woodhouse C, Meko D, Allen CD, Swetnam TW, Cook ER, Griffin D, Rauscher SA, Seager R, Dean J, Grissino-Mayer H, Gangodagamage C, Cai M, McDowell N. 2013. Temperature as a potent driver of regional forest-drought stress and tree mortality. Nature Climate Change 3: 292–297.</li><br> <li>Adams, H. D. et al. 2009. Temperature sensitivity of drought-induced tree mortality portends increased regional die-off under global change-type drought. Proc. Natl. Acad. Sci. USA 106: 7063-7066.</li><br> <li>Bentz, B. J. et al. 2010. Climate change and bark beetles of the western United States and Canada: direct and indirect effects. Bioscience 60: 602-613.</li><br> <li>Williams, A. P., et al. 2010. Forest responses to increasing aridity and warmth in the southwestern United States. Proc. Natl. Acad. Sci. USA 107: 21298-21294.</li><br> <li>Notaro, M., A. Mauss, and J. W. Williams. 2012. Projected vegetation changes for the American Southwest: combined dynamic modeling and bioclimatic-envelope approach. Ecological Applications 22(4): 1365-1388.</li><br> <li>Diffenbaugh, N. S., F. Giorgi, and J. S. Pal. 2008. Climate change hotspots in the United States. Geophsyical Research Letters 35.</li><br> <li>Garfin, G., A. Jardine, R. Merideth, M. Blackm and S. LeRoy, eds. 2013. Assessment of Climate Change in the Southwest United States: A Report Prepared for the National Climate Assessment. Island Press, Washington, D.C.</li><br> <li>Cook, B. I. and R. Seager. 2013. The response of the North American monsoon to increased greenhouse gas forcing. Journal of Climate 118(4).</li><br> <li>Raffa, K. F. et al. 2008. Cross-scale drivers of natural disturbances prone to anthropogenic amplification: the dynamics of bark beetle eruptions. BioScience 58: 501-517.</li><br> <li>Seager, R. et al. 2007. Model projections of an imminent transition to a more arid climate in southwestern North America. Science 316: 1181-1184.</li><br> <li>Westerling, A. L., H. G. Hidalgo, D. R. Cayan, and T. W. Swetnam. 2006. Warming and earlier spring increase western U. S. forest wildfire activity. Science 313:940-943.</li><br> <li>Westerling, A. L., M. G. Turner, E. A. H. Smithwick, W. H. Romme, M. G. Ryan. 2011. Continued warming could transform Greater Yellowstone fire regimes by mid-21st century. Proc. Natl. Acad. Sci. USA 108: 13165-13170.</li><br> <li>Gaylord, M. L., T. E. Kolb, W. T. Pockman, J. A. Plaut, E. Y. Yepez, A. K. Macalady, R. E. Pangle, and N. G. McDowell. 2013. Drought predisposes pinon-juniper woodlands to insect attacks and mortality. New Phytologist 198: 567-578.</li><br< <li>Stephens, S. L., J. K. Agee, P. Z. Fule, M. P. North, T. W. Swetnam, and M. G. Turner. 2013. Managing forests and fire in changing climates. Science 342:41-42.</li> </ol>"
}, {
  id: 12,
  title: 'Science Summary',
  classId: 'summary',
  orderId: 'l',
  pageId: 'forest',
  detail: "<h3>Societal choices for greenhouse gas emissions will impact our Western forests, including what our landscapes and backyards will look like. Here we offer science-based visualization tools and data summaries to illustrate what consequences these choices might have on our forests.</h3>"
}, {
  id: 13,
  title: 'The Western U.S. will see a loss of forests, but how much will depend on our choices',
  classId: 'cover-change',
  orderId: 'm',
  pageId: 'forest',
  detail: " <p>Forest loss will be influenced by the pace of greenhouse gas emissions. The worst-case emissions scenario (RCP 8.5) will reduce the area climatically suitable for dominant forest species by up to 40% (Figure 1, red line). In contrast, the best-case climate change scenario (RCP 2.6) will reduce the area suitable for these species by only 15-20% (Figure 1, blue line).</p> <div class=\"forest-cover figure\"></div> <p><strong>Figure 1 Legend &#8212;</strong> Change through time in the area climatically-suitable for 52 Western U.S. tree species.  </p>"
}, {
  id: 14,
  title: 'This forest loss is dramatic enough to be visible from space',
  classId: 'forest-loss',
  orderId: 'n',
  pageId: 'forest',
  detail: " <p>The area climatically-suitable for nine dominant species in the state of Colorado is shown from the perspective of the upper atmosphere. The loss of forested area is most striking by comparing the current distribution  to the worst-case climate change scenario (RCP 8.5). Less forest cover is lost under the best-case climate change scenario (RCP 2.6). These images are derived from the Outerra climate change simulator.</p> <div class=\"col-md-4\"> <h3>Current</h3> <div class=\"atmo-current figure\"></div></div> <div class=\"col-md-4\"> <h3>Best-case climate change</h3> <div class=\"atmo-rcp26 figure\"></div></div> <div class=\"col-md-4\"> <h3>Worst-case climate change</h3> <div class=\"atmo-rcp85 figure\"></div></div>"
}, {
  id: 15,
  title: 'Forest loss will also be visible at a local scale...',
  classId: 'summary-impacts',
  orderId: 'o',
  pageId: 'forest',
  detail: "  <p>Forest loss caused by changing climate will affect what our backyards and landscapes look like. Here we offer current vs. future views of three locations in the western U. S. under the best-case climate scenario(RCP 2.6) vs. the worst-case climate change scenario(RCP 8.5). These views were generated by the Outerra climate change simulator.</p> <p>Aspen</p> <p>Mt. Lemmon</p> <p>Crested Butte</p> <div class=\"row\"> <div class=\"col-md-4\"> <h3>Current</h3> <div class=\"aspen-current\"></div> </div> <div class=\"col-md-4\"> <h3>Best-case climate change</h3> <div class=\"aspen26\"></div> </div> <div class=\"col-md-4\"> <h3>Worst-case climate change</h3> <div class=\"aspen85\"></div> </div> </div> <p>&nbsp;</p> <div class=\"movie1\"></div> <p><strong>Movie 1 Legend &#8212;</strong>View of Aspen CO, looking South, with predicted change in the climatic suitability of the landscape for aspen trees (Populus tremuloides) through time. These animations use our Future Forest Distribution Model to show what happens to the climate conditions aspen requires to be successful at 10-year intervals &#8212; from the current climate to future climates ending in the year 2081 &#8212; under the best-case emissions scenario vs. the worst-case emissions scenario. Darker green regions on the landscape correspond to good conditions for aspen trees, whereas light green grading into white regions, indicate poor conditions for aspen. In the worst-case climate change scenario, most of the area around Aspen, CO is unlikely to be climatically suitable for aspen trees. However, in the best case scenario the reduction in suitability slows by the end of the century.</p> <div class=\"row\"> <div class=\"col-md-4\"> <div class=\"lemmon-26\"></div> </div> <div class=\"col-md-4\"> <div class=\"lemmon-85\"></div> </div> </div> <p><strong>Figure 8 Legend &#8212;</strong> Projected landscape views of nine dominant Rocky Mountain forest species on the upper elevation slopes of Mt. Lemmon, near Tucson, Arizona. Here, using the Outerra landscape and vegetation visualizing platform, two different climate change scenarios are shown, contrasting the reduction of forested area and shifting the remaining forest at the highest elevation of Mt. Lemmon.</p> <div class=\"row\"> <div class=\"col-md-4\"><a href=\"http//en.wikipedia.org/wiki/Juniperus_osteosperma\"></a> <div class=\"osteo-range\"></div></div></div> "
}, {
  id: 16,
  title: 'Trees predicted to decline include some of the largest, oldest living things on earth, commercially-important species, and high-elevation species',
  classId: 'summary-elev',
  orderId: 'p',
  pageId: 'forest',
  detail: " <p>These  forecasts are supported by large-scale die-offs that we are witnessing today  [lodgepole pine, pinon, aspen].</p> <div class=\"col-md-4\"> <ul style=\"text-align: left\"> <li><h3><a href=\"http://en.wikipedia.org/wiki/Abies_lasiocarpa\">Subalpine fir, <em>Abies lasiocarpa</em></a></h3> <div class=\"abies_range\"></div></li> <li><h3><a href=\"http://en.wikipedia.org/wiki/Picea_engelmannii\">Engelmann Spruce, <em>Picea engelmannii</em></a></h3> <div class=\"eng-range\"></div> </li> <li><h3><a href=\"http:/en.wikipedia.org/wiki/Pinus_contorta\">Lodgepole pine, <em>Pinus contorta</em></a></h3> <div class=\"cont-range\"></div> </li> </ul> </div> <div class=\"col-md-4\"> <ul style=\"text-align: left\"> <li><h3><a href=\"http://en.wikipedia.org/wiki/Pinus_aristata\">Rocky Mountain maple, <em>Acer glabrum</em></a></h3> <div class=\"glab-range\"></div> <li><h3><a href=\"http://en.wikipedia.org/wiki/Pinus_ponderosa\">Ponderosa pine, <em>Pinus ponderosa</em></a></h3> <div class=\"ponderosa-range\"></div> </li> <li><h3><a href=\"http://en.wikipedia.org/wiki/Pinus_jeffreyi\">Jeffrey pine, <em>Pinus jeffreyi</em></a></h3> <div class=\"jeffrey-range\"></div> </li> </ul> </div> <div class=\"col-md-4\"> <ul style=\"text-align: left;\"> <li><h3><a href=\"http://en.wikipedia.org/wiki/Pinus_edulis\">Pinyon pine, <em>Pinus edulis</em></a></h3> <div class=\"pinyon-range\"></div> </li> <li><h3><a href=\"http://en.wikipedia.org/wiki/Douglas_fir\">Douglas-fir, <em>Pseudotsuga menziesii</em></a></h3> <div class=\"menziesii-range\"></div> </li> <li><h3><a href=\"http://en.wikipedia.org/wiki/Tsuga_heterophylla\">Western hemlock, <em>Tsuga heterophylla</em></a></h3> <div class=\"hetero-range\"></div> </li> </ul> <p>&nbsp;</p></div>"
}, {
  id: 17,
  title: 'The area suitable for forests will move up in elevation',
  classId: 'summary-diff',
  orderId: 'q',
  pageId: 'forest',
  detail: " <h3>The speed of this change will be affected by how much greenhouse gases we choose to emit over the next 10-20 years. Figure 3 shows this shift in elevation for one species, aspen. Both panels show aspen's predicted elevation distribution in ten-year time slices (colored lines), from YEAR to YEAR. On the left is the best-case scenario: a noticeable upslope shift during the first decade, that stabilizes by the end of the century. On the right is the  worst-case scenario:  a consistent shift upwards in elevation each decade.</h3> <div class=\"row\"> <div class=\"col-md-4\"> <div class=\"elev26\"></div> </div> <div class=\"col-md-4\"> <div class=\"elev85\"></div> </div> </div> <p><strong>Figure 9 Legend &#8212;</strong> Change in elevation for aspen (<em>Populus tremuloides</em>) under best- vs worst-case scenarios.</p> <div class=\"movie4\"></div> <p><strong>Movie 4 Legend &#8212;</strong> Predicted reduction in the area suitable for Engelmann spruce(<em>Picea engelmannii</em>) through time. The animations use our Future Forest Distribution Model to project suitability through time at 10 year intervals &#8212; from the current climate to future climates ending in the year 2081. This shows conditions under the worst-case, &quot;business-as-usual&quot; emissions scenario. Darker green regions on the landscape correspond to high suitability for Engelmann spruce, while light green and white regions indicate low suitability. Engelmann spruce is predicted to experience a continuous collapse of climatic suitability and hence a shift to increasing higher elevations that cover a smaller and smaller area.</p>"
}, { 
  id: 18,
  title: 'High-elevation forests will likely experience greater loss than other forest types',
  classId: 'range-change',
  orderId: 'r',
  pageId: 'forest',
  detail: " <p>Climate change will lead to a dramatic reduction in the total  area of subalpine forest, but this will be greatly influenced by our greenhouse  gas emissions.  If we continue as we are  (the worst-case scenario), subalpine forests could be reduced in area by  ~ 90%. Controlling greenhouse gas emissions  will reduce those losses, halting them at a lower level.</p> <div class=\"row\"> <div class=\"col-md-offset-2 col-md-4\"> <div class=\"subalpine26\"></div> </div> <div class=\"col-md-4\"> <div class=\"subalpine85\"></div> </div> </div> <p><strong>Figure 4 Legend &#8212;</strong> Change in the area climatically suitable for 11 western tree species characteristic of subalpine forests. Each line represents a different species.(see <em>Methods</em> for which species corresponds to which number.</p> <div class=\"movie2\"></div> <p><strong>Movie 2 Legend &#8212;</strong> Predicted change in climatic suitability for subalpine fir(<em>Abies lasiocarpa</em>) through time. The animationuse our Future Forest Distribution Mode to project suitability through time at 10 year time slices &#8212; from current climate to future projected climate in the year 2081. Two movies are shown, the best-case scenario vs. the worst-case climate scenario. Darker green  regions on the landscape correspond to high suitability for subalpine fir while light green grading into white regions indicate regions of poor suitability. In the worst-case climate change scenario, subalpine fir is predicted to experience a continuous collapse of suitable area.In contrast, under the best-case scenario, the decline of conditions suitable for subalpine fir slows by the end of the century.</p>"
}, {
  id: 19,
  title: 'The lower-elevation forest exotone is also expected to be hit hard',
  classId: 'shift',
  orderId: 's',
  pageId: 'forest',
  detail: " <h3>Certain trees in arid forests of the Southwest and central Rocky Mountains are also expected to experience dramatic declines. Figure 6 shows the change in area that is climatically-suitable for 23 tree species characteristc of arid forests in the western U.S. (Southwest and Rocky Mountain states). Each line  represents a different species. Ponderosa pine (66) and pinyon pine (58)  are some of the species forecast to decline dramatically.</h3> <div class=\"row\"> <div class=\"col-md-offset-2 col-md-4\"> <div class=\"arid26\"></div> </div> <div class=\"col-md-4\"> <div class=\"arid85\"></div> </div> </div> <p><strong>Figure 6 Legend &#8212;</strong> Anything???</p>"
}, {
  id: 20,
  title: 'Deserts and shrublands will expand at the expense of forests',
  classId: 'desert-expansion',
  orderId: 't',
  pageId: 'forest',
  detail: " <p>Our models also predict that certain species characteristic of deserts and arid shrublands will increase  with climate change. However, the rate of expansion will be altered dramatically by choices that we make. Figure 7 shows the change in area that is climatically-suitable for 81 tree species that are characteristic of the major habitat types across the western United States, compared to their present-day area. Controlling greenhouse gas emissions (left-hand panel) will reduce the total area predicted to become suitable for these species (compared to the right-hand panel, the business as usual scenario). These forecasts are supported by similar predictions originating from other scientific studies using very different modeling methods <super>1-3</super>.</p> <div class=\"habitat figure\"></div> <p><strong>Figure 7 Legend &#8212;</strong> Change in the area climatically-suitable for tree species of major habitat types across the Western United States, compared to their present-day area.</p><br> <iframe src=\"//player.vimeo.com/video/99374132\" width=\"500\" height=\"375\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p>&nbsp;</p> <p>A sampling of the shrub and desert species that our modeling efforts suggest are likely to experience increased climatic suiability throughout the West, replacing the climatic conditions for many forest species. </p> <div class=\"row\"> <div class=\" col-md-offset-2 col-md-4\"> <h3><a href=\"http://en.wikipedia.org/wiki/Senegalia_greggii\">Catclaw Acacia, <em>Acacia (Senegalia) greggii</em></a></h3> <div class=\"greggii-range\"></div> </div> <div class=\"col-md-4\"> <h3><a href=\"http://en.wikipedia.org/wiki/Olneya\">Desert Ironwood, <em>Olneya tesota</em></a></h3> <div class=\"tesota-range\"></div> </div> </div> <div class=\"row\"> <div class=\"col-md-offset-2 col-md-4\"> <h3><a href=\"http://en.wikipedia.org/wiki/Quercus_gambelii\">Gambel oak, <em>Quercus gambelii</em></a></h3> <div class=\"gambelii-range\"></div> </div> <div class=\"col-md-4\"> <h3><a href=\"http//en.wikipedia.org/wiki/Juniperus_osteosperma\">Utah Juniper, <em>Juniperus osteosperma</em></a></h3> </div> </div> <p>&nbsp;</p> <p>[not sure where to put this Pinus edulis stuff...]</p> <p><strong>Movie 3 Legend &#8212l</strong> A view of the high-elevation forests of central Colorado, looking west over Summit County Colorado. The ski areas of Keystone and Breckenridge are clearly visible. This animation shows the predicted future expansion of suitable growing conditions for pinyon pine, <em>Pinus edulis</em>, through time. These animations use our Future Forest Distribution Model to prject climatic suitability through time at 10 year intervals &#8212; from the current climate to future climates ending in the year 2081. Under the \"business-as-usual\" climate scenario, high-elevation regions that currently support forest become increasingly more suitable for the more arid-adapted pinyon pine. Darker green coloring on the landscape corresponds to high local suitability, whereas light green and white regions indicate low suitability.</p>"
}, {
  id: 21,
  title: 'Forests in some regions will be hit harder than others',
  classId: 'summary-diff',
  orderId: 'u',
  pageId: 'forest',
  detail: " <h3>Forests of the  Rocky Mountains and Southwestern states (Madrean woodlands) will likely experience the worst declines. Figure 8 shows the change in area predicted to be  suitable for important tree species in each of the different regions of the western United States, relative to their present-day area. Under the worst-case climate change scenario (business as usual), even the forests of the Pacific Northwest are forecast to experience considerable degradation of the climatic conditions required for their success.</h3> <div class=\"region figure\"></div> <p><strong>Figure 8 Legend &#8212;</strong>Change in the area climatically-suitable for important trees in each of the regions of the Western United States, relative to the area they presently occupy.</p>"
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
  detail: "<p>An important ecosystem service provided by forests is that they absorb and store carbon dioxide, thus they play an important role in global climate regulation. On a global scale, forests store almost half of the carbon found in terrestrial ecosystems (Bonan 2008), and may sequester as much as one quarter of humanity's carbon emissions (Pan et al. 2011). Thus forests currently help to slow the pace of climate change.  </p><p> If climate-change induced forest loss is great though, forests may become a net source, contributing to the CO2 problem, rather than a net sink, removing CO2 from the atmosphere (Anderegg et al. 2012 NCC).</p>"
}, {
  id: 30,
  title: 'References',
  classId: 'lost-references',
  orderId: 'ze',
  pageId: 'lost',
  detail: " <ol style=\"text-align: left\"> <li>Jiang, X., S. A. Rauscher, T. D. Ringler, D. M. Lawrence, A. Park Williams, C. D. Allen, A. L. Steiner, D. M. Cai, and N. G. McDowell. 2013. Projected future changes in vegetation in western North America in the twenty-first century. Journal of Climate 26:3671-3687.</li> <li>Notaro, M., A. Mauss, and J. W. Williams. 2012. Projected vegetation changes for the American Southwest: combined dynamic modeling and bioclimatic-envelope approach. Ecological Applications 22: 1365-1388.</li> <li>Rehfeldt, G. E., N. L. Crookston, M. V. Warwell, and J. S. Evans. 2006. Empirical analyses of plant-climate relationships for the western United States. International Journal of Plant Sciences. 167: 1123-1150.</li> <li> Stephens, S. L., J. K. Agee, P. Z. Fule, M. P. North, T. W. Swetnam, and M. G. Turner. 2013. Managing forests and fire in changing climates. Science 342:41-42.</li> <li> Westerling, A. L., H. G. Hidalgo, D. R. Cayan, and T. W. Swetnam. 2006. Warming and earlier spring increase western U. S. forest wildfire activity. Science 313:940-943.</li> <li>Westerling, A. L., M. G. Turner, E. A. H. Smithwick, W. H. Romme, M. G. Ryan. 2011. Continued warming could transform Greater Yellowstone fire regimes by mid-21st century. Proc. Natl. Acad. Sci. USA 108: 13165-13170.</li> <li>Attiwill, P. and D. Binkley, 2013. Exploring the mega-fire reality: a “Forest Ecology and Management” conference. Forest Ecology and Management 294, 1–3 .</li> <li>Boisvenue, C., and S. W. Running, 2010: Simulations show decreasing carbon stocks and potential for carbon emissions in Rocky Mountain forests over the next century. Ecological Applications, 20, 1302-1319, doi:10.1890/09-0504.1.</li> </ol>"
}];
