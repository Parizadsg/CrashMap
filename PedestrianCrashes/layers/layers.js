var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_SaltLakeCo_1 = new ol.format.GeoJSON();
var features_SaltLakeCo_1 = format_SaltLakeCo_1.readFeatures(json_SaltLakeCo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaltLakeCo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaltLakeCo_1.addFeatures(features_SaltLakeCo_1);
var lyr_SaltLakeCo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaltLakeCo_1, 
                style: style_SaltLakeCo_1,
                popuplayertitle: 'SaltLakeCo',
                interactive: false,
                title: '<img src="styles/legend/SaltLakeCo_1.png" /> SaltLakeCo'
            });
var format_CensusTract_SLCo_2 = new ol.format.GeoJSON();
var features_CensusTract_SLCo_2 = format_CensusTract_SLCo_2.readFeatures(json_CensusTract_SLCo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CensusTract_SLCo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CensusTract_SLCo_2.addFeatures(features_CensusTract_SLCo_2);
var lyr_CensusTract_SLCo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CensusTract_SLCo_2, 
                style: style_CensusTract_SLCo_2,
                popuplayertitle: 'CensusTract_SLCo',
                interactive: false,
                title: '<img src="styles/legend/CensusTract_SLCo_2.png" /> CensusTract_SLCo'
            });
var format_Pedestrian_Crashes_2015_3 = new ol.format.GeoJSON();
var features_Pedestrian_Crashes_2015_3 = format_Pedestrian_Crashes_2015_3.readFeatures(json_Pedestrian_Crashes_2015_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crashes_2015_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crashes_2015_3.addFeatures(features_Pedestrian_Crashes_2015_3);
var lyr_Pedestrian_Crashes_2015_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crashes_2015_3, 
                style: style_Pedestrian_Crashes_2015_3,
                popuplayertitle: 'Pedestrian_Crashes_2015',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crashes_2015_3.png" /> Pedestrian_Crashes_2015'
            });
var format_Pedestrian_Crashes_2016_4 = new ol.format.GeoJSON();
var features_Pedestrian_Crashes_2016_4 = format_Pedestrian_Crashes_2016_4.readFeatures(json_Pedestrian_Crashes_2016_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crashes_2016_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crashes_2016_4.addFeatures(features_Pedestrian_Crashes_2016_4);
var lyr_Pedestrian_Crashes_2016_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crashes_2016_4, 
                style: style_Pedestrian_Crashes_2016_4,
                popuplayertitle: 'Pedestrian_Crashes_2016',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crashes_2016_4.png" /> Pedestrian_Crashes_2016'
            });
var format_Pedestrian_Crashes_2017_5 = new ol.format.GeoJSON();
var features_Pedestrian_Crashes_2017_5 = format_Pedestrian_Crashes_2017_5.readFeatures(json_Pedestrian_Crashes_2017_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crashes_2017_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crashes_2017_5.addFeatures(features_Pedestrian_Crashes_2017_5);
var lyr_Pedestrian_Crashes_2017_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crashes_2017_5, 
                style: style_Pedestrian_Crashes_2017_5,
                popuplayertitle: 'Pedestrian_Crashes_2017',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crashes_2017_5.png" /> Pedestrian_Crashes_2017'
            });
var format_Pedestrian_Crashes_2018_6 = new ol.format.GeoJSON();
var features_Pedestrian_Crashes_2018_6 = format_Pedestrian_Crashes_2018_6.readFeatures(json_Pedestrian_Crashes_2018_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crashes_2018_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crashes_2018_6.addFeatures(features_Pedestrian_Crashes_2018_6);
var lyr_Pedestrian_Crashes_2018_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crashes_2018_6, 
                style: style_Pedestrian_Crashes_2018_6,
                popuplayertitle: 'Pedestrian_Crashes_2018',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crashes_2018_6.png" /> Pedestrian_Crashes_2018'
            });
var format_Pedestrian_Crashes_2019_7 = new ol.format.GeoJSON();
var features_Pedestrian_Crashes_2019_7 = format_Pedestrian_Crashes_2019_7.readFeatures(json_Pedestrian_Crashes_2019_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedestrian_Crashes_2019_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedestrian_Crashes_2019_7.addFeatures(features_Pedestrian_Crashes_2019_7);
var lyr_Pedestrian_Crashes_2019_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pedestrian_Crashes_2019_7, 
                style: style_Pedestrian_Crashes_2019_7,
                popuplayertitle: 'Pedestrian_Crashes_2019',
                interactive: true,
                title: '<img src="styles/legend/Pedestrian_Crashes_2019_7.png" /> Pedestrian_Crashes_2019'
            });

