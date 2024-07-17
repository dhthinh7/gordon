import { TProduct } from "./models";
import hdo_img from "@/assets/img/hdo.png"
import series from "@/assets/img/series-b.png"
import vf_w_series from "@/assets/img/vf_w-series.png"
import gear from "@/assets/img/gear.png"

export const D_PAGE_SIZE = 6

export const productList: TProduct[] = [
  {
    product_status: 'Factory Order',
    id: "0",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "hdo",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: hdo_img,
    secondary_image_urls: [gear, hdo_img, vf_w_series, hdo_img, gear, vf_w_series, gear, hdo_img, vf_w_series, hdo_img, gear, vf_w_series],
    video_urls: ['https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4'],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'In Stock',
    id: "1",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "Series B",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: series,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'Factory Order',
    id: "2",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "VF/w Series",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: vf_w_series,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'In Stock',
    id: "3",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "3m",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: gear,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'Unavailable',
    id: "4",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "3m",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: hdo_img,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'Factory Order',
    id: "5",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "3m",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: series,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'Unavailable',
    id: "6",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "3m",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: vf_w_series,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'Factory Order',
    id: "7",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "hdo",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: hdo_img,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'Factory Order',
    id: "8",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "hdo",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: hdo_img,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'Factory Order',
    id: "9",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "hdo",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: hdo_img,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'Factory Order',
    id: "10",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "hdo",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: hdo_img,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    product_status: 'Factory Order',
    id: "11",
    created_user_id: "Laptop",
    supplier_id: "supplier_bonfiglioli",
    supplier_name: "Bonfiglioli",
    category_id: "category_gearboxes",
    category_name: "Gearboxes",
    sub_category_id: null,
    sub_category_name: null,
    department_id: "department_power-transmission",
    department_name: "POWER TRANSMISSION",
    name: "hdo",
    make: null,
    model: null,
    part_number: null,
    short_description: "All the features are available for each of the 18 finely spaced frame sizes, spanning over the 1.000 - 1.400.000 Nm torque range.",
    full_description: null,
    primary_image_url: hdo_img,
    secondary_image_urls: [],
    video_urls: [],
    document_urls: [],
    tag_group_categories: [
      {
        slug: "gear-boxes",
        name: "GEARBOXES",
        tag_groups: [
          {
            slug: "gear-boxes",
            name: "GEARBOXES",
            tags: [
              {
                slug: "gear_style",
                name: "Gear Style",
                lookup_type: "gear-style",
                value: [
                  {
                    lookup_type: "gear-style",
                    slug: "planetary",
                    name: "Planetary"
                  }
                ]
              },
              {
                slug: "max-ratio",
                name: "Max Ratio",
                lookup_type: "max-ratio",
                value: [
                  {
                    lookup_type: "max-ratio",
                    slug: "1-50",
                    name: "1-50"
                  }
                ]
              },
              {
                slug: "max-torque",
                name: "Max Torque",
                lookup_type: "max-torque",
                value: [
                  {
                    lookup_type: "max-torque",
                    slug: "200,000-+",
                    name: "200,000 +"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
];

export enum eTabDetailMapping {
  features = 'FEATURES',
  tag_group_categories = 'SPECIFICATIONS',
  assemblies = 'ASSEMBLIES',
  document_urls = 'RELATED DOWNLOADS'
}

type TTabDetail = {
  tab_name: string,
  tab_value: string
}

export const tabsProductDetail: TTabDetail[] = [
  {
    tab_name: eTabDetailMapping.features,
    tab_value: 'Tab content ' + eTabDetailMapping.features,
  },
  {
    tab_name: eTabDetailMapping.tag_group_categories,
    tab_value: 'Tab content ' + eTabDetailMapping.tag_group_categories
  },
  {
    tab_name: eTabDetailMapping.assemblies,
    tab_value: 'Tab content ' + eTabDetailMapping.assemblies
  },
  {
    tab_name: eTabDetailMapping.document_urls,
    tab_value: 'Tab content ' + eTabDetailMapping.document_urls
  }
]
