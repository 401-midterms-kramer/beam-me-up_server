'use strict';

class RepoModel {
  constructor() {
    this.database = [];
  }

  get(port) {
    let response = port ? this.database.filter((object) => object.port === port) : this.database; return Promise.resolve(response);
  }

  update(port, entry) {
    let object = this.sanitize(object);
    if (object.port) {
      this.databse = this.databse.map((item) => (item.port === port) ? object : item);
    }
    return Promise.resolve(object);
  }

  delete(port) {
    this.databse = this.databse.filter((object) => object.port !== port);
    return Promise.resolve();
  }

  sanitize(port) {
    let valid = true;
    let object = {};
    let schema = this.schema();
    
    Object.keys(schema).forEach(field => {
      if(schema[field].required) {
        if(port[field]) {
          object[field] = port[field];
        } else {
          valid = false;
        }
      }
      else {
        object[field] = port[field];
      }
    });
    return valid ? object : undefined;
  }

}

module.exports = RepoModel;
