const users = require('../users')

// write controllers here

const list = (req, res) => {
    res.json(users)
  } 

const show =  (req, res) => {
    const user = users.find(i => i.id == req.params.id)
    res.json(user)
  } 

// function
const create = (req, res) => {
    const id = users.length + 1
    const user = {
      id: id,
      name: `User ${id}`,
      age: Math.floor(Math.random()*(30-10+1)+10)
    }
    users.push(user)
    res.json(users[users.length - 1])
  } 

module.exports = {
  list,
  show,
  create
}