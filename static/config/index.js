var __config = {
  debug:true ,
  testURL: "http://l-zcgtest1.dev.cn2.corp.agrant.cn:9006",
  pubURL: "http://www.buybuybee.com",
  URL: function() {
    return this.debug ? this.testURL : this.pubURL;
  }
}