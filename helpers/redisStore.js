const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)
module.exports = new RedisStore({
	store:new RedisStore({ client: redisClient })
});