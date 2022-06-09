---
  sidebar_position: 1
  title: Navbar
---

<head>
  <html className="some-extra-html-class" />
  <body className="other-extra-body-class" />
  <meta charSet="utf-8" />
  <meta name="twitter:card" content="summary" />
  <link rel="stylesheet" href="https://docusaurus.io/docs/markdown-features/head-metadata" />
  <link
    rel="stylesheet"
    href="https://unpkg.com/hypestyle@0.1.9/dist/css/hypestyle.min.css"
  />
</head>

# Navbar

Hypestyle dont come with a full functional navigation bar. But it comes with some help classes to make it easier.

## Example of a navbar

```html
<nav class="navbar h-14">
    <h1 class="site-title">Site title</h1>
    <ul class="display-flex">
        <li><a class="ml-1" href="#">Home</a></li>
        <li><a class="ml-1" href="#">About</a></li>
        <li><a class="ml-1" href="#">Contact</a></li>
    </ul>
</nav>
```
