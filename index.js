import { getUsers, getUsers2, getUsers3 } from './1. Simple requests/1-index_GET.js'
import { createUser2, createUser3, createUser3_objectOutside } from './1. Simple requests/2-index_POST.js'
import { updateUser_PUT, updateUser_PATCH } from './1. Simple requests/3-index_PUT_PATCH.js'
import { deleteUser } from './1. Simple requests/4-index_DELETE.js'


createUser2()
createUser3()
createUser3_objectOutside()

updateUser_PUT()
updateUser_PATCH()

deleteUser()

getUsers()
getUsers2()
getUsers3()

// It doesn't matter the order, because they are ASYNCHRONOUS functions!