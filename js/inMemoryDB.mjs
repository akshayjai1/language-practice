const typeMap = {
  string: 'string',
  int: 'number',
}
function createDatabase(dbName) {
  this.db = {
    name: dbName,
  }
  this.name = dbName
  function addRecord(tableName, recordDetail) {
    if (!this.db[tableName]) {
      throw new Error(`${tableName} does not exist in db`)
    }
    const currentTable = this.db[tableName]
    const tableFields = currentTable.tableFields
    for (let property in recordDetail) {
      if (property in tableFields) {
        // validate type
        if (
          typeof parseInt(recordDetail[property]) ===
          typeMap[tableFields[property].type]
        ) {
          // we can add the property
          recordDetail[property] = parseInt(recordDetail[property])
        } else {
          throw new Error(
            `type mismatch for property ${property}; ${recordDetail[property]} has to be ${tableFields[property].type} type`,
          )
        }
      } else {
        throw new Error(`property ${property} does not exist in ${tableName}`)
      }
    }
    this.db[tableName].records.push(recordDetail)
    console.log(
      `record ${JSON.stringify(recordDetail)} added to ${tableName} in db = ${
        this.db.name
      }`,
    )
  }
  function addTable(tableName, tableFields) {
    if (this.db[tableName]) {
      throw new Error(
        `${tableName} already exists in db with following definition ${JSON.stringify(
          this.db[tableName].tableFields,
        )}`,
      )
    }
    // validate proper table meta (fields)
    this.db[tableName] = {
      tableFields: tableFields,
      records: [],
    }
    console.log(`Table: ${tableName} added to DB: ${this.db.name}`)
  }
  function deleteTable(tableName) {
    if (!this.db[tableName]) {
      throw new Error(`${tableName} does not exist in db`)
    }
    delete this.db[tableName]
    console.log(`${tableName} deleted from ${this.db.name}`)
  }
  console.log('db created with name = ', dbName)
  this.addTable = addTable
  this.addRecord = addRecord
  this.deleteTable = deleteTable
}

const db1 = new createDatabase('db1')

db1.addTable('members', {
  name: { type: 'string', required: true },
  age: { type: 'number', required: false },
})

db1.addRecord('members', { name: 'ABC', age: 31 })
// addTable('members',{name:{type:string, required:boolean},
// age:{type:string, required:boolean},})
addRecord('members', { name: 'Akshay', age: 31 })

/*
addRecords validates tableName, and table fields name, and table fields type,
if there is error, it throws error.

addTable validates, that table does not already exist, if exists throw error,
else add table
TODO: add table meta validation

add
 */
