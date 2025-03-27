# 🎥 VibeCoding Video Player

A modern, feature-rich video player built with React and Video.js while vibe coding to some great tunes! 🎵

![Video Player Demo](DEMO.png)

## ✨ Features

- 🎬 Custom video player interface
- ⏮️ Backward/Forward skip buttons (5 seconds)
- 🎯 Picture-in-Picture support
- 🎭 Theater Mode
- 📺 Fullscreen support
- 🎚️ Volume control
- ⏱️ Time display and progress bar
- 🎨 Custom skin and styling

## 🛠️ Tech Stack

- React 18
- Video.js
- Vite
- CSS3
- Modern JavaScript (ES6+)

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🎯 Usage

Add your video source to the `App.jsx` file:

```jsx
const options = {
  autoplay: true,
  controls: true,
  responsive: true,
  fluid: true,
  sources: [{
    src: '/your-video.mp4',
    type: 'video/mp4'
  }]
};
```

## 🎨 Customization

The player includes several customizable features:

- Theater Mode: Toggle between normal and theater view
- Picture-in-Picture: Watch while browsing other content
- Skip Controls: Jump forward/backward 5 seconds
- Volume Control: Adjust video volume
- Progress Bar: Navigate through the video

## 🎵 Vibe Coding

This project was created while vibe coding to some great music! 🎧

## 📝 License

MIT License - feel free to use this project as you wish!
# shift-player
