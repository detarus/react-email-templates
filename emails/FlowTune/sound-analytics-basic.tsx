import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface SoundAnalyticsBigEmailProps {
  userName?: string;
  companyName?: string;
  ctaLink?: string;
}

export const SoundAnalyticsBigEmail = ({
  userName = 'Дмитрий',
  companyName = 'Tareev Studio',
  ctaLink = 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
}: SoundAnalyticsBigEmailProps) => {
  const previewText = `Ваш отдел продаж может больше - ${companyName}`;

  return (
    <Html>
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                'brand-blue': '#00BFFF',
                'brand-purple': '#8B5CF6',
                'brand-pink': '#EC4899',
                'brand-cyan': '#06B6D4',
                'brand-magenta': '#D946EF',
              },
              fontSize: {
                xs: ['12px', { lineHeight: '16px' }],
                sm: ['14px', { lineHeight: '20px' }],
                base: ['16px', { lineHeight: '24px' }],
                lg: ['18px', { lineHeight: '28px' }],
                xl: ['20px', { lineHeight: '28px' }],
                '2xl': ['24px', { lineHeight: '32px' }],
                '3xl': ['30px', { lineHeight: '36px' }],
                '4xl': ['36px', { lineHeight: '40px' }],
                '5xl': ['48px', { lineHeight: '52px' }],
              },
              backgroundImage: {
                'gradient-main': 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
              },
            },
          },
        }}
      >
        <style>
          {`
            :root {
              color-scheme: light dark;
              supported-color-schemes: light dark;
            }
            
            /* Dark Mode Support for Apple Mail, iOS Mail */
            @media (prefers-color-scheme: dark) {
              .dark-bg { background-color: #1A1A1A !important; }
              .dark-text { color: #FEFEFE !important; }
              .dark-text-secondary { color: #D1D5DB !important; }
              .dark-border { border-color: #374151 !important; }
              
              /* Ensure buttons remain visible */
              .dark-button-primary { 
                background-color: #8B5CF6 !important; 
                color: #FEFEFE !important; 
              }
              .dark-button-linkedin { 
                background-color: #0077B5 !important; 
                color: #FEFEFE !important; 
              }
              .dark-button-telegram { 
                background-color: #0088CC !important; 
                color: #FEFEFE !important; 
              }
              .dark-button-whatsapp { 
                background-color: #25D366 !important; 
                color: #FEFEFE !important; 
              }
              
              /* Logo background for dark mode */
              .dark-logo-bg { background-color: #FEFEFE !important; }
              .dark-logo-text { color: #1A1A1A !important; }
            }
            
            /* Dark Mode Support for Outlook Apps (Android/iOS) */
            [data-ogsc] .dark-bg { background-color: #1A1A1A !important; }
            [data-ogsc] .dark-text { color: #FEFEFE !important; }
            [data-ogsc] .dark-text-secondary { color: #D1D5DB !important; }
            [data-ogsc] .dark-border { border-color: #374151 !important; }
            
            [data-ogsc] .dark-button-primary { 
              background-color: #8B5CF6 !important; 
              color: #FEFEFE !important; 
            }
            [data-ogsc] .dark-button-linkedin { 
              background-color: #0077B5 !important; 
              color: #FEFEFE !important; 
            }
            [data-ogsc] .dark-button-telegram { 
              background-color: #0088CC !important; 
              color: #FEFEFE !important; 
            }
            [data-ogsc] .dark-button-whatsapp { 
              background-color: #25D366 !important; 
              color: #FEFEFE !important; 
            }
            
            [data-ogsc] .dark-logo-bg { background-color: #FEFEFE !important; }
            [data-ogsc] .dark-logo-text { color: #1A1A1A !important; }
            
            /* Prevent color inversion on specific elements */
            .no-dark-invert {
              mix-blend-mode: difference;
              filter: invert(1);
            }
          `}
        </style>
        <Body className="bg-black font-sans text-white m-0 p-0">
          <Container className="mx-auto max-w-[600px] bg-black">
            {/* Header */}
            <Section className="px-6 py-8">
              <table width="100%" cellPadding="0" cellSpacing="0" style={{ margin: '0' }}>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <table cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="188" height="38" viewBox="0 0 188 38" fill="none">
