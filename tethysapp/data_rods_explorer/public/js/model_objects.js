var MODEL_FENCES = {};
var MODEL1_LAYER = null;
var VAR_DICT = new Object();
VAR_DICT["nldas"] = [
    {"text": "Precipitation hourly total (kg/m^2)",
        "value": "APCPsfc"},
    {"text": "Surface DW longwave radiation flux (W/m^2)",
        "value": "DLWRFsfc"},
    {"text": "Surface DW shortwave radiation flux (W/m^2)",
        "value": "DSWRFsfc"},
    //{"text": "Potential evaporation (kg/m^2)",
    //"value": "PEVAPsfc"},
    {"text": "2-m above ground specific humidity (kg/kg)",
        "value": "SPFH2m"},
    {"text": "2-m above ground temperature (K)",
        "value": "TMP2m"},
    //{"text": "10-m above ground zonal wind (m/s)",
    //"value": "UGRD10m"},
    //{"text": "10-m above ground meridional wind (m/s)",
    //"value": "VGRD10m"},
    {"text": "Total evapotranspiration (kg/m^2)",
        "value": "EVPsfc"},
    {"text": "Ground heat flux (w/m^2)",
        "value": "GFLUXsfc"},
    {"text": "Latent heat flux (w/m^2)",
        "value": "LHTFLsfc"},
    {"text": "Sensible heat flux (w/m^2)",
        "value": "SHTFLsfc"},
    {"text": "Surface runoff (non-infiltrating) (kg/m^2)",
        "value": "SSRUNsfc"},
    //{"text": "Subsurface runoff (baseflow) (kg/m^2)",
    //"value": "BGRIUNdfc"},
    {"text": "0-10 cm soil moisture content (kg/m^2)",
        "value": "SOILM0-10cm"},
    {"text": "0-100 cm soil moisture content (kg/m^2)",
        "value": "SOILM0-100cm"},
    {"text": "0-200 cm soil moisture content (kg/m^2)",
        "value": "SOILM0-200cm"},
    {"text": "10-40 cm soil moisture content (kg/m^2)",
        "value": "SOILM10-40cm"},
    {"text": "40-100 cm soil moisture content (kg/m^2)",
        "value": "SOILM40-100cm"},
    {"text": "100-200 cm soil moisture content (kg/m^2)",
        "value": "SOILM100-200cm"},
    {"text": "0-10 cm soil temperature (K)",
        "value": "TSOIL0-10cm"}
];
VAR_DICT["gldas"] = [
    {"text": "Total Evapotranspiration (kg/m^2/s)",
        "value": "Evap"},
    {"text": "Precipitation rate (kg/m^2/hr)",
        "value": "precip"},
    {"text": "Rain rate (kg/m^2/s)",
        "value": "Rainf"},
    {"text": "Snow rate (kg/m^2/s)",
        "value": "Snowf"},
    {"text": "Surface Runoff (kg/m^2/s)",
        "value": "Qs"},
    {"text": "Subsurface Runoff (kg/m^2/s)",
        "value": "Qsb"},
    {"text": "0-100 cm top 1 meter soil moisture content (kg/m^2)",
        "value": "SOILM0-100cm"},
    {"text": "0-10 cm layer 1 soil moisture content (kg/m^2)",
        "value": "SOILM0-10cm"},
    {"text": "10-40 cm layer 2 soil moisture content (kg/m^2)",
        "value": "SOILM10-40cm"},
    {"text": "40-100 cm layer 3 soil moisture content (kg/m^2)",
        "value": "SOILM40-100cm"},
    {"text": "Near surface air temperature (K)",
        "value": "Tair"},
    {"text": "Average layer 1 soil temperature (K)",
        "value": "TSOIL0-10cm"},
    {"text": "Near surface wind magnitude (m/s)",
        "value": "Wind"}
];
VAR_DICT["gldas2"] = [
    {"text": "10-40 cm layer 2 soil moisture content (kg/m^2)",
        "value": "SOILM10_40cm"},
    {"text": "40-100 cm layer 3 soil moisture content (kg/m^2)",
        "value": "SOILM40_100cm"},
    {"text": "100-200 cm layer 4 soil moisture content (kg/m^2)",
        "value": "SOILM100_200cm"}

];
VAR_DICT["trmm"] = [
    {"text": "Precipitation (mm/hr)",
        "value": "precip"}
];

VAR_DICT["grace"] = [
    {"text": "Surface Soil Moisture Percentile",
        "value": "sfsm"},
    {"text": "Root Zone Soil Moisture Percentile",
        "value": "rtzsm"},
    {"text": "Ground Water Percentile",
        "value": "gws"}
];