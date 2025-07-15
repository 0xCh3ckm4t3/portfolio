# Personal Blog Website

A modern, responsive personal website with a static blog built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Static Blog**: Easy-to-manage blog posts with a dynamic loading system
- **Performance Optimized**: Fast loading times and optimized assets
- **Accessible**: Built with web accessibility standards in mind
- **SEO Friendly**: Semantic HTML and proper meta tags

## Structure

```
personal-webpage/
├── index.html          # Main homepage
├── blog-post.html      # Sample blog post page
├── styles.css          # Main stylesheet
├── blog-post.css       # Blog post specific styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in a web browser to view the website
3. **Customize** the content in the HTML files with your personal information
4. **Add blog posts** by editing the `blogPosts` array in `script.js`

## Customization

### Personal Information
- Update the name in the navigation and hero section
- Replace contact information in the contact section
- Update social media links
- Add your own profile photo by replacing the placeholder

### Blog Posts
To add new blog posts, edit the `blogPosts` array in `script.js`:

```javascript
const blogPosts = [
    {
        id: 1,
        title: "Your Blog Post Title",
        excerpt: "A brief description of your blog post...",
        date: "2025-01-15",
        readTime: "8 min read",
        image: "📚" // Emoji or image path
    },
    // Add more posts here
];
```

### Colors and Styling
The website uses CSS custom properties (variables) for easy color customization. Edit the `:root` section in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #64748b;
    --font-family: 'Inter', sans-serif;
}
```

### Creating New Blog Posts
1. Create a new HTML file (e.g., `new-post.html`)
2. Copy the structure from `blog-post.html`
3. Replace the content with your blog post
4. Add the post to the `blogPosts` array in `script.js`

## Features in Detail

### Navigation
- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Fixed header with scroll effects

### Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Responsive layout

### About Section
- Personal introduction
- Skills showcase with interactive tags
- Professional background

### Blog Section
- Dynamic post loading
- Responsive grid layout
- "Load More" functionality
- Individual post pages

### Contact Section
- Social media links
- Email contact with copy-to-clipboard functionality
- Professional contact information

## Browser Support

This website is compatible with:
- Chrome 60+
- Firefox 55+
- Safari 10+
- Edge 79+

## Performance

The website is optimized for performance with:
- Efficient CSS Grid and Flexbox layouts
- Optimized JavaScript with minimal dependencies
- Compressed and minified assets
- Lazy loading for blog posts

## Deployment

You can deploy this website to any web hosting service:

### GitHub Pages
1. Upload files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Your site will be automatically deployed

### Traditional Web Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory

## Customization Tips

1. **Images**: Replace emoji placeholders with actual images for a more professional look
2. **Fonts**: The website uses Google Fonts (Inter). You can change this in the HTML head section
3. **Colors**: Use the CSS custom properties to maintain consistent theming
4. **Content**: Update all placeholder text with your actual information
5. **SEO**: Add meta descriptions and update the title tags for better search engine optimization

## Contributing

Feel free to fork this project and make improvements. Some areas for enhancement:
- Add a dark mode toggle
- Implement a search functionality
- Add categories/tags for blog posts
- Include a comment system
- Add analytics tracking

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing the website or have questions, feel free to reach out through the contact information provided in the website.
