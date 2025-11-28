# Quick Start Guide - UShip Employee Directory POC

## What You Need to Know

This project is a fully functional **Proof of Concept** demonstrating all requested features for a modern employee management system frontend.

## Installed Packages

All required packages have been installed. Here's what was added:

### Production Dependencies
- `react@19.2.0` - Core React library
- `react-dom@19.2.0` - React DOM rendering
- `framer-motion@^11+` - Advanced animations
- `lucide-react@latest` - Beautiful icons
- `clsx` - Utility for className conditionals
- `tailwind-merge` - Tailwind CSS utilities

### Development Dependencies
- `@tailwindcss/postcss` - Tailwind CSS PostCSS plugin
- `tailwindcss` - Utility-first CSS framework
- `postcss` & `autoprefixer` - CSS processing
- `vite@7.2.4` - Ultra-fast build tool
- `typescript@5.9.3` - Type safety
- `eslint` - Code linting

## Running the Project

### Development Mode
```bash
npm run dev
```
App will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## What Has Been Implemented

### ✅ 1. Hamburger Menu
- Located on the left sidebar
- Click the hamburger icon (☰) to open/close
- Features one-level deep submenus on:
  - Employees (View All, Add New, Reports)
  - Departments (Engineering, Sales, HR)
- Smooth animations with Framer Motion

### ✅ 2. Horizontal Menu
- Top navigation bar with logo "UShip"
- Menu items: Home, Browse, Categories, Favorites, Help
- Animated entrance with staggered delay
- Responsive and always visible

### ✅ 3. Grid View
- Beautiful table layout with 10 columns:
  - Name, Email, Phone, Location, Nationality
  - Gender, DOB, Registered, Timezone
- **Sortable columns** - Click any header to sort A-Z or Z-A
- "View" button on each row to see full details
- Responsive horizontal scrolling on mobile

### ✅ 4. Tile View
- Card-based grid layout
- Responsive (1 col mobile, 2 cols tablet, 3-4 cols desktop)
- Shows key information:
  - Employee photo with hover zoom
  - Name, email, location
  - Gender and nationality badges
- **Animated entrance** - Cards fade and scale in with staggered delay

### ✅ 5. Tile Action Menu (⋮)
- Three-dot menu button on each tile
- Options: Edit, Flag, Delete
- Smooth popup animation
- Prevents accidental clicks with stopPropagation

### ✅ 6. Details View (Modal)
- Full-screen modal on tile/row click
- Shows complete employee information:
  - Profile picture
  - Name and email
  - Phone and location
  - Gender, nationality, DOB, registration date
  - Timezone
- Beautiful layout with glassmorphism effect
- Spring animation on open/close

### ✅ 7. Navigation Back
- Click "Close" button in modal to return to tile/grid view
- Click outside the modal (backdrop) to close
- Smooth transition back to previous view

### ✅ 8. Public API Integration
- **RandomUser API** - Fetches 20 random employee profiles
- Real profile pictures
- Complete employee data
- No authentication needed

### ✅ Animations & Framer Motion
- Page entrance animations
- Menu expand/collapse with rotation
- Card staggered entrance
- Modal scale and fade effects
- Button hover and tap effects
- View switching transitions
- Image zoom on hover

## File Structure

```
src/
├── components/
│   ├── HamburgerMenu.tsx       # Sidebar with nested menus
│   ├── HorizontalMenu.tsx      # Top navigation bar
│   ├── GridView.tsx            # Table view (sortable)
│   ├── TileView.tsx            # Card grid view
│   └── DetailsView.tsx         # Modal with full details
├── hooks/
│   └── useEmployees.ts         # API hook for data fetching
├── App.tsx                     # Main component with state
├── main.tsx                    # React entry point
├── index.css                   # Tailwind CSS imports
└── App.css                     # App styles
```

## Key Features

### State Management
- React hooks (useState, useEffect)
- Component-level state for view mode and selected employee
- Custom hook for API data fetching and caching

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Grid layouts adapt from 1 to 4 columns
- Hamburger menu always accessible
- Table scrolls horizontally on small screens

### Performance
- Efficient re-renders with React 19
- Optimized animations with Framer Motion
- Lazy component rendering in modals
- CSS optimization with Tailwind purging

### Accessibility
- Semantic HTML
- Keyboard support (ESC to close modal)
- Clear button labels and icons
- High contrast colors

## Testing the Features

### 1. Test Hamburger Menu
- Click the hamburger icon on the left
- Hover over "Employees" or "Departments"
- Click on a submenu item

### 2. Test View Toggle
- Look for "View Mode:" buttons at the top
- Switch between Tile View and Grid View
- Notice the smooth transition

### 3. Test Grid Sorting
- Click any column header in Grid View
- Click again to reverse sort order
- See the ↑ or ↓ indicator

### 4. Test Tile Actions
- Click the ⋮ button on any tile
- See the popup menu with Edit, Flag, Delete
- Try clicking outside to close menu

### 5. Test Details Modal
- Click on any tile or Grid View row
- See the full employee details in a beautiful modal
- Click "Close" or click outside to return

### 6. Test Animations
- Watch the entrance animations on page load
- Notice the staggered card animations
- See the smooth view transitions

## Customization Examples

### Change Colors
Edit `App.tsx` and component files:
```tsx
className="bg-blue-600 text-white" // Change these colors
```

### Add More Employees
Edit `useEmployees.ts`:
```tsx
const response = await fetch('https://randomuser.me/api/?results=50'); // Change 20 to 50
```

### Add More Columns
Edit `GridView.tsx`:
```tsx
const columns: (keyof Employee)[] = [
  'name',
  'email',
  // Add more here
];
```

### Change Animation Speed
Edit `Framer Motion` components:
```tsx
transition={{ delay: 0.1, duration: 0.3 }} // Adjust duration
```

## Troubleshooting

### Port 5173 Already in Use
```bash
npm run dev -- --port 5174
```

### Modules Not Found
```bash
npm install
npm run dev
```

### Styles Not Loading
- Ensure `index.css` is imported in `main.tsx`
- Check browser DevTools for CSS loading
- Try clearing browser cache

### API Not Loading
- Check internet connection
- Verify RandomUser API is accessible: https://randomuser.me/api/?results=1
- Check browser console for CORS errors

## Next Steps

You can further enhance this POC with:

1. **State Management** - Add Redux or Zustand for complex state
2. **Real Backend** - Replace API with your own backend
3. **Search & Filter** - Add search and advanced filtering
4. **Pagination** - Handle large datasets efficiently
5. **Export** - Add CSV/PDF export functionality
6. **Authentication** - Add login and user management
7. **Dark Mode** - Toggle between light and dark themes
8. **More Animations** - Add page transitions and micro-interactions

## Live Testing

The app is currently running at `http://localhost:5173/` with hot module reloading enabled. Any changes you make to the code will be reflected immediately in the browser!

## Questions?

Refer to the component files for detailed comments and the `IMPLEMENTATION_GUIDE.md` for comprehensive documentation.

---

**Happy exploring! 🚀**
