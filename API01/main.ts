import {Server} from './server/server'
import {userRouter} from './users/user.router'
import {restaurantRouter} from './restaurants/restaurants.router'
import {reviewsRouter} from './reviews/reviews.router'

const server = new Server()
server.bootstrap([userRouter,restaurantRouter,reviewsRouter]).then(server=>{
    console.log('Server is listening on:', server.application.address())
}).catch(error=>{
    console.log('Server failed to start')
    console.error(error)
    process.exit(1)
})
