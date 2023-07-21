const AbstractManager = require("./AbstractManager");

class ChapterManager extends AbstractManager {
  constructor() {
    super({ table: "chapter" });
  }

  getbychap(chapter) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE manga_id = ?`,
      [chapter]
    );
  }
}

module.exports = ChapterManager;
