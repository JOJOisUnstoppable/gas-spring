const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { format } = require('date-fns');

const postsDirectory = path.join(process.cwd(), 'content', 'blog', 'en');

try {
  const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));

  filenames.forEach(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    
    console.log(`Checking ${filename}...`);
    console.log(`  data.date raw:`, data.date);
    
    let dateObj;
    // Simulate what happens in the app:
    // It passes data.date directly to formatDate
    // formatDate does: new Date(date)
    
    if (data.date === undefined) {
        console.log('  data.date is undefined');
        dateObj = new Date(data.date); 
    } else {
        dateObj = new Date(data.date);
    }

    console.log(`  Date object:`, dateObj.toString());
    
    try {
      if (isNaN(dateObj.getTime())) {
          console.error(`  INVALID DATE DETECTED!`);
          // This would cause format to throw
      }
      format(dateObj, 'PPP');
      console.log(`  Format OK`);
    } catch (e) {
      console.error(`  ERROR in format: ${e.message}`);
    }
    console.log('---');
  });

} catch (err) {
  console.error(err);
}
