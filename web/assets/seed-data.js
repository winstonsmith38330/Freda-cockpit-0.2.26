window.FREDA_OPS_SEED = {
  "version": "0.2.12",
  "appName": "Freda Ops Cockpit",
  "brand": "L.A. Donuts",
  "generatedAt": "2026-06-16T00:00:00.000Z",
  "notes": "Beta 0.2.12 switches POS true sync to reporting.site script.php?ticketId= JSON endpoint, preserves same-day filtering, keeps stale Uber/Square out of Today, and keeps Freda priority modules visible.",
  "stores": [
    {
      "name": "Beverly Hills",
      "slug": "ladonuts_beverlyhills",
      "type": "L.A. Donuts",
      "lunchWindow": "12-15",
      "status": "Amber",
      "focus": "Do not judge Beverly Hills from POS alone until POS ticket sync and Uber daily capture are both available.",
      "reportingViews": {
        "ticketSales": "https://reporting.site/ladonuts_beverlyhills/dashboard/ticket_sales.php",
        "dashboard": "https://reporting.site/ladonuts_beverlyhills/dashboard/dashboard.php",
        "busyHours": "https://reporting.site/ladonuts_beverlyhills/dashboard/busy_hours.php",
        "productSales": "https://reporting.site/ladonuts_beverlyhills/dashboard/product_sales.php",
        "productSalesSummary": "https://reporting.site/ladonuts_beverlyhills/dashboard/product_sales_summary.php",
        "soldOut": "https://reporting.site/ladonuts_beverlyhills/dashboard/sold_out_date.php",
        "lineRemoved": "https://reporting.site/ladonuts_beverlyhills/dashboard/lineremoved.php"
      }
    },
    {
      "name": "Penrith",
      "slug": "ladonuts_penrith",
      "type": "L.A. Donuts",
      "lunchWindow": "15-18",
      "status": "Green",
      "focus": "Protect the afternoon cabinet before 3pm and compare hour-by-hour against same day last week.",
      "reportingViews": {
        "ticketSales": "https://reporting.site/ladonuts_penrith/dashboard/ticket_sales.php",
        "dashboard": "https://reporting.site/ladonuts_penrith/dashboard/dashboard.php",
        "busyHours": "https://reporting.site/ladonuts_penrith/dashboard/busy_hours.php",
        "productSales": "https://reporting.site/ladonuts_penrith/dashboard/product_sales.php",
        "productSalesSummary": "https://reporting.site/ladonuts_penrith/dashboard/product_sales_summary.php",
        "soldOut": "https://reporting.site/ladonuts_penrith/dashboard/sold_out_date.php",
        "lineRemoved": "https://reporting.site/ladonuts_penrith/dashboard/lineremoved.php"
      }
    },
    {
      "name": "Taren Point",
      "slug": "ladonuts_tarenpoint",
      "type": "L.A. Donuts",
      "lunchWindow": "early trade",
      "status": "Amber",
      "focus": "Protect early trade and stock/display follow-up.",
      "reportingViews": {
        "ticketSales": "https://reporting.site/ladonuts_tarenpoint/dashboard/ticket_sales.php",
        "dashboard": "https://reporting.site/ladonuts_tarenpoint/dashboard/dashboard.php",
        "busyHours": "https://reporting.site/ladonuts_tarenpoint/dashboard/busy_hours.php",
        "productSales": "https://reporting.site/ladonuts_tarenpoint/dashboard/product_sales.php",
        "productSalesSummary": "https://reporting.site/ladonuts_tarenpoint/dashboard/product_sales_summary.php",
        "soldOut": "https://reporting.site/ladonuts_tarenpoint/dashboard/sold_out_date.php",
        "lineRemoved": "https://reporting.site/ladonuts_tarenpoint/dashboard/lineremoved.php"
      }
    },
    {
      "name": "Frieda's Pies",
      "slug": "friedas_pies",
      "type": "Pies / Square",
      "lunchWindow": "pie demand surge",
      "status": "Amber",
      "focus": "Viral pie demand is strong. Train staff properly across stores and protect Beef & Cheese, Chunky Beef Cheese and Garlic Naan.",
      "squareView": "https://app.squareup.com/dashboard/sales/transactions"
    }
  ],
  "sampleMetrics": {
    "reportingPOS": {
      "Penrith": {
        "source": "sample",
        "period": "2026-06-14",
        "periodLabel": "Sample POS Today",
        "totalSales": 4359.7,
        "netSales": 4359.7,
        "orders": 193,
        "aov": 22.59,
        "topProduct": "SPECIAL",
        "topCategory": "Gourmet Donuts",
        "hourlyRows": [
          {
            "hour": "10:00",
            "sales": 260,
            "orders": 11
          },
          {
            "hour": "11:00",
            "sales": 390,
            "orders": 17
          },
          {
            "hour": "12:00",
            "sales": 520,
            "orders": 22
          },
          {
            "hour": "13:00",
            "sales": 790,
            "orders": 34
          },
          {
            "hour": "14:00",
            "sales": 760,
            "orders": 31
          },
          {
            "hour": "15:00",
            "sales": 350,
            "orders": 15
          },
          {
            "hour": "16:00",
            "sales": 350,
            "orders": 15
          },
          {
            "hour": "17:00",
            "sales": 350,
            "orders": 16
          },
          {
            "hour": "18:00",
            "sales": 240,
            "orders": 11
          },
          {
            "hour": "19:00",
            "sales": 200,
            "orders": 9
          }
        ],
        "productRows": [
          {
            "product": "SPECIAL",
            "qty": 79,
            "sales": 513.5,
            "category": "Gourmet Donuts"
          },
          {
            "product": "M&M",
            "qty": 86,
            "sales": 559,
            "category": "Gourmet Donuts"
          },
          {
            "product": "Boston Creme",
            "qty": 78,
            "sales": 390,
            "category": "Traditional Donuts"
          },
          {
            "product": "Vanilla Slice",
            "qty": 67,
            "sales": 335,
            "category": "Traditional Donuts"
          }
        ]
      }
    },
    "uberEats": {
      "Beverly Hills": {
        "sales": 6672,
        "orders": 201,
        "aov": 33.19,
        "periodLabel": "Uber WTD sample",
        "period": "WTD"
      },
      "Penrith": {
        "sales": 2860,
        "orders": 104,
        "aov": 27.5,
        "periodLabel": "Uber WTD sample",
        "period": "WTD"
      },
      "Taren Point": {
        "sales": 830,
        "orders": 28,
        "aov": 29.64,
        "periodLabel": "Uber WTD sample",
        "period": "WTD"
      }
    },
    "square": {
      "Frieda's Pies": {
        "sales": 40731.56,
        "netSales": 40731.56,
        "transactions": 1717,
        "periodLabel": "Square MTD sample",
        "period": "MTD"
      }
    }
  },
  "fredaFeedbackPriorities": [
    "Compare sales hour by hour to the same day last week and the last 4 weeks, including Uber where a same-day Uber capture/API value exists.",
    "Track what time each store sells out and whether sell-out is earlier than expected.",
    "Separate planned sell-outs / FOMO from operational sell-outs that happen too early.",
    "Track what is left over most often and what sells out first.",
    "Monitor donut production mix properly, especially rings vs balls, because specials are using more balls.",
    "Use WhatsApp stock photos/messages to work out weekly stock usage and plan stock in two trips instead of daily driver pressure.",
    "Capture pie momentum from the viral NZ review / social media lift.",
    "Make staff training and hiring the biggest focus while the stores have momentum."
  ],
  "productRules": {
    "shapeMapVersion": "v94.2 balanced single total",
    "shapeMap": [
      {
        "product": "Homer",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Glaze",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Choc",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Cinnamon",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Caramel",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Fairy",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Passion",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Pineapple",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "M&M",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Nutella",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Biscoff Cream",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Oreo",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Snickers",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Gaytime",
        "RING": 1,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Brulee",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Strawberry Nutella",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Nutella Biscoff",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Vanilla Slice",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Boston",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Raspberry",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Banana",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Lemon",
        "RING": 0,
        "BALL": 1,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Cream Finger Bun",
        "RING": 0,
        "BALL": 0,
        "LONG": 1,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Eclairs",
        "RING": 0,
        "BALL": 0,
        "LONG": 1,
        "SCROLL": 0,
        "APPLE": 0
      },
      {
        "product": "Scroll",
        "RING": 0,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 1,
        "APPLE": 0
      },
      {
        "product": "Apple",
        "RING": 0,
        "BALL": 0,
        "LONG": 0,
        "SCROLL": 0,
        "APPLE": 1
      },
      {
        "product": "Specials Total",
        "RING": 0.55,
        "BALL": 0.3,
        "LONG": 0.05,
        "SCROLL": 0.05,
        "APPLE": 0.05
      }
    ],
    "weeklyShapeMix": {
      "source": "LADonuts_Baker_Cook_Sheets_Jun15_to_Jun21_v94_2_ShapeMapBalanced_SingleTotal(1).xlsx",
      "weekLabel": "15 to 21 June v94.2",
      "total": 20100,
      "byShape": {
        "RING": 11436,
        "BALL": 5817,
        "LONG": 1411,
        "SCROLL": 785,
        "APPLE": 651
      },
      "byStore": [
        {
          "store": "Beverly Hills",
          "RING": 6116,
          "BALL": 3024,
          "LONG": 895,
          "SCROLL": 435,
          "APPLE": 330,
          "total": 10800
        },
        {
          "store": "Penrith",
          "RING": 3587,
          "BALL": 2012,
          "LONG": 398,
          "SCROLL": 273,
          "APPLE": 230,
          "total": 6500
        },
        {
          "store": "Taren Point",
          "RING": 1733,
          "BALL": 781,
          "LONG": 118,
          "SCROLL": 77,
          "APPLE": 91,
          "total": 2800
        }
      ],
      "byDay": [
        {
          "day": "Monday 15 Jun",
          "RING": 1082,
          "BALL": 553,
          "LONG": 130,
          "SCROLL": 74,
          "APPLE": 61,
          "total": 1900
        },
        {
          "day": "Tuesday 16 Jun",
          "RING": 970,
          "BALL": 496,
          "LONG": 113,
          "SCROLL": 65,
          "APPLE": 56,
          "total": 1700
        },
        {
          "day": "Wednesday 17 Jun",
          "RING": 1111,
          "BALL": 568,
          "LONG": 132,
          "SCROLL": 75,
          "APPLE": 64,
          "total": 1950
        },
        {
          "day": "Thursday 18 Jun",
          "RING": 1221,
          "BALL": 627,
          "LONG": 148,
          "SCROLL": 85,
          "APPLE": 69,
          "total": 2150
        },
        {
          "day": "Friday 19 Jun",
          "RING": 1849,
          "BALL": 941,
          "LONG": 229,
          "SCROLL": 128,
          "APPLE": 103,
          "total": 3250
        },
        {
          "day": "Saturday 20 Jun",
          "RING": 2701,
          "BALL": 1367,
          "LONG": 340,
          "SCROLL": 188,
          "APPLE": 154,
          "total": 4750
        },
        {
          "day": "Sunday 21 Jun",
          "RING": 2502,
          "BALL": 1265,
          "LONG": 319,
          "SCROLL": 170,
          "APPLE": 144,
          "total": 4400
        }
      ]
    },
    "priorityPieProducts": [
      "Beef & Cheese",
      "Chunky Beef Cheese",
      "Garlic Naan"
    ],
    "rules": [
      "Use product-specific shape mapping instead of fixed 65/35.",
      "Specials Total is mixed: 55% ring, 30% ball, 5% long, 5% scroll, 5% apple.",
      "Filled/custard items remain BALL. Ring-style premium items remain RING. Cream Finger Bun/Eclairs are LONG."
    ]
  },
  "posTicketWatermarks": {
    "Beverly Hills": 282296,
    "Penrith": 52333,
    "Taren Point": 60157
  },
  "historicalHourly": {
    "Beverly Hills": [
      {
        "date": "2026-03-14",
        "hour": "07:00",
        "sales": 40.0,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-03-14",
        "hour": "08:00",
        "sales": 145.5,
        "orders": 7,
        "rows": 42
      },
      {
        "date": "2026-03-14",
        "hour": "09:00",
        "sales": 143.0,
        "orders": 8,
        "rows": 34
      },
      {
        "date": "2026-03-14",
        "hour": "10:00",
        "sales": 381.5,
        "orders": 20,
        "rows": 83
      },
      {
        "date": "2026-03-14",
        "hour": "11:00",
        "sales": 354.0,
        "orders": 20,
        "rows": 78
      },
      {
        "date": "2026-03-14",
        "hour": "12:00",
        "sales": 707.5,
        "orders": 31,
        "rows": 143
      },
      {
        "date": "2026-03-14",
        "hour": "13:00",
        "sales": 310.0,
        "orders": 18,
        "rows": 59
      },
      {
        "date": "2026-03-14",
        "hour": "14:00",
        "sales": 762.5,
        "orders": 31,
        "rows": 157
      },
      {
        "date": "2026-03-14",
        "hour": "15:00",
        "sales": 927.0,
        "orders": 42,
        "rows": 187
      },
      {
        "date": "2026-03-14",
        "hour": "16:00",
        "sales": 827.0,
        "orders": 36,
        "rows": 157
      },
      {
        "date": "2026-03-14",
        "hour": "17:00",
        "sales": 689.0,
        "orders": 29,
        "rows": 134
      },
      {
        "date": "2026-03-14",
        "hour": "18:00",
        "sales": 1141.0,
        "orders": 45,
        "rows": 225
      },
      {
        "date": "2026-03-14",
        "hour": "19:00",
        "sales": 696.0,
        "orders": 41,
        "rows": 146
      },
      {
        "date": "2026-03-14",
        "hour": "20:00",
        "sales": 421.7,
        "orders": 31,
        "rows": 92
      },
      {
        "date": "2026-03-14",
        "hour": "21:00",
        "sales": 164.0,
        "orders": 15,
        "rows": 39
      },
      {
        "date": "2026-03-14",
        "hour": "22:00",
        "sales": 51.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-03-15",
        "hour": "07:00",
        "sales": 7.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-03-15",
        "hour": "08:00",
        "sales": 108.5,
        "orders": 7,
        "rows": 29
      },
      {
        "date": "2026-03-15",
        "hour": "09:00",
        "sales": 167.0,
        "orders": 7,
        "rows": 39
      },
      {
        "date": "2026-03-15",
        "hour": "10:00",
        "sales": 257.5,
        "orders": 16,
        "rows": 58
      },
      {
        "date": "2026-03-15",
        "hour": "11:00",
        "sales": 506.0,
        "orders": 28,
        "rows": 111
      },
      {
        "date": "2026-03-15",
        "hour": "12:00",
        "sales": 572.5,
        "orders": 35,
        "rows": 118
      },
      {
        "date": "2026-03-15",
        "hour": "13:00",
        "sales": 795.5,
        "orders": 34,
        "rows": 155
      },
      {
        "date": "2026-03-15",
        "hour": "14:00",
        "sales": 585.2,
        "orders": 28,
        "rows": 114
      },
      {
        "date": "2026-03-15",
        "hour": "15:00",
        "sales": 755.5,
        "orders": 34,
        "rows": 148
      },
      {
        "date": "2026-03-15",
        "hour": "16:00",
        "sales": 865.0,
        "orders": 33,
        "rows": 161
      },
      {
        "date": "2026-03-15",
        "hour": "17:00",
        "sales": 754.5,
        "orders": 33,
        "rows": 145
      },
      {
        "date": "2026-03-15",
        "hour": "18:00",
        "sales": 953.3,
        "orders": 36,
        "rows": 180
      },
      {
        "date": "2026-03-15",
        "hour": "19:00",
        "sales": 373.7,
        "orders": 22,
        "rows": 82
      },
      {
        "date": "2026-03-15",
        "hour": "20:00",
        "sales": 149.5,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-03-16",
        "hour": "07:00",
        "sales": 67.0,
        "orders": 1,
        "rows": 13
      },
      {
        "date": "2026-03-16",
        "hour": "09:00",
        "sales": 152.0,
        "orders": 7,
        "rows": 33
      },
      {
        "date": "2026-03-16",
        "hour": "10:00",
        "sales": 121.0,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-03-16",
        "hour": "11:00",
        "sales": 163.0,
        "orders": 12,
        "rows": 31
      },
      {
        "date": "2026-03-16",
        "hour": "12:00",
        "sales": 292.1,
        "orders": 12,
        "rows": 64
      },
      {
        "date": "2026-03-16",
        "hour": "13:00",
        "sales": 174.5,
        "orders": 10,
        "rows": 35
      },
      {
        "date": "2026-03-16",
        "hour": "14:00",
        "sales": 174.5,
        "orders": 10,
        "rows": 34
      },
      {
        "date": "2026-03-16",
        "hour": "15:00",
        "sales": 318.0,
        "orders": 15,
        "rows": 64
      },
      {
        "date": "2026-03-16",
        "hour": "16:00",
        "sales": 244.5,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-03-16",
        "hour": "17:00",
        "sales": 420.0,
        "orders": 20,
        "rows": 77
      },
      {
        "date": "2026-03-16",
        "hour": "18:00",
        "sales": 522.9,
        "orders": 27,
        "rows": 104
      },
      {
        "date": "2026-03-16",
        "hour": "19:00",
        "sales": 116.6,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-03-16",
        "hour": "20:00",
        "sales": 98.0,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-03-17",
        "hour": "07:00",
        "sales": 23.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-03-17",
        "hour": "08:00",
        "sales": 108.5,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-03-17",
        "hour": "10:00",
        "sales": 141.7,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-03-17",
        "hour": "11:00",
        "sales": 72.0,
        "orders": 8,
        "rows": 21
      },
      {
        "date": "2026-03-17",
        "hour": "12:00",
        "sales": 170.5,
        "orders": 13,
        "rows": 32
      },
      {
        "date": "2026-03-17",
        "hour": "13:00",
        "sales": 147.0,
        "orders": 12,
        "rows": 31
      },
      {
        "date": "2026-03-17",
        "hour": "14:00",
        "sales": 223.5,
        "orders": 11,
        "rows": 48
      },
      {
        "date": "2026-03-17",
        "hour": "15:00",
        "sales": 377.0,
        "orders": 20,
        "rows": 73
      },
      {
        "date": "2026-03-17",
        "hour": "16:00",
        "sales": 466.9,
        "orders": 20,
        "rows": 97
      },
      {
        "date": "2026-03-17",
        "hour": "17:00",
        "sales": 309.5,
        "orders": 15,
        "rows": 60
      },
      {
        "date": "2026-03-17",
        "hour": "18:00",
        "sales": 641.0,
        "orders": 28,
        "rows": 127
      },
      {
        "date": "2026-03-17",
        "hour": "19:00",
        "sales": 203.7,
        "orders": 14,
        "rows": 44
      },
      {
        "date": "2026-03-17",
        "hour": "20:00",
        "sales": 15.0,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-03-18",
        "hour": "06:00",
        "sales": 3.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-18",
        "hour": "07:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-03-18",
        "hour": "08:00",
        "sales": 14.5,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-03-18",
        "hour": "09:00",
        "sales": 103.5,
        "orders": 6,
        "rows": 26
      },
      {
        "date": "2026-03-18",
        "hour": "10:00",
        "sales": 158.0,
        "orders": 8,
        "rows": 39
      },
      {
        "date": "2026-03-18",
        "hour": "11:00",
        "sales": 171.2,
        "orders": 10,
        "rows": 39
      },
      {
        "date": "2026-03-18",
        "hour": "12:00",
        "sales": 166.0,
        "orders": 9,
        "rows": 38
      },
      {
        "date": "2026-03-18",
        "hour": "13:00",
        "sales": 352.0,
        "orders": 15,
        "rows": 65
      },
      {
        "date": "2026-03-18",
        "hour": "14:00",
        "sales": 211.0,
        "orders": 13,
        "rows": 41
      },
      {
        "date": "2026-03-18",
        "hour": "15:00",
        "sales": 443.4,
        "orders": 26,
        "rows": 101
      },
      {
        "date": "2026-03-18",
        "hour": "16:00",
        "sales": 500.6,
        "orders": 25,
        "rows": 105
      },
      {
        "date": "2026-03-18",
        "hour": "17:00",
        "sales": 520.5,
        "orders": 20,
        "rows": 102
      },
      {
        "date": "2026-03-18",
        "hour": "18:00",
        "sales": 391.5,
        "orders": 16,
        "rows": 82
      },
      {
        "date": "2026-03-18",
        "hour": "19:00",
        "sales": 190.5,
        "orders": 11,
        "rows": 43
      },
      {
        "date": "2026-03-18",
        "hour": "20:00",
        "sales": 82.0,
        "orders": 5,
        "rows": 18
      },
      {
        "date": "2026-03-19",
        "hour": "07:00",
        "sales": 55.0,
        "orders": 3,
        "rows": 14
      },
      {
        "date": "2026-03-19",
        "hour": "08:00",
        "sales": 17.5,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-03-19",
        "hour": "09:00",
        "sales": 136.0,
        "orders": 6,
        "rows": 32
      },
      {
        "date": "2026-03-19",
        "hour": "10:00",
        "sales": 149.5,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-03-19",
        "hour": "11:00",
        "sales": 199.0,
        "orders": 11,
        "rows": 49
      },
      {
        "date": "2026-03-19",
        "hour": "12:00",
        "sales": 174.0,
        "orders": 12,
        "rows": 37
      },
      {
        "date": "2026-03-19",
        "hour": "13:00",
        "sales": 154.0,
        "orders": 8,
        "rows": 35
      },
      {
        "date": "2026-03-19",
        "hour": "14:00",
        "sales": 138.0,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-03-19",
        "hour": "15:00",
        "sales": 351.0,
        "orders": 13,
        "rows": 69
      },
      {
        "date": "2026-03-19",
        "hour": "16:00",
        "sales": 348.5,
        "orders": 16,
        "rows": 71
      },
      {
        "date": "2026-03-19",
        "hour": "17:00",
        "sales": 387.0,
        "orders": 17,
        "rows": 79
      },
      {
        "date": "2026-03-19",
        "hour": "18:00",
        "sales": 517.5,
        "orders": 22,
        "rows": 100
      },
      {
        "date": "2026-03-19",
        "hour": "19:00",
        "sales": 375.5,
        "orders": 22,
        "rows": 76
      },
      {
        "date": "2026-03-19",
        "hour": "20:00",
        "sales": 183.0,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-03-20",
        "hour": "06:00",
        "sales": 7.9,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-03-20",
        "hour": "07:00",
        "sales": 208.2,
        "orders": 9,
        "rows": 54
      },
      {
        "date": "2026-03-20",
        "hour": "08:00",
        "sales": 238.5,
        "orders": 11,
        "rows": 54
      },
      {
        "date": "2026-03-20",
        "hour": "09:00",
        "sales": 373.0,
        "orders": 15,
        "rows": 76
      },
      {
        "date": "2026-03-20",
        "hour": "10:00",
        "sales": 606.0,
        "orders": 14,
        "rows": 105
      },
      {
        "date": "2026-03-20",
        "hour": "11:00",
        "sales": 677.7,
        "orders": 28,
        "rows": 134
      },
      {
        "date": "2026-03-20",
        "hour": "12:00",
        "sales": 400.5,
        "orders": 15,
        "rows": 87
      },
      {
        "date": "2026-03-20",
        "hour": "13:00",
        "sales": 384.5,
        "orders": 17,
        "rows": 61
      },
      {
        "date": "2026-03-20",
        "hour": "14:00",
        "sales": 289.0,
        "orders": 14,
        "rows": 52
      },
      {
        "date": "2026-03-20",
        "hour": "15:00",
        "sales": 503.0,
        "orders": 17,
        "rows": 88
      },
      {
        "date": "2026-03-20",
        "hour": "16:00",
        "sales": 630.0,
        "orders": 24,
        "rows": 121
      },
      {
        "date": "2026-03-20",
        "hour": "17:00",
        "sales": 455.9,
        "orders": 18,
        "rows": 91
      },
      {
        "date": "2026-03-20",
        "hour": "18:00",
        "sales": 740.9,
        "orders": 38,
        "rows": 146
      },
      {
        "date": "2026-03-20",
        "hour": "19:00",
        "sales": 370.0,
        "orders": 15,
        "rows": 73
      },
      {
        "date": "2026-03-20",
        "hour": "20:00",
        "sales": 210.0,
        "orders": 17,
        "rows": 40
      },
      {
        "date": "2026-03-20",
        "hour": "21:00",
        "sales": 57.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-03-20",
        "hour": "22:00",
        "sales": 19.0,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-03-21",
        "hour": "07:00",
        "sales": 63.5,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-03-21",
        "hour": "08:00",
        "sales": 217.5,
        "orders": 13,
        "rows": 56
      },
      {
        "date": "2026-03-21",
        "hour": "09:00",
        "sales": 148.0,
        "orders": 10,
        "rows": 41
      },
      {
        "date": "2026-03-21",
        "hour": "10:00",
        "sales": 384.0,
        "orders": 18,
        "rows": 84
      },
      {
        "date": "2026-03-21",
        "hour": "11:00",
        "sales": 421.5,
        "orders": 25,
        "rows": 85
      },
      {
        "date": "2026-03-21",
        "hour": "12:00",
        "sales": 594.5,
        "orders": 24,
        "rows": 114
      },
      {
        "date": "2026-03-21",
        "hour": "13:00",
        "sales": 545.5,
        "orders": 28,
        "rows": 115
      },
      {
        "date": "2026-03-21",
        "hour": "14:00",
        "sales": 801.0,
        "orders": 36,
        "rows": 161
      },
      {
        "date": "2026-03-21",
        "hour": "15:00",
        "sales": 753.0,
        "orders": 36,
        "rows": 157
      },
      {
        "date": "2026-03-21",
        "hour": "16:00",
        "sales": 596.0,
        "orders": 29,
        "rows": 111
      },
      {
        "date": "2026-03-21",
        "hour": "17:00",
        "sales": 614.5,
        "orders": 31,
        "rows": 128
      },
      {
        "date": "2026-03-21",
        "hour": "18:00",
        "sales": 525.5,
        "orders": 29,
        "rows": 106
      },
      {
        "date": "2026-03-21",
        "hour": "19:00",
        "sales": 518.1,
        "orders": 27,
        "rows": 110
      },
      {
        "date": "2026-03-21",
        "hour": "20:00",
        "sales": 204.0,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-03-21",
        "hour": "21:00",
        "sales": 158.5,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-03-21",
        "hour": "22:00",
        "sales": 29.4,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-03-22",
        "hour": "08:00",
        "sales": 95.5,
        "orders": 5,
        "rows": 22
      },
      {
        "date": "2026-03-22",
        "hour": "09:00",
        "sales": 285.5,
        "orders": 11,
        "rows": 60
      },
      {
        "date": "2026-03-22",
        "hour": "10:00",
        "sales": 488.5,
        "orders": 23,
        "rows": 106
      },
      {
        "date": "2026-03-22",
        "hour": "11:00",
        "sales": 485.5,
        "orders": 23,
        "rows": 108
      },
      {
        "date": "2026-03-22",
        "hour": "12:00",
        "sales": 560.5,
        "orders": 27,
        "rows": 126
      },
      {
        "date": "2026-03-22",
        "hour": "13:00",
        "sales": 764.5,
        "orders": 37,
        "rows": 156
      },
      {
        "date": "2026-03-22",
        "hour": "14:00",
        "sales": 548.0,
        "orders": 23,
        "rows": 98
      },
      {
        "date": "2026-03-22",
        "hour": "15:00",
        "sales": 679.6,
        "orders": 30,
        "rows": 135
      },
      {
        "date": "2026-03-22",
        "hour": "16:00",
        "sales": 688.0,
        "orders": 26,
        "rows": 139
      },
      {
        "date": "2026-03-22",
        "hour": "17:00",
        "sales": 503.0,
        "orders": 21,
        "rows": 101
      },
      {
        "date": "2026-03-22",
        "hour": "18:00",
        "sales": 519.5,
        "orders": 21,
        "rows": 97
      },
      {
        "date": "2026-03-22",
        "hour": "19:00",
        "sales": 417.9,
        "orders": 28,
        "rows": 84
      },
      {
        "date": "2026-03-22",
        "hour": "20:00",
        "sales": 164.0,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-03-23",
        "hour": "07:00",
        "sales": 100.0,
        "orders": 3,
        "rows": 23
      },
      {
        "date": "2026-03-23",
        "hour": "08:00",
        "sales": 69.5,
        "orders": 4,
        "rows": 17
      },
      {
        "date": "2026-03-23",
        "hour": "09:00",
        "sales": 59.5,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-03-23",
        "hour": "10:00",
        "sales": 147.0,
        "orders": 8,
        "rows": 34
      },
      {
        "date": "2026-03-23",
        "hour": "11:00",
        "sales": 120.0,
        "orders": 7,
        "rows": 27
      },
      {
        "date": "2026-03-23",
        "hour": "12:00",
        "sales": 118.0,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-03-23",
        "hour": "13:00",
        "sales": 75.5,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-03-23",
        "hour": "14:00",
        "sales": 229.5,
        "orders": 11,
        "rows": 37
      },
      {
        "date": "2026-03-23",
        "hour": "15:00",
        "sales": 252.5,
        "orders": 9,
        "rows": 57
      },
      {
        "date": "2026-03-23",
        "hour": "16:00",
        "sales": 297.5,
        "orders": 14,
        "rows": 61
      },
      {
        "date": "2026-03-23",
        "hour": "17:00",
        "sales": 115.2,
        "orders": 11,
        "rows": 24
      },
      {
        "date": "2026-03-23",
        "hour": "18:00",
        "sales": 147.0,
        "orders": 7,
        "rows": 28
      },
      {
        "date": "2026-03-23",
        "hour": "19:00",
        "sales": 156.5,
        "orders": 7,
        "rows": 35
      },
      {
        "date": "2026-03-23",
        "hour": "20:00",
        "sales": 17.0,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-03-24",
        "hour": "07:00",
        "sales": 6.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-24",
        "hour": "09:00",
        "sales": 68.5,
        "orders": 4,
        "rows": 15
      },
      {
        "date": "2026-03-24",
        "hour": "10:00",
        "sales": 81.0,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-03-24",
        "hour": "11:00",
        "sales": 190.5,
        "orders": 10,
        "rows": 40
      },
      {
        "date": "2026-03-24",
        "hour": "12:00",
        "sales": 118.0,
        "orders": 10,
        "rows": 26
      },
      {
        "date": "2026-03-24",
        "hour": "13:00",
        "sales": 324.5,
        "orders": 15,
        "rows": 51
      },
      {
        "date": "2026-03-24",
        "hour": "14:00",
        "sales": 56.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-03-24",
        "hour": "15:00",
        "sales": 375.5,
        "orders": 18,
        "rows": 71
      },
      {
        "date": "2026-03-24",
        "hour": "16:00",
        "sales": 114.0,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-03-24",
        "hour": "17:00",
        "sales": 178.0,
        "orders": 8,
        "rows": 31
      },
      {
        "date": "2026-03-24",
        "hour": "18:00",
        "sales": 190.5,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-03-24",
        "hour": "19:00",
        "sales": 173.5,
        "orders": 16,
        "rows": 36
      },
      {
        "date": "2026-03-24",
        "hour": "20:00",
        "sales": 91.5,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-03-25",
        "hour": "07:00",
        "sales": 6.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-25",
        "hour": "08:00",
        "sales": 8.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-03-25",
        "hour": "09:00",
        "sales": 32.5,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-03-25",
        "hour": "10:00",
        "sales": 118.5,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-03-25",
        "hour": "11:00",
        "sales": 205.5,
        "orders": 11,
        "rows": 48
      },
      {
        "date": "2026-03-25",
        "hour": "12:00",
        "sales": 106.5,
        "orders": 9,
        "rows": 26
      },
      {
        "date": "2026-03-25",
        "hour": "13:00",
        "sales": 141.0,
        "orders": 8,
        "rows": 31
      },
      {
        "date": "2026-03-25",
        "hour": "14:00",
        "sales": 122.0,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-03-25",
        "hour": "15:00",
        "sales": 240.0,
        "orders": 16,
        "rows": 52
      },
      {
        "date": "2026-03-25",
        "hour": "16:00",
        "sales": 227.0,
        "orders": 11,
        "rows": 48
      },
      {
        "date": "2026-03-25",
        "hour": "17:00",
        "sales": 145.0,
        "orders": 6,
        "rows": 29
      },
      {
        "date": "2026-03-25",
        "hour": "18:00",
        "sales": 304.0,
        "orders": 15,
        "rows": 60
      },
      {
        "date": "2026-03-25",
        "hour": "19:00",
        "sales": 210.0,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-03-25",
        "hour": "20:00",
        "sales": 86.5,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-03-26",
        "hour": "06:00",
        "sales": 4.4,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-03-26",
        "hour": "07:00",
        "sales": 38.0,
        "orders": 2,
        "rows": 10
      },
      {
        "date": "2026-03-26",
        "hour": "08:00",
        "sales": 56.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-03-26",
        "hour": "09:00",
        "sales": 85.0,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-03-26",
        "hour": "10:00",
        "sales": 126.0,
        "orders": 7,
        "rows": 27
      },
      {
        "date": "2026-03-26",
        "hour": "11:00",
        "sales": 149.0,
        "orders": 14,
        "rows": 32
      },
      {
        "date": "2026-03-26",
        "hour": "12:00",
        "sales": 181.5,
        "orders": 14,
        "rows": 39
      },
      {
        "date": "2026-03-26",
        "hour": "13:00",
        "sales": 146.0,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-03-26",
        "hour": "14:00",
        "sales": 137.0,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-03-26",
        "hour": "15:00",
        "sales": 235.2,
        "orders": 15,
        "rows": 51
      },
      {
        "date": "2026-03-26",
        "hour": "16:00",
        "sales": 272.2,
        "orders": 14,
        "rows": 55
      },
      {
        "date": "2026-03-26",
        "hour": "17:00",
        "sales": 117.0,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-03-26",
        "hour": "18:00",
        "sales": 93.0,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-03-26",
        "hour": "19:00",
        "sales": 392.5,
        "orders": 16,
        "rows": 75
      },
      {
        "date": "2026-03-26",
        "hour": "20:00",
        "sales": 263.5,
        "orders": 12,
        "rows": 52
      },
      {
        "date": "2026-03-27",
        "hour": "06:00",
        "sales": 23.0,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-03-27",
        "hour": "07:00",
        "sales": 38.5,
        "orders": 4,
        "rows": 8
      },
      {
        "date": "2026-03-27",
        "hour": "08:00",
        "sales": 79.0,
        "orders": 4,
        "rows": 25
      },
      {
        "date": "2026-03-27",
        "hour": "09:00",
        "sales": 75.3,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-03-27",
        "hour": "10:00",
        "sales": 120.0,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-03-27",
        "hour": "11:00",
        "sales": 252.0,
        "orders": 15,
        "rows": 51
      },
      {
        "date": "2026-03-27",
        "hour": "12:00",
        "sales": 178.0,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-03-27",
        "hour": "13:00",
        "sales": 243.5,
        "orders": 15,
        "rows": 54
      },
      {
        "date": "2026-03-27",
        "hour": "14:00",
        "sales": 387.5,
        "orders": 17,
        "rows": 80
      },
      {
        "date": "2026-03-27",
        "hour": "15:00",
        "sales": 647.5,
        "orders": 31,
        "rows": 131
      },
      {
        "date": "2026-03-27",
        "hour": "16:00",
        "sales": 297.5,
        "orders": 17,
        "rows": 66
      },
      {
        "date": "2026-03-27",
        "hour": "17:00",
        "sales": 300.0,
        "orders": 18,
        "rows": 63
      },
      {
        "date": "2026-03-27",
        "hour": "18:00",
        "sales": 369.0,
        "orders": 18,
        "rows": 68
      },
      {
        "date": "2026-03-27",
        "hour": "19:00",
        "sales": 555.0,
        "orders": 28,
        "rows": 114
      },
      {
        "date": "2026-03-27",
        "hour": "20:00",
        "sales": 286.5,
        "orders": 14,
        "rows": 47
      },
      {
        "date": "2026-03-27",
        "hour": "21:00",
        "sales": 81.0,
        "orders": 4,
        "rows": 16
      },
      {
        "date": "2026-03-27",
        "hour": "22:00",
        "sales": 80.0,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-03-28",
        "hour": "07:00",
        "sales": 8.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-28",
        "hour": "08:00",
        "sales": 60.5,
        "orders": 7,
        "rows": 15
      },
      {
        "date": "2026-03-28",
        "hour": "09:00",
        "sales": 176.7,
        "orders": 11,
        "rows": 46
      },
      {
        "date": "2026-03-28",
        "hour": "10:00",
        "sales": 334.0,
        "orders": 15,
        "rows": 68
      },
      {
        "date": "2026-03-28",
        "hour": "11:00",
        "sales": 428.0,
        "orders": 25,
        "rows": 83
      },
      {
        "date": "2026-03-28",
        "hour": "12:00",
        "sales": 297.0,
        "orders": 19,
        "rows": 63
      },
      {
        "date": "2026-03-28",
        "hour": "13:00",
        "sales": 715.0,
        "orders": 33,
        "rows": 130
      },
      {
        "date": "2026-03-28",
        "hour": "14:00",
        "sales": 473.5,
        "orders": 29,
        "rows": 96
      },
      {
        "date": "2026-03-28",
        "hour": "15:00",
        "sales": 466.5,
        "orders": 26,
        "rows": 95
      },
      {
        "date": "2026-03-28",
        "hour": "16:00",
        "sales": 449.0,
        "orders": 23,
        "rows": 93
      },
      {
        "date": "2026-03-28",
        "hour": "17:00",
        "sales": 606.0,
        "orders": 28,
        "rows": 123
      },
      {
        "date": "2026-03-28",
        "hour": "18:00",
        "sales": 429.5,
        "orders": 23,
        "rows": 85
      },
      {
        "date": "2026-03-28",
        "hour": "19:00",
        "sales": 318.0,
        "orders": 21,
        "rows": 62
      },
      {
        "date": "2026-03-28",
        "hour": "20:00",
        "sales": 466.0,
        "orders": 30,
        "rows": 94
      },
      {
        "date": "2026-03-28",
        "hour": "21:00",
        "sales": 109.0,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-03-28",
        "hour": "22:00",
        "sales": 30.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-03-29",
        "hour": "08:00",
        "sales": 159.5,
        "orders": 9,
        "rows": 47
      },
      {
        "date": "2026-03-29",
        "hour": "09:00",
        "sales": 72.0,
        "orders": 7,
        "rows": 13
      },
      {
        "date": "2026-03-29",
        "hour": "10:00",
        "sales": 317.0,
        "orders": 16,
        "rows": 60
      },
      {
        "date": "2026-03-29",
        "hour": "11:00",
        "sales": 487.0,
        "orders": 22,
        "rows": 110
      },
      {
        "date": "2026-03-29",
        "hour": "12:00",
        "sales": 644.5,
        "orders": 34,
        "rows": 125
      },
      {
        "date": "2026-03-29",
        "hour": "13:00",
        "sales": 372.5,
        "orders": 17,
        "rows": 74
      },
      {
        "date": "2026-03-29",
        "hour": "14:00",
        "sales": 545.0,
        "orders": 33,
        "rows": 119
      },
      {
        "date": "2026-03-29",
        "hour": "15:00",
        "sales": 450.5,
        "orders": 20,
        "rows": 85
      },
      {
        "date": "2026-03-29",
        "hour": "16:00",
        "sales": 542.0,
        "orders": 32,
        "rows": 110
      },
      {
        "date": "2026-03-29",
        "hour": "17:00",
        "sales": 504.0,
        "orders": 28,
        "rows": 103
      },
      {
        "date": "2026-03-29",
        "hour": "18:00",
        "sales": 304.0,
        "orders": 16,
        "rows": 62
      },
      {
        "date": "2026-03-29",
        "hour": "19:00",
        "sales": 201.2,
        "orders": 15,
        "rows": 42
      },
      {
        "date": "2026-03-29",
        "hour": "20:00",
        "sales": 62.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-03-30",
        "hour": "07:00",
        "sales": 6.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-30",
        "hour": "08:00",
        "sales": 25.4,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-03-30",
        "hour": "09:00",
        "sales": 71.7,
        "orders": 4,
        "rows": 19
      },
      {
        "date": "2026-03-30",
        "hour": "10:00",
        "sales": 112.6,
        "orders": 9,
        "rows": 29
      },
      {
        "date": "2026-03-30",
        "hour": "11:00",
        "sales": 92.0,
        "orders": 6,
        "rows": 18
      },
      {
        "date": "2026-03-30",
        "hour": "12:00",
        "sales": 102.0,
        "orders": 6,
        "rows": 21
      },
      {
        "date": "2026-03-30",
        "hour": "13:00",
        "sales": 204.5,
        "orders": 12,
        "rows": 34
      },
      {
        "date": "2026-03-30",
        "hour": "14:00",
        "sales": 100.0,
        "orders": 10,
        "rows": 21
      },
      {
        "date": "2026-03-30",
        "hour": "15:00",
        "sales": 318.0,
        "orders": 22,
        "rows": 61
      },
      {
        "date": "2026-03-30",
        "hour": "16:00",
        "sales": 74.5,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-03-30",
        "hour": "17:00",
        "sales": 220.0,
        "orders": 12,
        "rows": 41
      },
      {
        "date": "2026-03-30",
        "hour": "18:00",
        "sales": 130.9,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-03-30",
        "hour": "19:00",
        "sales": 99.5,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-03-30",
        "hour": "20:00",
        "sales": 86.0,
        "orders": 9,
        "rows": 19
      },
      {
        "date": "2026-03-31",
        "hour": "08:00",
        "sales": 82.5,
        "orders": 5,
        "rows": 18
      },
      {
        "date": "2026-03-31",
        "hour": "09:00",
        "sales": 48.0,
        "orders": 2,
        "rows": 11
      },
      {
        "date": "2026-03-31",
        "hour": "10:00",
        "sales": 78.5,
        "orders": 4,
        "rows": 8
      },
      {
        "date": "2026-03-31",
        "hour": "11:00",
        "sales": 290.0,
        "orders": 16,
        "rows": 60
      },
      {
        "date": "2026-03-31",
        "hour": "12:00",
        "sales": 186.0,
        "orders": 11,
        "rows": 37
      },
      {
        "date": "2026-03-31",
        "hour": "13:00",
        "sales": 236.0,
        "orders": 12,
        "rows": 48
      },
      {
        "date": "2026-03-31",
        "hour": "14:00",
        "sales": 300.0,
        "orders": 17,
        "rows": 55
      },
      {
        "date": "2026-03-31",
        "hour": "15:00",
        "sales": 262.0,
        "orders": 11,
        "rows": 48
      },
      {
        "date": "2026-03-31",
        "hour": "16:00",
        "sales": 107.5,
        "orders": 9,
        "rows": 20
      },
      {
        "date": "2026-03-31",
        "hour": "17:00",
        "sales": 102.2,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-03-31",
        "hour": "18:00",
        "sales": 239.0,
        "orders": 15,
        "rows": 48
      },
      {
        "date": "2026-03-31",
        "hour": "19:00",
        "sales": 214.5,
        "orders": 12,
        "rows": 41
      },
      {
        "date": "2026-03-31",
        "hour": "20:00",
        "sales": 201.0,
        "orders": 12,
        "rows": 40
      },
      {
        "date": "2026-04-01",
        "hour": "07:00",
        "sales": 21.5,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-04-01",
        "hour": "08:00",
        "sales": 63.5,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-04-01",
        "hour": "09:00",
        "sales": 40.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-04-01",
        "hour": "10:00",
        "sales": 71.0,
        "orders": 6,
        "rows": 18
      },
      {
        "date": "2026-04-01",
        "hour": "11:00",
        "sales": 259.0,
        "orders": 15,
        "rows": 55
      },
      {
        "date": "2026-04-01",
        "hour": "12:00",
        "sales": 193.5,
        "orders": 10,
        "rows": 37
      },
      {
        "date": "2026-04-01",
        "hour": "13:00",
        "sales": 199.5,
        "orders": 13,
        "rows": 42
      },
      {
        "date": "2026-04-01",
        "hour": "14:00",
        "sales": 159.0,
        "orders": 11,
        "rows": 31
      },
      {
        "date": "2026-04-01",
        "hour": "15:00",
        "sales": 246.0,
        "orders": 13,
        "rows": 50
      },
      {
        "date": "2026-04-01",
        "hour": "16:00",
        "sales": 207.0,
        "orders": 9,
        "rows": 41
      },
      {
        "date": "2026-04-01",
        "hour": "17:00",
        "sales": 135.0,
        "orders": 6,
        "rows": 25
      },
      {
        "date": "2026-04-01",
        "hour": "18:00",
        "sales": 254.5,
        "orders": 16,
        "rows": 56
      },
      {
        "date": "2026-04-01",
        "hour": "19:00",
        "sales": 260.0,
        "orders": 14,
        "rows": 50
      },
      {
        "date": "2026-04-01",
        "hour": "20:00",
        "sales": 126.0,
        "orders": 6,
        "rows": 24
      },
      {
        "date": "2026-04-02",
        "hour": "06:00",
        "sales": 21.0,
        "orders": 4,
        "rows": 8
      },
      {
        "date": "2026-04-02",
        "hour": "07:00",
        "sales": 106.5,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-04-02",
        "hour": "08:00",
        "sales": 37.5,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-04-02",
        "hour": "09:00",
        "sales": 115.0,
        "orders": 6,
        "rows": 22
      },
      {
        "date": "2026-04-02",
        "hour": "10:00",
        "sales": 97.0,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-04-02",
        "hour": "11:00",
        "sales": 118.0,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-04-02",
        "hour": "12:00",
        "sales": 224.5,
        "orders": 15,
        "rows": 44
      },
      {
        "date": "2026-04-02",
        "hour": "13:00",
        "sales": 304.5,
        "orders": 21,
        "rows": 60
      },
      {
        "date": "2026-04-02",
        "hour": "14:00",
        "sales": 199.5,
        "orders": 9,
        "rows": 38
      },
      {
        "date": "2026-04-02",
        "hour": "15:00",
        "sales": 84.5,
        "orders": 8,
        "rows": 18
      },
      {
        "date": "2026-04-02",
        "hour": "16:00",
        "sales": 402.5,
        "orders": 16,
        "rows": 78
      },
      {
        "date": "2026-04-02",
        "hour": "17:00",
        "sales": 431.0,
        "orders": 20,
        "rows": 84
      },
      {
        "date": "2026-04-02",
        "hour": "18:00",
        "sales": 235.5,
        "orders": 16,
        "rows": 48
      },
      {
        "date": "2026-04-02",
        "hour": "19:00",
        "sales": 230.0,
        "orders": 15,
        "rows": 50
      },
      {
        "date": "2026-04-02",
        "hour": "20:00",
        "sales": 159.5,
        "orders": 17,
        "rows": 31
      },
      {
        "date": "2026-04-02",
        "hour": "21:00",
        "sales": 6.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-04-03",
        "hour": "05:00",
        "sales": 4.83,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-03",
        "hour": "07:00",
        "sales": 14.85,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-04-03",
        "hour": "08:00",
        "sales": 198.97,
        "orders": 14,
        "rows": 58
      },
      {
        "date": "2026-04-03",
        "hour": "09:00",
        "sales": 275.25,
        "orders": 15,
        "rows": 72
      },
      {
        "date": "2026-04-03",
        "hour": "10:00",
        "sales": 737.75,
        "orders": 28,
        "rows": 157
      },
      {
        "date": "2026-04-03",
        "hour": "11:00",
        "sales": 691.31,
        "orders": 34,
        "rows": 161
      },
      {
        "date": "2026-04-03",
        "hour": "12:00",
        "sales": 528.7,
        "orders": 26,
        "rows": 111
      },
      {
        "date": "2026-04-03",
        "hour": "13:00",
        "sales": 462.5,
        "orders": 20,
        "rows": 100
      },
      {
        "date": "2026-04-03",
        "hour": "14:00",
        "sales": 949.35,
        "orders": 38,
        "rows": 197
      },
      {
        "date": "2026-04-03",
        "hour": "15:00",
        "sales": 724.05,
        "orders": 31,
        "rows": 146
      },
      {
        "date": "2026-04-03",
        "hour": "16:00",
        "sales": 834.25,
        "orders": 29,
        "rows": 165
      },
      {
        "date": "2026-04-03",
        "hour": "17:00",
        "sales": 627.5,
        "orders": 23,
        "rows": 126
      },
      {
        "date": "2026-04-03",
        "hour": "18:00",
        "sales": 687.61,
        "orders": 22,
        "rows": 131
      },
      {
        "date": "2026-04-03",
        "hour": "19:00",
        "sales": 366.15,
        "orders": 17,
        "rows": 85
      },
      {
        "date": "2026-04-03",
        "hour": "20:00",
        "sales": 436.55,
        "orders": 17,
        "rows": 93
      },
      {
        "date": "2026-04-03",
        "hour": "21:00",
        "sales": 110.1,
        "orders": 6,
        "rows": 28
      },
      {
        "date": "2026-04-03",
        "hour": "22:00",
        "sales": 76.9,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-04-04",
        "hour": "07:00",
        "sales": 58.35,
        "orders": 2,
        "rows": 15
      },
      {
        "date": "2026-04-04",
        "hour": "08:00",
        "sales": 160.7,
        "orders": 8,
        "rows": 45
      },
      {
        "date": "2026-04-04",
        "hour": "09:00",
        "sales": 353.45,
        "orders": 14,
        "rows": 72
      },
      {
        "date": "2026-04-04",
        "hour": "10:00",
        "sales": 342.9,
        "orders": 14,
        "rows": 79
      },
      {
        "date": "2026-04-04",
        "hour": "11:00",
        "sales": 619.61,
        "orders": 27,
        "rows": 152
      },
      {
        "date": "2026-04-04",
        "hour": "12:00",
        "sales": 792.65,
        "orders": 25,
        "rows": 165
      },
      {
        "date": "2026-04-04",
        "hour": "13:00",
        "sales": 675.3,
        "orders": 30,
        "rows": 144
      },
      {
        "date": "2026-04-04",
        "hour": "14:00",
        "sales": 891.05,
        "orders": 40,
        "rows": 197
      },
      {
        "date": "2026-04-04",
        "hour": "15:00",
        "sales": 718.92,
        "orders": 28,
        "rows": 155
      },
      {
        "date": "2026-04-04",
        "hour": "16:00",
        "sales": 894.7,
        "orders": 35,
        "rows": 195
      },
      {
        "date": "2026-04-04",
        "hour": "17:00",
        "sales": 719.9,
        "orders": 33,
        "rows": 159
      },
      {
        "date": "2026-04-04",
        "hour": "18:00",
        "sales": 284.53,
        "orders": 11,
        "rows": 63
      },
      {
        "date": "2026-04-04",
        "hour": "19:00",
        "sales": 579.87,
        "orders": 24,
        "rows": 121
      },
      {
        "date": "2026-04-04",
        "hour": "20:00",
        "sales": 308.16,
        "orders": 16,
        "rows": 68
      },
      {
        "date": "2026-04-04",
        "hour": "21:00",
        "sales": 239.46,
        "orders": 12,
        "rows": 55
      },
      {
        "date": "2026-04-04",
        "hour": "22:00",
        "sales": 38.9,
        "orders": 1,
        "rows": 7
      },
      {
        "date": "2026-04-05",
        "hour": "07:00",
        "sales": 26.0,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-05",
        "hour": "08:00",
        "sales": 427.21,
        "orders": 18,
        "rows": 94
      },
      {
        "date": "2026-04-05",
        "hour": "09:00",
        "sales": 682.3,
        "orders": 24,
        "rows": 143
      },
      {
        "date": "2026-04-05",
        "hour": "10:00",
        "sales": 819.76,
        "orders": 33,
        "rows": 167
      },
      {
        "date": "2026-04-05",
        "hour": "11:00",
        "sales": 1434.55,
        "orders": 46,
        "rows": 285
      },
      {
        "date": "2026-04-05",
        "hour": "12:00",
        "sales": 1220.8,
        "orders": 34,
        "rows": 211
      },
      {
        "date": "2026-04-05",
        "hour": "13:00",
        "sales": 1033.2,
        "orders": 34,
        "rows": 210
      },
      {
        "date": "2026-04-05",
        "hour": "14:00",
        "sales": 1128.66,
        "orders": 41,
        "rows": 230
      },
      {
        "date": "2026-04-05",
        "hour": "15:00",
        "sales": 769.51,
        "orders": 35,
        "rows": 180
      },
      {
        "date": "2026-04-05",
        "hour": "16:00",
        "sales": 754.7,
        "orders": 34,
        "rows": 165
      },
      {
        "date": "2026-04-05",
        "hour": "17:00",
        "sales": 211.85,
        "orders": 13,
        "rows": 52
      },
      {
        "date": "2026-04-05",
        "hour": "18:00",
        "sales": 27.25,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-04-06",
        "hour": "07:00",
        "sales": 39.6,
        "orders": 3,
        "rows": 13
      },
      {
        "date": "2026-04-06",
        "hour": "08:00",
        "sales": 18.15,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-04-06",
        "hour": "09:00",
        "sales": 265.21,
        "orders": 13,
        "rows": 67
      },
      {
        "date": "2026-04-06",
        "hour": "10:00",
        "sales": 368.16,
        "orders": 15,
        "rows": 83
      },
      {
        "date": "2026-04-06",
        "hour": "11:00",
        "sales": 528.55,
        "orders": 19,
        "rows": 116
      },
      {
        "date": "2026-04-06",
        "hour": "12:00",
        "sales": 512.91,
        "orders": 22,
        "rows": 122
      },
      {
        "date": "2026-04-06",
        "hour": "13:00",
        "sales": 653.45,
        "orders": 27,
        "rows": 137
      },
      {
        "date": "2026-04-06",
        "hour": "14:00",
        "sales": 782.2,
        "orders": 34,
        "rows": 180
      },
      {
        "date": "2026-04-06",
        "hour": "15:00",
        "sales": 665.6,
        "orders": 27,
        "rows": 152
      },
      {
        "date": "2026-04-06",
        "hour": "16:00",
        "sales": 411.8,
        "orders": 20,
        "rows": 95
      },
      {
        "date": "2026-04-06",
        "hour": "17:00",
        "sales": 387.21,
        "orders": 19,
        "rows": 87
      },
      {
        "date": "2026-04-06",
        "hour": "18:00",
        "sales": 130.25,
        "orders": 7,
        "rows": 25
      },
      {
        "date": "2026-04-07",
        "hour": "07:00",
        "sales": 66.0,
        "orders": 2,
        "rows": 15
      },
      {
        "date": "2026-04-07",
        "hour": "08:00",
        "sales": 13.0,
        "orders": 3,
        "rows": 3
      },
      {
        "date": "2026-04-07",
        "hour": "09:00",
        "sales": 104.0,
        "orders": 10,
        "rows": 22
      },
      {
        "date": "2026-04-07",
        "hour": "10:00",
        "sales": 325.0,
        "orders": 16,
        "rows": 58
      },
      {
        "date": "2026-04-07",
        "hour": "11:00",
        "sales": 217.5,
        "orders": 12,
        "rows": 36
      },
      {
        "date": "2026-04-07",
        "hour": "12:00",
        "sales": 271.0,
        "orders": 17,
        "rows": 52
      },
      {
        "date": "2026-04-07",
        "hour": "13:00",
        "sales": 168.0,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-04-07",
        "hour": "14:00",
        "sales": 186.0,
        "orders": 11,
        "rows": 43
      },
      {
        "date": "2026-04-07",
        "hour": "15:00",
        "sales": 128.5,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-04-07",
        "hour": "16:00",
        "sales": 110.5,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-04-07",
        "hour": "17:00",
        "sales": 84.0,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-04-07",
        "hour": "18:00",
        "sales": 174.0,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-04-07",
        "hour": "19:00",
        "sales": 148.8,
        "orders": 8,
        "rows": 40
      },
      {
        "date": "2026-04-07",
        "hour": "20:00",
        "sales": 111.0,
        "orders": 6,
        "rows": 28
      },
      {
        "date": "2026-04-07",
        "hour": "21:00",
        "sales": 12.0,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-08",
        "hour": "08:00",
        "sales": 64.5,
        "orders": 4,
        "rows": 15
      },
      {
        "date": "2026-04-08",
        "hour": "09:00",
        "sales": 159.0,
        "orders": 10,
        "rows": 40
      },
      {
        "date": "2026-04-08",
        "hour": "10:00",
        "sales": 146.0,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-04-08",
        "hour": "11:00",
        "sales": 142.0,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-04-08",
        "hour": "12:00",
        "sales": 182.5,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-04-08",
        "hour": "13:00",
        "sales": 99.5,
        "orders": 8,
        "rows": 24
      },
      {
        "date": "2026-04-08",
        "hour": "14:00",
        "sales": 197.0,
        "orders": 14,
        "rows": 46
      },
      {
        "date": "2026-04-08",
        "hour": "15:00",
        "sales": 347.5,
        "orders": 19,
        "rows": 73
      },
      {
        "date": "2026-04-08",
        "hour": "16:00",
        "sales": 270.0,
        "orders": 15,
        "rows": 56
      },
      {
        "date": "2026-04-08",
        "hour": "17:00",
        "sales": 177.5,
        "orders": 8,
        "rows": 35
      },
      {
        "date": "2026-04-08",
        "hour": "18:00",
        "sales": 171.0,
        "orders": 9,
        "rows": 34
      },
      {
        "date": "2026-04-08",
        "hour": "19:00",
        "sales": 146.0,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-04-08",
        "hour": "20:00",
        "sales": 59.0,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-04-08",
        "hour": "21:00",
        "sales": 10.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-09",
        "hour": "05:00",
        "sales": 4.4,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-09",
        "hour": "06:00",
        "sales": 34.5,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-04-09",
        "hour": "07:00",
        "sales": 28.5,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-04-09",
        "hour": "08:00",
        "sales": 76.0,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-04-09",
        "hour": "09:00",
        "sales": 198.5,
        "orders": 7,
        "rows": 38
      },
      {
        "date": "2026-04-09",
        "hour": "10:00",
        "sales": 71.0,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-04-09",
        "hour": "11:00",
        "sales": 214.0,
        "orders": 12,
        "rows": 47
      },
      {
        "date": "2026-04-09",
        "hour": "12:00",
        "sales": 263.7,
        "orders": 9,
        "rows": 49
      },
      {
        "date": "2026-04-09",
        "hour": "13:00",
        "sales": 442.0,
        "orders": 14,
        "rows": 72
      },
      {
        "date": "2026-04-09",
        "hour": "14:00",
        "sales": 200.0,
        "orders": 12,
        "rows": 40
      },
      {
        "date": "2026-04-09",
        "hour": "15:00",
        "sales": 178.5,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-04-09",
        "hour": "16:00",
        "sales": 285.2,
        "orders": 16,
        "rows": 60
      },
      {
        "date": "2026-04-09",
        "hour": "17:00",
        "sales": 225.0,
        "orders": 13,
        "rows": 48
      },
      {
        "date": "2026-04-09",
        "hour": "18:00",
        "sales": 150.0,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-04-09",
        "hour": "19:00",
        "sales": 156.0,
        "orders": 8,
        "rows": 35
      },
      {
        "date": "2026-04-09",
        "hour": "20:00",
        "sales": 115.5,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-04-09",
        "hour": "21:00",
        "sales": 10.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-10",
        "hour": "07:00",
        "sales": 46.5,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-04-10",
        "hour": "08:00",
        "sales": 42.5,
        "orders": 4,
        "rows": 8
      },
      {
        "date": "2026-04-10",
        "hour": "09:00",
        "sales": 86.0,
        "orders": 6,
        "rows": 10
      },
      {
        "date": "2026-04-10",
        "hour": "10:00",
        "sales": 172.5,
        "orders": 14,
        "rows": 28
      },
      {
        "date": "2026-04-10",
        "hour": "11:00",
        "sales": 370.5,
        "orders": 19,
        "rows": 70
      },
      {
        "date": "2026-04-10",
        "hour": "12:00",
        "sales": 394.5,
        "orders": 20,
        "rows": 71
      },
      {
        "date": "2026-04-10",
        "hour": "13:00",
        "sales": 461.5,
        "orders": 23,
        "rows": 91
      },
      {
        "date": "2026-04-10",
        "hour": "14:00",
        "sales": 555.6,
        "orders": 24,
        "rows": 105
      },
      {
        "date": "2026-04-10",
        "hour": "15:00",
        "sales": 160.5,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-04-10",
        "hour": "16:00",
        "sales": 409.0,
        "orders": 20,
        "rows": 85
      },
      {
        "date": "2026-04-10",
        "hour": "17:00",
        "sales": 297.5,
        "orders": 16,
        "rows": 58
      },
      {
        "date": "2026-04-10",
        "hour": "18:00",
        "sales": 403.0,
        "orders": 23,
        "rows": 78
      },
      {
        "date": "2026-04-10",
        "hour": "19:00",
        "sales": 323.5,
        "orders": 17,
        "rows": 64
      },
      {
        "date": "2026-04-10",
        "hour": "20:00",
        "sales": 288.5,
        "orders": 16,
        "rows": 55
      },
      {
        "date": "2026-04-10",
        "hour": "21:00",
        "sales": 73.5,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-04-10",
        "hour": "22:00",
        "sales": 28.0,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-04-11",
        "hour": "06:00",
        "sales": 43.5,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-04-11",
        "hour": "07:00",
        "sales": 3.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-04-11",
        "hour": "08:00",
        "sales": 21.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-04-11",
        "hour": "09:00",
        "sales": 199.0,
        "orders": 15,
        "rows": 43
      },
      {
        "date": "2026-04-11",
        "hour": "10:00",
        "sales": 300.0,
        "orders": 13,
        "rows": 61
      },
      {
        "date": "2026-04-11",
        "hour": "11:00",
        "sales": 474.5,
        "orders": 28,
        "rows": 108
      },
      {
        "date": "2026-04-11",
        "hour": "12:00",
        "sales": 329.5,
        "orders": 16,
        "rows": 70
      },
      {
        "date": "2026-04-11",
        "hour": "13:00",
        "sales": 282.5,
        "orders": 13,
        "rows": 60
      },
      {
        "date": "2026-04-11",
        "hour": "14:00",
        "sales": 377.5,
        "orders": 15,
        "rows": 68
      },
      {
        "date": "2026-04-11",
        "hour": "15:00",
        "sales": 535.0,
        "orders": 26,
        "rows": 92
      },
      {
        "date": "2026-04-11",
        "hour": "16:00",
        "sales": 438.5,
        "orders": 19,
        "rows": 88
      },
      {
        "date": "2026-04-11",
        "hour": "17:00",
        "sales": 487.0,
        "orders": 29,
        "rows": 88
      },
      {
        "date": "2026-04-11",
        "hour": "18:00",
        "sales": 494.6,
        "orders": 27,
        "rows": 101
      },
      {
        "date": "2026-04-11",
        "hour": "19:00",
        "sales": 497.5,
        "orders": 25,
        "rows": 97
      },
      {
        "date": "2026-04-11",
        "hour": "20:00",
        "sales": 321.3,
        "orders": 15,
        "rows": 58
      },
      {
        "date": "2026-04-11",
        "hour": "21:00",
        "sales": 239.5,
        "orders": 15,
        "rows": 47
      },
      {
        "date": "2026-04-11",
        "hour": "22:00",
        "sales": 35.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-12",
        "hour": "08:00",
        "sales": 249.0,
        "orders": 14,
        "rows": 46
      },
      {
        "date": "2026-04-12",
        "hour": "09:00",
        "sales": 356.5,
        "orders": 17,
        "rows": 73
      },
      {
        "date": "2026-04-12",
        "hour": "10:00",
        "sales": 763.0,
        "orders": 29,
        "rows": 146
      },
      {
        "date": "2026-04-12",
        "hour": "11:00",
        "sales": 835.5,
        "orders": 34,
        "rows": 157
      },
      {
        "date": "2026-04-12",
        "hour": "12:00",
        "sales": 1312.0,
        "orders": 52,
        "rows": 231
      },
      {
        "date": "2026-04-12",
        "hour": "13:00",
        "sales": 825.5,
        "orders": 29,
        "rows": 157
      },
      {
        "date": "2026-04-12",
        "hour": "14:00",
        "sales": 779.0,
        "orders": 38,
        "rows": 141
      },
      {
        "date": "2026-04-12",
        "hour": "15:00",
        "sales": 835.0,
        "orders": 36,
        "rows": 163
      },
      {
        "date": "2026-04-12",
        "hour": "16:00",
        "sales": 468.5,
        "orders": 24,
        "rows": 101
      },
      {
        "date": "2026-04-12",
        "hour": "17:00",
        "sales": 470.9,
        "orders": 29,
        "rows": 93
      },
      {
        "date": "2026-04-12",
        "hour": "18:00",
        "sales": 391.0,
        "orders": 21,
        "rows": 84
      },
      {
        "date": "2026-04-12",
        "hour": "19:00",
        "sales": 160.5,
        "orders": 13,
        "rows": 31
      },
      {
        "date": "2026-04-12",
        "hour": "20:00",
        "sales": 27.0,
        "orders": 3,
        "rows": 4
      },
      {
        "date": "2026-04-13",
        "hour": "08:00",
        "sales": 9.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-13",
        "hour": "10:00",
        "sales": 272.0,
        "orders": 11,
        "rows": 59
      },
      {
        "date": "2026-04-13",
        "hour": "11:00",
        "sales": 118.5,
        "orders": 5,
        "rows": 21
      },
      {
        "date": "2026-04-13",
        "hour": "12:00",
        "sales": 59.0,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-04-13",
        "hour": "13:00",
        "sales": 263.1,
        "orders": 17,
        "rows": 55
      },
      {
        "date": "2026-04-13",
        "hour": "14:00",
        "sales": 181.5,
        "orders": 13,
        "rows": 42
      },
      {
        "date": "2026-04-13",
        "hour": "15:00",
        "sales": 139.5,
        "orders": 9,
        "rows": 26
      },
      {
        "date": "2026-04-13",
        "hour": "16:00",
        "sales": 152.5,
        "orders": 13,
        "rows": 32
      },
      {
        "date": "2026-04-13",
        "hour": "17:00",
        "sales": 314.5,
        "orders": 15,
        "rows": 74
      },
      {
        "date": "2026-04-13",
        "hour": "18:00",
        "sales": 156.5,
        "orders": 14,
        "rows": 39
      },
      {
        "date": "2026-04-13",
        "hour": "19:00",
        "sales": 89.5,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-04-13",
        "hour": "20:00",
        "sales": 106.5,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-04-14",
        "hour": "06:00",
        "sales": 4.4,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-14",
        "hour": "07:00",
        "sales": 49.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-04-14",
        "hour": "08:00",
        "sales": 165.0,
        "orders": 5,
        "rows": 26
      },
      {
        "date": "2026-04-14",
        "hour": "09:00",
        "sales": 73.0,
        "orders": 7,
        "rows": 16
      },
      {
        "date": "2026-04-14",
        "hour": "10:00",
        "sales": 119.0,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-04-14",
        "hour": "11:00",
        "sales": 275.5,
        "orders": 13,
        "rows": 54
      },
      {
        "date": "2026-04-14",
        "hour": "12:00",
        "sales": 219.5,
        "orders": 12,
        "rows": 42
      },
      {
        "date": "2026-04-14",
        "hour": "13:00",
        "sales": 317.0,
        "orders": 20,
        "rows": 68
      },
      {
        "date": "2026-04-14",
        "hour": "14:00",
        "sales": 108.5,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-04-14",
        "hour": "15:00",
        "sales": 270.0,
        "orders": 15,
        "rows": 61
      },
      {
        "date": "2026-04-14",
        "hour": "16:00",
        "sales": 324.5,
        "orders": 19,
        "rows": 71
      },
      {
        "date": "2026-04-14",
        "hour": "17:00",
        "sales": 136.5,
        "orders": 11,
        "rows": 27
      },
      {
        "date": "2026-04-14",
        "hour": "18:00",
        "sales": 208.6,
        "orders": 13,
        "rows": 44
      },
      {
        "date": "2026-04-14",
        "hour": "19:00",
        "sales": 191.0,
        "orders": 14,
        "rows": 38
      },
      {
        "date": "2026-04-14",
        "hour": "20:00",
        "sales": 117.5,
        "orders": 9,
        "rows": 24
      },
      {
        "date": "2026-04-15",
        "hour": "07:00",
        "sales": 66.5,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-04-15",
        "hour": "08:00",
        "sales": 132.5,
        "orders": 5,
        "rows": 24
      },
      {
        "date": "2026-04-15",
        "hour": "09:00",
        "sales": 137.5,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-04-15",
        "hour": "10:00",
        "sales": 311.5,
        "orders": 14,
        "rows": 60
      },
      {
        "date": "2026-04-15",
        "hour": "11:00",
        "sales": 338.0,
        "orders": 20,
        "rows": 74
      },
      {
        "date": "2026-04-15",
        "hour": "12:00",
        "sales": 300.5,
        "orders": 19,
        "rows": 66
      },
      {
        "date": "2026-04-15",
        "hour": "13:00",
        "sales": 190.5,
        "orders": 13,
        "rows": 40
      },
      {
        "date": "2026-04-15",
        "hour": "14:00",
        "sales": 355.5,
        "orders": 21,
        "rows": 66
      },
      {
        "date": "2026-04-15",
        "hour": "15:00",
        "sales": 226.0,
        "orders": 11,
        "rows": 46
      },
      {
        "date": "2026-04-15",
        "hour": "16:00",
        "sales": 397.0,
        "orders": 20,
        "rows": 75
      },
      {
        "date": "2026-04-15",
        "hour": "17:00",
        "sales": 180.0,
        "orders": 14,
        "rows": 34
      },
      {
        "date": "2026-04-15",
        "hour": "18:00",
        "sales": 254.5,
        "orders": 13,
        "rows": 52
      },
      {
        "date": "2026-04-15",
        "hour": "19:00",
        "sales": 6.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-04-15",
        "hour": "20:00",
        "sales": 111.0,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-04-16",
        "hour": "06:00",
        "sales": 25.5,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-04-16",
        "hour": "07:00",
        "sales": 42.5,
        "orders": 1,
        "rows": 10
      },
      {
        "date": "2026-04-16",
        "hour": "08:00",
        "sales": 63.0,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-04-16",
        "hour": "09:00",
        "sales": 224.5,
        "orders": 8,
        "rows": 49
      },
      {
        "date": "2026-04-16",
        "hour": "10:00",
        "sales": 218.5,
        "orders": 10,
        "rows": 46
      },
      {
        "date": "2026-04-16",
        "hour": "11:00",
        "sales": 278.0,
        "orders": 13,
        "rows": 48
      },
      {
        "date": "2026-04-16",
        "hour": "12:00",
        "sales": 359.5,
        "orders": 17,
        "rows": 78
      },
      {
        "date": "2026-04-16",
        "hour": "13:00",
        "sales": 170.0,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-04-16",
        "hour": "14:00",
        "sales": 317.1,
        "orders": 19,
        "rows": 73
      },
      {
        "date": "2026-04-16",
        "hour": "15:00",
        "sales": 407.0,
        "orders": 19,
        "rows": 77
      },
      {
        "date": "2026-04-16",
        "hour": "16:00",
        "sales": 206.0,
        "orders": 15,
        "rows": 43
      },
      {
        "date": "2026-04-16",
        "hour": "17:00",
        "sales": 237.5,
        "orders": 12,
        "rows": 49
      },
      {
        "date": "2026-04-16",
        "hour": "18:00",
        "sales": 246.0,
        "orders": 14,
        "rows": 50
      },
      {
        "date": "2026-04-16",
        "hour": "19:00",
        "sales": 163.0,
        "orders": 10,
        "rows": 30
      },
      {
        "date": "2026-04-16",
        "hour": "20:00",
        "sales": 141.5,
        "orders": 12,
        "rows": 28
      },
      {
        "date": "2026-04-17",
        "hour": "07:00",
        "sales": 8.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-17",
        "hour": "08:00",
        "sales": 35.0,
        "orders": 4,
        "rows": 8
      },
      {
        "date": "2026-04-17",
        "hour": "09:00",
        "sales": 181.5,
        "orders": 9,
        "rows": 42
      },
      {
        "date": "2026-04-17",
        "hour": "10:00",
        "sales": 216.5,
        "orders": 11,
        "rows": 50
      },
      {
        "date": "2026-04-17",
        "hour": "11:00",
        "sales": 247.5,
        "orders": 14,
        "rows": 51
      },
      {
        "date": "2026-04-17",
        "hour": "12:00",
        "sales": 397.5,
        "orders": 22,
        "rows": 86
      },
      {
        "date": "2026-04-17",
        "hour": "13:00",
        "sales": 539.5,
        "orders": 28,
        "rows": 110
      },
      {
        "date": "2026-04-17",
        "hour": "14:00",
        "sales": 385.0,
        "orders": 17,
        "rows": 71
      },
      {
        "date": "2026-04-17",
        "hour": "15:00",
        "sales": 584.0,
        "orders": 24,
        "rows": 110
      },
      {
        "date": "2026-04-17",
        "hour": "16:00",
        "sales": 313.0,
        "orders": 13,
        "rows": 59
      },
      {
        "date": "2026-04-17",
        "hour": "17:00",
        "sales": 349.5,
        "orders": 20,
        "rows": 68
      },
      {
        "date": "2026-04-17",
        "hour": "18:00",
        "sales": 500.5,
        "orders": 25,
        "rows": 99
      },
      {
        "date": "2026-04-17",
        "hour": "19:00",
        "sales": 330.0,
        "orders": 19,
        "rows": 63
      },
      {
        "date": "2026-04-17",
        "hour": "20:00",
        "sales": 363.7,
        "orders": 25,
        "rows": 77
      },
      {
        "date": "2026-04-17",
        "hour": "21:00",
        "sales": 234.5,
        "orders": 14,
        "rows": 50
      },
      {
        "date": "2026-04-17",
        "hour": "22:00",
        "sales": 25.0,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-04-18",
        "hour": "05:00",
        "sales": 4.4,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-18",
        "hour": "07:00",
        "sales": 34.5,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-04-18",
        "hour": "08:00",
        "sales": 148.0,
        "orders": 4,
        "rows": 35
      },
      {
        "date": "2026-04-18",
        "hour": "09:00",
        "sales": 229.5,
        "orders": 8,
        "rows": 44
      },
      {
        "date": "2026-04-18",
        "hour": "10:00",
        "sales": 220.5,
        "orders": 13,
        "rows": 43
      },
      {
        "date": "2026-04-18",
        "hour": "11:00",
        "sales": 441.0,
        "orders": 18,
        "rows": 72
      },
      {
        "date": "2026-04-18",
        "hour": "12:00",
        "sales": 611.5,
        "orders": 27,
        "rows": 126
      },
      {
        "date": "2026-04-18",
        "hour": "13:00",
        "sales": 495.5,
        "orders": 27,
        "rows": 93
      },
      {
        "date": "2026-04-18",
        "hour": "14:00",
        "sales": 640.5,
        "orders": 34,
        "rows": 127
      },
      {
        "date": "2026-04-18",
        "hour": "15:00",
        "sales": 1002.0,
        "orders": 44,
        "rows": 200
      },
      {
        "date": "2026-04-18",
        "hour": "16:00",
        "sales": 615.0,
        "orders": 29,
        "rows": 104
      },
      {
        "date": "2026-04-18",
        "hour": "17:00",
        "sales": 609.0,
        "orders": 38,
        "rows": 128
      },
      {
        "date": "2026-04-18",
        "hour": "18:00",
        "sales": 544.0,
        "orders": 21,
        "rows": 104
      },
      {
        "date": "2026-04-18",
        "hour": "19:00",
        "sales": 452.5,
        "orders": 24,
        "rows": 86
      },
      {
        "date": "2026-04-18",
        "hour": "20:00",
        "sales": 435.5,
        "orders": 20,
        "rows": 83
      },
      {
        "date": "2026-04-18",
        "hour": "21:00",
        "sales": 87.0,
        "orders": 10,
        "rows": 18
      },
      {
        "date": "2026-04-18",
        "hour": "22:00",
        "sales": 11.0,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-19",
        "hour": "08:00",
        "sales": 232.0,
        "orders": 10,
        "rows": 44
      },
      {
        "date": "2026-04-19",
        "hour": "09:00",
        "sales": 336.5,
        "orders": 17,
        "rows": 66
      },
      {
        "date": "2026-04-19",
        "hour": "10:00",
        "sales": 405.2,
        "orders": 18,
        "rows": 87
      },
      {
        "date": "2026-04-19",
        "hour": "11:00",
        "sales": 572.5,
        "orders": 29,
        "rows": 115
      },
      {
        "date": "2026-04-19",
        "hour": "12:00",
        "sales": 743.5,
        "orders": 32,
        "rows": 146
      },
      {
        "date": "2026-04-19",
        "hour": "13:00",
        "sales": 668.5,
        "orders": 39,
        "rows": 144
      },
      {
        "date": "2026-04-19",
        "hour": "14:00",
        "sales": 956.0,
        "orders": 43,
        "rows": 193
      },
      {
        "date": "2026-04-19",
        "hour": "15:00",
        "sales": 615.5,
        "orders": 29,
        "rows": 129
      },
      {
        "date": "2026-04-19",
        "hour": "16:00",
        "sales": 420.0,
        "orders": 23,
        "rows": 85
      },
      {
        "date": "2026-04-19",
        "hour": "17:00",
        "sales": 278.0,
        "orders": 12,
        "rows": 58
      },
      {
        "date": "2026-04-19",
        "hour": "18:00",
        "sales": 496.0,
        "orders": 22,
        "rows": 100
      },
      {
        "date": "2026-04-19",
        "hour": "19:00",
        "sales": 123.0,
        "orders": 13,
        "rows": 30
      },
      {
        "date": "2026-04-19",
        "hour": "20:00",
        "sales": 194.0,
        "orders": 10,
        "rows": 37
      },
      {
        "date": "2026-04-20",
        "hour": "07:00",
        "sales": 37.5,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-04-20",
        "hour": "08:00",
        "sales": 24.5,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-04-20",
        "hour": "09:00",
        "sales": 11.0,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-04-20",
        "hour": "10:00",
        "sales": 71.5,
        "orders": 7,
        "rows": 16
      },
      {
        "date": "2026-04-20",
        "hour": "11:00",
        "sales": 175.0,
        "orders": 12,
        "rows": 38
      },
      {
        "date": "2026-04-20",
        "hour": "12:00",
        "sales": 277.2,
        "orders": 20,
        "rows": 66
      },
      {
        "date": "2026-04-20",
        "hour": "13:00",
        "sales": 113.5,
        "orders": 9,
        "rows": 23
      },
      {
        "date": "2026-04-20",
        "hour": "14:00",
        "sales": 289.5,
        "orders": 22,
        "rows": 62
      },
      {
        "date": "2026-04-20",
        "hour": "15:00",
        "sales": 213.0,
        "orders": 10,
        "rows": 43
      },
      {
        "date": "2026-04-20",
        "hour": "16:00",
        "sales": 321.5,
        "orders": 16,
        "rows": 64
      },
      {
        "date": "2026-04-20",
        "hour": "17:00",
        "sales": 206.0,
        "orders": 14,
        "rows": 43
      },
      {
        "date": "2026-04-20",
        "hour": "18:00",
        "sales": 232.0,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-04-20",
        "hour": "19:00",
        "sales": 178.0,
        "orders": 12,
        "rows": 37
      },
      {
        "date": "2026-04-20",
        "hour": "20:00",
        "sales": 29.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-04-21",
        "hour": "07:00",
        "sales": 55.0,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-04-21",
        "hour": "08:00",
        "sales": 17.0,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-04-21",
        "hour": "09:00",
        "sales": 114.0,
        "orders": 7,
        "rows": 27
      },
      {
        "date": "2026-04-21",
        "hour": "10:00",
        "sales": 125.0,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-04-21",
        "hour": "11:00",
        "sales": 120.5,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-04-21",
        "hour": "12:00",
        "sales": 247.0,
        "orders": 15,
        "rows": 48
      },
      {
        "date": "2026-04-21",
        "hour": "13:00",
        "sales": 110.0,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-04-21",
        "hour": "14:00",
        "sales": 219.5,
        "orders": 11,
        "rows": 46
      },
      {
        "date": "2026-04-21",
        "hour": "15:00",
        "sales": 208.0,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-04-21",
        "hour": "16:00",
        "sales": 135.0,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-04-21",
        "hour": "17:00",
        "sales": 190.0,
        "orders": 14,
        "rows": 39
      },
      {
        "date": "2026-04-21",
        "hour": "18:00",
        "sales": 313.0,
        "orders": 17,
        "rows": 55
      },
      {
        "date": "2026-04-21",
        "hour": "19:00",
        "sales": 273.0,
        "orders": 16,
        "rows": 59
      },
      {
        "date": "2026-04-21",
        "hour": "20:00",
        "sales": 121.5,
        "orders": 5,
        "rows": 23
      },
      {
        "date": "2026-04-21",
        "hour": "21:00",
        "sales": 10.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-22",
        "hour": "07:00",
        "sales": 70.5,
        "orders": 5,
        "rows": 21
      },
      {
        "date": "2026-04-22",
        "hour": "08:00",
        "sales": 41.0,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-04-22",
        "hour": "09:00",
        "sales": 56.0,
        "orders": 4,
        "rows": 5
      },
      {
        "date": "2026-04-22",
        "hour": "10:00",
        "sales": 103.5,
        "orders": 8,
        "rows": 19
      },
      {
        "date": "2026-04-22",
        "hour": "11:00",
        "sales": 148.5,
        "orders": 7,
        "rows": 34
      },
      {
        "date": "2026-04-22",
        "hour": "12:00",
        "sales": 181.0,
        "orders": 13,
        "rows": 43
      },
      {
        "date": "2026-04-22",
        "hour": "13:00",
        "sales": 218.5,
        "orders": 12,
        "rows": 48
      },
      {
        "date": "2026-04-22",
        "hour": "14:00",
        "sales": 249.1,
        "orders": 14,
        "rows": 47
      },
      {
        "date": "2026-04-22",
        "hour": "15:00",
        "sales": 236.5,
        "orders": 13,
        "rows": 40
      },
      {
        "date": "2026-04-22",
        "hour": "16:00",
        "sales": 174.9,
        "orders": 14,
        "rows": 39
      },
      {
        "date": "2026-04-22",
        "hour": "17:00",
        "sales": 254.0,
        "orders": 14,
        "rows": 52
      },
      {
        "date": "2026-04-22",
        "hour": "18:00",
        "sales": 260.0,
        "orders": 13,
        "rows": 49
      },
      {
        "date": "2026-04-22",
        "hour": "19:00",
        "sales": 197.5,
        "orders": 14,
        "rows": 39
      },
      {
        "date": "2026-04-22",
        "hour": "20:00",
        "sales": 56.5,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-04-23",
        "hour": "06:00",
        "sales": 47.0,
        "orders": 1,
        "rows": 9
      },
      {
        "date": "2026-04-23",
        "hour": "07:00",
        "sales": 23.5,
        "orders": 4,
        "rows": 5
      },
      {
        "date": "2026-04-23",
        "hour": "08:00",
        "sales": 82.0,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-04-23",
        "hour": "09:00",
        "sales": 126.2,
        "orders": 7,
        "rows": 29
      },
      {
        "date": "2026-04-23",
        "hour": "10:00",
        "sales": 132.5,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-04-23",
        "hour": "11:00",
        "sales": 189.0,
        "orders": 11,
        "rows": 37
      },
      {
        "date": "2026-04-23",
        "hour": "12:00",
        "sales": 251.0,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-04-23",
        "hour": "13:00",
        "sales": 126.0,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-04-23",
        "hour": "14:00",
        "sales": 250.7,
        "orders": 16,
        "rows": 53
      },
      {
        "date": "2026-04-23",
        "hour": "15:00",
        "sales": 269.5,
        "orders": 19,
        "rows": 57
      },
      {
        "date": "2026-04-23",
        "hour": "16:00",
        "sales": 212.0,
        "orders": 10,
        "rows": 42
      },
      {
        "date": "2026-04-23",
        "hour": "17:00",
        "sales": 347.3,
        "orders": 17,
        "rows": 76
      },
      {
        "date": "2026-04-23",
        "hour": "18:00",
        "sales": 432.0,
        "orders": 28,
        "rows": 97
      },
      {
        "date": "2026-04-23",
        "hour": "19:00",
        "sales": 141.5,
        "orders": 13,
        "rows": 33
      },
      {
        "date": "2026-04-23",
        "hour": "20:00",
        "sales": 131.0,
        "orders": 10,
        "rows": 30
      },
      {
        "date": "2026-04-24",
        "hour": "07:00",
        "sales": 136.0,
        "orders": 8,
        "rows": 32
      },
      {
        "date": "2026-04-24",
        "hour": "08:00",
        "sales": 64.5,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-04-24",
        "hour": "09:00",
        "sales": 164.0,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-04-24",
        "hour": "10:00",
        "sales": 205.5,
        "orders": 14,
        "rows": 40
      },
      {
        "date": "2026-04-24",
        "hour": "11:00",
        "sales": 207.5,
        "orders": 19,
        "rows": 47
      },
      {
        "date": "2026-04-24",
        "hour": "12:00",
        "sales": 397.0,
        "orders": 15,
        "rows": 79
      },
      {
        "date": "2026-04-24",
        "hour": "13:00",
        "sales": 317.0,
        "orders": 18,
        "rows": 61
      },
      {
        "date": "2026-04-24",
        "hour": "14:00",
        "sales": 412.5,
        "orders": 23,
        "rows": 89
      },
      {
        "date": "2026-04-24",
        "hour": "15:00",
        "sales": 451.0,
        "orders": 21,
        "rows": 92
      },
      {
        "date": "2026-04-24",
        "hour": "16:00",
        "sales": 316.0,
        "orders": 15,
        "rows": 69
      },
      {
        "date": "2026-04-24",
        "hour": "17:00",
        "sales": 375.0,
        "orders": 17,
        "rows": 78
      },
      {
        "date": "2026-04-24",
        "hour": "18:00",
        "sales": 379.0,
        "orders": 19,
        "rows": 74
      },
      {
        "date": "2026-04-24",
        "hour": "19:00",
        "sales": 448.0,
        "orders": 24,
        "rows": 91
      },
      {
        "date": "2026-04-24",
        "hour": "20:00",
        "sales": 243.9,
        "orders": 20,
        "rows": 55
      },
      {
        "date": "2026-04-24",
        "hour": "21:00",
        "sales": 84.0,
        "orders": 9,
        "rows": 15
      },
      {
        "date": "2026-04-24",
        "hour": "22:00",
        "sales": 53.3,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-04-25",
        "hour": "06:00",
        "sales": 20.1,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-25",
        "hour": "07:00",
        "sales": 44.0,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-04-25",
        "hour": "08:00",
        "sales": 39.9,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-04-25",
        "hour": "09:00",
        "sales": 364.3,
        "orders": 13,
        "rows": 74
      },
      {
        "date": "2026-04-25",
        "hour": "10:00",
        "sales": 406.13,
        "orders": 16,
        "rows": 95
      },
      {
        "date": "2026-04-25",
        "hour": "11:00",
        "sales": 645.0,
        "orders": 25,
        "rows": 125
      },
      {
        "date": "2026-04-25",
        "hour": "12:00",
        "sales": 883.35,
        "orders": 36,
        "rows": 191
      },
      {
        "date": "2026-04-25",
        "hour": "13:00",
        "sales": 1217.7,
        "orders": 46,
        "rows": 265
      },
      {
        "date": "2026-04-25",
        "hour": "14:00",
        "sales": 1250.4,
        "orders": 49,
        "rows": 272
      },
      {
        "date": "2026-04-25",
        "hour": "15:00",
        "sales": 698.65,
        "orders": 27,
        "rows": 151
      },
      {
        "date": "2026-04-25",
        "hour": "16:00",
        "sales": 540.9,
        "orders": 24,
        "rows": 122
      },
      {
        "date": "2026-04-25",
        "hour": "17:00",
        "sales": 605.47,
        "orders": 25,
        "rows": 140
      },
      {
        "date": "2026-04-25",
        "hour": "18:00",
        "sales": 686.35,
        "orders": 29,
        "rows": 149
      },
      {
        "date": "2026-04-25",
        "hour": "19:00",
        "sales": 681.9,
        "orders": 29,
        "rows": 158
      },
      {
        "date": "2026-04-25",
        "hour": "20:00",
        "sales": 372.5,
        "orders": 18,
        "rows": 84
      },
      {
        "date": "2026-04-25",
        "hour": "21:00",
        "sales": 123.05,
        "orders": 8,
        "rows": 31
      },
      {
        "date": "2026-04-25",
        "hour": "22:00",
        "sales": 8.05,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-26",
        "hour": "08:00",
        "sales": 141.0,
        "orders": 10,
        "rows": 34
      },
      {
        "date": "2026-04-26",
        "hour": "09:00",
        "sales": 313.5,
        "orders": 16,
        "rows": 67
      },
      {
        "date": "2026-04-26",
        "hour": "10:00",
        "sales": 605.5,
        "orders": 25,
        "rows": 132
      },
      {
        "date": "2026-04-26",
        "hour": "11:00",
        "sales": 494.5,
        "orders": 23,
        "rows": 98
      },
      {
        "date": "2026-04-26",
        "hour": "12:00",
        "sales": 688.5,
        "orders": 27,
        "rows": 128
      },
      {
        "date": "2026-04-26",
        "hour": "13:00",
        "sales": 830.0,
        "orders": 36,
        "rows": 165
      },
      {
        "date": "2026-04-26",
        "hour": "14:00",
        "sales": 731.0,
        "orders": 34,
        "rows": 138
      },
      {
        "date": "2026-04-26",
        "hour": "15:00",
        "sales": 928.0,
        "orders": 44,
        "rows": 182
      },
      {
        "date": "2026-04-26",
        "hour": "16:00",
        "sales": 960.5,
        "orders": 34,
        "rows": 168
      },
      {
        "date": "2026-04-26",
        "hour": "17:00",
        "sales": 660.5,
        "orders": 33,
        "rows": 142
      },
      {
        "date": "2026-04-26",
        "hour": "18:00",
        "sales": 601.1,
        "orders": 29,
        "rows": 122
      },
      {
        "date": "2026-04-26",
        "hour": "19:00",
        "sales": 369.0,
        "orders": 24,
        "rows": 82
      },
      {
        "date": "2026-04-26",
        "hour": "20:00",
        "sales": 268.5,
        "orders": 23,
        "rows": 64
      },
      {
        "date": "2026-04-26",
        "hour": "21:00",
        "sales": 13.0,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-04-27",
        "hour": "07:00",
        "sales": 61.1,
        "orders": 3,
        "rows": 16
      },
      {
        "date": "2026-04-27",
        "hour": "08:00",
        "sales": 138.5,
        "orders": 7,
        "rows": 34
      },
      {
        "date": "2026-04-27",
        "hour": "09:00",
        "sales": 181.5,
        "orders": 9,
        "rows": 44
      },
      {
        "date": "2026-04-27",
        "hour": "10:00",
        "sales": 485.74,
        "orders": 21,
        "rows": 112
      },
      {
        "date": "2026-04-27",
        "hour": "11:00",
        "sales": 862.1,
        "orders": 34,
        "rows": 200
      },
      {
        "date": "2026-04-27",
        "hour": "12:00",
        "sales": 476.4,
        "orders": 25,
        "rows": 113
      },
      {
        "date": "2026-04-27",
        "hour": "13:00",
        "sales": 538.36,
        "orders": 28,
        "rows": 132
      },
      {
        "date": "2026-04-27",
        "hour": "14:00",
        "sales": 849.15,
        "orders": 36,
        "rows": 199
      },
      {
        "date": "2026-04-27",
        "hour": "15:00",
        "sales": 517.6,
        "orders": 20,
        "rows": 114
      },
      {
        "date": "2026-04-27",
        "hour": "16:00",
        "sales": 639.3,
        "orders": 27,
        "rows": 141
      },
      {
        "date": "2026-04-27",
        "hour": "17:00",
        "sales": 546.8,
        "orders": 27,
        "rows": 125
      },
      {
        "date": "2026-04-27",
        "hour": "18:00",
        "sales": 302.5,
        "orders": 17,
        "rows": 71
      },
      {
        "date": "2026-04-27",
        "hour": "19:00",
        "sales": 81.85,
        "orders": 5,
        "rows": 21
      },
      {
        "date": "2026-04-27",
        "hour": "20:00",
        "sales": 142.15,
        "orders": 9,
        "rows": 36
      },
      {
        "date": "2026-04-28",
        "hour": "06:00",
        "sales": 4.4,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-28",
        "hour": "07:00",
        "sales": 17.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-28",
        "hour": "08:00",
        "sales": 97.5,
        "orders": 3,
        "rows": 13
      },
      {
        "date": "2026-04-28",
        "hour": "09:00",
        "sales": 39.0,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-04-28",
        "hour": "10:00",
        "sales": 82.5,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-04-28",
        "hour": "11:00",
        "sales": 120.5,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-04-28",
        "hour": "12:00",
        "sales": 97.0,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-04-28",
        "hour": "13:00",
        "sales": 178.5,
        "orders": 12,
        "rows": 36
      },
      {
        "date": "2026-04-28",
        "hour": "14:00",
        "sales": 310.6,
        "orders": 18,
        "rows": 67
      },
      {
        "date": "2026-04-28",
        "hour": "15:00",
        "sales": 282.0,
        "orders": 17,
        "rows": 60
      },
      {
        "date": "2026-04-28",
        "hour": "16:00",
        "sales": 62.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-04-28",
        "hour": "17:00",
        "sales": 391.0,
        "orders": 20,
        "rows": 81
      },
      {
        "date": "2026-04-28",
        "hour": "18:00",
        "sales": 149.5,
        "orders": 9,
        "rows": 31
      },
      {
        "date": "2026-04-28",
        "hour": "19:00",
        "sales": 195.5,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-04-28",
        "hour": "20:00",
        "sales": 167.5,
        "orders": 13,
        "rows": 39
      },
      {
        "date": "2026-04-29",
        "hour": "06:00",
        "sales": 10.0,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-04-29",
        "hour": "08:00",
        "sales": 20.0,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-04-29",
        "hour": "09:00",
        "sales": 84.0,
        "orders": 4,
        "rows": 19
      },
      {
        "date": "2026-04-29",
        "hour": "10:00",
        "sales": 154.0,
        "orders": 13,
        "rows": 39
      },
      {
        "date": "2026-04-29",
        "hour": "11:00",
        "sales": 124.0,
        "orders": 9,
        "rows": 26
      },
      {
        "date": "2026-04-29",
        "hour": "12:00",
        "sales": 140.5,
        "orders": 9,
        "rows": 29
      },
      {
        "date": "2026-04-29",
        "hour": "13:00",
        "sales": 294.0,
        "orders": 13,
        "rows": 59
      },
      {
        "date": "2026-04-29",
        "hour": "14:00",
        "sales": 234.5,
        "orders": 14,
        "rows": 37
      },
      {
        "date": "2026-04-29",
        "hour": "15:00",
        "sales": 175.0,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-04-29",
        "hour": "16:00",
        "sales": 176.0,
        "orders": 12,
        "rows": 37
      },
      {
        "date": "2026-04-29",
        "hour": "17:00",
        "sales": 233.0,
        "orders": 12,
        "rows": 47
      },
      {
        "date": "2026-04-29",
        "hour": "18:00",
        "sales": 214.0,
        "orders": 9,
        "rows": 45
      },
      {
        "date": "2026-04-29",
        "hour": "19:00",
        "sales": 144.5,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-04-29",
        "hour": "20:00",
        "sales": 88.3,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-04-30",
        "hour": "07:00",
        "sales": 125.0,
        "orders": 3,
        "rows": 24
      },
      {
        "date": "2026-04-30",
        "hour": "08:00",
        "sales": 59.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-04-30",
        "hour": "09:00",
        "sales": 54.5,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-04-30",
        "hour": "10:00",
        "sales": 105.7,
        "orders": 10,
        "rows": 26
      },
      {
        "date": "2026-04-30",
        "hour": "11:00",
        "sales": 81.0,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-04-30",
        "hour": "12:00",
        "sales": 224.5,
        "orders": 15,
        "rows": 45
      },
      {
        "date": "2026-04-30",
        "hour": "13:00",
        "sales": 291.5,
        "orders": 15,
        "rows": 62
      },
      {
        "date": "2026-04-30",
        "hour": "14:00",
        "sales": 115.7,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-04-30",
        "hour": "15:00",
        "sales": 50.5,
        "orders": 6,
        "rows": 13
      },
      {
        "date": "2026-04-30",
        "hour": "16:00",
        "sales": 194.0,
        "orders": 14,
        "rows": 40
      },
      {
        "date": "2026-04-30",
        "hour": "17:00",
        "sales": 210.5,
        "orders": 12,
        "rows": 48
      },
      {
        "date": "2026-04-30",
        "hour": "18:00",
        "sales": 243.5,
        "orders": 14,
        "rows": 45
      },
      {
        "date": "2026-04-30",
        "hour": "19:00",
        "sales": 391.0,
        "orders": 22,
        "rows": 75
      },
      {
        "date": "2026-04-30",
        "hour": "20:00",
        "sales": 123.5,
        "orders": 10,
        "rows": 25
      },
      {
        "date": "2026-05-01",
        "hour": "07:00",
        "sales": 59.5,
        "orders": 3,
        "rows": 13
      },
      {
        "date": "2026-05-01",
        "hour": "08:00",
        "sales": 173.0,
        "orders": 7,
        "rows": 35
      },
      {
        "date": "2026-05-01",
        "hour": "09:00",
        "sales": 154.5,
        "orders": 9,
        "rows": 36
      },
      {
        "date": "2026-05-01",
        "hour": "10:00",
        "sales": 224.1,
        "orders": 16,
        "rows": 55
      },
      {
        "date": "2026-05-01",
        "hour": "11:00",
        "sales": 180.0,
        "orders": 7,
        "rows": 35
      },
      {
        "date": "2026-05-01",
        "hour": "12:00",
        "sales": 240.0,
        "orders": 16,
        "rows": 47
      },
      {
        "date": "2026-05-01",
        "hour": "13:00",
        "sales": 243.0,
        "orders": 17,
        "rows": 47
      },
      {
        "date": "2026-05-01",
        "hour": "14:00",
        "sales": 226.1,
        "orders": 14,
        "rows": 46
      },
      {
        "date": "2026-05-01",
        "hour": "15:00",
        "sales": 269.0,
        "orders": 17,
        "rows": 60
      },
      {
        "date": "2026-05-01",
        "hour": "16:00",
        "sales": 341.9,
        "orders": 19,
        "rows": 71
      },
      {
        "date": "2026-05-01",
        "hour": "17:00",
        "sales": 435.0,
        "orders": 19,
        "rows": 83
      },
      {
        "date": "2026-05-01",
        "hour": "18:00",
        "sales": 296.0,
        "orders": 19,
        "rows": 66
      },
      {
        "date": "2026-05-01",
        "hour": "19:00",
        "sales": 398.0,
        "orders": 22,
        "rows": 78
      },
      {
        "date": "2026-05-01",
        "hour": "20:00",
        "sales": 370.0,
        "orders": 23,
        "rows": 82
      },
      {
        "date": "2026-05-01",
        "hour": "21:00",
        "sales": 14.0,
        "orders": 3,
        "rows": 3
      },
      {
        "date": "2026-05-01",
        "hour": "22:00",
        "sales": 58.0,
        "orders": 7,
        "rows": 13
      },
      {
        "date": "2026-05-02",
        "hour": "07:00",
        "sales": 17.5,
        "orders": 3,
        "rows": 3
      },
      {
        "date": "2026-05-02",
        "hour": "08:00",
        "sales": 63.5,
        "orders": 6,
        "rows": 16
      },
      {
        "date": "2026-05-02",
        "hour": "09:00",
        "sales": 214.0,
        "orders": 14,
        "rows": 41
      },
      {
        "date": "2026-05-02",
        "hour": "10:00",
        "sales": 369.5,
        "orders": 17,
        "rows": 79
      },
      {
        "date": "2026-05-02",
        "hour": "11:00",
        "sales": 356.5,
        "orders": 21,
        "rows": 75
      },
      {
        "date": "2026-05-02",
        "hour": "12:00",
        "sales": 754.2,
        "orders": 36,
        "rows": 160
      },
      {
        "date": "2026-05-02",
        "hour": "13:00",
        "sales": 591.2,
        "orders": 31,
        "rows": 115
      },
      {
        "date": "2026-05-02",
        "hour": "14:00",
        "sales": 608.5,
        "orders": 31,
        "rows": 126
      },
      {
        "date": "2026-05-02",
        "hour": "15:00",
        "sales": 821.0,
        "orders": 38,
        "rows": 172
      },
      {
        "date": "2026-05-02",
        "hour": "16:00",
        "sales": 432.0,
        "orders": 23,
        "rows": 89
      },
      {
        "date": "2026-05-02",
        "hour": "17:00",
        "sales": 775.0,
        "orders": 38,
        "rows": 155
      },
      {
        "date": "2026-05-02",
        "hour": "18:00",
        "sales": 612.5,
        "orders": 29,
        "rows": 123
      },
      {
        "date": "2026-05-02",
        "hour": "19:00",
        "sales": 676.5,
        "orders": 37,
        "rows": 141
      },
      {
        "date": "2026-05-02",
        "hour": "20:00",
        "sales": 197.0,
        "orders": 15,
        "rows": 40
      },
      {
        "date": "2026-05-02",
        "hour": "21:00",
        "sales": 117.5,
        "orders": 6,
        "rows": 26
      },
      {
        "date": "2026-05-02",
        "hour": "22:00",
        "sales": 39.5,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-05-03",
        "hour": "07:00",
        "sales": 12.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-03",
        "hour": "08:00",
        "sales": 166.0,
        "orders": 9,
        "rows": 36
      },
      {
        "date": "2026-05-03",
        "hour": "09:00",
        "sales": 172.0,
        "orders": 12,
        "rows": 40
      },
      {
        "date": "2026-05-03",
        "hour": "10:00",
        "sales": 164.0,
        "orders": 10,
        "rows": 36
      },
      {
        "date": "2026-05-03",
        "hour": "11:00",
        "sales": 635.5,
        "orders": 28,
        "rows": 134
      },
      {
        "date": "2026-05-03",
        "hour": "12:00",
        "sales": 592.5,
        "orders": 27,
        "rows": 117
      },
      {
        "date": "2026-05-03",
        "hour": "13:00",
        "sales": 633.5,
        "orders": 38,
        "rows": 134
      },
      {
        "date": "2026-05-03",
        "hour": "14:00",
        "sales": 767.0,
        "orders": 33,
        "rows": 154
      },
      {
        "date": "2026-05-03",
        "hour": "15:00",
        "sales": 457.5,
        "orders": 22,
        "rows": 98
      },
      {
        "date": "2026-05-03",
        "hour": "16:00",
        "sales": 456.0,
        "orders": 23,
        "rows": 96
      },
      {
        "date": "2026-05-03",
        "hour": "17:00",
        "sales": 558.0,
        "orders": 29,
        "rows": 113
      },
      {
        "date": "2026-05-03",
        "hour": "18:00",
        "sales": 357.2,
        "orders": 24,
        "rows": 72
      },
      {
        "date": "2026-05-03",
        "hour": "19:00",
        "sales": 267.0,
        "orders": 22,
        "rows": 57
      },
      {
        "date": "2026-05-03",
        "hour": "20:00",
        "sales": 52.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-05-04",
        "hour": "06:00",
        "sales": 21.2,
        "orders": 3,
        "rows": 4
      },
      {
        "date": "2026-05-04",
        "hour": "07:00",
        "sales": 32.5,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-05-04",
        "hour": "09:00",
        "sales": 106.0,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-05-04",
        "hour": "10:00",
        "sales": 186.0,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-05-04",
        "hour": "11:00",
        "sales": 179.0,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-05-04",
        "hour": "12:00",
        "sales": 125.0,
        "orders": 11,
        "rows": 26
      },
      {
        "date": "2026-05-04",
        "hour": "13:00",
        "sales": 176.5,
        "orders": 12,
        "rows": 38
      },
      {
        "date": "2026-05-04",
        "hour": "14:00",
        "sales": 270.0,
        "orders": 14,
        "rows": 56
      },
      {
        "date": "2026-05-04",
        "hour": "15:00",
        "sales": 202.0,
        "orders": 14,
        "rows": 40
      },
      {
        "date": "2026-05-04",
        "hour": "16:00",
        "sales": 73.0,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-05-04",
        "hour": "17:00",
        "sales": 163.5,
        "orders": 11,
        "rows": 41
      },
      {
        "date": "2026-05-04",
        "hour": "18:00",
        "sales": 136.0,
        "orders": 10,
        "rows": 30
      },
      {
        "date": "2026-05-04",
        "hour": "19:00",
        "sales": 124.5,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-05-04",
        "hour": "20:00",
        "sales": 95.0,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-05-05",
        "hour": "06:00",
        "sales": 39.0,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-05-05",
        "hour": "07:00",
        "sales": 115.0,
        "orders": 5,
        "rows": 27
      },
      {
        "date": "2026-05-05",
        "hour": "08:00",
        "sales": 88.5,
        "orders": 10,
        "rows": 23
      },
      {
        "date": "2026-05-05",
        "hour": "09:00",
        "sales": 286.0,
        "orders": 10,
        "rows": 48
      },
      {
        "date": "2026-05-05",
        "hour": "10:00",
        "sales": 106.0,
        "orders": 9,
        "rows": 23
      },
      {
        "date": "2026-05-05",
        "hour": "11:00",
        "sales": 127.0,
        "orders": 6,
        "rows": 34
      },
      {
        "date": "2026-05-05",
        "hour": "12:00",
        "sales": 209.0,
        "orders": 14,
        "rows": 44
      },
      {
        "date": "2026-05-05",
        "hour": "13:00",
        "sales": 301.0,
        "orders": 12,
        "rows": 62
      },
      {
        "date": "2026-05-05",
        "hour": "14:00",
        "sales": 157.5,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-05-05",
        "hour": "15:00",
        "sales": 191.0,
        "orders": 12,
        "rows": 37
      },
      {
        "date": "2026-05-05",
        "hour": "16:00",
        "sales": 90.0,
        "orders": 8,
        "rows": 20
      },
      {
        "date": "2026-05-05",
        "hour": "17:00",
        "sales": 168.0,
        "orders": 12,
        "rows": 34
      },
      {
        "date": "2026-05-05",
        "hour": "18:00",
        "sales": 329.5,
        "orders": 20,
        "rows": 72
      },
      {
        "date": "2026-05-05",
        "hour": "19:00",
        "sales": 193.0,
        "orders": 13,
        "rows": 41
      },
      {
        "date": "2026-05-05",
        "hour": "20:00",
        "sales": 108.0,
        "orders": 11,
        "rows": 22
      },
      {
        "date": "2026-05-05",
        "hour": "21:00",
        "sales": 15.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-05-06",
        "hour": "06:00",
        "sales": 21.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-05-06",
        "hour": "07:00",
        "sales": 14.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-05-06",
        "hour": "08:00",
        "sales": 100.5,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-05-06",
        "hour": "09:00",
        "sales": 163.0,
        "orders": 7,
        "rows": 33
      },
      {
        "date": "2026-05-06",
        "hour": "10:00",
        "sales": 177.4,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-05-06",
        "hour": "11:00",
        "sales": 314.0,
        "orders": 23,
        "rows": 71
      },
      {
        "date": "2026-05-06",
        "hour": "12:00",
        "sales": 91.0,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-05-06",
        "hour": "13:00",
        "sales": 199.5,
        "orders": 12,
        "rows": 51
      },
      {
        "date": "2026-05-06",
        "hour": "14:00",
        "sales": 208.5,
        "orders": 16,
        "rows": 55
      },
      {
        "date": "2026-05-06",
        "hour": "15:00",
        "sales": 207.0,
        "orders": 11,
        "rows": 41
      },
      {
        "date": "2026-05-06",
        "hour": "16:00",
        "sales": 256.1,
        "orders": 13,
        "rows": 53
      },
      {
        "date": "2026-05-06",
        "hour": "17:00",
        "sales": 199.0,
        "orders": 9,
        "rows": 34
      },
      {
        "date": "2026-05-06",
        "hour": "18:00",
        "sales": 334.0,
        "orders": 19,
        "rows": 63
      },
      {
        "date": "2026-05-06",
        "hour": "19:00",
        "sales": 106.5,
        "orders": 9,
        "rows": 21
      },
      {
        "date": "2026-05-06",
        "hour": "20:00",
        "sales": 132.5,
        "orders": 9,
        "rows": 26
      },
      {
        "date": "2026-05-06",
        "hour": "21:00",
        "sales": 10.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-07",
        "hour": "06:00",
        "sales": 8.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-05-07",
        "hour": "08:00",
        "sales": 23.5,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-05-07",
        "hour": "09:00",
        "sales": 8.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-07",
        "hour": "10:00",
        "sales": 97.5,
        "orders": 4,
        "rows": 21
      },
      {
        "date": "2026-05-07",
        "hour": "11:00",
        "sales": 140.4,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-05-07",
        "hour": "12:00",
        "sales": 311.0,
        "orders": 14,
        "rows": 61
      },
      {
        "date": "2026-05-07",
        "hour": "13:00",
        "sales": 132.5,
        "orders": 9,
        "rows": 26
      },
      {
        "date": "2026-05-07",
        "hour": "14:00",
        "sales": 57.5,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-05-07",
        "hour": "15:00",
        "sales": 146.0,
        "orders": 13,
        "rows": 33
      },
      {
        "date": "2026-05-07",
        "hour": "16:00",
        "sales": 135.5,
        "orders": 14,
        "rows": 32
      },
      {
        "date": "2026-05-07",
        "hour": "17:00",
        "sales": 318.0,
        "orders": 16,
        "rows": 68
      },
      {
        "date": "2026-05-07",
        "hour": "18:00",
        "sales": 214.0,
        "orders": 18,
        "rows": 46
      },
      {
        "date": "2026-05-07",
        "hour": "19:00",
        "sales": 277.0,
        "orders": 16,
        "rows": 54
      },
      {
        "date": "2026-05-07",
        "hour": "20:00",
        "sales": 56.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-05-08",
        "hour": "06:00",
        "sales": 67.5,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-05-08",
        "hour": "07:00",
        "sales": 53.0,
        "orders": 3,
        "rows": 13
      },
      {
        "date": "2026-05-08",
        "hour": "08:00",
        "sales": 77.5,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-05-08",
        "hour": "09:00",
        "sales": 241.5,
        "orders": 8,
        "rows": 53
      },
      {
        "date": "2026-05-08",
        "hour": "10:00",
        "sales": 247.2,
        "orders": 18,
        "rows": 61
      },
      {
        "date": "2026-05-08",
        "hour": "11:00",
        "sales": 163.0,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-05-08",
        "hour": "12:00",
        "sales": 95.0,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-05-08",
        "hour": "13:00",
        "sales": 162.9,
        "orders": 11,
        "rows": 35
      },
      {
        "date": "2026-05-08",
        "hour": "14:00",
        "sales": 248.5,
        "orders": 16,
        "rows": 56
      },
      {
        "date": "2026-05-08",
        "hour": "15:00",
        "sales": 290.5,
        "orders": 18,
        "rows": 58
      },
      {
        "date": "2026-05-08",
        "hour": "16:00",
        "sales": 426.5,
        "orders": 21,
        "rows": 85
      },
      {
        "date": "2026-05-08",
        "hour": "17:00",
        "sales": 382.0,
        "orders": 19,
        "rows": 78
      },
      {
        "date": "2026-05-08",
        "hour": "18:00",
        "sales": 530.0,
        "orders": 26,
        "rows": 105
      },
      {
        "date": "2026-05-08",
        "hour": "19:00",
        "sales": 538.5,
        "orders": 31,
        "rows": 95
      },
      {
        "date": "2026-05-08",
        "hour": "20:00",
        "sales": 455.5,
        "orders": 29,
        "rows": 93
      },
      {
        "date": "2026-05-08",
        "hour": "21:00",
        "sales": 79.5,
        "orders": 9,
        "rows": 17
      },
      {
        "date": "2026-05-08",
        "hour": "22:00",
        "sales": 41.4,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-05-09",
        "hour": "07:00",
        "sales": 97.0,
        "orders": 3,
        "rows": 17
      },
      {
        "date": "2026-05-09",
        "hour": "08:00",
        "sales": 127.5,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-05-09",
        "hour": "09:00",
        "sales": 216.0,
        "orders": 10,
        "rows": 44
      },
      {
        "date": "2026-05-09",
        "hour": "10:00",
        "sales": 603.5,
        "orders": 25,
        "rows": 110
      },
      {
        "date": "2026-05-09",
        "hour": "11:00",
        "sales": 440.5,
        "orders": 22,
        "rows": 82
      },
      {
        "date": "2026-05-09",
        "hour": "12:00",
        "sales": 508.0,
        "orders": 22,
        "rows": 101
      },
      {
        "date": "2026-05-09",
        "hour": "13:00",
        "sales": 592.1,
        "orders": 30,
        "rows": 119
      },
      {
        "date": "2026-05-09",
        "hour": "14:00",
        "sales": 510.5,
        "orders": 27,
        "rows": 101
      },
      {
        "date": "2026-05-09",
        "hour": "15:00",
        "sales": 622.5,
        "orders": 32,
        "rows": 128
      },
      {
        "date": "2026-05-09",
        "hour": "16:00",
        "sales": 606.0,
        "orders": 33,
        "rows": 119
      },
      {
        "date": "2026-05-09",
        "hour": "17:00",
        "sales": 457.0,
        "orders": 28,
        "rows": 92
      },
      {
        "date": "2026-05-09",
        "hour": "18:00",
        "sales": 883.0,
        "orders": 41,
        "rows": 176
      },
      {
        "date": "2026-05-09",
        "hour": "19:00",
        "sales": 438.5,
        "orders": 28,
        "rows": 91
      },
      {
        "date": "2026-05-09",
        "hour": "20:00",
        "sales": 476.0,
        "orders": 31,
        "rows": 94
      },
      {
        "date": "2026-05-09",
        "hour": "21:00",
        "sales": 182.5,
        "orders": 13,
        "rows": 38
      },
      {
        "date": "2026-05-09",
        "hour": "22:00",
        "sales": 66.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-05-10",
        "hour": "07:00",
        "sales": 42.0,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-05-10",
        "hour": "08:00",
        "sales": 274.5,
        "orders": 13,
        "rows": 59
      },
      {
        "date": "2026-05-10",
        "hour": "09:00",
        "sales": 651.0,
        "orders": 29,
        "rows": 125
      },
      {
        "date": "2026-05-10",
        "hour": "10:00",
        "sales": 790.5,
        "orders": 38,
        "rows": 161
      },
      {
        "date": "2026-05-10",
        "hour": "11:00",
        "sales": 802.0,
        "orders": 36,
        "rows": 155
      },
      {
        "date": "2026-05-10",
        "hour": "12:00",
        "sales": 986.0,
        "orders": 47,
        "rows": 204
      },
      {
        "date": "2026-05-10",
        "hour": "13:00",
        "sales": 793.0,
        "orders": 39,
        "rows": 157
      },
      {
        "date": "2026-05-10",
        "hour": "14:00",
        "sales": 753.0,
        "orders": 37,
        "rows": 149
      },
      {
        "date": "2026-05-10",
        "hour": "15:00",
        "sales": 968.59,
        "orders": 42,
        "rows": 187
      },
      {
        "date": "2026-05-10",
        "hour": "16:00",
        "sales": 767.5,
        "orders": 32,
        "rows": 161
      },
      {
        "date": "2026-05-10",
        "hour": "17:00",
        "sales": 335.5,
        "orders": 17,
        "rows": 67
      },
      {
        "date": "2026-05-10",
        "hour": "18:00",
        "sales": 280.8,
        "orders": 19,
        "rows": 61
      },
      {
        "date": "2026-05-10",
        "hour": "19:00",
        "sales": 224.0,
        "orders": 12,
        "rows": 44
      },
      {
        "date": "2026-05-10",
        "hour": "20:00",
        "sales": 203.0,
        "orders": 15,
        "rows": 47
      },
      {
        "date": "2026-05-10",
        "hour": "21:00",
        "sales": 25.5,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-11",
        "hour": "06:00",
        "sales": 16.0,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-05-11",
        "hour": "07:00",
        "sales": 18.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-05-11",
        "hour": "08:00",
        "sales": 28.0,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-05-11",
        "hour": "09:00",
        "sales": 58.0,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-05-11",
        "hour": "10:00",
        "sales": 60.5,
        "orders": 2,
        "rows": 12
      },
      {
        "date": "2026-05-11",
        "hour": "11:00",
        "sales": 137.0,
        "orders": 11,
        "rows": 32
      },
      {
        "date": "2026-05-11",
        "hour": "12:00",
        "sales": 211.0,
        "orders": 18,
        "rows": 46
      },
      {
        "date": "2026-05-11",
        "hour": "13:00",
        "sales": 101.0,
        "orders": 9,
        "rows": 20
      },
      {
        "date": "2026-05-11",
        "hour": "14:00",
        "sales": 109.0,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-05-11",
        "hour": "15:00",
        "sales": 148.0,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-05-11",
        "hour": "16:00",
        "sales": 122.5,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-05-11",
        "hour": "17:00",
        "sales": 214.0,
        "orders": 10,
        "rows": 44
      },
      {
        "date": "2026-05-11",
        "hour": "18:00",
        "sales": 332.5,
        "orders": 18,
        "rows": 72
      },
      {
        "date": "2026-05-11",
        "hour": "19:00",
        "sales": 170.5,
        "orders": 7,
        "rows": 35
      },
      {
        "date": "2026-05-11",
        "hour": "20:00",
        "sales": 21.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-05-11",
        "hour": "21:00",
        "sales": 6.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-05-12",
        "hour": "06:00",
        "sales": 12.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-05-12",
        "hour": "07:00",
        "sales": 19.5,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-05-12",
        "hour": "08:00",
        "sales": 69.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-05-12",
        "hour": "09:00",
        "sales": 95.0,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-05-12",
        "hour": "10:00",
        "sales": 122.5,
        "orders": 8,
        "rows": 19
      },
      {
        "date": "2026-05-12",
        "hour": "11:00",
        "sales": 143.5,
        "orders": 9,
        "rows": 33
      },
      {
        "date": "2026-05-12",
        "hour": "12:00",
        "sales": 270.5,
        "orders": 13,
        "rows": 54
      },
      {
        "date": "2026-05-12",
        "hour": "13:00",
        "sales": 80.5,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-05-12",
        "hour": "14:00",
        "sales": 265.5,
        "orders": 20,
        "rows": 56
      },
      {
        "date": "2026-05-12",
        "hour": "15:00",
        "sales": 98.5,
        "orders": 10,
        "rows": 21
      },
      {
        "date": "2026-05-12",
        "hour": "16:00",
        "sales": 133.6,
        "orders": 13,
        "rows": 32
      },
      {
        "date": "2026-05-12",
        "hour": "17:00",
        "sales": 65.0,
        "orders": 4,
        "rows": 16
      },
      {
        "date": "2026-05-12",
        "hour": "18:00",
        "sales": 221.6,
        "orders": 15,
        "rows": 45
      },
      {
        "date": "2026-05-12",
        "hour": "19:00",
        "sales": 151.5,
        "orders": 12,
        "rows": 38
      },
      {
        "date": "2026-05-12",
        "hour": "20:00",
        "sales": 93.0,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-05-12",
        "hour": "21:00",
        "sales": 26.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-13",
        "hour": "06:00",
        "sales": 4.4,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-13",
        "hour": "08:00",
        "sales": 14.0,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-05-13",
        "hour": "09:00",
        "sales": 152.0,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-05-13",
        "hour": "10:00",
        "sales": 303.0,
        "orders": 16,
        "rows": 62
      },
      {
        "date": "2026-05-13",
        "hour": "11:00",
        "sales": 293.5,
        "orders": 12,
        "rows": 61
      },
      {
        "date": "2026-05-13",
        "hour": "12:00",
        "sales": 141.0,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-05-13",
        "hour": "13:00",
        "sales": 315.0,
        "orders": 22,
        "rows": 64
      },
      {
        "date": "2026-05-13",
        "hour": "14:00",
        "sales": 247.7,
        "orders": 16,
        "rows": 54
      },
      {
        "date": "2026-05-13",
        "hour": "15:00",
        "sales": 244.5,
        "orders": 16,
        "rows": 52
      },
      {
        "date": "2026-05-13",
        "hour": "16:00",
        "sales": 227.0,
        "orders": 13,
        "rows": 46
      },
      {
        "date": "2026-05-13",
        "hour": "17:00",
        "sales": 242.0,
        "orders": 19,
        "rows": 51
      },
      {
        "date": "2026-05-13",
        "hour": "18:00",
        "sales": 267.0,
        "orders": 12,
        "rows": 54
      },
      {
        "date": "2026-05-13",
        "hour": "19:00",
        "sales": 257.5,
        "orders": 10,
        "rows": 51
      },
      {
        "date": "2026-05-13",
        "hour": "20:00",
        "sales": 87.5,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-05-14",
        "hour": "07:00",
        "sales": 5.2,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-14",
        "hour": "08:00",
        "sales": 65.7,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-05-14",
        "hour": "09:00",
        "sales": 134.0,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-05-14",
        "hour": "10:00",
        "sales": 283.5,
        "orders": 12,
        "rows": 58
      },
      {
        "date": "2026-05-14",
        "hour": "11:00",
        "sales": 59.0,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-05-14",
        "hour": "12:00",
        "sales": 169.5,
        "orders": 10,
        "rows": 36
      },
      {
        "date": "2026-05-14",
        "hour": "13:00",
        "sales": 226.5,
        "orders": 13,
        "rows": 49
      },
      {
        "date": "2026-05-14",
        "hour": "14:00",
        "sales": 180.5,
        "orders": 13,
        "rows": 36
      },
      {
        "date": "2026-05-14",
        "hour": "15:00",
        "sales": 239.0,
        "orders": 14,
        "rows": 48
      },
      {
        "date": "2026-05-14",
        "hour": "16:00",
        "sales": 271.5,
        "orders": 14,
        "rows": 57
      },
      {
        "date": "2026-05-14",
        "hour": "17:00",
        "sales": 276.0,
        "orders": 15,
        "rows": 61
      },
      {
        "date": "2026-05-14",
        "hour": "18:00",
        "sales": 306.5,
        "orders": 18,
        "rows": 59
      },
      {
        "date": "2026-05-14",
        "hour": "19:00",
        "sales": 211.5,
        "orders": 14,
        "rows": 48
      },
      {
        "date": "2026-05-14",
        "hour": "20:00",
        "sales": 137.3,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-05-15",
        "hour": "07:00",
        "sales": 12.5,
        "orders": 2,
        "rows": 2
      },
      {
        "date": "2026-05-15",
        "hour": "08:00",
        "sales": 50.5,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-05-15",
        "hour": "09:00",
        "sales": 163.5,
        "orders": 11,
        "rows": 49
      },
      {
        "date": "2026-05-15",
        "hour": "10:00",
        "sales": 177.5,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-05-15",
        "hour": "11:00",
        "sales": 112.0,
        "orders": 8,
        "rows": 24
      },
      {
        "date": "2026-05-15",
        "hour": "12:00",
        "sales": 420.0,
        "orders": 19,
        "rows": 81
      },
      {
        "date": "2026-05-15",
        "hour": "13:00",
        "sales": 378.1,
        "orders": 21,
        "rows": 79
      },
      {
        "date": "2026-05-15",
        "hour": "14:00",
        "sales": 276.0,
        "orders": 15,
        "rows": 57
      },
      {
        "date": "2026-05-15",
        "hour": "15:00",
        "sales": 406.5,
        "orders": 22,
        "rows": 79
      },
      {
        "date": "2026-05-15",
        "hour": "16:00",
        "sales": 568.5,
        "orders": 27,
        "rows": 113
      },
      {
        "date": "2026-05-15",
        "hour": "17:00",
        "sales": 629.7,
        "orders": 27,
        "rows": 116
      },
      {
        "date": "2026-05-15",
        "hour": "18:00",
        "sales": 610.0,
        "orders": 37,
        "rows": 126
      },
      {
        "date": "2026-05-15",
        "hour": "19:00",
        "sales": 607.5,
        "orders": 44,
        "rows": 133
      },
      {
        "date": "2026-05-15",
        "hour": "20:00",
        "sales": 291.0,
        "orders": 21,
        "rows": 62
      },
      {
        "date": "2026-05-15",
        "hour": "21:00",
        "sales": 42.0,
        "orders": 10,
        "rows": 16
      },
      {
        "date": "2026-05-15",
        "hour": "22:00",
        "sales": 3.9,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-16",
        "hour": "08:00",
        "sales": 98.5,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-05-16",
        "hour": "09:00",
        "sales": 164.5,
        "orders": 11,
        "rows": 35
      },
      {
        "date": "2026-05-16",
        "hour": "10:00",
        "sales": 264.0,
        "orders": 15,
        "rows": 54
      },
      {
        "date": "2026-05-16",
        "hour": "11:00",
        "sales": 470.5,
        "orders": 22,
        "rows": 97
      },
      {
        "date": "2026-05-16",
        "hour": "12:00",
        "sales": 521.5,
        "orders": 28,
        "rows": 116
      },
      {
        "date": "2026-05-16",
        "hour": "13:00",
        "sales": 748.5,
        "orders": 32,
        "rows": 150
      },
      {
        "date": "2026-05-16",
        "hour": "14:00",
        "sales": 797.5,
        "orders": 41,
        "rows": 162
      },
      {
        "date": "2026-05-16",
        "hour": "15:00",
        "sales": 525.0,
        "orders": 31,
        "rows": 112
      },
      {
        "date": "2026-05-16",
        "hour": "16:00",
        "sales": 1028.5,
        "orders": 39,
        "rows": 209
      },
      {
        "date": "2026-05-16",
        "hour": "17:00",
        "sales": 1189.7,
        "orders": 47,
        "rows": 236
      },
      {
        "date": "2026-05-16",
        "hour": "18:00",
        "sales": 924.5,
        "orders": 48,
        "rows": 198
      },
      {
        "date": "2026-05-16",
        "hour": "19:00",
        "sales": 474.0,
        "orders": 32,
        "rows": 101
      },
      {
        "date": "2026-05-16",
        "hour": "20:00",
        "sales": 227.5,
        "orders": 18,
        "rows": 51
      },
      {
        "date": "2026-05-16",
        "hour": "21:00",
        "sales": 182.5,
        "orders": 19,
        "rows": 39
      },
      {
        "date": "2026-05-16",
        "hour": "22:00",
        "sales": 10.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-17",
        "hour": "09:00",
        "sales": 134.0,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-05-17",
        "hour": "10:00",
        "sales": 395.0,
        "orders": 24,
        "rows": 83
      },
      {
        "date": "2026-05-17",
        "hour": "11:00",
        "sales": 688.0,
        "orders": 29,
        "rows": 138
      },
      {
        "date": "2026-05-17",
        "hour": "12:00",
        "sales": 569.0,
        "orders": 32,
        "rows": 112
      },
      {
        "date": "2026-05-17",
        "hour": "13:00",
        "sales": 761.3,
        "orders": 40,
        "rows": 153
      },
      {
        "date": "2026-05-17",
        "hour": "14:00",
        "sales": 752.5,
        "orders": 38,
        "rows": 145
      },
      {
        "date": "2026-05-17",
        "hour": "15:00",
        "sales": 1043.0,
        "orders": 45,
        "rows": 192
      },
      {
        "date": "2026-05-17",
        "hour": "16:00",
        "sales": 893.0,
        "orders": 41,
        "rows": 174
      },
      {
        "date": "2026-05-17",
        "hour": "17:00",
        "sales": 458.5,
        "orders": 28,
        "rows": 93
      },
      {
        "date": "2026-05-17",
        "hour": "18:00",
        "sales": 449.5,
        "orders": 25,
        "rows": 99
      },
      {
        "date": "2026-05-17",
        "hour": "19:00",
        "sales": 359.5,
        "orders": 24,
        "rows": 72
      },
      {
        "date": "2026-05-17",
        "hour": "20:00",
        "sales": 200.7,
        "orders": 14,
        "rows": 46
      },
      {
        "date": "2026-05-18",
        "hour": "08:00",
        "sales": 35.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-05-18",
        "hour": "09:00",
        "sales": 83.0,
        "orders": 4,
        "rows": 15
      },
      {
        "date": "2026-05-18",
        "hour": "10:00",
        "sales": 218.0,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-05-18",
        "hour": "11:00",
        "sales": 350.1,
        "orders": 17,
        "rows": 70
      },
      {
        "date": "2026-05-18",
        "hour": "12:00",
        "sales": 241.0,
        "orders": 9,
        "rows": 47
      },
      {
        "date": "2026-05-18",
        "hour": "13:00",
        "sales": 202.5,
        "orders": 10,
        "rows": 42
      },
      {
        "date": "2026-05-18",
        "hour": "14:00",
        "sales": 242.5,
        "orders": 14,
        "rows": 57
      },
      {
        "date": "2026-05-18",
        "hour": "15:00",
        "sales": 229.5,
        "orders": 15,
        "rows": 49
      },
      {
        "date": "2026-05-18",
        "hour": "16:00",
        "sales": 292.5,
        "orders": 14,
        "rows": 57
      },
      {
        "date": "2026-05-18",
        "hour": "17:00",
        "sales": 198.5,
        "orders": 11,
        "rows": 42
      },
      {
        "date": "2026-05-18",
        "hour": "18:00",
        "sales": 216.5,
        "orders": 12,
        "rows": 41
      },
      {
        "date": "2026-05-18",
        "hour": "19:00",
        "sales": 88.0,
        "orders": 8,
        "rows": 17
      },
      {
        "date": "2026-05-18",
        "hour": "20:00",
        "sales": 64.0,
        "orders": 5,
        "rows": 9
      },
      {
        "date": "2026-05-19",
        "hour": "08:00",
        "sales": 16.5,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-05-19",
        "hour": "09:00",
        "sales": 155.5,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-05-19",
        "hour": "10:00",
        "sales": 158.5,
        "orders": 11,
        "rows": 36
      },
      {
        "date": "2026-05-19",
        "hour": "11:00",
        "sales": 108.0,
        "orders": 7,
        "rows": 27
      },
      {
        "date": "2026-05-19",
        "hour": "12:00",
        "sales": 97.5,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-05-19",
        "hour": "13:00",
        "sales": 224.0,
        "orders": 15,
        "rows": 49
      },
      {
        "date": "2026-05-19",
        "hour": "14:00",
        "sales": 278.5,
        "orders": 18,
        "rows": 55
      },
      {
        "date": "2026-05-19",
        "hour": "15:00",
        "sales": 315.0,
        "orders": 18,
        "rows": 62
      },
      {
        "date": "2026-05-19",
        "hour": "16:00",
        "sales": 218.0,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-05-19",
        "hour": "17:00",
        "sales": 284.2,
        "orders": 13,
        "rows": 57
      },
      {
        "date": "2026-05-19",
        "hour": "18:00",
        "sales": 260.0,
        "orders": 18,
        "rows": 53
      },
      {
        "date": "2026-05-19",
        "hour": "19:00",
        "sales": 307.0,
        "orders": 16,
        "rows": 68
      },
      {
        "date": "2026-05-19",
        "hour": "20:00",
        "sales": 160.0,
        "orders": 13,
        "rows": 32
      },
      {
        "date": "2026-05-20",
        "hour": "09:00",
        "sales": 38.5,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-05-20",
        "hour": "10:00",
        "sales": 276.0,
        "orders": 15,
        "rows": 61
      },
      {
        "date": "2026-05-20",
        "hour": "11:00",
        "sales": 206.5,
        "orders": 14,
        "rows": 47
      },
      {
        "date": "2026-05-20",
        "hour": "12:00",
        "sales": 218.0,
        "orders": 11,
        "rows": 45
      },
      {
        "date": "2026-05-20",
        "hour": "13:00",
        "sales": 264.7,
        "orders": 18,
        "rows": 59
      },
      {
        "date": "2026-05-20",
        "hour": "14:00",
        "sales": 204.0,
        "orders": 9,
        "rows": 42
      },
      {
        "date": "2026-05-20",
        "hour": "15:00",
        "sales": 444.0,
        "orders": 21,
        "rows": 96
      },
      {
        "date": "2026-05-20",
        "hour": "16:00",
        "sales": 301.0,
        "orders": 15,
        "rows": 65
      },
      {
        "date": "2026-05-20",
        "hour": "17:00",
        "sales": 166.0,
        "orders": 12,
        "rows": 37
      },
      {
        "date": "2026-05-20",
        "hour": "18:00",
        "sales": 411.0,
        "orders": 15,
        "rows": 80
      },
      {
        "date": "2026-05-20",
        "hour": "19:00",
        "sales": 208.5,
        "orders": 9,
        "rows": 40
      },
      {
        "date": "2026-05-20",
        "hour": "20:00",
        "sales": 207.0,
        "orders": 15,
        "rows": 42
      },
      {
        "date": "2026-05-20",
        "hour": "21:00",
        "sales": 26.5,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-21",
        "hour": "08:00",
        "sales": 50.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-05-21",
        "hour": "09:00",
        "sales": 99.0,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-05-21",
        "hour": "10:00",
        "sales": 138.0,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-05-21",
        "hour": "11:00",
        "sales": 75.5,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-05-21",
        "hour": "12:00",
        "sales": 200.0,
        "orders": 11,
        "rows": 40
      },
      {
        "date": "2026-05-21",
        "hour": "13:00",
        "sales": 311.7,
        "orders": 17,
        "rows": 66
      },
      {
        "date": "2026-05-21",
        "hour": "14:00",
        "sales": 245.5,
        "orders": 12,
        "rows": 54
      },
      {
        "date": "2026-05-21",
        "hour": "15:00",
        "sales": 422.5,
        "orders": 26,
        "rows": 83
      },
      {
        "date": "2026-05-21",
        "hour": "16:00",
        "sales": 201.5,
        "orders": 9,
        "rows": 39
      },
      {
        "date": "2026-05-21",
        "hour": "17:00",
        "sales": 307.0,
        "orders": 17,
        "rows": 60
      },
      {
        "date": "2026-05-21",
        "hour": "18:00",
        "sales": 291.0,
        "orders": 13,
        "rows": 58
      },
      {
        "date": "2026-05-21",
        "hour": "19:00",
        "sales": 336.5,
        "orders": 16,
        "rows": 70
      },
      {
        "date": "2026-05-21",
        "hour": "20:00",
        "sales": 153.5,
        "orders": 14,
        "rows": 33
      },
      {
        "date": "2026-05-21",
        "hour": "21:00",
        "sales": 31.0,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-05-22",
        "hour": "08:00",
        "sales": 164.5,
        "orders": 7,
        "rows": 41
      },
      {
        "date": "2026-05-22",
        "hour": "09:00",
        "sales": 130.0,
        "orders": 5,
        "rows": 26
      },
      {
        "date": "2026-05-22",
        "hour": "10:00",
        "sales": 186.0,
        "orders": 12,
        "rows": 36
      },
      {
        "date": "2026-05-22",
        "hour": "11:00",
        "sales": 270.0,
        "orders": 19,
        "rows": 52
      },
      {
        "date": "2026-05-22",
        "hour": "12:00",
        "sales": 240.5,
        "orders": 19,
        "rows": 50
      },
      {
        "date": "2026-05-22",
        "hour": "13:00",
        "sales": 283.5,
        "orders": 14,
        "rows": 54
      },
      {
        "date": "2026-05-22",
        "hour": "14:00",
        "sales": 274.5,
        "orders": 16,
        "rows": 56
      },
      {
        "date": "2026-05-22",
        "hour": "15:00",
        "sales": 351.0,
        "orders": 18,
        "rows": 66
      },
      {
        "date": "2026-05-22",
        "hour": "16:00",
        "sales": 381.0,
        "orders": 25,
        "rows": 76
      },
      {
        "date": "2026-05-22",
        "hour": "17:00",
        "sales": 479.5,
        "orders": 26,
        "rows": 99
      },
      {
        "date": "2026-05-22",
        "hour": "18:00",
        "sales": 672.5,
        "orders": 31,
        "rows": 128
      },
      {
        "date": "2026-05-22",
        "hour": "19:00",
        "sales": 569.5,
        "orders": 29,
        "rows": 111
      },
      {
        "date": "2026-05-22",
        "hour": "20:00",
        "sales": 460.65,
        "orders": 25,
        "rows": 91
      },
      {
        "date": "2026-05-22",
        "hour": "21:00",
        "sales": 85.5,
        "orders": 6,
        "rows": 18
      },
      {
        "date": "2026-05-22",
        "hour": "22:00",
        "sales": 80.9,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-05-23",
        "hour": "08:00",
        "sales": 203.0,
        "orders": 10,
        "rows": 44
      },
      {
        "date": "2026-05-23",
        "hour": "09:00",
        "sales": 85.5,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-05-23",
        "hour": "10:00",
        "sales": 289.0,
        "orders": 13,
        "rows": 58
      },
      {
        "date": "2026-05-23",
        "hour": "11:00",
        "sales": 10.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-23",
        "hour": "12:00",
        "sales": 431.5,
        "orders": 13,
        "rows": 32
      },
      {
        "date": "2026-05-23",
        "hour": "13:00",
        "sales": 486.0,
        "orders": 23,
        "rows": 92
      },
      {
        "date": "2026-05-23",
        "hour": "14:00",
        "sales": 543.1,
        "orders": 31,
        "rows": 111
      },
      {
        "date": "2026-05-23",
        "hour": "15:00",
        "sales": 872.0,
        "orders": 43,
        "rows": 178
      },
      {
        "date": "2026-05-23",
        "hour": "16:00",
        "sales": 781.2,
        "orders": 38,
        "rows": 166
      },
      {
        "date": "2026-05-23",
        "hour": "17:00",
        "sales": 883.5,
        "orders": 42,
        "rows": 188
      },
      {
        "date": "2026-05-23",
        "hour": "18:00",
        "sales": 558.0,
        "orders": 25,
        "rows": 111
      },
      {
        "date": "2026-05-23",
        "hour": "19:00",
        "sales": 366.9,
        "orders": 33,
        "rows": 82
      },
      {
        "date": "2026-05-23",
        "hour": "20:00",
        "sales": 251.5,
        "orders": 21,
        "rows": 57
      },
      {
        "date": "2026-05-23",
        "hour": "21:00",
        "sales": 71.0,
        "orders": 8,
        "rows": 14
      },
      {
        "date": "2026-05-24",
        "hour": "08:00",
        "sales": 55.5,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-05-24",
        "hour": "09:00",
        "sales": 214.0,
        "orders": 12,
        "rows": 47
      },
      {
        "date": "2026-05-24",
        "hour": "10:00",
        "sales": 669.2,
        "orders": 32,
        "rows": 138
      },
      {
        "date": "2026-05-24",
        "hour": "11:00",
        "sales": 852.5,
        "orders": 35,
        "rows": 169
      },
      {
        "date": "2026-05-24",
        "hour": "12:00",
        "sales": 836.0,
        "orders": 41,
        "rows": 175
      },
      {
        "date": "2026-05-24",
        "hour": "13:00",
        "sales": 894.5,
        "orders": 41,
        "rows": 182
      },
      {
        "date": "2026-05-24",
        "hour": "14:00",
        "sales": 1009.8,
        "orders": 44,
        "rows": 203
      },
      {
        "date": "2026-05-24",
        "hour": "15:00",
        "sales": 734.5,
        "orders": 36,
        "rows": 138
      },
      {
        "date": "2026-05-24",
        "hour": "16:00",
        "sales": 588.5,
        "orders": 24,
        "rows": 115
      },
      {
        "date": "2026-05-24",
        "hour": "17:00",
        "sales": 264.0,
        "orders": 16,
        "rows": 52
      },
      {
        "date": "2026-05-24",
        "hour": "18:00",
        "sales": 330.0,
        "orders": 21,
        "rows": 57
      },
      {
        "date": "2026-05-24",
        "hour": "19:00",
        "sales": 69.5,
        "orders": 8,
        "rows": 12
      },
      {
        "date": "2026-05-25",
        "hour": "08:00",
        "sales": 161.0,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-05-25",
        "hour": "09:00",
        "sales": 41.5,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-05-25",
        "hour": "10:00",
        "sales": 91.0,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-05-25",
        "hour": "11:00",
        "sales": 66.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-05-25",
        "hour": "12:00",
        "sales": 304.5,
        "orders": 20,
        "rows": 66
      },
      {
        "date": "2026-05-25",
        "hour": "13:00",
        "sales": 139.5,
        "orders": 10,
        "rows": 30
      },
      {
        "date": "2026-05-25",
        "hour": "14:00",
        "sales": 321.0,
        "orders": 13,
        "rows": 65
      },
      {
        "date": "2026-05-25",
        "hour": "15:00",
        "sales": 199.5,
        "orders": 7,
        "rows": 32
      },
      {
        "date": "2026-05-25",
        "hour": "16:00",
        "sales": 249.0,
        "orders": 13,
        "rows": 48
      },
      {
        "date": "2026-05-25",
        "hour": "17:00",
        "sales": 397.7,
        "orders": 16,
        "rows": 72
      },
      {
        "date": "2026-05-25",
        "hour": "18:00",
        "sales": 190.5,
        "orders": 7,
        "rows": 36
      },
      {
        "date": "2026-05-25",
        "hour": "19:00",
        "sales": 255.9,
        "orders": 15,
        "rows": 54
      },
      {
        "date": "2026-05-25",
        "hour": "20:00",
        "sales": 77.0,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-05-26",
        "hour": "08:00",
        "sales": 67.5,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-05-26",
        "hour": "09:00",
        "sales": 117.5,
        "orders": 7,
        "rows": 28
      },
      {
        "date": "2026-05-26",
        "hour": "10:00",
        "sales": 200.0,
        "orders": 10,
        "rows": 43
      },
      {
        "date": "2026-05-26",
        "hour": "11:00",
        "sales": 242.0,
        "orders": 8,
        "rows": 39
      },
      {
        "date": "2026-05-26",
        "hour": "12:00",
        "sales": 144.5,
        "orders": 11,
        "rows": 32
      },
      {
        "date": "2026-05-26",
        "hour": "13:00",
        "sales": 135.0,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-05-26",
        "hour": "14:00",
        "sales": 329.0,
        "orders": 14,
        "rows": 56
      },
      {
        "date": "2026-05-26",
        "hour": "15:00",
        "sales": 533.5,
        "orders": 28,
        "rows": 100
      },
      {
        "date": "2026-05-26",
        "hour": "16:00",
        "sales": 406.5,
        "orders": 21,
        "rows": 80
      },
      {
        "date": "2026-05-26",
        "hour": "17:00",
        "sales": 244.0,
        "orders": 14,
        "rows": 52
      },
      {
        "date": "2026-05-26",
        "hour": "18:00",
        "sales": 233.0,
        "orders": 17,
        "rows": 46
      },
      {
        "date": "2026-05-26",
        "hour": "19:00",
        "sales": 264.5,
        "orders": 18,
        "rows": 56
      },
      {
        "date": "2026-05-26",
        "hour": "20:00",
        "sales": 30.5,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-05-26",
        "hour": "21:00",
        "sales": 13.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-05-27",
        "hour": "08:00",
        "sales": 356.7,
        "orders": 20,
        "rows": 82
      },
      {
        "date": "2026-05-27",
        "hour": "09:00",
        "sales": 180.2,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-05-27",
        "hour": "10:00",
        "sales": 460.5,
        "orders": 19,
        "rows": 79
      },
      {
        "date": "2026-05-27",
        "hour": "11:00",
        "sales": 457.5,
        "orders": 21,
        "rows": 89
      },
      {
        "date": "2026-05-27",
        "hour": "12:00",
        "sales": 347.7,
        "orders": 14,
        "rows": 73
      },
      {
        "date": "2026-05-27",
        "hour": "13:00",
        "sales": 330.0,
        "orders": 14,
        "rows": 57
      },
      {
        "date": "2026-05-27",
        "hour": "14:00",
        "sales": 484.0,
        "orders": 21,
        "rows": 97
      },
      {
        "date": "2026-05-27",
        "hour": "15:00",
        "sales": 617.0,
        "orders": 29,
        "rows": 121
      },
      {
        "date": "2026-05-27",
        "hour": "16:00",
        "sales": 590.0,
        "orders": 22,
        "rows": 111
      },
      {
        "date": "2026-05-27",
        "hour": "17:00",
        "sales": 445.0,
        "orders": 18,
        "rows": 76
      },
      {
        "date": "2026-05-27",
        "hour": "18:00",
        "sales": 503.0,
        "orders": 25,
        "rows": 93
      },
      {
        "date": "2026-05-27",
        "hour": "19:00",
        "sales": 253.5,
        "orders": 14,
        "rows": 57
      },
      {
        "date": "2026-05-27",
        "hour": "20:00",
        "sales": 4.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-05-28",
        "hour": "08:00",
        "sales": 39.5,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-05-28",
        "hour": "09:00",
        "sales": 157.5,
        "orders": 6,
        "rows": 35
      },
      {
        "date": "2026-05-28",
        "hour": "10:00",
        "sales": 133.5,
        "orders": 6,
        "rows": 27
      },
      {
        "date": "2026-05-28",
        "hour": "11:00",
        "sales": 268.5,
        "orders": 14,
        "rows": 52
      },
      {
        "date": "2026-05-28",
        "hour": "12:00",
        "sales": 300.0,
        "orders": 15,
        "rows": 61
      },
      {
        "date": "2026-05-28",
        "hour": "13:00",
        "sales": 423.0,
        "orders": 20,
        "rows": 84
      },
      {
        "date": "2026-05-28",
        "hour": "14:00",
        "sales": 236.0,
        "orders": 13,
        "rows": 38
      },
      {
        "date": "2026-05-28",
        "hour": "15:00",
        "sales": 403.0,
        "orders": 23,
        "rows": 77
      },
      {
        "date": "2026-05-28",
        "hour": "16:00",
        "sales": 299.5,
        "orders": 17,
        "rows": 56
      },
      {
        "date": "2026-05-28",
        "hour": "17:00",
        "sales": 253.5,
        "orders": 9,
        "rows": 40
      },
      {
        "date": "2026-05-28",
        "hour": "18:00",
        "sales": 285.5,
        "orders": 13,
        "rows": 55
      },
      {
        "date": "2026-05-28",
        "hour": "19:00",
        "sales": 290.0,
        "orders": 15,
        "rows": 55
      },
      {
        "date": "2026-05-28",
        "hour": "20:00",
        "sales": 99.0,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-05-28",
        "hour": "21:00",
        "sales": 11.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-29",
        "hour": "08:00",
        "sales": 61.5,
        "orders": 2,
        "rows": 14
      },
      {
        "date": "2026-05-29",
        "hour": "09:00",
        "sales": 213.0,
        "orders": 11,
        "rows": 40
      },
      {
        "date": "2026-05-29",
        "hour": "10:00",
        "sales": 300.5,
        "orders": 14,
        "rows": 69
      },
      {
        "date": "2026-05-29",
        "hour": "11:00",
        "sales": 307.3,
        "orders": 15,
        "rows": 69
      },
      {
        "date": "2026-05-29",
        "hour": "12:00",
        "sales": 267.5,
        "orders": 16,
        "rows": 58
      },
      {
        "date": "2026-05-29",
        "hour": "13:00",
        "sales": 591.0,
        "orders": 24,
        "rows": 98
      },
      {
        "date": "2026-05-29",
        "hour": "14:00",
        "sales": 478.0,
        "orders": 23,
        "rows": 93
      },
      {
        "date": "2026-05-29",
        "hour": "15:00",
        "sales": 442.0,
        "orders": 23,
        "rows": 85
      },
      {
        "date": "2026-05-29",
        "hour": "16:00",
        "sales": 751.0,
        "orders": 36,
        "rows": 139
      },
      {
        "date": "2026-05-29",
        "hour": "17:00",
        "sales": 413.2,
        "orders": 20,
        "rows": 80
      },
      {
        "date": "2026-05-29",
        "hour": "18:00",
        "sales": 500.0,
        "orders": 20,
        "rows": 97
      },
      {
        "date": "2026-05-29",
        "hour": "19:00",
        "sales": 553.5,
        "orders": 23,
        "rows": 103
      },
      {
        "date": "2026-05-29",
        "hour": "20:00",
        "sales": 445.5,
        "orders": 29,
        "rows": 82
      },
      {
        "date": "2026-05-29",
        "hour": "21:00",
        "sales": 239.5,
        "orders": 19,
        "rows": 43
      },
      {
        "date": "2026-05-29",
        "hour": "22:00",
        "sales": 67.4,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-05-30",
        "hour": "08:00",
        "sales": 254.2,
        "orders": 16,
        "rows": 61
      },
      {
        "date": "2026-05-30",
        "hour": "09:00",
        "sales": 327.0,
        "orders": 26,
        "rows": 69
      },
      {
        "date": "2026-05-30",
        "hour": "10:00",
        "sales": 277.0,
        "orders": 15,
        "rows": 58
      },
      {
        "date": "2026-05-30",
        "hour": "11:00",
        "sales": 714.5,
        "orders": 39,
        "rows": 139
      },
      {
        "date": "2026-05-30",
        "hour": "12:00",
        "sales": 967.5,
        "orders": 42,
        "rows": 169
      },
      {
        "date": "2026-05-30",
        "hour": "13:00",
        "sales": 882.5,
        "orders": 44,
        "rows": 165
      },
      {
        "date": "2026-05-30",
        "hour": "14:00",
        "sales": 891.0,
        "orders": 47,
        "rows": 172
      },
      {
        "date": "2026-05-30",
        "hour": "15:00",
        "sales": 816.5,
        "orders": 37,
        "rows": 153
      },
      {
        "date": "2026-05-30",
        "hour": "16:00",
        "sales": 836.1,
        "orders": 40,
        "rows": 148
      },
      {
        "date": "2026-05-30",
        "hour": "17:00",
        "sales": 1101.0,
        "orders": 49,
        "rows": 201
      },
      {
        "date": "2026-05-30",
        "hour": "18:00",
        "sales": 503.9,
        "orders": 30,
        "rows": 95
      },
      {
        "date": "2026-05-31",
        "hour": "09:00",
        "sales": 417.2,
        "orders": 23,
        "rows": 92
      },
      {
        "date": "2026-05-31",
        "hour": "10:00",
        "sales": 999.5,
        "orders": 42,
        "rows": 188
      },
      {
        "date": "2026-05-31",
        "hour": "11:00",
        "sales": 1337.0,
        "orders": 58,
        "rows": 244
      },
      {
        "date": "2026-05-31",
        "hour": "12:00",
        "sales": 1340.0,
        "orders": 61,
        "rows": 252
      },
      {
        "date": "2026-05-31",
        "hour": "13:00",
        "sales": 1165.0,
        "orders": 58,
        "rows": 229
      },
      {
        "date": "2026-05-31",
        "hour": "14:00",
        "sales": 2035.5,
        "orders": 50,
        "rows": 196
      },
      {
        "date": "2026-05-31",
        "hour": "15:00",
        "sales": 919.0,
        "orders": 39,
        "rows": 172
      },
      {
        "date": "2026-05-31",
        "hour": "16:00",
        "sales": 882.0,
        "orders": 42,
        "rows": 166
      },
      {
        "date": "2026-05-31",
        "hour": "17:00",
        "sales": 414.5,
        "orders": 30,
        "rows": 83
      },
      {
        "date": "2026-05-31",
        "hour": "18:00",
        "sales": 347.0,
        "orders": 22,
        "rows": 78
      },
      {
        "date": "2026-05-31",
        "hour": "19:00",
        "sales": 179.0,
        "orders": 16,
        "rows": 41
      },
      {
        "date": "2026-05-31",
        "hour": "20:00",
        "sales": 20.0,
        "orders": 4,
        "rows": 5
      },
      {
        "date": "2026-06-01",
        "hour": "08:00",
        "sales": 16.0,
        "orders": 3,
        "rows": 4
      },
      {
        "date": "2026-06-01",
        "hour": "09:00",
        "sales": 204.0,
        "orders": 9,
        "rows": 38
      },
      {
        "date": "2026-06-01",
        "hour": "10:00",
        "sales": 362.5,
        "orders": 23,
        "rows": 77
      },
      {
        "date": "2026-06-01",
        "hour": "11:00",
        "sales": 200.5,
        "orders": 15,
        "rows": 41
      },
      {
        "date": "2026-06-01",
        "hour": "12:00",
        "sales": 423.5,
        "orders": 23,
        "rows": 89
      },
      {
        "date": "2026-06-01",
        "hour": "13:00",
        "sales": 485.0,
        "orders": 24,
        "rows": 97
      },
      {
        "date": "2026-06-01",
        "hour": "14:00",
        "sales": 420.0,
        "orders": 28,
        "rows": 85
      },
      {
        "date": "2026-06-01",
        "hour": "15:00",
        "sales": 177.5,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-06-01",
        "hour": "16:00",
        "sales": 262.5,
        "orders": 14,
        "rows": 49
      },
      {
        "date": "2026-06-01",
        "hour": "17:00",
        "sales": 344.0,
        "orders": 22,
        "rows": 70
      },
      {
        "date": "2026-06-01",
        "hour": "18:00",
        "sales": 119.0,
        "orders": 14,
        "rows": 26
      },
      {
        "date": "2026-06-01",
        "hour": "19:00",
        "sales": 64.5,
        "orders": 7,
        "rows": 13
      },
      {
        "date": "2026-06-01",
        "hour": "20:00",
        "sales": 38.0,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-06-02",
        "hour": "08:00",
        "sales": 133.5,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-06-02",
        "hour": "09:00",
        "sales": 182.0,
        "orders": 11,
        "rows": 40
      },
      {
        "date": "2026-06-02",
        "hour": "10:00",
        "sales": 323.0,
        "orders": 20,
        "rows": 69
      },
      {
        "date": "2026-06-02",
        "hour": "11:00",
        "sales": 599.2,
        "orders": 30,
        "rows": 118
      },
      {
        "date": "2026-06-02",
        "hour": "12:00",
        "sales": 376.0,
        "orders": 22,
        "rows": 69
      },
      {
        "date": "2026-06-02",
        "hour": "13:00",
        "sales": 454.5,
        "orders": 30,
        "rows": 87
      },
      {
        "date": "2026-06-02",
        "hour": "14:00",
        "sales": 417.5,
        "orders": 25,
        "rows": 85
      },
      {
        "date": "2026-06-02",
        "hour": "15:00",
        "sales": 213.5,
        "orders": 16,
        "rows": 44
      },
      {
        "date": "2026-06-02",
        "hour": "16:00",
        "sales": 369.0,
        "orders": 25,
        "rows": 69
      },
      {
        "date": "2026-06-02",
        "hour": "17:00",
        "sales": 130.0,
        "orders": 10,
        "rows": 23
      },
      {
        "date": "2026-06-02",
        "hour": "18:00",
        "sales": 19.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-06-03",
        "hour": "07:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-06-03",
        "hour": "08:00",
        "sales": 121.5,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-06-03",
        "hour": "09:00",
        "sales": 317.5,
        "orders": 15,
        "rows": 60
      },
      {
        "date": "2026-06-03",
        "hour": "10:00",
        "sales": 325.0,
        "orders": 25,
        "rows": 74
      },
      {
        "date": "2026-06-03",
        "hour": "11:00",
        "sales": 507.0,
        "orders": 28,
        "rows": 106
      },
      {
        "date": "2026-06-03",
        "hour": "12:00",
        "sales": 276.5,
        "orders": 20,
        "rows": 58
      },
      {
        "date": "2026-06-03",
        "hour": "13:00",
        "sales": 589.0,
        "orders": 32,
        "rows": 114
      },
      {
        "date": "2026-06-03",
        "hour": "14:00",
        "sales": 231.5,
        "orders": 17,
        "rows": 43
      },
      {
        "date": "2026-06-03",
        "hour": "15:00",
        "sales": 329.5,
        "orders": 22,
        "rows": 67
      },
      {
        "date": "2026-06-03",
        "hour": "16:00",
        "sales": 429.0,
        "orders": 23,
        "rows": 86
      },
      {
        "date": "2026-06-03",
        "hour": "17:00",
        "sales": 221.0,
        "orders": 14,
        "rows": 43
      },
      {
        "date": "2026-06-03",
        "hour": "18:00",
        "sales": 60.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-06-03",
        "hour": "19:00",
        "sales": 308.2,
        "orders": 19,
        "rows": 65
      },
      {
        "date": "2026-06-03",
        "hour": "20:00",
        "sales": 146.0,
        "orders": 12,
        "rows": 32
      },
      {
        "date": "2026-06-04",
        "hour": "08:00",
        "sales": 119.5,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-06-04",
        "hour": "09:00",
        "sales": 390.5,
        "orders": 23,
        "rows": 90
      },
      {
        "date": "2026-06-04",
        "hour": "10:00",
        "sales": 387.0,
        "orders": 20,
        "rows": 80
      },
      {
        "date": "2026-06-04",
        "hour": "11:00",
        "sales": 436.5,
        "orders": 20,
        "rows": 86
      },
      {
        "date": "2026-06-04",
        "hour": "12:00",
        "sales": 736.0,
        "orders": 37,
        "rows": 144
      },
      {
        "date": "2026-06-04",
        "hour": "13:00",
        "sales": 561.0,
        "orders": 33,
        "rows": 117
      },
      {
        "date": "2026-06-04",
        "hour": "14:00",
        "sales": 304.0,
        "orders": 16,
        "rows": 58
      },
      {
        "date": "2026-06-04",
        "hour": "15:00",
        "sales": 520.0,
        "orders": 24,
        "rows": 96
      },
      {
        "date": "2026-06-04",
        "hour": "16:00",
        "sales": 393.5,
        "orders": 22,
        "rows": 69
      },
      {
        "date": "2026-06-04",
        "hour": "17:00",
        "sales": 275.0,
        "orders": 16,
        "rows": 51
      },
      {
        "date": "2026-06-04",
        "hour": "18:00",
        "sales": 201.0,
        "orders": 12,
        "rows": 42
      },
      {
        "date": "2026-06-04",
        "hour": "19:00",
        "sales": 26.5,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-06-04",
        "hour": "20:00",
        "sales": 17.0,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-06-05",
        "hour": "08:00",
        "sales": 406.2,
        "orders": 14,
        "rows": 83
      },
      {
        "date": "2026-06-05",
        "hour": "09:00",
        "sales": 580.7,
        "orders": 29,
        "rows": 123
      },
      {
        "date": "2026-06-05",
        "hour": "10:00",
        "sales": 455.0,
        "orders": 23,
        "rows": 91
      },
      {
        "date": "2026-06-05",
        "hour": "11:00",
        "sales": 888.5,
        "orders": 41,
        "rows": 176
      },
      {
        "date": "2026-06-05",
        "hour": "12:00",
        "sales": 793.5,
        "orders": 35,
        "rows": 147
      },
      {
        "date": "2026-06-05",
        "hour": "13:00",
        "sales": 774.5,
        "orders": 48,
        "rows": 143
      },
      {
        "date": "2026-06-05",
        "hour": "14:00",
        "sales": 797.0,
        "orders": 46,
        "rows": 148
      },
      {
        "date": "2026-06-05",
        "hour": "15:00",
        "sales": 554.0,
        "orders": 31,
        "rows": 108
      },
      {
        "date": "2026-06-05",
        "hour": "16:00",
        "sales": 851.0,
        "orders": 36,
        "rows": 161
      },
      {
        "date": "2026-06-05",
        "hour": "17:00",
        "sales": 575.2,
        "orders": 29,
        "rows": 108
      },
      {
        "date": "2026-06-06",
        "hour": "08:00",
        "sales": 325.5,
        "orders": 19,
        "rows": 67
      },
      {
        "date": "2026-06-06",
        "hour": "09:00",
        "sales": 838.0,
        "orders": 33,
        "rows": 168
      },
      {
        "date": "2026-06-06",
        "hour": "10:00",
        "sales": 967.0,
        "orders": 46,
        "rows": 184
      },
      {
        "date": "2026-06-06",
        "hour": "11:00",
        "sales": 1052.9,
        "orders": 51,
        "rows": 204
      },
      {
        "date": "2026-06-06",
        "hour": "12:00",
        "sales": 1358.7,
        "orders": 69,
        "rows": 248
      },
      {
        "date": "2026-06-06",
        "hour": "13:00",
        "sales": 1325.0,
        "orders": 58,
        "rows": 252
      },
      {
        "date": "2026-06-06",
        "hour": "14:00",
        "sales": 1741.5,
        "orders": 73,
        "rows": 324
      },
      {
        "date": "2026-06-06",
        "hour": "15:00",
        "sales": 830.5,
        "orders": 42,
        "rows": 150
      },
      {
        "date": "2026-06-06",
        "hour": "16:00",
        "sales": 1374.6,
        "orders": 57,
        "rows": 267
      },
      {
        "date": "2026-06-06",
        "hour": "17:00",
        "sales": 872.0,
        "orders": 40,
        "rows": 160
      },
      {
        "date": "2026-06-06",
        "hour": "18:00",
        "sales": 636.0,
        "orders": 40,
        "rows": 124
      },
      {
        "date": "2026-06-06",
        "hour": "19:00",
        "sales": 144.5,
        "orders": 14,
        "rows": 31
      },
      {
        "date": "2026-06-06",
        "hour": "20:00",
        "sales": 5.2,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-06-07",
        "hour": "08:00",
        "sales": 227.5,
        "orders": 10,
        "rows": 41
      },
      {
        "date": "2026-06-07",
        "hour": "09:00",
        "sales": 850.5,
        "orders": 43,
        "rows": 169
      },
      {
        "date": "2026-06-07",
        "hour": "10:00",
        "sales": 961.0,
        "orders": 49,
        "rows": 181
      },
      {
        "date": "2026-06-07",
        "hour": "11:00",
        "sales": 1428.0,
        "orders": 61,
        "rows": 251
      },
      {
        "date": "2026-06-07",
        "hour": "12:00",
        "sales": 1422.0,
        "orders": 61,
        "rows": 254
      },
      {
        "date": "2026-06-07",
        "hour": "13:00",
        "sales": 1635.0,
        "orders": 60,
        "rows": 304
      },
      {
        "date": "2026-06-07",
        "hour": "14:00",
        "sales": 1333.5,
        "orders": 57,
        "rows": 250
      },
      {
        "date": "2026-06-07",
        "hour": "15:00",
        "sales": 515.5,
        "orders": 25,
        "rows": 98
      },
      {
        "date": "2026-06-07",
        "hour": "16:00",
        "sales": 614.7,
        "orders": 25,
        "rows": 123
      },
      {
        "date": "2026-06-07",
        "hour": "17:00",
        "sales": 93.5,
        "orders": 9,
        "rows": 21
      },
      {
        "date": "2026-06-07",
        "hour": "18:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-06-08",
        "hour": "08:00",
        "sales": 256.85,
        "orders": 11,
        "rows": 62
      },
      {
        "date": "2026-06-08",
        "hour": "09:00",
        "sales": 934.09,
        "orders": 42,
        "rows": 201
      },
      {
        "date": "2026-06-08",
        "hour": "10:00",
        "sales": 927.7,
        "orders": 51,
        "rows": 216
      },
      {
        "date": "2026-06-08",
        "hour": "11:00",
        "sales": 1251.11,
        "orders": 52,
        "rows": 268
      },
      {
        "date": "2026-06-08",
        "hour": "12:00",
        "sales": 1809.43,
        "orders": 72,
        "rows": 382
      },
      {
        "date": "2026-06-08",
        "hour": "13:00",
        "sales": 1366.6,
        "orders": 53,
        "rows": 289
      },
      {
        "date": "2026-06-08",
        "hour": "14:00",
        "sales": 792.6,
        "orders": 42,
        "rows": 192
      },
      {
        "date": "2026-06-08",
        "hour": "15:00",
        "sales": 89.5,
        "orders": 10,
        "rows": 27
      },
      {
        "date": "2026-06-08",
        "hour": "16:00",
        "sales": 11.0,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-06-09",
        "hour": "08:00",
        "sales": 186.5,
        "orders": 8,
        "rows": 42
      },
      {
        "date": "2026-06-09",
        "hour": "09:00",
        "sales": 288.5,
        "orders": 14,
        "rows": 58
      },
      {
        "date": "2026-06-09",
        "hour": "10:00",
        "sales": 405.0,
        "orders": 16,
        "rows": 81
      },
      {
        "date": "2026-06-09",
        "hour": "11:00",
        "sales": 312.0,
        "orders": 20,
        "rows": 61
      },
      {
        "date": "2026-06-09",
        "hour": "12:00",
        "sales": 355.5,
        "orders": 22,
        "rows": 74
      },
      {
        "date": "2026-06-09",
        "hour": "13:00",
        "sales": 302.0,
        "orders": 19,
        "rows": 58
      },
      {
        "date": "2026-06-09",
        "hour": "14:00",
        "sales": 301.4,
        "orders": 22,
        "rows": 66
      },
      {
        "date": "2026-06-09",
        "hour": "15:00",
        "sales": 150.5,
        "orders": 12,
        "rows": 28
      },
      {
        "date": "2026-06-09",
        "hour": "16:00",
        "sales": 320.3,
        "orders": 22,
        "rows": 65
      },
      {
        "date": "2026-06-09",
        "hour": "17:00",
        "sales": 149.5,
        "orders": 12,
        "rows": 28
      },
      {
        "date": "2026-06-09",
        "hour": "18:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-06-10",
        "hour": "08:00",
        "sales": 80.0,
        "orders": 4,
        "rows": 21
      },
      {
        "date": "2026-06-10",
        "hour": "09:00",
        "sales": 235.0,
        "orders": 17,
        "rows": 47
      },
      {
        "date": "2026-06-10",
        "hour": "10:00",
        "sales": 312.7,
        "orders": 14,
        "rows": 67
      },
      {
        "date": "2026-06-10",
        "hour": "11:00",
        "sales": 487.0,
        "orders": 25,
        "rows": 100
      },
      {
        "date": "2026-06-10",
        "hour": "12:00",
        "sales": 440.0,
        "orders": 35,
        "rows": 89
      },
      {
        "date": "2026-06-10",
        "hour": "13:00",
        "sales": 285.5,
        "orders": 22,
        "rows": 56
      },
      {
        "date": "2026-06-10",
        "hour": "14:00",
        "sales": 257.5,
        "orders": 18,
        "rows": 51
      },
      {
        "date": "2026-06-10",
        "hour": "15:00",
        "sales": 371.2,
        "orders": 19,
        "rows": 82
      },
      {
        "date": "2026-06-10",
        "hour": "16:00",
        "sales": 375.0,
        "orders": 19,
        "rows": 74
      },
      {
        "date": "2026-06-10",
        "hour": "17:00",
        "sales": 297.5,
        "orders": 21,
        "rows": 53
      },
      {
        "date": "2026-06-10",
        "hour": "18:00",
        "sales": 428.5,
        "orders": 20,
        "rows": 79
      },
      {
        "date": "2026-06-10",
        "hour": "19:00",
        "sales": 183.5,
        "orders": 9,
        "rows": 33
      },
      {
        "date": "2026-06-10",
        "hour": "20:00",
        "sales": 107.5,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-06-11",
        "hour": "08:00",
        "sales": 144.5,
        "orders": 7,
        "rows": 37
      },
      {
        "date": "2026-06-11",
        "hour": "09:00",
        "sales": 438.5,
        "orders": 20,
        "rows": 74
      },
      {
        "date": "2026-06-11",
        "hour": "10:00",
        "sales": 558.5,
        "orders": 29,
        "rows": 113
      },
      {
        "date": "2026-06-11",
        "hour": "11:00",
        "sales": 646.5,
        "orders": 30,
        "rows": 136
      },
      {
        "date": "2026-06-11",
        "hour": "12:00",
        "sales": 599.0,
        "orders": 36,
        "rows": 118
      },
      {
        "date": "2026-06-11",
        "hour": "13:00",
        "sales": 614.5,
        "orders": 33,
        "rows": 123
      },
      {
        "date": "2026-06-11",
        "hour": "14:00",
        "sales": 403.5,
        "orders": 27,
        "rows": 76
      },
      {
        "date": "2026-06-11",
        "hour": "15:00",
        "sales": 288.0,
        "orders": 18,
        "rows": 55
      },
      {
        "date": "2026-06-11",
        "hour": "16:00",
        "sales": 311.9,
        "orders": 15,
        "rows": 60
      },
      {
        "date": "2026-06-11",
        "hour": "17:00",
        "sales": 334.0,
        "orders": 20,
        "rows": 61
      },
      {
        "date": "2026-06-11",
        "hour": "18:00",
        "sales": 96.0,
        "orders": 8,
        "rows": 17
      },
      {
        "date": "2026-06-11",
        "hour": "19:00",
        "sales": 6.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-06-12",
        "hour": "08:00",
        "sales": 147.0,
        "orders": 6,
        "rows": 30
      },
      {
        "date": "2026-06-12",
        "hour": "09:00",
        "sales": 213.2,
        "orders": 14,
        "rows": 44
      },
      {
        "date": "2026-06-12",
        "hour": "10:00",
        "sales": 499.8,
        "orders": 26,
        "rows": 96
      },
      {
        "date": "2026-06-12",
        "hour": "11:00",
        "sales": 543.0,
        "orders": 30,
        "rows": 105
      },
      {
        "date": "2026-06-12",
        "hour": "12:00",
        "sales": 692.2,
        "orders": 36,
        "rows": 136
      },
      {
        "date": "2026-06-12",
        "hour": "13:00",
        "sales": 621.0,
        "orders": 30,
        "rows": 118
      },
      {
        "date": "2026-06-12",
        "hour": "14:00",
        "sales": 595.5,
        "orders": 28,
        "rows": 115
      },
      {
        "date": "2026-06-12",
        "hour": "15:00",
        "sales": 457.0,
        "orders": 23,
        "rows": 81
      },
      {
        "date": "2026-06-12",
        "hour": "16:00",
        "sales": 675.5,
        "orders": 38,
        "rows": 128
      },
      {
        "date": "2026-06-12",
        "hour": "17:00",
        "sales": 684.0,
        "orders": 28,
        "rows": 116
      },
      {
        "date": "2026-06-12",
        "hour": "18:00",
        "sales": 501.5,
        "orders": 26,
        "rows": 92
      },
      {
        "date": "2026-06-12",
        "hour": "19:00",
        "sales": 661.0,
        "orders": 35,
        "rows": 129
      },
      {
        "date": "2026-06-12",
        "hour": "20:00",
        "sales": 340.0,
        "orders": 19,
        "rows": 67
      },
      {
        "date": "2026-06-12",
        "hour": "21:00",
        "sales": 182.0,
        "orders": 15,
        "rows": 37
      },
      {
        "date": "2026-06-12",
        "hour": "22:00",
        "sales": 48.0,
        "orders": 3,
        "rows": 9
      }
    ],
    "Penrith": [
      {
        "date": "2026-03-14",
        "hour": "08:00",
        "sales": 23.5,
        "orders": 4,
        "rows": 5
      },
      {
        "date": "2026-03-14",
        "hour": "09:00",
        "sales": 57.0,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-03-14",
        "hour": "10:00",
        "sales": 265.0,
        "orders": 17,
        "rows": 59
      },
      {
        "date": "2026-03-14",
        "hour": "11:00",
        "sales": 257.0,
        "orders": 15,
        "rows": 54
      },
      {
        "date": "2026-03-14",
        "hour": "12:00",
        "sales": 517.5,
        "orders": 26,
        "rows": 98
      },
      {
        "date": "2026-03-14",
        "hour": "13:00",
        "sales": 373.5,
        "orders": 19,
        "rows": 77
      },
      {
        "date": "2026-03-14",
        "hour": "14:00",
        "sales": 425.0,
        "orders": 26,
        "rows": 80
      },
      {
        "date": "2026-03-14",
        "hour": "15:00",
        "sales": 404.5,
        "orders": 21,
        "rows": 77
      },
      {
        "date": "2026-03-14",
        "hour": "16:00",
        "sales": 557.5,
        "orders": 28,
        "rows": 104
      },
      {
        "date": "2026-03-14",
        "hour": "17:00",
        "sales": 439.5,
        "orders": 25,
        "rows": 86
      },
      {
        "date": "2026-03-14",
        "hour": "18:00",
        "sales": 247.5,
        "orders": 11,
        "rows": 47
      },
      {
        "date": "2026-03-14",
        "hour": "19:00",
        "sales": 428.0,
        "orders": 23,
        "rows": 89
      },
      {
        "date": "2026-03-14",
        "hour": "20:00",
        "sales": 396.0,
        "orders": 22,
        "rows": 78
      },
      {
        "date": "2026-03-14",
        "hour": "21:00",
        "sales": 330.0,
        "orders": 23,
        "rows": 73
      },
      {
        "date": "2026-03-14",
        "hour": "22:00",
        "sales": 56.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-03-15",
        "hour": "08:00",
        "sales": 20.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-03-15",
        "hour": "09:00",
        "sales": 58.0,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-03-15",
        "hour": "10:00",
        "sales": 145.5,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-03-15",
        "hour": "11:00",
        "sales": 356.5,
        "orders": 14,
        "rows": 69
      },
      {
        "date": "2026-03-15",
        "hour": "12:00",
        "sales": 397.0,
        "orders": 18,
        "rows": 75
      },
      {
        "date": "2026-03-15",
        "hour": "13:00",
        "sales": 336.5,
        "orders": 24,
        "rows": 68
      },
      {
        "date": "2026-03-15",
        "hour": "14:00",
        "sales": 150.5,
        "orders": 10,
        "rows": 32
      },
      {
        "date": "2026-03-15",
        "hour": "15:00",
        "sales": 176.5,
        "orders": 11,
        "rows": 29
      },
      {
        "date": "2026-03-15",
        "hour": "16:00",
        "sales": 390.0,
        "orders": 18,
        "rows": 89
      },
      {
        "date": "2026-03-15",
        "hour": "17:00",
        "sales": 192.0,
        "orders": 16,
        "rows": 39
      },
      {
        "date": "2026-03-15",
        "hour": "18:00",
        "sales": 351.5,
        "orders": 14,
        "rows": 63
      },
      {
        "date": "2026-03-15",
        "hour": "19:00",
        "sales": 196.0,
        "orders": 13,
        "rows": 40
      },
      {
        "date": "2026-03-15",
        "hour": "20:00",
        "sales": 253.0,
        "orders": 18,
        "rows": 51
      },
      {
        "date": "2026-03-15",
        "hour": "21:00",
        "sales": 16.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-03-16",
        "hour": "09:00",
        "sales": 82.0,
        "orders": 5,
        "rows": 18
      },
      {
        "date": "2026-03-16",
        "hour": "10:00",
        "sales": 68.0,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-03-16",
        "hour": "11:00",
        "sales": 52.5,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-03-16",
        "hour": "12:00",
        "sales": 128.0,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-03-16",
        "hour": "13:00",
        "sales": 164.0,
        "orders": 6,
        "rows": 31
      },
      {
        "date": "2026-03-16",
        "hour": "14:00",
        "sales": 51.5,
        "orders": 3,
        "rows": 11
      },
      {
        "date": "2026-03-16",
        "hour": "15:00",
        "sales": 191.5,
        "orders": 10,
        "rows": 40
      },
      {
        "date": "2026-03-16",
        "hour": "16:00",
        "sales": 109.5,
        "orders": 8,
        "rows": 24
      },
      {
        "date": "2026-03-16",
        "hour": "17:00",
        "sales": 143.5,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-03-16",
        "hour": "18:00",
        "sales": 244.0,
        "orders": 9,
        "rows": 45
      },
      {
        "date": "2026-03-16",
        "hour": "19:00",
        "sales": 160.5,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-03-16",
        "hour": "20:00",
        "sales": 129.0,
        "orders": 11,
        "rows": 25
      },
      {
        "date": "2026-03-16",
        "hour": "21:00",
        "sales": 43.5,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-03-17",
        "hour": "08:00",
        "sales": 26.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-03-17",
        "hour": "09:00",
        "sales": 51.0,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-03-17",
        "hour": "10:00",
        "sales": 154.0,
        "orders": 13,
        "rows": 30
      },
      {
        "date": "2026-03-17",
        "hour": "11:00",
        "sales": 156.0,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-03-17",
        "hour": "12:00",
        "sales": 200.0,
        "orders": 15,
        "rows": 46
      },
      {
        "date": "2026-03-17",
        "hour": "13:00",
        "sales": 54.0,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-03-17",
        "hour": "14:00",
        "sales": 162.0,
        "orders": 8,
        "rows": 39
      },
      {
        "date": "2026-03-17",
        "hour": "15:00",
        "sales": 135.0,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-03-17",
        "hour": "16:00",
        "sales": 180.0,
        "orders": 10,
        "rows": 35
      },
      {
        "date": "2026-03-17",
        "hour": "17:00",
        "sales": 207.0,
        "orders": 12,
        "rows": 39
      },
      {
        "date": "2026-03-17",
        "hour": "18:00",
        "sales": 143.0,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-03-17",
        "hour": "19:00",
        "sales": 93.5,
        "orders": 6,
        "rows": 22
      },
      {
        "date": "2026-03-17",
        "hour": "20:00",
        "sales": 40.5,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-03-17",
        "hour": "21:00",
        "sales": 39.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-03-18",
        "hour": "08:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-18",
        "hour": "09:00",
        "sales": 95.0,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-03-18",
        "hour": "10:00",
        "sales": 93.0,
        "orders": 6,
        "rows": 22
      },
      {
        "date": "2026-03-18",
        "hour": "11:00",
        "sales": 92.0,
        "orders": 9,
        "rows": 18
      },
      {
        "date": "2026-03-18",
        "hour": "12:00",
        "sales": 146.5,
        "orders": 6,
        "rows": 25
      },
      {
        "date": "2026-03-18",
        "hour": "13:00",
        "sales": 50.0,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-03-18",
        "hour": "14:00",
        "sales": 219.0,
        "orders": 13,
        "rows": 42
      },
      {
        "date": "2026-03-18",
        "hour": "15:00",
        "sales": 98.0,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-03-18",
        "hour": "16:00",
        "sales": 44.5,
        "orders": 4,
        "rows": 8
      },
      {
        "date": "2026-03-18",
        "hour": "17:00",
        "sales": 115.5,
        "orders": 10,
        "rows": 20
      },
      {
        "date": "2026-03-18",
        "hour": "18:00",
        "sales": 146.0,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-03-18",
        "hour": "19:00",
        "sales": 181.0,
        "orders": 12,
        "rows": 39
      },
      {
        "date": "2026-03-18",
        "hour": "20:00",
        "sales": 144.0,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-03-18",
        "hour": "21:00",
        "sales": 72.0,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-03-19",
        "hour": "09:00",
        "sales": 36.5,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-03-19",
        "hour": "10:00",
        "sales": 110.0,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-03-19",
        "hour": "11:00",
        "sales": 67.0,
        "orders": 3,
        "rows": 13
      },
      {
        "date": "2026-03-19",
        "hour": "12:00",
        "sales": 119.0,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-03-19",
        "hour": "13:00",
        "sales": 190.0,
        "orders": 13,
        "rows": 49
      },
      {
        "date": "2026-03-19",
        "hour": "14:00",
        "sales": 174.0,
        "orders": 13,
        "rows": 38
      },
      {
        "date": "2026-03-19",
        "hour": "15:00",
        "sales": 52.5,
        "orders": 6,
        "rows": 11
      },
      {
        "date": "2026-03-19",
        "hour": "16:00",
        "sales": 140.0,
        "orders": 7,
        "rows": 29
      },
      {
        "date": "2026-03-19",
        "hour": "17:00",
        "sales": 215.0,
        "orders": 14,
        "rows": 41
      },
      {
        "date": "2026-03-19",
        "hour": "18:00",
        "sales": 230.5,
        "orders": 12,
        "rows": 46
      },
      {
        "date": "2026-03-19",
        "hour": "19:00",
        "sales": 199.5,
        "orders": 14,
        "rows": 39
      },
      {
        "date": "2026-03-19",
        "hour": "20:00",
        "sales": 128.0,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-03-19",
        "hour": "21:00",
        "sales": 24.0,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-03-20",
        "hour": "08:00",
        "sales": 18.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-03-20",
        "hour": "09:00",
        "sales": 94.5,
        "orders": 6,
        "rows": 21
      },
      {
        "date": "2026-03-20",
        "hour": "10:00",
        "sales": 136.5,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-03-20",
        "hour": "11:00",
        "sales": 119.0,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-03-20",
        "hour": "12:00",
        "sales": 188.5,
        "orders": 8,
        "rows": 42
      },
      {
        "date": "2026-03-20",
        "hour": "13:00",
        "sales": 141.5,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-03-20",
        "hour": "14:00",
        "sales": 389.0,
        "orders": 20,
        "rows": 78
      },
      {
        "date": "2026-03-20",
        "hour": "15:00",
        "sales": 222.0,
        "orders": 11,
        "rows": 41
      },
      {
        "date": "2026-03-20",
        "hour": "16:00",
        "sales": 262.0,
        "orders": 14,
        "rows": 59
      },
      {
        "date": "2026-03-20",
        "hour": "17:00",
        "sales": 99.0,
        "orders": 10,
        "rows": 19
      },
      {
        "date": "2026-03-20",
        "hour": "18:00",
        "sales": 244.5,
        "orders": 13,
        "rows": 49
      },
      {
        "date": "2026-03-20",
        "hour": "19:00",
        "sales": 290.0,
        "orders": 16,
        "rows": 59
      },
      {
        "date": "2026-03-20",
        "hour": "20:00",
        "sales": 239.5,
        "orders": 13,
        "rows": 51
      },
      {
        "date": "2026-03-20",
        "hour": "21:00",
        "sales": 53.0,
        "orders": 4,
        "rows": 18
      },
      {
        "date": "2026-03-20",
        "hour": "22:00",
        "sales": 24.0,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-03-21",
        "hour": "08:00",
        "sales": 50.5,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-03-21",
        "hour": "09:00",
        "sales": 170.5,
        "orders": 10,
        "rows": 37
      },
      {
        "date": "2026-03-21",
        "hour": "10:00",
        "sales": 312.0,
        "orders": 14,
        "rows": 63
      },
      {
        "date": "2026-03-21",
        "hour": "11:00",
        "sales": 336.0,
        "orders": 20,
        "rows": 77
      },
      {
        "date": "2026-03-21",
        "hour": "12:00",
        "sales": 475.0,
        "orders": 23,
        "rows": 98
      },
      {
        "date": "2026-03-21",
        "hour": "13:00",
        "sales": 215.5,
        "orders": 10,
        "rows": 41
      },
      {
        "date": "2026-03-21",
        "hour": "14:00",
        "sales": 516.0,
        "orders": 26,
        "rows": 97
      },
      {
        "date": "2026-03-21",
        "hour": "15:00",
        "sales": 164.0,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-03-21",
        "hour": "16:00",
        "sales": 192.0,
        "orders": 11,
        "rows": 41
      },
      {
        "date": "2026-03-21",
        "hour": "17:00",
        "sales": 405.5,
        "orders": 22,
        "rows": 78
      },
      {
        "date": "2026-03-21",
        "hour": "18:00",
        "sales": 356.5,
        "orders": 19,
        "rows": 71
      },
      {
        "date": "2026-03-21",
        "hour": "19:00",
        "sales": 443.5,
        "orders": 25,
        "rows": 97
      },
      {
        "date": "2026-03-21",
        "hour": "20:00",
        "sales": 245.5,
        "orders": 11,
        "rows": 52
      },
      {
        "date": "2026-03-21",
        "hour": "21:00",
        "sales": 60.5,
        "orders": 2,
        "rows": 12
      },
      {
        "date": "2026-03-21",
        "hour": "22:00",
        "sales": 44.0,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-03-22",
        "hour": "09:00",
        "sales": 100.5,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-03-22",
        "hour": "10:00",
        "sales": 186.5,
        "orders": 11,
        "rows": 45
      },
      {
        "date": "2026-03-22",
        "hour": "11:00",
        "sales": 472.5,
        "orders": 23,
        "rows": 98
      },
      {
        "date": "2026-03-22",
        "hour": "12:00",
        "sales": 403.5,
        "orders": 20,
        "rows": 85
      },
      {
        "date": "2026-03-22",
        "hour": "13:00",
        "sales": 209.0,
        "orders": 11,
        "rows": 53
      },
      {
        "date": "2026-03-22",
        "hour": "14:00",
        "sales": 282.5,
        "orders": 19,
        "rows": 64
      },
      {
        "date": "2026-03-22",
        "hour": "15:00",
        "sales": 378.0,
        "orders": 21,
        "rows": 73
      },
      {
        "date": "2026-03-22",
        "hour": "16:00",
        "sales": 249.5,
        "orders": 19,
        "rows": 51
      },
      {
        "date": "2026-03-22",
        "hour": "17:00",
        "sales": 363.5,
        "orders": 15,
        "rows": 71
      },
      {
        "date": "2026-03-22",
        "hour": "18:00",
        "sales": 350.5,
        "orders": 19,
        "rows": 59
      },
      {
        "date": "2026-03-22",
        "hour": "19:00",
        "sales": 138.5,
        "orders": 9,
        "rows": 29
      },
      {
        "date": "2026-03-22",
        "hour": "20:00",
        "sales": 140.5,
        "orders": 6,
        "rows": 28
      },
      {
        "date": "2026-03-22",
        "hour": "21:00",
        "sales": 44.0,
        "orders": 5,
        "rows": 9
      },
      {
        "date": "2026-03-23",
        "hour": "09:00",
        "sales": 112.5,
        "orders": 7,
        "rows": 28
      },
      {
        "date": "2026-03-23",
        "hour": "10:00",
        "sales": 89.5,
        "orders": 4,
        "rows": 18
      },
      {
        "date": "2026-03-23",
        "hour": "11:00",
        "sales": 50.0,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-03-23",
        "hour": "12:00",
        "sales": 76.0,
        "orders": 3,
        "rows": 16
      },
      {
        "date": "2026-03-23",
        "hour": "13:00",
        "sales": 17.5,
        "orders": 3,
        "rows": 4
      },
      {
        "date": "2026-03-23",
        "hour": "14:00",
        "sales": 223.5,
        "orders": 13,
        "rows": 56
      },
      {
        "date": "2026-03-23",
        "hour": "15:00",
        "sales": 209.5,
        "orders": 14,
        "rows": 43
      },
      {
        "date": "2026-03-23",
        "hour": "16:00",
        "sales": 121.5,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-03-23",
        "hour": "17:00",
        "sales": 127.5,
        "orders": 6,
        "rows": 24
      },
      {
        "date": "2026-03-23",
        "hour": "18:00",
        "sales": 67.0,
        "orders": 6,
        "rows": 13
      },
      {
        "date": "2026-03-23",
        "hour": "19:00",
        "sales": 92.5,
        "orders": 4,
        "rows": 20
      },
      {
        "date": "2026-03-23",
        "hour": "20:00",
        "sales": 103.0,
        "orders": 4,
        "rows": 19
      },
      {
        "date": "2026-03-23",
        "hour": "21:00",
        "sales": 25.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-03-24",
        "hour": "08:00",
        "sales": 18.5,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-03-24",
        "hour": "09:00",
        "sales": 93.0,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-03-24",
        "hour": "10:00",
        "sales": 41.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-03-24",
        "hour": "11:00",
        "sales": 94.0,
        "orders": 6,
        "rows": 21
      },
      {
        "date": "2026-03-24",
        "hour": "12:00",
        "sales": 149.0,
        "orders": 7,
        "rows": 27
      },
      {
        "date": "2026-03-24",
        "hour": "13:00",
        "sales": 210.0,
        "orders": 12,
        "rows": 38
      },
      {
        "date": "2026-03-24",
        "hour": "14:00",
        "sales": 96.0,
        "orders": 8,
        "rows": 21
      },
      {
        "date": "2026-03-24",
        "hour": "15:00",
        "sales": 179.0,
        "orders": 9,
        "rows": 38
      },
      {
        "date": "2026-03-24",
        "hour": "16:00",
        "sales": 228.0,
        "orders": 16,
        "rows": 53
      },
      {
        "date": "2026-03-24",
        "hour": "17:00",
        "sales": 269.0,
        "orders": 8,
        "rows": 52
      },
      {
        "date": "2026-03-24",
        "hour": "18:00",
        "sales": 190.5,
        "orders": 13,
        "rows": 39
      },
      {
        "date": "2026-03-24",
        "hour": "19:00",
        "sales": 128.5,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-03-24",
        "hour": "20:00",
        "sales": 173.5,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-03-24",
        "hour": "21:00",
        "sales": 31.0,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-03-25",
        "hour": "08:00",
        "sales": 28.5,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-03-25",
        "hour": "09:00",
        "sales": 36.0,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-03-25",
        "hour": "10:00",
        "sales": 61.0,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-03-25",
        "hour": "11:00",
        "sales": 162.0,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-03-25",
        "hour": "12:00",
        "sales": 44.0,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-03-25",
        "hour": "13:00",
        "sales": 223.5,
        "orders": 16,
        "rows": 52
      },
      {
        "date": "2026-03-25",
        "hour": "14:00",
        "sales": 82.5,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-03-25",
        "hour": "15:00",
        "sales": 237.5,
        "orders": 11,
        "rows": 50
      },
      {
        "date": "2026-03-25",
        "hour": "16:00",
        "sales": 331.5,
        "orders": 14,
        "rows": 62
      },
      {
        "date": "2026-03-25",
        "hour": "17:00",
        "sales": 182.0,
        "orders": 14,
        "rows": 37
      },
      {
        "date": "2026-03-25",
        "hour": "18:00",
        "sales": 101.0,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-03-25",
        "hour": "19:00",
        "sales": 84.0,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-03-25",
        "hour": "20:00",
        "sales": 66.5,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-03-26",
        "hour": "08:00",
        "sales": 8.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-26",
        "hour": "09:00",
        "sales": 28.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-03-26",
        "hour": "10:00",
        "sales": 10.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-03-26",
        "hour": "11:00",
        "sales": 160.0,
        "orders": 10,
        "rows": 31
      },
      {
        "date": "2026-03-26",
        "hour": "12:00",
        "sales": 64.5,
        "orders": 6,
        "rows": 11
      },
      {
        "date": "2026-03-26",
        "hour": "13:00",
        "sales": 60.5,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-03-26",
        "hour": "14:00",
        "sales": 46.5,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-03-26",
        "hour": "15:00",
        "sales": 202.5,
        "orders": 14,
        "rows": 44
      },
      {
        "date": "2026-03-26",
        "hour": "16:00",
        "sales": 226.0,
        "orders": 11,
        "rows": 44
      },
      {
        "date": "2026-03-26",
        "hour": "17:00",
        "sales": 156.0,
        "orders": 10,
        "rows": 30
      },
      {
        "date": "2026-03-26",
        "hour": "18:00",
        "sales": 72.0,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-03-26",
        "hour": "19:00",
        "sales": 134.0,
        "orders": 12,
        "rows": 31
      },
      {
        "date": "2026-03-26",
        "hour": "20:00",
        "sales": 299.5,
        "orders": 15,
        "rows": 66
      },
      {
        "date": "2026-03-26",
        "hour": "21:00",
        "sales": 39.5,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-03-27",
        "hour": "08:00",
        "sales": 8.0,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-03-27",
        "hour": "09:00",
        "sales": 98.0,
        "orders": 7,
        "rows": 29
      },
      {
        "date": "2026-03-27",
        "hour": "10:00",
        "sales": 123.0,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-03-27",
        "hour": "11:00",
        "sales": 198.5,
        "orders": 12,
        "rows": 45
      },
      {
        "date": "2026-03-27",
        "hour": "12:00",
        "sales": 221.0,
        "orders": 15,
        "rows": 45
      },
      {
        "date": "2026-03-27",
        "hour": "13:00",
        "sales": 246.0,
        "orders": 11,
        "rows": 44
      },
      {
        "date": "2026-03-27",
        "hour": "14:00",
        "sales": 107.0,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-03-27",
        "hour": "15:00",
        "sales": 254.5,
        "orders": 18,
        "rows": 56
      },
      {
        "date": "2026-03-27",
        "hour": "16:00",
        "sales": 211.0,
        "orders": 11,
        "rows": 50
      },
      {
        "date": "2026-03-27",
        "hour": "17:00",
        "sales": 165.5,
        "orders": 10,
        "rows": 30
      },
      {
        "date": "2026-03-27",
        "hour": "18:00",
        "sales": 298.5,
        "orders": 14,
        "rows": 55
      },
      {
        "date": "2026-03-27",
        "hour": "19:00",
        "sales": 405.5,
        "orders": 21,
        "rows": 88
      },
      {
        "date": "2026-03-27",
        "hour": "20:00",
        "sales": 200.0,
        "orders": 13,
        "rows": 40
      },
      {
        "date": "2026-03-27",
        "hour": "21:00",
        "sales": 26.5,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-03-27",
        "hour": "22:00",
        "sales": 37.5,
        "orders": 2,
        "rows": 16
      },
      {
        "date": "2026-03-28",
        "hour": "08:00",
        "sales": 44.5,
        "orders": 3,
        "rows": 11
      },
      {
        "date": "2026-03-28",
        "hour": "09:00",
        "sales": 171.5,
        "orders": 10,
        "rows": 43
      },
      {
        "date": "2026-03-28",
        "hour": "10:00",
        "sales": 184.5,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-03-28",
        "hour": "11:00",
        "sales": 291.5,
        "orders": 17,
        "rows": 67
      },
      {
        "date": "2026-03-28",
        "hour": "12:00",
        "sales": 303.5,
        "orders": 15,
        "rows": 62
      },
      {
        "date": "2026-03-28",
        "hour": "13:00",
        "sales": 366.0,
        "orders": 24,
        "rows": 78
      },
      {
        "date": "2026-03-28",
        "hour": "14:00",
        "sales": 309.5,
        "orders": 19,
        "rows": 62
      },
      {
        "date": "2026-03-28",
        "hour": "15:00",
        "sales": 417.5,
        "orders": 22,
        "rows": 85
      },
      {
        "date": "2026-03-28",
        "hour": "16:00",
        "sales": 282.5,
        "orders": 18,
        "rows": 59
      },
      {
        "date": "2026-03-28",
        "hour": "17:00",
        "sales": 286.0,
        "orders": 15,
        "rows": 55
      },
      {
        "date": "2026-03-28",
        "hour": "18:00",
        "sales": 226.5,
        "orders": 16,
        "rows": 52
      },
      {
        "date": "2026-03-28",
        "hour": "19:00",
        "sales": 227.5,
        "orders": 15,
        "rows": 42
      },
      {
        "date": "2026-03-28",
        "hour": "20:00",
        "sales": 209.5,
        "orders": 11,
        "rows": 51
      },
      {
        "date": "2026-03-28",
        "hour": "21:00",
        "sales": 231.5,
        "orders": 18,
        "rows": 71
      },
      {
        "date": "2026-03-28",
        "hour": "22:00",
        "sales": 17.0,
        "orders": 4,
        "rows": 5
      },
      {
        "date": "2026-03-29",
        "hour": "09:00",
        "sales": 115.0,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-03-29",
        "hour": "10:00",
        "sales": 240.5,
        "orders": 14,
        "rows": 53
      },
      {
        "date": "2026-03-29",
        "hour": "11:00",
        "sales": 272.0,
        "orders": 13,
        "rows": 56
      },
      {
        "date": "2026-03-29",
        "hour": "12:00",
        "sales": 383.0,
        "orders": 22,
        "rows": 81
      },
      {
        "date": "2026-03-29",
        "hour": "13:00",
        "sales": 382.0,
        "orders": 19,
        "rows": 69
      },
      {
        "date": "2026-03-29",
        "hour": "14:00",
        "sales": 373.5,
        "orders": 24,
        "rows": 74
      },
      {
        "date": "2026-03-29",
        "hour": "15:00",
        "sales": 347.5,
        "orders": 26,
        "rows": 82
      },
      {
        "date": "2026-03-29",
        "hour": "16:00",
        "sales": 312.0,
        "orders": 16,
        "rows": 64
      },
      {
        "date": "2026-03-29",
        "hour": "17:00",
        "sales": 271.0,
        "orders": 14,
        "rows": 54
      },
      {
        "date": "2026-03-29",
        "hour": "18:00",
        "sales": 76.0,
        "orders": 3,
        "rows": 15
      },
      {
        "date": "2026-03-29",
        "hour": "19:00",
        "sales": 177.5,
        "orders": 11,
        "rows": 36
      },
      {
        "date": "2026-03-29",
        "hour": "20:00",
        "sales": 52.0,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-03-29",
        "hour": "21:00",
        "sales": 3.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-30",
        "hour": "09:00",
        "sales": 69.0,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-03-30",
        "hour": "10:00",
        "sales": 131.5,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-03-30",
        "hour": "11:00",
        "sales": 27.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-03-30",
        "hour": "12:00",
        "sales": 117.5,
        "orders": 9,
        "rows": 29
      },
      {
        "date": "2026-03-30",
        "hour": "13:00",
        "sales": 118.0,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-03-30",
        "hour": "14:00",
        "sales": 82.0,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-03-30",
        "hour": "15:00",
        "sales": 180.0,
        "orders": 13,
        "rows": 34
      },
      {
        "date": "2026-03-30",
        "hour": "16:00",
        "sales": 143.5,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-03-30",
        "hour": "17:00",
        "sales": 89.5,
        "orders": 3,
        "rows": 18
      },
      {
        "date": "2026-03-30",
        "hour": "18:00",
        "sales": 170.0,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-03-30",
        "hour": "19:00",
        "sales": 82.0,
        "orders": 4,
        "rows": 17
      },
      {
        "date": "2026-03-30",
        "hour": "20:00",
        "sales": 68.0,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-03-30",
        "hour": "21:00",
        "sales": 21.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-03-31",
        "hour": "09:00",
        "sales": 60.0,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-03-31",
        "hour": "10:00",
        "sales": 113.5,
        "orders": 7,
        "rows": 32
      },
      {
        "date": "2026-03-31",
        "hour": "11:00",
        "sales": 152.0,
        "orders": 8,
        "rows": 32
      },
      {
        "date": "2026-03-31",
        "hour": "12:00",
        "sales": 151.0,
        "orders": 8,
        "rows": 33
      },
      {
        "date": "2026-03-31",
        "hour": "13:00",
        "sales": 121.5,
        "orders": 9,
        "rows": 24
      },
      {
        "date": "2026-03-31",
        "hour": "14:00",
        "sales": 73.5,
        "orders": 7,
        "rows": 17
      },
      {
        "date": "2026-03-31",
        "hour": "15:00",
        "sales": 117.5,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-03-31",
        "hour": "16:00",
        "sales": 193.5,
        "orders": 9,
        "rows": 37
      },
      {
        "date": "2026-03-31",
        "hour": "17:00",
        "sales": 268.0,
        "orders": 13,
        "rows": 51
      },
      {
        "date": "2026-03-31",
        "hour": "18:00",
        "sales": 119.5,
        "orders": 8,
        "rows": 24
      },
      {
        "date": "2026-03-31",
        "hour": "19:00",
        "sales": 146.5,
        "orders": 10,
        "rows": 27
      },
      {
        "date": "2026-03-31",
        "hour": "20:00",
        "sales": 36.5,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-04-01",
        "hour": "08:00",
        "sales": 5.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-01",
        "hour": "09:00",
        "sales": 136.0,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-04-01",
        "hour": "10:00",
        "sales": 16.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-04-01",
        "hour": "11:00",
        "sales": 48.0,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-04-01",
        "hour": "12:00",
        "sales": 233.5,
        "orders": 9,
        "rows": 45
      },
      {
        "date": "2026-04-01",
        "hour": "13:00",
        "sales": 213.0,
        "orders": 10,
        "rows": 41
      },
      {
        "date": "2026-04-01",
        "hour": "14:00",
        "sales": 164.0,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-04-01",
        "hour": "15:00",
        "sales": 66.5,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-04-01",
        "hour": "16:00",
        "sales": 170.0,
        "orders": 9,
        "rows": 38
      },
      {
        "date": "2026-04-01",
        "hour": "17:00",
        "sales": 237.5,
        "orders": 15,
        "rows": 51
      },
      {
        "date": "2026-04-01",
        "hour": "18:00",
        "sales": 100.0,
        "orders": 5,
        "rows": 22
      },
      {
        "date": "2026-04-01",
        "hour": "19:00",
        "sales": 135.5,
        "orders": 5,
        "rows": 33
      },
      {
        "date": "2026-04-01",
        "hour": "20:00",
        "sales": 152.5,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-04-01",
        "hour": "21:00",
        "sales": 10.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-02",
        "hour": "08:00",
        "sales": 13.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-02",
        "hour": "09:00",
        "sales": 194.5,
        "orders": 13,
        "rows": 58
      },
      {
        "date": "2026-04-02",
        "hour": "10:00",
        "sales": 181.5,
        "orders": 11,
        "rows": 35
      },
      {
        "date": "2026-04-02",
        "hour": "11:00",
        "sales": 149.5,
        "orders": 7,
        "rows": 29
      },
      {
        "date": "2026-04-02",
        "hour": "12:00",
        "sales": 186.5,
        "orders": 10,
        "rows": 38
      },
      {
        "date": "2026-04-02",
        "hour": "13:00",
        "sales": 143.5,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-04-02",
        "hour": "14:00",
        "sales": 186.5,
        "orders": 8,
        "rows": 40
      },
      {
        "date": "2026-04-02",
        "hour": "15:00",
        "sales": 367.0,
        "orders": 18,
        "rows": 74
      },
      {
        "date": "2026-04-02",
        "hour": "16:00",
        "sales": 279.5,
        "orders": 13,
        "rows": 58
      },
      {
        "date": "2026-04-02",
        "hour": "17:00",
        "sales": 143.0,
        "orders": 8,
        "rows": 31
      },
      {
        "date": "2026-04-02",
        "hour": "18:00",
        "sales": 195.5,
        "orders": 13,
        "rows": 43
      },
      {
        "date": "2026-04-02",
        "hour": "19:00",
        "sales": 80.0,
        "orders": 8,
        "rows": 19
      },
      {
        "date": "2026-04-02",
        "hour": "20:00",
        "sales": 80.0,
        "orders": 8,
        "rows": 19
      },
      {
        "date": "2026-04-02",
        "hour": "21:00",
        "sales": 25.5,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-04-03",
        "hour": "09:00",
        "sales": 61.25,
        "orders": 4,
        "rows": 18
      },
      {
        "date": "2026-04-03",
        "hour": "10:00",
        "sales": 141.85,
        "orders": 8,
        "rows": 37
      },
      {
        "date": "2026-04-03",
        "hour": "11:00",
        "sales": 159.2,
        "orders": 8,
        "rows": 39
      },
      {
        "date": "2026-04-03",
        "hour": "12:00",
        "sales": 226.91,
        "orders": 10,
        "rows": 51
      },
      {
        "date": "2026-04-03",
        "hour": "13:00",
        "sales": 304.7,
        "orders": 12,
        "rows": 67
      },
      {
        "date": "2026-04-03",
        "hour": "14:00",
        "sales": 301.45,
        "orders": 14,
        "rows": 63
      },
      {
        "date": "2026-04-03",
        "hour": "15:00",
        "sales": 339.5,
        "orders": 15,
        "rows": 68
      },
      {
        "date": "2026-04-03",
        "hour": "16:00",
        "sales": 399.5,
        "orders": 22,
        "rows": 92
      },
      {
        "date": "2026-04-03",
        "hour": "17:00",
        "sales": 206.75,
        "orders": 9,
        "rows": 46
      },
      {
        "date": "2026-04-03",
        "hour": "18:00",
        "sales": 190.85,
        "orders": 9,
        "rows": 44
      },
      {
        "date": "2026-04-03",
        "hour": "19:00",
        "sales": 440.66,
        "orders": 28,
        "rows": 112
      },
      {
        "date": "2026-04-03",
        "hour": "20:00",
        "sales": 95.15,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-04-03",
        "hour": "21:00",
        "sales": 4.95,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-04",
        "hour": "08:00",
        "sales": 25.1,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-04-04",
        "hour": "09:00",
        "sales": 130.01,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-04-04",
        "hour": "10:00",
        "sales": 326.71,
        "orders": 13,
        "rows": 86
      },
      {
        "date": "2026-04-04",
        "hour": "11:00",
        "sales": 501.85,
        "orders": 18,
        "rows": 109
      },
      {
        "date": "2026-04-04",
        "hour": "12:00",
        "sales": 262.05,
        "orders": 14,
        "rows": 69
      },
      {
        "date": "2026-04-04",
        "hour": "13:00",
        "sales": 452.45,
        "orders": 21,
        "rows": 101
      },
      {
        "date": "2026-04-04",
        "hour": "14:00",
        "sales": 573.9,
        "orders": 25,
        "rows": 121
      },
      {
        "date": "2026-04-04",
        "hour": "15:00",
        "sales": 395.1,
        "orders": 19,
        "rows": 89
      },
      {
        "date": "2026-04-04",
        "hour": "16:00",
        "sales": 539.61,
        "orders": 24,
        "rows": 118
      },
      {
        "date": "2026-04-04",
        "hour": "17:00",
        "sales": 377.75,
        "orders": 20,
        "rows": 90
      },
      {
        "date": "2026-04-04",
        "hour": "18:00",
        "sales": 279.65,
        "orders": 10,
        "rows": 63
      },
      {
        "date": "2026-04-04",
        "hour": "19:00",
        "sales": 246.45,
        "orders": 16,
        "rows": 60
      },
      {
        "date": "2026-04-04",
        "hour": "20:00",
        "sales": 224.75,
        "orders": 13,
        "rows": 59
      },
      {
        "date": "2026-04-04",
        "hour": "21:00",
        "sales": 34.3,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-04-04",
        "hour": "22:00",
        "sales": 48.55,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-04-05",
        "hour": "08:00",
        "sales": 80.3,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-04-05",
        "hour": "09:00",
        "sales": 170.35,
        "orders": 8,
        "rows": 37
      },
      {
        "date": "2026-04-05",
        "hour": "10:00",
        "sales": 360.3,
        "orders": 11,
        "rows": 74
      },
      {
        "date": "2026-04-05",
        "hour": "11:00",
        "sales": 592.8,
        "orders": 21,
        "rows": 125
      },
      {
        "date": "2026-04-05",
        "hour": "12:00",
        "sales": 500.56,
        "orders": 19,
        "rows": 111
      },
      {
        "date": "2026-04-05",
        "hour": "13:00",
        "sales": 600.15,
        "orders": 20,
        "rows": 122
      },
      {
        "date": "2026-04-05",
        "hour": "14:00",
        "sales": 386.86,
        "orders": 20,
        "rows": 104
      },
      {
        "date": "2026-04-05",
        "hour": "15:00",
        "sales": 467.6,
        "orders": 21,
        "rows": 87
      },
      {
        "date": "2026-04-05",
        "hour": "16:00",
        "sales": 303.1,
        "orders": 14,
        "rows": 68
      },
      {
        "date": "2026-04-05",
        "hour": "17:00",
        "sales": 7.15,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-06",
        "hour": "08:00",
        "sales": 74.35,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-04-06",
        "hour": "09:00",
        "sales": 118.25,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-04-06",
        "hour": "10:00",
        "sales": 312.35,
        "orders": 11,
        "rows": 65
      },
      {
        "date": "2026-04-06",
        "hour": "11:00",
        "sales": 376.25,
        "orders": 18,
        "rows": 94
      },
      {
        "date": "2026-04-06",
        "hour": "12:00",
        "sales": 202.45,
        "orders": 11,
        "rows": 54
      },
      {
        "date": "2026-04-06",
        "hour": "13:00",
        "sales": 251.85,
        "orders": 13,
        "rows": 59
      },
      {
        "date": "2026-04-06",
        "hour": "14:00",
        "sales": 342.95,
        "orders": 14,
        "rows": 74
      },
      {
        "date": "2026-04-06",
        "hour": "15:00",
        "sales": 152.95,
        "orders": 8,
        "rows": 33
      },
      {
        "date": "2026-04-06",
        "hour": "16:00",
        "sales": 170.35,
        "orders": 10,
        "rows": 44
      },
      {
        "date": "2026-04-07",
        "hour": "08:00",
        "sales": 37.0,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-04-07",
        "hour": "09:00",
        "sales": 13.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-07",
        "hour": "10:00",
        "sales": 13.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-04-07",
        "hour": "11:00",
        "sales": 31.0,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-04-07",
        "hour": "12:00",
        "sales": 20.0,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-04-07",
        "hour": "13:00",
        "sales": 45.0,
        "orders": 3,
        "rows": 11
      },
      {
        "date": "2026-04-07",
        "hour": "14:00",
        "sales": 73.5,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-04-07",
        "hour": "15:00",
        "sales": 57.5,
        "orders": 2,
        "rows": 11
      },
      {
        "date": "2026-04-07",
        "hour": "16:00",
        "sales": 63.0,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-04-07",
        "hour": "17:00",
        "sales": 79.5,
        "orders": 4,
        "rows": 17
      },
      {
        "date": "2026-04-07",
        "hour": "18:00",
        "sales": 116.5,
        "orders": 5,
        "rows": 23
      },
      {
        "date": "2026-04-07",
        "hour": "19:00",
        "sales": 101.0,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-04-07",
        "hour": "20:00",
        "sales": 43.5,
        "orders": 6,
        "rows": 13
      },
      {
        "date": "2026-04-07",
        "hour": "21:00",
        "sales": 13.0,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-04-08",
        "hour": "08:00",
        "sales": 27.0,
        "orders": 1,
        "rows": 7
      },
      {
        "date": "2026-04-08",
        "hour": "09:00",
        "sales": 68.0,
        "orders": 5,
        "rows": 23
      },
      {
        "date": "2026-04-08",
        "hour": "10:00",
        "sales": 72.0,
        "orders": 5,
        "rows": 20
      },
      {
        "date": "2026-04-08",
        "hour": "11:00",
        "sales": 63.5,
        "orders": 8,
        "rows": 19
      },
      {
        "date": "2026-04-08",
        "hour": "12:00",
        "sales": 104.0,
        "orders": 6,
        "rows": 24
      },
      {
        "date": "2026-04-08",
        "hour": "13:00",
        "sales": 110.0,
        "orders": 6,
        "rows": 28
      },
      {
        "date": "2026-04-08",
        "hour": "14:00",
        "sales": 172.0,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-04-08",
        "hour": "15:00",
        "sales": 299.5,
        "orders": 16,
        "rows": 59
      },
      {
        "date": "2026-04-08",
        "hour": "16:00",
        "sales": 153.0,
        "orders": 6,
        "rows": 30
      },
      {
        "date": "2026-04-08",
        "hour": "17:00",
        "sales": 165.5,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-04-08",
        "hour": "18:00",
        "sales": 192.5,
        "orders": 8,
        "rows": 41
      },
      {
        "date": "2026-04-08",
        "hour": "19:00",
        "sales": 106.0,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-04-08",
        "hour": "20:00",
        "sales": 20.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-08",
        "hour": "21:00",
        "sales": 3.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-04-09",
        "hour": "08:00",
        "sales": 24.0,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-04-09",
        "hour": "09:00",
        "sales": 111.5,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-04-09",
        "hour": "10:00",
        "sales": 310.0,
        "orders": 15,
        "rows": 74
      },
      {
        "date": "2026-04-09",
        "hour": "11:00",
        "sales": 237.0,
        "orders": 16,
        "rows": 55
      },
      {
        "date": "2026-04-09",
        "hour": "12:00",
        "sales": 167.0,
        "orders": 8,
        "rows": 32
      },
      {
        "date": "2026-04-09",
        "hour": "13:00",
        "sales": 204.0,
        "orders": 12,
        "rows": 42
      },
      {
        "date": "2026-04-09",
        "hour": "14:00",
        "sales": 167.5,
        "orders": 10,
        "rows": 36
      },
      {
        "date": "2026-04-09",
        "hour": "15:00",
        "sales": 199.5,
        "orders": 10,
        "rows": 39
      },
      {
        "date": "2026-04-09",
        "hour": "16:00",
        "sales": 192.5,
        "orders": 8,
        "rows": 33
      },
      {
        "date": "2026-04-09",
        "hour": "17:00",
        "sales": 78.0,
        "orders": 6,
        "rows": 18
      },
      {
        "date": "2026-04-09",
        "hour": "18:00",
        "sales": 120.5,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-04-09",
        "hour": "19:00",
        "sales": 149.0,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-04-09",
        "hour": "20:00",
        "sales": 76.0,
        "orders": 2,
        "rows": 17
      },
      {
        "date": "2026-04-09",
        "hour": "21:00",
        "sales": 24.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-04-10",
        "hour": "09:00",
        "sales": 61.5,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-04-10",
        "hour": "10:00",
        "sales": 375.0,
        "orders": 21,
        "rows": 87
      },
      {
        "date": "2026-04-10",
        "hour": "11:00",
        "sales": 184.5,
        "orders": 11,
        "rows": 38
      },
      {
        "date": "2026-04-10",
        "hour": "12:00",
        "sales": 231.0,
        "orders": 13,
        "rows": 54
      },
      {
        "date": "2026-04-10",
        "hour": "13:00",
        "sales": 258.0,
        "orders": 13,
        "rows": 55
      },
      {
        "date": "2026-04-10",
        "hour": "14:00",
        "sales": 188.0,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-04-10",
        "hour": "15:00",
        "sales": 157.5,
        "orders": 11,
        "rows": 35
      },
      {
        "date": "2026-04-10",
        "hour": "16:00",
        "sales": 162.0,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-04-10",
        "hour": "17:00",
        "sales": 196.5,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-04-10",
        "hour": "18:00",
        "sales": 242.5,
        "orders": 15,
        "rows": 52
      },
      {
        "date": "2026-04-10",
        "hour": "19:00",
        "sales": 58.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-04-10",
        "hour": "20:00",
        "sales": 66.0,
        "orders": 7,
        "rows": 16
      },
      {
        "date": "2026-04-10",
        "hour": "21:00",
        "sales": 74.5,
        "orders": 5,
        "rows": 20
      },
      {
        "date": "2026-04-10",
        "hour": "22:00",
        "sales": 25.0,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-04-11",
        "hour": "08:00",
        "sales": 18.5,
        "orders": 4,
        "rows": 5
      },
      {
        "date": "2026-04-11",
        "hour": "09:00",
        "sales": 10.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-11",
        "hour": "10:00",
        "sales": 142.5,
        "orders": 13,
        "rows": 29
      },
      {
        "date": "2026-04-11",
        "hour": "11:00",
        "sales": 333.5,
        "orders": 17,
        "rows": 71
      },
      {
        "date": "2026-04-11",
        "hour": "12:00",
        "sales": 249.0,
        "orders": 17,
        "rows": 49
      },
      {
        "date": "2026-04-11",
        "hour": "13:00",
        "sales": 374.5,
        "orders": 14,
        "rows": 81
      },
      {
        "date": "2026-04-11",
        "hour": "14:00",
        "sales": 457.0,
        "orders": 24,
        "rows": 92
      },
      {
        "date": "2026-04-11",
        "hour": "15:00",
        "sales": 360.0,
        "orders": 18,
        "rows": 75
      },
      {
        "date": "2026-04-11",
        "hour": "16:00",
        "sales": 449.0,
        "orders": 21,
        "rows": 90
      },
      {
        "date": "2026-04-11",
        "hour": "17:00",
        "sales": 297.5,
        "orders": 15,
        "rows": 60
      },
      {
        "date": "2026-04-11",
        "hour": "18:00",
        "sales": 183.0,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-04-11",
        "hour": "19:00",
        "sales": 337.0,
        "orders": 19,
        "rows": 75
      },
      {
        "date": "2026-04-11",
        "hour": "20:00",
        "sales": 156.0,
        "orders": 10,
        "rows": 36
      },
      {
        "date": "2026-04-11",
        "hour": "21:00",
        "sales": 29.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-11",
        "hour": "22:00",
        "sales": 36.0,
        "orders": 2,
        "rows": 11
      },
      {
        "date": "2026-04-12",
        "hour": "08:00",
        "sales": 43.5,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-04-12",
        "hour": "09:00",
        "sales": 23.5,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-04-12",
        "hour": "10:00",
        "sales": 279.5,
        "orders": 18,
        "rows": 57
      },
      {
        "date": "2026-04-12",
        "hour": "11:00",
        "sales": 269.0,
        "orders": 16,
        "rows": 59
      },
      {
        "date": "2026-04-12",
        "hour": "12:00",
        "sales": 219.0,
        "orders": 15,
        "rows": 43
      },
      {
        "date": "2026-04-12",
        "hour": "13:00",
        "sales": 540.0,
        "orders": 19,
        "rows": 109
      },
      {
        "date": "2026-04-12",
        "hour": "14:00",
        "sales": 433.5,
        "orders": 22,
        "rows": 94
      },
      {
        "date": "2026-04-12",
        "hour": "15:00",
        "sales": 407.5,
        "orders": 24,
        "rows": 82
      },
      {
        "date": "2026-04-12",
        "hour": "16:00",
        "sales": 262.0,
        "orders": 19,
        "rows": 56
      },
      {
        "date": "2026-04-12",
        "hour": "17:00",
        "sales": 295.5,
        "orders": 12,
        "rows": 65
      },
      {
        "date": "2026-04-12",
        "hour": "18:00",
        "sales": 130.5,
        "orders": 5,
        "rows": 25
      },
      {
        "date": "2026-04-12",
        "hour": "19:00",
        "sales": 122.5,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-04-12",
        "hour": "20:00",
        "sales": 62.0,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-04-12",
        "hour": "21:00",
        "sales": 76.0,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-04-13",
        "hour": "09:00",
        "sales": 8.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-13",
        "hour": "10:00",
        "sales": 125.5,
        "orders": 8,
        "rows": 33
      },
      {
        "date": "2026-04-13",
        "hour": "11:00",
        "sales": 133.5,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-04-13",
        "hour": "12:00",
        "sales": 81.5,
        "orders": 4,
        "rows": 17
      },
      {
        "date": "2026-04-13",
        "hour": "13:00",
        "sales": 69.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-04-13",
        "hour": "14:00",
        "sales": 121.0,
        "orders": 12,
        "rows": 27
      },
      {
        "date": "2026-04-13",
        "hour": "15:00",
        "sales": 121.5,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-04-13",
        "hour": "16:00",
        "sales": 124.5,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-04-13",
        "hour": "17:00",
        "sales": 129.0,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-04-13",
        "hour": "18:00",
        "sales": 54.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-04-13",
        "hour": "19:00",
        "sales": 85.0,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-04-13",
        "hour": "21:00",
        "sales": 18.0,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-14",
        "hour": "08:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-14",
        "hour": "09:00",
        "sales": 66.0,
        "orders": 3,
        "rows": 19
      },
      {
        "date": "2026-04-14",
        "hour": "10:00",
        "sales": 101.5,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-04-14",
        "hour": "11:00",
        "sales": 64.5,
        "orders": 4,
        "rows": 15
      },
      {
        "date": "2026-04-14",
        "hour": "12:00",
        "sales": 135.5,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-04-14",
        "hour": "13:00",
        "sales": 58.0,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-04-14",
        "hour": "14:00",
        "sales": 103.0,
        "orders": 7,
        "rows": 21
      },
      {
        "date": "2026-04-14",
        "hour": "15:00",
        "sales": 258.0,
        "orders": 14,
        "rows": 53
      },
      {
        "date": "2026-04-14",
        "hour": "16:00",
        "sales": 96.5,
        "orders": 10,
        "rows": 21
      },
      {
        "date": "2026-04-14",
        "hour": "17:00",
        "sales": 70.0,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-04-14",
        "hour": "18:00",
        "sales": 75.0,
        "orders": 4,
        "rows": 17
      },
      {
        "date": "2026-04-14",
        "hour": "19:00",
        "sales": 203.0,
        "orders": 13,
        "rows": 46
      },
      {
        "date": "2026-04-14",
        "hour": "20:00",
        "sales": 54.0,
        "orders": 6,
        "rows": 12
      },
      {
        "date": "2026-04-14",
        "hour": "21:00",
        "sales": 34.5,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-04-15",
        "hour": "08:00",
        "sales": 69.5,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-04-15",
        "hour": "09:00",
        "sales": 116.0,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-04-15",
        "hour": "10:00",
        "sales": 108.0,
        "orders": 8,
        "rows": 21
      },
      {
        "date": "2026-04-15",
        "hour": "11:00",
        "sales": 160.5,
        "orders": 6,
        "rows": 36
      },
      {
        "date": "2026-04-15",
        "hour": "12:00",
        "sales": 106.0,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-04-15",
        "hour": "13:00",
        "sales": 292.0,
        "orders": 14,
        "rows": 58
      },
      {
        "date": "2026-04-15",
        "hour": "14:00",
        "sales": 83.0,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-04-15",
        "hour": "15:00",
        "sales": 207.5,
        "orders": 14,
        "rows": 50
      },
      {
        "date": "2026-04-15",
        "hour": "16:00",
        "sales": 216.0,
        "orders": 10,
        "rows": 41
      },
      {
        "date": "2026-04-15",
        "hour": "17:00",
        "sales": 153.0,
        "orders": 11,
        "rows": 32
      },
      {
        "date": "2026-04-15",
        "hour": "18:00",
        "sales": 149.0,
        "orders": 6,
        "rows": 30
      },
      {
        "date": "2026-04-15",
        "hour": "19:00",
        "sales": 169.0,
        "orders": 13,
        "rows": 40
      },
      {
        "date": "2026-04-15",
        "hour": "20:00",
        "sales": 121.5,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-04-15",
        "hour": "21:00",
        "sales": 27.0,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-04-16",
        "hour": "08:00",
        "sales": 59.0,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-04-16",
        "hour": "09:00",
        "sales": 111.5,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-04-16",
        "hour": "10:00",
        "sales": 204.0,
        "orders": 14,
        "rows": 43
      },
      {
        "date": "2026-04-16",
        "hour": "11:00",
        "sales": 155.0,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-04-16",
        "hour": "12:00",
        "sales": 238.0,
        "orders": 12,
        "rows": 51
      },
      {
        "date": "2026-04-16",
        "hour": "13:00",
        "sales": 134.5,
        "orders": 11,
        "rows": 29
      },
      {
        "date": "2026-04-16",
        "hour": "14:00",
        "sales": 235.5,
        "orders": 16,
        "rows": 51
      },
      {
        "date": "2026-04-16",
        "hour": "15:00",
        "sales": 140.0,
        "orders": 12,
        "rows": 27
      },
      {
        "date": "2026-04-16",
        "hour": "16:00",
        "sales": 376.0,
        "orders": 18,
        "rows": 75
      },
      {
        "date": "2026-04-16",
        "hour": "17:00",
        "sales": 124.0,
        "orders": 6,
        "rows": 28
      },
      {
        "date": "2026-04-16",
        "hour": "18:00",
        "sales": 73.5,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-04-16",
        "hour": "19:00",
        "sales": 305.5,
        "orders": 14,
        "rows": 61
      },
      {
        "date": "2026-04-16",
        "hour": "20:00",
        "sales": 183.5,
        "orders": 11,
        "rows": 37
      },
      {
        "date": "2026-04-16",
        "hour": "21:00",
        "sales": 40.0,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-04-17",
        "hour": "08:00",
        "sales": 41.5,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-04-17",
        "hour": "09:00",
        "sales": 70.0,
        "orders": 3,
        "rows": 19
      },
      {
        "date": "2026-04-17",
        "hour": "10:00",
        "sales": 266.5,
        "orders": 15,
        "rows": 63
      },
      {
        "date": "2026-04-17",
        "hour": "11:00",
        "sales": 215.0,
        "orders": 14,
        "rows": 48
      },
      {
        "date": "2026-04-17",
        "hour": "12:00",
        "sales": 243.0,
        "orders": 12,
        "rows": 48
      },
      {
        "date": "2026-04-17",
        "hour": "13:00",
        "sales": 151.5,
        "orders": 11,
        "rows": 29
      },
      {
        "date": "2026-04-17",
        "hour": "14:00",
        "sales": 248.0,
        "orders": 11,
        "rows": 50
      },
      {
        "date": "2026-04-17",
        "hour": "15:00",
        "sales": 182.0,
        "orders": 10,
        "rows": 36
      },
      {
        "date": "2026-04-17",
        "hour": "16:00",
        "sales": 408.5,
        "orders": 19,
        "rows": 78
      },
      {
        "date": "2026-04-17",
        "hour": "17:00",
        "sales": 117.5,
        "orders": 11,
        "rows": 27
      },
      {
        "date": "2026-04-17",
        "hour": "18:00",
        "sales": 212.0,
        "orders": 16,
        "rows": 45
      },
      {
        "date": "2026-04-17",
        "hour": "19:00",
        "sales": 199.5,
        "orders": 14,
        "rows": 43
      },
      {
        "date": "2026-04-17",
        "hour": "20:00",
        "sales": 258.5,
        "orders": 15,
        "rows": 58
      },
      {
        "date": "2026-04-17",
        "hour": "21:00",
        "sales": 185.0,
        "orders": 11,
        "rows": 51
      },
      {
        "date": "2026-04-17",
        "hour": "22:00",
        "sales": 8.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-18",
        "hour": "08:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-18",
        "hour": "09:00",
        "sales": 191.0,
        "orders": 15,
        "rows": 53
      },
      {
        "date": "2026-04-18",
        "hour": "10:00",
        "sales": 285.5,
        "orders": 18,
        "rows": 58
      },
      {
        "date": "2026-04-18",
        "hour": "11:00",
        "sales": 369.5,
        "orders": 20,
        "rows": 77
      },
      {
        "date": "2026-04-18",
        "hour": "12:00",
        "sales": 328.5,
        "orders": 19,
        "rows": 71
      },
      {
        "date": "2026-04-18",
        "hour": "13:00",
        "sales": 199.0,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-04-18",
        "hour": "14:00",
        "sales": 314.5,
        "orders": 24,
        "rows": 64
      },
      {
        "date": "2026-04-18",
        "hour": "15:00",
        "sales": 491.5,
        "orders": 24,
        "rows": 100
      },
      {
        "date": "2026-04-18",
        "hour": "16:00",
        "sales": 321.5,
        "orders": 17,
        "rows": 68
      },
      {
        "date": "2026-04-18",
        "hour": "17:00",
        "sales": 465.5,
        "orders": 24,
        "rows": 96
      },
      {
        "date": "2026-04-18",
        "hour": "18:00",
        "sales": 290.5,
        "orders": 17,
        "rows": 61
      },
      {
        "date": "2026-04-18",
        "hour": "19:00",
        "sales": 272.0,
        "orders": 16,
        "rows": 57
      },
      {
        "date": "2026-04-18",
        "hour": "20:00",
        "sales": 219.5,
        "orders": 19,
        "rows": 48
      },
      {
        "date": "2026-04-18",
        "hour": "21:00",
        "sales": 47.0,
        "orders": 3,
        "rows": 11
      },
      {
        "date": "2026-04-18",
        "hour": "22:00",
        "sales": 7.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-19",
        "hour": "09:00",
        "sales": 149.0,
        "orders": 11,
        "rows": 44
      },
      {
        "date": "2026-04-19",
        "hour": "10:00",
        "sales": 201.0,
        "orders": 11,
        "rows": 44
      },
      {
        "date": "2026-04-19",
        "hour": "11:00",
        "sales": 131.5,
        "orders": 5,
        "rows": 31
      },
      {
        "date": "2026-04-19",
        "hour": "12:00",
        "sales": 258.0,
        "orders": 19,
        "rows": 59
      },
      {
        "date": "2026-04-19",
        "hour": "13:00",
        "sales": 172.5,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-04-19",
        "hour": "14:00",
        "sales": 430.0,
        "orders": 19,
        "rows": 85
      },
      {
        "date": "2026-04-19",
        "hour": "15:00",
        "sales": 416.0,
        "orders": 23,
        "rows": 77
      },
      {
        "date": "2026-04-19",
        "hour": "16:00",
        "sales": 68.5,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-04-19",
        "hour": "17:00",
        "sales": 204.0,
        "orders": 10,
        "rows": 44
      },
      {
        "date": "2026-04-19",
        "hour": "18:00",
        "sales": 216.0,
        "orders": 11,
        "rows": 45
      },
      {
        "date": "2026-04-19",
        "hour": "19:00",
        "sales": 143.0,
        "orders": 9,
        "rows": 29
      },
      {
        "date": "2026-04-19",
        "hour": "20:00",
        "sales": 105.5,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-04-19",
        "hour": "21:00",
        "sales": 29.0,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-20",
        "hour": "08:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-20",
        "hour": "09:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-20",
        "hour": "10:00",
        "sales": 88.0,
        "orders": 6,
        "rows": 25
      },
      {
        "date": "2026-04-20",
        "hour": "11:00",
        "sales": 228.0,
        "orders": 12,
        "rows": 50
      },
      {
        "date": "2026-04-20",
        "hour": "12:00",
        "sales": 163.0,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-04-20",
        "hour": "13:00",
        "sales": 222.0,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-04-20",
        "hour": "14:00",
        "sales": 154.5,
        "orders": 13,
        "rows": 29
      },
      {
        "date": "2026-04-20",
        "hour": "15:00",
        "sales": 205.0,
        "orders": 12,
        "rows": 44
      },
      {
        "date": "2026-04-20",
        "hour": "16:00",
        "sales": 177.0,
        "orders": 10,
        "rows": 36
      },
      {
        "date": "2026-04-20",
        "hour": "17:00",
        "sales": 145.0,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-04-20",
        "hour": "18:00",
        "sales": 130.0,
        "orders": 10,
        "rows": 27
      },
      {
        "date": "2026-04-20",
        "hour": "19:00",
        "sales": 104.0,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-04-20",
        "hour": "20:00",
        "sales": 16.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-21",
        "hour": "08:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-21",
        "hour": "09:00",
        "sales": 22.5,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-04-21",
        "hour": "10:00",
        "sales": 111.0,
        "orders": 10,
        "rows": 26
      },
      {
        "date": "2026-04-21",
        "hour": "11:00",
        "sales": 252.5,
        "orders": 19,
        "rows": 50
      },
      {
        "date": "2026-04-21",
        "hour": "12:00",
        "sales": 271.5,
        "orders": 17,
        "rows": 57
      },
      {
        "date": "2026-04-21",
        "hour": "13:00",
        "sales": 71.0,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-04-21",
        "hour": "14:00",
        "sales": 209.5,
        "orders": 16,
        "rows": 46
      },
      {
        "date": "2026-04-21",
        "hour": "15:00",
        "sales": 211.0,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-04-21",
        "hour": "16:00",
        "sales": 50.0,
        "orders": 6,
        "rows": 10
      },
      {
        "date": "2026-04-21",
        "hour": "17:00",
        "sales": 180.5,
        "orders": 9,
        "rows": 36
      },
      {
        "date": "2026-04-21",
        "hour": "18:00",
        "sales": 119.5,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-04-21",
        "hour": "19:00",
        "sales": 147.5,
        "orders": 9,
        "rows": 31
      },
      {
        "date": "2026-04-21",
        "hour": "20:00",
        "sales": 11.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-21",
        "hour": "21:00",
        "sales": 13.0,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-22",
        "hour": "08:00",
        "sales": 68.0,
        "orders": 3,
        "rows": 15
      },
      {
        "date": "2026-04-22",
        "hour": "09:00",
        "sales": 39.0,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-04-22",
        "hour": "10:00",
        "sales": 20.0,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-04-22",
        "hour": "11:00",
        "sales": 57.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-04-22",
        "hour": "12:00",
        "sales": 144.0,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-04-22",
        "hour": "13:00",
        "sales": 81.0,
        "orders": 8,
        "rows": 21
      },
      {
        "date": "2026-04-22",
        "hour": "14:00",
        "sales": 255.0,
        "orders": 18,
        "rows": 53
      },
      {
        "date": "2026-04-22",
        "hour": "15:00",
        "sales": 212.5,
        "orders": 11,
        "rows": 43
      },
      {
        "date": "2026-04-22",
        "hour": "16:00",
        "sales": 107.0,
        "orders": 8,
        "rows": 24
      },
      {
        "date": "2026-04-22",
        "hour": "17:00",
        "sales": 85.5,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-04-22",
        "hour": "18:00",
        "sales": 73.5,
        "orders": 7,
        "rows": 15
      },
      {
        "date": "2026-04-22",
        "hour": "19:00",
        "sales": 125.0,
        "orders": 9,
        "rows": 24
      },
      {
        "date": "2026-04-22",
        "hour": "20:00",
        "sales": 25.5,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-04-23",
        "hour": "08:00",
        "sales": 29.5,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-04-23",
        "hour": "09:00",
        "sales": 91.0,
        "orders": 11,
        "rows": 35
      },
      {
        "date": "2026-04-23",
        "hour": "10:00",
        "sales": 116.0,
        "orders": 6,
        "rows": 31
      },
      {
        "date": "2026-04-23",
        "hour": "11:00",
        "sales": 144.0,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-04-23",
        "hour": "12:00",
        "sales": 161.5,
        "orders": 12,
        "rows": 37
      },
      {
        "date": "2026-04-23",
        "hour": "13:00",
        "sales": 228.5,
        "orders": 11,
        "rows": 43
      },
      {
        "date": "2026-04-23",
        "hour": "14:00",
        "sales": 229.5,
        "orders": 14,
        "rows": 53
      },
      {
        "date": "2026-04-23",
        "hour": "15:00",
        "sales": 140.0,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-04-23",
        "hour": "16:00",
        "sales": 119.0,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-04-23",
        "hour": "17:00",
        "sales": 173.5,
        "orders": 13,
        "rows": 35
      },
      {
        "date": "2026-04-23",
        "hour": "18:00",
        "sales": 73.0,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-04-23",
        "hour": "19:00",
        "sales": 157.5,
        "orders": 9,
        "rows": 33
      },
      {
        "date": "2026-04-23",
        "hour": "20:00",
        "sales": 229.0,
        "orders": 12,
        "rows": 47
      },
      {
        "date": "2026-04-24",
        "hour": "08:00",
        "sales": 64.5,
        "orders": 4,
        "rows": 23
      },
      {
        "date": "2026-04-24",
        "hour": "09:00",
        "sales": 98.5,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-04-24",
        "hour": "10:00",
        "sales": 160.0,
        "orders": 8,
        "rows": 36
      },
      {
        "date": "2026-04-24",
        "hour": "11:00",
        "sales": 297.0,
        "orders": 17,
        "rows": 58
      },
      {
        "date": "2026-04-24",
        "hour": "12:00",
        "sales": 121.0,
        "orders": 8,
        "rows": 24
      },
      {
        "date": "2026-04-24",
        "hour": "13:00",
        "sales": 132.0,
        "orders": 10,
        "rows": 29
      },
      {
        "date": "2026-04-24",
        "hour": "14:00",
        "sales": 246.5,
        "orders": 12,
        "rows": 55
      },
      {
        "date": "2026-04-24",
        "hour": "15:00",
        "sales": 317.5,
        "orders": 17,
        "rows": 63
      },
      {
        "date": "2026-04-24",
        "hour": "16:00",
        "sales": 409.5,
        "orders": 27,
        "rows": 79
      },
      {
        "date": "2026-04-24",
        "hour": "17:00",
        "sales": 200.5,
        "orders": 11,
        "rows": 47
      },
      {
        "date": "2026-04-24",
        "hour": "18:00",
        "sales": 155.5,
        "orders": 13,
        "rows": 34
      },
      {
        "date": "2026-04-24",
        "hour": "19:00",
        "sales": 144.5,
        "orders": 11,
        "rows": 35
      },
      {
        "date": "2026-04-24",
        "hour": "20:00",
        "sales": 91.5,
        "orders": 12,
        "rows": 24
      },
      {
        "date": "2026-04-24",
        "hour": "21:00",
        "sales": 32.5,
        "orders": 5,
        "rows": 9
      },
      {
        "date": "2026-04-25",
        "hour": "08:00",
        "sales": 31.0,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-04-25",
        "hour": "09:00",
        "sales": 92.75,
        "orders": 6,
        "rows": 28
      },
      {
        "date": "2026-04-25",
        "hour": "10:00",
        "sales": 114.65,
        "orders": 6,
        "rows": 25
      },
      {
        "date": "2026-04-25",
        "hour": "11:00",
        "sales": 404.8,
        "orders": 12,
        "rows": 86
      },
      {
        "date": "2026-04-25",
        "hour": "12:00",
        "sales": 372.7,
        "orders": 14,
        "rows": 80
      },
      {
        "date": "2026-04-25",
        "hour": "13:00",
        "sales": 326.0,
        "orders": 14,
        "rows": 65
      },
      {
        "date": "2026-04-25",
        "hour": "14:00",
        "sales": 221.31,
        "orders": 11,
        "rows": 51
      },
      {
        "date": "2026-04-25",
        "hour": "15:00",
        "sales": 348.27,
        "orders": 15,
        "rows": 80
      },
      {
        "date": "2026-04-25",
        "hour": "16:00",
        "sales": 223.5,
        "orders": 14,
        "rows": 56
      },
      {
        "date": "2026-04-25",
        "hour": "17:00",
        "sales": 397.05,
        "orders": 20,
        "rows": 88
      },
      {
        "date": "2026-04-25",
        "hour": "18:00",
        "sales": 268.75,
        "orders": 13,
        "rows": 61
      },
      {
        "date": "2026-04-25",
        "hour": "19:00",
        "sales": 292.5,
        "orders": 13,
        "rows": 63
      },
      {
        "date": "2026-04-25",
        "hour": "20:00",
        "sales": 226.0,
        "orders": 12,
        "rows": 55
      },
      {
        "date": "2026-04-25",
        "hour": "21:00",
        "sales": 95.7,
        "orders": 5,
        "rows": 22
      },
      {
        "date": "2026-04-26",
        "hour": "07:00",
        "sales": 8.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-04-26",
        "hour": "08:00",
        "sales": 19.0,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-04-26",
        "hour": "09:00",
        "sales": 163.0,
        "orders": 8,
        "rows": 32
      },
      {
        "date": "2026-04-26",
        "hour": "10:00",
        "sales": 208.5,
        "orders": 10,
        "rows": 52
      },
      {
        "date": "2026-04-26",
        "hour": "11:00",
        "sales": 287.0,
        "orders": 12,
        "rows": 57
      },
      {
        "date": "2026-04-26",
        "hour": "12:00",
        "sales": 288.5,
        "orders": 15,
        "rows": 64
      },
      {
        "date": "2026-04-26",
        "hour": "13:00",
        "sales": 389.0,
        "orders": 26,
        "rows": 84
      },
      {
        "date": "2026-04-26",
        "hour": "14:00",
        "sales": 382.0,
        "orders": 17,
        "rows": 71
      },
      {
        "date": "2026-04-26",
        "hour": "15:00",
        "sales": 320.5,
        "orders": 19,
        "rows": 64
      },
      {
        "date": "2026-04-26",
        "hour": "16:00",
        "sales": 174.5,
        "orders": 11,
        "rows": 37
      },
      {
        "date": "2026-04-26",
        "hour": "17:00",
        "sales": 278.0,
        "orders": 17,
        "rows": 61
      },
      {
        "date": "2026-04-26",
        "hour": "18:00",
        "sales": 377.0,
        "orders": 19,
        "rows": 82
      },
      {
        "date": "2026-04-26",
        "hour": "19:00",
        "sales": 214.5,
        "orders": 19,
        "rows": 53
      },
      {
        "date": "2026-04-26",
        "hour": "20:00",
        "sales": 23.0,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-04-27",
        "hour": "08:00",
        "sales": 25.95,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-04-27",
        "hour": "09:00",
        "sales": 167.35,
        "orders": 12,
        "rows": 47
      },
      {
        "date": "2026-04-27",
        "hour": "10:00",
        "sales": 268.41,
        "orders": 13,
        "rows": 57
      },
      {
        "date": "2026-04-27",
        "hour": "11:00",
        "sales": 381.05,
        "orders": 15,
        "rows": 86
      },
      {
        "date": "2026-04-27",
        "hour": "12:00",
        "sales": 300.95,
        "orders": 16,
        "rows": 74
      },
      {
        "date": "2026-04-27",
        "hour": "13:00",
        "sales": 446.05,
        "orders": 18,
        "rows": 103
      },
      {
        "date": "2026-04-27",
        "hour": "14:00",
        "sales": 432.9,
        "orders": 20,
        "rows": 89
      },
      {
        "date": "2026-04-27",
        "hour": "15:00",
        "sales": 369.35,
        "orders": 24,
        "rows": 95
      },
      {
        "date": "2026-04-27",
        "hour": "16:00",
        "sales": 281.95,
        "orders": 14,
        "rows": 63
      },
      {
        "date": "2026-04-27",
        "hour": "17:00",
        "sales": 308.55,
        "orders": 13,
        "rows": 68
      },
      {
        "date": "2026-04-27",
        "hour": "18:00",
        "sales": 136.9,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-04-27",
        "hour": "19:00",
        "sales": 112.55,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-04-27",
        "hour": "20:00",
        "sales": 104.2,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-04-28",
        "hour": "08:00",
        "sales": 34.5,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-04-28",
        "hour": "09:00",
        "sales": 109.0,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-04-28",
        "hour": "10:00",
        "sales": 123.5,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-04-28",
        "hour": "11:00",
        "sales": 98.0,
        "orders": 8,
        "rows": 24
      },
      {
        "date": "2026-04-28",
        "hour": "12:00",
        "sales": 14.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-28",
        "hour": "13:00",
        "sales": 124.5,
        "orders": 9,
        "rows": 25
      },
      {
        "date": "2026-04-28",
        "hour": "14:00",
        "sales": 99.0,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-04-28",
        "hour": "15:00",
        "sales": 300.5,
        "orders": 21,
        "rows": 71
      },
      {
        "date": "2026-04-28",
        "hour": "16:00",
        "sales": 114.0,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-04-28",
        "hour": "17:00",
        "sales": 106.0,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-04-28",
        "hour": "18:00",
        "sales": 52.0,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-04-28",
        "hour": "19:00",
        "sales": 165.5,
        "orders": 8,
        "rows": 34
      },
      {
        "date": "2026-04-28",
        "hour": "20:00",
        "sales": 67.0,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-04-29",
        "hour": "08:00",
        "sales": 12.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-04-29",
        "hour": "09:00",
        "sales": 110.5,
        "orders": 6,
        "rows": 29
      },
      {
        "date": "2026-04-29",
        "hour": "10:00",
        "sales": 102.5,
        "orders": 6,
        "rows": 26
      },
      {
        "date": "2026-04-29",
        "hour": "11:00",
        "sales": 99.5,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-04-29",
        "hour": "12:00",
        "sales": 137.0,
        "orders": 9,
        "rows": 31
      },
      {
        "date": "2026-04-29",
        "hour": "13:00",
        "sales": 34.0,
        "orders": 2,
        "rows": 10
      },
      {
        "date": "2026-04-29",
        "hour": "14:00",
        "sales": 203.0,
        "orders": 11,
        "rows": 43
      },
      {
        "date": "2026-04-29",
        "hour": "15:00",
        "sales": 248.5,
        "orders": 12,
        "rows": 43
      },
      {
        "date": "2026-04-29",
        "hour": "16:00",
        "sales": 194.5,
        "orders": 10,
        "rows": 41
      },
      {
        "date": "2026-04-29",
        "hour": "17:00",
        "sales": 37.5,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-04-29",
        "hour": "18:00",
        "sales": 246.5,
        "orders": 12,
        "rows": 50
      },
      {
        "date": "2026-04-29",
        "hour": "19:00",
        "sales": 233.5,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-04-29",
        "hour": "20:00",
        "sales": 89.0,
        "orders": 4,
        "rows": 17
      },
      {
        "date": "2026-04-29",
        "hour": "21:00",
        "sales": 22.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-30",
        "hour": "08:00",
        "sales": 23.5,
        "orders": 3,
        "rows": 4
      },
      {
        "date": "2026-04-30",
        "hour": "09:00",
        "sales": 46.0,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-04-30",
        "hour": "10:00",
        "sales": 144.0,
        "orders": 10,
        "rows": 34
      },
      {
        "date": "2026-04-30",
        "hour": "11:00",
        "sales": 79.0,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-04-30",
        "hour": "12:00",
        "sales": 114.0,
        "orders": 9,
        "rows": 18
      },
      {
        "date": "2026-04-30",
        "hour": "13:00",
        "sales": 250.5,
        "orders": 11,
        "rows": 54
      },
      {
        "date": "2026-04-30",
        "hour": "14:00",
        "sales": 311.5,
        "orders": 14,
        "rows": 63
      },
      {
        "date": "2026-04-30",
        "hour": "15:00",
        "sales": 154.5,
        "orders": 9,
        "rows": 40
      },
      {
        "date": "2026-04-30",
        "hour": "16:00",
        "sales": 115.5,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-04-30",
        "hour": "17:00",
        "sales": 178.0,
        "orders": 14,
        "rows": 35
      },
      {
        "date": "2026-04-30",
        "hour": "18:00",
        "sales": 198.5,
        "orders": 10,
        "rows": 40
      },
      {
        "date": "2026-04-30",
        "hour": "19:00",
        "sales": 67.5,
        "orders": 7,
        "rows": 14
      },
      {
        "date": "2026-04-30",
        "hour": "20:00",
        "sales": 132.5,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-04-30",
        "hour": "21:00",
        "sales": 35.0,
        "orders": 1,
        "rows": 7
      },
      {
        "date": "2026-05-01",
        "hour": "07:00",
        "sales": 8.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-05-01",
        "hour": "08:00",
        "sales": 39.5,
        "orders": 2,
        "rows": 11
      },
      {
        "date": "2026-05-01",
        "hour": "09:00",
        "sales": 143.0,
        "orders": 9,
        "rows": 43
      },
      {
        "date": "2026-05-01",
        "hour": "10:00",
        "sales": 67.5,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-05-01",
        "hour": "11:00",
        "sales": 250.5,
        "orders": 16,
        "rows": 57
      },
      {
        "date": "2026-05-01",
        "hour": "12:00",
        "sales": 148.5,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-05-01",
        "hour": "13:00",
        "sales": 201.0,
        "orders": 15,
        "rows": 45
      },
      {
        "date": "2026-05-01",
        "hour": "14:00",
        "sales": 157.0,
        "orders": 10,
        "rows": 32
      },
      {
        "date": "2026-05-01",
        "hour": "15:00",
        "sales": 317.0,
        "orders": 23,
        "rows": 73
      },
      {
        "date": "2026-05-01",
        "hour": "16:00",
        "sales": 320.5,
        "orders": 20,
        "rows": 68
      },
      {
        "date": "2026-05-01",
        "hour": "17:00",
        "sales": 220.5,
        "orders": 13,
        "rows": 52
      },
      {
        "date": "2026-05-01",
        "hour": "18:00",
        "sales": 147.5,
        "orders": 10,
        "rows": 29
      },
      {
        "date": "2026-05-01",
        "hour": "19:00",
        "sales": 75.5,
        "orders": 9,
        "rows": 18
      },
      {
        "date": "2026-05-01",
        "hour": "20:00",
        "sales": 250.5,
        "orders": 16,
        "rows": 54
      },
      {
        "date": "2026-05-01",
        "hour": "21:00",
        "sales": 123.0,
        "orders": 6,
        "rows": 27
      },
      {
        "date": "2026-05-01",
        "hour": "22:00",
        "sales": 22.5,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-02",
        "hour": "08:00",
        "sales": 51.5,
        "orders": 4,
        "rows": 15
      },
      {
        "date": "2026-05-02",
        "hour": "09:00",
        "sales": 122.5,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-05-02",
        "hour": "10:00",
        "sales": 296.5,
        "orders": 14,
        "rows": 60
      },
      {
        "date": "2026-05-02",
        "hour": "11:00",
        "sales": 321.5,
        "orders": 14,
        "rows": 70
      },
      {
        "date": "2026-05-02",
        "hour": "12:00",
        "sales": 347.0,
        "orders": 13,
        "rows": 70
      },
      {
        "date": "2026-05-02",
        "hour": "13:00",
        "sales": 350.5,
        "orders": 23,
        "rows": 63
      },
      {
        "date": "2026-05-02",
        "hour": "14:00",
        "sales": 281.5,
        "orders": 15,
        "rows": 63
      },
      {
        "date": "2026-05-02",
        "hour": "15:00",
        "sales": 313.5,
        "orders": 17,
        "rows": 67
      },
      {
        "date": "2026-05-02",
        "hour": "16:00",
        "sales": 259.0,
        "orders": 18,
        "rows": 53
      },
      {
        "date": "2026-05-02",
        "hour": "17:00",
        "sales": 345.5,
        "orders": 19,
        "rows": 78
      },
      {
        "date": "2026-05-02",
        "hour": "18:00",
        "sales": 214.0,
        "orders": 15,
        "rows": 48
      },
      {
        "date": "2026-05-02",
        "hour": "19:00",
        "sales": 317.0,
        "orders": 23,
        "rows": 71
      },
      {
        "date": "2026-05-02",
        "hour": "20:00",
        "sales": 222.5,
        "orders": 11,
        "rows": 50
      },
      {
        "date": "2026-05-02",
        "hour": "21:00",
        "sales": 142.0,
        "orders": 11,
        "rows": 36
      },
      {
        "date": "2026-05-02",
        "hour": "22:00",
        "sales": 17.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-03",
        "hour": "08:00",
        "sales": 34.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-05-03",
        "hour": "09:00",
        "sales": 63.5,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-05-03",
        "hour": "10:00",
        "sales": 283.0,
        "orders": 13,
        "rows": 67
      },
      {
        "date": "2026-05-03",
        "hour": "11:00",
        "sales": 306.0,
        "orders": 18,
        "rows": 69
      },
      {
        "date": "2026-05-03",
        "hour": "12:00",
        "sales": 366.5,
        "orders": 19,
        "rows": 70
      },
      {
        "date": "2026-05-03",
        "hour": "13:00",
        "sales": 439.5,
        "orders": 27,
        "rows": 88
      },
      {
        "date": "2026-05-03",
        "hour": "14:00",
        "sales": 367.5,
        "orders": 20,
        "rows": 73
      },
      {
        "date": "2026-05-03",
        "hour": "15:00",
        "sales": 435.0,
        "orders": 27,
        "rows": 91
      },
      {
        "date": "2026-05-03",
        "hour": "16:00",
        "sales": 276.0,
        "orders": 15,
        "rows": 58
      },
      {
        "date": "2026-05-03",
        "hour": "17:00",
        "sales": 297.0,
        "orders": 16,
        "rows": 68
      },
      {
        "date": "2026-05-03",
        "hour": "18:00",
        "sales": 235.5,
        "orders": 11,
        "rows": 49
      },
      {
        "date": "2026-05-03",
        "hour": "19:00",
        "sales": 90.0,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-05-03",
        "hour": "21:00",
        "sales": 26.5,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-05-04",
        "hour": "08:00",
        "sales": 9.0,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-05-04",
        "hour": "09:00",
        "sales": 26.0,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-05-04",
        "hour": "10:00",
        "sales": 55.5,
        "orders": 7,
        "rows": 17
      },
      {
        "date": "2026-05-04",
        "hour": "11:00",
        "sales": 103.5,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-05-04",
        "hour": "12:00",
        "sales": 49.5,
        "orders": 5,
        "rows": 9
      },
      {
        "date": "2026-05-04",
        "hour": "13:00",
        "sales": 138.5,
        "orders": 10,
        "rows": 27
      },
      {
        "date": "2026-05-04",
        "hour": "14:00",
        "sales": 133.5,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-05-04",
        "hour": "15:00",
        "sales": 140.0,
        "orders": 16,
        "rows": 30
      },
      {
        "date": "2026-05-04",
        "hour": "16:00",
        "sales": 174.0,
        "orders": 11,
        "rows": 37
      },
      {
        "date": "2026-05-04",
        "hour": "17:00",
        "sales": 38.5,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-05-04",
        "hour": "18:00",
        "sales": 197.5,
        "orders": 12,
        "rows": 39
      },
      {
        "date": "2026-05-04",
        "hour": "19:00",
        "sales": 42.5,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-05-04",
        "hour": "20:00",
        "sales": 80.0,
        "orders": 4,
        "rows": 16
      },
      {
        "date": "2026-05-04",
        "hour": "21:00",
        "sales": 34.5,
        "orders": 5,
        "rows": 8
      },
      {
        "date": "2026-05-05",
        "hour": "08:00",
        "sales": 38.5,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-05-05",
        "hour": "09:00",
        "sales": 59.0,
        "orders": 5,
        "rows": 20
      },
      {
        "date": "2026-05-05",
        "hour": "10:00",
        "sales": 127.0,
        "orders": 11,
        "rows": 28
      },
      {
        "date": "2026-05-05",
        "hour": "11:00",
        "sales": 82.0,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-05-05",
        "hour": "12:00",
        "sales": 152.0,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-05-05",
        "hour": "13:00",
        "sales": 166.0,
        "orders": 8,
        "rows": 42
      },
      {
        "date": "2026-05-05",
        "hour": "14:00",
        "sales": 62.0,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-05-05",
        "hour": "15:00",
        "sales": 114.5,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-05-05",
        "hour": "16:00",
        "sales": 229.0,
        "orders": 12,
        "rows": 49
      },
      {
        "date": "2026-05-05",
        "hour": "17:00",
        "sales": 184.5,
        "orders": 11,
        "rows": 42
      },
      {
        "date": "2026-05-05",
        "hour": "18:00",
        "sales": 116.5,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-05-05",
        "hour": "19:00",
        "sales": 193.5,
        "orders": 11,
        "rows": 50
      },
      {
        "date": "2026-05-05",
        "hour": "20:00",
        "sales": 64.0,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-05-05",
        "hour": "21:00",
        "sales": 20.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-06",
        "hour": "08:00",
        "sales": 15.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-05-06",
        "hour": "09:00",
        "sales": 104.5,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-05-06",
        "hour": "10:00",
        "sales": 111.0,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-05-06",
        "hour": "11:00",
        "sales": 182.0,
        "orders": 8,
        "rows": 40
      },
      {
        "date": "2026-05-06",
        "hour": "12:00",
        "sales": 154.0,
        "orders": 10,
        "rows": 32
      },
      {
        "date": "2026-05-06",
        "hour": "13:00",
        "sales": 146.5,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-05-06",
        "hour": "14:00",
        "sales": 129.0,
        "orders": 13,
        "rows": 27
      },
      {
        "date": "2026-05-06",
        "hour": "15:00",
        "sales": 149.0,
        "orders": 12,
        "rows": 31
      },
      {
        "date": "2026-05-06",
        "hour": "16:00",
        "sales": 270.5,
        "orders": 17,
        "rows": 54
      },
      {
        "date": "2026-05-06",
        "hour": "17:00",
        "sales": 233.0,
        "orders": 19,
        "rows": 45
      },
      {
        "date": "2026-05-06",
        "hour": "18:00",
        "sales": 125.0,
        "orders": 7,
        "rows": 28
      },
      {
        "date": "2026-05-06",
        "hour": "19:00",
        "sales": 110.5,
        "orders": 11,
        "rows": 23
      },
      {
        "date": "2026-05-06",
        "hour": "20:00",
        "sales": 81.0,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-05-06",
        "hour": "21:00",
        "sales": 33.5,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-05-07",
        "hour": "08:00",
        "sales": 24.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-05-07",
        "hour": "09:00",
        "sales": 93.5,
        "orders": 10,
        "rows": 26
      },
      {
        "date": "2026-05-07",
        "hour": "10:00",
        "sales": 52.5,
        "orders": 5,
        "rows": 18
      },
      {
        "date": "2026-05-07",
        "hour": "11:00",
        "sales": 147.0,
        "orders": 9,
        "rows": 38
      },
      {
        "date": "2026-05-07",
        "hour": "12:00",
        "sales": 209.5,
        "orders": 15,
        "rows": 50
      },
      {
        "date": "2026-05-07",
        "hour": "13:00",
        "sales": 138.5,
        "orders": 12,
        "rows": 32
      },
      {
        "date": "2026-05-07",
        "hour": "14:00",
        "sales": 124.0,
        "orders": 7,
        "rows": 29
      },
      {
        "date": "2026-05-07",
        "hour": "15:00",
        "sales": 240.5,
        "orders": 20,
        "rows": 53
      },
      {
        "date": "2026-05-07",
        "hour": "16:00",
        "sales": 183.0,
        "orders": 12,
        "rows": 39
      },
      {
        "date": "2026-05-07",
        "hour": "17:00",
        "sales": 291.0,
        "orders": 16,
        "rows": 60
      },
      {
        "date": "2026-05-07",
        "hour": "18:00",
        "sales": 286.0,
        "orders": 16,
        "rows": 59
      },
      {
        "date": "2026-05-07",
        "hour": "19:00",
        "sales": 138.5,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-05-07",
        "hour": "20:00",
        "sales": 98.5,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-05-07",
        "hour": "21:00",
        "sales": 20.0,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-08",
        "hour": "08:00",
        "sales": 61.5,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-05-08",
        "hour": "09:00",
        "sales": 89.0,
        "orders": 14,
        "rows": 27
      },
      {
        "date": "2026-05-08",
        "hour": "10:00",
        "sales": 104.5,
        "orders": 8,
        "rows": 21
      },
      {
        "date": "2026-05-08",
        "hour": "11:00",
        "sales": 165.0,
        "orders": 16,
        "rows": 40
      },
      {
        "date": "2026-05-08",
        "hour": "12:00",
        "sales": 258.0,
        "orders": 14,
        "rows": 54
      },
      {
        "date": "2026-05-08",
        "hour": "13:00",
        "sales": 125.0,
        "orders": 9,
        "rows": 26
      },
      {
        "date": "2026-05-08",
        "hour": "14:00",
        "sales": 340.5,
        "orders": 17,
        "rows": 68
      },
      {
        "date": "2026-05-08",
        "hour": "15:00",
        "sales": 236.5,
        "orders": 15,
        "rows": 53
      },
      {
        "date": "2026-05-08",
        "hour": "16:00",
        "sales": 240.0,
        "orders": 13,
        "rows": 51
      },
      {
        "date": "2026-05-08",
        "hour": "17:00",
        "sales": 256.5,
        "orders": 17,
        "rows": 59
      },
      {
        "date": "2026-05-08",
        "hour": "18:00",
        "sales": 177.5,
        "orders": 13,
        "rows": 40
      },
      {
        "date": "2026-05-08",
        "hour": "19:00",
        "sales": 276.5,
        "orders": 16,
        "rows": 60
      },
      {
        "date": "2026-05-08",
        "hour": "20:00",
        "sales": 378.0,
        "orders": 45,
        "rows": 86
      },
      {
        "date": "2026-05-08",
        "hour": "21:00",
        "sales": 125.0,
        "orders": 10,
        "rows": 29
      },
      {
        "date": "2026-05-09",
        "hour": "08:00",
        "sales": 38.0,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-05-09",
        "hour": "09:00",
        "sales": 214.5,
        "orders": 10,
        "rows": 49
      },
      {
        "date": "2026-05-09",
        "hour": "10:00",
        "sales": 342.0,
        "orders": 18,
        "rows": 80
      },
      {
        "date": "2026-05-09",
        "hour": "11:00",
        "sales": 230.0,
        "orders": 9,
        "rows": 46
      },
      {
        "date": "2026-05-09",
        "hour": "12:00",
        "sales": 478.0,
        "orders": 24,
        "rows": 100
      },
      {
        "date": "2026-05-09",
        "hour": "13:00",
        "sales": 530.0,
        "orders": 28,
        "rows": 110
      },
      {
        "date": "2026-05-09",
        "hour": "14:00",
        "sales": 328.0,
        "orders": 13,
        "rows": 59
      },
      {
        "date": "2026-05-09",
        "hour": "15:00",
        "sales": 517.0,
        "orders": 26,
        "rows": 109
      },
      {
        "date": "2026-05-09",
        "hour": "16:00",
        "sales": 536.0,
        "orders": 27,
        "rows": 111
      },
      {
        "date": "2026-05-09",
        "hour": "17:00",
        "sales": 398.5,
        "orders": 22,
        "rows": 87
      },
      {
        "date": "2026-05-09",
        "hour": "18:00",
        "sales": 266.0,
        "orders": 17,
        "rows": 56
      },
      {
        "date": "2026-05-09",
        "hour": "19:00",
        "sales": 168.5,
        "orders": 13,
        "rows": 41
      },
      {
        "date": "2026-05-09",
        "hour": "20:00",
        "sales": 241.5,
        "orders": 17,
        "rows": 59
      },
      {
        "date": "2026-05-09",
        "hour": "21:00",
        "sales": 49.0,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-05-10",
        "hour": "08:00",
        "sales": 101.0,
        "orders": 5,
        "rows": 32
      },
      {
        "date": "2026-05-10",
        "hour": "09:00",
        "sales": 559.0,
        "orders": 23,
        "rows": 129
      },
      {
        "date": "2026-05-10",
        "hour": "10:00",
        "sales": 476.0,
        "orders": 23,
        "rows": 110
      },
      {
        "date": "2026-05-10",
        "hour": "11:00",
        "sales": 491.5,
        "orders": 27,
        "rows": 106
      },
      {
        "date": "2026-05-10",
        "hour": "12:00",
        "sales": 513.0,
        "orders": 29,
        "rows": 107
      },
      {
        "date": "2026-05-10",
        "hour": "13:00",
        "sales": 680.5,
        "orders": 34,
        "rows": 139
      },
      {
        "date": "2026-05-10",
        "hour": "14:00",
        "sales": 652.0,
        "orders": 34,
        "rows": 133
      },
      {
        "date": "2026-05-10",
        "hour": "15:00",
        "sales": 453.5,
        "orders": 24,
        "rows": 93
      },
      {
        "date": "2026-05-10",
        "hour": "16:00",
        "sales": 278.5,
        "orders": 15,
        "rows": 58
      },
      {
        "date": "2026-05-10",
        "hour": "17:00",
        "sales": 224.0,
        "orders": 14,
        "rows": 47
      },
      {
        "date": "2026-05-10",
        "hour": "18:00",
        "sales": 184.5,
        "orders": 16,
        "rows": 41
      },
      {
        "date": "2026-05-10",
        "hour": "19:00",
        "sales": 168.0,
        "orders": 14,
        "rows": 32
      },
      {
        "date": "2026-05-10",
        "hour": "20:00",
        "sales": 144.0,
        "orders": 9,
        "rows": 36
      },
      {
        "date": "2026-05-11",
        "hour": "08:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-11",
        "hour": "09:00",
        "sales": 39.0,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-05-11",
        "hour": "10:00",
        "sales": 136.5,
        "orders": 8,
        "rows": 31
      },
      {
        "date": "2026-05-11",
        "hour": "11:00",
        "sales": 42.0,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-05-11",
        "hour": "12:00",
        "sales": 124.0,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-05-11",
        "hour": "13:00",
        "sales": 177.5,
        "orders": 11,
        "rows": 35
      },
      {
        "date": "2026-05-11",
        "hour": "14:00",
        "sales": 71.0,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-05-11",
        "hour": "15:00",
        "sales": 119.0,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-05-11",
        "hour": "16:00",
        "sales": 149.0,
        "orders": 10,
        "rows": 34
      },
      {
        "date": "2026-05-11",
        "hour": "17:00",
        "sales": 110.0,
        "orders": 8,
        "rows": 24
      },
      {
        "date": "2026-05-11",
        "hour": "18:00",
        "sales": 130.5,
        "orders": 9,
        "rows": 24
      },
      {
        "date": "2026-05-11",
        "hour": "19:00",
        "sales": 105.0,
        "orders": 4,
        "rows": 18
      },
      {
        "date": "2026-05-11",
        "hour": "20:00",
        "sales": 80.5,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-05-11",
        "hour": "21:00",
        "sales": 20.5,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-12",
        "hour": "08:00",
        "sales": 21.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-05-12",
        "hour": "09:00",
        "sales": 39.5,
        "orders": 5,
        "rows": 8
      },
      {
        "date": "2026-05-12",
        "hour": "10:00",
        "sales": 99.0,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-05-12",
        "hour": "11:00",
        "sales": 15.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-12",
        "hour": "12:00",
        "sales": 85.0,
        "orders": 9,
        "rows": 18
      },
      {
        "date": "2026-05-12",
        "hour": "13:00",
        "sales": 75.5,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-05-12",
        "hour": "14:00",
        "sales": 197.0,
        "orders": 12,
        "rows": 45
      },
      {
        "date": "2026-05-12",
        "hour": "15:00",
        "sales": 187.5,
        "orders": 16,
        "rows": 39
      },
      {
        "date": "2026-05-12",
        "hour": "16:00",
        "sales": 191.0,
        "orders": 11,
        "rows": 44
      },
      {
        "date": "2026-05-12",
        "hour": "17:00",
        "sales": 154.5,
        "orders": 11,
        "rows": 32
      },
      {
        "date": "2026-05-12",
        "hour": "18:00",
        "sales": 56.5,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-05-12",
        "hour": "19:00",
        "sales": 131.5,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-05-12",
        "hour": "20:00",
        "sales": 121.5,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-05-12",
        "hour": "21:00",
        "sales": 37.0,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-05-13",
        "hour": "10:00",
        "sales": 75.5,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-05-13",
        "hour": "11:00",
        "sales": 177.5,
        "orders": 12,
        "rows": 41
      },
      {
        "date": "2026-05-13",
        "hour": "12:00",
        "sales": 57.5,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-05-13",
        "hour": "13:00",
        "sales": 245.5,
        "orders": 10,
        "rows": 47
      },
      {
        "date": "2026-05-13",
        "hour": "14:00",
        "sales": 126.5,
        "orders": 11,
        "rows": 29
      },
      {
        "date": "2026-05-13",
        "hour": "15:00",
        "sales": 205.0,
        "orders": 13,
        "rows": 41
      },
      {
        "date": "2026-05-13",
        "hour": "16:00",
        "sales": 354.5,
        "orders": 19,
        "rows": 69
      },
      {
        "date": "2026-05-13",
        "hour": "17:00",
        "sales": 80.0,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-05-13",
        "hour": "18:00",
        "sales": 126.5,
        "orders": 6,
        "rows": 31
      },
      {
        "date": "2026-05-13",
        "hour": "19:00",
        "sales": 192.0,
        "orders": 12,
        "rows": 39
      },
      {
        "date": "2026-05-13",
        "hour": "20:00",
        "sales": 171.5,
        "orders": 7,
        "rows": 32
      },
      {
        "date": "2026-05-13",
        "hour": "21:00",
        "sales": 16.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-05-14",
        "hour": "09:00",
        "sales": 152.0,
        "orders": 15,
        "rows": 46
      },
      {
        "date": "2026-05-14",
        "hour": "10:00",
        "sales": 95.0,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-05-14",
        "hour": "11:00",
        "sales": 58.0,
        "orders": 7,
        "rows": 14
      },
      {
        "date": "2026-05-14",
        "hour": "12:00",
        "sales": 232.0,
        "orders": 13,
        "rows": 51
      },
      {
        "date": "2026-05-14",
        "hour": "13:00",
        "sales": 126.0,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-05-14",
        "hour": "14:00",
        "sales": 225.0,
        "orders": 11,
        "rows": 42
      },
      {
        "date": "2026-05-14",
        "hour": "15:00",
        "sales": 188.0,
        "orders": 9,
        "rows": 37
      },
      {
        "date": "2026-05-14",
        "hour": "16:00",
        "sales": 269.0,
        "orders": 13,
        "rows": 52
      },
      {
        "date": "2026-05-14",
        "hour": "17:00",
        "sales": 148.5,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-05-14",
        "hour": "18:00",
        "sales": 275.5,
        "orders": 16,
        "rows": 56
      },
      {
        "date": "2026-05-14",
        "hour": "19:00",
        "sales": 281.5,
        "orders": 14,
        "rows": 57
      },
      {
        "date": "2026-05-14",
        "hour": "20:00",
        "sales": 117.5,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-05-15",
        "hour": "09:00",
        "sales": 212.5,
        "orders": 11,
        "rows": 50
      },
      {
        "date": "2026-05-15",
        "hour": "10:00",
        "sales": 136.5,
        "orders": 8,
        "rows": 34
      },
      {
        "date": "2026-05-15",
        "hour": "11:00",
        "sales": 19.5,
        "orders": 3,
        "rows": 3
      },
      {
        "date": "2026-05-15",
        "hour": "12:00",
        "sales": 186.5,
        "orders": 10,
        "rows": 37
      },
      {
        "date": "2026-05-15",
        "hour": "13:00",
        "sales": 197.2,
        "orders": 10,
        "rows": 42
      },
      {
        "date": "2026-05-15",
        "hour": "14:00",
        "sales": 260.5,
        "orders": 16,
        "rows": 54
      },
      {
        "date": "2026-05-15",
        "hour": "15:00",
        "sales": 182.5,
        "orders": 19,
        "rows": 39
      },
      {
        "date": "2026-05-15",
        "hour": "16:00",
        "sales": 209.0,
        "orders": 11,
        "rows": 44
      },
      {
        "date": "2026-05-15",
        "hour": "17:00",
        "sales": 307.5,
        "orders": 19,
        "rows": 61
      },
      {
        "date": "2026-05-15",
        "hour": "18:00",
        "sales": 217.0,
        "orders": 13,
        "rows": 42
      },
      {
        "date": "2026-05-15",
        "hour": "19:00",
        "sales": 328.0,
        "orders": 23,
        "rows": 67
      },
      {
        "date": "2026-05-15",
        "hour": "20:00",
        "sales": 189.5,
        "orders": 9,
        "rows": 41
      },
      {
        "date": "2026-05-15",
        "hour": "21:00",
        "sales": 81.5,
        "orders": 8,
        "rows": 19
      },
      {
        "date": "2026-05-15",
        "hour": "22:00",
        "sales": 30.0,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-05-16",
        "hour": "09:00",
        "sales": 135.5,
        "orders": 10,
        "rows": 35
      },
      {
        "date": "2026-05-16",
        "hour": "10:00",
        "sales": 206.0,
        "orders": 13,
        "rows": 53
      },
      {
        "date": "2026-05-16",
        "hour": "11:00",
        "sales": 353.5,
        "orders": 18,
        "rows": 76
      },
      {
        "date": "2026-05-16",
        "hour": "12:00",
        "sales": 308.5,
        "orders": 22,
        "rows": 72
      },
      {
        "date": "2026-05-16",
        "hour": "13:00",
        "sales": 459.5,
        "orders": 26,
        "rows": 94
      },
      {
        "date": "2026-05-16",
        "hour": "14:00",
        "sales": 552.5,
        "orders": 22,
        "rows": 107
      },
      {
        "date": "2026-05-16",
        "hour": "15:00",
        "sales": 290.0,
        "orders": 16,
        "rows": 63
      },
      {
        "date": "2026-05-16",
        "hour": "16:00",
        "sales": 608.5,
        "orders": 29,
        "rows": 127
      },
      {
        "date": "2026-05-16",
        "hour": "17:00",
        "sales": 166.5,
        "orders": 13,
        "rows": 36
      },
      {
        "date": "2026-05-16",
        "hour": "18:00",
        "sales": 193.0,
        "orders": 13,
        "rows": 43
      },
      {
        "date": "2026-05-16",
        "hour": "19:00",
        "sales": 347.0,
        "orders": 21,
        "rows": 79
      },
      {
        "date": "2026-05-16",
        "hour": "20:00",
        "sales": 286.0,
        "orders": 19,
        "rows": 61
      },
      {
        "date": "2026-05-16",
        "hour": "21:00",
        "sales": 160.5,
        "orders": 10,
        "rows": 37
      },
      {
        "date": "2026-05-17",
        "hour": "09:00",
        "sales": 77.0,
        "orders": 8,
        "rows": 18
      },
      {
        "date": "2026-05-17",
        "hour": "10:00",
        "sales": 181.0,
        "orders": 14,
        "rows": 48
      },
      {
        "date": "2026-05-17",
        "hour": "11:00",
        "sales": 300.0,
        "orders": 15,
        "rows": 72
      },
      {
        "date": "2026-05-17",
        "hour": "12:00",
        "sales": 269.5,
        "orders": 15,
        "rows": 59
      },
      {
        "date": "2026-05-17",
        "hour": "13:00",
        "sales": 497.5,
        "orders": 26,
        "rows": 97
      },
      {
        "date": "2026-05-17",
        "hour": "14:00",
        "sales": 433.0,
        "orders": 22,
        "rows": 89
      },
      {
        "date": "2026-05-17",
        "hour": "15:00",
        "sales": 666.5,
        "orders": 37,
        "rows": 137
      },
      {
        "date": "2026-05-17",
        "hour": "16:00",
        "sales": 455.5,
        "orders": 29,
        "rows": 98
      },
      {
        "date": "2026-05-17",
        "hour": "17:00",
        "sales": 151.0,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-05-17",
        "hour": "18:00",
        "sales": 235.5,
        "orders": 18,
        "rows": 52
      },
      {
        "date": "2026-05-17",
        "hour": "19:00",
        "sales": 81.5,
        "orders": 6,
        "rows": 18
      },
      {
        "date": "2026-05-17",
        "hour": "20:00",
        "sales": 49.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-05-18",
        "hour": "09:00",
        "sales": 70.5,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-05-18",
        "hour": "10:00",
        "sales": 120.0,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-05-18",
        "hour": "11:00",
        "sales": 151.5,
        "orders": 7,
        "rows": 33
      },
      {
        "date": "2026-05-18",
        "hour": "12:00",
        "sales": 165.5,
        "orders": 13,
        "rows": 32
      },
      {
        "date": "2026-05-18",
        "hour": "13:00",
        "sales": 123.5,
        "orders": 12,
        "rows": 31
      },
      {
        "date": "2026-05-18",
        "hour": "14:00",
        "sales": 366.5,
        "orders": 17,
        "rows": 77
      },
      {
        "date": "2026-05-18",
        "hour": "15:00",
        "sales": 323.0,
        "orders": 23,
        "rows": 68
      },
      {
        "date": "2026-05-18",
        "hour": "16:00",
        "sales": 144.5,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-05-18",
        "hour": "17:00",
        "sales": 216.5,
        "orders": 14,
        "rows": 49
      },
      {
        "date": "2026-05-18",
        "hour": "18:00",
        "sales": 131.5,
        "orders": 9,
        "rows": 29
      },
      {
        "date": "2026-05-18",
        "hour": "19:00",
        "sales": 144.5,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-05-18",
        "hour": "20:00",
        "sales": 16.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-05-18",
        "hour": "21:00",
        "sales": 5.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-05-19",
        "hour": "09:00",
        "sales": 72.0,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-05-19",
        "hour": "10:00",
        "sales": 132.5,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-05-19",
        "hour": "11:00",
        "sales": 123.5,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-05-19",
        "hour": "12:00",
        "sales": 157.0,
        "orders": 9,
        "rows": 34
      },
      {
        "date": "2026-05-19",
        "hour": "13:00",
        "sales": 167.5,
        "orders": 10,
        "rows": 32
      },
      {
        "date": "2026-05-19",
        "hour": "14:00",
        "sales": 270.0,
        "orders": 17,
        "rows": 55
      },
      {
        "date": "2026-05-19",
        "hour": "15:00",
        "sales": 165.5,
        "orders": 15,
        "rows": 34
      },
      {
        "date": "2026-05-19",
        "hour": "16:00",
        "sales": 205.5,
        "orders": 13,
        "rows": 44
      },
      {
        "date": "2026-05-19",
        "hour": "17:00",
        "sales": 261.0,
        "orders": 15,
        "rows": 51
      },
      {
        "date": "2026-05-19",
        "hour": "18:00",
        "sales": 100.0,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-05-19",
        "hour": "19:00",
        "sales": 142.0,
        "orders": 10,
        "rows": 32
      },
      {
        "date": "2026-05-19",
        "hour": "20:00",
        "sales": 126.1,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-05-19",
        "hour": "21:00",
        "sales": 41.5,
        "orders": 2,
        "rows": 10
      },
      {
        "date": "2026-05-20",
        "hour": "09:00",
        "sales": 17.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-05-20",
        "hour": "10:00",
        "sales": 125.5,
        "orders": 9,
        "rows": 33
      },
      {
        "date": "2026-05-20",
        "hour": "11:00",
        "sales": 173.0,
        "orders": 9,
        "rows": 37
      },
      {
        "date": "2026-05-20",
        "hour": "12:00",
        "sales": 145.5,
        "orders": 7,
        "rows": 29
      },
      {
        "date": "2026-05-20",
        "hour": "13:00",
        "sales": 171.5,
        "orders": 11,
        "rows": 38
      },
      {
        "date": "2026-05-20",
        "hour": "14:00",
        "sales": 101.5,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-05-20",
        "hour": "15:00",
        "sales": 279.5,
        "orders": 13,
        "rows": 57
      },
      {
        "date": "2026-05-20",
        "hour": "16:00",
        "sales": 169.0,
        "orders": 12,
        "rows": 44
      },
      {
        "date": "2026-05-20",
        "hour": "17:00",
        "sales": 155.5,
        "orders": 9,
        "rows": 33
      },
      {
        "date": "2026-05-20",
        "hour": "18:00",
        "sales": 299.0,
        "orders": 14,
        "rows": 61
      },
      {
        "date": "2026-05-20",
        "hour": "19:00",
        "sales": 200.5,
        "orders": 9,
        "rows": 40
      },
      {
        "date": "2026-05-20",
        "hour": "20:00",
        "sales": 218.0,
        "orders": 16,
        "rows": 46
      },
      {
        "date": "2026-05-20",
        "hour": "21:00",
        "sales": 44.5,
        "orders": 2,
        "rows": 11
      },
      {
        "date": "2026-05-21",
        "hour": "09:00",
        "sales": 175.5,
        "orders": 14,
        "rows": 49
      },
      {
        "date": "2026-05-21",
        "hour": "10:00",
        "sales": 75.5,
        "orders": 6,
        "rows": 21
      },
      {
        "date": "2026-05-21",
        "hour": "11:00",
        "sales": 233.0,
        "orders": 6,
        "rows": 46
      },
      {
        "date": "2026-05-21",
        "hour": "12:00",
        "sales": 76.0,
        "orders": 6,
        "rows": 16
      },
      {
        "date": "2026-05-21",
        "hour": "13:00",
        "sales": 244.0,
        "orders": 14,
        "rows": 53
      },
      {
        "date": "2026-05-21",
        "hour": "14:00",
        "sales": 199.0,
        "orders": 11,
        "rows": 41
      },
      {
        "date": "2026-05-21",
        "hour": "15:00",
        "sales": 289.6,
        "orders": 20,
        "rows": 60
      },
      {
        "date": "2026-05-21",
        "hour": "16:00",
        "sales": 203.5,
        "orders": 10,
        "rows": 46
      },
      {
        "date": "2026-05-21",
        "hour": "17:00",
        "sales": 360.5,
        "orders": 18,
        "rows": 73
      },
      {
        "date": "2026-05-21",
        "hour": "18:00",
        "sales": 184.0,
        "orders": 13,
        "rows": 36
      },
      {
        "date": "2026-05-21",
        "hour": "19:00",
        "sales": 145.5,
        "orders": 10,
        "rows": 32
      },
      {
        "date": "2026-05-21",
        "hour": "20:00",
        "sales": 133.5,
        "orders": 11,
        "rows": 26
      },
      {
        "date": "2026-05-21",
        "hour": "21:00",
        "sales": 16.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-22",
        "hour": "09:00",
        "sales": 179.0,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-05-22",
        "hour": "10:00",
        "sales": 163.0,
        "orders": 12,
        "rows": 38
      },
      {
        "date": "2026-05-22",
        "hour": "11:00",
        "sales": 252.5,
        "orders": 12,
        "rows": 57
      },
      {
        "date": "2026-05-22",
        "hour": "12:00",
        "sales": 525.5,
        "orders": 25,
        "rows": 108
      },
      {
        "date": "2026-05-22",
        "hour": "13:00",
        "sales": 238.0,
        "orders": 17,
        "rows": 49
      },
      {
        "date": "2026-05-22",
        "hour": "14:00",
        "sales": 240.5,
        "orders": 14,
        "rows": 48
      },
      {
        "date": "2026-05-22",
        "hour": "15:00",
        "sales": 352.0,
        "orders": 29,
        "rows": 67
      },
      {
        "date": "2026-05-22",
        "hour": "16:00",
        "sales": 191.5,
        "orders": 10,
        "rows": 41
      },
      {
        "date": "2026-05-22",
        "hour": "17:00",
        "sales": 169.5,
        "orders": 13,
        "rows": 38
      },
      {
        "date": "2026-05-22",
        "hour": "18:00",
        "sales": 257.8,
        "orders": 15,
        "rows": 51
      },
      {
        "date": "2026-05-22",
        "hour": "19:00",
        "sales": 551.0,
        "orders": 27,
        "rows": 114
      },
      {
        "date": "2026-05-22",
        "hour": "20:00",
        "sales": 243.0,
        "orders": 11,
        "rows": 54
      },
      {
        "date": "2026-05-22",
        "hour": "21:00",
        "sales": 17.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-05-22",
        "hour": "22:00",
        "sales": 26.5,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-23",
        "hour": "09:00",
        "sales": 249.0,
        "orders": 15,
        "rows": 55
      },
      {
        "date": "2026-05-23",
        "hour": "10:00",
        "sales": 108.0,
        "orders": 7,
        "rows": 21
      },
      {
        "date": "2026-05-23",
        "hour": "11:00",
        "sales": 285.5,
        "orders": 13,
        "rows": 60
      },
      {
        "date": "2026-05-23",
        "hour": "12:00",
        "sales": 432.0,
        "orders": 15,
        "rows": 87
      },
      {
        "date": "2026-05-23",
        "hour": "13:00",
        "sales": 383.5,
        "orders": 18,
        "rows": 72
      },
      {
        "date": "2026-05-23",
        "hour": "14:00",
        "sales": 537.9,
        "orders": 24,
        "rows": 103
      },
      {
        "date": "2026-05-23",
        "hour": "15:00",
        "sales": 451.5,
        "orders": 21,
        "rows": 92
      },
      {
        "date": "2026-05-23",
        "hour": "16:00",
        "sales": 559.5,
        "orders": 27,
        "rows": 116
      },
      {
        "date": "2026-05-23",
        "hour": "17:00",
        "sales": 538.0,
        "orders": 22,
        "rows": 107
      },
      {
        "date": "2026-05-23",
        "hour": "18:00",
        "sales": 290.0,
        "orders": 16,
        "rows": 60
      },
      {
        "date": "2026-05-23",
        "hour": "19:00",
        "sales": 244.5,
        "orders": 12,
        "rows": 51
      },
      {
        "date": "2026-05-23",
        "hour": "20:00",
        "sales": 265.0,
        "orders": 18,
        "rows": 57
      },
      {
        "date": "2026-05-23",
        "hour": "21:00",
        "sales": 57.0,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-05-23",
        "hour": "22:00",
        "sales": 10.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-24",
        "hour": "09:00",
        "sales": 126.0,
        "orders": 10,
        "rows": 34
      },
      {
        "date": "2026-05-24",
        "hour": "10:00",
        "sales": 197.5,
        "orders": 10,
        "rows": 43
      },
      {
        "date": "2026-05-24",
        "hour": "11:00",
        "sales": 460.0,
        "orders": 23,
        "rows": 95
      },
      {
        "date": "2026-05-24",
        "hour": "12:00",
        "sales": 570.5,
        "orders": 25,
        "rows": 112
      },
      {
        "date": "2026-05-24",
        "hour": "13:00",
        "sales": 763.5,
        "orders": 39,
        "rows": 161
      },
      {
        "date": "2026-05-24",
        "hour": "14:00",
        "sales": 540.5,
        "orders": 33,
        "rows": 108
      },
      {
        "date": "2026-05-24",
        "hour": "15:00",
        "sales": 490.0,
        "orders": 28,
        "rows": 100
      },
      {
        "date": "2026-05-24",
        "hour": "16:00",
        "sales": 376.0,
        "orders": 15,
        "rows": 85
      },
      {
        "date": "2026-05-24",
        "hour": "17:00",
        "sales": 222.5,
        "orders": 13,
        "rows": 46
      },
      {
        "date": "2026-05-24",
        "hour": "18:00",
        "sales": 62.0,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-05-24",
        "hour": "19:00",
        "sales": 156.0,
        "orders": 10,
        "rows": 35
      },
      {
        "date": "2026-05-24",
        "hour": "20:00",
        "sales": 90.0,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-05-24",
        "hour": "21:00",
        "sales": 24.0,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-05-25",
        "hour": "09:00",
        "sales": 116.5,
        "orders": 7,
        "rows": 34
      },
      {
        "date": "2026-05-25",
        "hour": "10:00",
        "sales": 118.0,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-05-25",
        "hour": "11:00",
        "sales": 85.5,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-05-25",
        "hour": "12:00",
        "sales": 133.0,
        "orders": 6,
        "rows": 28
      },
      {
        "date": "2026-05-25",
        "hour": "13:00",
        "sales": 134.5,
        "orders": 7,
        "rows": 28
      },
      {
        "date": "2026-05-25",
        "hour": "14:00",
        "sales": 177.5,
        "orders": 13,
        "rows": 43
      },
      {
        "date": "2026-05-25",
        "hour": "15:00",
        "sales": 239.0,
        "orders": 10,
        "rows": 44
      },
      {
        "date": "2026-05-25",
        "hour": "16:00",
        "sales": 216.0,
        "orders": 11,
        "rows": 42
      },
      {
        "date": "2026-05-25",
        "hour": "17:00",
        "sales": 90.5,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-05-25",
        "hour": "18:00",
        "sales": 174.5,
        "orders": 9,
        "rows": 40
      },
      {
        "date": "2026-05-25",
        "hour": "19:00",
        "sales": 64.0,
        "orders": 6,
        "rows": 12
      },
      {
        "date": "2026-05-25",
        "hour": "20:00",
        "sales": 72.0,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-05-25",
        "hour": "21:00",
        "sales": 13.2,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-26",
        "hour": "08:00",
        "sales": 9.5,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-05-26",
        "hour": "09:00",
        "sales": 28.5,
        "orders": 3,
        "rows": 11
      },
      {
        "date": "2026-05-26",
        "hour": "10:00",
        "sales": 137.0,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-05-26",
        "hour": "11:00",
        "sales": 128.5,
        "orders": 9,
        "rows": 24
      },
      {
        "date": "2026-05-26",
        "hour": "12:00",
        "sales": 107.0,
        "orders": 7,
        "rows": 21
      },
      {
        "date": "2026-05-26",
        "hour": "13:00",
        "sales": 145.5,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-05-26",
        "hour": "14:00",
        "sales": 248.0,
        "orders": 15,
        "rows": 45
      },
      {
        "date": "2026-05-26",
        "hour": "15:00",
        "sales": 237.0,
        "orders": 14,
        "rows": 51
      },
      {
        "date": "2026-05-26",
        "hour": "16:00",
        "sales": 149.5,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-05-26",
        "hour": "17:00",
        "sales": 273.8,
        "orders": 11,
        "rows": 54
      },
      {
        "date": "2026-05-26",
        "hour": "18:00",
        "sales": 156.5,
        "orders": 8,
        "rows": 32
      },
      {
        "date": "2026-05-26",
        "hour": "19:00",
        "sales": 176.5,
        "orders": 12,
        "rows": 37
      },
      {
        "date": "2026-05-26",
        "hour": "20:00",
        "sales": 104.0,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-05-27",
        "hour": "09:00",
        "sales": 132.0,
        "orders": 6,
        "rows": 29
      },
      {
        "date": "2026-05-27",
        "hour": "10:00",
        "sales": 185.5,
        "orders": 7,
        "rows": 41
      },
      {
        "date": "2026-05-27",
        "hour": "11:00",
        "sales": 151.0,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-05-27",
        "hour": "12:00",
        "sales": 144.5,
        "orders": 12,
        "rows": 30
      },
      {
        "date": "2026-05-27",
        "hour": "13:00",
        "sales": 276.0,
        "orders": 15,
        "rows": 60
      },
      {
        "date": "2026-05-27",
        "hour": "14:00",
        "sales": 116.0,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-05-27",
        "hour": "15:00",
        "sales": 308.5,
        "orders": 20,
        "rows": 61
      },
      {
        "date": "2026-05-27",
        "hour": "16:00",
        "sales": 416.7,
        "orders": 21,
        "rows": 83
      },
      {
        "date": "2026-05-27",
        "hour": "17:00",
        "sales": 284.0,
        "orders": 13,
        "rows": 54
      },
      {
        "date": "2026-05-27",
        "hour": "18:00",
        "sales": 274.5,
        "orders": 14,
        "rows": 49
      },
      {
        "date": "2026-05-27",
        "hour": "19:00",
        "sales": 203.4,
        "orders": 11,
        "rows": 41
      },
      {
        "date": "2026-05-27",
        "hour": "20:00",
        "sales": 73.8,
        "orders": 4,
        "rows": 21
      },
      {
        "date": "2026-05-28",
        "hour": "09:00",
        "sales": 201.0,
        "orders": 14,
        "rows": 44
      },
      {
        "date": "2026-05-28",
        "hour": "10:00",
        "sales": 251.0,
        "orders": 13,
        "rows": 57
      },
      {
        "date": "2026-05-28",
        "hour": "11:00",
        "sales": 237.5,
        "orders": 15,
        "rows": 52
      },
      {
        "date": "2026-05-28",
        "hour": "12:00",
        "sales": 207.5,
        "orders": 12,
        "rows": 45
      },
      {
        "date": "2026-05-28",
        "hour": "13:00",
        "sales": 252.5,
        "orders": 14,
        "rows": 47
      },
      {
        "date": "2026-05-28",
        "hour": "14:00",
        "sales": 296.4,
        "orders": 19,
        "rows": 64
      },
      {
        "date": "2026-05-28",
        "hour": "15:00",
        "sales": 326.5,
        "orders": 20,
        "rows": 63
      },
      {
        "date": "2026-05-28",
        "hour": "16:00",
        "sales": 425.5,
        "orders": 21,
        "rows": 84
      },
      {
        "date": "2026-05-28",
        "hour": "17:00",
        "sales": 101.0,
        "orders": 8,
        "rows": 18
      },
      {
        "date": "2026-05-28",
        "hour": "18:00",
        "sales": 94.4,
        "orders": 7,
        "rows": 21
      },
      {
        "date": "2026-05-28",
        "hour": "19:00",
        "sales": 252.0,
        "orders": 14,
        "rows": 48
      },
      {
        "date": "2026-05-28",
        "hour": "20:00",
        "sales": 87.5,
        "orders": 5,
        "rows": 20
      },
      {
        "date": "2026-05-29",
        "hour": "09:00",
        "sales": 64.0,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-05-29",
        "hour": "10:00",
        "sales": 171.5,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-05-29",
        "hour": "11:00",
        "sales": 342.5,
        "orders": 16,
        "rows": 70
      },
      {
        "date": "2026-05-29",
        "hour": "12:00",
        "sales": 207.0,
        "orders": 12,
        "rows": 41
      },
      {
        "date": "2026-05-29",
        "hour": "13:00",
        "sales": 139.0,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-05-29",
        "hour": "17:00",
        "sales": 265.5,
        "orders": 12,
        "rows": 47
      },
      {
        "date": "2026-05-29",
        "hour": "18:00",
        "sales": 298.8,
        "orders": 18,
        "rows": 59
      },
      {
        "date": "2026-05-29",
        "hour": "19:00",
        "sales": 171.5,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-05-29",
        "hour": "20:00",
        "sales": 82.0,
        "orders": 6,
        "rows": 16
      },
      {
        "date": "2026-05-29",
        "hour": "21:00",
        "sales": 97.0,
        "orders": 8,
        "rows": 20
      },
      {
        "date": "2026-05-29",
        "hour": "22:00",
        "sales": 65.1,
        "orders": 3,
        "rows": 18
      },
      {
        "date": "2026-05-30",
        "hour": "07:00",
        "sales": 4.4,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-30",
        "hour": "09:00",
        "sales": 125.0,
        "orders": 7,
        "rows": 33
      },
      {
        "date": "2026-05-30",
        "hour": "10:00",
        "sales": 214.5,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-05-30",
        "hour": "11:00",
        "sales": 506.5,
        "orders": 27,
        "rows": 101
      },
      {
        "date": "2026-05-30",
        "hour": "12:00",
        "sales": 212.7,
        "orders": 12,
        "rows": 40
      },
      {
        "date": "2026-05-30",
        "hour": "13:00",
        "sales": 544.1,
        "orders": 32,
        "rows": 104
      },
      {
        "date": "2026-05-30",
        "hour": "14:00",
        "sales": 439.0,
        "orders": 16,
        "rows": 84
      },
      {
        "date": "2026-05-30",
        "hour": "15:00",
        "sales": 648.8,
        "orders": 34,
        "rows": 126
      },
      {
        "date": "2026-05-30",
        "hour": "16:00",
        "sales": 472.5,
        "orders": 27,
        "rows": 89
      },
      {
        "date": "2026-05-30",
        "hour": "17:00",
        "sales": 509.0,
        "orders": 23,
        "rows": 96
      },
      {
        "date": "2026-05-30",
        "hour": "18:00",
        "sales": 422.8,
        "orders": 22,
        "rows": 75
      },
      {
        "date": "2026-05-30",
        "hour": "19:00",
        "sales": 466.5,
        "orders": 26,
        "rows": 98
      },
      {
        "date": "2026-05-30",
        "hour": "20:00",
        "sales": 102.5,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-05-30",
        "hour": "21:00",
        "sales": 111.5,
        "orders": 8,
        "rows": 24
      },
      {
        "date": "2026-05-31",
        "hour": "08:00",
        "sales": 55.0,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-05-31",
        "hour": "09:00",
        "sales": 110.5,
        "orders": 5,
        "rows": 22
      },
      {
        "date": "2026-05-31",
        "hour": "10:00",
        "sales": 349.5,
        "orders": 18,
        "rows": 73
      },
      {
        "date": "2026-05-31",
        "hour": "11:00",
        "sales": 296.0,
        "orders": 14,
        "rows": 58
      },
      {
        "date": "2026-05-31",
        "hour": "12:00",
        "sales": 258.0,
        "orders": 13,
        "rows": 41
      },
      {
        "date": "2026-05-31",
        "hour": "13:00",
        "sales": 492.5,
        "orders": 27,
        "rows": 89
      },
      {
        "date": "2026-05-31",
        "hour": "14:00",
        "sales": 414.9,
        "orders": 21,
        "rows": 79
      },
      {
        "date": "2026-05-31",
        "hour": "15:00",
        "sales": 550.4,
        "orders": 29,
        "rows": 118
      },
      {
        "date": "2026-05-31",
        "hour": "16:00",
        "sales": 330.5,
        "orders": 18,
        "rows": 69
      },
      {
        "date": "2026-05-31",
        "hour": "17:00",
        "sales": 273.0,
        "orders": 17,
        "rows": 55
      },
      {
        "date": "2026-05-31",
        "hour": "18:00",
        "sales": 207.5,
        "orders": 15,
        "rows": 41
      },
      {
        "date": "2026-05-31",
        "hour": "19:00",
        "sales": 215.5,
        "orders": 16,
        "rows": 42
      },
      {
        "date": "2026-05-31",
        "hour": "20:00",
        "sales": 143.5,
        "orders": 6,
        "rows": 28
      },
      {
        "date": "2026-05-31",
        "hour": "21:00",
        "sales": 36.5,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-06-01",
        "hour": "09:00",
        "sales": 111.0,
        "orders": 4,
        "rows": 27
      },
      {
        "date": "2026-06-01",
        "hour": "10:00",
        "sales": 118.5,
        "orders": 5,
        "rows": 26
      },
      {
        "date": "2026-06-01",
        "hour": "11:00",
        "sales": 47.0,
        "orders": 2,
        "rows": 10
      },
      {
        "date": "2026-06-01",
        "hour": "12:00",
        "sales": 150.5,
        "orders": 7,
        "rows": 28
      },
      {
        "date": "2026-06-01",
        "hour": "13:00",
        "sales": 146.0,
        "orders": 6,
        "rows": 27
      },
      {
        "date": "2026-06-01",
        "hour": "14:00",
        "sales": 180.5,
        "orders": 11,
        "rows": 32
      },
      {
        "date": "2026-06-01",
        "hour": "15:00",
        "sales": 300.5,
        "orders": 21,
        "rows": 64
      },
      {
        "date": "2026-06-01",
        "hour": "16:00",
        "sales": 214.0,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-06-01",
        "hour": "17:00",
        "sales": 116.0,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-06-01",
        "hour": "18:00",
        "sales": 107.5,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-06-01",
        "hour": "19:00",
        "sales": 121.5,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-06-01",
        "hour": "20:00",
        "sales": 27.5,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-06-02",
        "hour": "09:00",
        "sales": 47.5,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-06-02",
        "hour": "10:00",
        "sales": 64.0,
        "orders": 6,
        "rows": 11
      },
      {
        "date": "2026-06-02",
        "hour": "11:00",
        "sales": 225.5,
        "orders": 14,
        "rows": 50
      },
      {
        "date": "2026-06-02",
        "hour": "12:00",
        "sales": 201.5,
        "orders": 9,
        "rows": 38
      },
      {
        "date": "2026-06-02",
        "hour": "13:00",
        "sales": 169.0,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-06-02",
        "hour": "14:00",
        "sales": 172.5,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-06-02",
        "hour": "15:00",
        "sales": 328.0,
        "orders": 27,
        "rows": 65
      },
      {
        "date": "2026-06-02",
        "hour": "16:00",
        "sales": 126.2,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-06-02",
        "hour": "17:00",
        "sales": 309.5,
        "orders": 14,
        "rows": 56
      },
      {
        "date": "2026-06-02",
        "hour": "18:00",
        "sales": 189.5,
        "orders": 9,
        "rows": 34
      },
      {
        "date": "2026-06-02",
        "hour": "19:00",
        "sales": 132.5,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-06-02",
        "hour": "20:00",
        "sales": 36.0,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-06-02",
        "hour": "21:00",
        "sales": 13.0,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-06-03",
        "hour": "09:00",
        "sales": 212.5,
        "orders": 13,
        "rows": 53
      },
      {
        "date": "2026-06-03",
        "hour": "10:00",
        "sales": 164.0,
        "orders": 7,
        "rows": 37
      },
      {
        "date": "2026-06-03",
        "hour": "11:00",
        "sales": 85.0,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-06-03",
        "hour": "12:00",
        "sales": 217.5,
        "orders": 12,
        "rows": 43
      },
      {
        "date": "2026-06-03",
        "hour": "13:00",
        "sales": 217.5,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-06-03",
        "hour": "14:00",
        "sales": 507.9,
        "orders": 34,
        "rows": 98
      },
      {
        "date": "2026-06-03",
        "hour": "15:00",
        "sales": 279.8,
        "orders": 20,
        "rows": 62
      },
      {
        "date": "2026-06-03",
        "hour": "16:00",
        "sales": 370.0,
        "orders": 15,
        "rows": 66
      },
      {
        "date": "2026-06-03",
        "hour": "17:00",
        "sales": 49.5,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-06-03",
        "hour": "18:00",
        "sales": 105.5,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-06-03",
        "hour": "19:00",
        "sales": 128.5,
        "orders": 10,
        "rows": 26
      },
      {
        "date": "2026-06-03",
        "hour": "20:00",
        "sales": 20.0,
        "orders": 4,
        "rows": 5
      },
      {
        "date": "2026-06-04",
        "hour": "09:00",
        "sales": 80.0,
        "orders": 5,
        "rows": 21
      },
      {
        "date": "2026-06-04",
        "hour": "10:00",
        "sales": 102.5,
        "orders": 9,
        "rows": 21
      },
      {
        "date": "2026-06-04",
        "hour": "11:00",
        "sales": 246.0,
        "orders": 14,
        "rows": 50
      },
      {
        "date": "2026-06-04",
        "hour": "12:00",
        "sales": 124.5,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-06-04",
        "hour": "13:00",
        "sales": 278.5,
        "orders": 12,
        "rows": 53
      },
      {
        "date": "2026-06-04",
        "hour": "14:00",
        "sales": 148.5,
        "orders": 10,
        "rows": 30
      },
      {
        "date": "2026-06-04",
        "hour": "15:00",
        "sales": 206.0,
        "orders": 16,
        "rows": 38
      },
      {
        "date": "2026-06-04",
        "hour": "16:00",
        "sales": 473.5,
        "orders": 20,
        "rows": 90
      },
      {
        "date": "2026-06-04",
        "hour": "17:00",
        "sales": 273.0,
        "orders": 15,
        "rows": 50
      },
      {
        "date": "2026-06-04",
        "hour": "18:00",
        "sales": 412.0,
        "orders": 17,
        "rows": 77
      },
      {
        "date": "2026-06-04",
        "hour": "19:00",
        "sales": 351.5,
        "orders": 18,
        "rows": 66
      },
      {
        "date": "2026-06-04",
        "hour": "20:00",
        "sales": 131.5,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-06-05",
        "hour": "09:00",
        "sales": 211.0,
        "orders": 16,
        "rows": 56
      },
      {
        "date": "2026-06-05",
        "hour": "10:00",
        "sales": 307.0,
        "orders": 17,
        "rows": 68
      },
      {
        "date": "2026-06-05",
        "hour": "11:00",
        "sales": 228.5,
        "orders": 13,
        "rows": 49
      },
      {
        "date": "2026-06-05",
        "hour": "12:00",
        "sales": 424.5,
        "orders": 15,
        "rows": 79
      },
      {
        "date": "2026-06-05",
        "hour": "13:00",
        "sales": 440.0,
        "orders": 22,
        "rows": 83
      },
      {
        "date": "2026-06-05",
        "hour": "14:00",
        "sales": 389.9,
        "orders": 21,
        "rows": 79
      },
      {
        "date": "2026-06-05",
        "hour": "15:00",
        "sales": 419.7,
        "orders": 27,
        "rows": 79
      },
      {
        "date": "2026-06-05",
        "hour": "16:00",
        "sales": 534.0,
        "orders": 24,
        "rows": 102
      },
      {
        "date": "2026-06-05",
        "hour": "17:00",
        "sales": 459.5,
        "orders": 24,
        "rows": 94
      },
      {
        "date": "2026-06-05",
        "hour": "18:00",
        "sales": 388.5,
        "orders": 20,
        "rows": 87
      },
      {
        "date": "2026-06-05",
        "hour": "19:00",
        "sales": 92.0,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-06-05",
        "hour": "20:00",
        "sales": 30.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-06-06",
        "hour": "09:00",
        "sales": 215.0,
        "orders": 10,
        "rows": 48
      },
      {
        "date": "2026-06-06",
        "hour": "10:00",
        "sales": 320.0,
        "orders": 16,
        "rows": 66
      },
      {
        "date": "2026-06-06",
        "hour": "11:00",
        "sales": 363.5,
        "orders": 20,
        "rows": 75
      },
      {
        "date": "2026-06-06",
        "hour": "12:00",
        "sales": 869.5,
        "orders": 37,
        "rows": 171
      },
      {
        "date": "2026-06-06",
        "hour": "13:00",
        "sales": 531.2,
        "orders": 23,
        "rows": 108
      },
      {
        "date": "2026-06-06",
        "hour": "14:00",
        "sales": 693.5,
        "orders": 32,
        "rows": 135
      },
      {
        "date": "2026-06-06",
        "hour": "15:00",
        "sales": 559.3,
        "orders": 26,
        "rows": 105
      },
      {
        "date": "2026-06-06",
        "hour": "16:00",
        "sales": 305.0,
        "orders": 16,
        "rows": 65
      },
      {
        "date": "2026-06-06",
        "hour": "17:00",
        "sales": 471.5,
        "orders": 24,
        "rows": 86
      },
      {
        "date": "2026-06-06",
        "hour": "18:00",
        "sales": 611.0,
        "orders": 25,
        "rows": 116
      },
      {
        "date": "2026-06-06",
        "hour": "19:00",
        "sales": 293.1,
        "orders": 23,
        "rows": 68
      },
      {
        "date": "2026-06-06",
        "hour": "20:00",
        "sales": 248.9,
        "orders": 16,
        "rows": 52
      },
      {
        "date": "2026-06-06",
        "hour": "21:00",
        "sales": 178.5,
        "orders": 15,
        "rows": 39
      },
      {
        "date": "2026-06-06",
        "hour": "22:00",
        "sales": 62.0,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-06-07",
        "hour": "09:00",
        "sales": 219.0,
        "orders": 14,
        "rows": 52
      },
      {
        "date": "2026-06-07",
        "hour": "10:00",
        "sales": 388.0,
        "orders": 17,
        "rows": 77
      },
      {
        "date": "2026-06-07",
        "hour": "11:00",
        "sales": 509.0,
        "orders": 23,
        "rows": 100
      },
      {
        "date": "2026-06-07",
        "hour": "12:00",
        "sales": 660.2,
        "orders": 31,
        "rows": 138
      },
      {
        "date": "2026-06-07",
        "hour": "13:00",
        "sales": 749.0,
        "orders": 30,
        "rows": 144
      },
      {
        "date": "2026-06-07",
        "hour": "14:00",
        "sales": 349.1,
        "orders": 17,
        "rows": 75
      },
      {
        "date": "2026-06-07",
        "hour": "15:00",
        "sales": 548.5,
        "orders": 27,
        "rows": 106
      },
      {
        "date": "2026-06-07",
        "hour": "16:00",
        "sales": 436.0,
        "orders": 21,
        "rows": 91
      },
      {
        "date": "2026-06-07",
        "hour": "17:00",
        "sales": 448.0,
        "orders": 24,
        "rows": 93
      },
      {
        "date": "2026-06-07",
        "hour": "18:00",
        "sales": 265.0,
        "orders": 17,
        "rows": 57
      },
      {
        "date": "2026-06-07",
        "hour": "19:00",
        "sales": 42.0,
        "orders": 5,
        "rows": 9
      },
      {
        "date": "2026-06-08",
        "hour": "09:00",
        "sales": 206.95,
        "orders": 9,
        "rows": 56
      },
      {
        "date": "2026-06-08",
        "hour": "10:00",
        "sales": 471.95,
        "orders": 15,
        "rows": 98
      },
      {
        "date": "2026-06-08",
        "hour": "11:00",
        "sales": 560.91,
        "orders": 20,
        "rows": 130
      },
      {
        "date": "2026-06-08",
        "hour": "12:00",
        "sales": 444.79,
        "orders": 16,
        "rows": 93
      },
      {
        "date": "2026-06-08",
        "hour": "13:00",
        "sales": 466.65,
        "orders": 21,
        "rows": 101
      },
      {
        "date": "2026-06-08",
        "hour": "14:00",
        "sales": 651.71,
        "orders": 30,
        "rows": 143
      },
      {
        "date": "2026-06-08",
        "hour": "15:00",
        "sales": 542.51,
        "orders": 22,
        "rows": 119
      },
      {
        "date": "2026-06-08",
        "hour": "16:00",
        "sales": 380.4,
        "orders": 22,
        "rows": 93
      },
      {
        "date": "2026-06-08",
        "hour": "17:00",
        "sales": 272.05,
        "orders": 11,
        "rows": 61
      },
      {
        "date": "2026-06-08",
        "hour": "18:00",
        "sales": 130.55,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-06-08",
        "hour": "19:00",
        "sales": 156.75,
        "orders": 10,
        "rows": 39
      },
      {
        "date": "2026-06-08",
        "hour": "20:00",
        "sales": 11.0,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-06-09",
        "hour": "08:00",
        "sales": 8.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-06-09",
        "hour": "09:00",
        "sales": 63.5,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-06-09",
        "hour": "10:00",
        "sales": 105.0,
        "orders": 11,
        "rows": 20
      },
      {
        "date": "2026-06-09",
        "hour": "11:00",
        "sales": 313.0,
        "orders": 19,
        "rows": 85
      },
      {
        "date": "2026-06-09",
        "hour": "12:00",
        "sales": 185.5,
        "orders": 16,
        "rows": 35
      },
      {
        "date": "2026-06-09",
        "hour": "13:00",
        "sales": 110.6,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-06-09",
        "hour": "14:00",
        "sales": 150.0,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-06-09",
        "hour": "15:00",
        "sales": 198.5,
        "orders": 14,
        "rows": 39
      },
      {
        "date": "2026-06-09",
        "hour": "16:00",
        "sales": 104.5,
        "orders": 8,
        "rows": 20
      },
      {
        "date": "2026-06-09",
        "hour": "17:00",
        "sales": 89.5,
        "orders": 8,
        "rows": 17
      },
      {
        "date": "2026-06-09",
        "hour": "18:00",
        "sales": 101.5,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-06-09",
        "hour": "19:00",
        "sales": 131.5,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-06-09",
        "hour": "20:00",
        "sales": 149.0,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-06-09",
        "hour": "21:00",
        "sales": 40.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-06-10",
        "hour": "09:00",
        "sales": 41.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-06-10",
        "hour": "10:00",
        "sales": 371.0,
        "orders": 18,
        "rows": 67
      },
      {
        "date": "2026-06-10",
        "hour": "11:00",
        "sales": 133.0,
        "orders": 8,
        "rows": 32
      },
      {
        "date": "2026-06-10",
        "hour": "12:00",
        "sales": 186.0,
        "orders": 16,
        "rows": 44
      },
      {
        "date": "2026-06-10",
        "hour": "13:00",
        "sales": 113.0,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-06-10",
        "hour": "14:00",
        "sales": 88.4,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-06-10",
        "hour": "15:00",
        "sales": 228.0,
        "orders": 16,
        "rows": 46
      },
      {
        "date": "2026-06-10",
        "hour": "16:00",
        "sales": 268.5,
        "orders": 16,
        "rows": 52
      },
      {
        "date": "2026-06-10",
        "hour": "17:00",
        "sales": 205.0,
        "orders": 12,
        "rows": 41
      },
      {
        "date": "2026-06-10",
        "hour": "18:00",
        "sales": 252.5,
        "orders": 12,
        "rows": 45
      },
      {
        "date": "2026-06-10",
        "hour": "19:00",
        "sales": 300.4,
        "orders": 20,
        "rows": 63
      },
      {
        "date": "2026-06-10",
        "hour": "20:00",
        "sales": 98.0,
        "orders": 6,
        "rows": 21
      },
      {
        "date": "2026-06-10",
        "hour": "21:00",
        "sales": 46.5,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-06-11",
        "hour": "09:00",
        "sales": 134.5,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-06-11",
        "hour": "10:00",
        "sales": 183.0,
        "orders": 12,
        "rows": 41
      },
      {
        "date": "2026-06-11",
        "hour": "11:00",
        "sales": 214.5,
        "orders": 12,
        "rows": 45
      },
      {
        "date": "2026-06-11",
        "hour": "12:00",
        "sales": 253.5,
        "orders": 12,
        "rows": 48
      },
      {
        "date": "2026-06-11",
        "hour": "13:00",
        "sales": 276.7,
        "orders": 10,
        "rows": 47
      },
      {
        "date": "2026-06-11",
        "hour": "14:00",
        "sales": 101.7,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-06-11",
        "hour": "15:00",
        "sales": 142.5,
        "orders": 14,
        "rows": 28
      },
      {
        "date": "2026-06-11",
        "hour": "16:00",
        "sales": 304.5,
        "orders": 13,
        "rows": 58
      },
      {
        "date": "2026-06-11",
        "hour": "17:00",
        "sales": 224.0,
        "orders": 10,
        "rows": 44
      },
      {
        "date": "2026-06-11",
        "hour": "18:00",
        "sales": 132.0,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-06-11",
        "hour": "19:00",
        "sales": 262.5,
        "orders": 14,
        "rows": 47
      },
      {
        "date": "2026-06-11",
        "hour": "20:00",
        "sales": 185.9,
        "orders": 9,
        "rows": 41
      },
      {
        "date": "2026-06-11",
        "hour": "21:00",
        "sales": 27.0,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-06-12",
        "hour": "09:00",
        "sales": 83.5,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-06-12",
        "hour": "10:00",
        "sales": 263.0,
        "orders": 16,
        "rows": 58
      },
      {
        "date": "2026-06-12",
        "hour": "11:00",
        "sales": 139.2,
        "orders": 9,
        "rows": 25
      },
      {
        "date": "2026-06-12",
        "hour": "12:00",
        "sales": 216.5,
        "orders": 12,
        "rows": 42
      },
      {
        "date": "2026-06-12",
        "hour": "13:00",
        "sales": 251.5,
        "orders": 15,
        "rows": 54
      },
      {
        "date": "2026-06-12",
        "hour": "14:00",
        "sales": 316.5,
        "orders": 15,
        "rows": 62
      },
      {
        "date": "2026-06-12",
        "hour": "15:00",
        "sales": 368.0,
        "orders": 25,
        "rows": 71
      },
      {
        "date": "2026-06-12",
        "hour": "16:00",
        "sales": 473.0,
        "orders": 26,
        "rows": 94
      },
      {
        "date": "2026-06-12",
        "hour": "17:00",
        "sales": 208.5,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-06-12",
        "hour": "18:00",
        "sales": 422.1,
        "orders": 22,
        "rows": 79
      },
      {
        "date": "2026-06-12",
        "hour": "19:00",
        "sales": 456.0,
        "orders": 20,
        "rows": 88
      },
      {
        "date": "2026-06-12",
        "hour": "20:00",
        "sales": 497.5,
        "orders": 20,
        "rows": 99
      },
      {
        "date": "2026-06-12",
        "hour": "21:00",
        "sales": 144.0,
        "orders": 11,
        "rows": 27
      },
      {
        "date": "2026-06-12",
        "hour": "22:00",
        "sales": 35.2,
        "orders": 2,
        "rows": 8
      }
    ],
    "Taren Point": [
      {
        "date": "2026-03-14",
        "hour": "08:00",
        "sales": 32.0,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-03-14",
        "hour": "09:00",
        "sales": 65.0,
        "orders": 3,
        "rows": 16
      },
      {
        "date": "2026-03-14",
        "hour": "10:00",
        "sales": 161.5,
        "orders": 15,
        "rows": 38
      },
      {
        "date": "2026-03-14",
        "hour": "11:00",
        "sales": 156.0,
        "orders": 12,
        "rows": 34
      },
      {
        "date": "2026-03-14",
        "hour": "12:00",
        "sales": 140.0,
        "orders": 12,
        "rows": 34
      },
      {
        "date": "2026-03-14",
        "hour": "13:00",
        "sales": 350.0,
        "orders": 21,
        "rows": 72
      },
      {
        "date": "2026-03-14",
        "hour": "14:00",
        "sales": 306.5,
        "orders": 15,
        "rows": 60
      },
      {
        "date": "2026-03-14",
        "hour": "15:00",
        "sales": 226.5,
        "orders": 14,
        "rows": 46
      },
      {
        "date": "2026-03-14",
        "hour": "16:00",
        "sales": 158.0,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-03-14",
        "hour": "17:00",
        "sales": 64.0,
        "orders": 7,
        "rows": 14
      },
      {
        "date": "2026-03-15",
        "hour": "08:00",
        "sales": 42.5,
        "orders": 3,
        "rows": 13
      },
      {
        "date": "2026-03-15",
        "hour": "09:00",
        "sales": 100.5,
        "orders": 6,
        "rows": 18
      },
      {
        "date": "2026-03-15",
        "hour": "10:00",
        "sales": 218.0,
        "orders": 13,
        "rows": 51
      },
      {
        "date": "2026-03-15",
        "hour": "11:00",
        "sales": 296.0,
        "orders": 14,
        "rows": 56
      },
      {
        "date": "2026-03-15",
        "hour": "12:00",
        "sales": 109.0,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-03-15",
        "hour": "13:00",
        "sales": 158.8,
        "orders": 10,
        "rows": 34
      },
      {
        "date": "2026-03-15",
        "hour": "14:00",
        "sales": 83.5,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-03-15",
        "hour": "15:00",
        "sales": 192.0,
        "orders": 12,
        "rows": 34
      },
      {
        "date": "2026-03-15",
        "hour": "16:00",
        "sales": 55.4,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-03-15",
        "hour": "17:00",
        "sales": 78.0,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-03-16",
        "hour": "06:00",
        "sales": 3.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-16",
        "hour": "07:00",
        "sales": 20.0,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-03-16",
        "hour": "08:00",
        "sales": 61.5,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-03-16",
        "hour": "09:00",
        "sales": 30.5,
        "orders": 4,
        "rows": 6
      },
      {
        "date": "2026-03-16",
        "hour": "10:00",
        "sales": 75.0,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-03-16",
        "hour": "11:00",
        "sales": 49.7,
        "orders": 6,
        "rows": 13
      },
      {
        "date": "2026-03-16",
        "hour": "12:00",
        "sales": 36.5,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-03-16",
        "hour": "13:00",
        "sales": 133.0,
        "orders": 14,
        "rows": 28
      },
      {
        "date": "2026-03-16",
        "hour": "14:00",
        "sales": 196.5,
        "orders": 11,
        "rows": 40
      },
      {
        "date": "2026-03-16",
        "hour": "15:00",
        "sales": 62.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-03-16",
        "hour": "16:00",
        "sales": 118.5,
        "orders": 9,
        "rows": 25
      },
      {
        "date": "2026-03-16",
        "hour": "17:00",
        "sales": 112.0,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-03-17",
        "hour": "06:00",
        "sales": 3.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-17",
        "hour": "07:00",
        "sales": 10.0,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-03-17",
        "hour": "08:00",
        "sales": 77.5,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-03-17",
        "hour": "09:00",
        "sales": 47.0,
        "orders": 2,
        "rows": 13
      },
      {
        "date": "2026-03-17",
        "hour": "10:00",
        "sales": 103.5,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-03-17",
        "hour": "11:00",
        "sales": 177.5,
        "orders": 12,
        "rows": 36
      },
      {
        "date": "2026-03-17",
        "hour": "12:00",
        "sales": 101.0,
        "orders": 7,
        "rows": 17
      },
      {
        "date": "2026-03-17",
        "hour": "13:00",
        "sales": 128.5,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-03-17",
        "hour": "14:00",
        "sales": 121.3,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-03-17",
        "hour": "15:00",
        "sales": 232.2,
        "orders": 17,
        "rows": 50
      },
      {
        "date": "2026-03-17",
        "hour": "16:00",
        "sales": 96.5,
        "orders": 9,
        "rows": 19
      },
      {
        "date": "2026-03-17",
        "hour": "17:00",
        "sales": 78.0,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-03-18",
        "hour": "06:00",
        "sales": 21.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-03-18",
        "hour": "07:00",
        "sales": 3.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-18",
        "hour": "08:00",
        "sales": 12.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-03-18",
        "hour": "09:00",
        "sales": 91.0,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-03-18",
        "hour": "10:00",
        "sales": 50.5,
        "orders": 7,
        "rows": 12
      },
      {
        "date": "2026-03-18",
        "hour": "11:00",
        "sales": 133.0,
        "orders": 11,
        "rows": 31
      },
      {
        "date": "2026-03-18",
        "hour": "12:00",
        "sales": 193.7,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-03-18",
        "hour": "13:00",
        "sales": 116.5,
        "orders": 12,
        "rows": 25
      },
      {
        "date": "2026-03-18",
        "hour": "14:00",
        "sales": 204.0,
        "orders": 14,
        "rows": 46
      },
      {
        "date": "2026-03-18",
        "hour": "15:00",
        "sales": 121.5,
        "orders": 8,
        "rows": 30
      },
      {
        "date": "2026-03-18",
        "hour": "16:00",
        "sales": 84.1,
        "orders": 10,
        "rows": 18
      },
      {
        "date": "2026-03-18",
        "hour": "17:00",
        "sales": 55.0,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-03-19",
        "hour": "06:00",
        "sales": 9.0,
        "orders": 2,
        "rows": 2
      },
      {
        "date": "2026-03-19",
        "hour": "07:00",
        "sales": 12.0,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-03-19",
        "hour": "08:00",
        "sales": 102.5,
        "orders": 8,
        "rows": 14
      },
      {
        "date": "2026-03-19",
        "hour": "09:00",
        "sales": 185.0,
        "orders": 7,
        "rows": 39
      },
      {
        "date": "2026-03-19",
        "hour": "10:00",
        "sales": 168.6,
        "orders": 7,
        "rows": 38
      },
      {
        "date": "2026-03-19",
        "hour": "11:00",
        "sales": 114.2,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-03-19",
        "hour": "12:00",
        "sales": 124.3,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-03-19",
        "hour": "13:00",
        "sales": 141.5,
        "orders": 10,
        "rows": 29
      },
      {
        "date": "2026-03-19",
        "hour": "14:00",
        "sales": 159.5,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-03-19",
        "hour": "15:00",
        "sales": 97.0,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-03-19",
        "hour": "16:00",
        "sales": 141.0,
        "orders": 11,
        "rows": 29
      },
      {
        "date": "2026-03-19",
        "hour": "17:00",
        "sales": 6.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-20",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-03-20",
        "hour": "07:00",
        "sales": 50.5,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-03-20",
        "hour": "08:00",
        "sales": 76.0,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-03-20",
        "hour": "09:00",
        "sales": 75.0,
        "orders": 3,
        "rows": 15
      },
      {
        "date": "2026-03-20",
        "hour": "10:00",
        "sales": 101.5,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-03-20",
        "hour": "11:00",
        "sales": 219.6,
        "orders": 10,
        "rows": 51
      },
      {
        "date": "2026-03-20",
        "hour": "12:00",
        "sales": 184.5,
        "orders": 16,
        "rows": 47
      },
      {
        "date": "2026-03-20",
        "hour": "13:00",
        "sales": 129.0,
        "orders": 10,
        "rows": 26
      },
      {
        "date": "2026-03-20",
        "hour": "14:00",
        "sales": 152.5,
        "orders": 10,
        "rows": 30
      },
      {
        "date": "2026-03-20",
        "hour": "15:00",
        "sales": 152.0,
        "orders": 8,
        "rows": 31
      },
      {
        "date": "2026-03-20",
        "hour": "16:00",
        "sales": 175.0,
        "orders": 16,
        "rows": 37
      },
      {
        "date": "2026-03-20",
        "hour": "17:00",
        "sales": 15.5,
        "orders": 3,
        "rows": 4
      },
      {
        "date": "2026-03-20",
        "hour": "18:00",
        "sales": 7.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-03-21",
        "hour": "08:00",
        "sales": 7.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-03-21",
        "hour": "09:00",
        "sales": 20.5,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-03-21",
        "hour": "10:00",
        "sales": 134.1,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-03-21",
        "hour": "11:00",
        "sales": 368.0,
        "orders": 22,
        "rows": 79
      },
      {
        "date": "2026-03-21",
        "hour": "12:00",
        "sales": 176.7,
        "orders": 11,
        "rows": 36
      },
      {
        "date": "2026-03-21",
        "hour": "13:00",
        "sales": 120.4,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-03-21",
        "hour": "14:00",
        "sales": 87.5,
        "orders": 8,
        "rows": 19
      },
      {
        "date": "2026-03-21",
        "hour": "15:00",
        "sales": 122.0,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-03-21",
        "hour": "16:00",
        "sales": 94.0,
        "orders": 10,
        "rows": 20
      },
      {
        "date": "2026-03-21",
        "hour": "17:00",
        "sales": 51.5,
        "orders": 2,
        "rows": 11
      },
      {
        "date": "2026-03-22",
        "hour": "08:00",
        "sales": 46.5,
        "orders": 2,
        "rows": 11
      },
      {
        "date": "2026-03-22",
        "hour": "09:00",
        "sales": 28.5,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-03-22",
        "hour": "10:00",
        "sales": 57.5,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-03-22",
        "hour": "11:00",
        "sales": 247.5,
        "orders": 15,
        "rows": 51
      },
      {
        "date": "2026-03-22",
        "hour": "12:00",
        "sales": 163.0,
        "orders": 13,
        "rows": 30
      },
      {
        "date": "2026-03-22",
        "hour": "13:00",
        "sales": 250.0,
        "orders": 14,
        "rows": 51
      },
      {
        "date": "2026-03-22",
        "hour": "14:00",
        "sales": 217.0,
        "orders": 18,
        "rows": 43
      },
      {
        "date": "2026-03-22",
        "hour": "15:00",
        "sales": 206.5,
        "orders": 13,
        "rows": 43
      },
      {
        "date": "2026-03-22",
        "hour": "16:00",
        "sales": 145.0,
        "orders": 9,
        "rows": 31
      },
      {
        "date": "2026-03-22",
        "hour": "17:00",
        "sales": 49.5,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-03-23",
        "hour": "06:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-23",
        "hour": "07:00",
        "sales": 55.0,
        "orders": 4,
        "rows": 15
      },
      {
        "date": "2026-03-23",
        "hour": "08:00",
        "sales": 31.5,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-03-23",
        "hour": "09:00",
        "sales": 108.0,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-03-23",
        "hour": "10:00",
        "sales": 40.5,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-03-23",
        "hour": "11:00",
        "sales": 168.0,
        "orders": 13,
        "rows": 25
      },
      {
        "date": "2026-03-23",
        "hour": "12:00",
        "sales": 204.5,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-03-23",
        "hour": "13:00",
        "sales": 47.0,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-03-23",
        "hour": "14:00",
        "sales": 80.5,
        "orders": 7,
        "rows": 15
      },
      {
        "date": "2026-03-23",
        "hour": "15:00",
        "sales": 63.0,
        "orders": 6,
        "rows": 12
      },
      {
        "date": "2026-03-23",
        "hour": "16:00",
        "sales": 41.0,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-03-23",
        "hour": "17:00",
        "sales": 24.5,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-03-24",
        "hour": "07:00",
        "sales": 4.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-24",
        "hour": "08:00",
        "sales": 49.0,
        "orders": 3,
        "rows": 13
      },
      {
        "date": "2026-03-24",
        "hour": "09:00",
        "sales": 110.5,
        "orders": 9,
        "rows": 25
      },
      {
        "date": "2026-03-24",
        "hour": "10:00",
        "sales": 29.0,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-03-24",
        "hour": "11:00",
        "sales": 78.5,
        "orders": 4,
        "rows": 16
      },
      {
        "date": "2026-03-24",
        "hour": "12:00",
        "sales": 166.0,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-03-24",
        "hour": "13:00",
        "sales": 115.5,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-03-24",
        "hour": "14:00",
        "sales": 97.0,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-03-24",
        "hour": "15:00",
        "sales": 160.3,
        "orders": 15,
        "rows": 42
      },
      {
        "date": "2026-03-24",
        "hour": "16:00",
        "sales": 28.5,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-03-24",
        "hour": "17:00",
        "sales": 34.0,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-03-25",
        "hour": "07:00",
        "sales": 23.5,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-03-25",
        "hour": "08:00",
        "sales": 89.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-03-25",
        "hour": "09:00",
        "sales": 120.5,
        "orders": 8,
        "rows": 33
      },
      {
        "date": "2026-03-25",
        "hour": "10:00",
        "sales": 52.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-03-25",
        "hour": "11:00",
        "sales": 174.0,
        "orders": 12,
        "rows": 34
      },
      {
        "date": "2026-03-25",
        "hour": "12:00",
        "sales": 92.5,
        "orders": 9,
        "rows": 21
      },
      {
        "date": "2026-03-25",
        "hour": "13:00",
        "sales": 47.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-03-25",
        "hour": "14:00",
        "sales": 60.5,
        "orders": 6,
        "rows": 13
      },
      {
        "date": "2026-03-25",
        "hour": "15:00",
        "sales": 87.5,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-03-25",
        "hour": "16:00",
        "sales": 54.0,
        "orders": 6,
        "rows": 11
      },
      {
        "date": "2026-03-25",
        "hour": "17:00",
        "sales": 40.0,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-03-26",
        "hour": "06:00",
        "sales": 14.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-03-26",
        "hour": "07:00",
        "sales": 98.0,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-03-26",
        "hour": "08:00",
        "sales": 28.0,
        "orders": 4,
        "rows": 6
      },
      {
        "date": "2026-03-26",
        "hour": "09:00",
        "sales": 82.0,
        "orders": 12,
        "rows": 19
      },
      {
        "date": "2026-03-26",
        "hour": "10:00",
        "sales": 16.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-03-26",
        "hour": "11:00",
        "sales": 134.5,
        "orders": 9,
        "rows": 21
      },
      {
        "date": "2026-03-26",
        "hour": "12:00",
        "sales": 128.5,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-03-26",
        "hour": "13:00",
        "sales": 105.5,
        "orders": 9,
        "rows": 23
      },
      {
        "date": "2026-03-26",
        "hour": "14:00",
        "sales": 141.5,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-03-26",
        "hour": "15:00",
        "sales": 53.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-03-26",
        "hour": "16:00",
        "sales": 126.0,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-03-26",
        "hour": "17:00",
        "sales": 43.0,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-03-26",
        "hour": "18:00",
        "sales": 16.8,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-03-27",
        "hour": "06:00",
        "sales": 39.0,
        "orders": 2,
        "rows": 11
      },
      {
        "date": "2026-03-27",
        "hour": "07:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-03-27",
        "hour": "08:00",
        "sales": 77.0,
        "orders": 6,
        "rows": 21
      },
      {
        "date": "2026-03-27",
        "hour": "09:00",
        "sales": 88.5,
        "orders": 10,
        "rows": 21
      },
      {
        "date": "2026-03-27",
        "hour": "10:00",
        "sales": 168.0,
        "orders": 11,
        "rows": 43
      },
      {
        "date": "2026-03-27",
        "hour": "11:00",
        "sales": 158.0,
        "orders": 7,
        "rows": 33
      },
      {
        "date": "2026-03-27",
        "hour": "12:00",
        "sales": 201.8,
        "orders": 12,
        "rows": 32
      },
      {
        "date": "2026-03-27",
        "hour": "13:00",
        "sales": 126.0,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-03-27",
        "hour": "14:00",
        "sales": 199.0,
        "orders": 13,
        "rows": 42
      },
      {
        "date": "2026-03-27",
        "hour": "15:00",
        "sales": 205.5,
        "orders": 13,
        "rows": 37
      },
      {
        "date": "2026-03-27",
        "hour": "16:00",
        "sales": 155.0,
        "orders": 10,
        "rows": 29
      },
      {
        "date": "2026-03-27",
        "hour": "17:00",
        "sales": 32.0,
        "orders": 4,
        "rows": 6
      },
      {
        "date": "2026-03-28",
        "hour": "08:00",
        "sales": 16.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-03-28",
        "hour": "09:00",
        "sales": 66.5,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-03-28",
        "hour": "10:00",
        "sales": 270.5,
        "orders": 20,
        "rows": 54
      },
      {
        "date": "2026-03-28",
        "hour": "11:00",
        "sales": 261.0,
        "orders": 14,
        "rows": 56
      },
      {
        "date": "2026-03-28",
        "hour": "12:00",
        "sales": 227.5,
        "orders": 12,
        "rows": 48
      },
      {
        "date": "2026-03-28",
        "hour": "13:00",
        "sales": 269.0,
        "orders": 17,
        "rows": 61
      },
      {
        "date": "2026-03-28",
        "hour": "14:00",
        "sales": 139.0,
        "orders": 9,
        "rows": 28
      },
      {
        "date": "2026-03-28",
        "hour": "15:00",
        "sales": 242.0,
        "orders": 17,
        "rows": 53
      },
      {
        "date": "2026-03-28",
        "hour": "16:00",
        "sales": 124.0,
        "orders": 9,
        "rows": 31
      },
      {
        "date": "2026-03-28",
        "hour": "17:00",
        "sales": 25.5,
        "orders": 1,
        "rows": 7
      },
      {
        "date": "2026-03-28",
        "hour": "18:00",
        "sales": 3.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-03-29",
        "hour": "08:00",
        "sales": 50.5,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-03-29",
        "hour": "09:00",
        "sales": 10.0,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-03-29",
        "hour": "10:00",
        "sales": 256.0,
        "orders": 13,
        "rows": 51
      },
      {
        "date": "2026-03-29",
        "hour": "11:00",
        "sales": 206.0,
        "orders": 14,
        "rows": 47
      },
      {
        "date": "2026-03-29",
        "hour": "12:00",
        "sales": 221.5,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-03-29",
        "hour": "13:00",
        "sales": 268.6,
        "orders": 17,
        "rows": 54
      },
      {
        "date": "2026-03-29",
        "hour": "14:00",
        "sales": 164.0,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-03-29",
        "hour": "15:00",
        "sales": 87.5,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-03-29",
        "hour": "16:00",
        "sales": 25.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-03-29",
        "hour": "17:00",
        "sales": 9.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-03-30",
        "hour": "06:00",
        "sales": 8.0,
        "orders": 2,
        "rows": 2
      },
      {
        "date": "2026-03-30",
        "hour": "08:00",
        "sales": 67.0,
        "orders": 6,
        "rows": 18
      },
      {
        "date": "2026-03-30",
        "hour": "09:00",
        "sales": 67.0,
        "orders": 8,
        "rows": 15
      },
      {
        "date": "2026-03-30",
        "hour": "10:00",
        "sales": 68.0,
        "orders": 6,
        "rows": 16
      },
      {
        "date": "2026-03-30",
        "hour": "11:00",
        "sales": 109.0,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-03-30",
        "hour": "12:00",
        "sales": 75.5,
        "orders": 5,
        "rows": 18
      },
      {
        "date": "2026-03-30",
        "hour": "13:00",
        "sales": 128.0,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-03-30",
        "hour": "14:00",
        "sales": 104.0,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-03-30",
        "hour": "15:00",
        "sales": 42.0,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-03-30",
        "hour": "16:00",
        "sales": 83.0,
        "orders": 7,
        "rows": 16
      },
      {
        "date": "2026-03-30",
        "hour": "17:00",
        "sales": 65.5,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-03-31",
        "hour": "07:00",
        "sales": 104.81,
        "orders": 6,
        "rows": 12
      },
      {
        "date": "2026-03-31",
        "hour": "08:00",
        "sales": 86.0,
        "orders": 5,
        "rows": 23
      },
      {
        "date": "2026-03-31",
        "hour": "09:00",
        "sales": 131.0,
        "orders": 9,
        "rows": 29
      },
      {
        "date": "2026-03-31",
        "hour": "10:00",
        "sales": 106.0,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-03-31",
        "hour": "11:00",
        "sales": 70.0,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-03-31",
        "hour": "12:00",
        "sales": 137.0,
        "orders": 10,
        "rows": 23
      },
      {
        "date": "2026-03-31",
        "hour": "13:00",
        "sales": 51.69,
        "orders": 8,
        "rows": 12
      },
      {
        "date": "2026-03-31",
        "hour": "14:00",
        "sales": 35.0,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-03-31",
        "hour": "15:00",
        "sales": 82.0,
        "orders": 9,
        "rows": 18
      },
      {
        "date": "2026-03-31",
        "hour": "16:00",
        "sales": 50.5,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-03-31",
        "hour": "17:00",
        "sales": 13.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-01",
        "hour": "07:00",
        "sales": 78.5,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-04-01",
        "hour": "08:00",
        "sales": 13.5,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-04-01",
        "hour": "09:00",
        "sales": 150.0,
        "orders": 11,
        "rows": 18
      },
      {
        "date": "2026-04-01",
        "hour": "10:00",
        "sales": 73.5,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-04-01",
        "hour": "11:00",
        "sales": 67.0,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-04-01",
        "hour": "12:00",
        "sales": 99.5,
        "orders": 4,
        "rows": 18
      },
      {
        "date": "2026-04-01",
        "hour": "13:00",
        "sales": 76.5,
        "orders": 9,
        "rows": 15
      },
      {
        "date": "2026-04-01",
        "hour": "14:00",
        "sales": 88.5,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-04-01",
        "hour": "15:00",
        "sales": 122.5,
        "orders": 10,
        "rows": 26
      },
      {
        "date": "2026-04-01",
        "hour": "16:00",
        "sales": 58.0,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-04-01",
        "hour": "17:00",
        "sales": 36.0,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-02",
        "hour": "06:00",
        "sales": 11.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-02",
        "hour": "07:00",
        "sales": 30.0,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-04-02",
        "hour": "09:00",
        "sales": 87.0,
        "orders": 6,
        "rows": 10
      },
      {
        "date": "2026-04-02",
        "hour": "10:00",
        "sales": 57.5,
        "orders": 6,
        "rows": 12
      },
      {
        "date": "2026-04-02",
        "hour": "11:00",
        "sales": 223.5,
        "orders": 9,
        "rows": 45
      },
      {
        "date": "2026-04-02",
        "hour": "12:00",
        "sales": 128.5,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-04-02",
        "hour": "13:00",
        "sales": 102.0,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-04-02",
        "hour": "14:00",
        "sales": 68.5,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-04-02",
        "hour": "15:00",
        "sales": 28.0,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-04-02",
        "hour": "16:00",
        "sales": 12.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-04-03",
        "hour": "08:00",
        "sales": 36.1,
        "orders": 1,
        "rows": 7
      },
      {
        "date": "2026-04-03",
        "hour": "09:00",
        "sales": 55.9,
        "orders": 5,
        "rows": 18
      },
      {
        "date": "2026-04-03",
        "hour": "10:00",
        "sales": 52.9,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-04-03",
        "hour": "11:00",
        "sales": 271.55,
        "orders": 11,
        "rows": 62
      },
      {
        "date": "2026-04-03",
        "hour": "12:00",
        "sales": 239.85,
        "orders": 12,
        "rows": 53
      },
      {
        "date": "2026-04-03",
        "hour": "13:00",
        "sales": 44.2,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-04-03",
        "hour": "14:00",
        "sales": 151.2,
        "orders": 10,
        "rows": 39
      },
      {
        "date": "2026-04-04",
        "hour": "08:00",
        "sales": 4.9,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-04",
        "hour": "09:00",
        "sales": 203.65,
        "orders": 11,
        "rows": 53
      },
      {
        "date": "2026-04-04",
        "hour": "10:00",
        "sales": 379.92,
        "orders": 20,
        "rows": 96
      },
      {
        "date": "2026-04-04",
        "hour": "11:00",
        "sales": 446.71,
        "orders": 17,
        "rows": 100
      },
      {
        "date": "2026-04-04",
        "hour": "12:00",
        "sales": 289.11,
        "orders": 15,
        "rows": 66
      },
      {
        "date": "2026-04-04",
        "hour": "13:00",
        "sales": 239.55,
        "orders": 15,
        "rows": 59
      },
      {
        "date": "2026-04-04",
        "hour": "14:00",
        "sales": 207.25,
        "orders": 12,
        "rows": 51
      },
      {
        "date": "2026-04-04",
        "hour": "15:00",
        "sales": 110.3,
        "orders": 7,
        "rows": 30
      },
      {
        "date": "2026-04-04",
        "hour": "16:00",
        "sales": 54.55,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-04-04",
        "hour": "17:00",
        "sales": 32.45,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-04-07",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-07",
        "hour": "07:00",
        "sales": 15.0,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-07",
        "hour": "08:00",
        "sales": 11.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-07",
        "hour": "09:00",
        "sales": 32.5,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-04-07",
        "hour": "10:00",
        "sales": 46.0,
        "orders": 6,
        "rows": 10
      },
      {
        "date": "2026-04-07",
        "hour": "12:00",
        "sales": 66.0,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-04-07",
        "hour": "13:00",
        "sales": 169.7,
        "orders": 15,
        "rows": 41
      },
      {
        "date": "2026-04-07",
        "hour": "14:00",
        "sales": 18.0,
        "orders": 4,
        "rows": 6
      },
      {
        "date": "2026-04-07",
        "hour": "15:00",
        "sales": 84.0,
        "orders": 8,
        "rows": 19
      },
      {
        "date": "2026-04-07",
        "hour": "16:00",
        "sales": 84.5,
        "orders": 8,
        "rows": 18
      },
      {
        "date": "2026-04-07",
        "hour": "17:00",
        "sales": 104.0,
        "orders": 5,
        "rows": 23
      },
      {
        "date": "2026-04-08",
        "hour": "07:00",
        "sales": 18.0,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-04-08",
        "hour": "08:00",
        "sales": 28.0,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-04-08",
        "hour": "09:00",
        "sales": 118.5,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-04-08",
        "hour": "10:00",
        "sales": 89.0,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-04-08",
        "hour": "11:00",
        "sales": 105.5,
        "orders": 6,
        "rows": 27
      },
      {
        "date": "2026-04-08",
        "hour": "12:00",
        "sales": 173.5,
        "orders": 11,
        "rows": 41
      },
      {
        "date": "2026-04-08",
        "hour": "13:00",
        "sales": 221.0,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-04-08",
        "hour": "14:00",
        "sales": 58.0,
        "orders": 6,
        "rows": 13
      },
      {
        "date": "2026-04-08",
        "hour": "15:00",
        "sales": 87.0,
        "orders": 5,
        "rows": 21
      },
      {
        "date": "2026-04-08",
        "hour": "16:00",
        "sales": 99.5,
        "orders": 8,
        "rows": 20
      },
      {
        "date": "2026-04-08",
        "hour": "17:00",
        "sales": 41.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-09",
        "hour": "06:00",
        "sales": 13.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-09",
        "hour": "07:00",
        "sales": 23.5,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-04-09",
        "hour": "08:00",
        "sales": 85.0,
        "orders": 5,
        "rows": 21
      },
      {
        "date": "2026-04-09",
        "hour": "09:00",
        "sales": 59.0,
        "orders": 7,
        "rows": 12
      },
      {
        "date": "2026-04-09",
        "hour": "10:00",
        "sales": 119.0,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-04-09",
        "hour": "11:00",
        "sales": 138.0,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-04-09",
        "hour": "12:00",
        "sales": 131.5,
        "orders": 12,
        "rows": 28
      },
      {
        "date": "2026-04-09",
        "hour": "13:00",
        "sales": 121.0,
        "orders": 9,
        "rows": 26
      },
      {
        "date": "2026-04-09",
        "hour": "14:00",
        "sales": 20.2,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-04-09",
        "hour": "15:00",
        "sales": 192.5,
        "orders": 12,
        "rows": 42
      },
      {
        "date": "2026-04-09",
        "hour": "16:00",
        "sales": 72.0,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-04-09",
        "hour": "17:00",
        "sales": 32.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-10",
        "hour": "07:00",
        "sales": 55.0,
        "orders": 3,
        "rows": 3
      },
      {
        "date": "2026-04-10",
        "hour": "08:00",
        "sales": 54.0,
        "orders": 7,
        "rows": 8
      },
      {
        "date": "2026-04-10",
        "hour": "09:00",
        "sales": 87.5,
        "orders": 7,
        "rows": 25
      },
      {
        "date": "2026-04-10",
        "hour": "10:00",
        "sales": 142.0,
        "orders": 11,
        "rows": 38
      },
      {
        "date": "2026-04-10",
        "hour": "11:00",
        "sales": 90.5,
        "orders": 10,
        "rows": 20
      },
      {
        "date": "2026-04-10",
        "hour": "12:00",
        "sales": 56.5,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-04-10",
        "hour": "13:00",
        "sales": 111.5,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-04-10",
        "hour": "14:00",
        "sales": 180.5,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-04-10",
        "hour": "15:00",
        "sales": 125.0,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-04-10",
        "hour": "16:00",
        "sales": 33.0,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-04-10",
        "hour": "17:00",
        "sales": 63.5,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-04-11",
        "hour": "08:00",
        "sales": 83.5,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-04-11",
        "hour": "09:00",
        "sales": 181.0,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-04-11",
        "hour": "10:00",
        "sales": 61.0,
        "orders": 7,
        "rows": 15
      },
      {
        "date": "2026-04-11",
        "hour": "11:00",
        "sales": 201.0,
        "orders": 11,
        "rows": 42
      },
      {
        "date": "2026-04-11",
        "hour": "12:00",
        "sales": 220.0,
        "orders": 14,
        "rows": 45
      },
      {
        "date": "2026-04-11",
        "hour": "13:00",
        "sales": 285.5,
        "orders": 13,
        "rows": 57
      },
      {
        "date": "2026-04-11",
        "hour": "14:00",
        "sales": 155.0,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-04-11",
        "hour": "15:00",
        "sales": 155.0,
        "orders": 8,
        "rows": 33
      },
      {
        "date": "2026-04-11",
        "hour": "16:00",
        "sales": 72.5,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-04-12",
        "hour": "08:00",
        "sales": 189.0,
        "orders": 12,
        "rows": 46
      },
      {
        "date": "2026-04-12",
        "hour": "09:00",
        "sales": 245.5,
        "orders": 12,
        "rows": 54
      },
      {
        "date": "2026-04-12",
        "hour": "10:00",
        "sales": 142.0,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-04-12",
        "hour": "11:00",
        "sales": 273.0,
        "orders": 11,
        "rows": 48
      },
      {
        "date": "2026-04-12",
        "hour": "12:00",
        "sales": 346.0,
        "orders": 17,
        "rows": 69
      },
      {
        "date": "2026-04-12",
        "hour": "13:00",
        "sales": 337.0,
        "orders": 13,
        "rows": 67
      },
      {
        "date": "2026-04-12",
        "hour": "14:00",
        "sales": 230.5,
        "orders": 16,
        "rows": 54
      },
      {
        "date": "2026-04-12",
        "hour": "15:00",
        "sales": 239.0,
        "orders": 11,
        "rows": 41
      },
      {
        "date": "2026-04-12",
        "hour": "16:00",
        "sales": 69.0,
        "orders": 7,
        "rows": 17
      },
      {
        "date": "2026-04-12",
        "hour": "17:00",
        "sales": 14.5,
        "orders": 3,
        "rows": 4
      },
      {
        "date": "2026-04-13",
        "hour": "07:00",
        "sales": 81.5,
        "orders": 3,
        "rows": 20
      },
      {
        "date": "2026-04-13",
        "hour": "08:00",
        "sales": 82.0,
        "orders": 4,
        "rows": 23
      },
      {
        "date": "2026-04-13",
        "hour": "09:00",
        "sales": 19.0,
        "orders": 4,
        "rows": 4
      },
      {
        "date": "2026-04-13",
        "hour": "10:00",
        "sales": 87.0,
        "orders": 9,
        "rows": 17
      },
      {
        "date": "2026-04-13",
        "hour": "11:00",
        "sales": 166.5,
        "orders": 13,
        "rows": 40
      },
      {
        "date": "2026-04-13",
        "hour": "12:00",
        "sales": 103.0,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-04-13",
        "hour": "13:00",
        "sales": 109.6,
        "orders": 11,
        "rows": 28
      },
      {
        "date": "2026-04-13",
        "hour": "14:00",
        "sales": 70.0,
        "orders": 6,
        "rows": 16
      },
      {
        "date": "2026-04-13",
        "hour": "15:00",
        "sales": 105.0,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-04-13",
        "hour": "16:00",
        "sales": 160.5,
        "orders": 10,
        "rows": 36
      },
      {
        "date": "2026-04-13",
        "hour": "17:00",
        "sales": 3.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-04-13",
        "hour": "18:00",
        "sales": 24.0,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-04-14",
        "hour": "06:00",
        "sales": 68.5,
        "orders": 3,
        "rows": 14
      },
      {
        "date": "2026-04-14",
        "hour": "07:00",
        "sales": 24.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-14",
        "hour": "08:00",
        "sales": 35.0,
        "orders": 3,
        "rows": 13
      },
      {
        "date": "2026-04-14",
        "hour": "09:00",
        "sales": 42.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-04-14",
        "hour": "10:00",
        "sales": 146.0,
        "orders": 10,
        "rows": 32
      },
      {
        "date": "2026-04-14",
        "hour": "11:00",
        "sales": 125.5,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-04-14",
        "hour": "12:00",
        "sales": 148.0,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-04-14",
        "hour": "13:00",
        "sales": 136.5,
        "orders": 11,
        "rows": 27
      },
      {
        "date": "2026-04-14",
        "hour": "14:00",
        "sales": 148.0,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-04-14",
        "hour": "15:00",
        "sales": 42.5,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-04-14",
        "hour": "16:00",
        "sales": 20.0,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-04-14",
        "hour": "17:00",
        "sales": 61.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-04-15",
        "hour": "06:00",
        "sales": 31.0,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-04-15",
        "hour": "07:00",
        "sales": 34.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-04-15",
        "hour": "08:00",
        "sales": 28.5,
        "orders": 4,
        "rows": 9
      },
      {
        "date": "2026-04-15",
        "hour": "09:00",
        "sales": 143.5,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-04-15",
        "hour": "10:00",
        "sales": 58.5,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-04-15",
        "hour": "11:00",
        "sales": 171.0,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-04-15",
        "hour": "12:00",
        "sales": 183.5,
        "orders": 12,
        "rows": 41
      },
      {
        "date": "2026-04-15",
        "hour": "13:00",
        "sales": 153.7,
        "orders": 11,
        "rows": 31
      },
      {
        "date": "2026-04-15",
        "hour": "14:00",
        "sales": 106.8,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-04-15",
        "hour": "15:00",
        "sales": 70.5,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-04-15",
        "hour": "16:00",
        "sales": 105.0,
        "orders": 7,
        "rows": 21
      },
      {
        "date": "2026-04-15",
        "hour": "17:00",
        "sales": 86.0,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-04-16",
        "hour": "06:00",
        "sales": 16.0,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-04-16",
        "hour": "07:00",
        "sales": 14.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-16",
        "hour": "08:00",
        "sales": 118.5,
        "orders": 7,
        "rows": 27
      },
      {
        "date": "2026-04-16",
        "hour": "09:00",
        "sales": 120.0,
        "orders": 8,
        "rows": 26
      },
      {
        "date": "2026-04-16",
        "hour": "10:00",
        "sales": 165.0,
        "orders": 7,
        "rows": 35
      },
      {
        "date": "2026-04-16",
        "hour": "11:00",
        "sales": 76.5,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-04-16",
        "hour": "12:00",
        "sales": 216.0,
        "orders": 15,
        "rows": 41
      },
      {
        "date": "2026-04-16",
        "hour": "13:00",
        "sales": 172.0,
        "orders": 11,
        "rows": 44
      },
      {
        "date": "2026-04-16",
        "hour": "14:00",
        "sales": 127.0,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-04-16",
        "hour": "15:00",
        "sales": 120.8,
        "orders": 7,
        "rows": 28
      },
      {
        "date": "2026-04-16",
        "hour": "16:00",
        "sales": 3.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-04-16",
        "hour": "17:00",
        "sales": 19.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-17",
        "hour": "06:00",
        "sales": 39.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-04-17",
        "hour": "07:00",
        "sales": 53.5,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-04-17",
        "hour": "08:00",
        "sales": 28.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-17",
        "hour": "09:00",
        "sales": 120.5,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-04-17",
        "hour": "10:00",
        "sales": 127.5,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-04-17",
        "hour": "11:00",
        "sales": 144.5,
        "orders": 15,
        "rows": 31
      },
      {
        "date": "2026-04-17",
        "hour": "12:00",
        "sales": 240.5,
        "orders": 16,
        "rows": 47
      },
      {
        "date": "2026-04-17",
        "hour": "13:00",
        "sales": 104.5,
        "orders": 9,
        "rows": 23
      },
      {
        "date": "2026-04-17",
        "hour": "14:00",
        "sales": 234.5,
        "orders": 17,
        "rows": 54
      },
      {
        "date": "2026-04-17",
        "hour": "15:00",
        "sales": 110.0,
        "orders": 10,
        "rows": 27
      },
      {
        "date": "2026-04-17",
        "hour": "16:00",
        "sales": 38.0,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-04-18",
        "hour": "08:00",
        "sales": 52.5,
        "orders": 4,
        "rows": 15
      },
      {
        "date": "2026-04-18",
        "hour": "09:00",
        "sales": 83.5,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-04-18",
        "hour": "10:00",
        "sales": 279.0,
        "orders": 15,
        "rows": 63
      },
      {
        "date": "2026-04-18",
        "hour": "11:00",
        "sales": 136.5,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-04-18",
        "hour": "12:00",
        "sales": 212.0,
        "orders": 16,
        "rows": 51
      },
      {
        "date": "2026-04-18",
        "hour": "13:00",
        "sales": 158.0,
        "orders": 14,
        "rows": 33
      },
      {
        "date": "2026-04-18",
        "hour": "14:00",
        "sales": 203.0,
        "orders": 15,
        "rows": 44
      },
      {
        "date": "2026-04-18",
        "hour": "15:00",
        "sales": 97.5,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-04-18",
        "hour": "16:00",
        "sales": 10.5,
        "orders": 2,
        "rows": 2
      },
      {
        "date": "2026-04-19",
        "hour": "08:00",
        "sales": 70.0,
        "orders": 5,
        "rows": 18
      },
      {
        "date": "2026-04-19",
        "hour": "09:00",
        "sales": 106.0,
        "orders": 6,
        "rows": 25
      },
      {
        "date": "2026-04-19",
        "hour": "10:00",
        "sales": 295.5,
        "orders": 15,
        "rows": 61
      },
      {
        "date": "2026-04-19",
        "hour": "11:00",
        "sales": 189.0,
        "orders": 9,
        "rows": 37
      },
      {
        "date": "2026-04-19",
        "hour": "12:00",
        "sales": 226.0,
        "orders": 20,
        "rows": 50
      },
      {
        "date": "2026-04-19",
        "hour": "13:00",
        "sales": 105.5,
        "orders": 6,
        "rows": 22
      },
      {
        "date": "2026-04-19",
        "hour": "14:00",
        "sales": 180.5,
        "orders": 12,
        "rows": 38
      },
      {
        "date": "2026-04-19",
        "hour": "15:00",
        "sales": 162.0,
        "orders": 9,
        "rows": 31
      },
      {
        "date": "2026-04-19",
        "hour": "16:00",
        "sales": 34.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-04-19",
        "hour": "17:00",
        "sales": 14.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-04-20",
        "hour": "06:00",
        "sales": 10.0,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-04-20",
        "hour": "07:00",
        "sales": 10.5,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-04-20",
        "hour": "08:00",
        "sales": 51.5,
        "orders": 3,
        "rows": 15
      },
      {
        "date": "2026-04-20",
        "hour": "09:00",
        "sales": 65.0,
        "orders": 6,
        "rows": 17
      },
      {
        "date": "2026-04-20",
        "hour": "10:00",
        "sales": 59.5,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-04-20",
        "hour": "11:00",
        "sales": 307.0,
        "orders": 14,
        "rows": 61
      },
      {
        "date": "2026-04-20",
        "hour": "12:00",
        "sales": 109.0,
        "orders": 9,
        "rows": 24
      },
      {
        "date": "2026-04-20",
        "hour": "13:00",
        "sales": 163.0,
        "orders": 14,
        "rows": 38
      },
      {
        "date": "2026-04-20",
        "hour": "14:00",
        "sales": 61.0,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-04-20",
        "hour": "15:00",
        "sales": 105.0,
        "orders": 12,
        "rows": 24
      },
      {
        "date": "2026-04-20",
        "hour": "16:00",
        "sales": 59.5,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-04-21",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-21",
        "hour": "07:00",
        "sales": 15.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-04-21",
        "hour": "08:00",
        "sales": 17.5,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-04-21",
        "hour": "09:00",
        "sales": 91.5,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-04-21",
        "hour": "10:00",
        "sales": 133.0,
        "orders": 10,
        "rows": 32
      },
      {
        "date": "2026-04-21",
        "hour": "11:00",
        "sales": 72.5,
        "orders": 8,
        "rows": 16
      },
      {
        "date": "2026-04-21",
        "hour": "12:00",
        "sales": 141.3,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-04-21",
        "hour": "13:00",
        "sales": 153.0,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-04-21",
        "hour": "14:00",
        "sales": 133.8,
        "orders": 11,
        "rows": 31
      },
      {
        "date": "2026-04-21",
        "hour": "15:00",
        "sales": 89.0,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-04-21",
        "hour": "16:00",
        "sales": 90.0,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-04-21",
        "hour": "17:00",
        "sales": 55.5,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-04-22",
        "hour": "07:00",
        "sales": 61.5,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-04-22",
        "hour": "08:00",
        "sales": 101.0,
        "orders": 4,
        "rows": 25
      },
      {
        "date": "2026-04-22",
        "hour": "09:00",
        "sales": 80.0,
        "orders": 12,
        "rows": 19
      },
      {
        "date": "2026-04-22",
        "hour": "10:00",
        "sales": 80.5,
        "orders": 9,
        "rows": 15
      },
      {
        "date": "2026-04-22",
        "hour": "11:00",
        "sales": 41.5,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-04-22",
        "hour": "12:00",
        "sales": 30.0,
        "orders": 4,
        "rows": 6
      },
      {
        "date": "2026-04-22",
        "hour": "13:00",
        "sales": 76.5,
        "orders": 7,
        "rows": 17
      },
      {
        "date": "2026-04-22",
        "hour": "14:00",
        "sales": 83.5,
        "orders": 8,
        "rows": 18
      },
      {
        "date": "2026-04-22",
        "hour": "15:00",
        "sales": 105.5,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-04-22",
        "hour": "16:00",
        "sales": 171.0,
        "orders": 5,
        "rows": 21
      },
      {
        "date": "2026-04-22",
        "hour": "17:00",
        "sales": 14.0,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-04-22",
        "hour": "18:00",
        "sales": 28.2,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-04-23",
        "hour": "06:00",
        "sales": 9.0,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-04-23",
        "hour": "07:00",
        "sales": 17.5,
        "orders": 4,
        "rows": 7
      },
      {
        "date": "2026-04-23",
        "hour": "08:00",
        "sales": 3.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-04-23",
        "hour": "09:00",
        "sales": 67.5,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-04-23",
        "hour": "10:00",
        "sales": 66.5,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-04-23",
        "hour": "11:00",
        "sales": 64.0,
        "orders": 9,
        "rows": 13
      },
      {
        "date": "2026-04-23",
        "hour": "12:00",
        "sales": 100.0,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-04-23",
        "hour": "13:00",
        "sales": 66.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-04-23",
        "hour": "14:00",
        "sales": 223.0,
        "orders": 15,
        "rows": 48
      },
      {
        "date": "2026-04-23",
        "hour": "15:00",
        "sales": 79.0,
        "orders": 6,
        "rows": 16
      },
      {
        "date": "2026-04-23",
        "hour": "16:00",
        "sales": 42.5,
        "orders": 5,
        "rows": 8
      },
      {
        "date": "2026-04-23",
        "hour": "17:00",
        "sales": 37.5,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-04-23",
        "hour": "18:00",
        "sales": 37.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-04-24",
        "hour": "06:00",
        "sales": 13.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-24",
        "hour": "07:00",
        "sales": 24.5,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-04-24",
        "hour": "08:00",
        "sales": 54.4,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-04-24",
        "hour": "09:00",
        "sales": 173.0,
        "orders": 11,
        "rows": 41
      },
      {
        "date": "2026-04-24",
        "hour": "10:00",
        "sales": 168.0,
        "orders": 11,
        "rows": 24
      },
      {
        "date": "2026-04-24",
        "hour": "11:00",
        "sales": 110.0,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-04-24",
        "hour": "12:00",
        "sales": 287.5,
        "orders": 18,
        "rows": 48
      },
      {
        "date": "2026-04-24",
        "hour": "13:00",
        "sales": 171.3,
        "orders": 12,
        "rows": 31
      },
      {
        "date": "2026-04-24",
        "hour": "14:00",
        "sales": 258.0,
        "orders": 18,
        "rows": 53
      },
      {
        "date": "2026-04-24",
        "hour": "15:00",
        "sales": 54.5,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-04-24",
        "hour": "16:00",
        "sales": 103.0,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-04-24",
        "hour": "17:00",
        "sales": 20.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-04-26",
        "hour": "08:00",
        "sales": 82.7,
        "orders": 5,
        "rows": 20
      },
      {
        "date": "2026-04-26",
        "hour": "09:00",
        "sales": 32.5,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-04-26",
        "hour": "10:00",
        "sales": 176.5,
        "orders": 11,
        "rows": 39
      },
      {
        "date": "2026-04-26",
        "hour": "11:00",
        "sales": 243.0,
        "orders": 13,
        "rows": 55
      },
      {
        "date": "2026-04-26",
        "hour": "12:00",
        "sales": 440.0,
        "orders": 19,
        "rows": 88
      },
      {
        "date": "2026-04-26",
        "hour": "13:00",
        "sales": 222.0,
        "orders": 13,
        "rows": 52
      },
      {
        "date": "2026-04-26",
        "hour": "14:00",
        "sales": 94.0,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-04-26",
        "hour": "15:00",
        "sales": 81.5,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-04-26",
        "hour": "16:00",
        "sales": 17.0,
        "orders": 4,
        "rows": 4
      },
      {
        "date": "2026-04-27",
        "hour": "08:00",
        "sales": 28.6,
        "orders": 1,
        "rows": 7
      },
      {
        "date": "2026-04-27",
        "hour": "09:00",
        "sales": 163.16,
        "orders": 10,
        "rows": 49
      },
      {
        "date": "2026-04-27",
        "hour": "10:00",
        "sales": 82.05,
        "orders": 4,
        "rows": 17
      },
      {
        "date": "2026-04-27",
        "hour": "11:00",
        "sales": 217.6,
        "orders": 12,
        "rows": 54
      },
      {
        "date": "2026-04-27",
        "hour": "12:00",
        "sales": 358.35,
        "orders": 19,
        "rows": 85
      },
      {
        "date": "2026-04-27",
        "hour": "13:00",
        "sales": 392.75,
        "orders": 20,
        "rows": 91
      },
      {
        "date": "2026-04-27",
        "hour": "14:00",
        "sales": 225.65,
        "orders": 13,
        "rows": 58
      },
      {
        "date": "2026-04-27",
        "hour": "15:00",
        "sales": 24.55,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-04-28",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-04-28",
        "hour": "07:00",
        "sales": 35.0,
        "orders": 2,
        "rows": 10
      },
      {
        "date": "2026-04-28",
        "hour": "08:00",
        "sales": 50.0,
        "orders": 3,
        "rows": 14
      },
      {
        "date": "2026-04-28",
        "hour": "09:00",
        "sales": 151.0,
        "orders": 6,
        "rows": 32
      },
      {
        "date": "2026-04-28",
        "hour": "10:00",
        "sales": 85.5,
        "orders": 8,
        "rows": 20
      },
      {
        "date": "2026-04-28",
        "hour": "11:00",
        "sales": 21.5,
        "orders": 5,
        "rows": 6
      },
      {
        "date": "2026-04-28",
        "hour": "12:00",
        "sales": 134.0,
        "orders": 9,
        "rows": 29
      },
      {
        "date": "2026-04-28",
        "hour": "13:00",
        "sales": 123.5,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-04-28",
        "hour": "14:00",
        "sales": 116.5,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-04-28",
        "hour": "15:00",
        "sales": 98.5,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-04-28",
        "hour": "16:00",
        "sales": 22.5,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-04-28",
        "hour": "17:00",
        "sales": 37.5,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-04-29",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-04-29",
        "hour": "07:00",
        "sales": 66.0,
        "orders": 4,
        "rows": 18
      },
      {
        "date": "2026-04-29",
        "hour": "08:00",
        "sales": 24.0,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-04-29",
        "hour": "09:00",
        "sales": 79.5,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-04-29",
        "hour": "10:00",
        "sales": 134.0,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-04-29",
        "hour": "11:00",
        "sales": 121.5,
        "orders": 6,
        "rows": 25
      },
      {
        "date": "2026-04-29",
        "hour": "12:00",
        "sales": 43.0,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-04-29",
        "hour": "13:00",
        "sales": 132.5,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-04-29",
        "hour": "14:00",
        "sales": 47.5,
        "orders": 6,
        "rows": 10
      },
      {
        "date": "2026-04-29",
        "hour": "15:00",
        "sales": 133.0,
        "orders": 7,
        "rows": 29
      },
      {
        "date": "2026-04-29",
        "hour": "16:00",
        "sales": 94.0,
        "orders": 7,
        "rows": 17
      },
      {
        "date": "2026-04-29",
        "hour": "17:00",
        "sales": 18.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-04-29",
        "hour": "18:00",
        "sales": 35.0,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-04-30",
        "hour": "06:00",
        "sales": 38.0,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-04-30",
        "hour": "07:00",
        "sales": 19.5,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-04-30",
        "hour": "08:00",
        "sales": 12.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-04-30",
        "hour": "09:00",
        "sales": 108.5,
        "orders": 7,
        "rows": 29
      },
      {
        "date": "2026-04-30",
        "hour": "10:00",
        "sales": 32.0,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-04-30",
        "hour": "11:00",
        "sales": 78.5,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-04-30",
        "hour": "12:00",
        "sales": 169.5,
        "orders": 15,
        "rows": 36
      },
      {
        "date": "2026-04-30",
        "hour": "13:00",
        "sales": 40.9,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-04-30",
        "hour": "14:00",
        "sales": 57.0,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-04-30",
        "hour": "15:00",
        "sales": 54.0,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-04-30",
        "hour": "16:00",
        "sales": 96.12,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-05-01",
        "hour": "06:00",
        "sales": 12.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-05-01",
        "hour": "07:00",
        "sales": 37.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-05-01",
        "hour": "08:00",
        "sales": 68.0,
        "orders": 5,
        "rows": 18
      },
      {
        "date": "2026-05-01",
        "hour": "09:00",
        "sales": 198.5,
        "orders": 12,
        "rows": 39
      },
      {
        "date": "2026-05-01",
        "hour": "10:00",
        "sales": 201.0,
        "orders": 10,
        "rows": 47
      },
      {
        "date": "2026-05-01",
        "hour": "11:00",
        "sales": 136.0,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-05-01",
        "hour": "12:00",
        "sales": 268.0,
        "orders": 18,
        "rows": 49
      },
      {
        "date": "2026-05-01",
        "hour": "13:00",
        "sales": 242.0,
        "orders": 12,
        "rows": 48
      },
      {
        "date": "2026-05-01",
        "hour": "14:00",
        "sales": 193.5,
        "orders": 13,
        "rows": 38
      },
      {
        "date": "2026-05-01",
        "hour": "15:00",
        "sales": 67.5,
        "orders": 7,
        "rows": 14
      },
      {
        "date": "2026-05-01",
        "hour": "16:00",
        "sales": 98.5,
        "orders": 3,
        "rows": 21
      },
      {
        "date": "2026-05-02",
        "hour": "08:00",
        "sales": 94.5,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-05-02",
        "hour": "09:00",
        "sales": 106.0,
        "orders": 9,
        "rows": 23
      },
      {
        "date": "2026-05-02",
        "hour": "10:00",
        "sales": 466.0,
        "orders": 25,
        "rows": 103
      },
      {
        "date": "2026-05-02",
        "hour": "11:00",
        "sales": 216.5,
        "orders": 12,
        "rows": 45
      },
      {
        "date": "2026-05-02",
        "hour": "12:00",
        "sales": 234.5,
        "orders": 11,
        "rows": 50
      },
      {
        "date": "2026-05-02",
        "hour": "13:00",
        "sales": 101.5,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-05-02",
        "hour": "14:00",
        "sales": 269.0,
        "orders": 17,
        "rows": 58
      },
      {
        "date": "2026-05-02",
        "hour": "15:00",
        "sales": 191.5,
        "orders": 21,
        "rows": 44
      },
      {
        "date": "2026-05-02",
        "hour": "16:00",
        "sales": 32.5,
        "orders": 6,
        "rows": 9
      },
      {
        "date": "2026-05-03",
        "hour": "08:00",
        "sales": 16.5,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-03",
        "hour": "09:00",
        "sales": 28.0,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-05-03",
        "hour": "10:00",
        "sales": 341.0,
        "orders": 12,
        "rows": 59
      },
      {
        "date": "2026-05-03",
        "hour": "11:00",
        "sales": 171.0,
        "orders": 9,
        "rows": 35
      },
      {
        "date": "2026-05-03",
        "hour": "12:00",
        "sales": 375.5,
        "orders": 16,
        "rows": 67
      },
      {
        "date": "2026-05-03",
        "hour": "13:00",
        "sales": 244.5,
        "orders": 15,
        "rows": 40
      },
      {
        "date": "2026-05-03",
        "hour": "14:00",
        "sales": 134.5,
        "orders": 8,
        "rows": 29
      },
      {
        "date": "2026-05-03",
        "hour": "15:00",
        "sales": 150.5,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-05-03",
        "hour": "16:00",
        "sales": 52.0,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-05-03",
        "hour": "17:00",
        "sales": 157.0,
        "orders": 7,
        "rows": 32
      },
      {
        "date": "2026-05-04",
        "hour": "08:00",
        "sales": 21.0,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-05-04",
        "hour": "09:00",
        "sales": 18.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-05-04",
        "hour": "10:00",
        "sales": 70.5,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-05-04",
        "hour": "11:00",
        "sales": 95.0,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-05-04",
        "hour": "12:00",
        "sales": 143.0,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-05-04",
        "hour": "13:00",
        "sales": 147.0,
        "orders": 14,
        "rows": 35
      },
      {
        "date": "2026-05-04",
        "hour": "14:00",
        "sales": 93.5,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-05-04",
        "hour": "15:00",
        "sales": 64.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-05-04",
        "hour": "16:00",
        "sales": 40.5,
        "orders": 4,
        "rows": 8
      },
      {
        "date": "2026-05-04",
        "hour": "17:00",
        "sales": 13.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-05-04",
        "hour": "18:00",
        "sales": 10.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-05",
        "hour": "06:00",
        "sales": 14.5,
        "orders": 2,
        "rows": 5
      },
      {
        "date": "2026-05-05",
        "hour": "07:00",
        "sales": 145.5,
        "orders": 6,
        "rows": 24
      },
      {
        "date": "2026-05-05",
        "hour": "09:00",
        "sales": 27.0,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-05",
        "hour": "10:00",
        "sales": 46.5,
        "orders": 5,
        "rows": 16
      },
      {
        "date": "2026-05-05",
        "hour": "11:00",
        "sales": 43.5,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-05-05",
        "hour": "12:00",
        "sales": 94.0,
        "orders": 11,
        "rows": 21
      },
      {
        "date": "2026-05-05",
        "hour": "13:00",
        "sales": 142.5,
        "orders": 14,
        "rows": 28
      },
      {
        "date": "2026-05-05",
        "hour": "14:00",
        "sales": 102.5,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-05-05",
        "hour": "15:00",
        "sales": 94.5,
        "orders": 8,
        "rows": 21
      },
      {
        "date": "2026-05-05",
        "hour": "16:00",
        "sales": 45.0,
        "orders": 7,
        "rows": 12
      },
      {
        "date": "2026-05-05",
        "hour": "17:00",
        "sales": 36.0,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-05-06",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-06",
        "hour": "07:00",
        "sales": 50.0,
        "orders": 2,
        "rows": 13
      },
      {
        "date": "2026-05-06",
        "hour": "08:00",
        "sales": 86.0,
        "orders": 2,
        "rows": 20
      },
      {
        "date": "2026-05-06",
        "hour": "09:00",
        "sales": 157.5,
        "orders": 8,
        "rows": 41
      },
      {
        "date": "2026-05-06",
        "hour": "10:00",
        "sales": 95.5,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-05-06",
        "hour": "11:00",
        "sales": 33.0,
        "orders": 4,
        "rows": 8
      },
      {
        "date": "2026-05-06",
        "hour": "12:00",
        "sales": 174.0,
        "orders": 12,
        "rows": 28
      },
      {
        "date": "2026-05-06",
        "hour": "13:00",
        "sales": 38.5,
        "orders": 6,
        "rows": 10
      },
      {
        "date": "2026-05-06",
        "hour": "14:00",
        "sales": 36.5,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-05-06",
        "hour": "15:00",
        "sales": 56.5,
        "orders": 6,
        "rows": 13
      },
      {
        "date": "2026-05-06",
        "hour": "16:00",
        "sales": 98.5,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-05-06",
        "hour": "17:00",
        "sales": 13.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-07",
        "hour": "06:00",
        "sales": 12.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-05-07",
        "hour": "07:00",
        "sales": 30.5,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-05-07",
        "hour": "08:00",
        "sales": 206.0,
        "orders": 10,
        "rows": 47
      },
      {
        "date": "2026-05-07",
        "hour": "09:00",
        "sales": 62.0,
        "orders": 7,
        "rows": 17
      },
      {
        "date": "2026-05-07",
        "hour": "10:00",
        "sales": 61.5,
        "orders": 7,
        "rows": 16
      },
      {
        "date": "2026-05-07",
        "hour": "11:00",
        "sales": 158.5,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-05-07",
        "hour": "12:00",
        "sales": 148.0,
        "orders": 12,
        "rows": 32
      },
      {
        "date": "2026-05-07",
        "hour": "13:00",
        "sales": 129.5,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-05-07",
        "hour": "14:00",
        "sales": 199.5,
        "orders": 14,
        "rows": 40
      },
      {
        "date": "2026-05-07",
        "hour": "15:00",
        "sales": 101.0,
        "orders": 9,
        "rows": 20
      },
      {
        "date": "2026-05-07",
        "hour": "16:00",
        "sales": 65.0,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-05-07",
        "hour": "17:00",
        "sales": 118.5,
        "orders": 6,
        "rows": 21
      },
      {
        "date": "2026-05-08",
        "hour": "06:00",
        "sales": 9.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-08",
        "hour": "07:00",
        "sales": 13.5,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-05-08",
        "hour": "08:00",
        "sales": 67.0,
        "orders": 3,
        "rows": 16
      },
      {
        "date": "2026-05-08",
        "hour": "09:00",
        "sales": 69.5,
        "orders": 10,
        "rows": 23
      },
      {
        "date": "2026-05-08",
        "hour": "10:00",
        "sales": 218.0,
        "orders": 13,
        "rows": 52
      },
      {
        "date": "2026-05-08",
        "hour": "11:00",
        "sales": 109.0,
        "orders": 7,
        "rows": 25
      },
      {
        "date": "2026-05-08",
        "hour": "12:00",
        "sales": 276.0,
        "orders": 14,
        "rows": 47
      },
      {
        "date": "2026-05-08",
        "hour": "13:00",
        "sales": 186.2,
        "orders": 13,
        "rows": 41
      },
      {
        "date": "2026-05-08",
        "hour": "14:00",
        "sales": 159.4,
        "orders": 10,
        "rows": 33
      },
      {
        "date": "2026-05-08",
        "hour": "15:00",
        "sales": 163.0,
        "orders": 8,
        "rows": 33
      },
      {
        "date": "2026-05-08",
        "hour": "16:00",
        "sales": 88.0,
        "orders": 5,
        "rows": 17
      },
      {
        "date": "2026-05-08",
        "hour": "17:00",
        "sales": 27.0,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-05-09",
        "hour": "07:00",
        "sales": 21.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-05-09",
        "hour": "08:00",
        "sales": 113.5,
        "orders": 7,
        "rows": 26
      },
      {
        "date": "2026-05-09",
        "hour": "09:00",
        "sales": 260.0,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-05-09",
        "hour": "10:00",
        "sales": 269.0,
        "orders": 14,
        "rows": 52
      },
      {
        "date": "2026-05-09",
        "hour": "11:00",
        "sales": 357.0,
        "orders": 20,
        "rows": 77
      },
      {
        "date": "2026-05-09",
        "hour": "12:00",
        "sales": 255.5,
        "orders": 15,
        "rows": 54
      },
      {
        "date": "2026-05-09",
        "hour": "13:00",
        "sales": 193.0,
        "orders": 13,
        "rows": 42
      },
      {
        "date": "2026-05-09",
        "hour": "14:00",
        "sales": 221.5,
        "orders": 21,
        "rows": 43
      },
      {
        "date": "2026-05-09",
        "hour": "15:00",
        "sales": 143.5,
        "orders": 7,
        "rows": 31
      },
      {
        "date": "2026-05-09",
        "hour": "16:00",
        "sales": 108.0,
        "orders": 9,
        "rows": 25
      },
      {
        "date": "2026-05-09",
        "hour": "17:00",
        "sales": 11.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-05-10",
        "hour": "07:00",
        "sales": 10.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-10",
        "hour": "08:00",
        "sales": 286.0,
        "orders": 14,
        "rows": 63
      },
      {
        "date": "2026-05-10",
        "hour": "09:00",
        "sales": 199.5,
        "orders": 12,
        "rows": 44
      },
      {
        "date": "2026-05-10",
        "hour": "10:00",
        "sales": 250.0,
        "orders": 16,
        "rows": 53
      },
      {
        "date": "2026-05-10",
        "hour": "11:00",
        "sales": 344.0,
        "orders": 19,
        "rows": 72
      },
      {
        "date": "2026-05-10",
        "hour": "12:00",
        "sales": 285.0,
        "orders": 17,
        "rows": 57
      },
      {
        "date": "2026-05-10",
        "hour": "13:00",
        "sales": 347.5,
        "orders": 18,
        "rows": 67
      },
      {
        "date": "2026-05-10",
        "hour": "14:00",
        "sales": 165.0,
        "orders": 7,
        "rows": 32
      },
      {
        "date": "2026-05-10",
        "hour": "15:00",
        "sales": 193.5,
        "orders": 10,
        "rows": 38
      },
      {
        "date": "2026-05-10",
        "hour": "16:00",
        "sales": 151.5,
        "orders": 7,
        "rows": 23
      },
      {
        "date": "2026-05-10",
        "hour": "17:00",
        "sales": 51.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-05-11",
        "hour": "07:00",
        "sales": 16.5,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-11",
        "hour": "08:00",
        "sales": 80.5,
        "orders": 3,
        "rows": 21
      },
      {
        "date": "2026-05-11",
        "hour": "09:00",
        "sales": 43.5,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-05-11",
        "hour": "10:00",
        "sales": 89.0,
        "orders": 6,
        "rows": 16
      },
      {
        "date": "2026-05-11",
        "hour": "11:00",
        "sales": 55.5,
        "orders": 7,
        "rows": 16
      },
      {
        "date": "2026-05-11",
        "hour": "12:00",
        "sales": 97.5,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-05-11",
        "hour": "13:00",
        "sales": 94.5,
        "orders": 11,
        "rows": 18
      },
      {
        "date": "2026-05-11",
        "hour": "14:00",
        "sales": 116.0,
        "orders": 7,
        "rows": 25
      },
      {
        "date": "2026-05-11",
        "hour": "15:00",
        "sales": 47.5,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-05-11",
        "hour": "16:00",
        "sales": 21.0,
        "orders": 3,
        "rows": 4
      },
      {
        "date": "2026-05-11",
        "hour": "17:00",
        "sales": 28.5,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-05-12",
        "hour": "06:00",
        "sales": 51.0,
        "orders": 2,
        "rows": 12
      },
      {
        "date": "2026-05-12",
        "hour": "07:00",
        "sales": 33.0,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-05-12",
        "hour": "08:00",
        "sales": 10.0,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-05-12",
        "hour": "09:00",
        "sales": 189.5,
        "orders": 9,
        "rows": 41
      },
      {
        "date": "2026-05-12",
        "hour": "10:00",
        "sales": 40.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-05-12",
        "hour": "11:00",
        "sales": 52.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-05-12",
        "hour": "12:00",
        "sales": 113.5,
        "orders": 14,
        "rows": 26
      },
      {
        "date": "2026-05-12",
        "hour": "13:00",
        "sales": 51.5,
        "orders": 6,
        "rows": 11
      },
      {
        "date": "2026-05-12",
        "hour": "14:00",
        "sales": 62.0,
        "orders": 6,
        "rows": 12
      },
      {
        "date": "2026-05-12",
        "hour": "15:00",
        "sales": 66.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-05-12",
        "hour": "16:00",
        "sales": 116.5,
        "orders": 8,
        "rows": 17
      },
      {
        "date": "2026-05-12",
        "hour": "17:00",
        "sales": 40.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-05-13",
        "hour": "06:00",
        "sales": 7.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-13",
        "hour": "07:00",
        "sales": 40.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-05-13",
        "hour": "08:00",
        "sales": 79.7,
        "orders": 5,
        "rows": 22
      },
      {
        "date": "2026-05-13",
        "hour": "09:00",
        "sales": 181.5,
        "orders": 13,
        "rows": 50
      },
      {
        "date": "2026-05-13",
        "hour": "10:00",
        "sales": 48.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-05-13",
        "hour": "11:00",
        "sales": 120.5,
        "orders": 10,
        "rows": 26
      },
      {
        "date": "2026-05-13",
        "hour": "12:00",
        "sales": 82.0,
        "orders": 7,
        "rows": 19
      },
      {
        "date": "2026-05-13",
        "hour": "13:00",
        "sales": 102.0,
        "orders": 7,
        "rows": 13
      },
      {
        "date": "2026-05-13",
        "hour": "14:00",
        "sales": 59.5,
        "orders": 8,
        "rows": 11
      },
      {
        "date": "2026-05-13",
        "hour": "15:00",
        "sales": 15.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-05-13",
        "hour": "16:00",
        "sales": 80.7,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-05-14",
        "hour": "06:00",
        "sales": 12.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-14",
        "hour": "07:00",
        "sales": 38.0,
        "orders": 6,
        "rows": 12
      },
      {
        "date": "2026-05-14",
        "hour": "09:00",
        "sales": 198.0,
        "orders": 12,
        "rows": 49
      },
      {
        "date": "2026-05-14",
        "hour": "10:00",
        "sales": 27.0,
        "orders": 3,
        "rows": 7
      },
      {
        "date": "2026-05-14",
        "hour": "11:00",
        "sales": 217.5,
        "orders": 10,
        "rows": 37
      },
      {
        "date": "2026-05-14",
        "hour": "12:00",
        "sales": 96.0,
        "orders": 9,
        "rows": 21
      },
      {
        "date": "2026-05-14",
        "hour": "13:00",
        "sales": 102.0,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-05-14",
        "hour": "14:00",
        "sales": 105.5,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-05-14",
        "hour": "15:00",
        "sales": 71.5,
        "orders": 7,
        "rows": 14
      },
      {
        "date": "2026-05-14",
        "hour": "16:00",
        "sales": 40.0,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-05-14",
        "hour": "17:00",
        "sales": 37.0,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-05-15",
        "hour": "07:00",
        "sales": 54.5,
        "orders": 3,
        "rows": 14
      },
      {
        "date": "2026-05-15",
        "hour": "08:00",
        "sales": 93.0,
        "orders": 7,
        "rows": 24
      },
      {
        "date": "2026-05-15",
        "hour": "09:00",
        "sales": 89.0,
        "orders": 7,
        "rows": 27
      },
      {
        "date": "2026-05-15",
        "hour": "10:00",
        "sales": 69.0,
        "orders": 5,
        "rows": 19
      },
      {
        "date": "2026-05-15",
        "hour": "11:00",
        "sales": 168.0,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-05-15",
        "hour": "12:00",
        "sales": 31.5,
        "orders": 4,
        "rows": 6
      },
      {
        "date": "2026-05-15",
        "hour": "13:00",
        "sales": 216.5,
        "orders": 13,
        "rows": 41
      },
      {
        "date": "2026-05-15",
        "hour": "14:00",
        "sales": 164.0,
        "orders": 11,
        "rows": 35
      },
      {
        "date": "2026-05-15",
        "hour": "15:00",
        "sales": 304.0,
        "orders": 23,
        "rows": 63
      },
      {
        "date": "2026-05-15",
        "hour": "16:00",
        "sales": 49.0,
        "orders": 7,
        "rows": 12
      },
      {
        "date": "2026-05-15",
        "hour": "17:00",
        "sales": 39.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-05-16",
        "hour": "07:00",
        "sales": 3.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-05-16",
        "hour": "08:00",
        "sales": 51.5,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-05-16",
        "hour": "09:00",
        "sales": 140.5,
        "orders": 9,
        "rows": 31
      },
      {
        "date": "2026-05-16",
        "hour": "10:00",
        "sales": 217.0,
        "orders": 15,
        "rows": 49
      },
      {
        "date": "2026-05-16",
        "hour": "11:00",
        "sales": 293.0,
        "orders": 15,
        "rows": 63
      },
      {
        "date": "2026-05-16",
        "hour": "12:00",
        "sales": 222.5,
        "orders": 14,
        "rows": 38
      },
      {
        "date": "2026-05-16",
        "hour": "13:00",
        "sales": 261.5,
        "orders": 16,
        "rows": 52
      },
      {
        "date": "2026-05-16",
        "hour": "14:00",
        "sales": 223.0,
        "orders": 14,
        "rows": 45
      },
      {
        "date": "2026-05-16",
        "hour": "15:00",
        "sales": 90.5,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-05-16",
        "hour": "16:00",
        "sales": 109.4,
        "orders": 6,
        "rows": 21
      },
      {
        "date": "2026-05-16",
        "hour": "17:00",
        "sales": 30.5,
        "orders": 3,
        "rows": 8
      },
      {
        "date": "2026-05-17",
        "hour": "08:00",
        "sales": 21.0,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-17",
        "hour": "09:00",
        "sales": 61.0,
        "orders": 4,
        "rows": 15
      },
      {
        "date": "2026-05-17",
        "hour": "10:00",
        "sales": 188.5,
        "orders": 14,
        "rows": 41
      },
      {
        "date": "2026-05-17",
        "hour": "11:00",
        "sales": 295.5,
        "orders": 13,
        "rows": 55
      },
      {
        "date": "2026-05-17",
        "hour": "12:00",
        "sales": 360.0,
        "orders": 19,
        "rows": 73
      },
      {
        "date": "2026-05-17",
        "hour": "13:00",
        "sales": 440.0,
        "orders": 25,
        "rows": 91
      },
      {
        "date": "2026-05-17",
        "hour": "14:00",
        "sales": 144.5,
        "orders": 12,
        "rows": 29
      },
      {
        "date": "2026-05-17",
        "hour": "15:00",
        "sales": 31.0,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-05-18",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-18",
        "hour": "07:00",
        "sales": 9.0,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-05-18",
        "hour": "08:00",
        "sales": 47.0,
        "orders": 3,
        "rows": 11
      },
      {
        "date": "2026-05-18",
        "hour": "09:00",
        "sales": 107.5,
        "orders": 10,
        "rows": 26
      },
      {
        "date": "2026-05-18",
        "hour": "10:00",
        "sales": 109.5,
        "orders": 11,
        "rows": 24
      },
      {
        "date": "2026-05-18",
        "hour": "11:00",
        "sales": 111.0,
        "orders": 6,
        "rows": 24
      },
      {
        "date": "2026-05-18",
        "hour": "12:00",
        "sales": 164.5,
        "orders": 14,
        "rows": 33
      },
      {
        "date": "2026-05-18",
        "hour": "13:00",
        "sales": 112.0,
        "orders": 12,
        "rows": 27
      },
      {
        "date": "2026-05-18",
        "hour": "14:00",
        "sales": 72.0,
        "orders": 8,
        "rows": 16
      },
      {
        "date": "2026-05-18",
        "hour": "15:00",
        "sales": 164.0,
        "orders": 12,
        "rows": 37
      },
      {
        "date": "2026-05-18",
        "hour": "16:00",
        "sales": 48.5,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-05-18",
        "hour": "17:00",
        "sales": 10.1,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-05-19",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-05-19",
        "hour": "07:00",
        "sales": 37.5,
        "orders": 2,
        "rows": 9
      },
      {
        "date": "2026-05-19",
        "hour": "08:00",
        "sales": 55.5,
        "orders": 4,
        "rows": 14
      },
      {
        "date": "2026-05-19",
        "hour": "09:00",
        "sales": 42.0,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-05-19",
        "hour": "10:00",
        "sales": 65.5,
        "orders": 6,
        "rows": 15
      },
      {
        "date": "2026-05-19",
        "hour": "11:00",
        "sales": 197.0,
        "orders": 12,
        "rows": 38
      },
      {
        "date": "2026-05-19",
        "hour": "12:00",
        "sales": 98.0,
        "orders": 7,
        "rows": 20
      },
      {
        "date": "2026-05-19",
        "hour": "13:00",
        "sales": 187.5,
        "orders": 14,
        "rows": 41
      },
      {
        "date": "2026-05-19",
        "hour": "14:00",
        "sales": 86.5,
        "orders": 10,
        "rows": 17
      },
      {
        "date": "2026-05-19",
        "hour": "15:00",
        "sales": 74.5,
        "orders": 6,
        "rows": 16
      },
      {
        "date": "2026-05-19",
        "hour": "16:00",
        "sales": 25.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-05-19",
        "hour": "17:00",
        "sales": 52.2,
        "orders": 6,
        "rows": 12
      },
      {
        "date": "2026-05-20",
        "hour": "06:00",
        "sales": 9.1,
        "orders": 2,
        "rows": 4
      },
      {
        "date": "2026-05-20",
        "hour": "07:00",
        "sales": 49.0,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-05-20",
        "hour": "08:00",
        "sales": 19.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-05-20",
        "hour": "09:00",
        "sales": 68.5,
        "orders": 7,
        "rows": 17
      },
      {
        "date": "2026-05-20",
        "hour": "10:00",
        "sales": 43.0,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-05-20",
        "hour": "11:00",
        "sales": 142.5,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-05-20",
        "hour": "12:00",
        "sales": 106.0,
        "orders": 9,
        "rows": 21
      },
      {
        "date": "2026-05-20",
        "hour": "13:00",
        "sales": 122.0,
        "orders": 11,
        "rows": 23
      },
      {
        "date": "2026-05-20",
        "hour": "14:00",
        "sales": 157.5,
        "orders": 13,
        "rows": 35
      },
      {
        "date": "2026-05-20",
        "hour": "15:00",
        "sales": 62.0,
        "orders": 8,
        "rows": 13
      },
      {
        "date": "2026-05-20",
        "hour": "16:00",
        "sales": 71.5,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-05-20",
        "hour": "17:00",
        "sales": 56.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-05-20",
        "hour": "18:00",
        "sales": 12.0,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-21",
        "hour": "06:00",
        "sales": 16.5,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-05-21",
        "hour": "07:00",
        "sales": 13.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-05-21",
        "hour": "08:00",
        "sales": 79.0,
        "orders": 6,
        "rows": 11
      },
      {
        "date": "2026-05-21",
        "hour": "09:00",
        "sales": 77.5,
        "orders": 9,
        "rows": 18
      },
      {
        "date": "2026-05-21",
        "hour": "10:00",
        "sales": 231.0,
        "orders": 7,
        "rows": 38
      },
      {
        "date": "2026-05-21",
        "hour": "11:00",
        "sales": 87.0,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-05-21",
        "hour": "12:00",
        "sales": 156.0,
        "orders": 15,
        "rows": 32
      },
      {
        "date": "2026-05-21",
        "hour": "13:00",
        "sales": 222.0,
        "orders": 13,
        "rows": 47
      },
      {
        "date": "2026-05-21",
        "hour": "14:00",
        "sales": 118.5,
        "orders": 7,
        "rows": 25
      },
      {
        "date": "2026-05-21",
        "hour": "15:00",
        "sales": 68.5,
        "orders": 5,
        "rows": 14
      },
      {
        "date": "2026-05-21",
        "hour": "16:00",
        "sales": 23.5,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-05-21",
        "hour": "17:00",
        "sales": 114.5,
        "orders": 6,
        "rows": 25
      },
      {
        "date": "2026-05-22",
        "hour": "07:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-22",
        "hour": "08:00",
        "sales": 40.5,
        "orders": 2,
        "rows": 10
      },
      {
        "date": "2026-05-22",
        "hour": "09:00",
        "sales": 128.5,
        "orders": 12,
        "rows": 30
      },
      {
        "date": "2026-05-22",
        "hour": "10:00",
        "sales": 164.0,
        "orders": 9,
        "rows": 27
      },
      {
        "date": "2026-05-22",
        "hour": "11:00",
        "sales": 176.0,
        "orders": 11,
        "rows": 38
      },
      {
        "date": "2026-05-22",
        "hour": "12:00",
        "sales": 49.0,
        "orders": 7,
        "rows": 11
      },
      {
        "date": "2026-05-22",
        "hour": "13:00",
        "sales": 239.0,
        "orders": 13,
        "rows": 53
      },
      {
        "date": "2026-05-22",
        "hour": "14:00",
        "sales": 182.5,
        "orders": 12,
        "rows": 41
      },
      {
        "date": "2026-05-22",
        "hour": "15:00",
        "sales": 179.5,
        "orders": 16,
        "rows": 39
      },
      {
        "date": "2026-05-22",
        "hour": "16:00",
        "sales": 21.5,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-05-23",
        "hour": "05:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-05-23",
        "hour": "08:00",
        "sales": 132.0,
        "orders": 4,
        "rows": 20
      },
      {
        "date": "2026-05-23",
        "hour": "09:00",
        "sales": 128.0,
        "orders": 12,
        "rows": 27
      },
      {
        "date": "2026-05-23",
        "hour": "10:00",
        "sales": 268.0,
        "orders": 14,
        "rows": 48
      },
      {
        "date": "2026-05-23",
        "hour": "11:00",
        "sales": 203.5,
        "orders": 12,
        "rows": 47
      },
      {
        "date": "2026-05-23",
        "hour": "12:00",
        "sales": 146.0,
        "orders": 9,
        "rows": 31
      },
      {
        "date": "2026-05-23",
        "hour": "13:00",
        "sales": 294.4,
        "orders": 22,
        "rows": 66
      },
      {
        "date": "2026-05-23",
        "hour": "14:00",
        "sales": 131.0,
        "orders": 7,
        "rows": 28
      },
      {
        "date": "2026-05-23",
        "hour": "15:00",
        "sales": 414.5,
        "orders": 22,
        "rows": 90
      },
      {
        "date": "2026-05-23",
        "hour": "16:00",
        "sales": 94.5,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-05-23",
        "hour": "17:00",
        "sales": 3.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-05-24",
        "hour": "08:00",
        "sales": 57.5,
        "orders": 3,
        "rows": 13
      },
      {
        "date": "2026-05-24",
        "hour": "09:00",
        "sales": 170.0,
        "orders": 9,
        "rows": 38
      },
      {
        "date": "2026-05-24",
        "hour": "10:00",
        "sales": 144.0,
        "orders": 8,
        "rows": 37
      },
      {
        "date": "2026-05-24",
        "hour": "11:00",
        "sales": 275.5,
        "orders": 12,
        "rows": 46
      },
      {
        "date": "2026-05-24",
        "hour": "12:00",
        "sales": 214.5,
        "orders": 11,
        "rows": 38
      },
      {
        "date": "2026-05-24",
        "hour": "13:00",
        "sales": 349.5,
        "orders": 16,
        "rows": 68
      },
      {
        "date": "2026-05-24",
        "hour": "14:00",
        "sales": 455.9,
        "orders": 25,
        "rows": 86
      },
      {
        "date": "2026-05-24",
        "hour": "15:00",
        "sales": 163.5,
        "orders": 10,
        "rows": 39
      },
      {
        "date": "2026-05-24",
        "hour": "16:00",
        "sales": 46.0,
        "orders": 3,
        "rows": 10
      },
      {
        "date": "2026-05-24",
        "hour": "18:00",
        "sales": 16.5,
        "orders": 1,
        "rows": 4
      },
      {
        "date": "2026-05-25",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-05-25",
        "hour": "07:00",
        "sales": 24.0,
        "orders": 4,
        "rows": 10
      },
      {
        "date": "2026-05-25",
        "hour": "08:00",
        "sales": 29.0,
        "orders": 1,
        "rows": 6
      },
      {
        "date": "2026-05-25",
        "hour": "09:00",
        "sales": 111.5,
        "orders": 8,
        "rows": 33
      },
      {
        "date": "2026-05-25",
        "hour": "10:00",
        "sales": 75.5,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-05-25",
        "hour": "11:00",
        "sales": 255.5,
        "orders": 11,
        "rows": 34
      },
      {
        "date": "2026-05-25",
        "hour": "12:00",
        "sales": 103.5,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-05-25",
        "hour": "13:00",
        "sales": 43.5,
        "orders": 5,
        "rows": 10
      },
      {
        "date": "2026-05-25",
        "hour": "14:00",
        "sales": 93.0,
        "orders": 5,
        "rows": 22
      },
      {
        "date": "2026-05-25",
        "hour": "15:00",
        "sales": 113.0,
        "orders": 11,
        "rows": 24
      },
      {
        "date": "2026-05-25",
        "hour": "16:00",
        "sales": 78.0,
        "orders": 8,
        "rows": 15
      },
      {
        "date": "2026-05-26",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 3
      },
      {
        "date": "2026-05-26",
        "hour": "07:00",
        "sales": 33.5,
        "orders": 2,
        "rows": 10
      },
      {
        "date": "2026-05-26",
        "hour": "08:00",
        "sales": 118.0,
        "orders": 9,
        "rows": 30
      },
      {
        "date": "2026-05-26",
        "hour": "09:00",
        "sales": 17.5,
        "orders": 2,
        "rows": 7
      },
      {
        "date": "2026-05-26",
        "hour": "10:00",
        "sales": 153.0,
        "orders": 6,
        "rows": 27
      },
      {
        "date": "2026-05-26",
        "hour": "11:00",
        "sales": 114.5,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-05-26",
        "hour": "12:00",
        "sales": 92.5,
        "orders": 6,
        "rows": 20
      },
      {
        "date": "2026-05-26",
        "hour": "13:00",
        "sales": 138.0,
        "orders": 16,
        "rows": 30
      },
      {
        "date": "2026-05-26",
        "hour": "14:00",
        "sales": 48.0,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-05-26",
        "hour": "15:00",
        "sales": 70.0,
        "orders": 7,
        "rows": 14
      },
      {
        "date": "2026-05-26",
        "hour": "16:00",
        "sales": 75.0,
        "orders": 5,
        "rows": 12
      },
      {
        "date": "2026-05-27",
        "hour": "06:00",
        "sales": 18.0,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-05-27",
        "hour": "07:00",
        "sales": 9.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-05-27",
        "hour": "08:00",
        "sales": 74.5,
        "orders": 8,
        "rows": 21
      },
      {
        "date": "2026-05-27",
        "hour": "09:00",
        "sales": 52.0,
        "orders": 6,
        "rows": 13
      },
      {
        "date": "2026-05-27",
        "hour": "10:00",
        "sales": 79.0,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-05-27",
        "hour": "11:00",
        "sales": 115.5,
        "orders": 5,
        "rows": 21
      },
      {
        "date": "2026-05-27",
        "hour": "12:00",
        "sales": 210.0,
        "orders": 11,
        "rows": 42
      },
      {
        "date": "2026-05-27",
        "hour": "13:00",
        "sales": 62.0,
        "orders": 3,
        "rows": 11
      },
      {
        "date": "2026-05-27",
        "hour": "14:00",
        "sales": 91.0,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-05-27",
        "hour": "15:00",
        "sales": 132.7,
        "orders": 11,
        "rows": 31
      },
      {
        "date": "2026-05-27",
        "hour": "16:00",
        "sales": 109.5,
        "orders": 9,
        "rows": 21
      },
      {
        "date": "2026-05-27",
        "hour": "17:00",
        "sales": 99.5,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-05-27",
        "hour": "18:00",
        "sales": 2.8,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-28",
        "hour": "06:00",
        "sales": 11.0,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-05-28",
        "hour": "07:00",
        "sales": 9.0,
        "orders": 2,
        "rows": 2
      },
      {
        "date": "2026-05-28",
        "hour": "08:00",
        "sales": 29.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-05-28",
        "hour": "09:00",
        "sales": 65.5,
        "orders": 4,
        "rows": 18
      },
      {
        "date": "2026-05-28",
        "hour": "10:00",
        "sales": 124.0,
        "orders": 9,
        "rows": 24
      },
      {
        "date": "2026-05-28",
        "hour": "11:00",
        "sales": 44.5,
        "orders": 6,
        "rows": 10
      },
      {
        "date": "2026-05-28",
        "hour": "12:00",
        "sales": 152.4,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-05-28",
        "hour": "13:00",
        "sales": 150.5,
        "orders": 7,
        "rows": 28
      },
      {
        "date": "2026-05-28",
        "hour": "14:00",
        "sales": 121.0,
        "orders": 9,
        "rows": 26
      },
      {
        "date": "2026-05-28",
        "hour": "15:00",
        "sales": 204.5,
        "orders": 13,
        "rows": 41
      },
      {
        "date": "2026-05-28",
        "hour": "16:00",
        "sales": 73.0,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-05-28",
        "hour": "17:00",
        "sales": 23.8,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-05-29",
        "hour": "06:00",
        "sales": 5.5,
        "orders": 1,
        "rows": 2
      },
      {
        "date": "2026-05-29",
        "hour": "07:00",
        "sales": 39.5,
        "orders": 4,
        "rows": 12
      },
      {
        "date": "2026-05-29",
        "hour": "08:00",
        "sales": 104.5,
        "orders": 7,
        "rows": 22
      },
      {
        "date": "2026-05-29",
        "hour": "09:00",
        "sales": 134.5,
        "orders": 8,
        "rows": 31
      },
      {
        "date": "2026-05-29",
        "hour": "10:00",
        "sales": 231.5,
        "orders": 12,
        "rows": 46
      },
      {
        "date": "2026-05-29",
        "hour": "11:00",
        "sales": 110.0,
        "orders": 10,
        "rows": 20
      },
      {
        "date": "2026-05-29",
        "hour": "12:00",
        "sales": 281.0,
        "orders": 13,
        "rows": 44
      },
      {
        "date": "2026-05-29",
        "hour": "13:00",
        "sales": 139.0,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-05-29",
        "hour": "14:00",
        "sales": 172.0,
        "orders": 10,
        "rows": 36
      },
      {
        "date": "2026-05-29",
        "hour": "15:00",
        "sales": 40.0,
        "orders": 5,
        "rows": 8
      },
      {
        "date": "2026-05-30",
        "hour": "07:00",
        "sales": 17.5,
        "orders": 3,
        "rows": 6
      },
      {
        "date": "2026-05-30",
        "hour": "08:00",
        "sales": 52.5,
        "orders": 3,
        "rows": 12
      },
      {
        "date": "2026-05-30",
        "hour": "09:00",
        "sales": 254.0,
        "orders": 12,
        "rows": 48
      },
      {
        "date": "2026-05-30",
        "hour": "10:00",
        "sales": 337.0,
        "orders": 21,
        "rows": 62
      },
      {
        "date": "2026-05-30",
        "hour": "11:00",
        "sales": 114.0,
        "orders": 6,
        "rows": 23
      },
      {
        "date": "2026-05-30",
        "hour": "12:00",
        "sales": 237.0,
        "orders": 14,
        "rows": 46
      },
      {
        "date": "2026-05-30",
        "hour": "13:00",
        "sales": 347.0,
        "orders": 20,
        "rows": 69
      },
      {
        "date": "2026-05-30",
        "hour": "14:00",
        "sales": 244.5,
        "orders": 21,
        "rows": 54
      },
      {
        "date": "2026-05-31",
        "hour": "09:00",
        "sales": 114.5,
        "orders": 6,
        "rows": 22
      },
      {
        "date": "2026-05-31",
        "hour": "10:00",
        "sales": 231.0,
        "orders": 12,
        "rows": 54
      },
      {
        "date": "2026-05-31",
        "hour": "11:00",
        "sales": 347.5,
        "orders": 20,
        "rows": 71
      },
      {
        "date": "2026-05-31",
        "hour": "12:00",
        "sales": 190.0,
        "orders": 12,
        "rows": 33
      },
      {
        "date": "2026-05-31",
        "hour": "13:00",
        "sales": 291.0,
        "orders": 19,
        "rows": 56
      },
      {
        "date": "2026-05-31",
        "hour": "14:00",
        "sales": 177.5,
        "orders": 12,
        "rows": 34
      },
      {
        "date": "2026-05-31",
        "hour": "15:00",
        "sales": 177.5,
        "orders": 11,
        "rows": 33
      },
      {
        "date": "2026-06-01",
        "hour": "08:00",
        "sales": 5.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-06-01",
        "hour": "09:00",
        "sales": 51.5,
        "orders": 4,
        "rows": 16
      },
      {
        "date": "2026-06-01",
        "hour": "10:00",
        "sales": 71.0,
        "orders": 4,
        "rows": 16
      },
      {
        "date": "2026-06-01",
        "hour": "11:00",
        "sales": 67.5,
        "orders": 5,
        "rows": 13
      },
      {
        "date": "2026-06-01",
        "hour": "12:00",
        "sales": 234.5,
        "orders": 19,
        "rows": 49
      },
      {
        "date": "2026-06-01",
        "hour": "13:00",
        "sales": 202.5,
        "orders": 11,
        "rows": 43
      },
      {
        "date": "2026-06-01",
        "hour": "14:00",
        "sales": 153.5,
        "orders": 11,
        "rows": 36
      },
      {
        "date": "2026-06-01",
        "hour": "15:00",
        "sales": 113.5,
        "orders": 8,
        "rows": 23
      },
      {
        "date": "2026-06-01",
        "hour": "16:00",
        "sales": 93.0,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-06-02",
        "hour": "08:00",
        "sales": 13.5,
        "orders": 2,
        "rows": 3
      },
      {
        "date": "2026-06-02",
        "hour": "09:00",
        "sales": 119.5,
        "orders": 4,
        "rows": 24
      },
      {
        "date": "2026-06-02",
        "hour": "10:00",
        "sales": 192.0,
        "orders": 10,
        "rows": 35
      },
      {
        "date": "2026-06-02",
        "hour": "11:00",
        "sales": 60.5,
        "orders": 4,
        "rows": 13
      },
      {
        "date": "2026-06-02",
        "hour": "12:00",
        "sales": 291.0,
        "orders": 20,
        "rows": 63
      },
      {
        "date": "2026-06-02",
        "hour": "13:00",
        "sales": 11.0,
        "orders": 2,
        "rows": 2
      },
      {
        "date": "2026-06-02",
        "hour": "15:00",
        "sales": 37.0,
        "orders": 2,
        "rows": 8
      },
      {
        "date": "2026-06-03",
        "hour": "07:00",
        "sales": 25.5,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-06-03",
        "hour": "08:00",
        "sales": 10.0,
        "orders": 2,
        "rows": 2
      },
      {
        "date": "2026-06-03",
        "hour": "09:00",
        "sales": 75.0,
        "orders": 7,
        "rows": 17
      },
      {
        "date": "2026-06-03",
        "hour": "10:00",
        "sales": 323.0,
        "orders": 16,
        "rows": 68
      },
      {
        "date": "2026-06-03",
        "hour": "11:00",
        "sales": 103.5,
        "orders": 7,
        "rows": 13
      },
      {
        "date": "2026-06-03",
        "hour": "12:00",
        "sales": 201.0,
        "orders": 15,
        "rows": 43
      },
      {
        "date": "2026-06-03",
        "hour": "13:00",
        "sales": 141.5,
        "orders": 10,
        "rows": 28
      },
      {
        "date": "2026-06-03",
        "hour": "14:00",
        "sales": 60.5,
        "orders": 6,
        "rows": 14
      },
      {
        "date": "2026-06-03",
        "hour": "15:00",
        "sales": 214.0,
        "orders": 16,
        "rows": 42
      },
      {
        "date": "2026-06-03",
        "hour": "16:00",
        "sales": 97.5,
        "orders": 6,
        "rows": 19
      },
      {
        "date": "2026-06-04",
        "hour": "08:00",
        "sales": 168.0,
        "orders": 7,
        "rows": 35
      },
      {
        "date": "2026-06-04",
        "hour": "09:00",
        "sales": 58.0,
        "orders": 5,
        "rows": 11
      },
      {
        "date": "2026-06-04",
        "hour": "10:00",
        "sales": 120.0,
        "orders": 9,
        "rows": 17
      },
      {
        "date": "2026-06-04",
        "hour": "11:00",
        "sales": 175.0,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-06-04",
        "hour": "12:00",
        "sales": 254.5,
        "orders": 16,
        "rows": 50
      },
      {
        "date": "2026-06-04",
        "hour": "13:00",
        "sales": 189.5,
        "orders": 16,
        "rows": 38
      },
      {
        "date": "2026-06-04",
        "hour": "14:00",
        "sales": 132.8,
        "orders": 9,
        "rows": 26
      },
      {
        "date": "2026-06-04",
        "hour": "15:00",
        "sales": 166.5,
        "orders": 12,
        "rows": 35
      },
      {
        "date": "2026-06-04",
        "hour": "16:00",
        "sales": 18.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-06-05",
        "hour": "08:00",
        "sales": 207.0,
        "orders": 8,
        "rows": 44
      },
      {
        "date": "2026-06-05",
        "hour": "09:00",
        "sales": 333.0,
        "orders": 22,
        "rows": 65
      },
      {
        "date": "2026-06-05",
        "hour": "10:00",
        "sales": 365.5,
        "orders": 15,
        "rows": 72
      },
      {
        "date": "2026-06-05",
        "hour": "11:00",
        "sales": 343.5,
        "orders": 21,
        "rows": 72
      },
      {
        "date": "2026-06-05",
        "hour": "12:00",
        "sales": 318.0,
        "orders": 20,
        "rows": 56
      },
      {
        "date": "2026-06-05",
        "hour": "13:00",
        "sales": 6.5,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-06-06",
        "hour": "08:00",
        "sales": 115.5,
        "orders": 8,
        "rows": 28
      },
      {
        "date": "2026-06-06",
        "hour": "09:00",
        "sales": 121.0,
        "orders": 9,
        "rows": 32
      },
      {
        "date": "2026-06-06",
        "hour": "10:00",
        "sales": 237.5,
        "orders": 12,
        "rows": 47
      },
      {
        "date": "2026-06-06",
        "hour": "11:00",
        "sales": 392.0,
        "orders": 23,
        "rows": 76
      },
      {
        "date": "2026-06-06",
        "hour": "12:00",
        "sales": 537.1,
        "orders": 31,
        "rows": 108
      },
      {
        "date": "2026-06-06",
        "hour": "13:00",
        "sales": 234.0,
        "orders": 14,
        "rows": 49
      },
      {
        "date": "2026-06-06",
        "hour": "14:00",
        "sales": 185.8,
        "orders": 18,
        "rows": 38
      },
      {
        "date": "2026-06-06",
        "hour": "15:00",
        "sales": 5.0,
        "orders": 1,
        "rows": 1
      },
      {
        "date": "2026-06-07",
        "hour": "08:00",
        "sales": 23.0,
        "orders": 3,
        "rows": 5
      },
      {
        "date": "2026-06-07",
        "hour": "09:00",
        "sales": 71.3,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-06-07",
        "hour": "10:00",
        "sales": 206.5,
        "orders": 12,
        "rows": 49
      },
      {
        "date": "2026-06-07",
        "hour": "11:00",
        "sales": 500.4,
        "orders": 25,
        "rows": 97
      },
      {
        "date": "2026-06-07",
        "hour": "12:00",
        "sales": 327.5,
        "orders": 17,
        "rows": 63
      },
      {
        "date": "2026-06-07",
        "hour": "13:00",
        "sales": 331.0,
        "orders": 16,
        "rows": 68
      },
      {
        "date": "2026-06-07",
        "hour": "14:00",
        "sales": 166.0,
        "orders": 12,
        "rows": 36
      },
      {
        "date": "2026-06-07",
        "hour": "15:00",
        "sales": 95.0,
        "orders": 8,
        "rows": 21
      },
      {
        "date": "2026-06-07",
        "hour": "16:00",
        "sales": 26.0,
        "orders": 2,
        "rows": 6
      },
      {
        "date": "2026-06-08",
        "hour": "09:00",
        "sales": 168.95,
        "orders": 6,
        "rows": 33
      },
      {
        "date": "2026-06-08",
        "hour": "10:00",
        "sales": 255.66,
        "orders": 13,
        "rows": 63
      },
      {
        "date": "2026-06-08",
        "hour": "11:00",
        "sales": 218.57,
        "orders": 12,
        "rows": 60
      },
      {
        "date": "2026-06-08",
        "hour": "12:00",
        "sales": 309.86,
        "orders": 16,
        "rows": 79
      },
      {
        "date": "2026-06-08",
        "hour": "13:00",
        "sales": 362.75,
        "orders": 20,
        "rows": 81
      },
      {
        "date": "2026-06-08",
        "hour": "14:00",
        "sales": 149.0,
        "orders": 10,
        "rows": 36
      },
      {
        "date": "2026-06-08",
        "hour": "15:00",
        "sales": 23.05,
        "orders": 1,
        "rows": 5
      },
      {
        "date": "2026-06-09",
        "hour": "08:00",
        "sales": 179.5,
        "orders": 6,
        "rows": 25
      },
      {
        "date": "2026-06-09",
        "hour": "09:00",
        "sales": 63.5,
        "orders": 7,
        "rows": 15
      },
      {
        "date": "2026-06-09",
        "hour": "10:00",
        "sales": 102.5,
        "orders": 10,
        "rows": 23
      },
      {
        "date": "2026-06-09",
        "hour": "11:00",
        "sales": 110.5,
        "orders": 9,
        "rows": 22
      },
      {
        "date": "2026-06-09",
        "hour": "12:00",
        "sales": 124.0,
        "orders": 14,
        "rows": 27
      },
      {
        "date": "2026-06-09",
        "hour": "13:00",
        "sales": 77.5,
        "orders": 5,
        "rows": 7
      },
      {
        "date": "2026-06-09",
        "hour": "14:00",
        "sales": 172.0,
        "orders": 13,
        "rows": 32
      },
      {
        "date": "2026-06-09",
        "hour": "15:00",
        "sales": 125.0,
        "orders": 10,
        "rows": 24
      },
      {
        "date": "2026-06-09",
        "hour": "16:00",
        "sales": 56.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-06-10",
        "hour": "08:00",
        "sales": 26.5,
        "orders": 4,
        "rows": 11
      },
      {
        "date": "2026-06-10",
        "hour": "09:00",
        "sales": 157.0,
        "orders": 6,
        "rows": 25
      },
      {
        "date": "2026-06-10",
        "hour": "10:00",
        "sales": 116.0,
        "orders": 7,
        "rows": 27
      },
      {
        "date": "2026-06-10",
        "hour": "11:00",
        "sales": 117.5,
        "orders": 6,
        "rows": 22
      },
      {
        "date": "2026-06-10",
        "hour": "12:00",
        "sales": 116.0,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-06-10",
        "hour": "13:00",
        "sales": 211.1,
        "orders": 13,
        "rows": 42
      },
      {
        "date": "2026-06-10",
        "hour": "14:00",
        "sales": 150.5,
        "orders": 10,
        "rows": 32
      },
      {
        "date": "2026-06-10",
        "hour": "15:00",
        "sales": 142.0,
        "orders": 11,
        "rows": 30
      },
      {
        "date": "2026-06-10",
        "hour": "16:00",
        "sales": 82.5,
        "orders": 5,
        "rows": 15
      },
      {
        "date": "2026-06-11",
        "hour": "08:00",
        "sales": 92.0,
        "orders": 5,
        "rows": 21
      },
      {
        "date": "2026-06-11",
        "hour": "09:00",
        "sales": 151.0,
        "orders": 8,
        "rows": 25
      },
      {
        "date": "2026-06-11",
        "hour": "10:00",
        "sales": 179.5,
        "orders": 9,
        "rows": 34
      },
      {
        "date": "2026-06-11",
        "hour": "11:00",
        "sales": 114.5,
        "orders": 8,
        "rows": 22
      },
      {
        "date": "2026-06-11",
        "hour": "12:00",
        "sales": 154.8,
        "orders": 10,
        "rows": 23
      },
      {
        "date": "2026-06-11",
        "hour": "13:00",
        "sales": 144.5,
        "orders": 8,
        "rows": 27
      },
      {
        "date": "2026-06-11",
        "hour": "14:00",
        "sales": 206.5,
        "orders": 14,
        "rows": 42
      },
      {
        "date": "2026-06-11",
        "hour": "15:00",
        "sales": 167.0,
        "orders": 12,
        "rows": 29
      },
      {
        "date": "2026-06-11",
        "hour": "16:00",
        "sales": 54.0,
        "orders": 3,
        "rows": 9
      },
      {
        "date": "2026-06-12",
        "hour": "08:00",
        "sales": 76.5,
        "orders": 7,
        "rows": 18
      },
      {
        "date": "2026-06-12",
        "hour": "09:00",
        "sales": 138.5,
        "orders": 10,
        "rows": 31
      },
      {
        "date": "2026-06-12",
        "hour": "10:00",
        "sales": 182.0,
        "orders": 10,
        "rows": 43
      },
      {
        "date": "2026-06-12",
        "hour": "11:00",
        "sales": 112.01,
        "orders": 11,
        "rows": 23
      },
      {
        "date": "2026-06-12",
        "hour": "12:00",
        "sales": 162.5,
        "orders": 9,
        "rows": 31
      },
      {
        "date": "2026-06-12",
        "hour": "13:00",
        "sales": 171.5,
        "orders": 14,
        "rows": 35
      },
      {
        "date": "2026-06-12",
        "hour": "14:00",
        "sales": 187.5,
        "orders": 10,
        "rows": 35
      },
      {
        "date": "2026-06-12",
        "hour": "15:00",
        "sales": 126.0,
        "orders": 10,
        "rows": 25
      },
      {
        "date": "2026-06-12",
        "hour": "16:00",
        "sales": 50.5,
        "orders": 6,
        "rows": 11
      }
    ]
  }
};
