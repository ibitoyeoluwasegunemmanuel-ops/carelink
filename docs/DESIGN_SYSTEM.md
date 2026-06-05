# CareLink Africa - Design System

## Brand Identity

### Brand Values
- **Empathetic** - Understanding and compassionate
- **Accessible** - Inclusive for all abilities
- **Trustworthy** - Professional and reliable
- **Supportive** - Community-focused
- **Empowering** - Enabling families to take control

### Brand Voice
- Warm and welcoming
- Professional but approachable
- Hopeful and encouraging
- Clear and straightforward
- Respectful of all cultures and traditions

## Color Palette

### Primary Colors
- **Primary 600**: `#f5704e` - Main brand color (warm, welcoming)
- **Primary 500**: `#ff8070` - Accent on primary
- **Primary 700**: `#e05c40` - Hover states
- **Primary 100**: `#ffe8df` - Light backgrounds

### Secondary Colors
- **Secondary 600**: `#448271` - Trust, calm (teal/green)
- **Secondary 500**: `#5a9687` - Accent
- **Secondary 700**: `#38685c` - Hover states
- **Secondary 100**: `#e0f0ee` - Light backgrounds

### Accent Colors
- **Accent 600**: `#e97d2a` - Highlight, energy (golden)
- **Accent 500**: `#f79454` - Bright highlight
- **Accent 700**: `#c46321` - Hover states
- **Accent 100**: `#fde0c7` - Light backgrounds

### Neutral Colors
- **Neutral 900**: `#111827` - Text/dark elements
- **Neutral 800**: `#1f2937` - Secondary text
- **Neutral 700**: `#374151` - Tertiary text
- **Neutral 600**: `#4b5563` - Muted text
- **Neutral 500**: `#6b7280` - Disabled states
- **Neutral 400**: `#9ca3af` - Borders
- **Neutral 300**: `#d1d5db` - Light borders
- **Neutral 200**: `#e5e7eb` - Light backgrounds
- **Neutral 100**: `#f3f4f6` - Very light backgrounds
- **Neutral 50**: `#f9fafb` - Lightest backgrounds

### Color Usage
- **Primary** - Main CTAs, primary actions, brand elements
- **Secondary** - Supporting CTAs, calm/trust elements
- **Accent** - Highlights, important notifications, warnings
- **Neutral** - Text, backgrounds, borders, structure

## Typography

### Font Families
- **Display**: Poppins (headings, titles)
  - Weight: 400, 500, 600, 700
  - Use for: H1, H2, H3, brand titles
  
- **Body**: Inter (body text, UI elements)
  - Weight: 400, 500, 600
  - Use for: Paragraphs, labels, buttons, descriptions

### Type Scale
```
H1: 3.5rem (56px) - 700 weight - Page titles, hero
H2: 2.25rem (36px) - 700 weight - Section titles
H3: 1.875rem (30px) - 700 weight - Subsection titles
H4: 1.5rem (24px) - 700 weight - Card titles
H5: 1.25rem (20px) - 600 weight - Smaller titles
H6: 1rem (16px) - 600 weight - Labels, small titles

Body Large: 1.125rem (18px) - 400 weight - Lead text
Body Regular: 1rem (16px) - 400 weight - Body copy
Body Small: 0.875rem (14px) - 400 weight - Secondary text
Body Tiny: 0.75rem (12px) - 400 weight - Helper text

Button: 1rem (16px) - 600 weight - Button text
Label: 0.875rem (14px) - 600 weight - Form labels
Caption: 0.75rem (12px) - 500 weight - Captions
```

### Line Height
- H1-H3: 1.2
- H4-H6: 1.3
- Body Large: 1.6
- Body Regular: 1.6
- Body Small: 1.5
- Body Tiny: 1.4

## Spacing System

### Scale (8px base unit)
```
2px  = 0.125rem (xs)
4px  = 0.25rem
8px  = 0.5rem  (sm)
12px = 0.75rem
16px = 1rem    (md)
24px = 1.5rem  (lg)
32px = 2rem    (xl)
40px = 2.5rem
48px = 3rem    (2xl)
56px = 3.5rem
64px = 4rem    (3xl)
80px = 5rem
96px = 6rem
```

### Application
- **Padding**: 16px, 24px, 32px
- **Margins**: 16px, 24px, 32px, 48px
- **Gaps**: 8px, 12px, 16px, 24px
- **Border Radius**: 8px, 12px, 16px, 24px

## Components

### Buttons
```
Primary Button
- Background: Primary 600
- Text: White
- Padding: 12px 24px (3-action)
- Border Radius: 8px
- Font: 600 weight
- Hover: Primary 700
- Active: Primary 800
- Disabled: 50% opacity

Secondary Button
- Background: Secondary 600
- Text: White
- Padding: 12px 24px
- Border Radius: 8px
- Font: 600 weight
- Hover: Secondary 700

Outline Button
- Background: Transparent
- Border: 2px Primary 600
- Text: Primary 600
- Padding: 12px 24px
- Border Radius: 8px
- Hover: Primary 50 background

Ghost Button
- Background: Transparent
- Text: Primary 600
- Padding: 12px 24px
- Border Radius: 8px
- Hover: Primary 50 background
```

### Cards
```
Standard Card
- Background: White
- Border: 1px Neutral 200
- Border Radius: 12px
- Padding: 24px
- Box Shadow: 0 2px 8px rgba(0,0,0,0.08)
- Hover: Shadow increase, slight border color change

Featured Card
- Background: White
- Border: 2px Primary 300
- Border Radius: 12px
- Padding: 24px
- Box Shadow: 0 4px 12px rgba(255,112,80,0.15)
```

