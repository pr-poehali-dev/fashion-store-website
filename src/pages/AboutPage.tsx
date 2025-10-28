import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      title: 'Качество',
      description: 'Мы тщательно отбираем каждый товар, работая только с проверенными брендами.',
    },
    {
      title: 'Стиль',
      description: 'Наша команда стилистов следит за последними трендами мировой моды.',
    },
    {
      title: 'Экологичность',
      description: 'Мы поддерживаем устойчивое производство и используем натуральные материалы.',
    },
    {
      title: 'Сервис',
      description: 'Индивидуальный подход к каждому клиенту и забота о вашем комфорте.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg)` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl mb-6 font-light tracking-wider">О НАС</h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            История бренда GABRIELLA
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto mb-24 animate-fade-in">
          <h2 className="text-3xl md:text-4xl mb-8 font-light tracking-wide text-center">
            Наша история
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              GABRIELLA — это не просто магазин одежды. Это философия стиля, качества и уверенности. 
              Мы основали наш бренд в 2015 году с целью сделать премиальную моду доступной для каждого, 
              кто ценит качество и элегантность.
            </p>
            <p>
              За годы работы мы собрали коллекцию лучших брендов мировой моды — от классических до авангардных. 
              Каждая вещь в нашем каталоге проходит строгий отбор нашей командой стилистов и экспертов по качеству.
            </p>
            <p>
              Мы верим, что одежда должна не только красиво выглядеть, но и быть удобной, экологичной 
              и долговечной. Поэтому мы работаем только с брендами, которые разделяют наши ценности 
              устойчивого развития и этичного производства.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl mb-12 font-light tracking-wide text-center">
            Наши ценности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-muted animate-fade-in">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl mb-4 font-light tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl mb-8 font-light tracking-wide">
            Присоединяйтесь к нам
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Станьте частью сообщества GABRIELLA. Следите за новостями моды, 
            получайте эксклюзивные предложения и вдохновляйтесь образами наших стилистов.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
