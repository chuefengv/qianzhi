import image1 from '../../images/bts1.jpeg'
import image2 from '../../images/bts2.jpg'
import image3 from '../../images/bts3.JPEG'
import image4 from '../../images/bts4.JPEG'


export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
