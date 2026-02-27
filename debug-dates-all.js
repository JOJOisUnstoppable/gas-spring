const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { format } = require('date-fns');

const baseDir = path.join(process.cwd(), 'content', 'blog');
const locales = fs.readdirSync(baseDir);

locales.forEach(locale => {
  const postsDirectory = path.join(baseDir, locale);
  if (!fs.lstatSync(postsDirectory).isDirectory()) return;

  const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
  
  console.log(`Checking locale: ${locale}`);
  
  filenames.forEach(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    let dateObj;
    if (data.date === undefined) {
        // If undefined, new Date(undefined) is valid (current date)
        dateObj = new Date(data.date);
    } else {
        dateObj = new Date(data.date);
    }
    
    if (isNaN(dateObj.getTime())) {
        console.error(`    INVALID DATE in ${locale}/${filename}: "${data.date}"`);
    } else {
        try {
            format(dateObj, 'PPP');
        } catch (e) {
            console.error(`    FORMAT ERROR in ${locale}/${filename}: ${e.message}`);
        }
    }
  });
});
