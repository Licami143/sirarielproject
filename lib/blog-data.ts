export interface BlogPost {
  slug: string[];
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: ["getting-started-with-nextjs"],
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js, the React framework that makes it easy to create fast, SEO-friendly websites with server-side rendering and static generation.",
    date: "2026-03-15",
    readingTime: "5 min read",
    category: "Frameworks",
    tags: ["Next.js", "React", "Web Development"],
    content: `
## Why Next.js?

Next.js is a powerful React framework that provides a great developer experience with features like server-side rendering, static site generation, and API routes out of the box.

### Key Features

- **File-based Routing** — Simply create files in the \`app\` directory and Next.js automatically creates routes for you.
- **Server Components** — React Server Components let you render components on the server, reducing the amount of JavaScript sent to the client.
- **Built-in Optimizations** — Image optimization, font optimization, and script optimization are all built in.

### Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will scaffold a new project with all the defaults configured. From there, you can start building your pages in the \`app\` directory.

### Server vs Client Components

In Next.js, components are Server Components by default. This means they are rendered on the server and only the HTML is sent to the client. If you need interactivity, you can opt into Client Components by adding the \`"use client"\` directive at the top of your file.

### Conclusion

Next.js is one of the best frameworks for building modern web applications. Its combination of performance, developer experience, and flexibility makes it an excellent choice for projects of any scale.
    `,
  },
  {
    slug: ["web-development", "css-grid-guide"],
    title: "A Complete Guide to CSS Grid",
    excerpt:
      "Master CSS Grid Layout with this comprehensive guide. Learn how to create complex, responsive layouts with ease using the most powerful layout system in CSS.",
    date: "2026-02-28",
    readingTime: "8 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Responsive Design"],
    content: `
## Understanding CSS Grid

CSS Grid Layout is a two-dimensional layout system that lets you control both rows and columns simultaneously, making it perfect for creating complex web layouts.

### Basic Grid Setup

To create a grid container, simply set \`display: grid\` on the parent element:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
\`\`\`

### Grid Template Areas

One of Grid's most powerful features is the ability to name areas:

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
\`\`\`

### Responsive Grids

CSS Grid makes responsive design straightforward. Use \`auto-fit\` and \`minmax()\` to create grids that automatically adjust:

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

### When to Use Grid vs Flexbox

- **Grid** — for two-dimensional layouts (rows AND columns)
- **Flexbox** — for one-dimensional layouts (row OR column)

Both tools are complementary and should be used together for the best results.

### Conclusion

CSS Grid is an essential tool for modern web development. Its ability to create complex, responsive layouts with clean, readable code makes it invaluable for any developer.
    `,
  },
  {
    slug: ["web-development", "javascript", "async-await-explained"],
    title: "Understanding Async/Await in JavaScript",
    excerpt:
      "Dive deep into asynchronous JavaScript with async/await. Learn how to write clean, readable asynchronous code and handle errors effectively.",
    date: "2026-01-20",
    readingTime: "6 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Async", "Promises"],
    content: `
## The Evolution of Async JavaScript

JavaScript has come a long way in handling asynchronous operations. From callbacks to promises to async/await, each iteration has made our code cleaner and more readable.

### Callback Hell

Before promises, we had to nest callbacks, leading to deeply indented, hard-to-read code:

\`\`\`javascript
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      console.log(c);
    });
  });
});
\`\`\`

### Enter Async/Await

Async/await lets us write asynchronous code that looks synchronous:

\`\`\`javascript
async function fetchData() {
  const a = await getData();
  const b = await getMoreData(a);
  const c = await getEvenMoreData(b);
  console.log(c);
}
\`\`\`

### Error Handling

Use try/catch blocks for clean error handling:

\`\`\`javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) throw new Error('User not found');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}
\`\`\`

### Parallel Execution

Use \`Promise.all\` when operations are independent:

\`\`\`javascript
async function loadDashboard() {
  const [user, posts, notifications] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchNotifications()
  ]);
  return { user, posts, notifications };
}
\`\`\`

### Conclusion

Async/await is one of the most important features in modern JavaScript. It makes asynchronous code readable, debuggable, and maintainable.
    `,
  },
];

export function getBlogBySlug(slug: string[]): BlogPost | undefined {
  return blogPosts.find(
    (post) =>
      post.slug.length === slug.length &&
      post.slug.every((segment, i) => segment === slug[i])
  );
}

export function getAllBlogSlugs(): string[][] {
  return blogPosts.map((post) => post.slug);
}
