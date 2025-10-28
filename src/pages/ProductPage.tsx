import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ProductPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const product = {
    id: 1,
    name: 'Пальто шерстяное классическое',
    brand: 'MAX MARA',
    price: 45900,
    colors: [
      { name: 'Чёрный', hex: '#000' },
      { name: 'Бежевый', hex: '#e5d3c1' },
      { name: 'Серый', hex: '#8b7b6b' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg',
      'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg',
      'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg',
    ],
    description: 'Элегантное пальто из 100% шерсти премиального качества. Классический крой, подходит для делового и повседневного образа.',
    material: 'Шерсть 100%',
    care: 'Химчистка',
    rating: 4.8,
    reviewsCount: 24,
  };

  const relatedProducts = [
    { id: 2, name: 'Платье вечернее', brand: 'VALENTINO', price: 89000, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 3, name: 'Джинсы прямого кроя', brand: 'LEVI\'S', price: 12900, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 4, name: 'Блузка шелковая', brand: 'CHLOÉ', price: 32000, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 5, name: 'Юбка миди', brand: 'DIOR', price: 67000, image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: 'Выберите размер',
        description: 'Пожалуйста, выберите размер перед добавлением в корзину',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Добавлено в корзину',
      description: `${product.name} размер ${selectedSize}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <div className="aspect-[3/4] mb-4 bg-muted overflow-hidden animate-fade-in">
              <img 
                src={product.images[currentImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`aspect-[3/4] bg-muted overflow-hidden ${currentImage === idx ? 'ring-2 ring-primary' : ''}`}
                >
                  <img src={image} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <p className="text-xs tracking-widest text-muted-foreground mb-2">{product.brand}</p>
            <h1 className="text-3xl md:text-4xl mb-4 font-light">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon 
                    key={i} 
                    name={i < Math.floor(product.rating) ? 'Star' : 'Star'} 
                    size={16}
                    className={i < Math.floor(product.rating) ? 'fill-current' : ''}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewsCount} отзывов)
              </span>
            </div>

            <p className="text-3xl mb-8 font-light">{product.price.toLocaleString('ru-RU')} ₽</p>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3 tracking-wide">ЦВЕТ</h3>
              <div className="flex gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`flex items-center gap-2 px-4 py-2 border rounded ${selectedColor === idx ? 'border-primary' : 'border-border'}`}
                  >
                    <div 
                      className="w-6 h-6 rounded-full border border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-sm">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium tracking-wide">РАЗМЕР</h3>
                <Button variant="link" className="text-xs p-0 h-auto">
                  Таблица размеров
                </Button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button 
                size="lg" 
                className="flex-1 tracking-wide" 
                onClick={handleAddToCart}
              >
                ДОБАВИТЬ В КОРЗИНУ
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Heart" size={20} />
              </Button>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Описание</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm"><span className="font-medium">Материал:</span> {product.material}</p>
                    <p className="text-sm"><span className="font-medium">Уход:</span> {product.care}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sizes">
                <AccordionTrigger>Размерная сетка</AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 text-left">Размер</th>
                          <th className="py-2 text-left">Обхват груди (см)</th>
                          <th className="py-2 text-left">Обхват талии (см)</th>
                          <th className="py-2 text-left">Обхват бедер (см)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b"><td className="py-2">XS</td><td>82-85</td><td>63-65</td><td>88-91</td></tr>
                        <tr className="border-b"><td className="py-2">S</td><td>86-89</td><td>66-69</td><td>92-95</td></tr>
                        <tr className="border-b"><td className="py-2">M</td><td>90-93</td><td>70-73</td><td>96-99</td></tr>
                        <tr className="border-b"><td className="py-2">L</td><td>94-97</td><td>74-77</td><td>100-103</td></tr>
                        <tr className="border-b"><td className="py-2">XL</td><td>98-102</td><td>78-82</td><td>104-108</td></tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="delivery">
                <AccordionTrigger>Доставка и возврат</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Доставка</h4>
                      <p className="text-sm">Бесплатная доставка при заказе от 5000 ₽. Доставка по Москве 1-2 дня, по России 3-7 дней.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Возврат</h4>
                      <p className="text-sm">Возврат в течение 30 дней с момента получения заказа. Товар должен быть в оригинальной упаковке.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <section>
          <h2 className="text-3xl mb-12 font-light tracking-wider">ПОХОЖИЕ ТОВАРЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
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
                      <p className="text-xs tracking-widest text-muted-foreground mb-2">{product.brand}</p>
                      <h3 className="text-base mb-3 font-normal">{product.name}</h3>
                      <p className="text-lg font-light">{product.price.toLocaleString('ru-RU')} ₽</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
