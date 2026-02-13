# 🎓 Quick Start: Adding Your Certificates

## 1️⃣ Edit Your Certificate Data

Open: `/data/certificates.js`

Replace the sample certificates with your own:

```javascript
export const certificates = [
  {
    id: 1,
    title: "Your Certificate Name",
    issuer: "Platform (Coursera/Udemy/AWS/etc)",
    description: "What you learned in this course",
    date: "Month Year",
    image: "/certificates/your-image.jpg", // Or use Unsplash URL
    credentialId: "YOUR-ACTUAL-ID",
    verified: true,
    link: "https://verify-link-here.com",
    skills: ["Skill 1", "Skill 2", "Skill 3"]
  },
  // Add more certificates...
]
```

## 2️⃣ Add Certificate Images

**Option A: Add your actual certificate images**
- Save images to `/public/certificates/`
- Update `image: "/certificates/your-filename.jpg"`

**Option B: Keep using placeholders**
- Current setup uses Unsplash images
- Works great for demonstration
- Replace when you have actual screenshots

## 3️⃣ Test It Out

```bash
npm run dev
```

Visit homepage and scroll to "Certifications & Achievements" section.

---

## 📸 Getting Certificate Images

### From Course Platforms:
- **Coursera**: Download from your accomplishments page
- **Udemy**: Screenshot from "My Learning" section
- **LinkedIn Learning**: Download certificate
- **Pluralsight**: Export certificate image

### Screenshot Tips:
- Use 1200x900 resolution
- Ensure text is readable
- Save as JPG for smaller file size
- Optimize before adding (compress images)

---

## ✨ Features Working Out of the Box

✅ Click any certificate card to view full details
✅ Filter by platform (buttons auto-generate)
✅ Verification badges for verified certificates
✅ Statistics calculated automatically
✅ Responsive on all devices
✅ Smooth animations throughout

---

## 🎯 Required Fields

Minimum certificate entry:
```javascript
{
  id: 1,              // Required: Unique number
  title: "Name",      // Required: Certificate name
  issuer: "Platform", // Required: Who issued it
  date: "Month Year"  // Required: When you got it
}
```

All other fields are optional!

---

## 📱 Where It Appears

The certifications section is located on your homepage:
1. Hero Section
2. Highlights
3. Services
4. Professional Skills
5. Tech Stack
6. Timeline
7. GitHub Projects
8. **🎓 Certifications** ← NEW!
9. Contact Button

---

## 🎨 Customization

### Change Grid Layout
In `certificates-section.jsx`:
```javascript
// 3 columns (default)
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// Change to 4 columns
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

### Change Colors
Search and replace in certificate components:
- `from-blue-400 to-purple-400` → Your gradient
- `text-blue-400` → Your accent color

---

Need help? Check the full guide: `CERTIFICATES_GUIDE.md`
