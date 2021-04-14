function binary_search (list, item) {
    let low = 0
    let high = list.length - 1
    let mid = 0, guess = 0
    // console.log(high)
    while (low <= high) {
        // console.log(high)
        // high--
        debugger
        mid = (low + high)/2
        guess = list[mid]
        console.log(guess)
        if (guess === item) {
            console.log(mid)
            return mid
        } else if (guess > item) {
            mid - 1
            high = mid
        } else {
            mid + 1
            low = mid
            //console.log(low)
        }
        // console.log('none')
    }
}

let my_list = [1, 3, 5, 7, 9]

console.log(binary_search(my_list, 3))