import { getStorage, ref as reff, getDownloadURL } from "firebase/storage";

export default function getDownloadableImageUrl() {
    const storage = getStorage();
    getDownloadURL(reff(storage, 'Users_images/jQxhcW9vDObv2dKKSJW7yYhzFIE2/profile_picture.jpg'))
    .then((url) => {
        console.log(url);
      })
      .catch((error) => {
        console.log(error);
      });  
}
