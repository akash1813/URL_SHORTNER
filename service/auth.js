const sessionIdToUserMap = new Map();

function setUser(id , user){
    sessionIdToUserMap.set(id , user);     // used to map uuid to user
}

function getUser(id){
   return sessionIdToUserMap.get(id);
}

module.exports={
    setUser,
    getUser
};