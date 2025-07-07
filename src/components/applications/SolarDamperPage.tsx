'use client';

import React from 'react';
import Image from 'next/image';
import {
  Container,
  Hero,
  HeroBackground,
  HeroBgImage,
  HeroOverlay,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  BtnPrimary,
  BtnSecondary,
  BtnLarge,
  ProductOverview,
  SectionHeader,
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
} from './ApplicationIdpage';
import { SolarDamperInteractive } from './SolarDamperInteractive';

interface SolarDamperPageProps {
  dict?: Record<string, unknown>;
  locale?: string;
}

export function SolarDamperPage({}: SolarDamperPageProps) {
  return (
    <>
      {/* Hero Section */}
      <Hero>
        <HeroBackground>
          <HeroBgImage src="/images/application/solar-damper/solar_tracker_field.jpg" alt="Solar Tracking Field" />
          <HeroOverlay />
        </HeroBackground>
        <HeroContent>
          <HeroBadge>
            <i className="fas fa-sun"></i>
            <span>Leading Solar Technology</span>
          </HeroBadge>
          <HeroTitle>Solar Damper Solutions for Solar Tracking Systems</HeroTitle>
          <HeroSubtitle>
            Professional damping solutions to enhance solar tracker stability, reduce vibration, and maximize energy efficiency in challenging environments
          </HeroSubtitle>
          <HeroButtons>
            <BtnLarge href="#contact">
              <i className="fas fa-rocket"></i>
              Get Custom Proposal Now
            </BtnLarge>
            <BtnSecondary as={BtnLarge} href="#specifications">
              <i className="fas fa-info-circle"></i>
              View Specifications
            </BtnSecondary>
          </HeroButtons>
        </HeroContent>
      </Hero>

      {/* Product Overview */}
      <ProductOverview>
        <Container>
          <SectionHeader>
            <h2>Professional Solar Damper Solutions</h2>
            <p>Specialized damping technology designed for solar tracking systems to ensure optimal performance and longevity</p>
          </SectionHeader>
          <OverviewGrid>
            <OverviewContent>
              <h3>What is a Solar Damper?</h3>
              <p>Solar Dampers are specialized hydraulic damping devices designed specifically for solar tracking systems. They provide controlled resistance to suppress vibrations and oscillations caused by wind forces, ensuring stable and precise solar panel positioning.</p>
              
              <KeyBenefits>
                <BenefitItem>
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h4>Wind Load Resistance</h4>
                    <p>7KN-10KN wind load capacity</p>
                  </div>
                </BenefitItem>
                <BenefitItem>
                  <i className="fas fa-snowflake"></i>
                  <div>
                    <h4>Snow Load Capacity</h4>
                    <p>7KN-10KN snow load resistance</p>
                  </div>
                </BenefitItem>
                <BenefitItem>
                  <i className="fas fa-thermometer-half"></i>
                  <div>
                    <h4>Temperature Range</h4>
                    <p>-30°C to +80°C operation</p>
                  </div>
                </BenefitItem>
                <BenefitItem>
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Long Lifespan</h4>
                    <p>2 million cycle lifetime</p>
                  </div>
                </BenefitItem>
              </KeyBenefits>
            </OverviewContent>
            <div>
              <ProductImage>
                <Image 
                  src="/images/application/solar-damper/solar_damper_product.jpg" 
                  alt="Solar Damper Product"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </ProductImage>
            </div>
          </OverviewGrid>
        </Container>
      </ProductOverview>

      {/* Technical Specifications */}
      <Specifications id="specifications">
        <Container>
          <SectionHeader>
            <h2>Technical Specifications</h2>
            <p>Customizable specifications to meet your specific solar tracking system requirements</p>
          </SectionHeader>
          <SpecsGrid>
            <SpecCard>
              <SpecIcon>
                <i className="fas fa-ruler"></i>
              </SpecIcon>
              <SpecCardTitle>Dimensions</SpecCardTitle>
              <SpecDetails>
                <SpecItem>
                  <SpecLabel>Maximum Length:</SpecLabel>
                  <SpecValue>1335mm</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>Minimum Length:</SpecLabel>
                  <SpecValue>576mm or Custom</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>Alternative Min:</SpecLabel>
                  <SpecValue>745mm or Custom</SpecValue>
                </SpecItem>
              </SpecDetails>
            </SpecCard>
            
            <SpecCard>
              <SpecIcon>
                <i className="fas fa-weight-hanging"></i>
              </SpecIcon>
              <SpecCardTitle>Load Capacity</SpecCardTitle>
              <SpecDetails>
                <SpecItem>
                  <SpecLabel>Wind Load:</SpecLabel>
                  <SpecValue>7KN - 10KN</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>Snow Load:</SpecLabel>
                  <SpecValue>7KN - 10KN</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>Damping Force:</SpecLabel>
                  <SpecValue>Customizable</SpecValue>
                </SpecItem>
              </SpecDetails>
            </SpecCard>
            
            <SpecCard>
              <SpecIcon>
                <i className="fas fa-cog"></i>
              </SpecIcon>
              <SpecCardTitle>Performance</SpecCardTitle>
              <SpecDetails>
                <SpecItem>
                  <SpecLabel>Operating Temp:</SpecLabel>
                  <SpecValue>-30°C to +80°C</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>Lifetime:</SpecLabel>
                  <SpecValue>2 Million Cycles</SpecValue>
                </SpecItem>
                <SpecItem>
                  <SpecLabel>Maintenance:</SpecLabel>
                  <SpecValue>Maintenance-Free</SpecValue>
                </SpecItem>
              </SpecDetails>
            </SpecCard>
          </SpecsGrid>
        </Container>
      </Specifications>

      {/* Applications */}
      <Applications>
        <Container>
          <SectionHeader>
            <h2>Solar Damper Applications</h2>
            <p>Versatile solutions for various solar tracking system configurations</p>
          </SectionHeader>
          <ApplicationsGrid>
            <ApplicationCard>
              <AppImage className="app-image">
                <Image 
                  src="/images/application/solar-damper/solar_tracking_system.png" 
                  alt="Single Axis Tracker"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </AppImage>
              <AppContent>
                <h3>Single-Axis Trackers</h3>
                <p>Optimal damping for single-axis solar tracking systems, providing stability during rotation and wind resistance.</p>
                <ul>
                  <li>Horizontal single-axis trackers</li>
                  <li>Tilted single-axis trackers</li>
                  <li>Vertical single-axis trackers</li>
                </ul>
              </AppContent>
            </ApplicationCard>
            
            <ApplicationCard>
              <AppImage className="app-image">
                <Image 
                  src="/images/application/solar-damper/solar_damper_application.webp" 
                  alt="Dual Axis Tracker"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </AppImage>
              <AppContent>
                <h3>Dual-Axis Trackers</h3>
                <p>Advanced damping solutions for dual-axis tracking systems requiring precise control in both azimuth and elevation.</p>
                <ul>
                  <li>Tip-tilt dual-axis trackers</li>
                  <li>Azimuth-elevation trackers</li>
                  <li>Polar mount trackers</li>
                </ul>
              </AppContent>
            </ApplicationCard>
            
            <ApplicationCard>
              <AppImage className="app-image">
                <Image 
                  src="/images/application/solar-damper/solar_damper_installation.jpg" 
                  alt="Large Scale Installation"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </AppImage>
              <AppContent>
                <h3>Large-Scale Solar Farms</h3>
                <p>Robust damping solutions for utility-scale solar installations with high reliability and performance requirements.</p>
                <ul>
                  <li>Utility-scale ground-mount systems</li>
                  <li>Desert and harsh environment installations</li>
                  <li>Coastal and high-wind areas</li>
                </ul>
              </AppContent>
            </ApplicationCard>
          </ApplicationsGrid>
        </Container>
      </Applications>

      {/* Why Choose Section */}
      <WhyChoose>
        <Container>
          <SectionHeader>
            <h2>Why Choose DK&apos;s Solar Dampers</h2>
            <p>Advanced engineering and proven performance for solar tracking applications</p>
          </SectionHeader>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-microscope"></i>
              </FeatureIcon>
              <FeatureCardTitle>Advanced Technology</FeatureCardTitle>
              <FeatureCardText>Proprietary hydraulic damping technology specifically engineered for solar tracking systems with precise vibration control.</FeatureCardText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-award"></i>
              </FeatureIcon>
              <FeatureCardTitle>Quality Excellence</FeatureCardTitle>
              <FeatureCardText>ISO 9001:2000 certified manufacturing processes ensuring consistent quality and reliability in every product.</FeatureCardText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-tools"></i>
              </FeatureIcon>
              <FeatureCardTitle>Custom Solutions</FeatureCardTitle>
              <FeatureCardText>Tailored damping solutions designed to meet specific requirements of your solar tracking system configuration.</FeatureCardText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-globe"></i>
              </FeatureIcon>
              <FeatureCardTitle>Global Support</FeatureCardTitle>
              <FeatureCardText>Worldwide technical support, installation guidance, and comprehensive after-sales service for all our products.</FeatureCardText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-shield-alt"></i>
              </FeatureIcon>
              <FeatureCardTitle>Proven Durability</FeatureCardTitle>
              <FeatureCardText>Extensive testing in harsh environments including salt spray, extreme temperatures, and high-cycle fatigue testing.</FeatureCardText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <i className="fas fa-wrench"></i>
              </FeatureIcon>
              <FeatureCardTitle>Low Maintenance</FeatureCardTitle>
              <FeatureCardText>Maintenance-free design with sealed construction and high-quality materials for long-term reliable operation.</FeatureCardText>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </WhyChoose>

      {/* FAQ Section */}
      <FAQ>
        <Container>
          <SectionHeader>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about solar dampers and their applications</p>
          </SectionHeader>
          <FAQGrid>
            <FAQItem>
              <FAQQuestion>
                <h3>What are the key specifications I should consider?</h3>
                <i className="fas fa-chevron-down"></i>
              </FAQQuestion>
              <FAQAnswer>
                <p>Key specifications include damping force range, stroke length, operating temperature range, and mounting compatibility. Our team will help you determine the optimal specifications based on your tracker design and environmental conditions.</p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>
                <h3>What is the correct installation orientation?</h3>
                <i className="fas fa-chevron-down"></i>
              </FAQQuestion>
              <FAQAnswer>
                <p>Dual-cylinder solar tracker dampers should be installed with the dust cover facing upward (Big End Up) to prevent dust and debris from entering and ensure proper functioning.</p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>
                <h3>What is the expected lifetime?</h3>
                <i className="fas fa-chevron-down"></i>
              </FAQQuestion>
              <FAQAnswer>
                <p>Our solar dampers are designed for approximately 2 million cycles, which typically corresponds to 25+ years of operation in solar tracking applications.</p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>
                <h3>Can the dampers be customized?</h3>
                <i className="fas fa-chevron-down"></i>
              </FAQQuestion>
              <FAQAnswer>
                <p>Yes, we provide customized solutions including adjusted damping force, modified dimensions, and specific mounting configurations to fit your unique project requirements.</p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>
                <h3>What materials are used in construction?</h3>
                <i className="fas fa-chevron-down"></i>
              </FAQQuestion>
              <FAQAnswer>
                <p>Our dampers use high-strength coated steel for the outer body and zinc-plated steel for end fittings, with specialized sealing materials for extreme weather resistance.</p>
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>
                <h3>What warranty is provided?</h3>
                <i className="fas fa-chevron-down"></i>
              </FAQQuestion>
              <FAQAnswer>
                <p>We provide comprehensive warranty coverage and promise long-term reliability. Contact our team for specific warranty terms based on your application requirements.</p>
              </FAQAnswer>
            </FAQItem>
          </FAQGrid>
        </Container>
      </FAQ>

      {/* Contact Section */}
      <Contact id="contact">
        <Container>
          <ContactContent>
            <ContactInfo>
              <h2>Get Your Custom Solar Damper Solution</h2>
              <p>Our engineering team is ready to design the perfect damping solution for your solar tracking system. Contact us for technical consultation and custom proposals.</p>
              
              <ContactDetails>
                <ContactItem>
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Company HQ</h4>
                    <p>Wenxianpo City, Huazhou Province, China</p>
                  </div>
                </ContactItem>
                
                <ContactItem>
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Contact Number</h4>
                    <p>+86 123 4567 8901</p>
                  </div>
                </ContactItem>
                
                <ContactItem>
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>contact@example.com</p>
                  </div>
                </ContactItem>
              </ContactDetails>
            </ContactInfo>
            
            <ContactForm className="proposal-form">
              <ProposalFormTitle>Request Custom Proposal</ProposalFormTitle>
              <FormGroup>
                <input type="text" placeholder="Your Name" required />
              </FormGroup>
              <FormGroup>
                <input type="email" placeholder="Email Address" required />
              </FormGroup>
              <FormGroup>
                <input type="text" placeholder="Company Name" />
              </FormGroup>
              <FormGroup>
                <select required>
                  <option value="">Select Tracker Type</option>
                  <option value="single-axis">Single-Axis Tracker</option>
                  <option value="dual-axis">Dual-Axis Tracker</option>
                  <option value="fixed-tilt">Fixed-Tilt System</option>
                  <option value="other">Other</option>
                </select>
              </FormGroup>
              <FormGroup>
                <textarea placeholder="Project Details (force requirements, stroke length, environmental conditions, etc.)" rows={4}></textarea>
              </FormGroup>
              <BtnPrimary as="button" type="submit" style={{ width: '100%' }}>
                <i className="fas fa-paper-plane"></i>
                Send Proposal Request
              </BtnPrimary>
            </ContactForm>
          </ContactContent>
        </Container>
      </Contact>
      <SolarDamperInteractive />
    </>
  );
}