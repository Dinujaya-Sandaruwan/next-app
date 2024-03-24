const redis = require("redis");

const redisclient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

function getOrSetRedisCache(key, callback) {
  // key is the key to store the data in Redis, callback is the async function to call if the data is not in Redis
  const DEFAULT_EXPIRATION = 3600; // 1 hour

  return new Promise((resolve, reject) => {
    redisclient.get(key, async (err, data) => {
      if (err) {
        reject(err);
      }
      if (data !== null) {
        resolve(JSON.parse(data));
      } else {
        const freshData = await callback();
        redisclient.setex(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));
        resolve(freshData);
      }
    });
  });
}
