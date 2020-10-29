exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("product")
  //   .del()
  //   .then(function () {
  // Inserts seed entries
  return knex("product").insert([
    {
      category_id: 1,
      productName: "soda",
      image: "https://via.placeholder.com/150",
      brand: "coca cola",
      price: "25",
      shortDescription: "I pretty much awesome soda for you!",
      description: "Soda is good for your diabetes",
      ratings: 5,
      stock: 10,
    },
    {
      category_id: 4,
      productName: "UFC Canton 16oz",
      image: "https://via.placeholder.com/150",
      brand: "UFC",
      price: "3",
      shortDescription: "I pretty much awesome soda for you!",
      description:
        "UFC Canton is a perfect product to bring on any type of occasions especially in cold venues because it can really bring some heat to your body since it is made of rice flour. The noodles are soft and light and will not require so much time cooking so you will have more time mingling with your friends or family. Grab some of this UFC Canton now and have that great tasting pancit canton. Origin Philippines",
      ratings: 5,
      stock: 20,
    },
    {
      category_id: 2,
      productName:
        "Zhiyun Weebill S [Official] 3-Axis Gimbal Stabilizer for Cameras",
      image: "https://via.placeholder.com/150",
      brand: "Zhi yun",
      price: "399",
      shortDescription:
        "WEEBILL-S comatible with mainstream mirrorless and DSLR camera & lens combos. Combos like Sony A7Ⅲ+FE 24-70mm F2.8 and Canon 5D4+EF 24-70mm F2.8 can be perfectly balanced and stabilized for smooth cinematic shots under different scenarios",
      description:
        "Compact size as A4 paper; Ergonomically designed Sling mode to save effort and provide comfortable underslung shooting experience      8th Instune algorithm provides high responsiveness and eliminates jittery in fast movement in any environment",
      ratings: 5,
      stock: 20,
    },
    {
      category_id: 2,
      productName:
        "KERUI Avantgarde Door Windows Detector Suitable for Home Security Alarm System",
      image: "https://via.placeholder.com/150",
      brand: "Zhi yun",
      price: "399",
      shortDescription:
        "amper-proof fuction - When the door alarm is removed,the tamper button(in the back of transmitter),would be triggered and sends alarm signal to alarm host at once",
      description:
        "Two-way door/windows alarm - When doors/windows be opened or unclosed would be alarm.If the door sensor is in separation state,the alarm host can't be armed when you go out and intend to arm it,and the host voice prompts:'XX zone is open'to remind you that the door/windows isn't close wellt",
      ratings: 5,
      stock: 20,
    },
  ]);
  // });
};
