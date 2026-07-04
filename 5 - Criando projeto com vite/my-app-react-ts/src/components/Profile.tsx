import { Skills } from './Skills'

const Profile: React.FC = () => {
  return (
    <div>
      <img src="https://media.licdn.com/dms/image/v2/D4D03AQEyHWVtXixs-w/profile-displayphoto-scale_400_400/B4DZvOBkTMHQAg-/0/1768688078284?e=1784764800&v=beta&t=iVW1vVtZxJ1h2ElHCS2XYZkv5v1GOd3sMBA_fMPx5WI" alt="Close-up headshot of a smiling person looking at the camera with a softly blurred neutral background and warm professional tone" />
      <h3>Ricardo Honório de Santana</h3>
      <p>full stack developer</p>
      <Skills />
    </div>
  )
}

export default Profile