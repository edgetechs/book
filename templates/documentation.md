# Recipe Book Templates Documentation

## Overview
Three professionally designed HTML recipe book templates optimized for PDF conversion via Puppeteer. Each template represents a distinct design philosophy while maintaining print compatibility and clear customization points.

## Template Styles

### 1. Bold Template (`templates/bold/`)
- **Typography**: Oswald (headings) + Roboto (body)
- **Colors**: Dark grays, black, red accent (#ef4444)
- **Style**: High contrast, strong geometric layouts, dramatic imagery
- **Best For**: Fitness recipes, protein guides, bold brand personalities

### 2. Soft Template (`templates/soft/`)
- **Typography**: Poppins + Dancing Script
- **Colors**: Warm pastels, rose tones (#f43f5e family)
- **Style**: Rounded corners, gentle shadows, flowing layouts
- **Best For**: Home cooking, comfort food, family recipes

### 3. Simple Template (`templates/simple/`)
- **Typography**: Inter (single font family)
- **Colors**: Grayscale with minimal accents
- **Style**: Clean lines, maximum white space, minimalist aesthetic
- **Best For**: Professional chefs, modern cuisine, sophisticated brands

## Page Structure (All Templates)

### 1. Cover Page
- Background image overlay
- Main title and subtitle
- Logo placement

### 2. Intro Page  
- Author introduction text
- Profile photo
- Welcome message

### 3. Recipe Pages (10 pages)
Each includes:
- Recipe title and hero image
- Ingredients list
- Step-by-step instructions  
- Nutrition information

### 4. Outro Page
- Thank you message
- Call-to-action button
- Logo

## Placeholder Tokens

### Global Placeholders
- `{{BOOK_TITLE}}` - Main book title
- `{{BOOK_SUBTITLE}}` - Subtitle/tagline
- `{{AUTHOR_NAME}}` - Author/chef name
- `{{AUTHOR_PHOTO}}` - Profile image URL
- `{{LOGO_URL}}` - Logo image URL
- `{{COVER_BACKGROUND_IMAGE}}` - Cover background image
- `{{INTRO_TEXT}}` - Introduction paragraph(s)
- `{{OUTRO_TEXT}}` - Closing message
- `{{CTA_TEXT}}` - Call-to-action button text

### Recipe Placeholders (1-10)
For each recipe number (1-10):
- `{{RECIPE_X_TITLE}}` - Recipe name
- `{{RECIPE_X_IMAGE}}` - Recipe photo URL
- `{{RECIPE_X_INGREDIENTS}}` - Formatted ingredient list
- `{{RECIPE_X_INSTRUCTIONS}}` - Step-by-step cooking instructions
- `{{RECIPE_X_NUTRITION}}` - Nutrition facts grid

## Print Optimization Features

### CSS Print Rules
- `@media print` queries for print-specific styling
- `page-break-before: always` for proper page separation
- `print-color-adjust: exact` for accurate color reproduction
- Proper margins (0.5in) for print safety

### Print-Safe Elements
- No fixed/sticky positioning
- No animations or transitions
- Web-safe fonts via Google Fonts CDN
- Optimized for standard page sizes
- High contrast text for readability

### Puppeteer Compatibility
- Semantic HTML structure
- Inline critical CSS
- External font loading
- Proper image handling
- No JavaScript dependencies

## Customization Guide

### Color Schemes
Each template uses consistent color variables that can be easily modified:

**Bold**: Modify red accent color (#ef4444) and dark backgrounds
**Soft**: Adjust rose color family (#f43f5e variations)  
**Simple**: Update gray scale and minimal accent colors

### Typography
Fonts are loaded via Google Fonts CDN for PDF compatibility:
- Ensure fonts are available and load properly
- Maintain font-weight consistency
- Use fallback fonts for safety

### Images
- Use high-resolution images (minimum 1200px width)
- Optimize file sizes for faster loading
- Ensure proper aspect ratios for layouts
- Consider grayscale conversion for Simple template

### Content Formatting

#### Ingredients Lists
Format as HTML `<li>` elements:
```html
<li>2 cups flour</li>
<li>1 tsp salt</li>
<li>3 large eggs</li>
```

#### Instructions
Format as numbered paragraphs or ordered list:
```html
<p><strong>1.</strong> Mix dry ingredients in large bowl.</p>
<p><strong>2.</strong> Add wet ingredients gradually.</p>
```

#### Nutrition Info
Format as key-value pairs:
```html
<div>Calories: 320</div>
<div>Protein: 15g</div>
<div>Carbs: 45g</div>
<div>Fat: 8g</div>
```

## Technical Requirements

### Dependencies
- Tailwind CSS (via CDN)
- Google Fonts (Oswald, Roboto, Poppins, Dancing Script, Inter)
- Modern browser with CSS Grid/Flexbox support

### File Size Considerations
- Optimize images before embedding
- Minimize external resources
- Consider font subset loading for production

### Browser Compatibility  
Tested and optimized for:
- Chrome/Chromium (Puppeteer engine)
- Print media queries
- PDF generation workflows

## Usage Instructions

1. **Select Template**: Choose based on brand personality and content type
2. **Replace Placeholders**: Substitute all `{{TOKEN}}` values with actual content
3. **Test Images**: Verify all image URLs are accessible and properly sized
4. **Preview**: Test in browser with print preview to check layout
5. **Generate PDF**: Use Puppeteer with appropriate page settings
6. **Validate Output**: Check PDF for proper page breaks and formatting

## Recommended Puppeteer Settings

```javascript
const pdf = await page.pdf({
  format: 'A4',
  printBackground: true,
  margin: {
    top: '0.5in',
    bottom: '0.5in', 
    left: '0.5in',
    right: '0.5in'
  }
});
```

This documentation ensures proper implementation and customization of all three recipe book templates.