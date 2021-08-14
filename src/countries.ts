import { Country } from "@/types";

const COUNTRIES: Country[] = [
  { name: "Afghanistan", lat: 33.93911, long: 67.709953, code: "AF" },
  { name: "Albania", lat: 41.153332, long: 20.168331, code: "AL" },
  { name: "Algeria", lat: 28.033886, long: 1.659626, code: "DZ" },
  { name: "American Samoa", lat: -14.270972, long: -170.132217, code: "AS" },
  { name: "Andorra", lat: 42.546245, long: 1.601554, code: "AD" },
  { name: "Angola", lat: -11.202692, long: 17.873887, code: "AO" },
  { name: "Anguilla", lat: 18.220554, long: -63.068615, code: "AI" },
  { name: "Antarctica", lat: -75.250973, long: -0.071389, code: "AQ" },
  { name: "Antigua and Barbuda", lat: 17.060816, long: -61.796428, code: "AG" },
  { name: "Argentina", lat: -38.416097, long: -63.616672, code: "AR" },
  { name: "Armenia", lat: 40.069099, long: 45.038189, code: "AM" },
  { name: "Aruba", lat: 12.52111, long: -69.968338, code: "AW" },
  { name: "Australia", lat: -25.274398, long: 133.775136, code: "AU" },
  { name: "Austria", lat: 47.516231, long: 14.550072, code: "AT" },
  { name: "Azerbaijan", lat: 40.143105, long: 47.576927, code: "AZ" },
  { name: "Bahamas", lat: 25.03428, long: -77.39628, code: "BS" },
  { name: "Bahrain", lat: 25.930414, long: 50.637772, code: "BH" },
  { name: "Bangladesh", lat: 23.684994, long: 90.356331, code: "BD" },
  { name: "Barbados", lat: 13.193887, long: -59.543198, code: "BB" },
  { name: "Belarus", lat: 53.709807, long: 27.953389, code: "BY" },
  { name: "Belgium", lat: 50.503887, long: 4.469936, code: "BE" },
  { name: "Belize", lat: 17.189877, long: -88.49765, code: "BZ" },
  { name: "Benin", lat: 9.30769, long: 2.315834, code: "BJ" },
  { name: "Bermuda", lat: 32.321384, long: -64.75737, code: "BM" },
  { name: "Bhutan", lat: 27.514162, long: 90.433601, code: "BT" },
  { name: "Bolivia", lat: -16.290154, long: -63.588653, code: "BO" },
  { name: "Bosnia", lat: 43.915886, long: 17.679076, code: "BA" },
  { name: "Botswana", lat: -22.328474, long: 24.684866, code: "BW" },
  { name: "Bouvet Island", lat: -54.423199, long: 3.413194, code: "BV" },
  { name: "Brazil", lat: -14.235004, long: -51.92528, code: "BR" },
  {
    name: "British Indian Ocean Territory",
    lat: -6.343194,
    long: 71.876519,
    code: "IO",
  },
  { name: "Brunei", lat: 4.535277, long: 114.727669, code: "BN" },
  { name: "Bulgaria", lat: 42.733883, long: 25.48583, code: "BG" },
  { name: "Burkina Faso", lat: 12.238333, long: -1.561593, code: "BF" },
  { name: "Burundi", lat: -3.373056, long: 29.918886, code: "BI" },
  { name: "Cabo Verde", lat: 16.002082, long: -24.013197, code: "CV" },
  { name: "Cambodia", lat: 12.565679, long: 104.990963, code: "KH" },
  { name: "Cameroon", lat: 7.369722, long: 12.354722, code: "CM" },
  { name: "Canada", lat: 56.130366, long: -106.346771, code: "CA" },
  { name: "Cayman Islands", lat: 19.513469, long: -80.566956, code: "KY" },
  {
    name: "Central African Republic",
    lat: 6.611111,
    long: 20.939444,
    code: "CF",
  },
  { name: "Caribbean Netherlands", lat: 12.2, long: -68.26, code: "BQ" },
  { name: "Chad", lat: 15.454166, long: 18.732207, code: "TD" },
  { name: "Chile", lat: -35.675147, long: -71.542969, code: "CL" },
  { name: "China", lat: 35.86166, long: 104.195397, code: "CN" },
  { name: "Christmas Island", lat: -10.447525, long: 105.690449, code: "CX" },
  {
    name: "Cocos (Keeling) Islands",
    lat: -12.164165,
    long: 96.870956,
    code: "CC",
  },
  { name: "Colombia", lat: 4.570868, long: -74.297333, code: "CO" },
  { name: "Comoros", lat: -11.875001, long: 43.872219, code: "KM" },
  { name: "Congo", lat: -0.228021, long: 15.827659, code: "CG" },
  { name: "DRC", lat: -4.038333, long: 21.758664, code: "CD" },
  { name: "Cook Islands", lat: -21.236736, long: -159.777671, code: "CK" },
  { name: "Costa Rica", lat: 9.748917, long: -83.753428, code: "CR" },
  { name: 'Côte d"Ivoire', lat: 7.539989, long: -5.54708, code: "CI" },
  { name: "Croatia", lat: 45.1, long: 15.2, code: "HR" },
  { name: "Cuba", lat: 21.521757, long: -77.781167, code: "CU" },
  { name: "Curaçao", lat: 12.15, long: -68.97, code: "CW" },
  { name: "Cyprus", lat: 35.126413, long: 33.429859, code: "CY" },
  { name: "Czechia", lat: 49.817492, long: 15.472962, code: "CZ" },
  { name: "Denmark", lat: 56.26392, long: 9.501785, code: "DK" },
  { name: "Djibouti", lat: 11.825138, long: 42.590275, code: "DJ" },
  { name: "Dominica", lat: 15.414999, long: -61.370976, code: "DM" },
  { name: "Dominican Republic", lat: 18.735693, long: -70.162651, code: "DO" },
  { name: "Ecuador", lat: -1.831239, long: -78.183406, code: "EC" },
  { name: "Egypt", lat: 26.820553, long: 30.802498, code: "EG" },
  { name: "El Salvador", lat: 13.794185, long: -88.89653, code: "SV" },
  { name: "Equatorial Guinea", lat: 1.650801, long: 10.267895, code: "GQ" },
  { name: "Eritrea", lat: 15.179384, long: 39.782334, code: "ER" },
  { name: "Estonia", lat: 58.595272, long: 25.013607, code: "EE" },
  { name: "Ethiopia", lat: 9.145, long: 40.489673, code: "ET" },
  {
    name: "Falkland Islands (Malvinas)",
    lat: -51.796253,
    long: -59.523613,
    code: "FK",
  },
  { name: "Faroe Islands", lat: 61.892635, long: -6.911806, code: "FO" },
  { name: "Fiji", lat: -16.578193, long: 179.414413, code: "FJ" },
  { name: "Finland", lat: 61.92411, long: 25.748151, code: "FI" },
  { name: "France", lat: 46.227638, long: 2.213749, code: "FR" },
  { name: "French Guiana", lat: 3.933889, long: -53.125782, code: "GF" },
  { name: "French Polynesia", lat: -17.679742, long: -149.406843, code: "PF" },
  {
    name: "French Southern Territories",
    lat: -49.280366,
    long: 69.348557,
    code: "TF",
  },
  { name: "Gabon", lat: -0.803689, long: 11.609444, code: "GA" },
  { name: "Gambia", lat: 13.443182, long: -15.310139, code: "GM" },
  { name: "Georgia", lat: 42.315407, long: 43.356892, code: "GE" },
  { name: "Germany", lat: 51.165691, long: 10.451526, code: "DE" },
  { name: "Ghana", lat: 7.946527, long: -1.023194, code: "GH" },
  { name: "Gibraltar", lat: 36.137741, long: -5.345374, code: "GI" },
  { name: "Greece", lat: 39.074208, long: 21.824312, code: "GR" },
  { name: "Greenland", lat: 71.706936, long: -42.604303, code: "GL" },
  { name: "Grenada", lat: 12.262776, long: -61.604171, code: "GD" },
  { name: "Guadeloupe", lat: 16.995971, long: -62.067641, code: "GP" },
  { name: "Guam", lat: 13.444304, long: 144.793731, code: "GU" },
  { name: "Guatemala", lat: 15.783471, long: -90.230759, code: "GT" },
  { name: "Guernsey", lat: 49.465691, long: -2.585278, code: "GG" },
  { name: "Guinea", lat: 9.945587, long: -9.696645, code: "GN" },
  { name: "Guinea-Bissau", lat: 11.803749, long: -15.180413, code: "GW" },
  { name: "Guyana", lat: 4.860416, long: -58.93018, code: "GY" },
  { name: "Haiti", lat: 18.971187, long: -72.285215, code: "HT" },
  {
    name: "Heard Island and McDonald Islands",
    lat: -53.08181,
    long: 73.504158,
    code: "HM",
  },
  {
    name: "Holy See (Vatican City State)",
    lat: 41.902916,
    long: 12.453389,
    code: "VA",
  },
  { name: "Honduras", lat: 15.199999, long: -86.241905, code: "HN" },
  { name: "Hong Kong", lat: 22.396428, long: 114.109497, code: "HK" },
  { name: "Hungary", lat: 47.162494, long: 19.503304, code: "HU" },
  { name: "Iceland", lat: 64.963051, long: -19.020835, code: "IS" },
  { name: "India", lat: 20.593684, long: 78.96288, code: "IN" },
  { name: "Indonesia", lat: -0.789275, long: 113.921327, code: "ID" },
  { name: "Iran", lat: 32.427908, long: 53.688046, code: "IR" },
  { name: "Iraq", lat: 33.223191, long: 43.679291, code: "IQ" },
  { name: "Ireland", lat: 53.41291, long: -8.24389, code: "IE" },
  { name: "Isle of Man", lat: 54.236107, long: -4.548056, code: "IM" },
  { name: "Israel", lat: 31.046051, long: 34.851612, code: "IL" },
  { name: "Italy", lat: 41.87194, long: 12.56738, code: "IT" },
  { name: "Jamaica", lat: 18.109581, long: -77.297508, code: "JM" },
  { name: "Japan", lat: 36.204824, long: 138.252924, code: "JP" },
  { name: "Channel Islands", lat: 49.214439, long: -2.13125, code: "JE" },
  { name: "Jordan", lat: 30.585164, long: 36.238414, code: "JO" },
  { name: "Kazakhstan", lat: 48.019573, long: 66.923684, code: "KZ" },
  { name: "Kenya", lat: -0.023559, long: 37.906193, code: "KE" },
  { name: "Kiribati", lat: -3.370417, long: -168.734039, code: "KI" },
  { name: "Kosovo", lat: 42.602636, long: 20.902977, code: "XK" },
  { name: "N. Korea", lat: 40.339852, long: 127.510093, code: "KP" },
  { name: "S. Korea", lat: 35.907757, long: 127.766922, code: "KR" },
  { name: "Kuwait", lat: 29.31166, long: 47.481766, code: "KW" },
  { name: "Kyrgyzstan", lat: 41.20438, long: 74.766098, code: "KG" },
  {
    name: 'Lao People"s Democratic Republic',
    lat: 19.85627,
    long: 102.495496,
    code: "LA",
  },
  { name: "Latvia", lat: 56.879635, long: 24.603189, code: "LV" },
  { name: "Lebanon", lat: 33.854721, long: 35.862285, code: "LB" },
  { name: "Lesotho", lat: -29.609988, long: 28.233608, code: "LS" },
  { name: "Liberia", lat: 6.428055, long: -9.429499, code: "LR" },
  { name: "Libyan Arab Jamahiriya", lat: 26.3351, long: 17.228331, code: "LY" },
  { name: "Liechtenstein", lat: 47.166, long: 9.555373, code: "LI" },
  { name: "Lithuania", lat: 55.169438, long: 23.881275, code: "LT" },
  { name: "Luxembourg", lat: 49.815273, long: 6.129583, code: "LU" },
  { name: "Macao", lat: 22.198745, long: 113.543873, code: "MO" },
  { name: "Macedonia", lat: 41.608635, long: 21.745275, code: "MK" },
  { name: "Madagascar", lat: -18.766947, long: 46.869107, code: "MG" },
  { name: "Malawi", lat: -13.254308, long: 34.301525, code: "MW" },
  { name: "Malaysia", lat: 4.210484, long: 101.975766, code: "MY" },
  { name: "Maldives", lat: 3.202778, long: 73.22068, code: "MV" },
  { name: "Mali", lat: 17.570692, long: -3.996166, code: "ML" },
  { name: "Malta", lat: 35.937496, long: 14.375416, code: "MT" },
  { name: "Marshall Islands", lat: 7.131474, long: 171.184478, code: "MH" },
  { name: "Martinique", lat: 14.641528, long: -61.024174, code: "MQ" },
  { name: "Mauritania", lat: 21.00789, long: -10.940835, code: "MR" },
  { name: "Mauritius", lat: -20.348404, long: 57.552152, code: "MU" },
  { name: "Mayotte", lat: -12.8275, long: 45.166244, code: "YT" },
  { name: "Mexico", lat: 23.634501, long: -102.552784, code: "MX" },
  { name: "Micronesia", lat: 7.425554, long: 150.550812, code: "FM" },
  { name: "Moldova", lat: 47.411631, long: 28.369885, code: "MD" },
  { name: "Monaco", lat: 43.750298, long: 7.412841, code: "MC" },
  { name: "Mongolia", lat: 46.862496, long: 103.846656, code: "MN" },
  { name: "Montenegro", lat: 42.708678, long: 19.37439, code: "ME" },
  { name: "Montserrat", lat: 16.742498, long: -62.187366, code: "MS" },
  { name: "Morocco", lat: 31.791702, long: -7.09262, code: "MA" },
  { name: "Mozambique", lat: -18.665695, long: 35.529562, code: "MZ" },
  { name: "Myanmar", lat: 21.913965, long: 95.956223, code: "MM" },
  { name: "Burma", lat: 22.0, long: 98.0, code: "BU" },
  { name: "Namibia", lat: -22.95764, long: 18.49041, code: "NA" },
  { name: "Nauru", lat: -0.522778, long: 166.931503, code: "NR" },
  { name: "Nepal", lat: 28.394857, long: 84.124008, code: "NP" },
  { name: "Netherlands", lat: 52.132633, long: 5.291266, code: "NL" },
  {
    name: "Netherlands Antilles",
    lat: 12.226079,
    long: -69.060087,
    code: "AN",
  },
  { name: "New Caledonia", lat: -20.904305, long: 165.618042, code: "NC" },
  { name: "New Zealand", lat: -40.900557, long: 174.885971, code: "NZ" },
  { name: "Nicaragua", lat: 12.865416, long: -85.207229, code: "NI" },
  { name: "Niger", lat: 17.607789, long: 8.081666, code: "NE" },
  { name: "Nigeria", lat: 9.081999, long: 8.675277, code: "NG" },
  { name: "Niue", lat: -19.054445, long: -169.867233, code: "NU" },
  { name: "Norfolk Island", lat: -29.040835, long: 167.954712, code: "NF" },
  {
    name: "Northern Mariana Islands",
    lat: 17.33083,
    long: 145.38469,
    code: "MP",
  },
  { name: "Norway", lat: 60.472024, long: 8.468946, code: "NO" },
  { name: "Oman", lat: 21.512583, long: 55.923255, code: "OM" },
  { name: "Pakistan", lat: 30.375321, long: 69.345116, code: "PK" },
  { name: "Palau", lat: 7.51498, long: 134.58252, code: "PW" },
  { name: "Palestine", lat: 31.952162, long: 35.233154, code: "PS" },
  { name: "Panama", lat: 8.537981, long: -80.782127, code: "PA" },
  { name: "Papua New Guinea", lat: -6.314993, long: 143.95555, code: "PG" },
  { name: "Paraguay", lat: -23.442503, long: -58.443832, code: "PY" },
  { name: "Peru", lat: -9.189967, long: -75.015152, code: "PE" },
  { name: "Philippines", lat: 12.879721, long: 121.774017, code: "PH" },
  { name: "Pitcairn", lat: -24.703615, long: -127.439308, code: "PN" },
  { name: "Poland", lat: 51.919438, long: 19.145136, code: "PL" },
  { name: "Portugal", lat: 39.399872, long: -8.224454, code: "PT" },
  { name: "Puerto Rico", lat: 18.220833, long: -66.590149, code: "PR" },
  { name: "Qatar", lat: 25.354826, long: 51.183884, code: "QA" },
  { name: "Réunion", lat: -21.115141, long: 55.536384, code: "RE" },
  { name: "Romania", lat: 45.943161, long: 24.96676, code: "RO" },
  { name: "Russia", lat: 61.52401, long: 105.318756, code: "RU" },
  { name: "Rwanda", lat: -1.940278, long: 29.873888, code: "RW" },
  { name: "St. Barth", lat: 17.89, long: -62.82, code: "BL" },
  { name: "Saint Helena", lat: -24.143474, long: -10.030696, code: "SH" },
  {
    name: "Saint Kitts and Nevis",
    lat: 17.357822,
    long: -62.782998,
    code: "KN",
  },
  { name: "Saint Lucia", lat: 13.909444, long: -60.978893, code: "LC" },
  {
    name: "Saint Pierre Miquelon",
    lat: 46.941936,
    long: -56.27111,
    code: "PM",
  },
  { name: "Saint Martin", lat: 18.11, long: -63.03, code: "MF" },
  { name: "Sint Maarten", lat: 18.02, long: -63.06, code: "SX" },
  {
    name: "Saint Vincent and the Grenadines",
    lat: 12.984305,
    long: -61.287228,
    code: "VC",
  },
  { name: "Samoa", lat: -13.759029, long: -172.104629, code: "WS" },
  { name: "San Marino", lat: 43.94236, long: 12.457777, code: "SM" },
  { name: "Sao Tome and Principe", lat: 0.18636, long: 6.613081, code: "ST" },
  { name: "Saudi Arabia", lat: 23.885942, long: 45.079162, code: "SA" },
  { name: "Senegal", lat: 14.497401, long: -14.452362, code: "SN" },
  { name: "Serbia", lat: 44.016521, long: 21.005859, code: "RS" },
  { name: "Seychelles", lat: -4.679574, long: 55.491977, code: "SC" },
  { name: "Sierra Leone", lat: 8.460555, long: -11.779889, code: "SL" },
  { name: "Singapore", lat: 1.352083, long: 103.819836, code: "SG" },
  { name: "Slovakia", lat: 48.669026, long: 19.699024, code: "SK" },
  { name: "Slovenia", lat: 46.151241, long: 14.995463, code: "SI" },
  { name: "Solomon Islands", lat: -9.64571, long: 160.156194, code: "SB" },
  { name: "Somalia", lat: 5.152149, long: 46.199616, code: "SO" },
  { name: "South Africa", lat: -30.559482, long: 22.937506, code: "ZA" },
  {
    name: "South Georgia and the South Sandwich Islands",
    lat: -54.429579,
    long: -36.587909,
    code: "GS",
  },
  { name: "South Sudan", lat: 6.8769, long: 31.3069, code: "SS" },
  { name: "Spain", lat: 40.463667, long: -3.74922, code: "ES" },
  { name: "Sri Lanka", lat: 7.873054, long: 80.771797, code: "LK" },
  { name: "Sudan", lat: 12.862807, long: 30.217636, code: "SD" },
  { name: "Suriname", lat: 3.919305, long: -56.027783, code: "SR" },
  {
    name: "Svalbard and Jan Mayen",
    lat: 77.553604,
    long: 23.670272,
    code: "SJ",
  },
  { name: "Swaziland", lat: -26.522503, long: 31.465866, code: "SZ" },
  { name: "Sweden", lat: 60.128161, long: 18.643501, code: "SE" },
  { name: "Switzerland", lat: 46.818188, long: 8.227512, code: "CH" },
  { name: "Syrian Arab Republic", lat: 34.802075, long: 38.996815, code: "SY" },
  { name: "Taiwan", lat: 23.69781, long: 120.960515, code: "TW" },
  { name: "Tajikistan", lat: 38.861034, long: 71.276093, code: "TJ" },
  { name: "Tanzania", lat: -6.369028, long: 34.888822, code: "TZ" },
  { name: "Thailand", lat: 15.870032, long: 100.992541, code: "TH" },
  { name: "Timor-Leste", lat: -8.874217, long: 125.727539, code: "TL" },
  { name: "Togo", lat: 8.619543, long: 0.824782, code: "TG" },
  { name: "Tokelau", lat: -8.967363, long: -171.855881, code: "TK" },
  { name: "Tonga", lat: -21.178986, long: -175.198242, code: "TO" },
  { name: "Trinidad and Tobago", lat: 10.691803, long: -61.222503, code: "TT" },
  { name: "Tunisia", lat: 33.886917, long: 9.537499, code: "TN" },
  { name: "Turkey", lat: 38.963745, long: 35.243322, code: "TR" },
  { name: "Turkmenistan", lat: 38.969719, long: 59.556278, code: "TM" },
  {
    name: "Turks and Caicos Islands",
    lat: 21.694025,
    long: -71.797928,
    code: "TC",
  },
  { name: "Tuvalu", lat: -7.109535, long: 177.64933, code: "TV" },
  { name: "Uganda", lat: 1.373333, long: 32.290275, code: "UG" },
  { name: "Ukraine", lat: 48.379433, long: 31.16558, code: "UA" },
  { name: "UAE", lat: 23.424076, long: 53.847818, code: "AE" },
  { name: "UK", lat: 55.378051, long: -3.435973, code: "GB" },
  { name: "USA", lat: 37.09024, long: -95.712891, code: "US" },
  {
    name: "United States Minor Outlying Islands",
    lat: 0.0,
    long: 0.0,
    code: "UM",
  },
  { name: "Uruguay", lat: -32.522779, long: -55.765835, code: "UY" },
  { name: "Uzbekistan", lat: 41.377491, long: 64.585262, code: "UZ" },
  { name: "Vanuatu", lat: -15.376706, long: 166.959158, code: "VU" },
  { name: "Venezuela", lat: 6.42375, long: -66.58973, code: "VE" },
  { name: "Vietnam", lat: 14.058324, long: 108.277199, code: "VN" },
  {
    name: "British Virgin Islands",
    lat: 18.420695,
    long: -64.639968,
    code: "VG",
  },
  { name: "U.S. Virgin Islands", lat: 18.335765, long: -64.896335, code: "VI" },
  { name: "Wallis and Futuna", lat: -13.768752, long: -177.156097, code: "WF" },
  { name: "Western Sahara", lat: 24.215527, long: -12.885834, code: "EH" },
  { name: "Yemen", lat: 15.552727, long: 48.516388, code: "YE" },
  { name: "Zambia", lat: -13.133897, long: 27.849332, code: "ZM" },
  { name: "Zimbabwe", lat: -19.015438, long: 29.154857, code: "ZW" },
];

export function getCountryByCode(code: string): Country | undefined {
  const country = COUNTRIES.find((country) => country.code === code);
  return country;
}
