var wms_layers = [];

var format_cb_2018_us_state_500k_0 = new ol.format.GeoJSON();
var features_cb_2018_us_state_500k_0 = format_cb_2018_us_state_500k_0.readFeatures(json_cb_2018_us_state_500k_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cb_2018_us_state_500k_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cb_2018_us_state_500k_0.addFeatures(features_cb_2018_us_state_500k_0);
var lyr_cb_2018_us_state_500k_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cb_2018_us_state_500k_0, 
                style: style_cb_2018_us_state_500k_0,
                popuplayertitle: 'cb_2018_us_state_500k',
                interactive: true,
                title: '<img src="styles/legend/cb_2018_us_state_500k_0.png" /> cb_2018_us_state_500k'
            });
var format_Counties_1 = new ol.format.GeoJSON();
var features_Counties_1 = format_Counties_1.readFeatures(json_Counties_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Counties_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Counties_1.addFeatures(features_Counties_1);
var lyr_Counties_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Counties_1, 
                style: style_Counties_1,
                popuplayertitle: 'Counties',
                interactive: true,
    title: 'Counties<br />\
    <img src="styles/legend/Counties_1_0.png" /> <br />'
        });
var format_dioceses_2 = new ol.format.GeoJSON();
var features_dioceses_2 = format_dioceses_2.readFeatures(json_dioceses_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dioceses_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dioceses_2.addFeatures(features_dioceses_2);
var lyr_dioceses_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dioceses_2, 
                style: style_dioceses_2,
                popuplayertitle: 'dioceses',
                interactive: true,
    title: 'dioceses<br />\
    <img src="styles/legend/dioceses_2_0.png" /> <br />'
        });
var format_CHURCHESINDIANA_3 = new ol.format.GeoJSON();
var features_CHURCHESINDIANA_3 = format_CHURCHESINDIANA_3.readFeatures(json_CHURCHESINDIANA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHURCHESINDIANA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHURCHESINDIANA_3.addFeatures(features_CHURCHESINDIANA_3);
var lyr_CHURCHESINDIANA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHURCHESINDIANA_3, 
                style: style_CHURCHESINDIANA_3,
                popuplayertitle: 'CHURCHESINDIANA',
                interactive: false,
                title: '<img src="styles/legend/CHURCHESINDIANA_3.png" /> CHURCHESINDIANA'
            });

lyr_cb_2018_us_state_500k_0.setVisible(true);lyr_Counties_1.setVisible(true);lyr_dioceses_2.setVisible(true);lyr_CHURCHESINDIANA_3.setVisible(true);
var layersList = [lyr_cb_2018_us_state_500k_0,lyr_Counties_1,lyr_dioceses_2,lyr_CHURCHESINDIANA_3];
lyr_cb_2018_us_state_500k_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_Counties_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'NAME': 'NAME', 'CH PER CAP': 'CH PER CAP', });
lyr_dioceses_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'NAME': 'NAME', 'CH PER CAP': 'CH PER CAP', });
lyr_CHURCHESINDIANA_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'latitude': 'latitude', 'longitude': 'longitude', 'language_n': 'language_n', 'last_updat': 'last_updat', '_address_s': '_address_s', '_address_c': '_address_c', '_address_p': '_address_p', '_address_1': '_address_1', 'DioceseNam': 'DioceseNam', });
lyr_cb_2018_us_state_500k_0.set('fieldImages', {'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_Counties_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'NAME': 'TextEdit', 'CH PER CAP': 'TextEdit', });
lyr_dioceses_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'NAME': 'TextEdit', 'CH PER CAP': 'TextEdit', });
lyr_CHURCHESINDIANA_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'language_n': 'TextEdit', 'last_updat': 'TextEdit', '_address_s': 'TextEdit', '_address_c': 'TextEdit', '_address_p': 'TextEdit', '_address_1': 'TextEdit', 'DioceseNam': 'TextEdit', });
lyr_cb_2018_us_state_500k_0.set('fieldLabels', {'STATEFP': 'no label', 'STATENS': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_Counties_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'NAME': 'no label', 'CH PER CAP': 'no label', });
lyr_dioceses_2.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'NAME': 'no label', 'CH PER CAP': 'no label', });
lyr_CHURCHESINDIANA_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'language_n': 'no label', 'last_updat': 'no label', '_address_s': 'no label', '_address_c': 'no label', '_address_p': 'no label', '_address_1': 'no label', 'DioceseNam': 'no label', });
lyr_CHURCHESINDIANA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});