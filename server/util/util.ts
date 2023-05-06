// app.get("/insert-prod", (req, res) => {
//     try {
//       const colors = [
//         "Red",
//         "Blue",
//         "White",
//         "Purple",
//         "Yellow",
//         "Midnight Black",
//       ];
//       // const screenSizes = ["40", "44"];
//       const productType = "mac";
//       const productName = "MacBook Air";
//       // const storage = "256GB";
//       const price = 3599;
//       const priceEilat = 3076;
//       const previewImg =
//         "https://www.idigital.co.il/files/Mac/Mac%20Nov%202020/mba2020-gold.jpg";
//       const displayImg =
//         "https://www.idigital.co.il/files/Mac/Mac%20Nov%202020/mba2020-spacegrey.jpg";
//       const sql = `INSERT INTO products(type, name, price, price_eilat,  color, display_img, preview_img)
//                   VALUES ('${productType}', '${productName}', '${price}', '${priceEilat}',  'Dark Gray', '${displayImg}', '${previewImg}')`;
//       connection.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(result);
//       });
//       res.send({ msg: "products were added" });
//     } catch (error) {
//       res.status(500).send({ error: error.message });
//     }
//   });
//   app.get("/insert-prod-airpods", (req, res) => {
//     try {
//       const productType = "air_pods";
//       const productName = "Airpods | 3rd Generation עם טעינת Lightning";
//       // const storage = "256GB";
//       const price = 729;
//       const priceEilat = 683;
//       const previewImg =
//         "https://www.idigital.co.il/files/AirPods_3rd_Generation/AirPods3_002.png";
//       const displayImg =
//         "https://www.idigital.co.il/files/AirPods_3rd_Generation/AirPods3_002.png";
//         const description = "הדור ה-3 של AirPods עם סאונד מרחבי ומעקב דינמי אחר תנועת הראש לחווית האזנה תלת מימדית סוחפת. בעלות עיצוב המאפשר להרכיב אותן בדיוק בזווית שתתאים לנוחות שלכם ובאופן שבו הסאונד יישמע הכי טוב.  טעינת Lightning האיירפודס החדשות נהדרות לאימונים ולסגנון חיים פעיל - הבחירה המושלמת לכל מי שרוצה לנסות Airpods בפעם הראשונה או לאלו שמעוניינים לשדרג מדגם קודם. מותג: Apple מחיר קודם: 799 ₪"
//       const sql = `INSERT INTO products(type, name, price, price_eilat,  description, display_img, preview_img)
//                   VALUES ('${productType}', '${productName}', '${price}', '${priceEilat}',  '${description}', '${displayImg}', '${previewImg}')`;
//       connection.query(sql, (error, result) => {
//         if (error) throw error;
//         console.log(result);
//       });
//       res.send({ msg: "products were added" });
//     } catch (error) {
//       res.status(500).send({ error: error.message });
//     }
//   });
  
//   app.get("/insert-prod-loop", async (req, res) => {
//     try {
//       const colors = [
//         {
//           color: "Gold",
//           displayImg:
//             "https://www.idigital.co.il/files/iphone14/iph14pro_web_gold.jpeg",
//         },
//         {
//           color: "Silver",
//           displayImg:
//             "https://www.idigital.co.il/files/iphone14/iph14pro_web_silver.jpeg",
//         },
//         {
//           color: "Deep Purple",
//           displayImg:
//             "https://www.idigital.co.il/files/iphone14/iph14pro_web_deeppurple.jpeg",
//         },
//         {
//           color: "Midnight Black",
//           displayImg:
//             "https://www.idigital.co.il/files/iphone14/iph14pro_web_spaceblack.jpeg",
//         },
//       ];
//       const pricesAndSize = [
//         { price: 4799, priceEilat: 4102, storage: "128GB" },
//         { price: 5299, priceEilat: 4529, storage: "256GB" },
//         { price: 6299, priceEilat: 5384, storage: "512GB" },
//         { price: 7299, priceEilat: 6238, storage: "1TB" },
//       ];
//       // const screenSizes = ["40", "44"];
//       const productType = "iphone";
//       const productName = "iPhone 14 Pro";
//       const previewImg =
//         "https://www.idigital.co.il/files/iphone14/iph14pro_web_hero.jpeg";
  
//       await colors.forEach((colorObj) => {
//         pricesAndSize.forEach((priceAndSizeObj) => {
//           const sql = `INSERT INTO products(type, name, price, price_eilat, storage, color, display_img, preview_img)
//                   VALUES ('${productType}', '${productName}', '${priceAndSizeObj.price}', '${priceAndSizeObj.priceEilat}', '${priceAndSizeObj.storage}', '${colorObj.color}', '${colorObj.displayImg}', '${previewImg}')`;
//           connection.query(sql, (error, result) => {
//             if (error) throw error;
//             console.log(result);
//           });
//         });
//       });
//       res.send({ msg: "products were added" });
//     } catch (error) {
//       res.status(500).send({ error: error.message });
//     }
//   });
  
