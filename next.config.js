const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    const aliases = {
      TweenLite: "gsap/src/minified/TweenLite.min.js",
      TweenMax: "gsap/src/minified/TweenMax.min.js",
      TimelineLite: "gsap/src/minified/TimelineLite.min.js",
      TimelineMax: "gsap/src/minified/TimelineMax.min.js",
      ScrollMagic: "scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
      "animation.gsap":
        "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js",
      "debug.addIndicators":
        "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases
    };
    return config;
  }
});
