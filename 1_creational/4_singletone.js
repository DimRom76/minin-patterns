class Database {
  constructor(data) {
    //не даем создавать несколько экземпляров єтого класса
    //например если есть подключение МонгоДБ повторно подключение делать не надо
    if (Database.exists) {
      return Database.instance;
    }

    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const mongo = new Database("MongoDB");

console.log(Database);
console.log(mongo.getData());

const mysql = new Database("mySQL");
console.log(mysql.getData()); //получим MongoDB
