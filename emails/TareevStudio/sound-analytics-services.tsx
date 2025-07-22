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

interface SoundAnalyticsServicesEmailProps {
  userName?: string;
  companyName?: string;
  ctaLink?: string;
}

export const SoundAnalyticsServicesEmail = ({
  userName = 'Дмитрий',
  companyName = 'Tareev Studio',
  ctaLink = 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
}: SoundAnalyticsServicesEmailProps) => {
  const previewText = `Комплексная автоматизация продаж: сайт + AI-чатбот + анализ звонков`;

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
                  Полная автоматизация отдела продаж под ключ
                </Heading>
                <Text style={{
                  color: '#FEFEFE',
                  fontSize: '18px',
                  lineHeight: '28px',
                  margin: '0',
                  opacity: '0.9'
                }}>
                  Сайт + AI-чатбот + анализ звонков = максимальная эффективность
                </Text>
              </div>
            </Section>

            {/* Content */}
            <Section className="px-6 pb-8">
              {/* Introduction */}
              <div className="mb-8">
                <Text className="text-white text-base mb-6 leading-relaxed">
                  Здравствуйте!<br />
                  Помимо AI-анализа звонков, мы предлагаем комплексные решения для автоматизации всего процесса продаж. Создаём экосистему, где каждый элемент работает на увеличение ваших продаж.
                </Text>
              </div>

              {/* Service 1: Website */}
              <div className="mb-8 bg-gradient-to-r from-blue-900 to-cyan-900 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-lg m-0">🌐</Text>
                  </div>
                  <div>
                    <Heading className="text-blue-400 font-bold text-xl mb-2 m-0">
                      Продающий сайт с AI-интеграцией
                    </Heading>
                    <Text className="text-gray-300 text-sm mb-4">
                      Современный сайт, который не просто красиво выглядит, а реально продаёт. Интегрируем с CRM, аналитикой и AI-инструментами.
                    </Text>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="bg-blue-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Адаптивный дизайн</Text>
                    <Text className="text-blue-200 text-xs">Идеально работает на всех устройствах</Text>
                  </div>
                  <div className="bg-blue-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ SEO-оптимизация</Text>
                    <Text className="text-blue-200 text-xs">Высокие позиции в поисковых системах</Text>
                  </div>
                  <div className="bg-blue-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Интеграция с CRM</Text>
                    <Text className="text-blue-200 text-xs">Автоматическая передача лидов</Text>
                  </div>
                  <div className="bg-blue-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Аналитика и метрики</Text>
                    <Text className="text-blue-200 text-xs">Отслеживание конверсий и ROI</Text>
                  </div>
                </div>

                <div className="bg-green-600 rounded-lg p-4">
                  <Text className="text-white font-bold text-lg mb-2">Результат:</Text>
                  <Text className="text-green-100 text-sm">
                    +150% лидов с сайта • Конверсия 8-12% • Окупаемость за 2-3 месяца
                  </Text>
                </div>
              </div>

                            {/* Service 3: Call Analytics */}
                            <div className="mb-8 bg-gradient-to-r from-green-900 to-teal-900 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-lg m-0">📞</Text>
                  </div>
                  <div>
                    <Heading className="text-green-400 font-bold text-xl mb-2 m-0">
                      AI-анализ звонков (наш хит!)
                    </Heading>
                    <Text className="text-gray-300 text-sm mb-4">
                      Система, которая анализирует каждый звонок, выявляет проблемы и даёт рекомендации по улучшению продаж.
                    </Text>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="bg-green-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Контроль скриптов</Text>
                    <Text className="text-green-200 text-xs">Проверка соблюдения стандартов</Text>
                  </div>
                  <div className="bg-green-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Анализ эмоций</Text>
                    <Text className="text-green-200 text-xs">Настроение клиента и менеджера</Text>
                  </div>
                  <div className="bg-green-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Обучение команды</Text>
                    <Text className="text-green-200 text-xs">Персональные рекомендации</Text>
                  </div>
                  <div className="bg-green-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Детальная аналитика</Text>
                    <Text className="text-green-200 text-xs">Отчёты и метрики эффективности</Text>
                  </div>
                </div>

                <div className="bg-green-600 rounded-lg p-4">
                  <Text className="text-white font-bold text-lg mb-2">Результат:</Text>
                  <Text className="text-green-100 text-sm">
                    +30% конверсия звонков • Быстрое обучение новичков • Контроль качества
                  </Text>
                </div>
              </div>

              {/* Service 2: AI Chatbot */}
              <div className="mb-8 bg-gradient-to-r from-purple-900 to-pink-900 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-lg m-0">🤖</Text>
                  </div>
                  <div>
                    <Heading className="text-purple-400 font-bold text-xl mb-2 m-0">
                      AI-чатбот для продаж 24/7
                    </Heading>
                    <Text className="text-gray-300 text-sm mb-4">
                      Умный помощник, который работает круглосуточно, квалифицирует лиды, отвечает на вопросы и записывает на встречи.
                    </Text>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="bg-purple-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Квалификация лидов</Text>
                    <Text className="text-purple-200 text-xs">Определяет готовность к покупке</Text>
                  </div>
                  <div className="bg-purple-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Запись на встречи</Text>
                    <Text className="text-purple-200 text-xs">Автоматическое планирование звонков</Text>
                  </div>
                  <div className="bg-purple-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ База знаний</Text>
                    <Text className="text-purple-200 text-xs">Отвечает на 90% типовых вопросов</Text>
                  </div>
                  <div className="bg-purple-800 bg-opacity-50 p-3 rounded">
                    <Text className="text-white font-semibold text-sm">✅ Мультиканальность</Text>
                    <Text className="text-purple-200 text-xs">Сайт, Telegram, WhatsApp, VK</Text>
                  </div>
                </div>

                <div className="bg-green-600 rounded-lg p-4">
                  <Text className="text-white font-bold text-lg mb-2">Результат:</Text>
                  <Text className="text-green-100 text-sm">
                    +200% обработанных заявок • 24/7 работа • Экономия на зарплате менеджеров
                  </Text>
                </div>
              </div>



              {/* Package Offers */}
              <div className="mb-8">
                <Heading className="text-white font-bold text-xl mb-6">
                  🎯 Готовые пакеты решений:
                </Heading>
                
                {/* Package 1 */}
                <div className="mb-6 bg-gray-900 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Text className="text-blue-400 font-bold text-lg mb-2">СТАРТОВЫЙ</Text>
                      <Text className="text-gray-300 text-sm">Для малого бизнеса</Text>
                    </div>
                    <div className="text-right">
                      <Text className="text-white font-bold text-xl">299,000₽</Text>
                      <Text className="text-gray-400 text-sm line-through">450,000₽</Text>
                    </div>
                  </div>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', color: '#D1D5DB' }}>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#3B82F6',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Продающий сайт (5 страниц)
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#3B82F6',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Базовый AI-чатбот
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#3B82F6',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Интеграция с CRM
                    </li>
                    <li style={{ 
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#3B82F6',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      3 месяца поддержки
                    </li>
                  </ul>
                </div>

                {/* Package 2 */}
                <div className="mb-6 bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-lg border-l-4 border-purple-400">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Text className="text-purple-400 font-bold text-lg mb-2">ПРОФЕССИОНАЛЬНЫЙ</Text>
                      <Text className="text-gray-300 text-sm">Самый популярный</Text>
                    </div>
                    <div className="text-right">
                      <Text className="text-white font-bold text-xl">599,000₽</Text>
                      <Text className="text-gray-400 text-sm line-through">850,000₽</Text>
                    </div>
                  </div>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', color: '#D1D5DB' }}>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#8B5CF6',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Продающий сайт (до 15 страниц)
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#8B5CF6',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Продвинутый AI-чатбот
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#8B5CF6',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      AI-анализ звонков (базовый)
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#8B5CF6',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Интеграция с CRM + аналитика
                    </li>
                    <li style={{ 
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#8B5CF6',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      6 месяцев поддержки
                    </li>
                  </ul>
                </div>

                {/* Package 3 */}
                <div className="mb-6 bg-gradient-to-r from-orange-900 to-red-900 p-6 rounded-lg border-l-4 border-orange-400">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <Text className="text-orange-400 font-bold text-lg mb-2">МАКСИМАЛЬНЫЙ</Text>
                      <Text className="text-gray-300 text-sm">Полная автоматизация</Text>
                    </div>
                    <div className="text-right">
                      <Text className="text-white font-bold text-xl">999,000₽</Text>
                      <Text className="text-gray-400 text-sm line-through">1,500,000₽</Text>
                    </div>
                  </div>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', color: '#D1D5DB' }}>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#F97316',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Корпоративный сайт (без ограничений)
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#F97316',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      AI-чатбот с машинным обучением
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#F97316',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Полный AI-анализ звонков
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#F97316',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Интеграция со всеми системами
                    </li>
                    <li style={{ 
                      marginBottom: '4px',
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#F97316',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Персональный менеджер проекта
                    </li>
                    <li style={{ 
                      position: 'relative',
                      paddingLeft: '16px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '6px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#F97316',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      12 месяцев поддержки
                    </li>
                  </ul>
                </div>
              </div>

              {/* ROI Calculator */}
              <div className="mb-8 bg-gradient-to-r from-green-900 to-green-800 p-6 rounded-lg">
                <Heading className="text-white font-bold text-xl mb-4">
                  💰 Расчёт окупаемости:
                </Heading>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-green-800 bg-opacity-50 p-4 rounded">
                    <Text className="text-green-400 font-semibold">Средний чек: 100,000₽</Text>
                    <Text className="text-green-200 text-sm">Увеличение продаж на 30% = +30 сделок/месяц</Text>
                  </div>
                  <div className="bg-green-800 bg-opacity-50 p-4 rounded">
                    <Text className="text-green-400 font-semibold">Дополнительная прибыль: 3,000,000₽/месяц</Text>
                    <Text className="text-green-200 text-sm">Окупаемость любого пакета за 1-2 месяца</Text>
                  </div>
                </div>
              </div>

              {/* Case Study */}
              <div className="mb-8 bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-500">
                <Heading className="text-yellow-400 font-bold text-lg mb-4">
                  📈 Кейс: Комплексное внедрение
                </Heading>
                <Text className="text-gray-300 text-sm mb-4">
                  <strong>Клиент:</strong> IT-компания, 25 сотрудников, средний чек 150,000₽
                </Text>
                <Text className="text-gray-300 text-sm mb-4">
                  <strong>Решение:</strong> Новый сайт + AI-чатбот + анализ звонков + интеграции
                </Text>
                <Text className="text-green-400 text-sm font-semibold mb-4">
                  <strong>Результат за 6 месяцев:</strong>
                </Text>
                <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', color: '#10B981' }}>
                  <li style={{ 
                    marginBottom: '4px',
                    position: 'relative',
                    paddingLeft: '16px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '6px',
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#10B981',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    +180% лидов с сайта
                  </li>
                  <li style={{ 
                    marginBottom: '4px',
                    position: 'relative',
                    paddingLeft: '16px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '6px',
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#10B981',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    +45% конверсия звонков
                  </li>
                  <li style={{ 
                    marginBottom: '4px',
                    position: 'relative',
                    paddingLeft: '16px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '6px',
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#10B981',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    +320% общая прибыль
                  </li>
                  <li style={{ 
                    position: 'relative',
                    paddingLeft: '16px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      top: '6px',
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#10B981',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    ROI: 650%
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center mb-8">
                <Button
                  href={ctaLink}
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                    color: '#FFFFFF',
                    padding: '18px 36px',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: 'none',
                    marginBottom: '16px',
                  }}
                >
                  Получить персональное предложение
                </Button>
                <Text className="text-gray-400 text-sm">
                  Бесплатная консультация • Расчёт ROI • Техническое задание
                </Text>
              </div>

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
                          color: '#FFFFFF',
                          padding: '12px 20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          display: 'inline-block',
                          border: 'none',
                          borderRadius: '8px',
                        }}
                      >
                        LinkedIn
                      </Button>
                    </td>
                    <td style={{ paddingRight: '12px', paddingBottom: '8px' }}>
                      <Button
                        href="https://t.me/tareev_site"
                        style={{
                          backgroundColor: '#0088CC',
                          color: '#FFFFFF',
                          padding: '12px 20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          display: 'inline-block',
                          border: 'none',
                          borderRadius: '8px',
                        }}
                      >
                        Telegram
                      </Button>
                    </td>
                    <td style={{ paddingBottom: '8px' }}>
                      <Button
                        href="https://wa.me/79112795209"
                        style={{
                          backgroundColor: '#25D366',
                          color: '#FFFFFF',
                          padding: '12px 20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          textDecoration: 'none',
                          display: 'inline-block',
                          border: 'none',
                          borderRadius: '8px',
                        }}
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

SoundAnalyticsServicesEmail.PreviewProps = {
  userName: 'Дмитрий',
  companyName: 'Tareev Studio',
  ctaLink: 'https://docs.google.com/spreadsheets/d/1wrXY8qgbYseFwkndeYvg63reLIiirh9iZn5RFigrosY/',
} as SoundAnalyticsServicesEmailProps;

export default SoundAnalyticsServicesEmail; 