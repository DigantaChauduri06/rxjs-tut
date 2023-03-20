import { Observable } from 'rxjs'

const observable = new Observable(subscriber =>
    subscriber.next('Hello World')
)

const observer = {
    next: value => {
        console.log("Emmiting value: ", value);
    },
    error: error => {
        console.log("Error: ", error);
    },
    complete: () => {
        console.log("Completed");
    }

}

observable.subscribe(observer)