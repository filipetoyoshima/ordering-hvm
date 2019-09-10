class SelectionSort {
    constructor (arr) {
        this.arr = arr;
        this.i = 0;

    }

    step () {
        var j;
        var small_index;

        while (this.i < this.arr.length) {
            small_index = this.i;
            
            for (j = this.i+1; j < this.arr.length; j++) {
                if (this.arr[j] < this.arr[small_index]) {
                    small_index = j;
                }
            }
    
            if (small_index !== this.i) {
                this.swap(small_index, this.i);
                this.i++;
                return this.arr;
            }
            this.i++;
        }
        return this.arr;
    }

    swap (i, j) {
        let aux = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = aux;
    }
}

export default SelectionSort;