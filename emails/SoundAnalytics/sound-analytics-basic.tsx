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
        <Body className="bg-black font-sans text-white m-0 p-0">
          <Container className="mx-auto max-w-[600px] bg-black">
            {/* Header with Logo */}
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

            {/* Main Gradient Hero Section */}
            <Section className="mb-8 rounded-xl overflow-hidden" style={{
              background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
              position: 'relative',
            }}>
              <div className="px-8 py-16 text-center relative z-10">
                <Heading className="text-white font-bold text-4xl mb-0 leading-tight" style={{
                  fontSize: '32px',
                  lineHeight: '44px',
                  margin: '0',
                  fontWeight: '700',
                }}>
                  Ваш отдел продаж<br />может больше
                </Heading>
              </div>
            </Section>

            {/* Content Section */}
            <Section className="px-6 pb-8">
              {/* Introduction */}
              <div className="mb-8">
                <Text className="text-white text-base mb-6 leading-relaxed" style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 24px 0',
                }}>
                  Здравствуйте!<br />
                  Меня зовут Дмитрий Тареев, я основатель веб-студии полного цикла Tareev.studio, которая специализируется на цифровых решениях с применением искусственного интеллекта. Мы реализовали больше 77 проектов за 5 лет и в каждом мы автоматизируем процессы и усиливаем команды.
                </Text>
              </div>

              {/* Exclusive Section */}
              <div className="mb-8">
                <Heading className="text-white font-bold text-2xl mb-4" style={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  margin: '0 0 16px 0',
                  fontWeight: '600',
                }}>
                  Эксклюзив для роста продаж
                </Heading>
                
                <Text className="text-gray-300 text-base mb-6 leading-relaxed" style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 24px 0',
                  color: '#D1D5DB',
                }}>
                  Мы разработали систему интеллектуального анализа звонков, которая уже помогает компаниям усиливать отдел продаж на 10–30%. Система:
                </Text>
              </div>

              {/* Feature List with Bullet Points */}
              <div className="mb-8">
                <ul style={{ 
                  listStyleType: 'none', 
                  paddingLeft: '0', 
                  margin: '0 0 32px 0',
                  color: '#D1D5DB'
                }}>
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px',
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
                    даёт РОПу прозрачную картину происходящего;
                  </li>
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px',
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
                    показывает сильные и слабые стороны каждого диалога;
                  </li>
                  <li style={{ 
                    marginBottom: '12px',
                    fontSize: '16px',
                    lineHeight: '24px',
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
                    выявляет отклонения от скриптов и несоответствия регламентам;
                  </li>
                  <li style={{ 
                    fontSize: '16px',
                    lineHeight: '24px',
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
                    усиливает контроль, управляемость и результат.
                  </li>
                </ul>
              </div>

              {/* Example Analysis Section */}
              <div className="mb-8">
                <Heading className="text-white font-bold text-xl mb-4" style={{
                  fontSize: '20px',
                  lineHeight: '28px',
                  margin: '0 0 16px 0',
                  fontWeight: '600',
                }}>
                  Пример анализа звонков
                </Heading>
                
                <Text className="text-gray-300 text-base mb-8 leading-relaxed" style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 32px 0',
                  color: '#D1D5DB',
                }}>
                  Мы работаем только с ограниченным числом клиентов — без публичной рекламы. Сейчас у вас есть возможность войти в это число на специальных условиях.
                </Text>

                {/* CTA Button */}
                <div className="text-center mb-8">
                  <Button
                    href={ctaLink}
                    className="bg-brand-purple hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-base inline-block no-underline"
                    style={{
                      backgroundColor: '#8B5CF6',
                      color: '#FFFFFF',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: 'none',
                    }}
                  >
                    Посмотреть пример анализа звонков
                  </Button>
                </div>
              </div>

              {/* Contact Information as Buttons */}
              <div className="mb-8">
                <Text className="text-gray-300 text-base mb-6 leading-relaxed" style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  margin: '0 0 24px 0',
                  color: '#D1D5DB',
                }}>
                  Если вам интересно обсудить внедрение или задать вопросы — будем рады назначить встречу и пообщаться через:
                </Text>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                  <Button
                    href="https://www.linkedin.com/in/dmitrii-tareev-1888331b2"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-sm inline-block no-underline"
                    style={{
                      backgroundColor: '#0077B5',
                      color: '#FFFFFF',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: 'none',
                      marginRight: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    LinkedIn
                  </Button>
                  
                  <Button
                    href="https://t.me/tareev_site"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg text-sm inline-block no-underline"
                    style={{
                      backgroundColor: '#0088CC',
                      color: '#FFFFFF',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: 'none',
                      marginRight: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    Telegram
                  </Button>
                  
                  <Button
                    href="https://wa.me/79112795209"
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg text-sm inline-block no-underline"
                    style={{
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: 'none',
                      marginBottom: '8px',
                    }}
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>

              {/* Signature */}
              <div className="mb-8">
                <Text className="text-gray-300 text-sm leading-relaxed" style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#D1D5DB',
                }}>
                  С уважением,<br />
                  Дмитрий Тареев
                </Text>
              </div>

              <Hr className="border-gray-700 my-6" style={{
                borderColor: '#374151',
                margin: '24px 0',
              }} />
            </Section>

            {/* Footer */}
            <Section className="px-6 py-6">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#FFFFFF', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginRight: '16px' 
                }}>
                  <Text style={{ color: '#000000', fontWeight: '700', fontSize: '14px', margin: '0', lineHeight: '1' }}>TS</Text>
                </div>
                
                {/* Social Icons with Links */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link href="https://www.linkedin.com/in/dmitrii-tareev-1888331b2" style={{ 
                    textDecoration: 'none',
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#0077B5',
                    borderRadius: '4px',
                    textAlign: 'center',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    in
                  </Link>
                  
                  <Link href="https://t.me/tareev_site" style={{ 
                    textDecoration: 'none',
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#0088CC',
                    borderRadius: '4px',
                    textAlign: 'center',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    tg
                  </Link>
                  
                  <Link href="https://wa.me/79112795209" style={{ 
                    textDecoration: 'none',
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#25D366',
                    borderRadius: '4px',
                    textAlign: 'center',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    wa
                  </Link>
                  
                  <Link href="https://instagram.com/tareev_studio" style={{ 
                    textDecoration: 'none',
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#E4405F',
                    borderRadius: '4px',
                    textAlign: 'center',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    ig
                  </Link>
                  
                  <Link href="https://facebook.com/tareevstudio" style={{ 
                    textDecoration: 'none',
                    display: 'inline-block',
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#1877F2',
                    borderRadius: '4px',
                    textAlign: 'center',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    fb
                  </Link>
                </div>
              </div>
              
              <Text className="text-gray-500 text-xs text-center mb-4" style={{
                fontSize: '12px',
                color: '#6B7280',
                textAlign: 'center',
              }}>
                2025 © Все права защищены
              </Text>
              
              <div style={{ textAlign: 'center' }}>
                <Link href="#" style={{
                  color: '#8B5CF6',
                  fontSize: '12px',
                  textDecoration: 'none',
                  marginRight: '16px',
                }}>
                  Отписаться от рассылки
                </Link>
                <Link href="#" style={{
                  color: '#8B5CF6',
                  fontSize: '12px',
                  textDecoration: 'none',
                }}>
                  Служба поддержки
                </Link>
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
