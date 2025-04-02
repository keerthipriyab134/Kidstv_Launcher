# Kids TV Launcher

A kid-friendly TV launcher application built with React Native and Expo, designed to provide a safe and engaging environment for children's entertainment.

## Features

- 🎨 Kid-friendly UI with vibrant colors and large icons
- 🎮 Pre-approved apps grid layout
- 🔒 PIN-protected exit system
- 📱 D-pad remote navigation support
- ✨ Smooth animations and transitions

## Tech Stack

- React Native
- Expo SDK 52
- Expo Router 4
- Linear Gradient
- Lucide Icons
- Google Fonts (Nunito)

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/kids-tv-launcher.git
```

2. Install dependencies:
```bash
cd kids-tv-launcher
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
kids-tv-launcher/
├── app/                    # Application routes
│   ├── _layout.tsx        # Root layout configuration
│   ├── index.tsx          # Home screen
│   └── pin.tsx            # PIN protection screen
├── assets/                # Static assets
│   └── images/           
├── components/            # Reusable components
├── hooks/                 # Custom hooks
└── types/                 # TypeScript type definitions
```

## Features

### Home Screen
- Grid layout of approved applications
- Large, colorful icons for easy navigation
- Focus-based selection system
- Smooth transitions and animations

### PIN Protection
- 4-digit PIN system
- Secure exit mechanism
- Visual feedback for PIN entry
- Error handling with user feedback

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.