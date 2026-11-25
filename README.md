# HomeGuru

> *"Study close to home. Grow close to family."*

**HomeGuru** is a premium, minimalist local tutor discovery platform engineered to help students and parents discover verified, vetted home tutors in their own city—preventing unnecessary, high-stress relocations to competitive coaching hubs like Kota.

---

## 🏛️ Ideathon Project Overview

### 1. The Hometown Education Crisis
Every year, hundreds of thousands of Indian teenagers are relocated to mass coaching factories. Beyond academic rigor, this creates acute emotional isolation, nutritional deprivation, sleep debt, and high rates of stress and depression.

### 2. The HomeGuru Solution
HomeGuru decentralizes elite academic mentoring:
- **Verified Local Mentorship:** High-performing home educators teach 1-on-1 at the student's study desk.
- **Dignified Educator Pay:** Tutors keep 100% of their hourly rates without exploitative agency margins.
- **Integrated Student Wellbeing:** Weekly psychological check-ins, early burnout warning systems, and low-cost confidential counselor access built right into the platform.

---

## 🎨 Design System & Visual Identity

### Strict Brand Palette
| Token | Hex Code | Role |
| :--- | :--- | :--- |
| **Primary Dark** | `#123C32` | Deep Forest Green — Trust, stability, academic authority |
| **Background A** | `#F7F3EA` | Warm Ivory / Cream — Calm, human, editorial reading canvas |
| **Background B** | `#123C32` | Deep Green Feature Surface — High-contrast emotional sections (Wellbeing, CTAs, Footer) |
| **Accent Gold** | `#D4A437` | Premium Golden Amber — CTAs, verification seals, podium badges, interactive highlights |

### Typography
- **Headings:** `Playfair Display` (High-contrast editorial serif)
- **Body & Controls:** `Inter` (Precise, modern, legible sans-serif)

---

## 🚀 Key Implemented Features

1. **Floating Glass Navbar:**
   - Adapts on scroll with backdrop blur and active navigation spy.
   - Smooth mobile slide-out drawer menu with touch-friendly navigation.
2. **Editorial Hero Section:**
   - Asymmetric visual composition with layered floating cards: `#3 Maths Tutor in Jaipur`, `8 yrs experience`, `Verified Tutor`, `Zero Relocation Anxiety`.
3. **Animated Stats Strip:**
   - Counts up smoothly (`10K+ Students Helped`, `50+ Top Tutors`, `100+ Cities Covered`, `4.8/5 Rating`) when scrolled into view.
4. **Dual Journey Flow ("How It Works"):**
   - Interactive sliding toggle between **For Families** and **For Teachers**.
5. **Dynamic Tutor Search & Filtering:**
   - Search by keyword (tutor name, subject, or local area).
   - Filter by **City** (Jaipur, Kota, Delhi NCR, Bangalore, Ahmedabad, Indore).
   - Filter by **Subject** (Mathematics, Physics, Chemistry, Biology, English, Accountancy, Computer Science).
   - Filter by **Budget** (Under ₹500/hr, ₹500–₹700/hr, ₹700+/hr).
   - Instant count indicator and friendly fallback state with reset actions.
6. **Merit-Based City Rankings:**
   - Interactive podium for Jaipur, Kota, and Delhi NCR.
   - Transparent ranking algorithm meter (35% Student Rating, 25% Parent Feedback, 20% Regularity, 20% Result Improvement).
   - Anti-fake review enforcement policy.
7. **Student Wellbeing Suite (Background B: Deep Green):**
   - **Interactive 30-Second Mood Check-in:** Instant feedback and personalized study pacing tips based on selected mood.
   - **Early Burnout Alert System:** Guardian and tutor alerts for chronic fatigue.
   - **Counselor Connect:** Modal to book subsidized, confidential youth psychologist sessions.
   - **Interactive Study Planner Preview:** Balanced daily schedule template designed to prevent cognitive exhaustion.
8. **Comprehensive Profile Modal & Demo Booking:**
   - In-depth educator modal showcasing qualifications, hourly fees, demo video preview, verified reviews, and weekly availability.
   - Working **Free 30-Minute Diagnostic Demo Class** booking modal with toast confirmation.
9. **Educator Onboarding Portal:**
   - "Apply as a Tutor" modal for educators to join the merit directory with zero middleman commission.

---

## 💻 Tech Stack

- **HTML5:** Semantic, accessible layout with rich SEO and Open Graph metadata.
- **CSS3:** Custom design system driven by CSS variables, fluid clamping (`clamp()`), and responsive layouts (no heavy UI frameworks).
- **Vanilla JavaScript (ES6+):** Pure, lightweight, zero-dependency reactive state and DOM manipulation.

---

## 🏃 How to Run the Website

Simply double-click `index.html` to open it in any modern browser, or serve it locally:

```bash
# Using Node.js
npx serve .
# Or simply open index.html in Chrome, Edge, Safari, or Firefox
```
