const AbstractManager = require("./AbstractManager");

class MangaManager extends AbstractManager {
  constructor() {
    super({ table: "manga" });
  }

  insert(item) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      item.title,
    ]);
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = MangaManager;
