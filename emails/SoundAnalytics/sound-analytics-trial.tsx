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
                'brand-orange': '#F97316',
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
                  Протестируйте AI-анализ звонков<br />
                  3 дня бесплатно
                </Heading>
                <Text className="text-white text-lg opacity-90 mb-6">
                  Вы увидите результат уже в первый день использования
                </Text>
                <div className="bg-green-500 rounded-lg p-4 inline-block">
                  <Text className="text-white font-bold text-lg m-0">
                    Стоимость пробной версии: 0₽
                  </Text>
                  <Text className="text-green-100 text-sm m-0">
                    Обычная цена: 150,000₽/месяц
                  </Text>
                </div>
              </div>
            </Section>

            {/* Content */}
            <Section className="px-6 pb-8">
              {/* Что получите */}
              <div className="mb-8">
                <Heading className="text-white font-bold text-xl mb-4">
                  🎯 Что получите в пробной версии:
                </Heading>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <ul style={{ 
                    listStyleType: 'none', 
                    paddingLeft: '0', 
                    margin: '0', 
                    color: '#D1D5DB' 
                  }}>
                    <li style={{ 
                      marginBottom: '8px',
                      position: 'relative',
                      paddingLeft: '20px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '8px',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#10B981',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Анализ всех звонков с рекомендациями
                    </li>
                    <li style={{ 
                      marginBottom: '8px',
                      position: 'relative',
                      paddingLeft: '20px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '8px',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#10B981',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Отчёты по каждому менеджеру
                    </li>
                    <li style={{ 
                      marginBottom: '8px',
                      position: 'relative',
                      paddingLeft: '20px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '8px',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#10B981',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Контроль соблюдения скриптов
                    </li>
                    <li style={{ 
                      position: 'relative',
                      paddingLeft: '20px'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '8px',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#10B981',
                        borderRadius: '50%',
                        display: 'inline-block'
                      }}></span>
                      Выявление конкретных причин потери сделок
                    </li>
                  </ul>
                </div>
              </div>

              {/* Результаты */}
              <div className="mb-8">
                <Heading className="text-white font-bold text-xl mb-4">
                  📊 Результаты клиентов:
                </Heading>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-green-500">
                    <div className="flex justify-between items-center">
                      <Text className="text-green-400 font-bold">IT-компания, 12 менеджеров</Text>
                      <Text className="text-white font-bold text-xl">+43%</Text>
                    </div>
                    <Text className="text-gray-300 text-sm">
                      Конверсия выросла с 8% до 12% за месяц
                    </Text>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex justify-between items-center">
                      <Text className="text-blue-400 font-bold">Строительная компания</Text>
                      <Text className="text-white font-bold text-xl">+38%</Text>
                    </div>
                    <Text className="text-gray-300 text-sm">
                      Средний чек вырос со 120k до 165k ₽
                    </Text>
                  </div>
                </div>
              </div>

              {/* Окупаемость */}
              <div className="mb-8 bg-gradient-to-r from-green-900 to-green-800 p-6 rounded-lg">
                <Heading className="text-white font-bold text-xl mb-4">
                  💰 Окупаемость:
                </Heading>
                
                <div className="bg-green-800 bg-opacity-50 p-4 rounded-lg mb-4">
                  <Text className="text-white font-semibold mb-2">Средняя компания (500 звонков/месяц):</Text>
                  <Text className="text-green-200 text-sm">
                    Рост конверсии на 25% = +12 сделок = +1,200,000₽/месяц
                  </Text>
                </div>
                
                <div className="bg-yellow-500 rounded-lg p-4">
                  <Text className="text-black font-bold text-center">
                    ROI: 800% • Окупается за 4 дня
                  </Text>
                </div>
              </div>

              {/* Быстрый старт */}
              <div className="mb-8">
                <Heading className="text-white font-bold text-xl mb-4">
                  ⚡ Быстрый старт:
                </Heading>
                
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '16px', 
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}>
                    <div style={{ flex: '1', minWidth: '120px' }}>
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
                      }}>Подключение за 2 часа</Text>
                    </div>
                    <div style={{ flex: '1', minWidth: '120px' }}>
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
                      }}>Обучение команды</Text>
                    </div>
                    <div style={{ flex: '1', minWidth: '120px' }}>
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
                      }}>Первые результаты</Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* Гарантия */}
              <div className="mb-8 bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg border-2 border-blue-400">
                <div className="text-center">
                  <Text className="text-blue-400 font-bold text-xl mb-4">
                    🛡️ Гарантия результата
                  </Text>
                  <Text className="text-white text-base">
                    Не увидите улучшений за 3 дня — получите бесплатную консультацию по оптимизации продаж
                  </Text>
                </div>
              </div>

              {/* Главный CTA */}
              <div className="text-center mb-8">
                <Button
                  href={ctaLink}
                  style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: '#FFFFFF',
                    padding: '18px 36px',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: 'none',
                    marginBottom: '16px',
                    boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  Начать 3-дневную пробную версию бесплатно
                </Button>
                <Text className="text-green-400 font-semibold text-sm mb-2">
                  ✅ Подключение за 2 часа • ✅ Первые результаты через неделю
                </Text>
                <Text className="text-gray-400 text-xs">
                  Нажимая кнопку, вы получаете доступ к системе в течение рабочего дня
                </Text>
              </div>



              {/* Контакты */}
              <div className="text-center mb-8">
                <Text className="text-gray-300 text-base mb-4">
                  Остались вопросы? Обсудим детали лично:
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

              {/* Подпись */}
              <div className="text-center">
                <Text className="text-gray-300 text-sm">
                  С уважением,<br />
                  Дмитрий Тареев<br />
                  <span className="text-gray-400">Основатель Tareev.studio • Помогаю увеличивать продажи с 2019 года</span>
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