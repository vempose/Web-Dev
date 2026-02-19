import {Injectable, signal} from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Using a signal to hold the list of products
  readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
      description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой.',
      price: 560328,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.',
      price: 451050,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453'
    },
    {
      id: 3,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
      description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой.',
      price: 560328,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348'
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.',
      price: 451050,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453'
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
      description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой.',
      price: 560328,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348'
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.',
      price: 451050,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453'
    },
    {
      id: 7,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
      description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой.',
      price: 560328,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348'
    },
    {
      id: 8,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.',
      price: 451050,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453'
    },
    {
      id: 9,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ черный',
      description: 'Представляем вам Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. С этим устройством вы сможете наслаждаться качеством изображения, быстрой работой и отличной камерой.',
      price: 560328,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/p24/20120109.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348'
    },
    {
      id: 10,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.',
      price: 451050,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453'
    }
  ]);

  getProducts() {
    return this.products;
  }
}
