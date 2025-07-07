import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';
import type { ApplicationData, Application } from '@/types/application';
import type { Locale } from './i18n/config';

// 读取所有应用数据
export const getApplicationData = cache(async (locale: Locale): Promise<ApplicationData> => {
    try {
        const applicationsDir = path.join(process.cwd(), 'content', 'applications', locale);
        const files = fs.readdirSync(applicationsDir);
        
        const applications: Application[] = [];
        
        for (const file of files) {
            if (file.endsWith('.md') && file !== 'applications.md') {
                const filePath = path.join(applicationsDir, file);
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const { data, content } = matter(fileContent);
                
                const id = path.basename(file, '.md');
                
                // 确保所有必需属性都存在
                const app: Application = {
                    id,
                    content: content.trim(),
                    title: data.title || '',
                    description: data.description || '',
                    solution: data.solution || '',
                    relatedTags: data.relatedTags || [],
                    order: data.order || 0,
                };
                
                applications.push(app);
            }
        }
        
        applications.sort((a, b) => (a.order || 0) - (b.order || 0));
        
        return {
            applications,
            content: ''
        };
    } catch (error) {
        console.error(`Error loading application data for locale ${locale}:`, error);
        return {
            applications: [],
            content: ''
        };
    }
});

// 通过 ID 获取单个应用
export const getApplication = cache(async (locale: Locale, id: string): Promise<Application | null> => {
    try {
        const filePath = path.join(process.cwd(), 'content', 'applications', locale, `${id}.md`);
        
        if (!fs.existsSync(filePath)) {
            return null;
        }
        
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        // 确保所有必需属性都存在
        return {
            id,
            content: content.trim(),
            title: data.title || '',
            description: data.description || '',
            solution: data.solution || '',
            relatedTags: data.relatedTags || [],
            order: data.order || 0,
        };
    } catch (error) {
        console.error(`Error loading application ${id} for locale ${locale}:`, error);
        return null;
    }
});

// 获取所有可用的应用 ID
export const getAllApplicationIds = cache(async (locale: Locale): Promise<string[]> => {
    try {
        const applicationsDir = path.join(process.cwd(), 'content', 'applications', locale);
        const files = fs.readdirSync(applicationsDir);
        
        return files
            .filter(file => file.endsWith('.md') && file !== 'applications.md')
            .map(file => path.basename(file, '.md'));
    } catch (error) {
        console.error(`Error loading application IDs for locale ${locale}:`, error);
        return [];
    }
});

// 获取所有语言的所有应用 ID
export const getAllApplicationParams = cache(async (): Promise<{ locale: Locale; id: string }[]> => {
    const locales: Locale[] = ['zh', 'en', 'es', 'de'];
    const allParams: { locale: Locale; id: string }[] = [];
    
    for (const locale of locales) {
        const ids = await getAllApplicationIds(locale);
        ids.forEach(id => allParams.push({ locale, id }));
    }
    
    return allParams;
});