/* Self-contained Merge Haven configuration. */
document.ccConfig={
  "version": "1.510.15",
  "name": "garden",
  "availables": {
    "STATISTICS_MINIMAL": {
      "level": 2
    },
    "INVITE_FRIENDS_ICON": {
      "location": {
        "fix": 15
      }
    },
    "CREATE_SHORTCUT": {
      "level": 0.33
    },
    "JOIN_GROUP": {
      "disabled": true
    },
    "RATE_WINDOW": {
      "level": 6
    },
    "SHARED_CHECKBOX": {
      "level": 4
    },
    "SUBSCRIPTION": {
      "level": 7.5
    },
    "EXIT_CONTROL_BUTTON": {
      "level": 1
    },
    "CHECK_CONNECTION": {
      "level": 5
    },
    "RESTORE_PROGRESS": {
      "location": {
        "fix": 1
      }
    },
    "UNLIMITED_LIVES_THRESHOLD": {
      "level": 30
    },
    "SPACE_RACE_MISSION": {
      "location": {
        "fix": 31
      }
    },
    "LEVEL_MASTERY_MISSION": {
      "location": {
        "fix": 20
      }
    },
    "LIGHTNING_RUSH_MISSION": {
      "location": {
        "fix": 21
      }
    },
    "STARTER_PACK0": {
      "level": 6.2
    },
    "STARTER_PACK": {
      "level": 8.2
    },
    "STARTER_PACK2": {
      "level": 10.2
    },
    "TREASURE_SEARCH_MISSION": {
      "location": {
        "fix": 31
      }
    },
    "BASE_MISSION": {
      "level": 3.45
    },
    "MENU_BAR_SOFT_FORCE": {
      "level": 1.6
    },
    "MENU_CONTROL_BUTTON": {
      "level": 0
    },
    "TYPE_HUNGRY_GAMES": {
      "location": {
        "fix": 18
      }
    },
    "CROSS_PROMO": {
      "level": 0
    },
    "ENERGY_LOTTERY": {
      "level": 5.5,
      "registered": "1 day"
    },
    "SPECIAL_ENERGY_OFFER": {
      "location": {
        "fix": 4
      }
    },
    "BACKPACK_TUTORIAL": {
      "location": {
        "fix": 14
      }
    },
    "UNITS_SHOP": {
      "location": {
        "fix": 5
      }
    },
    "WEEKLY_GOALS": {
      "location": {
        "fix": 19
      }
    },
    "THIRD_ELEMENT": {
      "level": 3
    },
    "LORYS_DERBY_MISSION": {
      "location": {
        "fix": 20
      }
    },
    "ISLAND_DECORATION_MISSION": {
      "location": {
        "fix": 24
      }
    },
    "KINGS_CUP_MISSION": {
      "location": {
        "fix": 16
      }
    },
    "BALLOON_RISE_MISSION": {
      "level": 5
    },
    "RAVE_REVIEWS": {
      "location": {
        "fix": 6
      }
    },
    "GENERATOR_MULTIPLIER_2": {
      "location": {
        "fix": 84
      }
    },
    "GENERATOR_MULTIPLIER_4": {
      "location": {
        "fix": 383
      }
    },
    "LUCKY_DROP": {
      "location": {
        "fix": 10
      }
    },
    "NEW_STARTER_PACK": {
      "location": {
        "fix": 5
      }
    },
    "GENERATOR_OFFER": {
      "location": {
        "fix": 14
      }
    },
    "HIGH_STAGE": {
      "location": {
        "fix": 21
      }
    },
    "SEASON_PASS_MISSION": {
      "level": 8
    },
    "MERGE2_MISSION_MISSION": {
      "level": 9
    },
    "STICKERS_BOOK": {
      "level": 7
    },
    "OCTOBER_OFFER": {
      "level": 6.1
    },
    "NOVEMBER11_OFFER": {
      "level": 6.1
    },
    "NOVEMBER_FRIDAY_OFFER": {
      "level": 6.1
    },
    "DECEMBER_OFFER": {
      "level": 6.1
    },
    "JANUARY_OFFER": {
      "level": 6.1
    },
    "FEBRUARY_OFFER": {
      "level": 6.1
    },
    "UNDO_TUTORIAL": {
      "level": 5.8
    },
    "DISCO_PARTY_MISSION": {
      "level": 8
    }
  },
  "type": "merge2",
  "orientation": "both",
  "restPort": 3027,
  "ui": "riddles",
  "libraries": [
    "cleverapps",
    "connector",
    "merge2",
    "features"
  ],
  "personsMinimal": {
    "hero": "garden_lisa_minimal"
  },
  "persons": {
    "main": {
      "hero": "garden_lisa"
    },
    "pack_1": {
      "king": "garden_axel",
      "policeman": "garden_policeman_marcus",
      "taxidriver": "garden_taxidriver_antony"
    },
    "pack_2": {
      "elf": "garden_grandma_gloria",
      "artist": "garden_artist_sophia",
      "repairman": "garden_repairman_bob",
      "detective": "garden_detective"
    }
  },
  "features": [
    "common",
    "loading_scene",
    "crosspromo",
    "synchronizer",
    "energy",
    "travelmap",
    "location_repair",
    "room_repair",
    "game_level",
    "merge2",
    "merge2_extrabar",
    "skin_xmas",
    "season_collections2",
    "season_collections2_riddlesui",
    "kingscup",
    "kingscup_riddlesui",
    "treasure_search",
    "treasure_search_riddlesui",
    "space_race",
    "space_race_riddlesui",
    "weekly_goals",
    "editprofile",
    "avatar_menubar",
    "rave_reviews",
    "offers",
    "noads",
    "levelmastery",
    "lorys_derby",
    "lighting_rush",
    "lighting_rush_riddlesui",
    "lighting_rush_garden",
    "ui_riddles",
    "island_decoration",
    "island_decoration_riddlesui",
    "hungry_games",
    "rubieshardshop",
    "rewarded_promo_tracker",
    "game_announce_tracker",
    "season_pass",
    "merge2mission"
  ],
  "locationsPath": [
    "merge2/res/gardenlocations",
    "res/locations/"
  ],
  "versionParent": "1.510.14",
  "levelsPath": "res/levels/",
  "terms": {
    "slimmerbits": {
      "privacy": "",
      "terms": "",
      "company": {
        "name": "SlimmerBits",
        "legalName": "SlimmerBits LLC-FZ",
        "address": "AL ABBAS BLDG.2, Mankhool, Office AA2, Dubai, UAE",
        "registration": "1043319",
        "jurisdiction": "UAE",
        "privacyEmail": "help.zareefgaming+privacy@gmail.com",
        "supportEmail": "vtbelo+support@gmail.com"
      }
    },
    "zareef": {
      "privacy": "",
      "terms": "",
      "company": {
        "name": "Clever Apps",
        "legalName": "Clever Apps Pte. Ltd.",
        "address": "8 Marina Boulevard #11-00 Marina Bay Financial Centre Singapore 018981",
        "registration": "201706967K",
        "jurisdiction": "Singapore",
        "privacyEmail": "help.cleverapps+privacy@gmail.com",
        "supportEmail": "vtbelo+support@gmail.com"
      }
    },
    "cleverapps": {
      "privacy": "",
      "terms": "",
      "company": {
        "name": "Clever Apps",
        "legalName": "Clever Apps Pte. Ltd.",
        "address": "8 Marina Boulevard #11-00 Marina Bay Financial Centre Singapore 018981",
        "registration": "201706967K",
        "jurisdiction": "Singapore",
        "privacyEmail": "help.cleverapps+privacy@gmail.com",
        "supportEmail": "vtbelo+support@gmail.com"
      }
    },
    "vanuplay": {
      "privacy": "",
      "terms": "",
      "company": {
        "name": "VanuPlay Innovations",
        "legalName": "VanuPlay Innovations Inc.",
        "address": "Tropicana Area, Korman, Port Vila, Vanuatu",
        "registration": "700739",
        "jurisdiction": "Republic of Vanuatu",
        "privacyEmail": "info@vanuplay.com",
        "supportEmail": "vtbelo+support@gmail.com"
      }
    }
  },
  "business": "cleverapps",
  "deployment": "",
  "restApiURL": "",
  "syncApiURL": "",
  "payApiURL": "",
  "ruPayApiURL": "",
  "metricsApiURL": "",
  "notificationsJsonURL": "",
  "crmApiURL": "",
  "multiApiURL": "",
  "notificationsApiURL": "",
  "remoteConfigURL": "",
  "adminMetricsUrl": "",
  "ruMultiApiURL": "",
  "ruNotificationsApiURL": "",
  "ruRemoteConfigURL": "",
  "ruDeployment": "",
  "ruRestApiURL": "",
  "ruSyncApiURL": "",
  "ruEnPublishUrl": "",
  "ruCrmApiURL": "",
  "ruMetricsApiURL": "",
  "title": "Merge Haven",
  "longTitle": "Merge Haven: Cozy Merge Puzzle",
  "debugMode": 0,
  "showFPS": false,
  "buildTime": "2026-10-21T10:53:48.768Z",
  "languages": [
    "en",
    "zh"
  ],
  "soft": false,
  "source": "offline",
  "firebase": false,
  "nologin": true,
  "norest": true,
  "noLogEvents": true,
  "sendLoadingTime": false,
  "paymentsDisabled": true,
  "cloudStorage": false,
  "platformsync": false,
  "disableReconnect": true,
  "manualStartMetrics": true,
  "testPlatform": false,
  "adsense": false,
  "xsolla": false,
  "defaultLanguage": "en",
  "migrateLocalStorage": false
};
(function(c){var base=new URL("./assets/",document.baseURI).href;c.staticUrl=base;c.ruStaticUrl=base;c.uiPath=base+"cleverapps/res/ui/";})(document.ccConfig);
