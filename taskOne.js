/**
 * Find the largest number in an array base on k
 * 
 * @nums array of numbers
 * @k highest number position
 * 
 * @result highest number in an array based on position
 */
const findKthLargest = (nums, k) => {

    if (nums.length === 0) {
        throw new Error("Array must not be empty")
    }

    if (k <= 0 || k > nums.length) {
        throw new Error("Invalid k value")
    }

    const result = []

    for (let i = 0; i < nums.length; i++) { // Loop through each element in the original array
        let inserted = false // Flag to check if the number has been inserted
        for (let j = 0; j < result.length; j++) {
            if (nums[i] === result[j]) { // Check for duplicates
                inserted = true
                break
            }
            if (nums[i] > result[j]) {
                result.splice(j, 0, nums[i]) // Insert number at the correct position
                inserted = true
                break
            }
        }
        if (!inserted) {
            result.push(nums[i])
        }
    }

    return result[k-1]
}

module.exports = { findKthLargest }
