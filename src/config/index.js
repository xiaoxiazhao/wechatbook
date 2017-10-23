const config = {
  env: __ENV__,
  testURL: "https://market.test.zcdog.com",
  // testURL: "http://l-zcgtest1.dev.cn2.corp.agrant.cn:9006",
  pubURL: "https://www.buybuybee.com",
  URL: function() {
     return this.env === "production" ? this.testURL : this.pubURL;
    //return this.env === "production" ? this.pubURL : this.testURL;
  }
}

export default config;