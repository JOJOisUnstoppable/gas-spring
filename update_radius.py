import os
import re

root_dir = 'src'
extensions = ['.tsx', '.ts']

# Pattern to match rounded classes
# Matches: rounded-lg, rounded-xl, rounded-2xl, rounded-3xl
# Matches: rounded-[10px], rounded-[24px], etc.
pattern = re.compile(r'rounded-(lg|xl|2xl|3xl|\[\d+px\])')

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if not any(filename.endswith(ext) for ext in extensions):
            continue
            
        filepath = os.path.join(dirpath, filename)
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = pattern.sub('rounded-sm', content)
            
            if new_content != content:
                print(f"Updating {filepath}")
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
        except Exception as e:
            print(f"Error processing {filepath}: {e}")
