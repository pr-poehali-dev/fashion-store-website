import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Пальто шерстяное', 
      brand: 'MAX MARA', 
      price: 45900, 
      quantity: 1, 
      size: 'M', 
      color: 'Чёрный',
      image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg'
    },
    { 
      id: 2, 
      name: 'Платье вечернее', 
      brand: 'VALENTINO', 
      price: 89000, 
      quantity: 1, 
      size: 'S', 
      color: 'Бежевый',
      image: 'https://cdn.poehali.dev/files/6c7c9583-ce9e-49cb-b26c-3ee6cf368f55.jpeg'
    },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 5000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl md:text-5xl mb-12 font-light tracking-wider">ВАША КОРЗИНА</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-24 animate-fade-in">
            <Icon name="ShoppingBag" size={64} className="mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-2xl mb-4 font-light">Корзина пуста</h2>
            <p className="text-muted-foreground mb-8">Добавьте товары из каталога</p>
            <Button size="lg" asChild>
              <Link to="/catalog">ПЕРЕЙТИ В КАТАЛОГ</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-32 h-40 bg-muted overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <p className="text-xs tracking-widest text-muted-foreground mb-1">
                              {item.brand}
                            </p>
                            <h3 className="text-lg font-normal mb-2">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Размер: {item.size} | Цвет: {item.color}
                            </p>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeItem(item.id)}
                          >
                            <Icon name="Trash2" size={18} />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Icon name="Minus" size={14} />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Icon name="Plus" size={14} />
                            </Button>
                          </div>

                          <p className="text-xl font-light">
                            {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 animate-fade-in">
                <CardContent className="p-6">
                  <h2 className="text-2xl mb-6 font-light tracking-wide">ИТОГО</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Подытог</span>
                      <span>{subtotal.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Доставка</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-600">Бесплатно</span>
                        ) : (
                          `${shipping} ₽`
                        )}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-medium">
                      <span>Всего</span>
                      <span>{total.toLocaleString('ru-RU')} ₽</span>
                    </div>
                  </div>

                  {subtotal < 5000 && (
                    <p className="text-xs text-muted-foreground mb-6 text-center">
                      До бесплатной доставки осталось {(5000 - subtotal).toLocaleString('ru-RU')} ₽
                    </p>
                  )}

                  <div className="mb-6">
                    <label className="text-sm font-medium mb-2 block">ПРОМОКОД</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Введите код"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline">
                        ПРИМЕНИТЬ
                      </Button>
                    </div>
                  </div>

                  <Button size="lg" className="w-full mb-4 tracking-wide">
                    ПЕРЕЙТИ К ОФОРМЛЕНИЮ
                  </Button>

                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link to="/catalog">ПРОДОЛЖИТЬ ПОКУПКИ</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
