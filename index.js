import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'


const status = {
    ACTIVE: "active",
    INACTIVE: "inactive"
}

const users = {
    data: [
        {
            status: status.ACTIVE,
            age: 18,
        },
        {
            status: status.INACTIVE,
            age: 15,
        },
        {
            status: status.INACTIVE,
            age: 100,
        },
        {
            status: status.INACTIVE,
            age: 25,
        },
        {
            status: status.ACTIVE,
            age: 32,
        },
        {
            status: status.ACTIVE,
            age: 30,
        },
        {
            status: status.ACTIVE,
            age: 18,
        }
    ]
}

const observable = new Observable(subscriber =>
    subscriber.next(users)
).pipe(
    map(({ data }) => data),
    map(data => data.filter(item => item.status === status.ACTIVE)),
    map(data => {
        let avg = data.reduce((sum, user) => sum + user.age, 0) / data.length
        if (avg < 18) throw new Error("Too Young")
        return data
    }),
    // map(data => data.)

)

const observer = {
    next: value => {
        console.log("Emmiting value: ", value);
    },
    error: error => {
        console.log("Error: ", error.message);
    },
    complete: () => {
        console.log("Completed");
    }

}

observable.subscribe(observer)