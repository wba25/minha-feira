import  firebase  from '../../configFirebase.js'
import router from '../../router'

export default (name, phone) => {
    console.log(firebase.db)
    firebase.db.collection('farmers').add(
        {
            name,
            phone,
            created_at: new Date().getTime()
        }
    ).then(
        router.go(-1)
    )
}