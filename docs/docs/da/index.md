---
sidebar: auto

tags:
  - installere
  - docs
  - cdn
  - package manager
  - inkluderet
  - hvad er

footer: MIT Licensed | Copyright © 2021
---

::: warning LÆS DETTE
**Warning**: Dette er en betaversion af dokumentationen.
:::

# Dokumentation Start

Kom i gang Hype Style CSS til at bygge dine egne hjemmesider nemt. Hvis du vil vide mere om, kan du læse dokumentationen. Vi har forsøgt at gøre dokumentationen så let som muligt. Så meget vi kan.

## Kom godt i gang

Så du vil begynde at bruge HypeStyle CSS? Og du ved ikke, hvordan du starter? Nå, du følger trinene nedenfor.

### CSS

Kopiér-indsæt stylesheet-linket nedenfor, og føj det til dit projekt.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/hypestyle@0.1.3/dist/hypestyle.min.css"
/>
```

### Installer med package manager

#

<code-group>
<code-block title="YARN">
```bash
yarn add hypestyle
```
</code-block>

<code-block title="NPM" active>
```bash
npm install hypestyle
```
</code-block>
</code-group>

<br>

## Hvad er inkluderet

Når du installerer HypeStyle CSS, får du flere CSS-værktøjer til webudvikling. Så hernede finder du en liste over, hvad der medfølger.

```text
hypestyle/
├── dist/
│   ├── hypestyle.min.css
└──
```

<br>

<br>

## Start Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- HypeStyle CSS -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/hypestyle@0.1.3/dist/hypestyle.min.css"
    />

    <title>Yeah i using HypeStyle CSS!</title>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```

## Do you have

Eyy, hvis du har spørgsmål eller forslag, kan du kontakte os. På vores [GitHub]("/github") side.
