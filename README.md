# EZ Frontend Solution

A modern, responsive frontend application built for EZ Works, featuring a sleek UI design with comprehensive service offerings, contact form integration, and a professional user experience.

## 🚀 Features

- **Modern UI Design**: Clean, professional interface with dynamic background gradients and abstract visual elements
- **Service Showcase**: Detailed service cards displaying EZ Works' comprehensive business support offerings
  - Graphics & Video
  - Presentation Design
  - AI Tools & Technology
  - Research & Analytics
  - Language Services
  - Business Support
- **Contact Form**: Fully functional contact form with API integration
- **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices
- **Hero Section**: Engaging landing section with call-to-action
- **About Section**: Company information and key highlights
- **Testimonials**: Client testimonials section

## 🛠️ Tech Stack

- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.7** - Fast build tool and development server
- **Bootstrap 5.3.8** - Responsive CSS framework
- **ESLint** - Code quality and linting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Divyanshjaiswal2311/EZ-Frontend-Solution.git
   cd EZ-Frontend-Solution
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## 📁 Project Structure

```
EZ-Frontend-Solution/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   └── OtherSection.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## 🔌 API Integration

The contact form is integrated with the EZ Works backend API:

**Endpoint**: `https://vernanbackend.ezlab.in/api/contact-us/`

**Request Method**: POST

**Request Body**:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "phone": "1234567890",
  "message": "Your message here"
}
```

**Expected Response** (200):
```json
{
  "id": 49,
  "name": "User Name",
  "email": "user@example.com",
  "phone": "1234567890",
  "message": "Your message here",
  "created_at": "2025-10-10T05:27:59.371578Z",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```

## 🎨 Design Features

- **Dynamic Background**: Modern gradient backgrounds with abstract blur shapes
- **Service Cards**: Interactive cards with hover effects and detailed service information
- **Form Validation**: Client-side validation for all form inputs
- **Loading States**: User-friendly loading indicators during form submission
- **Success/Error Handling**: Clear feedback messages for user actions

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of the EZ Works frontend test solution.

## 👤 Author

**Divyansh Jaiswal**
- GitHub: [@Divyanshjaiswal2311](https://github.com/Divyanshjaiswal2311)

## 🙏 Acknowledgments

- EZ Works for providing the design requirements and API endpoints
- Bootstrap team for the excellent CSS framework
- React and Vite communities for the amazing tools

---

**Note**: This is a frontend solution for the EZ Works assignment. All features are fully functional and ready for deployment.
