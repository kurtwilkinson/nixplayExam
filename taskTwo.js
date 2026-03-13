/**
 * Class LRU Cache
 * class that handles caching and will remove least used data
 */
class LRUCache {

    constructor(capacity) {
        if (capacity <= 0) {
            throw new Error("Capacity must be positive")
        } 

        this.capacity = capacity
        this.storage = new Map() // should handle key, value, expireAt
    }

    /**
     * Setting of expiredAt in data
     * 
     * @param expiredAt 
     * @returns date 
     */
    _setExpiredAt(expiredAt = null) {
        return expiredAt ? Date.now() + expiredAt : null
    }

    /**
     * Checks if data is expired
     * 
     * @param {*} expiredAt 
     * @returns boolean
     */
    _isExpired(expiredAt) {
        return expiredAt !== null && Date.now() > expiredAt;
    }

    /**
     * Removes the least recently used data in storage
     */
    _removeLeastRecentlyUsedData() {
        let lruKey = null
        let oldestTime = Infinity

        // Find the key with the oldest lastUsed
        for (const [k, v] of this.storage.entries()) {
            if (v.lastUsed < oldestTime) {
                oldestTime = v.lastUsed
                lruKey = k
            }
        }

        if (lruKey !== null) {
            this.storage.delete(lruKey)
        }
    }

    /**
     * Getter function for LRUCache class that returns the data base on key
     * this also removes expired entry
     * 
     * @param {*} key 
     * @returns cache data base on key
     */
    get(key) {
        if (!this.storage.has(key)) {
            return null
        }

        const data = this.storage.get(key)

        if (this._isExpired(data.expiredAt)) {
            this.storage.delete(key)
            return "Expired data"
        }

        data.lastUsed = Date.now()

        return data.val
    }

    /**
     * Creates entry in storage and also checks if capacity exceeds
     * 
     * @param {*} key 
     * @param {*} value 
     * @param {*} expiredAt 
     */
    put(key, value, expiredAt = null) {
        const storageSize = this.storage.size

        if (this.storage.has(key)) {
            const data = this.storage.get(key)
            data.val=value
            data.expiredAt = this._setExpiredAt(expiredAt)
            data.lastUsed = Date.now()
        } else {
            if (storageSize >= this.capacity) {
                this._removeLeastRecentlyUsedData()
            }

            this.storage.set(key, {
                val: value,
                expiredAt: this._setExpiredAt(expiredAt),
                lastUsed: Date.now()
            })
        }
    }
}


module.exports = { LRUCache }
