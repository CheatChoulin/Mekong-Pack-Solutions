# Mekong Pack Solutions

**Food Packaging Solutions Website**

## 1. Project Overview

Mekong Pack Solutions is a website project designed to present food packaging products and solutions for businesses. The website helps visitors explore different packaging categories, learn about the company, and contact the team for product enquiries or potential partnerships.

The main purpose of this project is to create a modern, user-friendly, and responsive website that makes it easier for customers to discover packaging solutions for takeaway meals, drinks, snacks, burgers, and other food products.

## 2. Project Objectives

- Create a professional website for Mekong Pack Solutions.
- Present food packaging products in an organized and attractive way.
- Make website navigation simple and convenient.
- Provide information about the company and its services.
- Allow visitors to send enquiries and explore partnership opportunities.
- Create a responsive layout for desktop, tablet, and mobile devices.
- Improve the overall user experience through animations and interactive visual elements.

## 3. Website Pages

### Home Page (`index.html`)

The homepage introduces Mekong Pack Solutions and highlights its food packaging services.

Main sections include:
- **Header:** Company logo, navigation links, and contact button.
- **Hero Section:** Introduces the company with a headline, description, and main image.
- **Product Showcase:** Displays featured food packaging products.
- **Growing Community:** Presents website statistics, including visitors, page views, online users, and listed products.
- **Footer:** Contains company information, social media icons, quick links, and reasons to choose the company.

### About Page (`About.html`)

The About page provides information about the company, its identity, and what it offers.

It helps visitors understand the company and its packaging solutions.

### Products Page (`Products.html`)

The Products page allows visitors to explore different packaging products and categories.

Main features include:
- Product card layouts.
- Product images and descriptions.
- Search bar design.
- Category selection and sorting interface.
- Hover effects on product cards.
- Responsive product grid.

Product categories represented in the project include:
- Takeaway Meals
- Packaging Snacks
- Packaging Drinks
- Packaging Burgers

### Contact / Partnership Page (`contact.html`)

This page provides a way for visitors to contact the company or discuss potential partnerships.

Main sections include:
- Contact introduction.
- Enquiry form.
- Full name and email fields.
- Company and phone number fields.
- Message section.
- Company contact information.
- Partnership information.

**Note:** The current contact form is a design example and does not have a live submission system connected.

## 4. Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Creating website structure and content |
| CSS3 | Styling, layouts, colors, and responsive design |
| JavaScript | Navigation behavior and scroll animations |
| Font Awesome | Providing icons for the website |
| Google Fonts | Using Nunito and Inter typography |
| Git | Managing source code and branches |
| GitHub | Hosting and collaborating on the project |

## 5. Design System

The website uses a modern and clean visual style with purple as its primary brand color.

### Color Palette

| Color | Hex Code | Usage |
|---|---|---|
| Primary Purple | `#7C3AED` | Main buttons and highlights |
| Secondary Purple | `#A855F7` | Secondary buttons and accents |
| Light Purple | `#DDD6FE` | Header and footer backgrounds |
| Very Light Purple | `#F5F3FF` | Light background sections |
| Main Text | `#1F2937` | Headings and important text |
| Secondary Text | `#6B7280` | Descriptions and supporting text |
| White | `#FFFFFF` | Main background |

### Typography

- **Nunito:** Used for headings, branding, and important text.
- **Inter:** Used for body text and descriptions.

### Design Principles

- Consistent colors throughout the website.
- Clear typography and readable content.
- Organized product cards.
- Consistent spacing and alignment.
- Rounded corners and subtle hover effects.
- Responsive layouts for different screen sizes.

## 6. Website Features and Functionality

### Navigation
- Shared header and footer across website pages.
- Navigation links between Home, About, Products, and Contact.
- Active navigation link highlighting.
- Hover underline effects.

### Product Presentation
- Organized product cards.
- Product images and descriptions.
- Search and sorting interface.
- Hover effects to improve interaction.

### Animations
- Elements appearing from different directions.
- Scroll-reveal animations.
- Floating product images.
- Animated shapes and visual statistics.
- Navigation underline animations.
- Reduced-motion support for users who prefer fewer animations.

### Responsive Design
The website uses CSS media queries to adjust layouts for:
- Desktop screens.
- Tablets.
- Mobile phones.
- Small phone screens.
- Landscape mobile screens.

## 7. Project Structure

The project is organized into separate HTML, CSS, and JavaScript files to make development and maintenance easier.

```text
Mekong-Pack-Solutions/
│
├── index.html
├── About.html
├── Products.html
├── contact.html
│
├── style.css
├── Products.css
├── About.css
├── contact.css
├── animation.css
│
├── script.js
│
├── image/
│   └── Website images and icons
│
├── images/
│   └── Product images
│
└── README.md
```

## 8. Development Workflow

Our team uses Git and GitHub to organize development and manage changes to the project.

We separate our work into branches so that different parts of the website can be developed independently.

### Branch Management

- **main:** The main branch that contains the combined project.
- **Home:** A working branch for homepage development.
- **Contact:** A working branch for contact page development.

### How We Work

**Step 1 – Create or switch to a working branch**

Each developer works on the appropriate branch.

```bash
git switch Home
```

**Step 2 – Develop the assigned section**

We work on the HTML, CSS, and JavaScript files related to our assigned sections.

**Step 3 – Save our changes**

```bash
git add .
git commit -m "Update homepage design"
```

**Step 4 – Push changes to GitHub**

```bash
git push origin Home
```

**Step 5 – Merge completed work into main**

After finishing the work, we switch to the main branch.

```bash
git switch main
```

Then merge the working branch:

```bash
git merge Home
```

The same process can be used for other working branches.

**Step 6 – Push the combined project**

```bash
git push origin main
```

This updates the main branch on GitHub with the merged changes.

### Important Git Note

When two branches have separate commit histories, Git may refuse to merge them because it cannot find a common starting point.

In that situation, Git provides an option to allow unrelated histories:

```bash
git merge Home --allow-unrelated-histories
```

This should only be used when the two histories are intentionally meant to be combined.

If merge conflicts appear, the team must resolve the conflicting files before completing the merge.

## 9. Team Collaboration

We use a branch-based workflow to separate development tasks and combine completed work into the main project.

Our collaboration process focuses on:

- Dividing website sections into manageable tasks.
- Working on separate branches.
- Keeping HTML, CSS, and JavaScript organized.
- Committing changes regularly.
- Sharing updates through GitHub.
- Merging completed work into the main branch.
- Checking the website after combining changes.

## 10. Future Improvements

Some features can be improved or added in future development:

- Connect the contact form to a working submission system.
- Make the product search function fully functional.
- Implement working product category filters.
- Add more product information and images.
- Connect real company contact information.
- Improve accessibility and website performance.
- Add more interactive features.

## 11. Project Conclusion

Mekong Pack Solutions is a website development project focused on presenting food packaging products in a professional and user-friendly way.

Through this project, we apply our knowledge of HTML, CSS, JavaScript, responsive web design, and Git collaboration.

We aim to create a website that is visually attractive, easy to navigate, and useful for visitors who want to explore food packaging solutions.

---

**Project Name:** Mekong Pack Solutions  
**Project Type:** Website Development  
**Main Technologies:** HTML, CSS, JavaScript  
**Version Control:** Git and GitHub  
**Status:** In Development