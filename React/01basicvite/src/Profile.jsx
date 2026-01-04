import react from 'react'
import ProfileCard from '../Components/ProfileCard'
const Profile=()=>{
    const user=[
        {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu9uulWIgqP6ax8ikiM4eQUf2cNqGtOMkaQ&s',
        name:'john',
        bio:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, eum.',
        hobby:'reding ,wimming,coding'},
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu9uulWIgqP6ax8ikiM4eQUf2cNqGtOMkaQ&s',
        name:'alex',
        bio:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, eum.',
        hobby:'reding ,wimming,coding'
    }
    ]
    return(
        <>
          <h1>Profile</h1>
           {user.map((user,key)=>{
            return (
            <ProfileCard
            key={key}
            img={user.img}
            name={user.name}
            bio={
                <p>{user.bio}</p>
            } 
            >
               <p >{user.hobby}</p>
               <button>Contact us</button> 
            </ProfileCard>
           )})}
        </>

    )
}

export default Profile