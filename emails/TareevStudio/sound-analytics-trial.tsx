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

interface SoundAnalyticsTrialEmailProps {
  userName?: string;
  companyName?: string;
  ctaLink?: string;
}

export const SoundAnalyticsTrialEmail = ({
  userName = 'Дмитрий',
  companyName = 'Tareev Studio',
  ctaLink = 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
}: SoundAnalyticsTrialEmailProps) => {
  const previewText = `Бесплатный 30-дневный trial AI-анализа звонков для ${companyName}`;

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
                'brand-green': '#10B981',
                'brand-orange': '#F97316',
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
                  Протестируйте AI-анализ звонков<br />
                  3 дня бесплатно
                </Heading>
                <Text style={{
                  color: '#FEFEFE',
                  fontSize: '18px',
                  lineHeight: '28px',
                  margin: '0 0 24px 0',
                  opacity: '0.9'
                }}>
                  Вы увидите результат уже в первый день использования
                </Text>
                <div style={{
                  backgroundColor: '#10B981',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'inline-block'
                }}>
                  <Text style={{
                    color: '#FEFEFE',
                    fontWeight: '700',
                    fontSize: '18px',
                    margin: '0 0 4px 0'
                  }}>
                    Стоимость пробной версии: 0₽
                  </Text>
                  <Text style={{
                    color: '#A7F3D0',
                    fontSize: '14px',
                    margin: '0'
                  }}>
                    Обычная цена: 150,000₽/месяц
                  </Text>
                </div>
              </div>
            </Section>

            {/* Content */}
            <Section className="px-6 pb-8">
              {/* Что получите */}
              <div style={{ marginBottom: '32px' }}>
                <Heading style={{
                  color: '#FEFEFE',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0'
                }} className="dark-text">
                  🎯 Что получите в пробной версии:
                </Heading>
                
                <div style={{
                  backgroundColor: '#1F2937',
                  padding: '24px',
                  borderRadius: '12px'
                }}>
                  <ul style={{ 
                    paddingLeft: '20px',
                    margin: '0', 
                    color: '#D1D5DB' 
                  }} className="dark-text-secondary">
                    <li style={{ 
                      marginBottom: '8px',
                      fontSize: '16px',
                      lineHeight: '24px'
                    }}>
                      Анализ всех звонков с рекомендациями
                    </li>
                    <li style={{ 
                      marginBottom: '8px',
                      fontSize: '16px',
                      lineHeight: '24px'
                    }}>
                      Отчёты по каждому менеджеру
                    </li>
                    <li style={{ 
                      marginBottom: '8px',
                      fontSize: '16px',
                      lineHeight: '24px'
                    }}>
                      Контроль соблюдения скриптов
                    </li>
                    <li style={{ 
                      fontSize: '16px',
                      lineHeight: '24px'
                    }}>
                      Выявление конкретных причин потери сделок
                    </li>
                  </ul>
                </div>
              </div>

              {/* Результаты */}
              <div style={{ marginBottom: '32px' }}>
                <Heading style={{
                  color: '#FEFEFE',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0'
                }} className="dark-text">
                  📊 Результаты клиентов:
                </Heading>
                
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    backgroundColor: '#1F2937',
                    padding: '16px',
                    borderRadius: '12px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px'
                    }}>
                      <Text style={{
                        color: '#10B981',
                        fontWeight: '700',
                        fontSize: '16px',
                        margin: '0'
                      }}>IT-компания, 12 менеджеров</Text>
                      <Text style={{
                        color: '#FEFEFE',
                        fontWeight: '700',
                        fontSize: '20px',
                        margin: '0'
                      }} className="dark-text">+43%</Text>
                    </div>
                    <Text style={{
                      color: '#9CA3AF',
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      Конверсия выросла с 8% до 12% за месяц
                    </Text>
                  </div>
                </div>
                  
                <div>
                  <div style={{
                    backgroundColor: '#1F2937',
                    padding: '16px',
                    borderRadius: '12px',
                    borderLeft: '4px solid #3B82F6'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px'
                    }}>
                      <Text style={{
                        color: '#60A5FA',
                        fontWeight: '700',
                        fontSize: '16px',
                        margin: '0'
                      }}>Строительная компания</Text>
                      <Text style={{
                        color: '#FEFEFE',
                        fontWeight: '700',
                        fontSize: '20px',
                        margin: '0'
                      }} className="dark-text">+38%</Text>
                    </div>
                    <Text style={{
                      color: '#9CA3AF',
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      Средний чек вырос со 120k до 165k ₽
                    </Text>
                  </div>
                </div>
              </div>

              {/* Окупаемость */}
              <div style={{
                marginBottom: '32px',
                backgroundColor: '#065F46',
                padding: '24px',
                borderRadius: '12px'
              }}>
                <Heading style={{
                  color: '#FEFEFE',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0'
                }}>
                  💰 Окупаемость:
                </Heading>
                
                <div style={{
                  backgroundColor: '#047857',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '16px'
                }}>
                  <Text style={{
                    color: '#FEFEFE',
                    fontWeight: '600',
                    fontSize: '16px',
                    margin: '0 0 8px 0'
                  }}>Средняя компания (500 звонков/месяц):</Text>
                  <Text style={{
                    color: '#A7F3D0',
                    fontSize: '14px',
                    margin: '0'
                  }}>
                    Рост конверсии на 25% = +12 сделок = +1,200,000₽/месяц
                  </Text>
                </div>
                
                <div style={{
                  backgroundColor: '#F59E0B',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <Text style={{
                    color: '#1A1A1A',
                    fontWeight: '700',
                    fontSize: '16px',
                    margin: '0'
                  }}>
                    ROI: 800% • Окупается за 4 дня
                  </Text>
                </div>
              </div>

              {/* Быстрый старт */}
              <div style={{ marginBottom: '32px' }}>
                <Heading style={{
                  color: '#FEFEFE',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0'
                }} className="dark-text">
                  ⚡ Быстрый старт:
                </Heading>
                
                <div style={{
                  backgroundColor: '#1F2937',
                  padding: '24px',
                  borderRadius: '12px'
                }}>
                  <table width="100%" cellPadding="0" cellSpacing="0">
                    <tr>
                      <td style={{ textAlign: 'center', padding: '0 8px' }}>
                        <Text style={{ 
                          color: '#60A5FA', 
                          fontWeight: '700', 
                          fontSize: '18px',
                          margin: '0 0 8px 0'
                        }}>День 1</Text>
                        <Text style={{ 
                          color: '#D1D5DB', 
                          fontSize: '14px',
                          margin: '0'
                        }} className="dark-text-secondary">Подключение за 2 часа</Text>
                      </td>
                      <td style={{ textAlign: 'center', padding: '0 8px' }}>
                        <Text style={{ 
                          color: '#A78BFA', 
                          fontWeight: '700', 
                          fontSize: '18px',
                          margin: '0 0 8px 0'
                        }}>День 2-3</Text>
                        <Text style={{ 
                          color: '#D1D5DB', 
                          fontSize: '14px',
                          margin: '0'
                        }} className="dark-text-secondary">Обучение команды</Text>
                      </td>
                      <td style={{ textAlign: 'center', padding: '0 8px' }}>
                        <Text style={{ 
                          color: '#34D399', 
                          fontWeight: '700', 
                          fontSize: '18px',
                          margin: '0 0 8px 0'
                        }}>День 7</Text>
                        <Text style={{ 
                          color: '#D1D5DB', 
                          fontSize: '14px',
                          margin: '0'
                        }} className="dark-text-secondary">Первые результаты</Text>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

              {/* Гарантия */}
              <div style={{
                marginBottom: '32px',
                backgroundColor: '#1E3A8A',
                padding: '24px',
                borderRadius: '12px',
                border: '2px solid #3B82F6'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <Text style={{
                    color: '#60A5FA',
                    fontWeight: '700',
                    fontSize: '20px',
                    lineHeight: '28px',
                    margin: '0 0 16px 0'
                  }}>
                    🛡️ Гарантия результата
                  </Text>
                  <Text style={{
                    color: '#FEFEFE',
                    fontSize: '16px',
                    lineHeight: '24px',
                    margin: '0'
                  }}>
                    Не увидите улучшений за 3 дня — получите бесплатную консультацию по оптимизации продаж
                  </Text>
                </div>
              </div>

              {/* Главный CTA */}
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <Button
                  href={ctaLink}
                  style={{
                    backgroundColor: '#10B981',
                    color: '#FEFEFE',
                    padding: '18px 36px',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: 'none',
                    marginBottom: '16px',
                  }}
                  className="dark-button-primary"
                >
                  Начать 3-дневную пробную версию бесплатно
                </Button>
                <Text style={{
                  color: '#10B981',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '20px',
                  margin: '0 0 8px 0'
                }}>
                  ✅ Подключение за 2 часа • ✅ Первые результаты через неделю
                </Text>
                <Text style={{
                  color: '#6B7280',
                  fontSize: '12px',
                  lineHeight: '16px',
                  margin: '0'
                }}>
                  Нажимая кнопку, вы получаете доступ к системе в течение рабочего дня
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

SoundAnalyticsTrialEmail.PreviewProps = {
  userName: 'Дмитрий',
  companyName: 'Tareev Studio',
  ctaLink: 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
} as SoundAnalyticsTrialEmailProps;

export default SoundAnalyticsTrialEmail;