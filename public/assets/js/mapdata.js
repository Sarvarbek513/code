var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    UZAN: {
      name: "Andijon",
      color: "#caa4ec"
    },
    UZBU: {
      name: "Bukhoro",
      color: "#d7bbef"
    },
    UZFA: {
      name: "Ferghana",
      color: "#cca6ed"
    },
    UZJI: {
      name: "Jizzakh",
      color: "#a861e6"
    },
    UZNG: {
      name: "Namangan",
      color: "#b980ea"
    },
    UZNW: {
      name: "Navoi",
      color: "#a050e5"
    },
    UZQA: {
      name: "Kashkadarya",
      color: "#9021f0"
    },
    UZQR: {
      name: "Karakalpakstan",
      color: "#a050e5"
    },
    UZSA: {
      name: "Samarkand",
      color: "#a861e6"
    },
    UZSI: {
      name: "Sirdaryo",
      color: "#c496ec"
    },
    UZSU: {
      name: "Surkhandarya",
      color: "#a861e6"
    },
    UZTK: {
      name: "Tashkent"
    },
    UZTO: {
      name: "Tashkent",
      color: "#e3d7ed"
    },
    UZXO: {
      name: "Khorezm",
      color: "#a050e5"
    }
  },
  locations: {
    "0": {
      name: "Tashkent",
      lat: "41.316667",
      lng: "69.25"
    }
  },
  labels: {
    UZAN: {
      name: "Andijon",
      parent_id: "UZAN"
    },
    UZBU: {
      name: "Bukhoro",
      parent_id: "UZBU"
    },
    UZFA: {
      name: "Ferghana",
      parent_id: "UZFA"
    },
    UZJI: {
      name: "Jizzakh",
      parent_id: "UZJI"
    },
    UZNG: {
      name: "Namangan",
      parent_id: "UZNG"
    },
    UZNW: {
      name: "Navoi",
      parent_id: "UZNW"
    },
    UZQA: {
      name: "Kashkadarya",
      parent_id: "UZQA"
    },
    UZQR: {
      name: "Karakalpakstan",
      parent_id: "UZQR"
    },
    UZSA: {
      name: "Samarkand",
      parent_id: "UZSA"
    },
    UZSI: {
      name: "Sirdaryo",
      parent_id: "UZSI"
    },
    UZSU: {
      name: "Surkhandarya",
      parent_id: "UZSU"
    },
    UZTK: {
      name: "Tashkent",
      parent_id: "UZTK"
    },
    UZTO: {
      name: "Tashkent",
      parent_id: "UZTO"
    },
    UZXO: {
      name: "Khorezm",
      parent_id: "UZXO"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};