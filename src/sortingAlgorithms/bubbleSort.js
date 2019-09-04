class BubbleSort {
    constructor (arr) {
        this.arr = arr;
        this.actual_bubble = 0;
        this.right_numbers = 0;
    }

    step () {
        let arr = this.arr;
        let actual = this.actual_bubble;

        while (arr[actual] <= arr[actual + 1]) {

            actual = (actual + 1) % (arr.length - 1);

            if (actual == this.actual_bubble) {
                return this.arr;
            }
        }

        this.swap(actual, actual + 1);
        this.actual_bubble = (actual + 1) % (arr.length - 1);

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