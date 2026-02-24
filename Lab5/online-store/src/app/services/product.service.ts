import {Injectable, signal} from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal<Product[]>([
    {
      "id": 1,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Apple iPhone 17 Pro 256Gb оранжевый",
      "description": "Флагманский iPhone с мощной начинкой, ярким OLED‑дисплеем и камерой 48 Мп. Подходит для быстрого работы, фото и видео каждый день.",
      "price": 849327,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000"
    },
    {
      "id": 2,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный",
      "description": "Доступный смартфон для повседневных задач с ёмким аккумулятором и основной камерой 50 МП. Подойдёт для учебы, соцсетей и базовых игр.",
      "price": 59997,
      "rating": 4.5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h6b/h15/84957845585950.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h94/heb/84957845651486.jpg?format=gallery-medium",
      ],
      "link": "https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000"
    },
    {
      "id": 3,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Samsung Galaxy A16 8 ГБ/256 ГБ черный",
      "description": "Смартфон с большим Super AMOLED‑экраном 6.7″ и тройной камерой 50 Мп. Удобен для мультимедиа и многозадачности.",
      "price": 151743,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/pc4/p24/10324882.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe0/p24/10324883.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pfc/p24/10324884.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p18/p25/10324885.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p34/p25/10324886.png?format=gallery-medium",
      ],
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-chernyi-130609740/?c=750000000"
    },
    {
      "id": 4,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Samsung Galaxy S24 FE 5G 8 ГБ/256 ГБ черный",
      "description": "Производительный смартфон с поддержкой 5G, AMOLED‑экраном 120 Гц и продвинутыми камерами. Отличный выбор для активного использования и съемки.",
      "price": 500000,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p87/pc0/1610158.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p0f/pc3/1610160.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p80/pc3/1610164.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p9c/pc3/1610165.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000"
    },
    {
      "id": 5,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный",
      "description": "Флагман с камерой 200 МП, защитой IP68 и экраном 120 Гц. Подойдёт тем, кому нужна максимальная мощность и топовая съемка.",
      "price": 556144,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p60/p27/20120111.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000"
    },
    {
      "id": 6,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Samsung Galaxy A56 5G 8 ГБ/256 ГБ серебристый",
      "description": "Смартфон с 5G, экраном Super AMOLED 120 Гц и ёмкой батареей 5000 мА·ч. Хорош для видео, соцсетей и игр.",
      "price": 208882,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p40/pe8/30496109.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p40/pe8/30496109.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pc9/pea/30496111.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p01/peb/30496113.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p1d/peb/30496114.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p55/peb/30496116.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-serebristyi-136420120/?c=750000000"
    },
    {
      "id": 7,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Apple iPhone 16 256Gb черный",
      "description": "iPhone с удобным форм‑фактором, мощным процессором и качественными камерами для фото и видео. Отлично подходит для повседневного использования и съемки в 4K.",
      "price": 579800,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/87295472795678.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/87295472795678.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h45/he1/87295472828446.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h80/hcb/87295472861214.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h1e/hb6/87295472893982.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/apple-iphone-16-256gb-chernyi-123728177/?c=750000000"
    },
    {
      "id": 8,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Google Pixel 9a 8 ГБ/256 ГБ черный",
      "description": "Компактный Pixel с OLED‑экраном и процессором Tensor для быстрой и стабильной работы. Камера с умной обработкой помогает получать отличные снимки.",
      "price": 309900,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p7c/p9e/37518454.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p7c/p9e/37518454.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p98/p9e/37518455.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p91/pa1/37518461.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p08/p9f/37518459.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/google-pixel-9a-8-gb-256-gb-chernyi-138348586/?c=750000000"
    },
    {
      "id": 9,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Google Pixel 10 12 ГБ/256 ГБ черный",
      "description": "Большой Pixel с QHD+ OLED‑экраном 120 Гц и мощным Tensor для высокой производительности. Подойдёт для требовательных задач и качественной съемки.",
      "price": 463296,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p95/p75/62210619.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p95/p75/62210619.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p1b/pb7/66006432.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe2/pb6/66006434.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pc6/pb6/66006435.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/paa/pb6/66006436.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/google-pixel-10-12-gb-256-gb-chernyi-145063211/?c=750000000"
    },
    {
      "id": 10,
      "categoryId": 1,
      "likes": 0,
      "name": "Смартфон Google Pixel 7 Pro 12 ГБ/128 ГБ черный",
      "description": "Pixel 7 Pro с большим OLED‑экраном и мощным Tensor для плавной работы. Камеры с оптической стабилизацией хорошо снимают в разных условиях.",
      "price": 289000,
      "rating": 4.8,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h85/hc5/63603038814238.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hb1/hd1/63603039338526.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hfc/h8d/63603039862814.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141/?c=750000000"
    },
    {
      "id": 11,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Huawei Watch GT 5 Pro 46 мм черный-черный",
      "description": "Прочные смарт‑часы с расширенным мониторингом здоровья и сна. Подойдут для спорта и ежедневного контроля активности.",
      "price": 95000,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h52/h7d/87248467787806.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h52/h7d/87248467787806.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h87/h56/87248467853342.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h67/he5/87248467918878.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h30/h3b/87248467984414.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h53/h3d/87248468049950.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/huawei-watch-gt-5-pro-46-mm-chernyi-chernyi-124097507/?c=750000000"
    },
    {
      "id": 12,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 мм черный-черный",
      "description": "Умные часы на Wear OS с измерением ЭКГ и продвинутым фитнес‑трекером. Удобны для тренировок, сна и уведомлений со смартфона.",
      "price": 139990,
      "rating": 4.8,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hc9/h47/64342261268510.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/hc9/h47/64342261268510.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he7/h54/64342263889950.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hc1/h40/64342267265054.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hce/hf5/64342269657118.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000"
    },
    {
      "id": 13,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Garmin Forerunner 965 черный",
      "description": "Спортивные часы с GPS и расширенными метриками тренировок, пульса и сна. Отличный выбор для бега и других видов спорта.",
      "price": 374990,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hdc/hce/86182020055070.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/hdc/hce/86182020055070.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h65/hd6/86182020087838.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h66/h6d/86182020120606.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hc1/h55/86182020153374.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/garmin-forerunner-965-chernyi-109351643/?c=750000000"
    },
    {
      "id": 14,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Garmin Forerunner 165 черный-серый",
      "description": "Лёгкие беговые смарт‑часы с GPS, планами тренировок и метриками восстановления. Удобны для ежедневных пробежек и контроля прогресса.",
      "price": 174990,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h72/h23/85318600196126.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h72/h23/85318600196126.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd2/ha1/85318600261662.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hb8/hc0/85318600327198.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h75/hcc/85318600392734.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h40/hab/85318600458270.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/garmin-forerunner-165-chernyi-seryi-117095009/?c=750000000"
    },
    {
      "id": 15,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Samsung Galaxy Watch7 44 мм графитовый-зеленый",
      "description": "Современные часы с улучшенными датчиками здоровья, GPS и аналитикой тренировок. Подойдут для спорта, сна и ежедневных уведомлений.",
      "price": 121803,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h03/he3/86610193350686.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h03/he3/86610193350686.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h22/h7a/86610193416222.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h4c/h51/86610193481758.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h16/h30/86610193547294.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-watch7-44-mm-grafitovyi-zelenyi-121760416/?c=750000000"
    },
    {
      "id": 16,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Samsung Galaxy Watch Ultra 47 мм серебристый-черный",
      "description": "Выносливые часы для активных нагрузок с длительной автономностью и продвинутыми функциями безопасности. Подойдут для походов, спорта и экстремальных условий.",
      "price": 204311,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h03/h68/86681927876638.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h03/h68/86681927876638.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h23/hc4/86681927942174.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h4b/h93/86681928007710.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h18/h96/86681928073246.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-watch-ultra-47-mm-serebristyi-chernyi-122020632/?c=750000000"
    },
    {
      "id": 17,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Xiaomi Redmi Watch 3 черный",
      "description": "Практичные смарт‑часы с большим AMOLED‑экраном и трекингом сна, пульса и активности. Удобны для повседневного использования и спорта.",
      "price": 71000,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hab/hb5/80176157327390.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/hab/hb5/80176157327390.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h09/h13/80176157851678.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/80176158375966.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h81/hdc/80176158900254.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/xiaomi-redmi-watch-3-chernyi-109930448/?c=750000000"
    },
    {
      "id": 18,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Apple Watch Series 6 44 мм серый",
      "description": "Apple Watch с удобным Retina‑дисплеем и водозащитой до 50 м. Подойдут для уведомлений, спорта и повседневных задач.",
      "price": 270000,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hca/hb4/64040267677726.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/hca/hb4/64040267677726.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hbb/h33/64040270823454.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h18/hf7/64040273707038.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h42/h9d/64040276787230.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/apple-watch-series-6-44-mm-seryi-100568498/?c=750000000"
    },
    {
      "id": 19,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Apple Watch SE 40 мм черный",
      "description": "Универсальные Apple Watch для тренировок, уведомлений и функций безопасности. Водозащита позволяет плавать и заниматься спортом без лишних переживаний.",
      "price": 133530,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h1e/h2d/63868235120670.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd9/h47/63868238200862.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h52/h62/63868241969182.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h7e/h9f/63868244885534.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000"
    },
    {
      "id": 20,
      "categoryId": 2,
      "likes": 0,
      "name": "Смарт-часы Google Pixel Watch 4 41 мм золотистый-зеленый",
      "description": "Стильные Pixel Watch для уведомлений и мониторинга активности. Удобное сенсорное управление и функции здоровья на каждый день.",
      "price": 269000,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/pec/p5e/78358310.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/pec/p5e/78358310.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p24/p5f/78358312.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p5d/p5f/78358314.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p79/p5f/78358315.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p95/p5f/78358316.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/google-pixel-watch-4-41-mm-zolotistyi-zelenyi-149676813/?c=750000000"
    },
    {
      "id": 21,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники Apple AirPods Pro белый",
      "description": "AirPods Pro с активным шумоподавлением и комфортной посадкой благодаря сменным амбушюрам. Удобны для музыки, звонков и работы в шумных местах.",
      "price": 111909,
      "rating": 4.8,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he9/h26/63785535209502.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h13/hc1/63785535733790.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h71/h5d/63785536061470.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3d/hdc/63785536716830.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-belyi-4804718/?c=750000000"
    },
    {
      "id": 22,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники Xiaomi Redmi Buds 3 Lite черный",
      "description": "Лёгкие TWS‑наушники с Bluetooth 5.2 и защитой от пыли и брызг. Подойдут для тренировок и повседневного прослушивания.",
      "price": 7500,
      "rating": 4.3,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h22/h86/64061767352350.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h22/h86/64061767352350.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he5/h87/64061770137630.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h60/h4f/64061774135326.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h17/h79/64061777018910.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-3-lite-chernyi-103306269/?c=750000000"
    },
    {
      "id": 23,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники Realme T110 черный",
      "description": "TWS‑наушники с защитой IPX5 и стабильным Bluetooth‑подключением. Подойдут для музыки и звонков с хорошей автономностью от кейса.",
      "price": 19990,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p66/p25/60785894.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p66/p25/60785894.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p2d/p25/60785896.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pf5/p24/60785898.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p3e/p25/60785900.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p76/p25/60785902.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pae/p25/60785904.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-realme-t110-chernyi-118890838/?c=750000000"
    },
    {
      "id": 24,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники Samsung Galaxy Buds FE серый",
      "description": "Комфортные TWS‑наушники с активным шумоподавлением и качественной передачей голоса. Подойдут для музыки, общения и поездок.",
      "price": 64989,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/pa1/p7a/32685976.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/pa1/p7a/32685976.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pbd/p7a/32685977.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p99/p7d/32685982.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pee/p7d/32685985.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p0a/p7e/32685986.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-fe-seryi-114021918/?c=750000000"
    },
    {
      "id": 25,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники Samsung Galaxy Buds core черный",
      "description": "Компактные беспроводные наушники с активным шумоподавлением и удобными функциями поиска. Подойдут для повседневных звонков и музыки.",
      "price": 19310,
      "rating": 4.8,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p02/p7d/53123421.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe6/p7c/53123422.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pca/p7c/53123423.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pae/p7c/53123424.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-core-chernyi-142551258/?c=750000000"
    },
    {
      "id": 26,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники Xiaomi Redmi Buds 3 белый",
      "description": "Лёгкие TWS‑вкладыши с хорошей посадкой и стабильным Bluetooth 5.2. Подойдут для повседневного прослушивания и звонков.",
      "price": 12258,
      "rating": 4.4,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h1f/h55/64118458515486.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h1f/h55/64118458515486.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h56/h41/64118460579870.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3e/hb8/64118462578718.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd0/h90/64118464118814.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-3-belyi-102761647/?c=750000000"
    },
    {
      "id": 27,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники Huawei Freebuds SE 2 голубой",
      "description": "TWS‑наушники с защитой IP54 и шумоподавлением для микрофона. Хороший вариант для звонков и музыки на каждый день.",
      "price": 14536,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h44/h85/83684347641886.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h44/h85/83684347641886.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h06/h0f/83684348690462.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hb3/ha8/84135499038750.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hdf/h46/84135499399198.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/ha6/h8b/84135499431966.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-huawei-freebuds-se-2-goluboi-113250645/?c=750000000"
    },
    {
      "id": 28,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники Huawei FreeBuds 5i черный",
      "description": "TWS‑наушники с активным шумоподавлением и поддержкой качественного аудио. Подойдут для музыки и комфортных звонков в шумной среде.",
      "price": 38898,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h54/h4e/69489815912478.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h54/h4e/69489815912478.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h0c/h95/69489817223198.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h94/hcc/69489818271774.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h1d/h03/69489819320350.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-huawei-freebuds-5i-chernyi-109101790/?c=750000000"
    },
    {
      "id": 29,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники Xiaomi Redmi Buds 4 Active черный",
      "description": "Беспроводные наушники с простым подключением и автономностью до 28 часов с кейсом. Универсальный вариант для iPhone и Android.",
      "price": 30000,
      "rating": 4.5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h9d/h37/81829074599966.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h9d/h37/81829074599966.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf4/h98/87088733126686.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h73/h46/87088733192222.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h53/hd5/87088733257758.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-4-active-chernyi-111491755/?c=750000000"
    },
    {
      "id": 30,
      "categoryId": 3,
      "likes": 0,
      "name": "Наушники OnePlus Buds 3 черный",
      "description": "Наушники с качественным звуком и эффективным активным шумоподавлением. Поддерживают удобные режимы и длительную работу от кейса.",
      "price": 36618,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p9f/p1c/62217862.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p9f/p1c/62217862.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pba/p1c/62217863.PNG?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pd6/p1c/62217864.PNG?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/naushniki-oneplus-buds-3-chernyi-116927245/?c=750000000"
    },
    {
      "id": 31,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук Apple MacBook Air 13 2020 13.3\" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A",
      "description": "Лёгкий и автономный MacBook Air на чипе Apple M1 для работы, учебы и повседневных задач. Отличается быстрым запуском и тихой работой.",
      "price": 439980,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000"
    },
    {
      "id": 32,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук Lenovo IdeaPad 3 15.6\" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK",
      "description": "Практичный ноутбук для учебы и офисных задач с тихой системой охлаждения. Есть шторка веб‑камеры для приватности.",
      "price": 170571,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/ha2/h3f/64231926562846.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he0/he8/64231929446430.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h1b/h59/64231932133406.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000"
    },
    {
      "id": 33,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук ThundeRobot 911S Core D 15.6\" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F",
      "description": "Игровой ноутбук с экраном 144 Гц и видеокартой RTX 3050 для комфортного гейминга. Подойдёт также для работы с графикой и монтажом.",
      "price": 496000,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h7d/hf3/85301691809822.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000"
    },
    {
      "id": 34,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук Acer Aspire 16\" / 16 Гб / eMMC 512 Гб / Win 11 Pro / NX.J5REM.01C / AL16-52P",
      "description": "Ноутбук для работы и учебы с 16″ IPS‑экраном и 16 ГБ ОЗУ. Подходит для офисных задач, видеозвонков и повседневной мультимедиа.",
      "price": 276465,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p91/pf8/28407711.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p91/pf8/28407711.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p75/pf8/28407712.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p59/pf8/28407713.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p3d/pf8/28407714.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p21/pf8/28407715.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p04/pf8/28407716.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/acer-aspire-16-16-gb-emmc-512-gb-win-11-pro-nx-j5rem-01c-al16-52p-135804242/?c=750000000"
    },
    {
      "id": 35,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук Huawei MateBook D16 16\" / 16 Гб / SSD 512 Гб / Win 11 Home / MitchellG-W5651",
      "description": "Производительный 16″ ноутбук для работы и учебы с быстрым SSD и 16 ГБ памяти. Удобен для многозадачности и офисных приложений.",
      "price": 388965,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h08/h94/84934299090974.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h08/h94/84934299090974.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he9/hfc/84934299156510.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hc0/h26/84934299222046.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h0a/hb9/84934299287582.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h77/hb8/84934299353118.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/huawei-matebook-d16-16-16-gb-ssd-512-gb-win-11-home-mitchellg-w5651-115943541/?c=750000000"
    },
    {
      "id": 36,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук Acer Nitro Lite NL16-71G 16\" / 16 Гб / SSD 512 Гб / Без ОС / NH.DAAER.001",
      "description": "Мощный 16″ ноутбук с экраном 165 Гц и видеокартой RTX 3050 для игр и графики. Быстрый NVMe SSD ускоряет загрузку системы и приложений.",
      "price": 435884,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/pcc/pc3/74964289.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/pcc/pc3/74964289.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p38/pc6/74964290.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p54/pc6/74964291.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p71/pc6/74964292.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p8d/pc6/74964293.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/acer-nitro-lite-nl16-71g-16-16-gb-ssd-512-gb-bez-os-nh-daaer-001-148703886/?c=750000000"
    },
    {
      "id": 37,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук HP Victus 15-fb3705ci 15.6\" / 16 Гб / M.2 512 Гб / Без ОС / BD1V3EA",
      "description": "Игровой ноутбук с Ryzen и RTX 3050 для комфортной игры и работы. Быстрый SSD на 512 ГБ ускоряет загрузку и запуск программ.",
      "price": 699500,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p2d/p09/59464043.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p2d/p09/59464043.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p49/p09/59464044.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p82/p09/59464046.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/hp-victus-15-fb3705ci-15-6-16-gb-m-2-512-gb-bez-os-bd1v3ea-144327452/?c=750000000"
    },
    {
      "id": 38,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук Apple MacBook Pro 14 2024 14.2\" / 24 Гб / SSD 512 Гб / macOS / MX2E3",
      "description": "Профессиональный MacBook Pro 14″ с высокой производительностью и качественным экраном. Подойдёт для монтажа, разработки и тяжелых задач.",
      "price": 1142964,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pef/pa4/15675603.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pd3/pa4/15675604.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb7/pa4/15675605.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-24-gb-ssd-512-gb-macos-mx2e3-137220943/?c=750000000"
    },
    {
      "id": 39,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук ASUS TUF Gaming F16 16\" / 16 Гб / SSD 512 Гб / Без ОС / FX607VJ-RL049 / 90NR0MZ6-M002P0",
      "description": "Игровой ноутбук с RTX 3050 и быстрым SSD для игр и задач с графикой. Большой 16″ экран удобен для работы и развлечений.",
      "price": 469378,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/pa8/p57/52352626.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/pa8/p57/52352626.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe7/p54/52352630.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/paf/p54/52352632.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p77/p54/52352634.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p22/p54/52352637.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/asus-tuf-gaming-f16-16-16-gb-ssd-512-gb-bez-os-fx607vj-rl049-90nr0mz6-m002p0-142322855/?c=750000000"
    },
    {
      "id": 40,
      "categoryId": 4,
      "likes": 0,
      "name": "Ноутбук Zentek S03 15.6\" / 16 Гб / SSD 512 Гб / Win 10 Pro / ZC156PN95000002307150982",
      "description": "Ноутбук для работы и учебы с 16 ГБ ОЗУ и SSD 512 ГБ для быстрой загрузки. Хороший вариант для офисных задач и мультимедиа.",
      "price": 298930,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p52/p9c/31460061.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p52/p9c/31460061.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p36/p9c/31460062.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p1a/p9c/31460063.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pfd/p9b/31460064.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe1/p9b/31460065.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/zentek-s03-15-6-16-gb-ssd-512-gb-win-10-pro-zc156pn95000002307150982-113995965/?c=750000000"
    },
    {
      "id": 41,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет HONOR PAD X9 11.5 дюйм 4 Гб/128 Гб серый",
      "description": "Планшет с большим 11.5″ экраном и 6 динамиками для фильмов и учебы. Подойдёт для чтения, онлайн‑курсов и повседневных задач.",
      "price": 129985,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h34/h15/85659492909086.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h34/h15/85659492909086.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h06/h88/85659492974622.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h16/h3a/85659493040158.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/ha6/hc6/85659493105694.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf1/h59/85659493171230.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/honor-pad-x9-11-5-djuim-4-gb-128-gb-seryi-118137136/?c=750000000"
    },
    {
      "id": 42,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет Samsung Tab S10 Ultra 14.6 дюйм 12 Гб/256 Гб серебристый",
      "description": "Большой и мощный планшет 14.6″ для работы и развлечений с отличным экраном и емкой батареей. Подойдёт для многозадачности, просмотра и творчества.",
      "price": 579990,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p0b/p5c/1647284.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p0b/p5c/1647284.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p27/p5c/1647285.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p43/p5c/1647286.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p5f/p5c/1647287.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p7b/p5c/1647288.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/samsung-tab-s10-ultra-14-6-djuim-12-gb-256-gb-serebristyi-128152129/?c=750000000"
    },
    {
      "id": 43,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет Samsung Galaxy Tab S9 SM-X716BZAAS 11 дюйм 8 Гб/128 Гб графит",
      "description": "Планшет с AMOLED‑экраном 11″ и мощным Snapdragon для работы и развлечений. Подходит для заметок со стилусом, учебы и мультимедиа.",
      "price": 308079,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hb3/h78/82770436423710.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hd8/he9/82770437046302.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h53/h0f/82770863226910.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000"
    },
    {
      "id": 44,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет Apple iPad Pro 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб черный",
      "description": "iPad Pro 11″ с мощным процессором для работы, творчества и развлечений. Отлично подходит для монтажа, рисования и многозадачности.",
      "price": 515869,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h90/hc6/86106948304926.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000"
    },
    {
      "id": 45,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет Apple iPad 10.2 2021 Wi-Fi 10.2 дюйм 3 Гб/256 Гб серый",
      "description": "Универсальный iPad для учебы, работы и развлечений с качественным экраном 10.2″. Камеры позволяют удобно общаться по видеосвязи и сканировать документы.",
      "price": 211992,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/ha7/h85/64335412985886.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/ha7/h85/64335412985886.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h5b/h55/64335416164382.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h81/h20/64335419572254.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hf0/h9d/64335422029854.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hfa/h98/64335425142814.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/apple-ipad-10-2-2021-wi-fi-10-2-djuim-3-gb-256-gb-seryi-102301716/?c=750000000"
    },
    {
      "id": 46,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет Samsung Galaxy Tab A9 LTE 8.7 дюйм 4 Гб/64 Гб серый",
      "description": "Компактный планшет с LTE для связи в дороге и повседневных задач. Подойдёт для учебы, чтения и просмотра видео.",
      "price": 119404,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p57/p01/77344135.bin?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p73/p01/77344136.bin?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p90/p01/77344137.bin?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pac/p01/77344138.bin?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000"
    },
    {
      "id": 47,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый",
      "description": "Современный iPad 11″ для учебы, работы и развлечений с быстрым процессором. Подходит для видеозвонков, заметок и просмотра контента.",
      "price": 203916,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000"
    },
    {
      "id": 48,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет Xiaomi Redmi Pad SE 11 дюйм 8 Гб/256 Гб серый",
      "description": "Планшет 11″ с 8 ГБ ОЗУ и большим накопителем 256 ГБ для приложений и медиа. Хорош для учебы, фильмов и повседневных задач.",
      "price": 107232,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h8f/h47/84163009216542.jpg?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-11-djuim-8-gb-256-gb-seryi-113758800/?c=750000000"
    },
    {
      "id": 49,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет Xiaomi Pad 6 11 дюйм 8 Гб/256 Гб серый",
      "description": "Xiaomi Pad 6 с быстрым Snapdragon и 8 ГБ ОЗУ для плавной работы и игр. Подходит для фильмов, документов и многозадачности.",
      "price": 154996,
      "rating": 4.9,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p78/pfa/78318162.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb1/pfa/78318164.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000"
    },
    {
      "id": 50,
      "categoryId": 5,
      "likes": 0,
      "name": "Планшет Lenovo IdeaTab TB336FU 11 дюйм 8 Гб/256 Гб серый",
      "description": "Планшет с 2.5K IPS‑экраном и 8 ГБ ОЗУ для учебы и работы. В комплекте стилус и чехол для удобства.",
      "price": 129989,
      "rating": 5,
      "image": "https://resources.cdn-kaspi.kz/img/m/p/p14/p33/83039505.png?format=gallery-medium",
      "images": [
        "https://resources.cdn-kaspi.kz/img/m/p/p14/p33/83039505.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p31/p33/83039506.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p4d/p33/83039507.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p69/p33/83039508.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p85/p33/83039509.png?format=gallery-medium"
      ],
      "link": "https://kaspi.kz/shop/p/lenovo-ideatab-tb336fu-11-djuim-8-gb-256-gb-seryi-151079824/?c=750000000"
    }
  ]);
}
