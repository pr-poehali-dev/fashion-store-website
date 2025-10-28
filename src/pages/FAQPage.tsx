import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const faqs = [
    {
      question: 'Как оформить заказ?',
      answer: 'Выберите понравившиеся товары, добавьте их в корзину, укажите размер и цвет. Затем перейдите в корзину и нажмите "Оформить заказ". Заполните контактные данные и адрес доставки.',
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату банковскими картами Visa, Mastercard, МИР, а также электронными кошельками и банковским переводом. Оплата проходит через защищенное соединение.',
    },
    {
      question: 'Сколько стоит доставка?',
      answer: 'Доставка по Москве и МО составляет 500 ₽. При заказе от 5000 ₽ доставка бесплатная. По России доставка рассчитывается индивидуально в зависимости от региона.',
    },
    {
      question: 'Как долго ждать доставку?',
      answer: 'По Москве доставка занимает 1-2 рабочих дня. По России — от 3 до 7 рабочих дней в зависимости от региона. Международная доставка — 10-14 дней.',
    },
    {
      question: 'Можно ли вернуть товар?',
      answer: 'Да, вы можете вернуть или обменять товар в течение 30 дней с момента получения. Товар должен быть в оригинальной упаковке, с бирками и не иметь следов носки.',
    },
    {
      question: 'Как узнать свой размер?',
      answer: 'На странице каждого товара есть таблица размеров с точными замерами. Также вы можете обратиться к нашим консультантам за помощью в подборе размера.',
    },
    {
      question: 'Есть ли гарантия на товар?',
      answer: 'Все товары сертифицированы и имеют гарантию качества от производителя. В случае обнаружения брака мы произведем обмен или возврат средств.',
    },
    {
      question: 'Как отследить мой заказ?',
      answer: 'После отправки заказа вы получите трек-номер на email. С его помощью можно отследить местоположение посылки на сайте транспортной компании.',
    },
    {
      question: 'Есть ли программа лояльности?',
      answer: 'Да, мы начисляем бонусные баллы за каждую покупку. 1 балл = 1 рубль. Баллы можно использовать для оплаты до 30% стоимости следующего заказа.',
    },
    {
      question: 'Как связаться с поддержкой?',
      answer: 'Вы можете написать нам на email info@gabriella.ru или позвонить по телефону +7 (495) 123-45-67. Также доступен онлайн-чат на сайте в рабочие часы с 9:00 до 21:00.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4 font-light tracking-wider text-center animate-fade-in">
            ЧАСТЫЕ ВОПРОСЫ
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg animate-fade-in">
            Ответы на самые популярные вопросы
          </p>

          <Accordion type="single" collapsible className="w-full animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center bg-muted p-12 rounded-lg animate-fade-in">
            <h2 className="text-2xl mb-4 font-light tracking-wide">
              Не нашли ответ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Свяжитесь с нами, и мы с радостью поможем
            </p>
            <Button size="lg" asChild>
              <Link to="/contacts">СВЯЗАТЬСЯ С НАМИ</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQPage;