lyr_CartoLight_0.setVisible(true);lyr_SaltLakeCo_1.setVisible(true);lyr_CensusTract_SLCo_2.setVisible(true);lyr_Pedestrian_Crashes_2015_3.setVisible(true);lyr_Pedestrian_Crashes_2016_4.setVisible(true);lyr_Pedestrian_Crashes_2017_5.setVisible(true);lyr_Pedestrian_Crashes_2018_6.setVisible(true);lyr_Pedestrian_Crashes_2019_7.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_SaltLakeCo_1,lyr_CensusTract_SLCo_2,lyr_Pedestrian_Crashes_2015_3,lyr_Pedestrian_Crashes_2016_4,lyr_Pedestrian_Crashes_2017_5,lyr_Pedestrian_Crashes_2018_6,lyr_Pedestrian_Crashes_2019_7];
lyr_SaltLakeCo_1.set('fieldAliases', {'COUNTYNBR': 'COUNTYNBR', 'ENTITYNBR': 'ENTITYNBR', 'ENTITYYR': 'ENTITYYR', 'NAME': 'NAME', 'FIPS': 'FIPS', 'STATEPLANE': 'STATEPLANE', 'POP_LASTCE': 'POP_LASTCE', 'POP_CURRES': 'POP_CURRES', 'GlobalID': 'GlobalID', 'FIPS_STR': 'FIPS_STR', 'COLOR4': 'COLOR4', });
lyr_CensusTract_SLCo_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'TRACTCE10': 'TRACTCE10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'FUNCSTAT10': 'FUNCSTAT10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'LOGRECNO': 'LOGRECNO', 'AREALAND': 'AREALAND', 'AREAWATR': 'AREAWATR', 'POP100': 'POP100', 'HU100': 'HU100', 'P0020001': 'P0020001', 'P0020002': 'P0020002', 'P0020003': 'P0020003', 'P0020004': 'P0020004', 'P0020005': 'P0020005', 'P0020006': 'P0020006', 'P0020007': 'P0020007', 'P0020008': 'P0020008', 'P0020009': 'P0020009', 'P0020010': 'P0020010', 'MTFCC': 'MTFCC', 'P0010011': 'P0010011', 'P0010012': 'P0010012', 'P0010013': 'P0010013', 'P0010014': 'P0010014', 'SqMiles': 'SqMiles', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pedestrian_Crashes_2015_3.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_Pedestrian_Crashes_2016_4.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_Pedestrian_Crashes_2017_5.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_Pedestrian_Crashes_2018_6.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_Pedestrian_Crashes_2019_7.set('fieldAliases', {'objectid': 'objectid', 'YEAR': 'YEAR', });
lyr_SaltLakeCo_1.set('fieldImages', {'COUNTYNBR': 'TextEdit', 'ENTITYNBR': 'TextEdit', 'ENTITYYR': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'STATEPLANE': 'TextEdit', 'POP_LASTCE': 'TextEdit', 'POP_CURRES': 'TextEdit', 'GlobalID': 'TextEdit', 'FIPS_STR': 'TextEdit', 'COLOR4': 'Range', });
lyr_CensusTract_SLCo_2.set('fieldImages', {'OBJECTID': 'Range', 'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'TRACTCE10': 'TextEdit', 'GEOID10': 'TextEdit', 'NAME10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'LOGRECNO': 'TextEdit', 'AREALAND': 'TextEdit', 'AREAWATR': 'TextEdit', 'POP100': 'TextEdit', 'HU100': 'TextEdit', 'P0020001': 'TextEdit', 'P0020002': 'TextEdit', 'P0020003': 'TextEdit', 'P0020004': 'TextEdit', 'P0020005': 'TextEdit', 'P0020006': 'TextEdit', 'P0020007': 'TextEdit', 'P0020008': 'TextEdit', 'P0020009': 'TextEdit', 'P0020010': 'TextEdit', 'MTFCC': 'TextEdit', 'P0010011': 'Range', 'P0010012': 'Range', 'P0010013': 'Range', 'P0010014': 'Range', 'SqMiles': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Pedestrian_Crashes_2015_3.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_Pedestrian_Crashes_2016_4.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_Pedestrian_Crashes_2017_5.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_Pedestrian_Crashes_2018_6.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_Pedestrian_Crashes_2019_7.set('fieldImages', {'objectid': 'TextEdit', 'YEAR': 'TextEdit', });
lyr_SaltLakeCo_1.set('fieldLabels', {'COUNTYNBR': 'no label', 'ENTITYNBR': 'no label', 'ENTITYYR': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'STATEPLANE': 'no label', 'POP_LASTCE': 'no label', 'POP_CURRES': 'no label', 'GlobalID': 'no label', 'FIPS_STR': 'no label', 'COLOR4': 'no label', });
lyr_CensusTract_SLCo_2.set('fieldLabels', {'OBJECTID': 'no label', 'STATEFP10': 'no label', 'COUNTYFP10': 'no label', 'TRACTCE10': 'no label', 'GEOID10': 'no label', 'NAME10': 'no label', 'FUNCSTAT10': 'no label', 'INTPTLAT10': 'no label', 'INTPTLON10': 'no label', 'LOGRECNO': 'no label', 'AREALAND': 'no label', 'AREAWATR': 'no label', 'POP100': 'no label', 'HU100': 'no label', 'P0020001': 'no label', 'P0020002': 'no label', 'P0020003': 'no label', 'P0020004': 'no label', 'P0020005': 'no label', 'P0020006': 'no label', 'P0020007': 'no label', 'P0020008': 'no label', 'P0020009': 'no label', 'P0020010': 'no label', 'MTFCC': 'no label', 'P0010011': 'no label', 'P0010012': 'no label', 'P0010013': 'no label', 'P0010014': 'no label', 'SqMiles': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Pedestrian_Crashes_2015_3.set('fieldLabels', {'objectid': 'no label', 'YEAR': 'no label', });
lyr_Pedestrian_Crashes_2016_4.set('fieldLabels', {'objectid': 'no label', 'YEAR': 'no label', });
lyr_Pedestrian_Crashes_2017_5.set('fieldLabels', {'objectid': 'no label', 'YEAR': 'no label', });
lyr_Pedestrian_Crashes_2018_6.set('fieldLabels', {'objectid': 'no label', 'YEAR': 'no label', });
lyr_Pedestrian_Crashes_2019_7.set('fieldLabels', {'objectid': 'no label', 'YEAR': 'no label', });
lyr_Pedestrian_Crashes_2019_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});