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
                  Ваш отдел продаж<br />теряет 30% сделок
                </Heading>
                <Text className="text-white text-lg opacity-90">
                  Каждый третий звонок — упущенная прибыль
                </Text>
              </div>
            </Section>

            {/* Content */}
            <Section className="px-6 pb-8">
              {/* Problem */}
              <div className="mb-8">
                <Text className="text-red-400 font-bold text-lg mb-4">
                  ❌ Знакомо?
                </Text>
                <ul style={{ 
                  listStyleType: 'none', 
                  paddingLeft: '0', 
                  margin: '0 0 24px 0',
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
                      backgroundColor: '#EF4444',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Менеджеры не следуют скриптам
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
                      backgroundColor: '#EF4444',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Нет контроля качества звонков
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
                      backgroundColor: '#EF4444',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Клиенты уходят к конкурентам
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <Text className="text-green-400 font-bold text-lg mb-4">
                  ✅ Решение: AI-анализ звонков
                </Text>
                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <Text className="text-white font-bold text-xl mb-2">+30% к продажам за 2 месяца</Text>
                  <Text className="text-gray-300 text-sm">Результат наших клиентов</Text>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <Heading className="text-white font-bold text-xl mb-4">
                  Что получите:
                </Heading>
                <ul style={{ 
                  listStyleType: 'none', 
                  paddingLeft: '0', 
                  margin: '0 0 24px 0'
                }}>
                  <li style={{ 
                    marginBottom: '12px',
                    padding: '12px',
                    backgroundColor: '#1F2937',
                    borderRadius: '8px',
                    borderLeft: '4px solid #10B981'
                  }}>
                    <Text className="text-white font-semibold">Прозрачность:</Text>
                    <Text className="text-gray-300"> видите каждый звонок</Text>
                  </li>
                  <li style={{ 
                    marginBottom: '12px',
                    padding: '12px',
                    backgroundColor: '#1F2937',
                    borderRadius: '8px',
                    borderLeft: '4px solid #3B82F6'
                  }}>
                    <Text className="text-white font-semibold">Контроль:</Text>
                    <Text className="text-gray-300"> автоматическая проверка скриптов</Text>
                  </li>
                  <li style={{ 
                    marginBottom: '12px',
                    padding: '12px',
                    backgroundColor: '#1F2937',
                    borderRadius: '8px',
                    borderLeft: '4px solid #8B5CF6'
                  }}>
                    <Text className="text-white font-semibold">Результат:</Text>
                    <Text className="text-gray-300"> рост конверсии на 10-30%</Text>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center mb-8">
                <Button
                  href={ctaLink}
                  style={{
                    backgroundColor: '#10B981',
                    color: '#FFFFFF',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: 'none',
                  }}
                >
                  Получить анализ 10 звонков БЕСПЛАТНО
                </Button>
                <Text className="text-gray-400 text-sm mt-4">
                  Результат за 24 часа • Без обязательств
                </Text>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
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

              {/* Signature */}
              <div className="text-center">
                <Text className="text-gray-300 text-sm">
                  С уважением,<br />
                  Дмитрий Тареев<br />
                  <span className="text-gray-400">Основатель Tareev.studio</span>
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