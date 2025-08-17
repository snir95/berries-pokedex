# Berries Pokedex

An interactive Pokedex-style application for exploring Pokemon berries, featuring a unique firmness-based filtering system.

## Features

- Interactive vertical slider for filtering berries by firmness level
- Real-time search functionality with debounce
- Smooth animations and visual feedback
- Local storage caching for improved performance
- Responsive design with modern UI/UX

## Technologies Used

- React
- Vite
- @radix-ui/react-slider
- PokeAPI

## Getting Started

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd berries-pokedex
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure

- `/src/components` - React components
- `/src/hooks` - Custom React hooks
- `/src/api.js` - API integration with PokeAPI
- `/src/App.jsx` - Main application component
- `/src/App.css` - Main styles

## Features Implementation

### Firmness Slider
- Vertical slider with interactive feedback
- Color-coded firmness levels
- Smooth animations and transitions

### Berry Collection
- Displays berry cards with names and flavors
- Filters based on firmness level
- Search functionality with debounce

### Data Management
- Efficient API calls with caching
- Local storage for improved performance
- Error handling and loading states

## Contributing

Feel free to submit issues and enhancement requests!