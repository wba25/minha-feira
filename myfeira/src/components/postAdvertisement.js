import  firebase  from '../configFirebase.js'
import router from '../router'

export default (crop, qty, distance, pictures) => {
    console.log(firebase.db)
    firebase.db.collection('advertisements').add(
        {
            crop,
            qty,
            distance,
            pictures,
            created_at: new Date().getTime()
        }
    ).then(
        router.push({name: 'home',params:{}})   
    )
}