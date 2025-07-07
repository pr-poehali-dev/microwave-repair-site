import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Шапка */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={24} className="text-primary" />
              <span className="text-xl font-inter font-semibold text-secondary">
                Владимир Карлов
              </span>
            </div>
            <a
              href="tel:89278917677"
              className="text-primary font-inter font-medium hover:text-secondary transition-colors"
            >
              89278917677
            </a>
          </div>
        </div>
      </header>

      {/* Герой секция */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-inter font-bold text-secondary mb-6">
            Ремонт микроволновок в Тольятти
          </h1>
          <p className="text-xl font-open-sans text-gray-600 mb-8 max-w-2xl mx-auto">
            Быстрый и качественный ремонт с выездом на дом. Устраняем
            неисправности в день обращения с гарантией 1 год.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-inter"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать мастера
            </Button>
            <div className="flex items-center space-x-2 text-gray-600">
              <Icon name="MapPin" size={16} />
              <span className="font-open-sans">г. Тольятти</span>
            </div>
          </div>
        </div>
      </section>

      {/* Изображение */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/img/cdf20fb8-9bbd-48ac-9d76-f89ce4920284.jpg"
            alt="Ремонт микроволновок"
            className="mx-auto rounded-lg shadow-lg max-w-md w-full"
          />
        </div>
      </section>

      {/* Услуги и цены */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-inter font-bold text-center text-secondary mb-12">
            Услуги и цены
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Search"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <CardTitle className="font-inter text-lg">
                  Диагностика и мелкий ремонт
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Неисправность дверцы или панели управления
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-inter font-bold text-primary mb-2">
                  1000₽
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Settings"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <CardTitle className="font-inter text-lg">
                  Средний ремонт
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Проблемы с магнетроном или вентилятором
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-inter font-bold text-primary mb-2">
                  2000₽
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Cog"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <CardTitle className="font-inter text-lg">
                  Сложный ремонт
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Комплексная неисправность СВЧ
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-inter font-bold text-primary mb-2">
                  3000₽
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* О мастере */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-inter font-bold text-secondary mb-8">
              О мастере
            </h2>
            <p className="text-lg font-open-sans text-gray-600 mb-8">
              Владимир Карлов — опытный мастер по ремонту микроволновых печей в
              Тольятти. Специализируюсь на быстром и качественном ремонте с
              выездом на дом.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Icon
                  name="Clock"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="font-inter font-semibold text-secondary mb-2">
                  Быстро
                </h3>
                <p className="font-open-sans text-gray-600">
                  Ремонт в день обращения
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Shield"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="font-inter font-semibold text-secondary mb-2">
                  Надежно
                </h3>
                <p className="font-open-sans text-gray-600">Гарантия 1 год</p>
              </div>
              <div className="text-center">
                <Icon
                  name="Home"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <h3 className="font-inter font-semibold text-secondary mb-2">
                  Удобно
                </h3>
                <p className="font-open-sans text-gray-600">Выезд на дом</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-inter font-bold text-white mb-6">
            Нужен ремонт микроволновки?
          </h2>
          <p className="text-lg font-open-sans text-white/90 mb-8">
            Звоните прямо сейчас! Приеду, диагностирую и отремонтирую в течение
            дня.
          </p>
          <a
            href="tel:89278917677"
            className="inline-flex items-center bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-inter font-semibold text-lg transition-colors"
          >
            <Icon name="Phone" size={20} className="mr-2" />8 (927) 891-76-77
          </a>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Wrench" size={24} />
            <span className="text-xl font-inter font-semibold">
              Владимир Карлов
            </span>
          </div>
          <p className="font-open-sans text-gray-300 mb-2">
            Ремонт микроволновок в Тольятти
          </p>
          <p className="font-open-sans text-gray-300">
            Быстро • Надежно • Гарантия 1 год
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
