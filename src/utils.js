export const getQueryString = (args) => {
  const argsArray = Object.entries(args).map(([k, v]) => [k, v]);
  argsArray.sort();
  return argsArray
    .filter(([k, v]) => !!v)
    .reduce((acc, [k, v], i, arr) => {
      let result = `${acc}${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
      if (i === 0) {
        result = "?" + result;
      }
      if (i < arr.length - 1) {
        result = result + "&";
      }
      return result;
    }, "");
};

export const getHtmlMetaTags = (url) => {
  return `
<!-- Open Graph https://ogp.me/ -->
<meta property="og:image" content="${url}"/>
<meta property="og:image:width" content="1200px"/>
<meta property="og:image:height" content="630px"/>

<!-- Twitter cards https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:image" content="${url}" />
    `;
};
