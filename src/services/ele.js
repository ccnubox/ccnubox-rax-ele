import request from "../box-ui/util/request";

const EleService = {
  getAir(options) {
    return request({
      method: "POST",
      url: "https://ccnubox.muxixyz.com/api/ele/",
      body: {
        dor: options.dor,
        type: "air"
      }
    });
  },

  getLight(options) {
    return request({
      method: "POST",
      url: "https://ccnubox.muxixyz.com/api/ele/",
      body: {
        dor: options.dor,
        type: "light"
      }
    });
  }
};

export default EleService;
