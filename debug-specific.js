const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const baseDir = path.join(process.cwd(), 'content', 'blog');
const locales = fs.readdirSync(baseDir);

locales.forEach(locale => {
  const postsDirectory = path.join(baseDir, locale);
  if (!fs.lstatSync(postsDirectory).isDirectory()) return;

  const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
  
  filenames.forEach(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    // Only check Seat-Footrest-Gas-Springs.md in zh
    if (locale === 'zh' && filename === 'Seat-Footrest-Gas-Springs.md') {
        console.log(`Checking ${locale}/${filename}...`);
        console.log(`  Type: ${typeof data.date}, Value: ${data.date}`);
        const d = new Date(data.date);
        console.log(`  DateObj: ${d.toString()}`);
        console.log(`  IsNaN: ${isNaN(d.getTime())}`);
    }
  });
});
