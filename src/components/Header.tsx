import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [cartCount] = useState(0);

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-light tracking-wider">
            GABRIELLA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm tracking-wide hover:text-secondary transition-colors">
              ГЛАВНАЯ
            </Link>
            <Link to="/catalog" className="text-sm tracking-wide hover:text-secondary transition-colors">
              КАТАЛОГ
            </Link>
            <Link to="/sales" className="text-sm tracking-wide hover:text-secondary transition-colors">
              АКЦИИ
            </Link>
            <Link to="/about" className="text-sm tracking-wide hover:text-secondary transition-colors">
              О НАС
            </Link>
            <Link to="/contacts" className="text-sm tracking-wide hover:text-secondary transition-colors">
              КОНТАКТЫ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hidden md:flex">
              <Link to="/catalog">
                <Icon name="Search" size={20} />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/auth">
                <Icon name="User" size={20} />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart">
                <Icon name="ShoppingBag" size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-6 mt-8">
                  <Link to="/" className="text-sm tracking-wide hover:text-secondary transition-colors">
                    ГЛАВНАЯ
                  </Link>
                  <Link to="/catalog" className="text-sm tracking-wide hover:text-secondary transition-colors">
                    КАТАЛОГ
                  </Link>
                  <Link to="/sales" className="text-sm tracking-wide hover:text-secondary transition-colors">
                    АКЦИИ
                  </Link>
                  <Link to="/about" className="text-sm tracking-wide hover:text-secondary transition-colors">
                    О НАС
                  </Link>
                  <Link to="/contacts" className="text-sm tracking-wide hover:text-secondary transition-colors">
                    КОНТАКТЫ
                  </Link>
                  <Link to="/faq" className="text-sm tracking-wide hover:text-secondary transition-colors">
                    FAQ
                  </Link>
                  <Link to="/delivery" className="text-sm tracking-wide hover:text-secondary transition-colors">
                    ДОСТАВКА
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
