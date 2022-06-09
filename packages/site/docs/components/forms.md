---
sidebar_position: 2
title: Forms
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

#### Components

# Form

Read about how to use the Form classes to your forms.

## Example of a form

```html
<form>
    <div class="form-group">
        <label>Email address</label>
        <input
            type="email"
            class="form-control form-invalid"
            placeholder="Enter email"
        />
    </div>

    <div class="form-group">
        <label>Password</label>
        <input
            type="password"
            class="form-control"
            placeholder="Enter password"
        />
    </div>

    <button type="submit" class="btn btn-primary text-white">Submit</button>
</form>
```

## Form Group

```html
<div class="form-group">
    <label>Email address</label>
    <input
        type="email"
        class="form-control form-invalid"
        placeholder="Enter email"
    />
</div>
```

<div class="form-group">
    <label>Email address</label>
    <input
        type="email"
        class="form-control form-invalid"
        placeholder="Enter email"
    />
</div>

### Form Disabled

```html
<div class="form-group">
    <label>Email address</label>
    <input
        type="email"
        class="form-control form-invalid"
        placeholder="Enter email"
        disabled
    />
</div>
```

<div class="form-group">
    <label>Email address</label>
    <input
        type="email"
        class="form-control form-invalid"
        placeholder="Enter email"
        disabled
    />
</div>

### Form valid/invalid

```html
<div class="form-group">
    <label>Email address</label>
    <input
        type="email"
        class="form-control form-invalid form-valid"
        placeholder="Enter email"
    />
</div>
```

<div class="form-group">
    <label>Email address</label>
    <input
        type="email"
        class="form-control form-invalid form-valid"
        placeholder="Enter email"
        required
    />
</div>

## Form Label

The form label have is already styled.

```html
<label>Email address</label>
```

## Form classes

| Class        | Properties                                                               |
| ------------ | ------------------------------------------------------------------------ |
| form-group   | `The class that makes the form div look good`                            |
| form-control | `The class that makes your form input looks good`                        |
| form-invalid | `If the content in a form is invalid, then the border color will be red` |
| form-valid   | `If the content in a form is valid, then the border color will be green` |
