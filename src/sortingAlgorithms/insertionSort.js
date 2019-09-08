class insertionSort {
    constructor(arr) {
        this.arr = arr;
        this.i = 1;
        this.j = 0;
    }

    step() {
        let i = this.i % (arr.length - 1);
        let j = this.i;
        let arr = this.arr;

        while ((j !== 0) && (arr[j] < arr[j - 1])){
            swap(j, j - 1);
        }

        this.i++;

        return this.arr;

    }

    swap(i, j) {
        let aux = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = aux;
    }
}

export default insertionSort;