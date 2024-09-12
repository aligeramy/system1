
## system1.js - React but 12 lines of code.
Load your html component files dynamically.


### Features:
- Dynamically load HTML files into your page (using 12 lines of js with error handling and support for dark / light mode).
  
## Instructions

### 1. Include `system1.js`

**`system1.js`**  allows you to load HTML components dynamically from a `/components` folder.
Components like headers, footers, and menus can be modularly loaded into placeholders in your HTML.

#### Usage:
- Create your HTML components (eg. menu) and place them in the `/components` folder (e.g., `components/menu.html`, `components/footer.html`).
- In your HTML, use the `data-component` attribute to indicate where to load the component.

Example:

```html
<body>
  <!-- Load HTML from "components/menu.html" -->
  <div data-component="menu"></div>
  ...
  <!-- Load HTML from "components/yourComponent.html" -->
  <div data-component="yourComponent"></div>
  
  <!-- Load system1 -->
  <script src="js/system1.js"></script>
</body>