<script id="exodus-extension" data-extension-id="aholpfdialjgjfhomihkjbmgjidlcdno" data-prioritize-exodus="true"/><rect x="24.3176" y="2.36878" width="15.2925" height="31.7477" rx="7.64627" transform="rotate(45 24.3176 2.36878)" stroke="url(#paint0_linear_218_74)" stroke-width="2.64286"/>
<rect x="7.87633e-08" y="1.86878" width="15.2925" height="31.7477" rx="7.64627" transform="matrix(-0.707107 0.707107 0.707107 0.707107 11.3606 1.04735)" stroke="url(#paint1_linear_218_74)" stroke-width="2.64286"/>
<rect x="18.4427" y="15.3858" width="5.03035" height="5.03035" transform="rotate(45 18.4427 15.3858)" stroke="url(#paint2_linear_218_74)" stroke-width="2.64286"/>
<path d="M44.5857 28V9.5H55.5139V12.7243H47.81V16.4771H54.2454V19.7014H47.81V28H44.5857ZM57.4387 28V8.17857H60.663V28H57.4387ZM69.4472 28.3436C68.2314 28.3436 67.1214 28.0308 66.1172 27.4054C65.1217 26.7799 64.3244 25.943 63.7254 24.8946C63.1351 23.8375 62.84 22.6702 62.84 21.3929C62.84 20.4238 63.0118 19.5208 63.3554 18.6839C63.6989 17.8382 64.1702 17.0982 64.7693 16.4639C65.3772 15.8208 66.0819 15.3187 66.8836 14.9575C67.6852 14.5963 68.5398 14.4157 69.4472 14.4157C70.6629 14.4157 71.7685 14.7285 72.7639 15.3539C73.7682 15.9794 74.5655 16.8207 75.1557 17.8779C75.7548 18.935 76.0543 20.1067 76.0543 21.3929C76.0543 22.3531 75.8825 23.2517 75.5389 24.0886C75.1954 24.9255 74.7197 25.6655 74.1118 26.3086C73.5127 26.9429 72.8124 27.4406 72.0107 27.8018C71.2179 28.163 70.3633 28.3436 69.4472 28.3436ZM69.4472 25.1193C70.0902 25.1193 70.6673 24.9475 71.1782 24.6039C71.6892 24.2604 72.09 23.8067 72.3807 23.2429C72.6802 22.679 72.83 22.0624 72.83 21.3929C72.83 20.7057 72.6758 20.0802 72.3675 19.5164C72.068 18.9438 71.6583 18.4901 71.1386 18.1554C70.6276 17.8118 70.0638 17.64 69.4472 17.64C68.8129 17.64 68.2402 17.8118 67.7293 18.1554C67.2183 18.4989 66.8131 18.957 66.5136 19.5296C66.2141 20.1023 66.0643 20.7233 66.0643 21.3929C66.0643 22.0888 66.2185 22.7187 66.5268 23.2825C66.8351 23.8463 67.2448 24.2956 67.7557 24.6304C68.2755 24.9563 68.8393 25.1193 69.4472 25.1193ZM84.311 28H81.1131L76.6995 14.7857H79.8577L82.7252 23.3354L85.5795 14.7857H88.7642L91.6185 23.3354L94.486 14.7857H97.6442L93.2306 28H90.0327L87.1652 19.4107L84.311 28ZM111.837 9.5V12.7243H106.181V28H102.957V12.7243H97.3014V9.5H111.837ZM112.348 23.1107V14.7857H115.572V22.265C115.572 22.7848 115.7 23.2605 115.956 23.6921C116.211 24.115 116.55 24.4542 116.973 24.7096C117.405 24.9563 117.876 25.0796 118.387 25.0796C118.916 25.0796 119.391 24.9563 119.814 24.7096C120.237 24.4542 120.576 24.115 120.832 23.6921C121.087 23.2605 121.215 22.7848 121.215 22.265V14.7857H124.439L124.452 28H121.228L121.215 26.7975C120.757 27.2732 120.215 27.652 119.59 27.9339C118.964 28.207 118.295 28.3436 117.581 28.3436C116.621 28.3436 115.744 28.1101 114.951 27.6432C114.159 27.1675 113.524 26.5376 113.049 25.7536C112.582 24.9607 112.348 24.0798 112.348 23.1107ZM139.202 19.6486V28H135.978V20.4943C135.978 19.9745 135.85 19.5032 135.594 19.0804C135.339 18.6487 134.995 18.3095 134.564 18.0629C134.141 17.8074 133.669 17.6796 133.15 17.6796C132.63 17.6796 132.154 17.8074 131.723 18.0629C131.3 18.3095 130.961 18.6487 130.705 19.0804C130.458 19.5032 130.335 19.9745 130.335 20.4943V28H127.111L127.098 14.7857H130.322L130.335 15.9618C130.784 15.4861 131.322 15.1117 131.947 14.8386C132.573 14.5567 133.247 14.4157 133.969 14.4157C134.929 14.4157 135.806 14.6536 136.599 15.1293C137.391 15.5962 138.021 16.2261 138.488 17.0189C138.964 17.803 139.202 18.6795 139.202 19.6486ZM147.391 28.3436C146.175 28.3436 145.065 28.0308 144.061 27.4054C143.065 26.7799 142.268 25.9386 141.669 24.8814C141.079 23.8243 140.784 22.657 140.784 21.3796C140.784 20.4194 140.955 19.5208 141.299 18.6839C141.643 17.8382 142.114 17.0982 142.713 16.4639C143.321 15.8208 144.026 15.3187 144.827 14.9575C145.629 14.5963 146.483 14.4157 147.391 14.4157C148.421 14.4157 149.364 14.636 150.219 15.0764C151.082 15.5081 151.813 16.1027 152.412 16.8604C153.011 17.618 153.447 18.4813 153.72 19.4504C153.994 20.4194 154.055 21.4325 153.905 22.4896H144.246C144.369 22.983 144.572 23.4279 144.854 23.8243C145.136 24.2119 145.492 24.5246 145.924 24.7625C146.356 24.9915 146.845 25.1105 147.391 25.1193C147.955 25.1281 148.466 24.996 148.924 24.7229C149.391 24.441 149.778 24.0621 150.086 23.5864L153.377 24.3529C152.839 25.5245 152.038 26.4848 150.972 27.2336C149.906 27.9736 148.712 28.3436 147.391 28.3436ZM144.14 20.0714H150.641C150.545 19.5429 150.338 19.0671 150.02 18.6443C149.712 18.2126 149.329 17.869 148.871 17.6136C148.413 17.3581 147.919 17.2304 147.391 17.2304C146.862 17.2304 146.373 17.3581 145.924 17.6136C145.475 17.8602 145.091 18.1994 144.774 18.6311C144.466 19.0539 144.255 19.534 144.14 20.0714ZM168.898 9.5H172.612L179.338 28H175.915L174.726 24.7229H166.797L165.608 28H162.186L168.898 9.5ZM167.973 21.4986H173.537L170.748 13.8739L167.973 21.4986ZM181.951 28V9.5H185.176V28H181.951Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_218_74" x1="33.2853" y1="0.5" x2="33.2853" y2="34.8905" gradientUnits="userSpaceOnUse">
<stop stop-color="#A78BFA"/>
<stop offset="1" stop-color="#6366F1"/>
</linearGradient>
<linearGradient id="paint1_linear_218_74" x1="8.96769" y1="0" x2="8.96769" y2="34.3905" gradientUnits="userSpaceOnUse">
<stop stop-color="#A78BFA"/>
<stop offset="1" stop-color="#6366F1"/>
</linearGradient>
<linearGradient id="paint2_linear_218_74" x1="22.2793" y1="13.517" x2="22.2793" y2="21.1902" gradientUnits="userSpaceOnUse">
<stop stop-color="#A78BFA"/>
<stop offset="1" stop-color="#6366F1"/>
</linearGradient>
</defs>
</svg>
                    </table>
                  </td>
                </tr>
              </table>
            </Section>

            {/* Hero Section */}
            <Section className="mb-8" style={{
              backgroundColor: '#8B5CF6',
              padding: '0',
              margin: '0 24px 32px 24px',
              width: 'calc(100% - 48px)',
              borderRadius: '16px'
            }}>
              <div style={{ padding: '24px 24px', textAlign: 'center' }}>
                <Heading style={{
                  color: '#FEFEFE',
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0',
                  textAlign: 'center'
                }}>
                  Увеличьте число сделок на 7-15% с помощью AI-анализа звонков
                </Heading>
                <Text style={{
                  color: '#FEFEFE',
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0',
                  opacity: '0.9'
                }}>
                  Агентная система автоматического анализа переговоров для отделов продаж
                </Text>
              </div>
            </Section>

            {/* Content */}
            <Section className="px-6 pb-8">
              {/* Introduction */}
              <div style={{ marginBottom: '32px' }}>
                <Text style={{
                  color: '#FEFEFE',
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 24px 0'
                }} className="dark-text">
                  <a href="https://flowtune.pro" style={{ color: '#FEFEFE' }}>Flowtune.pro</a> - это эфффективный отдел контроля качества, который 24/7 помогает вашей команде расти и развиваться по вашим регламентам с детальными отчетвми и рекомендациями.
                </Text>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '32px' }}>
                <Heading style={{
                  color: '#FEFEFE',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 24px 0'
                }} className="dark-text">
                  Как работает система умной аналитики звонков?
                </Heading>
                
                <ul style={{ 
                  color: '#D1D5DB',
                  paddingLeft: '20px',
                  margin: '0 0 32px 0'
                }}>
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Автоматически анализирует каждый звонок и показывает качество переговоров
                  </li>
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Выявляет пропущенные этапы продаж и возможности для улучшения
                  </li>
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Отслеживает соблюдение скриптов и техник работы с возражениями
                  </li>
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Формирует персональные рекомендации для каждого сотрудника
                  </li>
                  <li style={{ 
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Предоставляет данные для принятия стратегических решений
                  </li>
                </ul>
              </div>

              {/* Results */}
              <div style={{ marginBottom: '32px' }}>
                <Heading style={{
                  color: '#FEFEFE',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 24px 0'
                }}>
                  Результаты наших клиентов:
                </Heading>
                
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style={{ paddingBottom: '16px' }}>
                      <div style={{ backgroundColor: '#065F46', padding: '24px', borderRadius: '12px' }}>
                        <Text style={{
                          color: '#FEFEFE',
                          fontWeight: '700',
                          fontSize: '24px',
                          lineHeight: '32px',
                          margin: '0 0 8px 0'
                        }}>+7-15%</Text>
                        <Text style={{
                          color: '#A7F3D0',
                          fontSize: '14px',
                          lineHeight: '20px',
                          margin: '0'
                        }}>рост конверсии звонков в сделки</Text>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: '16px' }}>
                      <div style={{ backgroundColor: '#1E3A8A', padding: '24px', borderRadius: '12px' }}>
                        <Text style={{
                          color: '#FEFEFE',
                          fontWeight: '700',
                          fontSize: '24px',
                          lineHeight: '32px',
                          margin: '0 0 8px 0'
                        }}>-60%</Text>
                        <Text style={{
                          color: '#BFDBFE',
                          fontSize: '14px',
                          lineHeight: '20px',
                          margin: '0'
                        }}>время адаптации новых сотрудников</Text>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ backgroundColor: '#581C87', padding: '24px', borderRadius: '12px' }}>
                        <Text style={{
                          color: '#FEFEFE',
                          fontWeight: '700',
                          fontSize: '24px',
                          lineHeight: '32px',
                          margin: '0 0 8px 0'
                        }}>+30%</Text>
                        <Text style={{
                          color: '#DDD6FE',
                          fontSize: '14px',
                          lineHeight: '20px',
                          margin: '0'
                        }}>средний чек продаж</Text>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              {/* CTA */}
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <Button
                  href={ctaLink}
                  style={{
                    backgroundColor: '#8B5CF6',
                    color: '#FEFEFE',
                    padding: '18px 36px',
                    fontSize: '18px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: 'none',
                    marginBottom: '16px',
                    borderRadius: '12px',
                  }}
                  className="dark-button-primary"
                >
                  Посмотреть примеры анализа звонков
                </Button>
                <Text style={{
                  color: '#9CA3AF',
                  fontSize: '14px',
                  lineHeight: '20px',
                  margin: '0'
                }}>
                  Бесплатная консультация • Анализ до 9000 звонков / день • Донастройка под ваш регламент
                </Text>
              </div>

              {/* Contact */}
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <Text style={{
                  color: '#D1D5DB',
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 16px 0'
                }}>
                  Готовы обсудить ваши задачи и показать, как система поможет именно вам:
                </Text>
                
                {/* Contact Buttons Table Layout */}
                <table cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
                  <tr>
                    <td style={{ paddingRight: '12px', paddingBottom: '8px' }}>
                      <Button
                        href="https://www.linkedin.com/in/dmitrii-tareev-1888331b2"
                        style={{
                          backgroundColor: '#0077B5',
                          color: '#FEFEFE',
                          padding: '12px 20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          display: 'inline-block',
                          border: 'none',
                          borderRadius: '8px',
                        }}
                        className="dark-button-linkedin"
                      >
                        LinkedIn
                      </Button>
                    </td>
                    <td style={{ paddingRight: '12px', paddingBottom: '8px' }}>
                      <Button
                        href="https://t.me/guroval999"
                        style={{
                          backgroundColor: '#0088CC',
                          color: '#FEFEFE',
                          padding: '12px 20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          display: 'inline-block',
                          border: 'none',
                          borderRadius: '8px',
                        }}
                        className="dark-button-telegram"
                      >
                        Telegram
                      </Button>
                    </td>
                    <td style={{ paddingBottom: '8px' }}>
                      <Button
                        href="https://api.whatsapp.com/send?phone=79998108961&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B5%D0%BC%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B5%20FlowTune"
                        style={{
                          backgroundColor: '#25D366',
                          color: '#FEFEFE',
                          padding: '12px 20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          display: 'inline-block',
                          border: 'none',
                          borderRadius: '8px',
                        }}
                        className="dark-button-whatsapp"
                      >
                        WhatsApp
                      </Button>
                    </td>
                  </tr>
                </table>
              </div>

              {/* Signature */}
              <div style={{ textAlign: 'center' }}>
                <Text style={{
                  color: '#D1D5DB',
                  fontSize: '14px',
                  lineHeight: '20px',
                  margin: '0'
                }}>
                  С уважением,<br />
                  Дмитрий Тареев<br />
                  <span style={{ color: '#9CA3AF' }}>CEO Tareev.studio • CTO Flowtune.pro</span>
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

SoundAnalyticsBigEmail.PreviewProps = {
  userName: 'Дмитрий',
  companyName: 'Tareev Studio',
  ctaLink: 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
} as SoundAnalyticsBigEmailProps;

export default SoundAnalyticsBigEmail; 