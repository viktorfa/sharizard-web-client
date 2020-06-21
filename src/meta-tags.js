import siteInfo from "./site-info.json";

const defaults = {
  title: siteInfo.title,
  description: siteInfo.description,
  image_url: `${siteInfo.baseUrl}/icon.png`,
  site_url: `${siteInfo.baseUrl}/`,
};

export const imageTags = [
  {
    hid: "image",
    name: "image",
  },
  {
    hid: "schema:image",
    itemprop: "image",
  },
  {
    hid: "twitter:image",
    name: "twitter:image:src",
  },
  {
    hid: "og:image",
    property: "og:image",
  },
];
export const titleTags = [
  {
    hid: "schema:name",
    itemprop: "name",
  },
  {
    hid: "twitter:title",
    name: "twitter:title",
  },
  {
    hid: "og:title",
    property: "og:title",
  },
];
export const descriptionTags = [
  {
    hid: "description",
    name: "description",
  },
  {
    hid: "schema:description",
    itemprop: "description",
  },
  {
    hid: "twitter:description",
    name: "twitter:card",
  },
  {
    hid: "og:description",
    property: "og:description",
  },
];
export const urlTags = [
  {
    hid: "og:url",
    property: "og:url",
  },
];
export const getAllMetaTags = ({ title, description, image_url, site_url }) => {
  return [
    ...titleTags.map((x) => ({
      ...x,
      content: title,
    })),
    ...descriptionTags.map((x) => ({
      ...x,
      content: description,
    })),
    ...imageTags.map((x) => ({
      ...x,
      content: image_url,
    })),
    ...urlTags.map((x) => ({
      ...x,
      content: site_url,
    })),
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary",
    },
    {
      hid: "og:locale",
      property: "og:locale",
      content: "nb_NO",
    },
    {
      hid: "og:type",
      property: "og:type",
      content: "website",
    },
  ];
};

export const getAllMetaInfo = ({
  title = defaults.title,
  description = defaults.description,
  image_url = defaults.image_url,
  site_url = defaults.site_url,
  path,
} = defaults) => {
  let _site_url;
  if (path) {
    _site_url = `${siteInfo.baseUrl}${path}`;
  } else {
    _site_url = site_url;
  }
  return {
    title,
    titleTemplate: `%s – ${defaults.title}`,
    meta: getAllMetaTags({
      title,
      description,
      image_url,
      site_url: _site_url,
    }),
  };
};
