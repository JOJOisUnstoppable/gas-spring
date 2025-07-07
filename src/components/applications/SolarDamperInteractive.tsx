'use client';

import { useEffect } from 'react';

export function SolarDamperInteractive() {
  useEffect(() => {
    // FAQ 折叠功能
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', function(this: HTMLElement) {
        const faqItem = this.parentElement;
        if (!faqItem) return; // 空值检查
        
        const isActive = faqItem.classList.contains('active');
        
        // 关闭所有 FAQ 项目
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
        });
        
        // 如果当前项目未激活，则激活它
        if (!isActive) {
          faqItem.classList.add('active');
        }
      });
    });

    // 表单提交处理
    const proposalForm = document.querySelector('.proposal-form') as HTMLFormElement;
    if (proposalForm) {
      proposalForm.addEventListener('submit', function(this: HTMLFormElement, e: Event) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // 简单验证
        const requiredFields = ['name', 'email', 'tracker-type'];
        let isValid = true;
        
        requiredFields.forEach(field => {
          const input = this.querySelector(`[name="${field}"], input[placeholder*="${field}"], select`) as HTMLInputElement | HTMLSelectElement;
          if (input && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#e74c3c';
          } else if (input) {
            input.style.borderColor = '#eee';
          }
        });
        
        if (isValid) {
          // 显示成功消息
          const button = this.querySelector('button[type="submit"]') as HTMLButtonElement;
          if (button) {
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Request Sent Successfully!';
            button.style.background = '#27ae60';
            
            // 3秒后重置表单
            setTimeout(() => {
              this.reset();
              button.innerHTML = originalText;
              button.style.background = '';
            }, 3000);
          }
        } else {
          alert('Please fill in all required fields.');
        }
      });
    }

    // 滚动到顶部按钮
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #2c5530, #4a7c59);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 15px rgba(44, 85, 48, 0.3);
    `;
    
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(scrollBtn);
    
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollBtn.parentNode) {
        scrollBtn.parentNode.removeChild(scrollBtn);
      }
    };
  }, []);

  return null;
}