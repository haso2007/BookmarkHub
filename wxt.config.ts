import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  srcDir: 'src',
  modules: ['@wxt-dev/module-react', '@wxt-dev/auto-icons'],
  manifest: {
    name: "__MSG_extensionName__",
    description: "__MSG_extensionDescription__",
    default_locale: 'en',
    permissions: ['storage', 'bookmarks', 'notifications', 'alarms', 'tabs'],
    host_permissions: ["https://*.github.com/", "https://*.githubusercontent.com/", "*://*/*"],
    // Stable gecko id is required for AMO signing. Do not reuse the
    // official BookmarkHub id; this value is permanent after first sign.
    // data_collection_permissions is required for new AMO submissions
    // since 2025-11-03. Bookmarks and GitHub/WebDAV credentials leave
    // the browser; 140+ has the built-in consent prompt.
    browser_specific_settings: {
      gecko: {
        id: "bookmarkhub-private@sean.su",
        strict_min_version: "140.0",
        data_collection_permissions: {
          required: ["bookmarksInfo", "authenticationInfo"],
        },
      },
    },
  }
});
