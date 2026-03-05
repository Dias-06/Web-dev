import { Product } from '../models/product';

export const PRODUCTS: Product[] = [
  // Категория 1: for_home - Товары для дома (5 продуктов)
  {
    id: 1,
    name: 'Пароочиститель atreon DFHS-01 белый, черный',
    description: 'Пароочиститель Atreon 3 в 1 — мощная уборка без химии! Универсальный помощник для дома',
    price: 24900,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pd7/p7b/97012559.jpeg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pd7/p7b/97012559.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p30/p6e/97012555.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p0c/59895566.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/paroochistitel-atreon-dfhs-01-belyi-chernyi-142540734/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 2,
    name: 'Пылесос Karcher VC 3 черный',
    description: 'Мощный пылесос с контейнером для сбора пыли, 700 Вт, фильтр HEPA',
    price: 35990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h41/63863123886110.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hc2/h41/63863123886110.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h47/63863123951646.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h41/63863124017182.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/karcher-vc-3-chernyi-101045865/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 3,
    name: 'Утюг Philips Azur GC4567 синий',
    description: 'Паровой утюг с керамической подошвой, мощность 2600 Вт, функция вертикального отпаривания',
    price: 29990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h82/64155834040350.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hb2/h82/64155834040350.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb1/h10/64155834368030.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/philips-azur-gc4567-sinii-3501040/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 4,
    name: 'Робот-пылесос Xiaomi Robot Vacuum X10+ белый',
    description: 'Умный робот-пылесос с функцией влажной уборки, лазерной навигацией и автоматической очисткой контейнера',
    price: 299990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h0d/68095710822430.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h0d/68095710822430.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h17/h7d/68095710920734.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-belyi-109945663/?c=750000000',
    categoryId: 1,
    likes: 0
  },
  {
    id: 5,
    name: 'Мультиварка Redmond RMC-M90 серый',
    description: 'Мультиварка с керамической чашей, мощностью 860 Вт, 60 программ приготовления',
    price: 29990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/hd5/63783767736350.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/hd5/63783767736350.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h7c/hc7/63783767932958.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/redmond-rmc-m90-seryi-2600341/?c=750000000',
    categoryId: 1,
    likes: 0
  },

  // Категория 2: phones - Смартфоны (5 продуктов)
  {
    id: 6,
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    description: 'iPhone 15 — динамический остров, 48-мегапиксельная основная камера, процессор A16 Bionic',
    price: 379990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd1/h02/83559898628126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2f/hc7/83559898660894.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy S23 Ultra 12GB/256Gb черный',
    description: 'Флагманский смартфон с 200-мегапиксельной камерой, S Pen и процессором Snapdragon 8 Gen 2',
    price: 429990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hd7/69679656960030.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h64/hd7/69679656960030.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h7b/69679657287710.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12gb-256gb-chernyi-108917669/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 8,
    name: 'Смартфон Xiaomi Redmi Note 13 Pro 8GB/256Gb черный',
    description: 'Смартфон с 200-мегапиксельной камерой, AMOLED-экраном 120 Гц и процессором Snapdragon',
    price: 159990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/hcb/84962918875166.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h61/hcb/84962918875166.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd0/h8e/84962918907934.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-8gb-256gb-chernyi-116475254/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 9,
    name: 'Смартфон Google Pixel 8 8GB/128Gb черный',
    description: 'Смартфон с фирменным процессором Google Tensor G3, улучшенной камерой и AI-функциями',
    price: 329990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h73/84736572768286.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h10/h73/84736572768286.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h40/hcd/84736572801054.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/google-pixel-8-8gb-128gb-chernyi-115699285/?c=750000000',
    categoryId: 2,
    likes: 0
  },
  {
    id: 10,
    name: 'Смартфон Tecno Spark 20 Pro 8GB/256Gb черный',
    description: 'Бюджетный смартфон с 108-мегапиксельной камерой, AMOLED-экраном и большой батареей',
    price: 99990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7b/h23/85324027412510.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h7b/h23/85324027412510.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h57/h80/85324027445278.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/tecno-spark-20-pro-8gb-256gb-chernyi-117590134/?c=750000000',
    categoryId: 2,
    likes: 0
  },

  // Категория 3: laptops - Ноутбуки (5 продуктов)
  {
    id: 11,
    name: 'Ноутбук Apple MacBook Air 13 M1 256Gb серый',
    description: 'Ноутбук с чипом Apple M1, 8GB RAM, Retina-дисплеем и улучшенной графикой',
    price: 399990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h15/64209147396126.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h41/h15/64209147396126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h06/64209147592734.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-256gb-seryi-100797576/?c=750000000',
    categoryId: 3,
    likes: 0
  },
  {
    id: 12,
    name: 'Ноутбук Asus TUF Gaming F15 FX506HCB-HN315 черный',
    description: 'Игровой ноутбук с процессором Intel Core i5, видеокартой GeForce RTX 3050 и 144 Гц экраном',
    price: 349990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h62/hf3/64410487472158.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h62/hf3/64410487472158.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd3/hde/64410487570462.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx506hcb-hn315-chernyi-107215474/?c=750000000',
    categoryId: 3,
    likes: 0
  },
  {
    id: 13,
    name: 'Ноутбук Lenovo IdeaPad 3 15IAU7 82RK00FMRK серый',
    description: 'Ноутбук для работы и учебы с процессором Intel Core i3, 8GB RAM и SSD 256GB',
    price: 179990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/h67/64924809609246.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h34/h67/64924809609246.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h65/h66/64924809805854.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15iau7-82rk00fmrk-seryi-108042607/?c=750000000',
    categoryId: 3,
    likes: 0
  },
  {
    id: 14,
    name: 'Ноутбук Acer Aspire 7 A715-42G-R0GT черный',
    description: 'Ноутбук с процессором AMD Ryzen 5, видеокартой GeForce GTX 1650 и 8GB RAM',
    price: 299990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbc/h57/64292712710174.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hbc/h57/64292712710174.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h03/hd4/64292712808478.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/acer-aspire-7-a715-42g-r0gt-chernyi-107454567/?c=750000000',
    categoryId: 3,
    likes: 0
  },
  {
    id: 15,
    name: 'Ноутбук HP 15-fd0008ur 7Z051EA серебристый',
    description: 'Ноутбук с процессором Intel Core i5, 8GB RAM и быстрым SSD на 512GB',
    price: 249990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h7e/85291665571870.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h23/h7e/85291665571870.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc2/hc8/85291665604638.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/hp-15-fd0008ur-7z051ea-serebristyi-117437418/?c=750000000',
    categoryId: 3,
    likes: 0
  },

  // Категория 4: beauty - Красота (5 продуктов)
  {
    id: 16,
    name: 'Фен Dyson Supersonic HD15 никель/медь',
    description: 'Быстрый и бережный фен с интеллектуальным контролем температуры для здоровья волос',
    price: 189990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h2c/64430075265054.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h59/h2c/64430075265054.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc4/h4c/64430075330590.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/dyson-supersonic-hd15-nikel-med-105820377/?c=750000000',
    categoryId: 4,
    likes: 0
  },
  {
    id: 17,
    name: 'Эпилятор Philips BRE255/00 белый',
    description: 'Эпилятор с вращающимися дисками для эффективного удаления волос и массажной насадкой',
    price: 19990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/hf7/64239856320542.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h25/hf7/64239856320542.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hdd/hfd/64239856353310.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/philips-bre255-00-belyi-101461949/?c=750000000',
    categoryId: 4,
    likes: 0
  },
  {
    id: 18,
    name: 'Массажер для лица Gezatone Biolift4 AMG139',
    description: 'Микротоковый массажер для лица с 4 режимами работы и LED-терапией',
    price: 29990,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/hb2/64257528713246.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd6/hb2/64257528713246.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h07/h02/64257528778782.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/gezatone-biolift4-amg139-102535644/?c=750000000',
    categoryId: 4,
    likes: 0
  },
  {
    id: 19,
    name: 'Выпрямитель для волос Dyson Corrale никель/медь',
    description: 'Беспроводной выпрямитель с гибкими пластинами и интеллектуальным контролем температуры',
    price: 249990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/hdd/64380263612446.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h58/hdd/64380263612446.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc3/h59/64380263645214.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/dyson-corrale-nikel-med-104444464/?c=750000000',
    categoryId: 4,
    likes: 0
  },
  {
    id: 20,
    name: 'Машинка для стрижки Philips Series 5000 MG5730/15 черный',
    description: 'Многофункциональный триммер с 13 насадками для стрижки волос и бороды',
    price: 19990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h87/63806231756830.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h5f/h87/63806231756830.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h41/hda/63806231789598.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/philips-series-5000-mg5730-15-chernyi-101450978/?c=750000000',
    categoryId: 4,
    likes: 0
  },

  // Категория 5: health - Здоровье (5 продуктов)
  {
    id: 21,
    name: 'Тонометр Omron M3 Expert (HEM-7132-ALRU)',
    description: 'Автоматический тонометр с технологией интеллектуального измерения и памятью на 100 измерений',
    price: 27990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h2a/63764927119390.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hcf/h2a/63764927119390.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1e/hb1/63764927152158.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/omron-m3-expert-hem-7132-alru-100324784/?c=750000000',
    categoryId: 5,
    likes: 0
  },
  {
    id: 22,
    name: 'Ирригатор полости рта Xiaomi Mijia Oclean W1 белый',
    description: 'Портативный ирригатор с 4 режимами работы и водонепроницаемостью IPX7',
    price: 12990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h2d/64320138919966.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hdc/h2d/64320138919966.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hda/h5f/64320138952734.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/xiaomi-mijia-oclean-w1-belyi-104019399/?c=750000000',
    categoryId: 5,
    likes: 0
  },
  {
    id: 23,
    name: 'Ингалятор B.Well MED-121 PRO белый',
    description: 'Компрессорный небулайзер для лечения заболеваний дыхательных путей',
    price: 14990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/hb1/63700796276766.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hd5/hb1/63700796276766.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1d/h9d/63700796309534.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/b-well-med-121-pro-belyi-100181400/?c=750000000',
    categoryId: 5,
    likes: 0
  },
  {
    id: 24,
    name: 'Электрическая зубная щетка Oral-B Pro 4000 crossaction черный',
    description: 'Звуковая щетка с 3D-технологией очистки и датчиком давления',
    price: 19990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h27/64124842885150.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/hf0/h27/64124842885150.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h02/h63/64124842950686.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/oral-b-pro-4000-crossaction-chernyi-102311401/?c=750000000',
    categoryId: 5,
    likes: 0
  },
  {
    id: 25,
    name: 'Массажер для спины Yamaguchi Yume белый',
    description: 'Электрический массажер для спины с подогревом и 4 роликами',
    price: 39990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h28/h93/64525695451166.jpg?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/h28/h93/64525695451166.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hdc/hbc/64525695483934.jpg?format=gallery-medium'],
    link: 'https://kaspi.kz/shop/p/yamaguchi-yume-belyi-106593229/?c=750000000',
    categoryId: 5,
    likes: 0
  }
];
export function getProductsByCategory(id:number){
  const res = PRODUCTS.filter(item => item.categoryId == id);
  return res;
}