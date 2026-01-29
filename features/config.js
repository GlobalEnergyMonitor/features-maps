var config = {
    // geojson: ['https://publicgemdata.nyc3.cdn.digitaloceanspaces.com/boundries/Africa_955subnational_2025_09_08.geojson', 'https://publicgemdata.nyc3.cdn.digitaloceanspaces.com/boundries/Europe_1063subnational_2025_09_08.geojson',
    //     'https://publicgemdata.nyc3.cdn.digitaloceanspaces.com/boundries/Asia_951subnational_2025_09_08.geojson', 'https://publicgemdata.nyc3.cdn.digitaloceanspaces.com/boundries/Americas_628subnational_2025_09_08.geojson',
    //     'https://publicgemdata.nyc3.cdn.digitaloceanspaces.com/boundries/Oceania_170subnational_2025_09_08.geojson'
    // ],
    // geojson: ['https://publicgemdata.nyc3.cdn.digitaloceanspaces.com/boundries/Oceania_170subnational_2025_09_08.geojson'],
    // geojson: 'https://publicgemdata.nyc3.cdn.digitaloceanspaces.com/boundries/sampled_internal_df_2025-09-09.geojson',


    csv: 'have relevant csv data available', 
    tiles: [
        // 'https://gem.dev.c10e.org/2024-03-12/{z}/{x}/{y}.pbf'
        'https://publicgemdata.nyc3.digitaloceanspaces.com/boundries/subnat-layer-2025-09-05/{z}/{x}/{y}.pbf'
        ],
    tileSourceLayer: 'integrated',


    // geometries: ['Point','MultiPolygon'],
    featuresMap: 'subnat',
    zoomFactor: 1,
    projection: 'globe',

    linkField: 'Other name',//'Other name', // ISO subdivision_code
    nameField: 'Other name', //subnational name
    allCountrySelect: true, 
    countryField: 'GEM Standard Country Name', // rename in file
    searchFields: { 
        'Subnational Name': ['Other name'], 
        'Country': ['GEM Standard Country Name'],
        'Coordinates/Geometry': ['geometry'],
        'Country ISO 3166-1 alpha-3	code': ['Country ISO 3166-1 alpha-3	'],
        'Subregion': ['Sub-region Name']

    },    

    // hover Option, then after waiting a certain time show all info
    detailView: {
        nameField: {'display': 'heading'},

        countryField: {'label': 'Country'},
        countryField: {'label': 'Country'},
        // ISO category_name, ISO subdivision_code, ISO subdivision_name, Latest ISO update, subnational boundaries, subdiv_name_mod

    },

    // /* radius associated with minimum/maximum value on map */
    // minRadius: 2,
    // maxRadius: 10,
    // minLineWidth: 1,
    // maxLineWidth: 10,

    // /* radius to increase min/max to under high zoom */
    // highZoomMinRadius: 4,
    // highZoomMaxRadius: 32,
    // highZoomMinLineWidth: 4,
    // highZoomMaxLineWidth: 32,

    /* radius associated with minimum/maximum value on map */
    minRadius: .8,
    maxRadius: 10,
    // /* radius to increase min/max to under high zoom */
    highZoomMinRadius: 4,
    highZoomMaxRadius: 32,

    minLineWidth: .4,
    maxLineWidth: 7,
    highZoomMinLineWidth: .4,
    highZoomMaxLineWidth: 7,
    // showAllPhases: true
    
    // interpolate: ["cubic-bezier", 0, 0, 0, 1],

};