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

interface SoundAnalyticsOfferEmailProps {
  userName?: string;
  companyName?: string;
  ctaLink?: string;
}

export const SoundAnalyticsOfferEmail = ({
  userName = 'Дмитрий',
  companyName = 'Tareev Studio',
  ctaLink = 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
}: SoundAnalyticsOfferEmailProps) => {
  const previewText = `Как мы помогли увеличить продажи на 47% за 3 месяца - ${companyName}`;

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
            {/* Header with Logo */}
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

            {/* Main Gradient Hero Section */}
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
                  lineHeight: '44px',
                  margin: '0',
                  textAlign: 'center'
                }}>
                  Как увеличить продажи<br />на 47% за 3 месяца
                </Heading>
              </div>
            </Section>

            {/* Content Section */}
            <Section className="px-6 pb-8">
              {/* Introduction */}
              <div style={{ marginBottom: '32px' }}>
                <Text style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 24px 0',
                  color: '#FEFEFE'
                }} className="dark-text">
                  Здравствуйте, {userName}!<br />
                  Меня зовут Дмитрий Тареев, основатель Tareev Studio. За 5 лет мы помогли 77+ компаниям автоматизировать процессы продаж с помощью ИИ. Наши клиенты в среднем увеличивают конверсию на 25-47% уже в первые 3 месяца.
                </Text>
              </div>

              {/* Success Story Section */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '12px'
              }}>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#10B981',
                    borderRadius: '50%',
                    marginRight: '8px',
                    marginTop: '6px'
                  }}></div>
                  <Text style={{
                    color: '#10B981',
                    fontSize: '14px',
                    fontWeight: '600',
                    margin: '0'
                  }}>ИСТОРИЯ УСПЕХА</Text>
                </div>
                
                <Text style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 16px 0',
                  color: '#D1D5DB',
                }} className="dark-text-secondary">
                  <strong style={{ color: '#FEFEFE' }} className="dark-text">Компания "ТехноСервис"</strong> внедрила нашу систему анализа звонков и за 3 месяца:
                </Text>
                
                <ul style={{ 
                  color: '#D1D5DB',
                  paddingLeft: '20px'
                }} className="dark-text-secondary">
                  <li style={{ 
                    marginBottom: '8px',
                    fontSize: '15px',
                    lineHeight: '22px'
                  }}>
                    Увеличила конверсию звонков с 12% до 18% (+47%)
                  </li>
                  <li style={{ 
                    marginBottom: '8px',
                    fontSize: '15px',
                    lineHeight: '22px'
                  }}>
                    Сократила время обучения новых менеджеров в 2 раза
                  </li>
                  <li style={{ 
                    fontSize: '15px',
                    lineHeight: '22px'
                  }}>
                    Получила дополнительно 2.3 млн рублей выручки
                  </li>
                </ul>
              </div>

              {/* Exclusive Section */}
              <div style={{ marginBottom: '32px' }}>
                <Heading style={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  margin: '0 0 16px 0',
                  fontWeight: '600',
                  color: '#FEFEFE'
                }} className="dark-text">
                  Как это работает для вашего бизнеса
                </Heading>
                
                <Text style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 24px 0',
                  color: '#D1D5DB',
                }} className="dark-text-secondary">
                  Наша система интеллектуального анализа звонков помогает руководителям продаж видеть полную картину и принимать решения на основе данных, а не догадок:
                </Text>
              </div>

              {/* Feature List with Bullet Points */}
              <div style={{ marginBottom: '32px' }}>
                <ul style={{ 
                  color: '#D1D5DB',
                  paddingLeft: '20px',
                  margin: '0 0 32px 0'
                }} className="dark-text-secondary">
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Показывает реальную эффективность каждого менеджера
                  </li>
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Выявляет точки роста в каждом разговоре
                  </li>
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Автоматически отслеживает соблюдение скриптов продаж
                  </li>
                  <li style={{ 
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}>
                    Предоставляет готовые рекомендации для улучшения результатов
                  </li>
                </ul>
              </div>

              {/* Limited Offer Section */}
              <div style={{
                marginBottom: '32px',
                padding: '24px',
                backgroundColor: '#7C2D12',
                border: '1px solid #EA580C',
                borderRadius: '12px'
              }}>
                <div style={{ display: 'flex', marginBottom: '16px' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#F97316',
                    borderRadius: '50%',
                    marginRight: '8px',
                    marginTop: '6px'
                  }}></div>
                  <Text style={{
                    color: '#FED7AA',
                    fontSize: '14px',
                    fontWeight: '600',
                    margin: '0'
                  }}>ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ</Text>
                </div>
                
                <Text style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 16px 0',
                  color: '#FED7AA',
                }}>
                  В январе мы запускаем пилотную программу только для <strong style={{ color: '#FEFEFE' }}>5 компаний</strong>. Участники получают:
                </Text>
                
                <ul style={{ 
                  color: '#FED7AA',
                  paddingLeft: '20px',
                  margin: '0 0 16px 0'
                }}>
                  <li style={{ 
                    marginBottom: '8px',
                    fontSize: '15px',
                    lineHeight: '22px'
                  }}>
                    Бесплатное внедрение (обычно 150 000 ₽)
                  </li>
                  <li style={{ 
                    marginBottom: '8px',
                    fontSize: '15px',
                    lineHeight: '22px'
                  }}>
                    3 месяца сопровождения по специальной цене
                  </li>
                  <li style={{ 
                    fontSize: '15px',
                    lineHeight: '22px'
                  }}>
                    Гарантию результата или возврат средств
                  </li>
                </ul>
                
                <Text style={{
                  color: '#FEFEFE',
                  fontSize: '14px',
                  fontWeight: '600',
                  margin: '0'
                }}>Осталось 2 места</Text>
              </div>

              {/* Example Analysis Section */}
              <div style={{ marginBottom: '32px' }}>
                <Heading style={{
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0',
                  fontWeight: '600',
                  color: '#FEFEFE'
                }} className="dark-text">
                  Посмотрите, как это выглядит на практике
                </Heading>
                
                <Text style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 32px 0',
                  color: '#D1D5DB',
                }} className="dark-text-secondary">
                  Мы подготовили реальный пример анализа звонков с рекомендациями. Посмотрите, какие инсайты получает руководитель отдела продаж:
                </Text>

                {/* CTA Button */}
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <Button
                    href={ctaLink}
                    style={{
                      backgroundColor: '#8B5CF6',
                      color: '#FEFEFE',
                      padding: '16px 32px',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: 'none',
                    }}
                    className="dark-button-primary"
                  >
                    Посмотреть пример анализа звонков →
                  </Button>
                </div>
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

SoundAnalyticsOfferEmail.PreviewProps = {
  userName: 'Дмитрий',
  companyName: 'Tareev Studio',
  ctaLink: 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
} as SoundAnalyticsOfferEmailProps;

export default SoundAnalyticsOfferEmail; 