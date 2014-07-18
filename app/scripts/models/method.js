Forests.Method = DS.Model.extend({
  detail    : DS.attr(),
  detailId  : DS.attr()
});

Forests.Method.FIXTURES = [{
  id: 1,
  detail: '<p>Climatic suitability was modeled using 1) occurrence data derived from the Botanical Information and Ecology Network(<a href="http://bien.nceas.ucsb.edu/bien">BIEN</a>), 2) digital maps of climate, and 3) a statistical model to associate these two types of information.</p>',
  detailId: 'a-intro'
}, {
  id: 2,
  detail: '<p>Occurrence data are records of a species occurring at a particular location, i.e., Latitude and Longitude. They are typically derived from natural history collections (herbarium specimens), but in the case of BIEN, also include the approximate locations of U.S. Forests Service forest inventory plots(<a href="http://www.fia.fs.fed.us">FOrest Inventory and Analysis, FIA</a>), and other published sources of data ( see <a href="http://bien.nceas.ucsb.edu/bien">BEIN</a>). The number of occurrences used per species ranged from 1,324(<i>Juniperus scopulorum</i>) to 14,626(<i>Pseudotsuga menziesii</i>) in our core study species. These sample size reflect the number of data points after eliminating duplicate points falling within the same 1kmx1km grid cell.</p>',
  detailId: 'b-occurrence'
}, {
  id: 3,
  detail: '<p>Two types of digital maps of climate were used - current climate and future climate. Current climate data were used to construct a model of a species\' climatic niche and predict its current geographic distribution. Future climate data were used to predict the species\' geographic distribution under future climates resulting from alternative greenhouse gas emission scenarios - <em>Representative Concentration Pathways</em>(<em>RCP</em>). We projected future distributions under two such scenarios, rcp2.6 and 8.5.</p>',
  detailId: 'c-climate-data'
}, {
  id: 4,
  detail: '<p>For both current and future climate data, we used digital maps fromt the most recent(fifth) assessment report from the Intergovernmental Panel on Climate Change(IPCC AR5), statistically-downscaled and bias-corrected by the U.S. National Aeronautics and Space Administration(<a href="https://portal.nccs.nasa.gov/portal_home/published/NEX.html">NASA</a>) to a resolution of 30 arc-seconds(~1 km<super>2</super>). For all years(1950-2095), we first averaged across a single replicate from each of four <a href="http://www.wikipedia.org/wiki/General_Circulation_Model"><b>General Circulation Model</b></a>(<b>GCM</b>) simulations to obtain monthly precipitation, maximum temperature and minimum temperature data. The four GCMs were CSIRO-Mk3.6.0(from the <em>Cetnre for Australian Weather and CLimate Research), HADGEM2-ES(from the U.K.\'s <em>Hadley Centre for Climate Change</em>), MIROC5(from a consortium of Japanese research institutions), and MPI-ESM-LR(from the <em>Max Planck Institut fur Meteorologie</em>); this selection of GCMs was informed by a recent comparison<super>1</super> of the performance of 17 GCMs at matching historical patterns of the North American monsoon, the U.S. Great Plains low-level jet, and Arctic sea ice). These data represent model simulations that are run as hindcasts for the period 1950-2006, and forecasts for the period 2006-2095.</p>',
  detailId:'d-sources'
}, {
  id: 5,
  detail: '<p>We used these GCM-averaged temperature and precipitation data to calculate the 19 bioclimatic variables(described <a href="http://www.worldclim.org/bioclim">here</a>) for the period 1950-2095. These bioclimatic variables capture aspects of climate expected to be important for the survival, growth, and reproduction of many organisms - mean annual temperature, mean annual precipitation, precipitation in the hottest three months of the year, mean temperature in the coldest three months of the year, etc.</p>',
  detailId: 'e-bioclim'
}, {
  id: 6,
  detail: '<p>Statistical modeling of climatic niches and geographic distribution was conducted using the freely-available algorithm <a href="http://www.cs.princeton.edu/~schapire/maxent"><b>Maxent</b></a><super>2</super>. Maxent employs a maximum entropy method to model a species\' climatic niche; it has performed well in comparisons among competing methods<super>3</super>. Maxent compares the climate where the species is known to uccer against a random sample of the "background" climate - here, all of the contiguous Western United States within the Northern Latitudes 24.06&#176; and 49.94&#176; and Western Longitudes -125.02&#176; and -97.18&#176;. Model parameters that best distinguish the climate where the species is known to occur from the background climate constitude the "climatic niche model". We used all 19 bioclim variables as predictors in Maxent, with the default settings for features and regularization. THe model output(Maxent "raw" probabilities) is a prediction of the relative suitability of each grid cell in the landscape for that species - relatively better vs. worse for that species, with respect to climate. That is, Maxent predicts the relative occurrence rate of a species; it does not predict the species\' probability of occurrence<super>4</super>. This model of the climatic niche was then used to project (forecast) the species\' distribution into the future, using the future climate normals described above.</p>',
  detailId: 'f-modeling'
}, {
  id: 7,
  detail: '<p>We converted predicted current and future relative occurrence rates to an absolute scale by calibrating them against expert maps of each species\' distribution<super>5</super>. We did this in two ways. First, for each species we divided the Maxent raw output scale into four categories that captured cumulatively 5%, 36.7%, 68.3% and 100% of the cells where the species is present, according to the expert range map. This generated a map with four categories, which can be thought of as "not present" vs. low, medium, and high probability of presence (though the true positive rate does not necessarily increase in that order). These are maps shown in the google earth interface. A second set of maps were produced that dichotomized the Maxent raw output into "not present" vs. "present", using the criterion of the lowest overall error rate (including both false positives and false negatives), compared to the expert range maps. These maps were the basis for our analyses of change in area that is "climatically-suitable" per species, per rcp, per forest type, and per habitat type. "Hurricane tracks were calculated from the centroid of the predicted species ranges through time.</p>',
  detailId: 'g-results'
}, {
  id: 8,
  detail: '<h2>Citations</h2>',
  detailId: 'h-cite-title'
}, {
  id: 9,
  detail: '<p style="align-left">1. Sheffield, J, et al 2013. North American Climate in CMIP5 Experiments. Part I: Evaluation of Historical Simulations of Continental and Regional Climatology. Journal of CLimate 26:9209-9245.<br>doi:<a href="http://dx.doi.org/10.1175/JCLI-D-12-00592.1">http://dx.doi.org/10.1175/JCLI-D-12-00592.1</a></p><br>',
  detailId: 'i-cite-1'
}, {
  id: 10,
  detail: '<p>2. Phillips,S.J.,R.P. Anderson, and R.E. Schapire. 2006. Maximum entropy modeling of species geographic distributions. Ecological Modeling 190:231-259.</p><br>',
  detailId: 'j-cite-2'
}, {
  id: 11,
  detail: '<p>3. Elith, J., C. H. Graham, R.P. Anderson, M. Dudik, S. Ferriere, A. Guisan, R.J. Hijmans, F. Huettmann, J.R. Leathwick, A. Lehmann, J. Li, L. G. Lohmann, B.A. Loiselle, G. Manion, C. Moritz, M. Nakamura, Y. Nakazawa, J. McC. Overton, A.T. Peterson, S.J. Phillips, K. Richardson, R.Schachetti-Pereira, R.E. Schapire, J. Soberon, S. Williams, M.S. Wisz, and N.E. Zimmerman. 2006. Nobel methods improve prediction of species\' distributions from occurrence data. Ecography 29:129-151.</p>',
  detailId: 'k-cite-3'
}, {
  id: 12,
  detail: '<p>4. Merow, C., M.J., and J.A. Silander. 2013. A practical guide to MaxEnt for modeling species\' distributions: what it does, and why inputs and settings matter. Ecography 36: 001-012.doi:10.1111/j.1600-0587.2013.07872.x</p><br>',
  detailId: 'l-cite-4'
}, {
  id: 13,
  detail: '<p>5. Citation for Little Maps.</p>',
  detailId: 'm-cite-5'
}

];