### Form Elements
```
Text Input
- Border: 1px Neutral 300
- Border Radius: 8px
- Padding: 12px 16px
- Focus: 2px ring Primary 500
- Font: 1rem Inter 400

Select Dropdown
- Border: 1px Neutral 300
- Border Radius: 8px
- Padding: 12px 16px
- Background: White
- Focus: 2px ring Primary 500

Checkbox
- Size: 20px × 20px
- Border Radius: 4px
- Border: 2px Neutral 400
- Checked: Primary 600 background
- Focus: 2px ring Primary 500

Radio
- Size: 20px diameter
- Border: 2px Neutral 400
- Checked: Primary 600 with white center
- Focus: 2px ring Primary 500

Label
- Font: 14px 600 weight
- Color: Neutral 700
- Margin bottom: 8px
```

### Badges
```
Primary Badge
- Background: Primary 100
- Text: Primary 700
- Padding: 4px 12px
- Border Radius: 16px
- Font: 12px 600 weight

Secondary Badge
- Background: Secondary 100
- Text: Secondary 700

Accent Badge
- Background: Accent 100
- Text: Accent 700
```

### Navigation
```
Header
- Background: White
- Border Bottom: 1px Neutral 200
- Height: 80px
- Sticky: top: 0
- Z-index: 50

Nav Link
- Color: Neutral 700
- Font: 16px 500 weight
- Hover: Primary 600
- Active: Primary 600

Dropdown Menu
- Background: White
- Border: 1px Neutral 200
- Border Radius: 8px
- Box Shadow: 0 4px 12px rgba(0,0,0,0.15)
- Position: Absolute, positioned right/left of trigger

Footer
- Background: Neutral 900
- Text: Neutral 100
- Padding: 64px 0
- Links: Neutral 400 → Primary 400 on hover
```

### Alerts & Notifications
```
Success Alert
- Background: Green 50
- Border Left: 4px Green 600
- Text: Green 900
- Icon: Green 600

Error Alert
- Background: Red 50
- Border Left: 4px Red 600
- Text: Red 900
- Icon: Red 600

Warning Alert
- Background: Accent 50
- Border Left: 4px Accent 600
- Text: Accent 900
- Icon: Accent 600

Info Alert
- Background: Primary 50
- Border Left: 4px Primary 600
- Text: Primary 900
- Icon: Primary 600

Toast
- Position: Bottom right
- Padding: 16px 24px
- Border Radius: 8px
- Auto-dismiss: 5 seconds
- Animation: Slide up fade in
```

## Layout & Grids

### Container
- **Max Width**: 1280px
- **Padding**: 16px (mobile), 24px (tablet), 32px (desktop)
- **Margin**: 0 auto

### Grid System
```
Mobile (< 640px)
- 1 column
- Gap: 16px

Tablet (640px - 1024px)
- 2-3 columns
- Gap: 24px

Desktop (> 1024px)
- 3-4 columns
- Gap: 32px
```

### Sections
- **Hero Section**: Full width, 60-80px padding vertical
- **Feature Sections**: 80px padding vertical
- **Card Grids**: 2-4 columns, 24-32px gaps
- **Feature Boxes**: Minimum width 280px

## Interactive States

### Hover
- Subtle background color change
- Scale: 1.02
- Shadow increase
- Color shift toward darker shade
- Cursor change to pointer

### Active/Selected
- Darker color variant
- Border color change
- Maintained shadow
- Visual feedback

### Focus
- 2px ring in focus color
- 2px offset from element
- Applies to all interactive elements
- For keyboard accessibility

### Disabled
- 50% opacity
- Cursor: not-allowed
- No hover effects
- Muted colors

## Animations & Transitions

### Duration
- Fast: 150ms (hover effects, color changes)
- Normal: 300ms (fade in, slide, appear)
- Slow: 500ms (complex animations, loading states)

### Easing
- `ease-in-out` - Default for most
- `ease-out` - For appearance animations
- `ease-in` - For disappearance
- `cubic-bezier(0.34, 1.56, 0.64, 1)` - Spring effect

### Effects
- **Fade**: Opacity 0 → 1
- **Slide**: Transform translateY/translateX
- **Scale**: Transform scale
- **Bounce**: Subtle scale pulse
- **Glow**: Box-shadow expansion

## Responsive Breakpoints

```
Extra Small (xs): < 640px
Small (sm): 640px - 768px
Medium (md): 768px - 1024px
Large (lg): 1024px - 1280px
Extra Large (xl): > 1280px
```

## Accessibility Guidelines

1. **Color Contrast**
   - Normal text: 4.5:1 ratio minimum
   - Large text: 3:1 ratio minimum
   - Never use color alone to convey information

2. **Typography**
   - Minimum 16px font size on mobile
   - Line height minimum 1.5
   - Avoid all caps for readability

3. **Focus States**
   - Clear visible focus indicators
   - 2px minimum width
   - Sufficient contrast ratio

4. **Interactive Elements**
   - Minimum 44×44px touch targets
   - 8px minimum spacing between targets
   - Clear labels for form fields

5. **Semantic HTML**
   - Proper heading hierarchy
   - Form labels with inputs
   - Landmarks for page sections

6. **Reduced Motion**
   - Respect `prefers-reduced-motion`
   - Provide alternatives to animations
   - Test with screen readers

## Light Mode (Primary) & Future Dark Mode

Current implementation uses light mode. Future dark mode consideration:
- Background: Neutral 900 → Dark background
- Text: Neutral 900 → Neutral 100
- Cards: White → Neutral 800
- Borders: Neutral 200 → Neutral 700
- Shadows: Reduced opacity on dark mode

## Icon System

- **Set**: React Icons (for now)
- **Size**: 16px, 20px, 24px, 32px, 48px
- **Color**: Inherit from context or explicit color class
- **Purpose**: Enhance text, indicate status, navigation aids
