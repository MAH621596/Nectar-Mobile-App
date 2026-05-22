export type categoryCardProps = {
  data: {
    image_uri?: string;
    background_color?: string;
    border_color?: string;
    brand_name?: string;
  }[];
};

export type productCardProps = {
  data: {
    image_uri?: string;
    item_name?: string;
    item_quantity?: string;
    item_price?: string;
  }[];
};

export type searchBarProps = {
  placeholder?: string;
};