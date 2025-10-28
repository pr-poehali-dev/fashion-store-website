import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const CatalogPage = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const products = [
    { id: 1, name: 'Пальто шерстяное', brand: 'MAX MARA', price: 45900, colors: ['#000', '#e5d3c1'], image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 2, name: 'Платье вечернее', brand: 'VALENTINO', price: 89000, colors: ['#1a1612', '#8b7b6b'], image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 3, name: 'Джинсы прямого кроя', brand: 'LEVI\'S', price: 12900, colors: ['#2c4a78', '#000'], image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 4, name: 'Блузка шелковая', brand: 'CHLOÉ', price: 32000, colors: ['#fff', '#e5d3c1'], image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 5, name: 'Юбка миди', brand: 'DIOR', price: 67000, colors: ['#000', '#8b7b6b'], image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 6, name: 'Свитер кашемировый', brand: 'LORO PIANA', price: 78000, colors: ['#e5d3c1', '#8b7b6b', '#fff'], image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 7, name: 'Брюки классические', brand: 'ARMANI', price: 34000, colors: ['#000', '#1a1612'], image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
    { id: 8, name: 'Пиджак с подкладкой', brand: 'HUGO BOSS', price: 56000, colors: ['#1a1612', '#8b7b6b'], image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg' },
  ];

  const categoryTitle = category ? 
    { 'women': 'Женская одежда', 'men': 'Мужская одежда', 'shoes': 'Обувь', 'accessories': 'Аксессуары' }[category] || 'Каталог'
    : 'Весь каталог';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl md:text-5xl mb-12 font-light tracking-wider">
          {categoryTitle}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4 tracking-wide">КАТЕГОРИЯ</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="women" />
                  <label htmlFor="women" className="text-sm cursor-pointer">Женское</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="men" />
                  <label htmlFor="men" className="text-sm cursor-pointer">Мужское</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="shoes" />
                  <label htmlFor="shoes" className="text-sm cursor-pointer">Обувь</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="accessories" />
                  <label htmlFor="accessories" className="text-sm cursor-pointer">Аксессуары</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 tracking-wide">РАЗМЕР</h3>
              <div className="space-y-3">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox id={size} />
                    <label htmlFor={size} className="text-sm cursor-pointer">{size}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 tracking-wide">ЦЕНА</h3>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100000}
                step={1000}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{priceRange[0].toLocaleString('ru-RU')} ₽</span>
                <span>{priceRange[1].toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>

            <Button className="w-full tracking-wide">
              ПРИМЕНИТЬ
            </Button>
          </aside>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">
                Найдено {products.length} товаров
              </p>
              <div className="flex items-center gap-4">
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="new">По новизне</SelectItem>
                    <SelectItem value="price-asc">Цена: низкая → высокая</SelectItem>
                    <SelectItem value="price-desc">Цена: высокая → низкая</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                  >
                    <Icon name="Grid3x3" size={18} />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                  >
                    <Icon name="List" size={18} />
                  </Button>
                </div>
              </div>
            </div>

            <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {products.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className="group animate-fade-in"
                >
                  <Card className="overflow-hidden border-0 bg-background hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className={`${viewMode === 'grid' ? 'aspect-[3/4]' : 'aspect-[16/9]'} relative overflow-hidden bg-muted`}>
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
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-light">
                            {product.price.toLocaleString('ru-RU')} ₽
                          </p>
                          <div className="flex gap-1">
                            {product.colors.map((color, idx) => (
                              <div
                                key={idx}
                                className="w-5 h-5 rounded-full border border-border"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-12">
              <Button variant="outline" size="icon">
                <Icon name="ChevronLeft" size={18} />
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button 
                  key={page}
                  variant={page === 1 ? 'default' : 'outline'}
                  size="icon"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="icon">
                <Icon name="ChevronRight" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CatalogPage;
