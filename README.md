# MuroSense

Peptidoglycan muropeptide LC-MS analysis in the browser: identification with a controlled false discovery rate, MS/MS and UV evidence, profile metrics and comparisons.

MuroSense runs entirely on your own computer. Your files are read in the browser and are not uploaded anywhere: the web address only delivers the app.

## What is in this folder

| File | What it does |
|---|---|
| `index.html` | The app itself (MuroSense 3.25) |
| `manifest.webmanifest` | Tells Edge and Chrome that MuroSense can be installed: its name, icons, colours, and that it opens `.murosense` session files |
| `sw.js` | The service worker: lets the installed app open without internet, and picks up a newer `index.html` when online |
| `icons/` | The app icon in several sizes, the "maskable" icon (for systems that crop icons to a circle or squircle), and the icon for `.murosense` files |
| `README.md` | This page |

Keep all of them together, with the same names, in the top level of the repository.

## Put it on GitHub Pages

1. On GitHub, create a new repository (for example `murosense`). On a free account it must be **Public** for GitHub Pages to work.
2. On the repository's main page: **Add file** → **Upload files**. Drag in everything from this folder (`index.html`, `manifest.webmanifest`, `sw.js`, `README.md` and the `icons` folder), then **Commit changes**.
3. **Settings** → **Pages** (left sidebar) → under **Build and deployment**, Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → **Save**.
4. After a minute or two the address appears at the top of the Pages settings, for example `https://<your-user-name>.github.io/murosense/`.

## Install it on your PC (Microsoft Edge)

1. Open the address in Edge.
2. Click the **App available** icon at the right of the address bar, then **Install**. (If it does not appear, reload the page once.)
3. MuroSense now opens in its own window, and is in the Start menu. You can pin it to the taskbar.

Chrome works the same way, with its install icon in the address bar.

## Open sessions with a double-click

Sessions are now saved as **`name.murosense`**.

- Double-click a `.murosense` file, or right-click it → **Open with** → **MuroSense**.
- The first time, the browser asks whether MuroSense may open this kind of file: choose **Allow** (or **Open**).
- If Windows asks which app to use, choose **MuroSense** and tick **Always use this app**.

Each file opens in a new MuroSense window. Sessions saved by earlier versions (`.murosense-session.json.gz`) still open with the **Open saved** button, or by dropping them on the window; saving them again gives a `.murosense` file.

## Update to a newer version

Upload the new `index.html` to the repository (same name, replacing the old one) and commit. The installed app uses it the next time it starts while online (GitHub may take a few minutes to serve the new file). The other files only need replacing if they change.

## Good to know

- **Offline:** once the installed app has been opened online, it also opens without internet.
- **Your settings and custom libraries** are stored per address. The installed app and a copy opened as a file keep separate ones: export a library from one and import it in the other to carry it over.
- **Managed (university) computers:** if Edge does not offer to install apps, the IT department may have turned it off.
- **Uninstall:** open `edge://apps` in Edge (MuroSense → **Details** → uninstall), or Windows **Settings** → **Add or remove programs** → MuroSense.
