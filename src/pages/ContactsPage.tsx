import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const ContactsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contacts = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Тверская, д. 10, оф. 5',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@gabriella.ru',
    },
    {
      icon: 'Clock',
      title: 'Часы работы',
      content: 'Пн-Вс: 9:00 - 21:00',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl md:text-5xl mb-12 font-light tracking-wider text-center animate-fade-in">
          КОНТАКТЫ
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl mb-6 font-light tracking-wide">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Мы всегда рады ответить на ваши вопросы и помочь с выбором. 
                Заполните форму, и мы свяжемся с вами в ближайшее время.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <Card key={index} className="border-0 bg-muted">
                  <CardContent className="p-6">
                    <Icon name={contact.icon as any} size={24} className="mb-4 text-secondary" />
                    <h3 className="font-medium mb-2 tracking-wide">{contact.title}</h3>
                    <p className="text-sm text-muted-foreground">{contact.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-wide">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon name="Instagram" size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon name="Facebook" size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Icon name="Twitter" size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <Card className="border-0 bg-muted animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    ИМЯ
                  </label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    СООБЩЕНИЕ
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ваше сообщение"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full tracking-wide">
                  ОТПРАВИТЬ СООБЩЕНИЕ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactsPage;
