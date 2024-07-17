export type TProductStatus = 'Factory Order' | 'In Stock' | 'Unavailable'

// Define the type for the query parameters
export type QueryParams = { [key: string]: string };

export type LoadingStatus = '' | 'fetching'

interface TTagValue {
  lookup_type: string;
  slug: string;
  name: string;
}

export type TTag = {
  slug: string;
  name: string;
  lookup_type: string;
  value: TTagValue[];
}

export type TTagGroup = {
  slug: string;
  name: string;
  tags: TTag[];
}

export type TTagGroupCategory = {
  slug: string;
  name: string;
  tag_groups: TTagGroup[];
}

export type TProduct = {
  product_status: TProductStatus;
  id: string;
  created_user_id: string;
  supplier_id: string;
  supplier_name: string;
  category_id: string;
  category_name: string;
  sub_category_id: string | null;
  sub_category_name: string | null;
  department_id: string;
  department_name: string;
  name: string;
  make: string | null;
  model: string | null;
  part_number: string | null;
  short_description: string;
  full_description: string | null;
  primary_image_url: string | null;
  secondary_image_urls: string[];
  video_urls: string[];
  document_urls: string[];
  tag_group_categories: TTagGroupCategory[];
  features?: string;
  assemblies?: string;
}

export type TCarousel = {
  url: string,
  type: 'image' | 'video' | ''
}