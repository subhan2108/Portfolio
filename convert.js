import fs from 'fs';
import HTMLtoJSX from 'htmltojsx';

const converter = new HTMLtoJSX({
    createClass: false,
});

const files = [
    { in: 'home.html', out: 'src/pages/Home.tsx', name: 'Home' },
    { in: 'philosophy.html', out: 'src/pages/Philosophy.tsx', name: 'Philosophy' },
    { in: 'experience.html', out: 'src/pages/Experience.tsx', name: 'Experience' },
    { in: 'contact.html', out: 'src/pages/Contact.tsx', name: 'Contact' },
    { in: 'work.html', out: 'src/pages/Work.tsx', name: 'Work' }
];

// Create pages directory
if (!fs.existsSync('src/pages')) {
    fs.mkdirSync('src/pages');
}

files.forEach(file => {
    if (!fs.existsSync(file.in)) return;
    const content = fs.readFileSync(file.in, 'utf-8');

    // Extract body content
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return;

    let bodyContent = bodyMatch[1];

    // Replace links with router equivalents
    bodyContent = bodyContent.replace(/\{\{DATA:SCREEN:SCREEN_9\}\}/g, '/');
    bodyContent = bodyContent.replace(/\{\{DATA:SCREEN:SCREEN_7\}\}/g, '/work');
    bodyContent = bodyContent.replace(/\{\{DATA:SCREEN:SCREEN_5\}\}/g, '/philosophy');
    bodyContent = bodyContent.replace(/\{\{DATA:SCREEN:SCREEN_6\}\}/g, '/experience');
    bodyContent = bodyContent.replace(/\{\{DATA:SCREEN:SCREEN_8\}\}/g, '/contact');

    // Convert HTML to JSX
    let jsx = converter.convert(bodyContent);

    const componentContent = `import React from 'react';
import { Link } from 'react-router-dom';

export default function ${file.name}() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-[#F5F5F5] antialiased">
      ${jsx}
    </div>
  );
}
`;

    // Fix onclick with string to React onClick function
    let cleanedComponentContent = componentContent.replace(/onclick="([^"]+)"/g, "onClick={() => { $1 }}");

    // Also remove unused imports
    cleanedComponentContent = cleanedComponentContent.replace(/import \{ Link \} from 'react-router-dom';\n/, "");
    // And remove React import
    cleanedComponentContent = cleanedComponentContent.replace(/import React from 'react';\n/, "");

    fs.writeFileSync(file.out, cleanedComponentContent);
    console.log(`Created ${file.out}`);
});
