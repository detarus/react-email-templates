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
                  fontSize: '24px',
                  lineHeight: '36px',
                  margin: '0 0 16px 0',
                  textAlign: 'center'
                }}>
                  Увеличьте продажи на 25-47% с помощью AI-анализа звонков
                </Heading>
                <Text style={{
                  color: '#FEFEFE',
                  fontSize: '18px',
                  lineHeight: '28px',
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
                  Здравствуйте!<br />
                  Меня зовут Дмитрий Тареев, я основатель веб-студии полного цикла Tareev.studio. За 5 лет мы реализовали больше 77 проектов и помогли десяткам компаний автоматизировать процессы продаж.
                </Text>
                <Text style={{
                  color: '#D1D5DB',
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 24px 0'
                }} className="dark-text-secondary">
                  Хочу рассказать о нашей системе AI-анализа звонков, которая помогает руководителям отделов продаж видеть полную картину эффективности команды.
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
                        }}>+25-47%</Text>
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
                  Бесплатная консультация • Анализ 20 звонков • Персональные рекомендации
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
                }}>
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

SoundAnalyticsBigEmail.PreviewProps = {
  userName: 'Дмитрий',
  companyName: 'Tareev Studio',
  ctaLink: 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
} as SoundAnalyticsBigEmailProps;

export default SoundAnalyticsBigEmail; 