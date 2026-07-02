// Create all pages script to quickly scaffold them
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const pages = [
  'Courses', 'CourseDetails', 'Dashboard', 'Schedule', 'Login', 'Signup', 'AdminDashboard'
];

pages.forEach(page => {
  const content = `export default function ${page}() {
  return (
    <div className="container" style={{ paddingTop: '100px' }}>
      <h1 className="text-gradient-gold">${page}</h1>
      <p>This is the ${page} page.</p>
    </div>
  );
}`;
  fs.writeFileSync(path.join(pagesDir, `${page}.jsx`), content);
});

console.log('Pages created successfully.');
