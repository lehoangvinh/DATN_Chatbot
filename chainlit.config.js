const { defineConfig } = require("chainlit/config");

module.exports = defineConfig({
  project: {
    name: "DUTChat"
  },
  persistence: {
    enabled: true,
    provider: "local", // hoặc mongodb, postgresql nếu dùng DB
  },
  auth: {
    authentication: false // không cần bật auth riêng
  }
});
