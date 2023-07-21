const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "image" });
  }

  insert(image) {
    return this.database.query(
      `insert into ${this.table} (chapter_idd, img_url) values (?,?)`,
      [image.chapter_idd, image.img_url]
    );
  }

  update(image) {
    return this.database.query(
      `update ${this.table} set img_url = ? and chapter_idd=? where id = ?`,
      [image.img_url, image.chapter_idd]
    );
  }

  // findbychap(image) {
  //   return this.database.query(
  //     `SELECT * FROM ${this.table} WHERE chapter_idd = ?`,
  //     [image]
  //   );
  // }
  findbychap(image) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE chapter_idd = ?`,
      [image]
    );
  }
}

module.exports = ImageManager;
