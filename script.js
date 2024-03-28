(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8EF5F320_8289_7996_41C0_9DC3CE382403"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Kitchen_Corridor",
 "id": "panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE",
 "thumbnailUrl": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B6CE773F_82F7_59EA_41A9_3717C312D0B1",
  "this.overlay_B65F8E01_82F7_2B96_41DA_894F99EB1BB0",
  "this.overlay_B6366B0F_82F6_E9A9_41D1_A43BE8B6182B",
  "this.overlay_B72A9355_8289_39B9_41D5_DA56002298C3",
  "this.overlay_B5DFA8B1_8289_68F9_41DE_2F960C00F610"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Family_Room",
 "id": "panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1",
 "thumbnailUrl": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "x": 543.64,
   "angle": 180.71,
   "class": "PanoramaMapLocation",
   "y": 2029.61
  }
 ],
 "overlays": [
  "this.overlay_B30A5FE2_82F9_289B_41DE_CA0E00654AA5",
  "this.overlay_B0091122_82F9_399A_41D1_07487F19D4FF"
 ]
},
{
 "items": [
  "this.PanoramaPlayListItem_A089392C_8311_9DE9_4183_BA4B9223C4E2",
  {
   "media": "this.panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_camera"
  },
  {
   "media": "this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_camera"
  },
  {
   "media": "this.panorama_8E720317_822A_D546_41CA_4B38C6037BEB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E720317_822A_D546_41CA_4B38C6037BEB_camera"
  },
  "this.PanoramaPlayListItem_A08F692C_8311_9DE9_41C8_27F7445F5144",
  "this.PanoramaPlayListItem_A08C092C_8311_9DE9_41CA_BE5798474390",
  {
   "media": "this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_camera"
  },
  {
   "media": "this.panorama_8EF5F320_8289_7996_41C0_9DC3CE382403",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_camera"
  },
  "this.PanoramaPlayListItem_A08D892C_8311_9DE9_41D3_FC3EDF17B1AF",
  {
   "media": "this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_camera"
  },
  "this.PanoramaPlayListItem_A092792C_8311_9DE9_41D9_154B10B32DB5",
  {
   "media": "this.panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_camera"
  },
  "this.PanoramaPlayListItem_A093892C_8311_9DE9_41C4_F8056E0A6340",
  "this.PanoramaPlayListItem_A090292C_8311_9DE9_41DF_01AC93BAEB70",
  "this.PanoramaPlayListItem_A090B92C_8311_9DE9_41CA_B126EB57F486",
  "this.PanoramaPlayListItem_A091492C_8311_9DE9_41D3_6D8868E3722E"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Bedrooms_Corridor",
 "id": "panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4",
 "thumbnailUrl": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C3059ACA_829B_28AB_41DD_E87F4D258B72",
  "this.overlay_C047C60D_829B_5BAE_41DE_B0EFE89F6303",
  "this.overlay_C1CD57C7_829B_D89A_41DC_0D0AD2CDC176",
  "this.overlay_C14BC346_829B_D99B_41CD_45602DD9C187"
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_A088192C_8311_9DE9_41DA_A0DAADD29583",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Shared_Washroom",
 "id": "panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED",
 "thumbnailUrl": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "x": 3645.57,
   "angle": 84.89,
   "class": "PanoramaMapLocation",
   "y": 1213.94
  }
 ],
 "overlays": [
  "this.overlay_C43D2EB1_8296_E8F6_418B_B3E130504960"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": -95.6,
  "class": "PanoramaCameraPosition",
  "pitch": -3.08
 },
 "id": "camera_A7198985_8311_9C9A_41D7_D9CB015B58EA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": -146.39,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "id": "camera_A72EB96D_8311_9C6B_41BC_63E8240A1B9A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 116,
  "yaw": -74.07,
  "class": "PanoramaCameraPosition",
  "pitch": 5.37
 },
 "id": "camera_A712897B_8311_9C6E_419F_A19B4ACF6626",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": -122.51,
  "class": "PanoramaCameraPosition",
  "pitch": -12.21
 },
 "id": "camera_A0C03950_8311_9DBA_41C0_7848BEDA518B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E482723_8229_3D74_41DC_1FD40CC677AD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Foyer_Washroom",
 "id": "panorama_8E720317_822A_D546_41CA_4B38C6037BEB",
 "thumbnailUrl": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A01A9B45_8289_E99E_41CC_5C2B1AA8A1B1"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": -90.14,
  "class": "PanoramaCameraPosition",
  "pitch": -2.43
 },
 "id": "camera_A73B296F_8311_9C67_41C6_8B4169200808",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Master_Bathroom",
 "id": "panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B",
 "thumbnailUrl": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "x": 1981.88,
   "angle": -89.43,
   "class": "PanoramaMapLocation",
   "y": 1730.17
  }
 ],
 "overlays": [
  "this.overlay_AE5DD100_82FE_F996_41DD_65B5125FD6D9"
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_A088592C_8311_9DE9_41D7_0BB3279205CE",
 "class": "PlayList"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "plan _render_pano",
 "id": "map_95628711_8316_95BA_41D9_FB47885BDD56",
 "thumbnailUrl": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_t.png",
 "width": 4069,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 2058
   },
   {
    "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_lq.png",
    "width": 319,
    "class": "ImageResourceLevel",
    "height": 206,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.16,
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 2617,
 "overlays": [
  "this.overlay_96EB5405_8336_8B9A_4197_BF8F07A111B8",
  "this.overlay_95B8F73B_8332_95EE_41CC_541D7ADAB68B",
  "this.overlay_98A93807_8331_BBA6_41D4_4586E61DB7CF",
  "this.overlay_94CAAA16_833E_BFA6_41B6_DD7F31E05EE5",
  "this.overlay_9A97F854_833E_9BB9_41CF_FC992BD9D18F",
  "this.overlay_9B75C844_833F_9B9A_41D5_741AC78985CC",
  "this.overlay_9B546623_833E_779E_41C9_1E4083758808",
  "this.overlay_9BD8BAA0_833E_BC9A_41BE_982698DF5943",
  "this.overlay_9BC893CD_8331_8CAB_41B0_42734603D7B3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": -129.72,
  "class": "PanoramaCameraPosition",
  "pitch": 2.16
 },
 "id": "camera_A722F964_8311_9D9A_41B4_620B39C509C9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Foyer_Corridor_2",
 "id": "panorama_8E724F33_8229_2D54_41D6_F5B6E106956E",
 "thumbnailUrl": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A67CD5BF_828B_58E9_41B1_EF9B478ABEB4",
  "this.overlay_A7D6F05A_828B_D7AA_41DA_BF4DB9C7C64E",
  "this.overlay_A68ED8F0_828B_2877_41D9_82FC884698BD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 110.11,
  "class": "PanoramaCameraPosition",
  "pitch": -3.17
 },
 "id": "camera_A0F2E93C_8311_9DE9_41D4_A47AF683BB1E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": -137.11,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_A701B96F_8311_9C67_41BD_9F355C03BF14",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Kitchen",
 "id": "panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1",
 "thumbnailUrl": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "x": 1688.08,
   "angle": 0,
   "class": "PanoramaMapLocation",
   "y": 729.42
  }
 ],
 "overlays": [
  "this.overlay_B99B762F_828B_7BE9_41C7_29C23234B8DB",
  "this.overlay_BEE3C375_828B_D87E_41DE_729967A9D2E6",
  "this.overlay_BE2551C1_828B_D899_41D8_CECB5AB6431D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E482723_8229_3D74_41DC_1FD40CC677AD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E720317_822A_D546_41CA_4B38C6037BEB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Foyer_Corridor",
 "id": "panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A",
 "thumbnailUrl": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 131,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A047C851_828B_D7B6_41DF_887F0639BCBA",
  "this.overlay_A10DB682_828B_389A_41D8_CDA81E187D8E",
  "this.overlay_A60426E5_828B_589E_41C6_821216CDB8C2",
  "this.overlay_A029EB1F_828A_E9AA_41CA_A127F40C0E44"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Kitchen_Bar",
 "id": "panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76",
 "thumbnailUrl": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B974B39B_8289_D8A9_41D2_93497762C227",
  "this.overlay_BFF2BA79_8289_2869_41D0_05047795E3D0",
  "this.overlay_BCD8BBFA_8296_E86A_41DA_FC6AB3E4B7FB",
  "this.overlay_BC68D25A_8296_DBAA_41DA_C7B25FFB0274",
  "this.overlay_BD718AAE_8297_28EB_41A7_7BD6FF84A34A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": -107.08,
  "class": "PanoramaCameraPosition",
  "pitch": -0.69
 },
 "id": "camera_A776D98B_8311_9CAE_41C6_CCBC8B3D56C8",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Living_Room",
 "id": "panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192",
 "thumbnailUrl": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "x": 2806.75,
   "angle": 0,
   "class": "PanoramaMapLocation",
   "y": 659.59
  }
 ],
 "overlays": [
  "this.overlay_C2C5F360_829F_F997_41C3_C3CE2FDED598",
  "this.overlay_C23EC865_829E_D799_41D7_F3229A38B0C7",
  "this.overlay_C3C26F03_8299_2999_41D7_98DFABB9944C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 38.75,
  "class": "PanoramaCameraPosition",
  "pitch": -5.42
 },
 "id": "panorama_8E720317_822A_D546_41CA_4B38C6037BEB_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 163.38,
  "class": "PanoramaCameraPosition",
  "pitch": -8.54
 },
 "id": "camera_A0C8F950_8311_9DBA_41D2_D19814925A51",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E720317_822A_D546_41CA_4B38C6037BEB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Foyer",
 "id": "panorama_8E482723_8229_3D74_41DC_1FD40CC677AD",
 "thumbnailUrl": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "x": 1473.16,
   "angle": -0.92,
   "class": "PanoramaMapLocation",
   "y": 1730.17
  }
 ],
 "overlays": [
  "this.overlay_A2FF72B4_829A_F8FF_4186_D3D086C62C0A",
  "this.overlay_A2CEB7C3_8299_7899_41C2_8DD38306725D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 165.77,
  "class": "PanoramaCameraPosition",
  "pitch": -5.05
 },
 "id": "camera_A0FA8946_8311_9DA6_418B_9F679BE4CA19",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Dining_Room",
 "id": "panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B",
 "thumbnailUrl": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "x": 522.11,
   "angle": 174.85,
   "class": "PanoramaMapLocation",
   "y": 1110.76
  }
 ],
 "overlays": [
  "this.overlay_AF585A9F_82FF_E8A9_41BA_CB2DB2335535",
  "this.overlay_ACB32E5B_82FF_2BA9_41D0_358385095F3B",
  "this.overlay_ADD12686_82FF_789A_41D0_91D321C755E0"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_8E482723_8229_3D74_41DC_1FD40CC677AD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_camera"
  },
  {
   "media": "this.panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_camera"
  },
  {
   "media": "this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_camera"
  },
  {
   "media": "this.panorama_8E720317_822A_D546_41CA_4B38C6037BEB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E720317_822A_D546_41CA_4B38C6037BEB_camera"
  },
  {
   "media": "this.panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_camera"
  },
  {
   "media": "this.panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_camera"
  },
  {
   "media": "this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_camera"
  },
  {
   "media": "this.panorama_8EF5F320_8289_7996_41C0_9DC3CE382403",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_camera"
  },
  {
   "media": "this.panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_camera"
  },
  {
   "media": "this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_camera"
  },
  {
   "media": "this.panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_camera"
  },
  {
   "media": "this.panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_camera"
  },
  {
   "media": "this.panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_camera"
  },
  {
   "media": "this.panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_camera"
  },
  {
   "media": "this.panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_camera"
  },
  {
   "media": "this.panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Bedroom_1",
 "id": "panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18",
 "thumbnailUrl": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "x": 3443.33,
   "angle": 94.68,
   "class": "PanoramaMapLocation",
   "y": 1577.57
  }
 ],
 "overlays": [
  "this.overlay_C7BC7669_8299_DB96_41D0_9F2C2015B5E3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 116,
  "yaw": 84.08,
  "class": "PanoramaCameraPosition",
  "pitch": -13.18
 },
 "id": "camera_A76A698B_8311_9CAE_41CE_5DBDDF4B8662",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 116,
  "yaw": 0.56,
  "class": "PanoramaCameraPosition",
  "pitch": -0.77
 },
 "id": "panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Habitable_Attic",
 "id": "panorama_8EF5F320_8289_7996_41C0_9DC3CE382403",
 "thumbnailUrl": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_BBA54BC5_828B_E89E_41D9_F47FCCEA95BA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 29.5,
  "class": "PanoramaCameraPosition",
  "pitch": -1.77
 },
 "id": "panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Master_Bedroom",
 "id": "panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6",
 "thumbnailUrl": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 90,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_95628711_8316_95BA_41D9_FB47885BDD56",
   "x": 2559.43,
   "angle": 180.79,
   "class": "PanoramaMapLocation",
   "y": 1495.73
  }
 ],
 "overlays": [
  "this.overlay_A6771AB3_82F6_E8F9_41CD_2FE6343610CA",
  "this.overlay_A7B18724_82F7_399F_41D2_2AE408EE9DE4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 80,
  "yaw": -69.11,
  "class": "PanoramaCameraPosition",
  "pitch": 4.27
 },
 "id": "camera_A0D4A95B_8311_9DAE_41D2_9827D6E76837",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "right": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "class": "Container",
 "right": "0%",
 "width": 115.05,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 641,
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "left": 30,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "class": "Container",
 "width": 573,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 133,
 "top": 15,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "verticalAlign": "top",
 "borderSize": 0,
 "bottom": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 118,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0.64,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photoalbum"
 },
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "right": "-0.04%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "width": "52.013%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "32.191%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "MapViewer"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.98,
   "image": "this.AnimatedImageResource_C157C88C_8289_28AF_41A8_C91D2AAE74E5",
   "pitch": -28.31,
   "yaw": 163.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6CE773F_82F7_59EA_41A9_3717C312D0B1",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.98,
   "yaw": 163.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.08,
   "image": "this.AnimatedImageResource_C156788C_8289_28AF_41DF_795561E31EAD",
   "pitch": -12.33,
   "yaw": 126.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B65F8E01_82F7_2B96_41DA_894F99EB1BB0",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.08,
   "yaw": 126.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.02,
   "image": "this.AnimatedImageResource_C156A88C_8289_28AF_41C3_168EB1C5D353",
   "pitch": -13.55,
   "yaw": -112.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6366B0F_82F6_E9A9_41D1_A43BE8B6182B",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.02,
   "yaw": -112.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.19,
   "image": "this.AnimatedImageResource_C156D88C_8289_28AF_41CC_CD6FD5C70BFC",
   "pitch": -26.05,
   "yaw": -29.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B72A9355_8289_39B9_41D5_DA56002298C3",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.19,
   "yaw": -29.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.86,
   "image": "this.AnimatedImageResource_C155688C_8289_28AF_41D3_AB5BECC4F6F9",
   "pitch": -16.67,
   "yaw": 0.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B5DFA8B1_8289_68F9_41DE_2F960C00F610",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.86,
   "yaw": 0.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.06,
   "image": "this.AnimatedImageResource_C157688C_8289_28AF_41D1_034B4993876C",
   "pitch": -27.44,
   "yaw": 170.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B, this.camera_A0C03950_8311_9DBA_41C0_7848BEDA518B); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B30A5FE2_82F9_289B_41DE_CA0E00654AA5",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.06,
   "yaw": 170.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.02,
   "image": "this.AnimatedImageResource_C157988C_8289_28AF_41B6_C0FE3447525A",
   "pitch": -13.72,
   "yaw": -149.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B0091122_82F9_399A_41D1_07487F19D4FF",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.02,
   "yaw": -149.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "media": "this.panorama_8E482723_8229_3D74_41DC_1FD40CC677AD",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_A089392C_8311_9DE9_4183_BA4B9223C4E2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_camera",
 "id": "PanoramaPlayListItem_A089392C_8311_9DE9_4183_BA4B9223C4E2"
},
{
 "media": "this.panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_A08F692C_8311_9DE9_41C8_27F7445F5144, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_camera",
 "id": "PanoramaPlayListItem_A08F692C_8311_9DE9_41C8_27F7445F5144"
},
{
 "media": "this.panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_A08C092C_8311_9DE9_41CA_BE5798474390, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_camera",
 "id": "PanoramaPlayListItem_A08C092C_8311_9DE9_41CA_BE5798474390"
},
{
 "media": "this.panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_A08D892C_8311_9DE9_41D3_FC3EDF17B1AF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_camera",
 "id": "PanoramaPlayListItem_A08D892C_8311_9DE9_41D3_FC3EDF17B1AF"
},
{
 "media": "this.panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_A092792C_8311_9DE9_41D9_154B10B32DB5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_camera",
 "id": "PanoramaPlayListItem_A092792C_8311_9DE9_41D9_154B10B32DB5"
},
{
 "media": "this.panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_A093892C_8311_9DE9_41C4_F8056E0A6340, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_camera",
 "id": "PanoramaPlayListItem_A093892C_8311_9DE9_41C4_F8056E0A6340"
},
{
 "media": "this.panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_A090292C_8311_9DE9_41DF_01AC93BAEB70, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_camera",
 "id": "PanoramaPlayListItem_A090292C_8311_9DE9_41DF_01AC93BAEB70"
},
{
 "media": "this.panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_A090B92C_8311_9DE9_41CA_B126EB57F486, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_camera",
 "id": "PanoramaPlayListItem_A090B92C_8311_9DE9_41CA_B126EB57F486"
},
{
 "media": "this.panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B",
 "end": "this.trigger('tourEnded')",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_A091492C_8311_9DE9_41D3_6D8868E3722E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_camera",
 "id": "PanoramaPlayListItem_A091492C_8311_9DE9_41D3_6D8868E3722E"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.24,
   "image": "this.AnimatedImageResource_CF97FF3D_8297_29EE_4173_425890598C4B",
   "pitch": -35.42,
   "yaw": 16.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C3059ACA_829B_28AB_41DD_E87F4D258B72",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.24,
   "yaw": 16.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.97,
   "image": "this.AnimatedImageResource_CF973F3D_8297_29EE_41A5_8BE12B73DB5F",
   "pitch": -28.47,
   "yaw": -124.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C047C60D_829B_5BAE_41DE_B0EFE89F6303",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.97,
   "yaw": -124.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.27,
   "image": "this.AnimatedImageResource_CF88AF3D_8297_29EE_41AE_A6CDA72619FC",
   "pitch": -6.42,
   "yaw": -161.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76, this.camera_A7198985_8311_9C9A_41D7_D9CB015B58EA); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C1CD57C7_829B_D89A_41DC_0D0AD2CDC176",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.27,
   "yaw": -161.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.42,
   "image": "this.AnimatedImageResource_CF88FF3D_8297_29EE_41DE_41E1EF61562F",
   "pitch": -33.86,
   "yaw": 60.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C14BC346_829B_D99B_41CD_45602DD9C187",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.42,
   "yaw": 60.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.8,
   "image": "this.AnimatedImageResource_CF898F3D_8297_29EE_41C3_7A862700BD46",
   "pitch": -39.07,
   "yaw": -163.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4, this.camera_A72EB96D_8311_9C6B_41BC_63E8240A1B9A); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C43D2EB1_8296_E8F6_418B_B3E130504960",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.8,
   "yaw": -163.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.82,
   "image": "this.AnimatedImageResource_AEB21B59_828F_29A9_41D4_6B4777EAFB59",
   "pitch": -33.17,
   "yaw": -93.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A01A9B45_8289_E99E_41CC_5C2B1AA8A1B1",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.82,
   "yaw": -93.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.13,
   "image": "this.AnimatedImageResource_C154888C_8289_28AF_41DF_D1566804610B",
   "pitch": -26.75,
   "yaw": 162.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AE5DD100_82FE_F996_41DD_65B5125FD6D9",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.13,
   "yaw": 162.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "map": {
  "width": 150.74,
  "x": 1403.83,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 17
    }
   ]
  },
  "offsetY": 0,
  "height": 168.11,
  "y": 1651.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_96EB5405_8336_8B9A_4197_BF8F07A111B8",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1397.79,
  "height": 168.11,
  "y": 1646.11,
  "width": 150.74,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_0.png",
     "width": 118,
     "class": "ImageResourceLevel",
     "height": 132
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 150.74,
  "x": 473.47,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 17
    }
   ]
  },
  "offsetY": 0,
  "height": 168.11,
  "y": 1951.36
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_95B8F73B_8332_95EE_41CC_541D7ADAB68B",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 468.28,
  "height": 168.11,
  "y": 1945.55,
  "width": 150.74,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_1.png",
     "width": 118,
     "class": "ImageResourceLevel",
     "height": 132
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 150.74,
  "x": 452.08,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 17
    }
   ]
  },
  "offsetY": 0,
  "height": 168.11,
  "y": 1031.69
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_98A93807_8331_BBA6_41D4_4586E61DB7CF",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 446.74,
  "height": 168.11,
  "y": 1026.71,
  "width": 150.74,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_2.png",
     "width": 118,
     "class": "ImageResourceLevel",
     "height": 132
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 150.74,
  "x": 1617.71,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 17
    }
   ]
  },
  "offsetY": 0,
  "height": 168.11,
  "y": 652.06
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_94CAAA16_833E_BFA6_41B6_DD7F31E05EE5",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1612.71,
  "height": 168.11,
  "y": 645.37,
  "width": 150.74,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_3.png",
     "width": 118,
     "class": "ImageResourceLevel",
     "height": 132
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 150.74,
  "x": 2731.38,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 17
    }
   ]
  },
  "offsetY": 0,
  "height": 168.11,
  "y": 575.54
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9A97F854_833E_9BB9_41CF_FC992BD9D18F",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2731.38,
  "height": 168.11,
  "y": 575.54,
  "width": 150.74,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_4.png",
     "width": 118,
     "class": "ImageResourceLevel",
     "height": 132
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 150.74,
  "x": 2489.25,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 17
    }
   ]
  },
  "offsetY": 0,
  "height": 168.11,
  "y": 1416.66
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9B75C844_833F_9B9A_41D5_741AC78985CC",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 2484.06,
  "height": 168.11,
  "y": 1411.67,
  "width": 150.74,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_6.png",
     "width": 118,
     "class": "ImageResourceLevel",
     "height": 132
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 150.74,
  "x": 1911.79,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_7_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 17
    }
   ]
  },
  "offsetY": 0,
  "height": 168.11,
  "y": 1651.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9B546623_833E_779E_41C9_1E4083758808",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1906.51,
  "height": 168.11,
  "y": 1646.11,
  "width": 150.74,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_7.png",
     "width": 118,
     "class": "ImageResourceLevel",
     "height": 132
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 186.29,
  "x": 3355.45,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_8_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 164.37,
  "y": 1500.61
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9BD8BAA0_833E_BC9A_41BE_982698DF5943",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 3350.18,
  "height": 164.37,
  "y": 1495.39,
  "width": 186.29,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_8.png",
     "width": 146,
     "class": "ImageResourceLevel",
     "height": 129
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 186.29,
  "x": 3558.64,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_9_map.gif",
     "width": 18,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 164.37,
  "y": 1137.02
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_9BC893CD_8331_8CAB_41B0_42734603D7B3",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 3552.43,
  "height": 164.37,
  "y": 1131.75,
  "width": 186.29,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_95628711_8316_95BA_41D9_FB47885BDD56_HS_9.png",
     "width": 146,
     "class": "ImageResourceLevel",
     "height": 129
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.02,
   "image": "this.AnimatedImageResource_9075C757_82F2_B5A6_41D5_708318999CDB",
   "pitch": -13.72,
   "yaw": -169.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A67CD5BF_828B_58E9_41B1_EF9B478ABEB4",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.02,
   "yaw": -169.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.46,
   "image": "this.AnimatedImageResource_B34E4419_82FB_3FB6_41D0_5B00E72C815F",
   "pitch": -22.75,
   "yaw": -98.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A, this.camera_A712897B_8311_9C6E_419F_A19B4ACF6626); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A7D6F05A_828B_D7AA_41DA_BF4DB9C7C64E",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.46,
   "yaw": -98.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.9,
   "image": "this.AnimatedImageResource_9074D757_82F2_B5A6_41D9_36FFFD267F3D",
   "pitch": -15.98,
   "yaw": 13.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A68ED8F0_828B_2877_41D9_82FC884698BD",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.9,
   "yaw": 13.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.28,
   "image": "this.AnimatedImageResource_C34247C1_8299_D896_41CB_8DF0A5DD7EE9",
   "pitch": -25.01,
   "yaw": -110.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE, this.camera_A0FA8946_8311_9DA6_418B_9F679BE4CA19); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B99B762F_828B_7BE9_41C7_29C23234B8DB",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.28,
   "yaw": -110.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.97,
   "image": "this.AnimatedImageResource_C34587C1_8299_D896_41C5_291183A06F5C",
   "pitch": -28.48,
   "yaw": 119.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76, this.camera_A0F2E93C_8311_9DE9_41D4_A47AF683BB1E); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BEE3C375_828B_D87E_41DE_729967A9D2E6",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.97,
   "yaw": 119.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.23,
   "image": "this.AnimatedImageResource_C345D7C1_8299_D896_41D3_EB4D082938A6",
   "pitch": -7.98,
   "yaw": 86.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BE2551C1_828B_D899_41D8_CECB5AB6431D",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.23,
   "yaw": 86.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.03,
   "image": "this.AnimatedImageResource_AEB09B59_828F_29A9_41CA_FA8B7639C64D",
   "pitch": -28.83,
   "yaw": -173.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A047C851_828B_D7B6_41DF_887F0639BCBA",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.03,
   "yaw": -173.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.55,
   "image": "this.AnimatedImageResource_AEB13B59_828F_29A9_41DC_4177DEF551E1",
   "pitch": -21.54,
   "yaw": -150.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A10DB682_828B_389A_41D8_CDA81E187D8E",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.55,
   "yaw": -150.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.7,
   "image": "this.AnimatedImageResource_AEB1CB59_828F_29A9_41DC_9A2ACF34EFF0",
   "pitch": -19.28,
   "yaw": -75.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A60426E5_828B_589E_41C6_821216CDB8C2",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.7,
   "yaw": -75.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.94,
   "image": "this.AnimatedImageResource_9075A757_82F2_B5A6_419D_EDB02B0AC1BE",
   "pitch": -15.28,
   "yaw": 76.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A029EB1F_828A_E9AA_41CA_A127F40C0E44",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.94,
   "yaw": 76.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.01,
   "image": "this.AnimatedImageResource_C34577C1_8299_D896_41DC_D7AA71A44156",
   "pitch": -13.89,
   "yaw": -84.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1, this.camera_A0D4A95B_8311_9DAE_41D2_9827D6E76837); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B974B39B_8289_D8A9_41D2_93497762C227",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.01,
   "yaw": -84.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.11,
   "image": "this.AnimatedImageResource_C34487C1_8299_D896_41D1_99498D6C04C6",
   "pitch": -11.45,
   "yaw": -99.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE, this.camera_A0C8F950_8311_9DBA_41D2_D19814925A51); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BFF2BA79_8289_2869_41D0_05047795E3D0",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.11,
   "yaw": -99.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.6,
   "image": "this.AnimatedImageResource_9078775A_82F2_B5A9_41CB_52CB226E953B",
   "pitch": -32.12,
   "yaw": -162.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E, this.camera_A722F964_8311_9D9A_41B4_620B39C509C9); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BCD8BBFA_8296_E86A_41DA_FC6AB3E4B7FB",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.6,
   "yaw": -162.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.84,
   "image": "this.AnimatedImageResource_C34407C1_8299_D896_41C1_FBE00C2009A2",
   "pitch": -17.01,
   "yaw": 77.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BC68D25A_8296_DBAA_41DA_C7B25FFB0274",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.84,
   "yaw": 77.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.15,
   "image": "this.AnimatedImageResource_C34797C1_8299_D896_41D7_FB734B5ABC7B",
   "pitch": -10.41,
   "yaw": 108.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BD718AAE_8297_28EB_41A7_7BD6FF84A34A",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.15,
   "yaw": 108.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.57,
   "image": "this.AnimatedImageResource_CF96EF3D_8297_29EE_41DD_D2C0751114B9",
   "pitch": -21.18,
   "yaw": 140.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C2C5F360_829F_F997_41C3_C3CE2FDED598",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.57,
   "yaw": 140.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.17,
   "image": "this.AnimatedImageResource_CF961F3D_8297_29EE_41D1_692A9BDF96CD",
   "pitch": -10.07,
   "yaw": -106.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76, this.camera_A73B296F_8311_9C67_41C6_8B4169200808); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C23EC865_829E_D799_41D7_F3229A38B0C7",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.17,
   "yaw": -106.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.89,
   "image": "this.AnimatedImageResource_CF965F3D_8297_29EE_41C7_F26E65978279",
   "pitch": -16.14,
   "yaw": -124.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E, this.camera_A701B96F_8311_9C67_41BD_9F355C03BF14); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C3C26F03_8299_2999_41D7_98DFABB9944C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.89,
   "yaw": -124.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.79,
   "image": "this.AnimatedImageResource_A58E4CE8_8297_6897_41DA_4E512AEDA00F",
   "pitch": -33.34,
   "yaw": -101.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A2FF72B4_829A_F8FF_4186_D3D086C62C0A",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.79,
   "yaw": -101.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.18,
   "image": "this.AnimatedImageResource_A58E8CE8_8297_6897_41BC_AF5A2E128B22",
   "pitch": -28.36,
   "yaw": -1.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A2CEB7C3_8299_7899_41C2_8DD38306725D",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.18,
   "yaw": -1.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.03,
   "image": "this.AnimatedImageResource_C150688C_8289_28AF_41DD_AED9225878B7",
   "pitch": -13.37,
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AF585A9F_82FF_E8A9_41BA_CB2DB2335535",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.03,
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.7,
   "image": "this.AnimatedImageResource_C150988C_8289_28AF_41C1_20BAC1135D55",
   "pitch": -19.28,
   "yaw": -92.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_ACB32E5B_82FF_2BA9_41D0_358385095F3B",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.7,
   "yaw": -92.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.93,
   "image": "this.AnimatedImageResource_C157288C_8289_28AF_41DE_E5B2867CFA67",
   "pitch": -15.46,
   "yaw": -66.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A, this.camera_A76A698B_8311_9CAE_41CE_5DBDDF4B8662); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_ADD12686_82FF_789A_41D0_91D321C755E0",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.93,
   "yaw": -66.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.6,
   "image": "this.AnimatedImageResource_CF886F3D_8297_29EE_41DE_23FF03DC4E83",
   "pitch": -32.12,
   "yaw": -103.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C7BC7669_8299_DB96_41D0_9F2C2015B5E3",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.6,
   "yaw": -103.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.92,
   "image": "this.AnimatedImageResource_C155888C_8289_28AF_41D1_0D9ABE2E3095",
   "pitch": -29,
   "yaw": -29.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BBA54BC5_828B_E89E_41D9_F47FCCEA95BA",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.92,
   "yaw": -29.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "cursor": "hand",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 30,
 "width": 100,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "horizontalAlign": "center",
 "bottom": 8,
 "minWidth": 1,
 "mode": "push",
 "height": 75,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.02,
   "image": "this.AnimatedImageResource_C154288C_8289_28AF_41A1_EF014F0D764F",
   "pitch": -27.96,
   "yaw": 61.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A6771AB3_82F6_E8F9_41CD_2FE6343610CA",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.02,
   "yaw": 61.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.72,
   "image": "this.AnimatedImageResource_B34CE419_82FB_3FB6_41D7_9E18EC711391",
   "pitch": -19.1,
   "yaw": 107.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8E724F33_8229_2D54_41D6_F5B6E106956E, this.camera_A776D98B_8311_9CAE_41C6_CCBC8B3D56C8); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A7B18724_82F7_399F_41D2_2AE408EE9DE4",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.72,
   "yaw": 107.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "class": "Container",
 "right": "0%",
 "width": 110,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "top": "0%",
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "91.304%",
 "borderSize": 0,
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 3,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Bebas Neue Bold",
 "data": {
  "name": "text 1"
 },
 "left": 0,
 "fontStyle": "normal",
 "paddingLeft": 0,
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "class": "Label",
 "width": 454,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "text": "Misoi's house",
 "fontColor": "#FFFFFF",
 "verticalAlign": "top",
 "textShadowVerticalLength": 0,
 "textShadowOpacity": 1,
 "textShadowColor": "#000000",
 "minWidth": 1,
 "height": 86,
 "top": 5,
 "fontSize": 90,
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textShadowHorizontalLength": 0,
 "shadow": false,
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold"
},
{
 "fontFamily": "Bebas Neue Book",
 "data": {
  "name": "text 2"
 },
 "left": 0,
 "fontStyle": "normal",
 "paddingLeft": 0,
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "class": "Label",
 "width": 388,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "text": "Three bedroom structure",
 "fontColor": "#FFFFFF",
 "verticalAlign": "top",
 "textShadowVerticalLength": 0,
 "textShadowOpacity": 1,
 "textShadowColor": "#000000",
 "bottom": 0,
 "minWidth": 1,
 "height": 46,
 "fontSize": 41,
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "textShadowHorizontalLength": 0,
 "shadow": false,
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "0%",
 "borderSize": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "bottom": 53,
 "minWidth": 1,
 "height": 2,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "white line"
 }
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448"
 ],
 "left": "0%",
 "paddingLeft": 30,
 "scrollBarColor": "#000000",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "class": "Container",
 "width": 1199,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 51,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 3,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "7%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "7%",
 "layout": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "5%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "top": "5%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "class": "Container",
 "right": "10%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C157C88C_8289_28AF_41A8_C91D2AAE74E5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C156788C_8289_28AF_41DF_795561E31EAD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C156A88C_8289_28AF_41C3_168EB1C5D353",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C156D88C_8289_28AF_41CC_CD6FD5C70BFC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C155688C_8289_28AF_41D3_AB5BECC4F6F9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E73EEA8_822A_EF74_41CF_382ECDBB2EAE_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C157688C_8289_28AF_41D1_034B4993876C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C157988C_8289_28AF_41B6_C0FE3447525A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E49C34A_8229_3535_41DD_639BC49F3CE1_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF97FF3D_8297_29EE_4173_425890598C4B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF973F3D_8297_29EE_41A5_8BE12B73DB5F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF88AF3D_8297_29EE_41AE_A6CDA72619FC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF88FF3D_8297_29EE_41DE_41E1EF61562F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E7C0B19_8229_5554_41CE_229969E2CAD4_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF898F3D_8297_29EE_41C3_7A862700BD46",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E4FCF99_822A_ED54_41CD_77D51C9565ED_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AEB21B59_828F_29A9_41D4_6B4777EAFB59",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E720317_822A_D546_41CA_4B38C6037BEB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C154888C_8289_28AF_41DF_D1566804610B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E4E0786_822A_FD3C_41C3_52DC7C30873B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9075C757_82F2_B5A6_41D5_708318999CDB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_B34E4419_82FB_3FB6_41D0_5B00E72C815F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9074D757_82F2_B5A6_41D9_36FFFD267F3D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E724F33_8229_2D54_41D6_F5B6E106956E_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C34247C1_8299_D896_41CB_8DF0A5DD7EE9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C34587C1_8299_D896_41C5_291183A06F5C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C345D7C1_8299_D896_41D3_EB4D082938A6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E72C6B8_822A_DF54_41D0_97DD788D0CC1_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AEB09B59_828F_29A9_41CA_FA8B7639C64D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AEB13B59_828F_29A9_41DC_4177DEF551E1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AEB1CB59_828F_29A9_41DC_9A2ACF34EFF0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9075A757_82F2_B5A6_419D_EDB02B0AC1BE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E72CB68_8229_35F4_41DB_ADCA0BA8AE4A_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C34577C1_8299_D896_41DC_D7AA71A44156",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C34487C1_8299_D896_41D1_99498D6C04C6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9078775A_82F2_B5A9_41CB_52CB226E953B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C34407C1_8299_D896_41C1_FBE00C2009A2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C34797C1_8299_D896_41D7_FB734B5ABC7B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E741AEF_822A_D4CC_41D8_D8887E5A1E76_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF96EF3D_8297_29EE_41DD_D2C0751114B9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF961F3D_8297_29EE_41D1_692A9BDF96CD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF965F3D_8297_29EE_41C7_F26E65978279",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E7092D3_822A_F4D4_41AA_D3218AD3C192_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_A58E4CE8_8297_6897_41DA_4E512AEDA00F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_A58E8CE8_8297_6897_41BC_AF5A2E128B22",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E482723_8229_3D74_41DC_1FD40CC677AD_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C150688C_8289_28AF_41DD_AED9225878B7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C150988C_8289_28AF_41C1_20BAC1135D55",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C157288C_8289_28AF_41DE_E5B2867CFA67",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E71BF04_8229_2D3C_41C4_6CF7DCD5623B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_CF886F3D_8297_29EE_41DE_23FF03DC4E83",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8F8706D2_8229_5CD4_41E0_00C7A6F77D18_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C155888C_8289_28AF_41D1_0D9ABE2E3095",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8EF5F320_8289_7996_41C0_9DC3CE382403_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_C154288C_8289_28AF_41A1_EF014F0D764F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_B34CE419_82FB_3FB6_41D7_9E18EC711391",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8E709B3F_822A_F54C_41D9_6E4741F315D6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "class": "IconButton",
 "width": 60,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "class": "IconButton",
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button panorama list"
 },
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "fontSize": 12,
 "class": "Button",
 "width": 130,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "label": "PANORAMA LIST",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "50%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "25%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "50%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "25%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "horizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "class": "ThumbnailGrid",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "itemPaddingRight": 3,
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "width": "100%",
 "minHeight": 1,
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemMode": "normal",
 "itemLabelFontFamily": "Montserrat",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "itemBorderRadius": 0,
 "minWidth": 1,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "itemHorizontalAlign": "center",
 "height": "100%",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0.05,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemThumbnailBorderRadius": 0,
 "shadow": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "itemHeight": 156,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "borderRadius": 5,
 "gap": 26,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "15%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 400,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "25%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "55%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "45%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "transparencyActive": false,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "25%",
 "minHeight": 50,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "right": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "bottom": 0,
 "progressBarOpacity": 1,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "width": "77.115%",
 "borderSize": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 50,
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "horizontalAlign": "right",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "right": "0%",
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "scrollEnabled": true,
 "borderSize": 0,
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "paddingLeft": 80,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 100,
 "width": "77.115%",
 "borderSize": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 50,
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "horizontalAlign": "right",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "left": 10,
 "paddingLeft": 0,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "class": "IconButton",
 "right": 10,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "left": 10,
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "class": "IconButton",
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderSize": 0,
 "transparencyActive": false,
 "minHeight": 50,
 "width": "10%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "horizontalAlign": "right",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.66vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.24vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.53vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.53vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.53vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.53vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.24vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": "3vh",
 "class": "Button",
 "width": "46%",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "height": "9%",
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0.7,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "transparencyActive": true,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "12%",
 "minHeight": 70,
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "data": {
  "name": "Container separator"
 },
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "80%",
 "borderSize": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "30%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "transparencyActive": true,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "12%",
 "minHeight": 70,
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.66vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.24vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.24vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.53vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.53vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": "3vh",
 "class": "Button",
 "width": "46%",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "lorem ipsum",
 "height": "9%",
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0.7,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.66vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.24vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.24vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": 34,
 "class": "Button",
 "width": 207,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderSize": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 59,
 "mode": "push",
 "minWidth": 1,
 "label": "lorem ipsum",
 "backgroundColor": [
  "#04A3E1"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "45%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.66vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "height": "80%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "width": "25%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "borderSize": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "75%",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.24vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.82vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_A088592C_8311_9DE9_41D7_0BB3279205CE.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.MapViewer"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "existsKey": function(key){  return key in window; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
