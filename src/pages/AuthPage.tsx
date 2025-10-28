import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const AuthPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Вход выполнен',
      description: 'Добро пожаловать!',
    });
    navigate('/');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: 'Ошибка',
        description: 'Пароли не совпадают',
        variant: 'destructive',
      });
      return;
    }
    if (!registerData.agree) {
      toast({
        title: 'Ошибка',
        description: 'Необходимо согласиться с условиями',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Регистрация успешна',
      description: 'Добро пожаловать!',
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-1 flex items-center justify-center">
        <Card className="w-full max-w-md border-0 shadow-lg animate-fade-in">
          <CardContent className="p-8">
            <h1 className="text-3xl mb-8 font-light tracking-wider text-center">
              ЛИЧНЫЙ КАБИНЕТ
            </h1>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">ВХОД</TabsTrigger>
                <TabsTrigger value="register">РЕГИСТРАЦИЯ</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="login-email" className="text-sm font-medium mb-2 block">
                      EMAIL
                    </label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your@email.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="login-password" className="text-sm font-medium mb-2 block">
                      ПАРОЛЬ
                    </label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label htmlFor="remember" className="text-sm cursor-pointer">
                        Запомнить меня
                      </label>
                    </div>
                    <Button variant="link" className="text-sm p-0 h-auto">
                      Забыли пароль?
                    </Button>
                  </div>

                  <Button type="submit" size="lg" className="w-full tracking-wide">
                    ВОЙТИ
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium mb-2 block">
                        ИМЯ
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Иван"
                        value={registerData.firstName}
                        onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium mb-2 block">
                        ФАМИЛИЯ
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Иванов"
                        value={registerData.lastName}
                        onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="register-email" className="text-sm font-medium mb-2 block">
                      EMAIL
                    </label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="register-password" className="text-sm font-medium mb-2 block">
                      ПАРОЛЬ
                    </label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="confirm-password" className="text-sm font-medium mb-2 block">
                      ПОДТВЕРДИТЕ ПАРОЛЬ
                    </label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agree"
                      checked={registerData.agree}
                      onCheckedChange={(checked) =>
                        setRegisterData({ ...registerData, agree: checked as boolean })
                      }
                    />
                    <label htmlFor="agree" className="text-sm cursor-pointer leading-relaxed">
                      Я согласен с{' '}
                      <Button variant="link" className="text-sm p-0 h-auto">
                        условиями пользовательского соглашения
                      </Button>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full tracking-wide">
                    ЗАРЕГИСТРИРОВАТЬСЯ
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default AuthPage;
