
class BubbleSort {
    constructor(arr) {
        this.arr = arr;
        this.actual_bubble = 0;
        this.right_numbers = 0;
    }

    step () {
        let arr = this.arr;
        let actual = this.actual_bubble;

        console.log(actual, 'actual')

        while (arr[actual] <= arr[actual + 1]) {
            console.log('dont need a swap at ' + actual)
            actual = (actual + 1) % (arr.length - 1);
            console.log('going to ' + actual);
            if (actual == this.actual_bubble) {
                console.log('happy')
                return this.arr;
            }
        }
        console.log('need a swap at ' + actual);
        this.swap(actual, actual + 1);
        this.actual_bubble = (actual + 1) % (arr.length - 1);
        console.log(this.actual_bubble, 'new actual')
        return this.arr;
    }

    swap (i, j) {
        let aux = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = aux;
    }

    getArray () {
        return this.arr;
    }
}

export default BubbleSort;