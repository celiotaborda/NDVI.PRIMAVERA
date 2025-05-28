ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31981").setExtent([495274.584608, 6711938.126734, 511934.190370, 6721628.483221]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_NDVI2602_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 26-02<br />\
    <img src="styles/legend/NDVI2602_1_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI2602_1_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI2602_1_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI2602_1_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI2602_1_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI2602_1_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2602_1.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI2102_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 21-02<br />\
    <img src="styles/legend/NDVI2102_2_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI2102_2_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI2102_2_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI2102_2_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI2102_2_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI2102_2_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2102_2.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI1102_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 11-02<br />\
    <img src="styles/legend/NDVI1102_3_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI1102_3_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI1102_3_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI1102_3_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI1102_3_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI1102_3_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI1102_3.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI0102_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 01-02<br />\
    <img src="styles/legend/NDVI0102_4_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI0102_4_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI0102_4_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI0102_4_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI0102_4_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI0102_4_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI0102_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6348392.426741, -3467600.280114, -6337706.771713, -3456926.186074]
        })
    });
var lyr_NDVI2201_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 22-01<br />\
    <img src="styles/legend/NDVI2201_5_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI2201_5_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI2201_5_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI2201_5_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI2201_5_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI2201_5_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2201_5.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI1701_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 17-01<br />\
    <img src="styles/legend/NDVI1701_6_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI1701_6_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI1701_6_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI1701_6_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI1701_6_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI1701_6_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI1701_6.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI1201_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 12-01<br />\
    <img src="styles/legend/NDVI1201_7_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI1201_7_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI1201_7_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI1201_7_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI1201_7_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI1201_7_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI1201_7.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI0701_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 07-01<br />\
    <img src="styles/legend/NDVI0701_8_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI0701_8_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI0701_8_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI0701_8_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI0701_8_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI0701_8_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI0701_8.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI0201_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 02-01<br />\
    <img src="styles/legend/NDVI0201_9_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI0201_9_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI0201_9_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI0201_9_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI0201_9_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI0201_9_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI0201_9.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI2812_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 28-12<br />\
    <img src="styles/legend/NDVI2812_10_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI2812_10_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI2812_10_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI2812_10_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI2812_10_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI2812_10_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2812_10.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI2312_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 23-12<br />\
    <img src="styles/legend/NDVI2312_11_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI2312_11_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI2312_11_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI2312_11_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI2312_11_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI2312_11_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2312_11.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI1812_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 18-12<br />\
    <img src="styles/legend/NDVI1812_12_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI1812_12_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI1812_12_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI1812_12_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI1812_12_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI1812_12_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI1812_12.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI1311_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 13-11<br />\
    <img src="styles/legend/NDVI1311_13_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI1311_13_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI1311_13_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI1311_13_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI1311_13_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI1311_13_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI1311_13.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI2910_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 29-10<br />\
    <img src="styles/legend/NDVI2910_14_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI2910_14_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI2910_14_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI2910_14_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI2910_14_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI2910_14_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2910_14.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI1910_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 19-10<br />\
    <img src="styles/legend/NDVI1910_15_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI1910_15_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI1910_15_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI1910_15_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI1910_15_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI1910_15_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI1910_15.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI0410_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 04-10<br />\
    <img src="styles/legend/NDVI0410_16_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI0410_16_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI0410_16_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI0410_16_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI0410_16_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI0410_16_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI0410_16.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI2909_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 29-09<br />\
    <img src="styles/legend/NDVI2909_17_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI2909_17_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI2909_17_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI2909_17_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI2909_17_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI2909_17_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI2909_17.png",
            attributions: ' ',
            projection: 'EPSG:31981',
            alwaysInRange: true,
            imageExtent: [497235.869610, 6712247.784580, 506519.854760, 6721476.695520]
        })
    });
var lyr_NDVI1409_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI 14-09<br />\
    <img src="styles/legend/NDVI1409_18_0.png" /> Água, nuvens densas ou sombra<br />\
    <img src="styles/legend/NDVI1409_18_1.png" /> Solo exposto, áreas urbanas ou rochas<br />\
    <img src="styles/legend/NDVI1409_18_2.png" /> Vegetação esparsa, pastagens degradadas<br />\
    <img src="styles/legend/NDVI1409_18_3.png" /> Vegetação moderada, lavouras em início<br />\
    <img src="styles/legend/NDVI1409_18_4.png" /> Vegetação saudável, desenvolvimento ativo<br />\
    <img src="styles/legend/NDVI1409_18_5.png" /> Vegetação muito densa, floresta ou lavoura vigorosa<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI1409_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-6348392.426741, -3467600.280114, -6337706.771713, -3456926.186074]
        })
    });
