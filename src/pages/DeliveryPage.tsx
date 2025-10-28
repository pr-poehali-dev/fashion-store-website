import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const DeliveryPage = () => {
  const deliveryOptions = [
    {
      icon: 'Truck',
      title: 'Курьерская доставка',
      description: 'По Москве и МО',
      time: '1-2 рабочих дня',
      price: '500 ₽ (бесплатно от 5000 ₽)',
    },
    {
      icon: 'Package',
      title: 'Пункт выдачи',
      description: 'Более 1000 пунктов',
      time: '2-3 рабочих дня',
      price: '300 ₽ (бесплатно от 5000 ₽)',
    },
    {
      icon: 'MapPin',
      title: 'Почта России',
      description: 'По всей России',
      time: '5-14 рабочих дней',
      price: 'От 400 ₽',
    },
    {
      icon: 'Globe',
      title: 'Международная доставка',
      description: 'По всему миру',
      time: '10-21 рабочий день',
      price: 'Рассчитывается индивидуально',
    },
  ];

  const returnSteps = [
    {
      number: '01',
      title: 'Свяжитесь с нами',
      description: 'Позвоните или напишите на email в течение 30 дней с момента получения заказа',
    },
    {
      number: '02',
      title: 'Упакуйте товар',
      description: 'Товар должен быть в оригинальной упаковке, с бирками и не иметь следов носки',
    },
    {
      number: '03',
      title: 'Отправьте посылку',
      description: 'Мы предоставим адрес и инструкции по возврату. Стоимость доставки компенсируется',
    },
    {
      number: '04',
      title: 'Получите возврат',
      description: 'После получения и проверки товара средства вернутся на вашу карту в течение 5-10 дней',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-1">
        <h1 className="text-4xl md:text-5xl mb-12 font-light tracking-wider text-center animate-fade-in">
          ДОСТАВКА И ВОЗВРАТ
        </h1>

        <section className="mb-24">
          <h2 className="text-3xl mb-12 font-light tracking-wide text-center">
            Способы доставки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryOptions.map((option, index) => (
              <Card key={index} className="border-0 bg-muted animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-background">
                    <Icon name={option.icon as any} size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-xl mb-2 font-normal tracking-wide">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <Separator className="my-4" />
                  <p className="text-sm mb-2">
                    <span className="font-medium">Срок:</span> {option.time}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Стоимость:</span> {option.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 font-light tracking-wide text-center">
            Условия доставки
          </h2>
          <Card className="border-0 bg-muted animate-fade-in">
            <CardContent className="p-8 space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-foreground font-medium mb-2">Бесплатная доставка</h3>
                <p>Действует при заказе от 5000 ₽ по Москве, МО и в пункты выдачи по России.</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-foreground font-medium mb-2">Отслеживание заказа</h3>
                <p>После отправки вы получите трек-номер на email для отслеживания посылки.</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-foreground font-medium mb-2">Примерка при получении</h3>
                <p>Вы можете примерить товар при курьере. В случае несоответствия размера возможен отказ от товара.</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-foreground font-medium mb-2">Оплата при получении</h3>
                <p>Доступна оплата наличными или картой курьеру при доставке.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl mb-12 font-light tracking-wide text-center">
            Возврат и обмен
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-muted text-3xl font-light text-secondary">
                  {step.number}
                </div>
                <h3 className="text-xl mb-3 font-normal tracking-wide">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl mb-8 font-light tracking-wide text-center">
            Важная информация
          </h2>
          <Card className="border-0 bg-muted animate-fade-in">
            <CardContent className="p-8 space-y-4 text-muted-foreground">
              <ul className="space-y-3 list-disc list-inside">
                <li>Возврат возможен в течение 30 дней с момента получения заказа</li>
                <li>Товар должен быть в оригинальной упаковке с бирками и этикетками</li>
                <li>Возврат нижнего белья, купальников и товаров личной гигиены не производится</li>
                <li>Обмен товара возможен на аналогичный другого размера или цвета при наличии</li>
                <li>Возврат денежных средств осуществляется на карту в течение 5-10 рабочих дней</li>
                <li>При обмене доставка нового товара — бесплатно</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DeliveryPage;
