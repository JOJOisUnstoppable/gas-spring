import styled, { keyframes } from 'styled-components';

// 通用容器
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// 按钮样式
const BtnPrimary = styled.a`
  background: linear-gradient(135deg, #2c5530, #4a7c59);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(44, 85, 48, 0.3);
  }
`;

const BtnSecondary = styled.a`
  background: transparent;
  color: #2c5530;
  padding: 12px 24px;
  border: 2px solid #2c5530;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #2c5530;
    color: white;
    transform: translateY(-2px);
  }
`;

const BtnLarge = styled(BtnPrimary)`
  padding: 16px 32px;
  font-size: 16px;
`;

// 英雄区域
const Hero = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

const HeroBgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(44, 85, 48, 0.8), rgba(74, 124, 89, 0.6));
  z-index: -1;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
  animation: ${keyframes`
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `} 1s ease;
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

// 章节标题
const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2c5530;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
  }
`;

// 产品概述
const ProductOverview = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
`;

const OverviewContent = styled.div`
  h3 {
    font-size: 1.8rem;
    color: #2c5530;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 30px;
  }
`;

const KeyBenefits = styled.div`
  display: grid;
  gap: 20px;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  i {
    font-size: 2rem;
    color: #2c5530;
  }

  h4 {
    font-size: 1.1rem;
    color: #2c5530;
    margin-bottom: 5px;
  }

  p {
    color: #666;
    margin: 0;
  }
`;

const ProductImage = styled.div`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

// 技术规格
const Specifications = styled.section`
  padding: 100px 0;
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const SpecCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const SpecIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2c5530, #4a7c59);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;

  i {
    font-size: 2rem;
    color: white;
  }
`;

const SpecCardTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c5530;
  margin-bottom: 20px;
`;

const SpecDetails = styled.div`
  text-align: left;
`;

const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  min-height: 40px;

  &:last-child {
    border-bottom: none;
  }
`;

const SpecLabel = styled.span`
  color: #666;
  font-weight: 500;
  flex: 1;
`;

const SpecValue = styled.span`
  color: #2c5530;
  font-weight: 600;
  text-align: right;
  white-space: nowrap;
  margin-left: 10px;
`;

// 应用场景
const Applications = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const ApplicationsGrid = styled.div`
  display: grid;
  gap: 40px;
`;

const ApplicationCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:nth-child(even) {
    grid-template-columns: 1fr 1fr;

    .app-image {
      order: 2;
    }
  }
`;

const AppImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AppContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 1.5rem;
    color: #2c5530;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 5px 0;
    color: #666;
    position: relative;
    padding-left: 20px;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #2c5530;
      font-weight: bold;
    }
  }
`;

// 选择理由
const WhyChoose = styled.section`
  padding: 100px 0;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2c5530, #4a7c59);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;

  i {
    font-size: 2rem;
    color: white;
  }
`;

const FeatureCardTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c5530;
  margin-bottom: 15px;
`;

const FeatureCardText = styled.p`
  color: #666;
  line-height: 1.6;
`;

// FAQ
const FAQ = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const FAQGrid = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const FAQQuestion = styled.div`
  padding: 25px 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background: #f8f9fa;
  }

  h3 {
    color: #2c5530;
    font-size: 1.1rem;
    margin: 0;
  }

  i {
    color: #2c5530;
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled.div`
  padding: 0 30px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  p {
    color: #666;
    line-height: 1.6;
  }
`;

// 联系我们
const Contact = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #2c5530, #4a7c59);
  color: white;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    opacity: 0.9;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  i {
    font-size: 1.5rem;
    width: 40px;
  }

  h4 {
    margin-bottom: 5px;
  }

  p {
    margin: 0;
    opacity: 0.8;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const ProposalFormTitle = styled.h3`
  color: #2c5530;
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  input,
  select,
  textarea {
    width: 100%;
    padding: 15px;
    border: 2px solid #eee;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #2c5530;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export {
  Container,
  BtnPrimary,
  BtnSecondary,
  BtnLarge,
  Hero,
  HeroBackground,
  HeroBgImage,
  HeroOverlay,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  SectionHeader,
  ProductOverview,
  OverviewGrid,
  OverviewContent,
  KeyBenefits,
  BenefitItem,
  ProductImage,
  Specifications,
  SpecsGrid,
  SpecCard,
  SpecIcon,
  SpecCardTitle,
  SpecDetails,
  SpecItem,
  SpecLabel,
  SpecValue,
  Applications,
  ApplicationsGrid,
  ApplicationCard,
  AppImage,
  AppContent,
  WhyChoose,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureCardTitle,
  FeatureCardText,
  FAQ,
  FAQGrid,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  Contact,
  ContactContent,
  ContactInfo,
  ContactDetails,
  ContactItem,
  ContactForm,
  ProposalFormTitle,
  FormGroup
};