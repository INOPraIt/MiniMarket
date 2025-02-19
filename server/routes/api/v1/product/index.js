const path = require('path');
const fs = require('fs');
const Product = require('../../../../models/Products');
const uuid4 = require('uuid4');

module.exports = async function (fastify) {

  fastify.get('/', async (req, rep) => {
    try {
      const { color, material } = req.query;

      let filter = {}; // Объект фильтрации

      if (color) filter.color = color; // Фильтр по цвету, если указан
      if (material) filter.material = material; // Фильтр по материалу, если указан

      const products = await Product.find(filter); // Поиск по фильтру
      rep.send(products);
    } catch (error) {
      rep.code(500).send({ message: "Ошибка при получении продуктов", error });
    }
  });

  fastify.get('/:id', async (req, rep) => {
    try {
      const { id } = req.params; // Получаем id из параметров маршрута
      const product = await Product.findById(id); // Ищем продукт по id

      if (!product) {
        return rep.code(404).send({ message: "Продукт не найден" });
      }

      rep.send(product);
    } catch (error) {
      rep.code(500).send({ message: "Ошибка при получении продукта", error });
    }
  });

  fastify.post('/', async (req, rep) => {
    try {
      console.log(req.body);
      const named = req.body.named || null;
      const color = req.body.color || null;
      const description = req.body.description || null;
      const material = req.body.material || null;
      const image = req.body.image || null;
      const threadDiameter = req.body.threadDiameter || null
      const price = req.body.price || null
      const typeOfEyeliner = req.body.typeOfEyeliner || null
      const viewOfTheSpout = req.body.viewOfTheSpout || null
      
      if (!named || !color) {
        return rep.code(400).send({ message: "Имя и цвет продукта обязательны" });
      }
      let imagePath = null;
      if (image) {
        const uploadDir = './uploads';
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        imagePath = `${uploadDir}/${uuid4()}.jpg`;
        fs.writeFileSync(imagePath, image);
      }
      const product = new Product({ 
        named, 
        color, 
        description, 
        material, 
        image: imagePath, 
        threadDiameter,
        price,
        typeOfEyeliner,
        viewOfTheSpout
      });
      await product.save();
      rep.send({ message: "Продукт создан", product });
    } catch (error) {
      console.error("Ошибка загрузки:", error);
      rep.code(500).send({ message: "Ошибка сервера", error: error.message });
    }
  })
}

