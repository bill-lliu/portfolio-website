# Portfolio Website - AI Development Guide

> A 3D interactive portfolio website built with React, Three.js, and Mantine UI. Features animated camera transitions, floating portals, and glassmorphism UI overlays.

## Quick Commands

```bash
# Development
npm run dev       # Start Vite dev server (HMR enabled)
npm run build     # Production build to /dist
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Tech Stack

- **Framework**: React 18 + Vite 4 (SWC plugin for Fast Refresh)
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei
- **UI Components**: Mantine v7 (violet/purple theme, Balsamiq Sans font)
- **Styling**: Vanilla CSS with glassmorphism effects
- **License**: GNU GPL v3.0

## Architecture Overview

```
src/
├── main.jsx              # App entry, MantineProvider + ScreenProvider
├── App.jsx               # Root: Overlay (UI) + Experience (3D)
├── contexts/
│   ├── ScreenContext.jsx # Global state: screens, camera modes, audio
│   └── CameraController.jsx # drei CameraControls with animated transitions
├── components/
│   ├── experience/       # Three.js canvas components
│   │   ├── Experience.jsx # Canvas setup: Sky, Stars, Fog, Scene, Clouds
│   │   ├── Scene.jsx     # GLTF model (1086 lines, auto-generated)
│   │   ├── Portal.jsx    # Clickable floating navigation boxes
│   │   ├── Portals.jsx   # Renders all Portal components
│   │   ├── Clouds.jsx    # drei Cloud effects (white/pink/purple)
│   │   └── Pages.jsx     # Unused alternative page rendering
│   ├── overlay/          # HTML UI layer over canvas
│   │   ├── Overlay.jsx   # Screen router based on currentScreen
│   │   ├── Navbar.jsx    # Mantine buttons, responsive burger menu
│   │   └── LoadingScreen.jsx # Progress bar + Start button
│   └── screens/          # Content screens (glassmorphism cards)
│       ├── Home.jsx      # Hero title + camera control help text
│       ├── About.jsx     # Profile image + bio with ScrollArea
│       ├── Resume.jsx    # PDF link placeholder
│       ├── Projects.jsx  # GitHub/Devpost links placeholder
│       ├── Contact.jsx   # Email/phone/social links
│       └── Credits.jsx   # Attributions for models/music/code
└── index.css             # Global styles, animations, screen styling
```

## Key Concepts

### Screen Navigation System

The `ScreenContext` defines screens with 3D coordinates:

```javascript
const Screens = {
  Home: { position: [6, -4, 20], target: [0.5, 0, 0], portal: [0, 100, 0] },
  About: { position: [0.4, -0.8, 7.2], target: [0.2, -2.2, 3.2], portal: [0.2, -1.8, 5] },
  // ... more screens
};
```

- **position**: Camera position for this screen
- **target**: Camera lookAt target
- **portal**: 3D position of clickable portal in scene

### Camera Modes

```javascript
const CameraModes = { FREE: "FREE", LIMITED: "LIMITED", LOCKED: "LOCKED" };
```

### Global State (ScreenContext)

| State | Type | Purpose |
|-------|------|---------|
| `started` | boolean | Tracks if user clicked "Start" button |
| `currentScreen` | object | Active screen with position/target/portal |
| `currentCameraMode` | string | Camera control restrictions |
| `playAudio` | boolean | Background music toggle |

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.screen` | Glassmorphism content panel (semi-transparent purple, blur) |
| `.intro` / `.intro--disappear` | Loading screen visibility |
| `.hero` | Large animated title text |
| `.explore` | Start button with fill animation |
| `.cover` / `.cover--disappear` | Fade overlay for loading |
| `.nav_button` | Navbar button styling |

## Assets

```
public/
├── audio/         # bgm.mp3 (lofi), woosh.mp3 (transition sound)
├── fonts/         # Cabin_Sketch font files
├── images/        # bill_logo.svg, profile_picture.jpeg
└── models/        # scene.gltf + 14 texture/binary files
```

## Development Patterns

### Adding a New Screen

1. Add screen config to `ScreenContext.jsx` Screens object
2. Create component in `src/components/screens/NewScreen.jsx`
3. Add conditional render in `Overlay.jsx`
4. Portal auto-generates from Screens object

### Screen Component Pattern

```jsx
const NewScreen = () => {
  const { currentScreen } = useScreenContext();
  const [opened, setOpen] = useState(false);

  useEffect(() => {
    if (currentScreen.name === "NewScreen") {
      setTimeout(() => setOpen(true), 1500); // Delay for camera transition
    } else {
      setOpen(false);
    }
  }, [currentScreen]);

  return opened ? (
    <Affix className="screen">
      {/* Content */}
    </Affix>
  ) : null;
};
```

### Mantine Theme (in main.jsx)

```javascript
theme={{
  headings: { fontFamily: "Cabin Sketch, sans-serif", textAlign: "center" },
  fontFamily: "Balsamiq Sans, sans-serif",
  primaryColor: "violet",
  defaultRadius: "xl",
}}
```

## External Integrations

- **Tawk.to**: Live chat widget (embedded in `index.html`)
- **Google Fonts**: Balsamiq Sans, Cabin Sketch, Patrick Hand

## Known Placeholders / TODOs

- `Resume.jsx`: Links to external PDF, planned interactive resume
- `Projects.jsx`: Links to GitHub/Devpost, planned interactive showcase
- `Services` screen: Disabled in navbar (commented out in ScreenContext)
- `Timeline` screen: Disabled in navbar (commented out in ScreenContext)

## AI Development Tips

1. **Scene.jsx is auto-generated** - Don't manually edit; regenerate with `npx gltfjsx`
2. **Camera transitions are async** - Use 1500ms delay before showing screen content
3. **Portals only show on Home** - Controlled in `Portals.jsx`
4. **Responsive design** - Navbar switches to burger menu on `sm` breakpoint
5. **Audio plays from Projects portal position** - Spatial audio via drei PositionalAudio
6. **Model credits are important** - See Credits.jsx for attribution requirements
