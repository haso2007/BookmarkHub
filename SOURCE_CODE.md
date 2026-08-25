# Source code for Mozilla reviewers

This add-on is built with [WXT](https://wxt.dev/) and Vite. The uploaded XPI/ZIP contains generated/minified files. This repository is the original source.

## Build the Firefox package

Requires Node.js 22+.

```bash
npm install --legacy-peer-deps
npm run zip:firefox
```

Outputs:

- `.output/bookmarkhub-<version>-firefox.zip` — the add-on package to sign
- `.output/firefox-mv2/` — unpacked build
- `.output/bookmarkhub-<version>-sources.zip` — source archive produced by WXT

`npm install` needs `--legacy-peer-deps` because `react-hook-form@6` declares a React 16/17 peer while the project uses React 18.

## Notes

- Browser target: Firefox Manifest V2 (`wxt build -b firefox`)
- Gecko ID: `bookmarkhub-private@sean.su`
- Minimum Firefox: 140.0 (built-in data collection consent)
- Data collection: `bookmarksInfo`, `authenticationInfo` (bookmark sync to GitHub Gist / WebDAV)
- This is a private/self-distributed fork, not the listed BookmarkHub add-on
