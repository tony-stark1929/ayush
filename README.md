# Professional Portfolio Website

A modern, responsive, and professional portfolio website built with Next.js, React, and Tailwind CSS.

## Features

✨ **Modern Design** - Clean, professional dark theme with smooth animations
📱 **Responsive** - Fully responsive design works on all devices
⚡ **Fast** - Built with Next.js for optimal performance
🎨 **Customizable** - Easy to personalize with your own content
🔄 **Smooth Animations** - Engaging transitions and scroll effects
📧 **Contact Form** - Built-in contact form for visitors

## Sections

- **Hero** - Eye-catching introduction section
- **About** - Tell your story and professional background
- **Experience** - Showcase your work experience
- **Projects** - Display your featured projects
- **Skills** - Highlight your expertise and proficiencies
- **Contact** - Direct contact information and contact form
- **Footer** - Social links and additional information

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Your Information

Edit the component files to add your personal information:

1. **pages/index.tsx** - Main page
2. **components/Hero.tsx** - Hero section content
3. **components/About.tsx** - About section
4. **components/Experience.tsx** - Work experience (edit the `experiences` array)
5. **components/Projects.tsx** - Projects showcase (edit the `projects` array)
6. **components/Skills.tsx** - Skills and expertise (edit the `skillsData` array)
7. **components/Contact.tsx** - Contact information and form

### Customize Colors

Edit `tailwind.config.js` to change the accent colors:

```javascript
colors: {
  accent: '#00d4ff',      // Change cyan to your brand color
  accentLight: '#00f0ff', // Lighter shade of accent
  dark: '#0a0e27',        // Dark background
  darker: '#050812',      // Darker background
}
```

### Add Your Links

Update the following URLs in the components:
- Email links in Contact.tsx
- LinkedIn profile in Navbar.tsx and Footer.tsx
- GitHub profile in Projects.tsx and Footer.tsx

## Building for Production

Create an optimized production build:

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Other Hosting

The project can be deployed to any Node.js hosting provider:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- And more...

## File Structure

```
├── pages/
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # Document structure
│   └── index.tsx         # Main page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience section
│   ├── Projects.tsx      # Projects section
│   ├── Skills.tsx        # Skills section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── styles/
│   └── globals.css       # Global styles
├── public/               # Static files
└── tailwind.config.js    # Tailwind configuration
```

## Technologies Used

- **Next.js** - React framework
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations (optional)

## Tips for Best Results

1. **Add High-Quality Images** - Consider adding a profile photo in the Hero section
2. **Keep Content Fresh** - Update your projects and experience regularly
3. **Optimize for SEO** - Add meta descriptions and structured data
4. **Test Responsiveness** - Check on multiple devices and screen sizes
5. **Get Feedback** - Share your portfolio with friends and colleagues

## License

This portfolio template is free to use and modify for personal use.

## Support

For issues or questions, please refer to the Next.js and Tailwind CSS documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

Happy showcasing! 🚀
