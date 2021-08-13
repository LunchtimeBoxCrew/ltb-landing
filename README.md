# ltb-landing

Moin ihr Entwickler:innen, heute zeig ich euch wie ihr in 4 kleinen Schritten dieses Repo gebändigt bekommt:

## Zum Entwickeln

### 1. Setup der Entwicklungsumgebung.

**A.** Als aller erstes braucht ihr [NodeJS](https://nodejs.org/en/).

**B.** Als package manager benutzen wir [pnpm](https://pnpm.io/), um diesen zu installieren führt ihr diesen command aus:

```bash
npm i -g pnpm
```

### 2. Klonen vom Projekt

**A.** Das Repo klonen tut ihr mit diesem Befehl

```bash
git clone git@github.com:LunchtimeBoxCrew/ltb-landing.git
```

**B.** Für die nächsten Befehle ist es wichtig das ihr im richtigen Ordner seid:

```bash
cd ltb-landing
```

### 3. Abhängigkeiten installieren

```bash
pnpm i
```

> Falls es einen Fehler in der Form ` ERROR Your Node version is incompatible` gibt
>
> > Geht zu Schritt 1.A und installiert euch die neuste Node version
> >
> > _(Dass heißt das eine von unseren Dependancies eine neuere Node Version braucht)_

> Wenn es hierbei einen Fehler in der Form `vips/vips8` not found gibt
>
> > dann installiert ihr vips:
> > https://libvips.github.io/libvips/install.html
> >
> > _(Das benötigen wir um Bilder kleinzurechnen)_

### 4. Entwicklungsserver starten

```bash
pnpm dev
```

Öffnet jetzt in eurem Browser http://localhost:3000

Falls ihr jetzt eine _wunderschöne_ Website seht:

> Tadaaa 🎉🎉🎉 Ihr habt jetzt offiziel das ltb-landing Repository gebändigt.

falls das nicht der Fall ist:

> Tadaaa, frag einen von den anderen Membern um Hilfe 🤔

## Building

Um die "fertige" html Seite zu erstellen, führt ihr diesen Command aus:

```bash
pnpm build
```

> Dieser Befehl erstellt alle Datein um `/build` Ordner
> Um euch die Website anzuschauen führt ihr `pnpm preview` aus
