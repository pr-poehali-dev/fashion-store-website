import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted mt-24 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl mb-6 font-light tracking-wider">GABRIELLA</h3>
            <p className="text-sm text-muted-foreground">
              Брендовая одежда, в которой вы уверены
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">НАВИГАЦИЯ</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Каталог
              </Link>
              <Link to="/sales" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Акции
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </Link>
              <Link to="/contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">ПОКУПАТЕЛЯМ</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/delivery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Доставка и возврат
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Частые вопросы
              </Link>
              <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Личный кабинет
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wide">РАССЫЛКА</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Подпишитесь на новости и специальные предложения
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email" className="flex-1" />
              <Button size="icon" variant="default">
                <Icon name="Send" size={18} />
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Icon name="Instagram" size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Icon name="Facebook" size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Icon name="Twitter" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 GABRIELLA. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