var format_IMOVELPRIMAVERAUTM_19 = new ol.format.GeoJSON();
var features_IMOVELPRIMAVERAUTM_19 = format_IMOVELPRIMAVERAUTM_19.readFeatures(json_IMOVELPRIMAVERAUTM_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_IMOVELPRIMAVERAUTM_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IMOVELPRIMAVERAUTM_19.addFeatures(features_IMOVELPRIMAVERAUTM_19);
var lyr_IMOVELPRIMAVERAUTM_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IMOVELPRIMAVERAUTM_19, 
                style: style_IMOVELPRIMAVERAUTM_19,
                popuplayertitle: 'IMOVEL PRIMAVERA UTM',
                interactive: false,
                title: '<img src="styles/legend/IMOVELPRIMAVERAUTM_19.png" /> IMOVEL PRIMAVERA UTM'
            });
var group_NDVI = new ol.layer.Group({
                                layers: [lyr_NDVI2602_1,lyr_NDVI2102_2,lyr_NDVI1102_3,lyr_NDVI0102_4,lyr_NDVI2201_5,lyr_NDVI1701_6,lyr_NDVI1201_7,lyr_NDVI0701_8,lyr_NDVI0201_9,lyr_NDVI2812_10,lyr_NDVI2312_11,lyr_NDVI1812_12,lyr_NDVI1311_13,lyr_NDVI2910_14,lyr_NDVI1910_15,lyr_NDVI0410_16,lyr_NDVI2909_17,lyr_NDVI1409_18,],
                                fold: 'close',
                                title: 'NDVI'});
var group_GNDVI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'GNDVI'});
var group_NDRE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'NDRE'});
var group_NDMI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'NDMI'});
var group_SAVI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'SAVI'});
var group_EVI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'EVI'});

lyr_GoogleHybrid_0.setVisible(true);lyr_NDVI2602_1.setVisible(true);lyr_NDVI2102_2.setVisible(true);lyr_NDVI1102_3.setVisible(true);lyr_NDVI0102_4.setVisible(true);lyr_NDVI2201_5.setVisible(true);lyr_NDVI1701_6.setVisible(true);lyr_NDVI1201_7.setVisible(true);lyr_NDVI0701_8.setVisible(true);lyr_NDVI0201_9.setVisible(true);lyr_NDVI2812_10.setVisible(true);lyr_NDVI2312_11.setVisible(true);lyr_NDVI1812_12.setVisible(true);lyr_NDVI1311_13.setVisible(true);lyr_NDVI2910_14.setVisible(true);lyr_NDVI1910_15.setVisible(true);lyr_NDVI0410_16.setVisible(true);lyr_NDVI2909_17.setVisible(true);lyr_NDVI1409_18.setVisible(true);lyr_IMOVELPRIMAVERAUTM_19.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_NDVI,lyr_IMOVELPRIMAVERAUTM_19];
lyr_IMOVELPRIMAVERAUTM_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'cod_tema': 'cod_tema', 'nom_tema': 'nom_tema', 'cod_imovel': 'cod_imovel', 'mod_fiscal': 'mod_fiscal', 'num_area': 'num_area', 'ind_status': 'ind_status', 'ind_tipo': 'ind_tipo', 'des_condic': 'des_condic', 'municipio': 'municipio', 'cod_estado': 'cod_estado', 'dat_criaca': 'dat_criaca', 'dat_atuali': 'dat_atuali', });
lyr_IMOVELPRIMAVERAUTM_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'cod_tema': 'TextEdit', 'nom_tema': 'TextEdit', 'cod_imovel': 'TextEdit', 'mod_fiscal': 'TextEdit', 'num_area': 'TextEdit', 'ind_status': 'TextEdit', 'ind_tipo': 'TextEdit', 'des_condic': 'TextEdit', 'municipio': 'TextEdit', 'cod_estado': 'TextEdit', 'dat_criaca': 'TextEdit', 'dat_atuali': 'TextEdit', });
lyr_IMOVELPRIMAVERAUTM_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'cod_tema': 'no label', 'nom_tema': 'no label', 'cod_imovel': 'no label', 'mod_fiscal': 'no label', 'num_area': 'no label', 'ind_status': 'no label', 'ind_tipo': 'no label', 'des_condic': 'no label', 'municipio': 'no label', 'cod_estado': 'no label', 'dat_criaca': 'no label', 'dat_atuali': 'no label', });
lyr_IMOVELPRIMAVERAUTM_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});