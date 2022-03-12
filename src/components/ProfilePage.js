import ProfileNav from './ProfileNav'
import ProfileInfo from './ProfileInfo'

function ProfilePage(props) {
    return (
        <>
            <ProfileNav />
            <ProfileInfo info={props.info}/>
        </>
    )
}

export default ProfilePage;