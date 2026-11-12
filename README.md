# MuroSense

Peptidoglycan muropeptide LC-MS analysis in the browser: identification with a controlled false discovery rate, MS/MS and UV evidence, profile metrics and comparisons.

MuroSense runs entirely on your own computer. Your files are read in the browser and are not uploaded anywhere: the web address only delivers the app.

## What is in this folder

| File | What it does |
|---|---|
| `index.html` | The app itself (MuroSense 3.25) |
| `manifest.webmanifest` | Tells Edge and Chrome that MuroSense can be installed: its name, icons, colours, and that it opens `.murosense` session files |
| `sw.js` | The service worker: lets the installed app open without internet, and picks up a newer `index.html` when online |
| `icon-*.png`, `icon.svg`, `maskable-*.png`, `apple-touch-icon.png`, `favicon-32.png` | The app icon in several sizes, and the "maskable" icon (for systems that crop icons to a circle or squircle) |
| `session-file-*.png`, `session-file.svg` | The icon for `.murosense` files |
| `README.md` | This page |

Keep all of them together, with the same names, in the top level of the repository (no sub-folders).

## Put it on GitHub Pages

1. On GitHub, create a new repository (for example `murosense`). On a free account it must be **Public** for GitHub Pages to work.
2. On the repository's main page: **Add file** → **Upload files**. Drag in every file from this folder, then **Commit changes**.
3. **Settings** → **Pages** (left sidebar) → under **Build and deployment**, Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → **Save**.
4. After a minute or two the address appears at the top of the Pages settings, for example `https://<your-user-name>.github.io/murosense/`.

## Install it on your PC (Microsoft Edge)

GitHub lets browsers keep a page for up to 10 minutes, so after an upload wait about 10 minutes before installing.

1. Open the address in Edge and press **Ctrl + F5** once (reload, fetching everything fresh). The tab should show the MuroSense logo.
2. Click the **App available** icon at the right of the address bar, then **Install**. (If it does not appear, reload the page once.)
3. MuroSense now opens in its own window, and is in the Start menu. You can pin it to the taskbar.

Chrome works the same way, with its install icon in the address bar.

## Open sessions with a double-click

Sessions are now saved as **`name.murosense`**.

- Double-click a `.murosense` file, or right-click it → **Open with** → **MuroSense**.
- The first time, the browser asks whether MuroSense may open this kind of file: choose **Allow** (or **Open**).
- If Windows asks which app to use, choose **MuroSense** and tick **Always use this app**.

Each file opens in a new MuroSense window. Sessions saved by earlier versions (`.murosense-session.json.gz`) still open with the **Open saved** button, or by dropping them on the window; saving them again gives a `.murosense` file.

## If the app shows the letter "M", or opens another app

Every app has an identity (the `id` in its manifest). Two apps on the same GitHub address with the same `id` are taken by the browser for one app, so installing one replaces the other. MuroSense's `id` is `/murosense`; give each of your other apps its own too (for example `/sigmoid`).

1. Uninstall the mixed-up app(s): open `edge://apps` in Edge and uninstall every app from this GitHub address (→ **Details** → uninstall). Do **not** tick the option to clear data: all apps on the same GitHub address share it, and their saved data would go too.
2. Wait about 10 minutes after your last upload, open the address in a normal Edge tab and press **Ctrl + F5**.
3. Check that `https://<your-user-name>.github.io/<repository-name>/icon-192.png` shows the logo.
4. Install again, each app from its own address.

## Update to a newer version

Upload the new `index.html` to the repository (same name, replacing the old one) and commit. The installed app uses it the next time it starts while online (GitHub may take a few minutes to serve the new file). The other files only need replacing if they change.

## Good to know

- **Offline:** once the installed app has been opened online, it also opens without internet.
- **Your settings and custom libraries** are stored per address. The installed app and a copy opened as a file keep separate ones: export a library from one and import it in the other to carry it over.
- **Managed (university) computers:** if Edge does not offer to install apps, the IT department may have turned it off.
- **Uninstall:** open `edge://apps` in Edge (MuroSense → **Details** → uninstall), or Windows **Settings** → **Add or remove programs** → MuroSense.
