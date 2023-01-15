// import database
const db = require("../config/database");

// membuat class Model Patient
class Patient {
  /**
  * Membuat method static all.
  */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from patients";
      /**
      * Melakukan query menggunakan method query.
      * Menerima 2 params: query dan callback
      */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }
  
  /**
  * TODO 1: Buat fungsi untuk insert data.
  * Method menerima parameter data yang akan diinsert.
  * Method mengembalikan data student yang baru diinsert.
  */
  static create(data) {
    // return new Promise((resolve, reject) => {
    db.query('INSERT INTO patients SET ?', data, (err,results) => {
      if(err) throw err;
    });
    // });
  }

  static find(id){
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";

      db.query(sql, id, (err, results) => {
        const [patient] = results;
        resolve(patient);
      });
    });
  }

  static async update(id, data){
    await new Promise ((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data,id], (err, results) => {
        resolve(results);
      });
    });
    const patient = await this.find(id);
    return patient;
  }

  static destroy(id){
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  // ini search
  static search(name){
    return new Promise((resolve,reject) =>{
      const sql = `SELECT * FROM patients WHERE name like  '%${name}%'`;
      db.query(sql,name,(err,results) => {
        //destructing array
        const [patient] = results;
        resolve(patient);
      });
    });
  }

  // ini model positif / recovered / dead
  static finalByStatus(status){
    return new Promise((resolve,reject) => {
      const sql = `SELECT * FROM patients WHERE status = ?`;

      db.query(sql,status,(err,results) => {
        resolve(result);
      });
    });
  }

}

// export class Patient
module.exports = Patient;