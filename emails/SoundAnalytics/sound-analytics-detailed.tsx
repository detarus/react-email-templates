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
      <Head />
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
        <Body className="bg-black font-sans text-white m-0 p-0">
          <Container className="mx-auto max-w-[600px] bg-black">
            {/* Header */}
            <Section className="px-6 py-8">
              <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px',
                  minWidth: '48px', 
                  minHeight: '48px', 
                  backgroundColor: '#FFFFFF', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '12px',
                  flexShrink: '0'
                }}>
                  <Text style={{ 
                    color: '#000000', 
                    fontWeight: '700', 
                    fontSize: '18px', 
                    margin: '0', 
                    lineHeight: '1'
                  }}>TS</Text>
                </div>
                <Text style={{ 
                  color: '#FFFFFF', 
                  fontWeight: '500', 
                  fontSize: '20px', 
                  margin: '0', 
                  lineHeight: '1'
                }}>Tareev Studio</Text>
              </div>
            </Section>

            {/* Hero Section */}
            <Section className="mb-8 rounded-xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
            }}>
              <div className="px-8 py-16 text-center">
                <Heading className="text-white font-bold text-3xl mb-4 leading-tight">
                  Как AI-анализ звонков<br />решает 7 главных проблем<br />отдела продаж
                </Heading>
                <Text className="text-white text-lg opacity-90">
                  Детальный разбор каждой проблемы и способов её решения
                </Text>
              </div>
            </Section>

            {/* Content */}
            <Section className="px-6 pb-8">
              {/* Introduction */}
              <div className="mb-8">
                <Text className="text-white text-base mb-6 leading-relaxed">
                  Здравствуйте!<br />
                  Меня зовут Дмитрий Тареев, я основатель веб-студии полного цикла Tareev.studio. За 5 лет мы реализовали больше 77 проектов и помогли десяткам компаний автоматизировать процессы продаж.
                </Text>
                <Text className="text-gray-300 text-base mb-6 leading-relaxed">
                  Сегодня расскажу, как наша система AI-анализа звонков решает конкретные проблемы отделов продаж.
                </Text>
              </div>

              {/* Problem 1 */}
              <div className="mb-8 bg-gray-900 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-sm m-0 flex items-center justify-center" style={{minWidth: '32px', minHeight: '32px'}}>1</Text>
                  </div>
                  <div>
                    <Heading className="text-red-400 font-bold text-lg mb-2 m-0">
                      Проблема: Нет контроля качества звонков
                    </Heading>
                    <Text className="text-gray-300 text-sm mb-4">
                      РОП не знает, как проходят переговоры. Менеджеры могут нарушать скрипты, пропускать важные этапы продаж, некорректно работать с возражениями.
                    </Text>
                  </div>
                </div>
                <div className="bg-green-900 p-4 rounded-lg">
                  <Text className="text-green-400 font-semibold mb-2" style={{marginTop: '0px'}}>✅ Как решает система:</Text>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', color: '#D1FAE5' }}>
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
                      Автоматически анализирует каждый звонок
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
                      Проверяет соблюдение скриптов продаж
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
                      Выявляет пропущенные этапы воронки
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
                      Формирует отчёты по качеству для каждого менеджера
                    </li>
                  </ul>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="mb-8 bg-gray-900 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-sm m-0 flex items-center justify-center" style={{minWidth: '32px', minHeight: '32px'}}>2</Text>
                  </div>
                  <div>
                    <Heading className="text-red-400 font-bold text-lg mb-2 m-0">
                      Проблема: Низкая конверсия звонков в сделки
                    </Heading>
                    <Text className="text-gray-300 text-sm mb-4">
                      Много звонков, но мало закрытых сделок. Менеджеры не умеют правильно работать с возражениями, не выявляют потребности клиентов.
                    </Text>
                  </div>
                </div>
                <div className="bg-green-900 p-4 rounded-lg">
                  <Text className="text-green-400 font-semibold mb-2" style={{marginTop: '0px'}}>✅ Как решает система:</Text>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', color: '#D1FAE5' }}>
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
                      Анализирует успешные и неуспешные звонки
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
                      Выявляет паттерны закрытия сделок
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
                      Показывает, на каком этапе теряются клиенты
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
                      Даёт рекомендации по улучшению техник продаж
                    </li>
                  </ul>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="mb-8 bg-gray-900 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-sm m-0 flex items-center justify-center" style={{minWidth: '32px', minHeight: '32px'}}>3</Text>
                  </div>
                  <div>
                    <Heading className="text-red-400 font-bold text-lg mb-2 m-0">
                      Проблема: Сложно обучать новых сотрудников
                    </Heading>
                    <Text className="text-gray-300 text-sm mb-4">
                      Новички долго входят в работу, делают ошибки, которые можно было бы избежать. Нет системы быстрого обучения на реальных примерах.
                    </Text>
                  </div>
                </div>
                <div className="bg-green-900 p-4 rounded-lg">
                  <Text className="text-green-400 font-semibold mb-2" style={{marginTop: '0px'}}>✅ Как решает система:</Text>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', color: '#D1FAE5' }}>
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
                      Создаёт базу лучших звонков для обучения
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
                      Показывает типичные ошибки новичков
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
                      Даёт персональные рекомендации каждому
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
                      Ускоряет адаптацию в 2-3 раза
                    </li>
                  </ul>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="mb-8 bg-gray-900 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Text className="text-white font-bold text-sm m-0 flex items-center justify-center" style={{minWidth: '32px', minHeight: '32px'}}>4</Text>
                  </div>
                  <div>
                    <Heading className="text-red-400 font-bold text-lg mb-2 m-0">
                      Проблема: Нет данных для принятия решений
                    </Heading>
                    <Text className="text-gray-300 text-sm mb-4">
                      РОП принимает решения интуитивно. Нет понимания, какие скрипты работают лучше, какие возражения встречаются чаще всего.
                    </Text>
                  </div>
                </div>
                <div className="bg-green-900 p-4 rounded-lg">
                  <Text className="text-green-400 font-semibold mb-2" style={{marginTop: '0px'}}>✅ Как решает система:</Text>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0', color: '#D1FAE5' }}>
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
                      Собирает статистику по всем звонкам
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
                      Анализирует эффективность скриптов
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
                      Выявляет частые возражения клиентов
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
                      Предоставляет данные для стратегических решений
                    </li>
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <Heading className="text-white font-bold text-xl mb-6">
                  Результаты наших клиентов:
                </Heading>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 rounded-lg">
                    <Text className="text-white font-bold text-2xl mb-2">+47%</Text>
                    <Text className="text-green-200 text-sm">рост конверсии звонков в сделки</Text>
                  </div>
                  <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg">
                    <Text className="text-white font-bold text-2xl mb-2">-60%</Text>
                    <Text className="text-blue-200 text-sm">время адаптации новых сотрудников</Text>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-lg">
                    <Text className="text-white font-bold text-2xl mb-2">+25%</Text>
                    <Text className="text-purple-200 text-sm">средний чек продаж</Text>
                  </div>
                </div>
              </div>

              {/* Case Study */}
              <div className="mb-8 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                <Heading className="text-blue-400 font-bold text-lg mb-4">
                  Кейс: IT-компания, 15 менеджеров
                </Heading>
                <Text className="text-gray-300 text-sm mb-4">
                  <strong>Проблема:</strong> Конверсия звонков 8%, высокая текучка кадров, долгое обучение новичков.
                </Text>
                <Text className="text-gray-300 text-sm mb-4">
                  <strong>Решение:</strong> Внедрили AI-анализ звонков, создали базу знаний, автоматизировали контроль качества.
                </Text>
                <Text className="text-green-400 text-sm font-semibold">
                  <strong>Результат за 3 месяца:</strong> Конверсия выросла до 12%, время обучения сократилось с 2 месяцев до 3 недель, текучка снизилась на 40%.
                </Text>
              </div>

              {/* CTA */}
              <div className="text-center mb-8">
                <Button
                  href={ctaLink}
                  style={{
                    backgroundColor: '#8B5CF6',
                    color: '#FFFFFF',
                    padding: '18px 36px',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: 'none',
                    marginBottom: '16px',
                  }}
                >
                  Получить пример 1 дня работы системы аналитики бесплатно
                </Button>
                <Text className="text-gray-400 text-sm">
                  Бесплатная консультация • Анализ 20 звонков • Персональные рекомендации
                </Text>
              </div>

              {/* Contact */}
              <div className="text-center mb-8">
                <Text className="text-gray-300 text-base mb-4">
                  Готовы обсудить ваши задачи и показать, как система поможет именно вам:
                </Text>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    href="https://www.linkedin.com/in/dmitrii-tareev-1888331b2"
                    style={{
                      backgroundColor: '#0077B5',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: 'none',
                    }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    href="https://t.me/tareev_site"
                    style={{
                      backgroundColor: '#0088CC',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: 'none',
                    }}
                  >
                    Telegram
                  </Button>
                  <Button
                    href="https://wa.me/79112795209"
                    style={{
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: 'none',
                    }}
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>

              {/* Signature */}
              <div className="text-center">
                <Text className="text-gray-300 text-sm">
                  С уважением,<br />
                  Дмитрий Тареев<br />
                  <span className="text-gray-400">Основатель Tareev.studio • 77+ успешных проектов</span>
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