//   app.get("/insert-prod-mac", async (req, res) => {
//     try {
//       const colors = [
//         {
//           color: "Silver",
//           displayImg:
//             "https://www.idigital.co.il/files/MacBook_Pro_13inch_M2/macbook13_m2001.jpeg",
//         },
//         {
//           color: "Dark Gray",
//           displayImg:
//             "https://www.idigital.co.il/files/MacBook_Pro_13inch_M2/macbook13_m2001.jpeg",
//         },
//       ];
//       const pricesAndSize = [
//         {
//           price: 5899,
//           priceEilat: 5042,
//           model:
//             "256GB SSD Apple M2 chip with 8-core CPU, 10-core GPU, and 16-core Neural Engine 8GB unified memory Touch Bar and Touch ID, Backlit Keyboard- English+Hebrew, Two Thunderbolt USB 4 ports",
//         },
//         {
//           price: 6799,
//           priceEilat: 5811,
//           model:
//             "512GB SSD Apple M2 chip with 8-core CPU, 10-core GPU, and 16-core Neural Engine 8GB unified memory Touch Bar and Touch ID, Backlit Keyboard- English+Hebrew, Two Thunderbolt USB 4 ports",
//         },
//       ];
//       const screenSizes = '13"';
//       const productType = "mac";
//       const productName = 'MacBook Pro 13" M2';
//       const previewImg =
//         "https://www.idigital.co.il/files/MacBook_Pro_13inch_M2/macbook13_m2001.jpeg";
//       await colors.forEach((colorObj) => {
//         pricesAndSize.forEach((priceAndSizeObj) => {
//           const sql = `INSERT INTO products(type, name, price, price_eilat, model, color, display_img, preview_img)
//                     VALUES ('${productType}', '${productName}', '${priceAndSizeObj.price}', '${priceAndSizeObj.priceEilat}', '${priceAndSizeObj.model}', '${colorObj.color}', '${colorObj.displayImg}', '${previewImg}')`;
//           connection.query(sql, (error, result) => {
//             if (error) throw error;
//             console.log(result);
//           });
//         });
//       });
//       res.send({ msg: "products were added" });
//     } catch (error) {
//       res.status(500).send({ error: error.message });
//     }
//   });
//   app.get("/insert-prod-ipad", async (req, res) => {
//     try {
//       const colors = [
//         {
//           color: "Space Gray",
//           displayImg:
//             "https://www.idigital.co.il/files/iPad_mini_6th_Gen/ipadmini6thgen007.jpeg",
//         },
//         {
//           color: "Pink",
//           displayImg:
//             "https://www.idigital.co.il/files/iPad_mini_6th_Gen/ipadmini6thgen005.jpeg",
//         },
//         {
//           color: "White",
//           displayImg:
//             "https://www.idigital.co.il/files/iPad_mini_6th_Gen/ipadmini6thgen003.jpeg",
//         },
//         {
//           color: "Purple",
//           displayImg:
//             "https://www.idigital.co.il/files/iPad_mini_6th_Gen/ipadmini6thgen001.jpeg",
//         },
//       ];
//       const pricesAndSize = [
//         {
//           price: 2399,
//           priceEilat: 2050,
//           storage:
//             "64GB",
//         },
//         {
//           price: 2999,
//           priceEilat: 2563,
//           storage:
//             "256GB",
//         },
//       ];
//       const screenSizes = '13"';
//       const productType = "ipad";
//       const productName = 'iPad mini 6th Generation';
//       const previewImg =
//         "https://www.idigital.co.il/files/iPad_mini_6th_Gen/ipadmini_hero001.jpeg";
//       await colors.forEach((colorObj) => {
//         pricesAndSize.forEach((priceAndSizeObj) => {
//           const sql = `INSERT INTO products(type, name, price, price_eilat, storage, color, display_img, preview_img)
//                     VALUES ('${productType}', '${productName}', '${priceAndSizeObj.price}', '${priceAndSizeObj.priceEilat}', '${priceAndSizeObj.storage}', '${colorObj.color}', '${colorObj.displayImg}', '${previewImg}')`;
//           connection.query(sql, (error, result) => {
//             if (error) throw error;
//             console.log(result);
//           });
//         });
//       });
//       res.send({ msg: "products were added" });
//     } catch (error) {
//       res.status(500).send({ error: error.message });
//     }
//   });
//   app.get("/insert-prod-watch", async (req, res) => {
//     try {
//       const colors = [
//         {
//           color: "Gold",
//           displayImg:
//             "https://www.idigital.co.il/files/aw_se_2022/aw_se_2_web011.jpeg",
//         },
//         {
//           color: "White",
//           displayImg:
//             "https://www.idigital.co.il/files/aw_se_2022/aw_se_2_web013.jpeg",
//         },
//         {
//           color: "Black",
//           displayImg:
//             "https://www.idigital.co.il/files/aw_se_2022/aw_se_2_web012.jpeg",
//         },
//       ];
//       const pricesAndSize = [
//         {
//           price: 1199,
//           priceEilat: 1110,
//           screenSize:
//             "40",
//         },
//         {
//           price: 1399,
//           priceEilat: 1196,
//           screenSize:
//             "44",
//         },
//       ];
//       const screenSizes = '13"';
//       const productType = "apple_watch";
//       const productName = 'Apple Watch SE GPS';
//       const previewImg =
//         "https://www.idigital.co.il/files/aw_se_2022/kubya_se_gps_hero001.jpeg";
//       await colors.forEach((colorObj) => {
//         pricesAndSize.forEach((priceAndSizeObj) => {
//           const sql = `INSERT INTO products(type, name, price, price_eilat, screen_size, color, display_img, preview_img, network)
//                     VALUES ('${productType}', '${productName}', '${priceAndSizeObj.price}', '${priceAndSizeObj.priceEilat}', '${priceAndSizeObj.screenSize}', '${colorObj.color}', '${colorObj.displayImg}', '${previewImg}', "Wi-Fi")`;
//           connection.query(sql, (error, result) => {
//             if (error) throw error;
//             console.log(result);
//           });
//         });
//       });
//       res.send({ msg: "products were added" });
//     } catch (error) {
//       res.status(500).send({ error: error.message });
//     }
//   });