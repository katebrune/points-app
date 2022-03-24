/**
 * utility function to get 'points' value from 
 * local storage
 * @returns number | undefined
 */
function getPointsFromStorage() {
	let value = window.localStorage.getItem('points')
	return value ? parseInt(value) : undefined
}

/**
 * utility function to set 'points' value
 * in local storage
 * @param {number} count 
 */
function setPointsInStorage(count) {
	window.localStorage.setItem('ponts', count.toString())
}