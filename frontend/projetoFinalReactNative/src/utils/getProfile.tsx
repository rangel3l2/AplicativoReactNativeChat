

// import { Container } from './styles';
type Params = {
    token : string
  }
  type profile = {
    email : string;
    family_name: string;
    given_name: string;
    locale: string;
    name: string;
    picture: string;
  
  
  }
const  getProfile = async(token) => {
    if(token){
    const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
    
    const userInfo = await response.json()
    console.log(userInfo)
   return userInfo
    }
}

export default getProfile;