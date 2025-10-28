import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const HomePage = () => {
  const categories = [
    { name: 'ЖЕНСКОЕ', slug: 'women', image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { name: 'МУЖСКОЕ', slug: 'men', image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { name: 'ОБУВЬ', slug: 'shoes', image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { name: 'АКСЕССУАРЫ', slug: 'accessories', image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
  ];

  const popularProducts = [
    { id: 1, name: 'Пальто шерстяное', brand: 'MAX MARA', price: 45900, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 2, name: 'Платье вечернее', brand: 'VALENTINO', price: 89000, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 3, name: 'Джинсы прямого кроя', brand: 'LEVI\'S', price: 12900, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 4, name: 'Блузка шелковая', brand: 'CHLOÉ', price: 32000, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
  ];

  const advantages = [
    { icon: 'Truck', title: 'Бесплатная доставка', text: 'При заказе от 5000 ₽' },
    { icon: 'RefreshCw', title: 'Возврат 30 дней', text: 'Гарантия возврата средств' },
    { icon: 'Leaf', title: 'Экологично', text: 'Натуральные материалы' },
    { icon: 'Gift', title: 'Скидки', text: 'Бонусы постоянным клиентам' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg)` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl mb-6 font-light tracking-wider">
            НОВАЯ КОЛЛЕКЦИЯ<br />FALL-WINTER 22/23
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Откройте для себя стиль и комфорт в каждой детали
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/90 hover:bg-white text-foreground border-0 px-12 py-6 text-base tracking-wider"
            asChild
          >
            <Link to="/catalog">СМОТРЕТЬ КОЛЛЕКЦИЮ</Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-light tracking-wider">
          КАТЕГОРИИ ТОВАРОВ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.slug} 
              to={`/catalog/${category.slug}`}
              className="group animate-scale-in"
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                      <h3 className="text-white text-2xl font-light tracking-widest">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center mb-4 font-light tracking-wider">
            ПОПУЛЯРНОЕ В ЭТОМ СЕЗОНЕ
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Выбор наших стилистов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="group animate-fade-in"
              >
                <Card className="overflow-hidden border-0 bg-background hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs tracking-widest text-muted-foreground mb-2">
                        {product.brand}
                      </p>
                      <h3 className="text-base mb-3 font-normal">
                        {product.name}
                      </h3>
                      <p className="text-lg font-light">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-light tracking-wider">
          ПОЧЕМУ ВЫБИРАЮТ НАС
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-muted">
                <Icon name={advantage.icon as any} size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl mb-3 font-normal tracking-wide">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground">
                {advantage.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
