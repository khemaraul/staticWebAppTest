let config = {
    interfaceTexts :{
        headingText : "GHI-OTC Premium Estimator",
    },
    sections: ["", "section 1", "section 2", "section 3", "section 4", ""],
    industryList: ["FMCG/Personal Care", "IT/ITES/Software", "Engineering", "OTHERS", "Electornics and Electricals", "Auto and Auto Ancillaries", "Education", "Construction", "Banking", "Placement", "Consultancy", "Petrochemicals/Refinery", "Chemicals, Fertilizers, Pigments, Explosives", "Agriculture", "hunting and forestry", "Transport/Logistics", "PACKAGING", "Textiles", "Apparels", "Wholesale/Retail Trading", "Metal Mining", "Rubber and Plastic products", "Shipping", "Shipping Agent", "Port Premises", "Construction/Real Estate", "Hospitality", "Waste Management", "Steel", "Pharma", "Alcoholic Beverages", "Non Alcoholic Beverages", "Security", "Financial Services", "Furniture and fittings", "Glass", "Housekeeping", "Paints", "Dairy Products", "Insurance", "Packaged food and confectionery", "Telecom", "Coal Mining", "Paper products", "Sports", "Gems and Jewelry", "Oil and Gas Exploration and production", "Telecom-Equipment", "Power Generation", "LEATHER GOODS/TANNERIES", "STEEL INDUSTRY", "Port Operations and Management", "Aviation", "FMCG", "Construction Equipment", "MEDIA & ENTERTAINMENT", "Publishing", "POWER GENERATION", "TRANSMISSION", "DISTRIBUTION", "Sugar", "PETROCHEMICAL/FERTILIZER", "Computer Hardware", "Edible Oil", "Air Conditioning", "IT/ TELECOM", "Architectural Hardware", "Trusts involved in charity", "PAPER MILL", "Consultants", "PHARMACEUTICAL INDUSTRY", "CEMENT AND CEMENT PRODUCTS", "Lawyers / associations of lawyers", "PACKAGING INDUSTRY", "LOGISTICS", "Textile Industry", "AUTOMOBILE", "Education Industry", "Metals", "MINING", "ENGINEERING WORKSHOP", "HOTEL", "RESTAURANTS"],
    sections: ["Basic Quote Details", "Coverages - Part I", "Coverages - Part II"],
    field: {
            basic_quote_details : [
                {
                    name: "Quote number",
                    dbFieldName: "Quote_Number",
                    format: "text",
                    value: '',
                    required: true,
                    column: 'grid-column: 1/3',
                },
                {
                    name: "Customer city",
                    dbFieldName: "Customer_city",
                    format: "autocomplete",
                    options: ["24 PARAGANA NORTH", "24 PARGANAS SOUTH", "ADILABAD", "AGRA", "AHMEDABAD", "AHMEDNAGAR", "AKOLA", "ALAPPUZHA", "ALIGARH", "ALIPURDUAR", "ALLAHABAD", "ALMORA", "ALWAR", "AMBALA", "AMRAVATI", "AMRELI", "AMRITSAR", "ANAND", "ANANTAPUR", "ANGUL", "ANUGUL", "ARARIA", "ARCOT", "ARKI", "AURANGABAD", "AZAMGARH", "BAGALKOT", "BAGHPAT", "BAHADURGARH", "BAHRAICH", "BALASORE", "BALESHWAR", "BANASKANTHA", "BANGALORE", "BANKURA", "BARABANKI", "BARAMULA", "BARDEZ", "BARDHMAN", "BAREILLY", "BARODA", "BARPETA", "BATHINDA", "BEED", "BEGUSARAI", "BELGAUM", "BELLARY", "BHADOHI", "BHARATPUR", "BHARUCH", "BHAVNAGAR", "BHILWARA", "BHIWANDI", "BHIWANI", "BHOJPUR", "BHOPAL", "BHUBANESHWAR", "BHUJ", "BIDAR", "BIJAPUR", "BIJNOR", "BIKANER", "BILASPUR", "BOKARO", "BOUDH", "BULANDSHAHAR", "BULDHANA", "CACHAR", "CALICUT", "CHAMPA", "CHANDIGARH", "CHANDRAPUR", "CHENGALPATTU", "CHENNAI", "CHIDAMBARANAR TOOTHUKUDI", "CHIKMAGALUR", "CHITRADURGA", "CHITTOOR", "CHITTORGARH", "CHURACHANDPUR", "COCHIN", "COIMBATORE", "COOCHBEHAR", "CUDDALORE", "CUDDAPAH", "CUTTACK", "DADRA AND NAGARHAVELI", "DAHOD", "DAKSHINKANNAD", "DAMAN", "DARJEELING", "DARRANG", "DEHRADUN", "DELHI", "DEOGARH", "DEORIA", "DHAMTARI", "DHANBAD", "DHAR", "DHARMAPURI", "DHARWAD", "DHEMAJI", "DHULE", "DIBRUGARH", "DINDIGUL", "DOHAD", "DURG", "DWARKA", "EASTGODAVARI", "EASTKHASIHILLS", "EASTNIMAR", "EASTSIKKIM", "ERNAKULAM", "ERODE", "FAIZABAD", "FARIDABAD", "FATEHABAD", "FATEHGARH", "FEROZPUR", "GANDHIDHAM", "GANDHINAGAR", "GANJAM", "GAUTAMBUDHNAGAR", "GAYA", "GHAZIABAD", "GOA", "GOALPARA", "GODDA", "GOLAGHAT", "GONDA", "GONDIA", "GONDIYA", "GORAKHPUR", "GREATERNOIDA", "GULBARGA", "GUNTUR", "GURDASPUR", "GURUGRAM", "GUWAHATI", "GWALIOR", "HALDWANI", "HALOL", "HAMIRPUR", "HAPUR", "HARDOI", "HARIDWAR", "HASSAN", "HAVERI", "HAZARIBAGH", "HISAR", "HOOGHLY", "HOSHIARPUR", "HOSUR", "HOWRAH", "HUBLI", "HUGLI-CHINSURAH", "HYDERABAD", "IDUKKI", "IMPHAL", "INDORE", "JABALPUR", "JAINTIAHILLS", "JAIPUR", "JAISALMER", "JALANDHAR", "JALGAON", "JALPAIGURI", "JAMMU", "JAMNAGAR", "JAMSHEDPUR", "JAWAHARNAGAR", "JHAJJAR", "JHALAWAR", "JHANSI", "JHARSUGUDA", "JIND", "JODHPUR", "JORHAT", "JUNAGADH", "KAITHAL", "KAKINADA", "KALAHANDI", "KALYAN", "KAMARAJAR VIRUDHUNAGAR", "KAMRUP", "KANCHEEPURAM", "KANCHIPURAM", "KANGRA", "KANNAD", "KANNUR", "KANPUR", "KANYAKUMARI", "KARBIANGLONG", "KARIMNAGAR", "KARNAL", "KARUR", "KATIHAR", "KAUSHAMBI", "KEONJHAR", "KHAMMAM", "KHANDWA", "KHARGONE", "KHEDA", "KHERI", "KHORDHA", "KOCHI", "KODAGU", "KOLAR", "KOLHAPUR", "KOLKATA", "KOPPAL", "KORAPUT", "KOTA", "KOTTAYAM", "KOZHIKODE", "KRISHNA", "KRISHNAGIRI", "KULLU", "KUNDAIM", "KUNDLI", "KURNOOL", "KURUKSHETRA", "KUTCH", "LAKHIMPUR", "LATUR", "LUCKNOW", "LUDHIANA", "MADURAI", "MAHE", "MAHESANA", "MALAPPURAM", "MALDA", "MANDI", "MANDLA", "MANDSAUR", "MANDYA", "MANGALORE", "MANSA", "MARGAO", "MATHURA", "MEDAK", "MEDCHAL", "MEDINIPUR", "MEERUT", "MEHSANA", "MEWAT", "MIDNAPORE", "MOGA", "MOHALI", "MORADABAD", "MORBI", "MORMUGAO", "MUKTSAR", "MUMBAI", "MURSHIDABAD", "MUZAFFARNAGAR", "MUZAFFARPUR", "MYSORE", "NADIA", "NAGAON", "NAGAPATTINAM", "NAGERCOIL", "NAGPUR", "NAINITAL", "NALGONDA", "NAMAKKAL", "NANDED", "NANDURBAR", "NARSIMHAPUR", "NASHIK", "NAVIMUMBAI", "NAVSARI", "NELLORE", "NILGRIS", "NIZAMABAD", "NOIDA", "OSMANABAD", "PALAKKAD", "PALGHAR", "PALI", "PALWAL", "PANAJI", "PANCHKULA", "PANCHMAHAL", "PANIPAT", "PANJIM", "PANVEL", "PAPUMPARE", "PARBHANI", "PARWANOO", "PASUMPONM THEVAR SIVAGA", "PATHANAMTHITTA", "PATIALA", "PATNA", "PENUKONDA", "PERIYAR ERODE", "PERNEM", "PITHORAGARH", "PONDA", "PORBANDAR", "PRAKASAM", "PRATAPGARH", "PUDUKKOTTAI", "PUNE", "PURI", "PURNIA", "RAEBARELI", "RAICHUR", "RAIGAD", "RAIGARH", "RAIPUR", "RAISEN", "RAJAHMUNDRY", "RAJKOT", "RAJNANDGAON", "RAJSAMAND", "RAMNAGAR", "RAMPUR", "RANCHI", "RANGAREDDI", "RATNAGIRI", "RAYAGADA", "REWARI", "RIBHOI", "ROHINI", "ROHTAK", "ROORKEE", "RUPNAGAR", "SAS NAGAR MOHALI", "SABARKANTHA", "SAGAR", "SAHARANPUR", "SAHARSA", "SALCETE", "SALEM", "SALEM VILLUPURAM", "SAMASTIPUR", "SAMBALPUR", "SANGLI", "SANGRUR", "SASNAGAR MOHALI", "SATARA", "SATNA", "SECUDERABAD", "SERAIKELA", "SHAHJAHANPUR", "SHAJAPUR", "SHILLONG", "SHIMLA", "SHIMOGGA", "SHOLINGANALLUR", "SILVASA", "SINDHUDURG", "SINGHBHUM", "SINGRAULI", "SIRMOUR", "SIROHI", "SIRSA", "SIVAGANGA", "SIVAKASI", "SIWAN", "SOLAN", "SOLAPUR", "SONBHADRA", "SONIPAT", "SOUTHDINAJPUR", "SOUTHDISTRICT", "SRINAGAR", "SULTANPUR", "SUNDERGARH", "SUPAUL", "SURAT", "SURENDRANAGAR", "THANE", "THANJAVUR", "THENI", "THIRUVALLUR", "THIRUVANANTHAPURAM", "THIRUVARUR", "THRISSUR", "TIRUCHIRAPPALLI", "TIRUNELVELI", "TIRUPPUR", "TIRUVALLUR", "TISWADI", "TONK", "TRICHY", "TRIPURA", "TRIVENDRUM", "TUMKUR", "TUTICORIN", "UDAIPUR", "UDHAMPUR", "UDHAMSINGHNAGAR", "UDUPI", "UMRANGSO", "UNA", "UNNAO", "VADODARA", "VALSAD", "VAPI", "VARANASI", "VASAI", "VASCODAGAMA", "VELLORE", "VIJAYWADA", "VILLUPURAM", "VIZAG", "VIZIANAGARAM", "WARDHA", "WASHIM", "WAYANAD", "WESTGODAVARI", "WESTNIMAR", "WESTSINGHBHUM", "YAMUNANAGAR", "YAVATMAL", "ZIRAKPUR"],
                    required: true,
                    column: 'grid-column: 1/3',
                },
                {
                    name: "Sub vertical",
                    dbFieldName: "Sub_Vertical",
                    format: "dropdown",
                    options: ["KRG", "BA-COB", "BA-BBG", "SME-Broking", "SME-Agency", "Geo", "Others", "-"],
                    required: true,
                    column: 'grid-column: 1/3',
                },
                {
                    name: "Premium for add/del of lives",
                    dbFieldName: "PREMIUMFORADDDELOFLIVES",
                    format: "dropdown",
                    options: ["Pro Rata Basis", "Short Period Scale"],
                    required: true,
                    column: 'grid-column: 1/3',
                },
                {
                    name: "Business type",
                    dbFieldName: "Business_Type",
                    format: "dropdown",
                    options: ["New", "Rollover", "Renewal"],
                    required: true,
                    column: 'grid-column: 1/3',
                },
                {
                    name: "Loss Ratio",
                    dbFieldName: "Loss_Ratio",
                    format: "number bounds",
                    value: '',
                    min: 0,
                    max: 500,
                    required: true,
                    column: 'grid-column: 1/2',
                },
                {
                    name: "Claims with IBNR",
                    dbFieldName: "Claims_with_IBNR",
                    format: "number words",
                    value: '',
                    min: 0,
                    max: 10000000,
                    required: true,
                    column: 'grid-column: 2/3',
                },
                {
                    name: "Inception lives",
                    dbFieldName: "Inception_lives",
                    format: "number bounds",
                    value: '',
                    min: 0,
                    max: 500,
                    required: true,
                    column: 'grid-column: 1/2',
                },
                {
                    name: "Family definition",
                    dbFieldName: "Family_Definition",
                    format: "dropdown",
                    options: ["ESC", "ESCP", "EMP"],
                    required: true,
                    column: 'grid-column: 1/3',
                },
                {
                    name: "Self count",
                    dbFieldName: "Self_count",
                    format: "number bounds",
                    value: '',
                    min: 0,
                    max: 500,
                    required: true,
                    column: 'grid-column: 1/2',
                },
                {
                    name: "No. of parents",
                    dbFieldName: "No of Parents",
                    format: "number bounds",
                    value: '',
                    min: 0,
                    max: 500,
                    required: true,
                    column: 'grid-column: 2/3',
                },
                {
                    name: "No. of children",
                    dbFieldName: "No of children",
                    format: "number bounds",
                    value: '',
                    min: 0,
                    max: 500,
                    required: true,
                    column: 'grid-column: 1/2',
                },
                {
                    name: "No. of spouse",
                    dbFieldName: "No of spouse",
                    format: "number bounds",
                    value: '',
                    min: 0,
                    max: 500,
                    required: true,
                    column: 'grid-column: 2/3',
                },
                {
                    name: "Active lives",
                    dbFieldName: "Active_lives",
                    format: "number bounds",
                    value: '',
                    min: 0,
                    max: 500,
                    required: true,
                    column: 'grid-column: 1/2',
                },
                {
                    name: "Weighted avg. lives",
                    dbFieldName: "Weighted_avg_lives",
                    format: "number bounds",
                    value: '',
                    min: 0,
                    max: 500,
                    required: true,
                    column: 'grid-column: 2/3',
                },
                {
                    name: "Average sum insured",
                    dbFieldName: "Sum_Insured",
                    format: "number words",
                    value: '',
                    min: 0,
                    max: 4000000,
                    required: true,
                    column: 'grid-column: 1/2',
                },
            ],
            coverages1 : [
                {
                    name: "Corporate floater flag",
                    dbFieldName: "CORPORATE_FLOATER_FLG",
                    format: "switch",
                    options: ["N","Y"],
                    required: false,
                },
                {
                    name: "Baby day 1 cover",
                    dbFieldName: "Baby_Day_1_Cover",
                    format: "switch",
                    options: ["0","1"],
                    required: false,
                },
                {
                    name: "Health Check-Up",
                    dbFieldName: "Health_Check-Up",
                    format: "switch",
                    options: ["0","1"],
                    required: false,
                },
                {
                    name: "Pre Post Natal Cover",
                    dbFieldName: "Pre_Post_Natal_Cover",
                    format: "switch",
                    options: ["0","1"],
                    required: false,
                },
                {format: 'switch',
                coverType: 'default',
                name: 'Check Applicability IPD <br> External congenital, Internal congenital <br> Terrorism cover, Air ambulance <br> Health assistance, AYUSH treatment',
                checked: true,
                subFields:[
                    {
                        dbFieldName: "CHK_APPLICABILITY_IPD",
                        format: "switch",
                        options: ["N","Y"],
                        required: false,
                    },
                    {
                        dbFieldName: "External_Congenital",
                        format: "switch",
                        options: ["0","1"],
                        required: false,
                    },
                    {
                        dbFieldName: "Internal_Congenital",
                        format: "switch",
                        options: ["0","1"],
                        required: false,
                    },
                    {
                        dbFieldName: "Terrorism_Cover",
                        format: "switch",
                        options: ["0","1"],
                        required: false,
                    },
                    {
                        dbFieldName: "Air_Ambulance",
                        format: "switch",
                        options: ["0","1"],
                        required: false,
                    },
                    {
                        dbFieldName: "Health_Assistance",
                        format: "switch",
                        options: ["0","1"],
                        required: false,
                    },
                    {
                        dbFieldName: "AYUSH_Treatment",
                        format: "switch",
                        options: ["0","1"],
                        required: false,
                    }
                ]
                },
            ],
            default_coverages_1: [
                {
                    name: "Check Applicability OPD",
                    dbFieldName: "CHK_APPLICABILITY_OPD",
                    format: "switch",
                    options: ["N","Y"],
                    required: false,
                },
                {
                    name: "Pre Existing Diseases",
                    dbFieldName: "pre_existing_diseases",
                    format: "switch",
                    options: ["0","1"],
                    required: false,
                },
                {
                    name: "1 Year waiting period waiver",
                    dbFieldName: "one_Year_Waiting_period",
                    format: "switch",
                    options: ["0","1"],
                    required: false,
                },
                {
                    name: "30 Day waiting period waiver",
                    dbFieldName: "thirty_Day_waiting_period",
                    format: "switch",
                    options: ["0","1"],
                    required: false,
                },
                {
                    name: "Co-pay",
                    dbFieldName: "copay",
                    format: "dropdownswitch",
                    options: ["0","1"],
                    required: false,
                    dropdown: {
                        name: "Copay",
                        dbFieldName: "copay_in_percentage",
                        format: "dropdown",
                        options: ["5%", "10%", "15%", "20%", "25%"],
                        disabled: true,
                        required: true,
                    }
                },
                {
                    name: "Parental co-pay",
                    dbFieldName: "parental_copay",
                    format: "dropdownswitch",
                    options: ["0","1"],
                    required: false,
                    dropdown: {
                        name: "Parental copay",
                        dbFieldName: "parental_copay_percentage",
                        format: "dropdown",
                        options: ["5%", "10%", "15%", "20%", "25%"],
                        disabled: true,
                        required: true,
                    }
                },
                {
                    name: "Ambulance cover",
                    dbFieldName: "ambulance_cover",
                    format: "inputswitch",
                    options: ["0","1"],
                    required: false,
                    input: {
                        name: "Ambulance amount",
                        dbFieldName: "ambulance_cover_val",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 600000,
                        disabled: true,
                        required: true,
                    }
                }],
            ageLimit : [
                {
                    name: "0-18",
                    dbFieldName: "age_0to18",
                    format: "input",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                },
                {
                    name: "19-35",
                    dbFieldName: "age_19to35",
                    format: "input",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                },
                {
                    name: "36-45",
                    dbFieldName: "age_36to45",
                    format: "input",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                },
                {
                    name: "46-55",
                    dbFieldName: "age_46to55",
                    format: "input",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                },
                {
                    name: "56-60",
                    dbFieldName: "age_56to60",
                    format: "input",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                },
                {
                    name: "61-65",
                    dbFieldName: "age_61to65",
                    format: "input",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                },
                {
                    name: "66-70",
                    dbFieldName: "age_66to70",
                    format: "input",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                },
                {
                    name: "71-75",
                    dbFieldName: "age_71to75",
                    format: "input",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                },
                {
                    name: "Above 75",
                    dbFieldName: "age_Above_75",
                    format: "input",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                },
                {
                    name: "Total Lives",
                    dbFieldName: "Total_Lives",
                    format: "inputDisabled",
                    // min: 0,
                    // max: 500,
                    disabled: false,
                    required: true,
                }
            ],
            coverages2 : [
                {
                    name: "Maternity Coverage",
                    dbFieldName: "Maternity_Coverage",
                    format: "withswitch",
                    value: '',
                    options: ["NO", "YES"],
                    required: false,
                    metro: {
                                name: "Metro",
                                dbFieldName: "Maternity_Coverage_METRO",
                                format: "number words",
                                value: '',
                                min: 0,
                                max: 600000,
                                required: true,
                                disabled: true,
                            },
                    nonMetro: {
                                name: "Non-Metro",
                                dbFieldName: "Maternity_Coverage_NonMETRO",
                                format: "number words",
                                value: '',
                                min: 0,
                                max: 600000,
                                required: true,
                                disabled: true,
                            }, 
                },{
                    name: "Room Rent",
                    dbFieldName: "room_rent",
                    format: "withswitch",
                    value: '',
                    options: ["NO", "YES"],
                    required: false,
                    metro: {
                                name: "ICU",
                                dbFieldName: "room_rent_icu",
                                format: "number words",
                                value: '',
                                min: 0,
                                max: 600000,
                                required: true,
                                disabled: true,
                            },
                    nonMetro: {
                                name: "Normal",
                                dbFieldName: "room_rent_normal",
                                format: "number words",
                                value: '',
                                min: 0,
                                max: 600000,
                                required: true,
                                disabled: true,
                            }, 
                },{
                    name: "Eye Related",
                    dbFieldName: "Eye_Related",
                    format: "switch",
                    value: '',
                    options: ["0", "1"],
                    required: false,
                    metro: {
                        name: "Metro",
                        dbFieldName: "Eye_Related_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '25,000',
                        higher_limit: '30,000',
                        lower_limit: '17,000',
                        no_limit: '0',
                    },
                    nonMetro: {
                        name: "Non-Metro",
                        dbFieldName: "Eye_Related_Non_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '22,000',
                        higher_limit: '25,200',
                        lower_limit: '15,000',
                        no_limit: '0',
                    },
                },
                {
                    name: "Hysterectomy",
                    dbFieldName: "Hysterectomy",
                    format: "switch",
                    value: '',
                    options: ["0", "1"],
                    required: false,
                    metro: {
                        name: "Metro",
                        dbFieldName: "Hysterectomy_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 125000,
                        required: true,
                        default_limit: '28,000',
                        higher_limit: '33,600',
                        lower_limit: '20,000',
                        no_limit: '0',
                    },
                    nonMetro: {
                        name: "Non-Metro",
                        dbFieldName: "Hysterectomy_Non_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 125000,
                        required: true,
                        default_limit: '25,000',
                        higher_limit: '28,800',
                        lower_limit: '17,000',
                        no_limit: '0',
                    },
                },
                {
                    name: "Hernia",
                    dbFieldName: "Hernia",
                    format: "switch",
                    value: '',
                    options: ["0", "1"],
                    required: false,
                    metro: {
                        name: "Metro",
                        dbFieldName: "Hernia_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 125000,
                        required: true,
                        default_limit: '20,000',
                        higher_limit: '24,000',
                        lower_limit: '12,000',
                        no_limit: '0',
                    },
                    nonMetro: {
                        name: "Non-Metro",
                        dbFieldName: "Hernia_Non_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 125000,
                        required: true,
                        default_limit: '18,000',
                        higher_limit: '19,200',
                        lower_limit: '10,000',
                        no_limit: '0',
                    },
                },
                {
                    name: "Appendix",
                    dbFieldName: "Appendix",
                    format: "switch",
                    value: '',
                    options: ["0", "1"],
                    required: false,
                    metro: {
                        name: "Metro",
                        dbFieldName: "Appendix_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '20,000',
                        higher_limit: '24,000',
                        lower_limit: '12,000',
                        no_limit: '0',
                    },
                    nonMetro: {
                        name: "Non-Metro",
                        dbFieldName: "Appendix_Non_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '18,000',
                        higher_limit: '19,200',
                        lower_limit: '10,000',
                        no_limit: '0',
                    },
                },
                {
                    name: "Piles",
                    dbFieldName: "Piles",
                    format: "switch",
                    value: '',
                    options: ["0", "1"],
                    required: false,
                    metro: {
                        name: "Metro",
                        dbFieldName: "Piles_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '18,000',
                        higher_limit: '19,200',
                        lower_limit: '10,000',
                        no_limit: '0',
                    },
                    nonMetro: {
                        name: "Non-Metro",
                        dbFieldName: "Piles_Non_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '15,000',
                        higher_limit: '15,600',
                        lower_limit: '7,000',
                        no_limit: '0',
                    },
                },
                {
                    name: "Kidney Stone",
                    dbFieldName: "Kidney_Stone",
                    format: "switch",
                    value: '',
                    options: ["0", "1"],
                    required: false,
                    metro: {
                        name: "Metro",
                        dbFieldName: "Kidney_Stone_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '35,000',
                        higher_limit: '40,000',
                        lower_limit: '30,000',
                        no_limit: '0',
                    },
                    nonMetro: {
                        name: "Non-Metro",
                        dbFieldName: "Kidney_Stone_Non_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '30,000',
                        higher_limit: '35,000',
                        lower_limit: '25,000',
                        no_limit: '0',
                    },
                },
                {
                    name: "Gall Bladder",
                    dbFieldName: "Gall_Bladder_Surgery",
                    format: "switch",
                    value: '',
                    options: ["0", "1"],
                    required: false,
                    metro: {
                        name: "Metro",
                        dbFieldName: "Gall_Bladder_Surgery_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '22,000',
                        higher_limit: '30,000',
                        lower_limit: '15,000',
                        no_limit: '0',
                    },
                    nonMetro: {
                        name: "Non-Metro",
                        dbFieldName: "Gall_Bladder_Surgery_Non_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '22,000',
                        higher_limit: '25,200',
                        lower_limit: '15,000',
                        no_limit: '0',
                    },
                },
                {
                    name: "Hydrocele",
                    dbFieldName: "Hydrocele",
                    format: "switch",
                    value: '',
                    options: ["0", "1"],
                    required: false,
                    metro: {
                        name: "Metro",
                        dbFieldName: "Hydrocele_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '15,000',
                        higher_limit: '18,000',
                        lower_limit: '7,000',
                        no_limit: '0',
                    },
                    nonMetro: {
                        name: "Non-Metro",
                        dbFieldName: "Hydrocele_Non_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 100000,
                        required: true,
                        default_limit: '12,000',
                        higher_limit: '14,400',
                        lower_limit: '5,000',
                        no_limit: '0',
                    },
                },
                {
                    name: "Joint Replacement",
                    dbFieldName: "Joint_Replacement_Including_Vertebral_Joints",
                    format: "switch",
                    value: '',
                    options: ["0", "1"],
                    required: false,
                    metro: {
                        name: "Metro",
                        dbFieldName: "Joint_Replacement_Including_Vertebral_Joints_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 350000,
                        required: true,
                        default_limit: '85,000',
                        higher_limit: '1,02,000',
                        lower_limit: '75,000',
                        no_limit: '0',
                    },
                    nonMetro: {
                        name: "Non-Metro",
                        dbFieldName: "Joint_Replacement_Including_Vertebral_Joints_Non_Metro",
                        format: "number words",
                        value: '',
                        min: 0,
                        max: 350000,
                        required: true,
                        default_limit: '80,000',
                        higher_limit: '90,000',
                        lower_limit: '70,000',
                        no_limit: '0',
                    },
                }
            ],        
        },
        outputSection: {
            section1: {
                name: 'Output 1',
            },
            section2: {
                name: 'Output 2',
            },
            section3: {
                name: 'Underwriter Estimate',
                required: true,
            },
            section4: {
                name : 'remarks',
            },
            section5: {
                name : 'Room Rent',
            },
            section6: {
                name : 'Copay & Parental copay',
            }
        },
        buttons: {
            names : ['submit']
        },
        successMsg: {
            mismatchVal: "Mismatch between Active Lives and Total Lives count. Please check.",
        },
        URLS: {
            //CSP
            // getQuote : 'https://ghifunction.azurewebsites.net/api/ghimodel?',
            // submit: 'https://ghifunction.azurewebsites.net/api/ghifeedback?',
            getQuote : 'https://ghi-prem-2.azurewebsites.net/api/ghimodel?',
            submit: 'https://ghi-prem-2.azurewebsites.net/api/ghifeedback?',
            
            //UAT
            // getQuote : 'https://ghi-otc-uats-function.azurewebsites.net/api/ghimodel?',
            // submit: 'https://ghi-otc-uats-function.azurewebsites.net/api/ghifeedback?',
        },
}