class insertionSort {
    constructor(arr) {
        this.arr = arr;
        this.i = 1;
        this.j = 1;
    }

    step() {
        let arr = this.arr;
        
        while (this.i < arr.length) {
            if (arr[this.j] < arr[this.j - 1]) {
                console.log('menor')

                this.swap(this.j, this.j-1);
                this.j--;
                
                if (this.j <= 0) {
                    this.i++;
                    this.j = this.i;
                }

                break;

            } else {
                this.i++;
                this.j = this.i;
            }
        }
        
        return this.arr;
    }

    swap(i, j) {
        let aux = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = aux;
    }
}

export default insertionSort;