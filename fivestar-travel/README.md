# FiveStarTravel.in - Premium B2B Travel Portal

A comprehensive B2B travel portal built with Next.js 14, TypeScript, and Tailwind CSS. This platform empowers travel agencies and tour operators with cutting-edge technology and competitive pricing.

## 🌟 Features

### Core Functionality
- **Multi-page Website**: Home, Services, Destinations, About, Contact, Login, Register
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **B2B Focus**: Tailored specifically for business-to-business travel solutions

### Pages Overview

#### 1. Home Page (`/`)
- Hero section with call-to-action buttons
- Key features showcase
- Services overview cards
- Statistics section
- Partner benefits

#### 2. Services Page (`/services`)
- Detailed service offerings:
  - Flight Bookings
  - Hotel Reservations
  - Tour Packages
  - Visa Assistance
  - Corporate Travel
  - MICE Services
- Partner benefits section

#### 3. Destinations Page (`/destinations`)
- International destinations showcase
- Domestic destinations showcase
- Special B2B offers
- Package pricing information

#### 4. About Page (`/about`)
- Company overview
- Mission and values
- Leadership team
- Why choose us section

#### 5. Contact Page (`/contact`)
- Contact form
- Office information
- Business hours
- Map location
- Quick links

#### 6. Login Page (`/login`)
- Partner login form
- Password recovery
- Link to registration
- Partner benefits display

#### 7. Register Page (`/register`)
- Comprehensive registration form
- Company information
- Owner details
- Business address
- Password creation
- Terms and conditions

## 🎨 Design System

### Color Palette
- **Primary (Navy Blue)**: `#1e3a8a` - Professional, trustworthy
- **Secondary (Orange)**: `#f97316` - Energetic, action-oriented
- **Gradients**: Used throughout for modern, premium feel

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes for impact
- **Body**: Clean, readable text

### Components
- Custom navigation with mobile menu
- Reusable footer with social links
- Form components with validation
- Card layouts for content display
- Gradient backgrounds and overlays

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd fivestar-travel
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
fivestar-travel/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── destinations/
│   │   └── page.tsx        # Destinations page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── login/
│   │   └── page.tsx        # Login page
│   └── register/
│       └── page.tsx        # Register page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: SVG icons (custom)
- **Fonts**: Google Fonts (Inter)

## 🌐 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero and features |
| `/services` | Services | B2B service offerings |
| `/destinations` | Destinations | Travel destinations showcase |
| `/about` | About | Company information |
| `/contact` | Contact | Contact form and info |
| `/login` | Login | Partner login portal |
| `/register` | Register | Partner registration |

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features

### Navigation
- Sticky header with logo
- Mobile-responsive hamburger menu
- Smooth transitions
- Active state indicators

### Forms
- Client-side validation
- Professional styling
- Error handling
- Success messages

### UI Components
- Gradient backgrounds
- Shadow effects
- Hover animations
- Card layouts
- Icon integration

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: { ... },
  secondary: { ... }
}
```

### Content
Update page content in respective files under `app/` directory.

### Logo
Modify the SVG logo in `components/Navbar.tsx` and `components/Footer.tsx`.

## 📄 License

This project is created for FiveStarTravel.in - B2B Travel Portal.

## 🤝 Support

For support and inquiries:
- Email: info@fivestartravelin.com
- Phone: +91 1800 123 4567

---

**Built with ❤️ for the travel industry**
