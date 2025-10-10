# Shayoo-Projects jsDelivr CDN

This repository contains CSS files and other assets that can be served via jsDelivr CDN.

## Usage

### CSS Files

To use the main CSS file in your project, add the following link to your HTML:

```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Shayoo-Projects/jsDelivr-CDN@main/site/style.css">
```

### Features

The CSS file includes:

- Light and dark theme variables
- CSS reset
- Base styling for typography, layout, and components
- Responsive design for various screen sizes
- Styling for common UI components:
  - Navigation
  - Cards
  - Forms
  - Buttons
  - Sections

### CSS Variables

The stylesheet uses CSS variables (custom properties) for easy theming. Here are some of the key variables:

#### Light Theme (default)
```css
:root {
  --background: #cccccc;
  --foreground: #1f1f1f;
  --primary: #b71c1c;
  --secondary: #556b2f;
  --accent: #4682b4;
  /* ... more variables available */
}
```

#### Dark Theme
```css
.dark {
  --background: #1a1a1a;
  --foreground: #e0e0e0;
  --primary: #e53935;
  --secondary: #689f38;
  --accent: #64b5f6;
  /* ... more variables available */
}
```

To enable dark theme, add the `dark` class to your body or html element:

```html
<body class="dark">
  <!-- Your content here -->
</body>
```

## Version

Current version: 1.0.0

## License

MIT
