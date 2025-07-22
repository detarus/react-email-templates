import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface SoundAnalyticsShortEmailProps {
  userName?: string;
  companyName?: string;
  ctaLink?: string;
}

export const SoundAnalyticsShortEmail = ({
  userName = 'Дмитрий',
  companyName = 'Tareev Studio',
  ctaLink = 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
}: SoundAnalyticsShortEmailProps) => {
  const previewText = `${userName}, ваш отдел продаж теряет 30% сделок`;

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
                'brand-red': '#EF4444',
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
                      <tr>
                        <td style={{ 
                          width: '48px', 
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          marginRight: '12px'
                        }}>
                          <div style={{ 
                            width: '48px', 
                            height: '48px', 
                            backgroundColor: '#FEFEFE', 
                            borderRadius: '50%', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            marginRight: '12px',
                            flexShrink: '0'
                          }} className="dark-logo-bg">
                            <Text style={{ 
                              color: '#1A1A1A', 
                              fontWeight: '700', 
                              fontSize: '18px', 
                              marginLeft: '12px', 
                              marginRight: '12px', 
                              marginBottom: 0,
                              marginTop: 0,
                              lineHeight: '48px'
                            }} className="dark-logo-text">TS</Text>
                          </div>
                        </td>
                        <td style={{ verticalAlign: 'middle' }}>
                          <Text style={{ 
                            color: '#FEFEFE', 
                            fontWeight: '500', 
                            fontSize: '20px', 
                            margin: '0', 
                            lineHeight: '1'
                          }} className="dark-text">Tareev Studio</Text>
                        </td>
                      </tr>
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
              <div style={{ padding: '64px 32px', textAlign: 'center' }}>
                <Heading style={{
                  color: '#FEFEFE',
                  fontWeight: '700',
                  fontSize: '30px',
                  lineHeight: '36px',
                  margin: '0 0 16px 0',
                  textAlign: 'center'
                }}>
                  Ваш отдел продаж<br />теряет 30% сделок
                </Heading>
                <Text style={{
                  color: '#FEFEFE',
                  fontSize: '18px',
                  lineHeight: '28px',
                  margin: '0',
                  opacity: '0.9'
                }}>
                  Каждый третий звонок — упущенная прибыль
                </Text>
              </div>
            </Section>

            {/* Content */}
            <Section className="px-6 pb-8">
              {/* Problem */}
              <div style={{ marginBottom: '32px' }}>
                <Text style={{
                  color: '#EF4444',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0'
                }}>
                  ❌ Знакомо?
                </Text>
                <ul style={{ 
                  paddingLeft: '20px',
                  margin: '0 0 24px 0',
                  color: '#D1D5DB'
                }} className="dark-text-secondary">
                  <li style={{ 
                    marginBottom: '8px',
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Менеджеры не следуют скриптам
                  </li>
                  <li style={{ 
                    marginBottom: '8px',
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Нет контроля качества звонков
                  </li>
                  <li style={{ 
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Клиенты уходят к конкурентам
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: '32px' }}>
                <Text style={{
                  color: '#10B981',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0'
                }}>
                  ✅ Решение: AI-анализ звонков
                </Text>
                <div style={{
                  backgroundColor: '#1F2937',
                  padding: '24px',
                  borderRadius: '12px',
                  marginBottom: '24px'
                }}>
                  <Text style={{
                    color: '#FEFEFE',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '28px',
                    margin: '0 0 8px 0'
                  }} className="dark-text">+30% к продажам за 2 месяца</Text>
                  <Text style={{
                    color: '#9CA3AF',
                    fontSize: '14px',
                    lineHeight: '20px',
                    margin: '0'
                  }}>Результат наших клиентов</Text>
                </div>
              </div>

              {/* Benefits */}
              <div style={{ marginBottom: '32px' }}>
                <Heading style={{
                  color: '#FEFEFE',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0'
                }} className="dark-text">
                  Что получите:
                </Heading>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ 
                    marginBottom: '12px',
                    padding: '12px',
                    backgroundColor: '#1F2937',
                    borderRadius: '8px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    <Text style={{
                      color: '#FEFEFE',
                      fontWeight: '600',
                      fontSize: '16px',
                      margin: '0',
                      display: 'inline'
                    }} className="dark-text">Прозрачность:</Text>
                    <Text style={{
                      color: '#9CA3AF',
                      fontSize: '16px',
                      margin: '0',
                      display: 'inline'
                    }}> видите каждый звонок</Text>
                  </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ 
                    marginBottom: '12px',
                    padding: '12px',
                    backgroundColor: '#1F2937',
                    borderRadius: '8px',
                    borderLeft: '4px solid #3B82F6'
                  }}>
                    <Text style={{
                      color: '#FEFEFE',
                      fontWeight: '600',
                      fontSize: '16px',
                      margin: '0',
                      display: 'inline'
                    }} className="dark-text">Контроль:</Text>
                    <Text style={{
                      color: '#9CA3AF',
                      fontSize: '16px',
                      margin: '0',
                      display: 'inline'
                    }}> автоматическая проверка скриптов</Text>
                  </div>
                </div>
                <div>
                  <div style={{ 
                    marginBottom: '12px',
                    padding: '12px',
                    backgroundColor: '#1F2937',
                    borderRadius: '8px',
                    borderLeft: '4px solid #8B5CF6'
                  }}>
                    <Text style={{
                      color: '#FEFEFE',
                      fontWeight: '600',
                      fontSize: '16px',
                      margin: '0',
                      display: 'inline'
                    }} className="dark-text">Результат:</Text>
                    <Text style={{
                      color: '#9CA3AF',
                      fontSize: '16px',
                      margin: '0',
                      display: 'inline'
                    }}> рост конверсии на 10-30%</Text>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <Button
                  href={ctaLink}
                  style={{
                    backgroundColor: '#10B981',
                    color: '#FEFEFE',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: 'none',
                  }}
                  className="dark-button-primary"
                >
                  Получить анализ 10 звонков БЕСПЛАТНО
                </Button>
                <Text style={{
                  color: '#6B7280',
                  fontSize: '14px',
                  lineHeight: '20px',
                  margin: '16px 0 0 0'
                }}>
                  Результат за 24 часа • Без обязательств
                </Text>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <Text style={{
                  color: '#D1D5DB',
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 16px 0'
                }} className="dark-text-secondary">
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
                        href="https://t.me/tareev_site"
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
                        href="https://wa.me/79112795209"
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
                }} className="dark-text-secondary">
                  С уважением,<br />
                  Дмитрий Тареев<br />
                  <span style={{ color: '#9CA3AF' }}>Основатель Tareev.studio • 77+ успешных проектов</span>
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

SoundAnalyticsShortEmail.PreviewProps = {
  userName: 'Дмитрий',
  companyName: 'Tareev Studio',
  ctaLink: 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
} as SoundAnalyticsShortEmailProps;

export default SoundAnalyticsShortEmail; 