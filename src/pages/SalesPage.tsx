import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SalesPage = () => {
  const salesProducts = [
    { id: 1, name: 'Пальто шерстяное', brand: 'MAX MARA', price: 45900, oldPrice: 65000, discount: 30, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 2, name: 'Платье вечернее', brand: 'VALENTINO', price: 62300, oldPrice: 89000, discount: 30, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 3, name: 'Джинсы прямого кроя', brand: 'LEVI\'S', price: 9030, oldPrice: 12900, discount: 30, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 4, name: 'Блузка шелковая', brand: 'CHLOÉ', price: 19200, oldPrice: 32000, discount: 40, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 5, name: 'Юбка миди', brand: 'DIOR', price: 40200, oldPrice: 67000, discount: 40, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 6, name: 'Свитер кашемировый', brand: 'LORO PIANA', price: 46800, oldPrice: 78000, discount: 40, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-br from-secondary/20 to-background py-24">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl mb-6 font-light tracking-wider">
            SALE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Скидки до 40% на избранные модели
          </p>
          <p className="text-sm text-muted-foreground">
            Акция действует до 31 декабря 2024
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salesProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="group animate-fade-in"
            >
              <Card className="overflow-hidden border-0 bg-background hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                    <Badge 
                      className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground"
                    >
                      -{product.discount}%
                    </Badge>
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
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-medium">
                        {product.price.toLocaleString('ru-RU')} ₽
                      </p>
                      <p className="text-sm text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SalesPage;
