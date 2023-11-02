"use strict"

const { data } = require("jquery");
const db = require("../config/db");

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexof(id);
    const userskeys = Object.keys(users); //[id, psword, name]
    const userInfo = userskeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
  

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;

    const newUser = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUser;
  }



  static getUsers(isAll, ...field) {}  


  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
        if (err) reject(err);
        // console.log(data[0]);
        resolve(data[0]);
      });
    });
    
  }

  static save(userInfo) {

  }
}

module.exports = UserStorage;