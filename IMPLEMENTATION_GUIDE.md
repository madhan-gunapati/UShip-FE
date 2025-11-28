# UShip Frontend - Employee Directory POC

A modern, feature-rich Frontend POC demonstrating a complete employee management system with multiple views, navigation patterns, and smooth animations.

## Features

### 1. Navigation
- **Horizontal Menu** - Top navigation bar with main menu items and icons
- **Hamburger Menu** - Collapsible sidebar menu with one-level deep submenus
  - Animated chevron rotation on expand/collapse
  - Smooth height animations for submenu sections

### 2. Data Views
- **Grid View** - Table format with 10 columns of employee data
  - Sortable columns (click column header to sort A-Z or Z-A)
  - Responsive layout
  - Quick "View" button for each employee

- **Tile View** - Card-based grid layout
  - Responsive grid (1-4 columns based on screen size)
  - Employee picture with gradient background
  - Hover zoom effect on images
  - Badge showing gender and nationality

### 3. Actions
- **Menu Button (⋮)** - Per-tile action menu with:
  - Edit option
  - Flag option
  - Delete option
  - Smooth popup animation

### 4. Details View
- **Modal/Popup Display** - Full-screen modal with:
  - Employee photo
  - Complete information (name, email, phone, location, etc.)
  - Gender, nationality, date of birth, registration date
  - Timezone information
  - Beautiful layout with glassmorphism header
  - Close button and smooth exit animations

### 5. Animations
- Framer Motion animations throughout:
  - Page transitions
  - Menu expand/collapse
  - Card entrance animations (staggered)
  - Modal scale and fade effects
  - Hover effects on buttons and cards
  - Smooth view mode switching

### 6. Data Source
- Uses **RandomUser API** to fetch 20 employee records
- Includes complete employee details:
  - Name, email, phone
  - Location, nationality
  - Profile picture
  - Date of birth, registration date
  - Timezone

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Step 1: Install Dependencies

```bash
cd /Users/madhan/Desktop/projects/UShip-FE
```

#### Core Dependencies (Already Installed)
```bash
npm install react react-dom
npm install framer-motion lucide-react
npm install clsx tailwind-merge
```

#### Development Dependencies (Already Installed)
```bash
npm install -D @tailwindcss/postcss tailwindcss postcss autoprefixer
npm install -D vite typescript @vitejs/plugin-react
npm install -D eslint typescript-eslint
```

### Step 2: Verify Installation
All packages should already be installed from the previous steps. You can verify by running:

```bash
npm list --depth=0
```

### Step 3: Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Step 4: Build for Production

```bash
npm run build
```

This will create an optimized build in the `dist/` directory.

### Step 5: Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── HamburgerMenu.tsx      # Sidebar navigation with submenus
│   ├── HorizontalMenu.tsx     # Top navigation bar
│   ├── GridView.tsx           # Table view component
│   ├── TileView.tsx           # Card view component
│   └── DetailsView.tsx        # Modal for full employee details
├── hooks/
│   └── useEmployees.ts        # Custom hook for API data fetching
├── App.tsx                    # Main app component
├── main.tsx                   # React entry point
├── index.css                  # Tailwind CSS styles
└── App.css                    # App-specific styles
```

## Key Components

### HamburgerMenu Component
- Slide-out navigation menu with icon toggle
- One-level deep submenus with chevron animations
- Responsive positioning

### HorizontalMenu Component
- Top gradient header with logo
- Menu items with icons (emoji)
- Animated entrance with staggered delay

### GridView Component
- Sortable table with 9 columns of employee data
- Hover effects and smooth transitions
- Action button for each row

### TileView Component
- Grid of employee cards (1-4 columns responsive)
- Image with hover zoom effect
- Action menu button with sub-menu
- Gender and nationality badges

### DetailsView Component
- Modal overlay with backdrop blur
- Responsive layout with image and details side-by-side
- Organized information sections
- Smooth spring animations on open

### useEmployees Hook
- Fetches data from RandomUser API
- Handles loading and error states
- Returns formatted employee data

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations and transitions
- **Vite** - Fast build tool and dev server
- **Lucide React** - Icon library
- **RandomUser API** - Sample employee data

## Features in Detail

### Menu System
The menu system showcases both modern navigation patterns:

1. **Hamburger Menu (Mobile-friendly)**
   - Compact sidebar that slides out
   - Nested menu structure
   - Smooth animations

2. **Horizontal Menu (Desktop-primary)**
   - Always-visible top navigation
   - Quick access to main sections

### View Switching
Users can seamlessly switch between two viewing modes:
- **Tile View** - Better for browsing and visual exploration
- **Grid View** - Better for data comparison and sorting

### User Interactions
- Click tiles to see full details
- Click column headers to sort in grid view
- Use the menu (⋮) button for additional actions
- Use view toggle buttons to switch layouts

## API Integration

The application uses the **RandomUser API** for demonstration:

```
https://randomuser.me/api/?results=20
```

This returns realistic employee data including:
- Full names and contact information
- Profile pictures
- Demographic data
- Account information

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized with code splitting
- Lazy animation triggers
- Efficient re-renders with React 19
- CSS optimization with Tailwind purging

## Customization

### Add More Menu Items
Edit `HamburgerMenu.tsx` and `HorizontalMenu.tsx` components:

```tsx
const menuItems = [
  {
    label: 'Your Item',
    href: '#',
    submenu: [
      { label: 'Sub Item', href: '#' },
    ],
  },
];
```

### Change API Source
Modify `useEmployees.ts` to use different data sources:

```tsx
const response = await fetch('YOUR_API_URL');
```

### Customize Styling
All Tailwind classes can be modified directly in components. Update color schemes in component className strings.

### Add More Columns
Edit `GridView.tsx`:

```tsx
const columns: (keyof Employee)[] = [
  'name',
  'email',
  // Add more columns here
];
```

## Troubleshooting

### Dev server not starting
```bash
npm run dev -- --host
```

### Styling not appearing
- Ensure `index.css` is imported in `main.tsx`
- Check that PostCSS config is correct
- Restart dev server

### API data not loading
- Check your internet connection
- Verify RandomUser API is accessible
- Check browser console for CORS errors

## Future Enhancements

- Add pagination for large datasets
- Implement data filtering
- Add export to CSV functionality
- Implement user authentication
- Add real backend API integration
- Implement real CRUD operations
- Add search functionality
- Add advanced animations

## License

This is a POC for educational purposes.

## Support

For issues or questions, refer to the component documentation within the code files.
