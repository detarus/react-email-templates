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

interface SoundAnalyticsDetailedEmailProps {
  userName?: string;
  companyName?: string;
  ctaLink?: string;
}

export const SoundAnalyticsDetailedEmail = ({
  userName = 'Дмитрий',
  companyName = 'Tareev Studio',
  ctaLink = 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
}: SoundAnalyticsDetailedEmailProps) => {
  const previewText = `Полный анализ проблем отдела продаж и их решения`;

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
                  Как система AI-анализа звонков решает 4 ключевые проблемы отдела продаж
                </Heading>
                <Text style={{
                  color: '#FEFEFE',
                  fontSize: '18px',
                  lineHeight: '28px',
                  margin: '0',
                  opacity: '0.9'
                }}>
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
                  Сегодня расскажу, как наша система AI-анализа звонков решает конкретные проблемы отделов продаж.
                </Text>
              </div>

              {/* Problem 1 */}
              <div style={{ 
                marginBottom: '32px', 
                backgroundColor: '#1F2937', 
                padding: '24px',
                borderRadius: '12px'
              }}>
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>
                      <Heading style={{
                        color: '#F87171',
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '28px',
                        margin: '0 0 8px 0'
                      }}>
                        1. Проблема: Нет контроля качества звонков
                      </Heading>
                      <Text style={{
                        color: '#D1D5DB',
                        fontSize: '14px',
                        lineHeight: '20px',
                        margin: '0 0 16px 0'
                      }}>
                        РОП не знает, как проходят переговоры. Менеджеры могут нарушать скрипты, пропускать важные этапы продаж, некорректно работать с возражениями.
                      </Text>
                    </td>
                  </tr>
                </table>
                <div style={{ backgroundColor: '#064E3B', padding: '16px', borderRadius: '8px' }}>
                  <Text style={{
                    color: '#34D399',
                    fontWeight: '600',
                    fontSize: '14px',
                    margin: '0 0 8px 0',
                  }}>✅ Как решает система:</Text>
                  <ul style={{ color: '#D1FAE5', paddingLeft: '20px' }}>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>
                      Автоматически анализирует каждый звонок
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Проверяет соблюдение скриптов продаж
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Выявляет пропущенные этапы воронки
                    </li>
                    <li style={{ 
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>
                      Формирует отчёты по качеству для каждого менеджера
                    </li>
                  </ul>
                </div>
              </div>

              {/* Problem 2 */}
              <div style={{ 
                marginBottom: '32px', 
                backgroundColor: '#1F2937', 
                padding: '24px',
                borderRadius: '12px'
              }}>
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>
                      <Heading style={{
                        color: '#F87171',
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '28px',
                        margin: '0 0 8px 0'
                      }}>
                        2. Проблема: Низкая конверсия звонков в сделки
                      </Heading>
                      <Text style={{
                        color: '#D1D5DB',
                        fontSize: '14px',
                        lineHeight: '20px',
                        margin: '0 0 16px 0'
                      }}>
                        Много звонков, но мало закрытых сделок. Менеджеры не умеют правильно работать с возражениями, не выявляют потребности клиентов.
                      </Text>
                    </td>
                  </tr>
                </table>
                <div style={{ backgroundColor: '#064E3B', padding: '16px', borderRadius: '8px' }}>
                  <Text style={{
                    color: '#34D399',
                    fontWeight: '600',
                    fontSize: '14px',
                    margin: '0 0 8px 0'
                  }}>✅ Как решает система:</Text>
                  <ul style={{ color: '#D1FAE5', paddingLeft: '20px' }}>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Анализирует успешные и неуспешные звонки
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Выявляет паттерны закрытия сделок
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Показывает, на каком этапе теряются клиенты
                    </li>
                    <li style={{ 
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Даёт рекомендации по улучшению техник продаж
                    </li>
                  </ul>
                </div>
              </div>

              {/* Problem 3 */}
              <div style={{ 
                marginBottom: '32px', 
                backgroundColor: '#1F2937', 
                padding: '24px',
                borderRadius: '12px'
              }}>
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>
                      <Heading style={{
                        color: '#F87171',
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '28px',
                        margin: '0 0 8px 0'
                      }}>
                        3. Проблема: Сложно обучать новых сотрудников
                      </Heading>
                      <Text style={{
                        color: '#D1D5DB',
                        fontSize: '14px',
                        lineHeight: '20px',
                        margin: '0 0 16px 0'
                      }}>
                        Новички долго входят в работу, делают ошибки, которые можно было бы избежать. Нет системы быстрого обучения на реальных примерах.
                      </Text>
                    </td>
                  </tr>
                </table>
                <div style={{ backgroundColor: '#064E3B', padding: '16px', borderRadius: '8px' }}>
                  <Text style={{
                    color: '#34D399',
                    fontWeight: '600',
                    fontSize: '14px',
                    margin: '0 0 8px 0'
                  }}>✅ Как решает система:</Text>
                  <ul style={{ color: '#D1FAE5', paddingLeft: '20px' }}>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Создаёт базу лучших звонков для обучения
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Показывает типичные ошибки новичков
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Даёт персональные рекомендации каждому
                    </li>
                    <li style={{ 
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Ускоряет адаптацию в 2-3 раза
                    </li>
                  </ul>
                </div>
              </div>

              {/* Problem 4 */}
              <div style={{ 
                marginBottom: '32px', 
                backgroundColor: '#1F2937', 
                padding: '24px',
                borderRadius: '12px'
              }}>
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style={{ verticalAlign: 'top' }}>
                      <Heading style={{
                        color: '#F87171',
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '28px',
                        margin: '0 0 8px 0'
                      }}>
                        4. Проблема: Нет данных для принятия решений
                      </Heading>
                      <Text style={{
                        color: '#D1D5DB',
                        fontSize: '14px',
                        lineHeight: '20px',
                        margin: '0 0 16px 0'
                      }}>
                        РОП принимает решения интуитивно. Нет понимания, какие скрипты работают лучше, какие возражения встречаются чаще всего.
                      </Text>
                    </td>
                  </tr>
                </table>
                <div style={{ backgroundColor: '#064E3B', padding: '16px', borderRadius: '8px' }}>
                  <Text style={{
                    color: '#34D399',
                    fontWeight: '600',
                    fontSize: '14px',
                    margin: '0 0 8px 0'
                  }}>✅ Как решает система:</Text>
                  <ul style={{ color: '#D1FAE5', paddingLeft: '20px' }}>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Собирает статистику по всем звонкам
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Анализирует эффективность скриптов
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Выявляет частые возражения клиентов
                    </li>
                    <li style={{ 
                      position: 'relative',
                      paddingLeft: '0',
                      fontSize: '14px',
                      lineHeight: '20px'
                    }}>

                      Предоставляет данные для стратегических решений
                    </li>
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div style={{ marginBottom: '32px' }}>
                <Heading style={{
                  color: '#FFFFFF',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 24px 0'
                }}>
                  Результаты наших клиентов:
                </Heading>
                
                {/* Results Table Layout instead of Grid */}
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style={{ paddingBottom: '16px' }}>
                      <div style={{ backgroundColor: '#065F46', padding: '24px', borderRadius: '12px' }}>
                        <Text style={{
                          color: '#FFFFFF',
                          fontWeight: '700',
                          fontSize: '24px',
                          lineHeight: '32px',
                          margin: '0 0 8px 0'
                        }}>+47%</Text>
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
                          color: '#FFFFFF',
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
                        }} className="dark-text">+25%</Text>
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

              {/* Case Study */}
              <div style={{ 
                marginBottom: '32px', 
                backgroundColor: '#374151', 
                padding: '24px',
                borderLeft: '4px solid #3B82F6',
                borderRadius: '12px'
              }}>
                <Heading style={{
                  color: '#60A5FA',
                  fontWeight: '700',
                  fontSize: '18px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0'
                }}>
                  Кейс: IT-компания, 15 менеджеров
                </Heading>
                <Text style={{
                  color: '#D1D5DB',
                  fontSize: '14px',
                  lineHeight: '20px',
                  margin: '0 0 16px 0'
                }}>
                  <strong>Проблема:</strong> Конверсия звонков 8%, высокая текучка кадров, долгое обучение новичков.
                </Text>
                <Text style={{
                  color: '#D1D5DB',
                  fontSize: '14px',
                  lineHeight: '20px',
                  margin: '0 0 16px 0'
                }}>
                  <strong>Решение:</strong> Внедрили AI-анализ звонков, создали базу знаний, автоматизировали контроль качества.
                </Text>
                <Text style={{
                  color: '#34D399',
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '600',
                  margin: '0'
                }}>
                  <strong>Результат за 3 месяца:</strong> Конверсия выросла до 12%, время обучения сократилось с 2 месяцев до 3 недель, текучка снизилась на 40%.
                </Text>
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
                  Получить пример 1 дня работы системы аналитики бесплатно
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

SoundAnalyticsDetailedEmail.PreviewProps = {
  userName: 'Дмитрий',
  companyName: 'Tareev Studio',
  ctaLink: 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
} as SoundAnalyticsDetailedEmailProps;

export default SoundAnalyticsDetailedEmail; 