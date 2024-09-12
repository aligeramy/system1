
## system1.js - React but 12 lines of code.
Load your html component files dynamically.


### Features:
- Dynamically load HTML files into your page (using 12 lines of js with error handling and support for dark / light mode).
  
## Instructions

### 1. Include `system1.js` before </body> tag.

**`system1.js`**  allows you to load HTML components dynamically from a `/components` folder.
Components like headers, footers, and menus can be modularly loaded into placeholders in your HTML.

#### Usage:
- Create your HTML files and place them in the `/components` folder (e.g., `menu.html`, `footer.html`).
- In your HTML, use the `data-component` attribute to indicate where to load the component.

Example:

```html
<!-- Loads menu component - components/menu.html -->
<div data-component="menu"></div>

<!-- Loads footer component - components/footer.html  -->
<div data-component="footer"></div>
