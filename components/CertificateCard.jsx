import { Image, Transformation } from 'cloudinary-react';

const CertificateCard = ({ data }) => {
  const { title, image_url } = data;
  return (
    <div>
      <h2 style={{ color: '#f04854' }}>{title}</h2>
      <Image publicId={image_url} >
        <Transformation quality="90" width="760" crop="scale" />
      </Image>
    </div>
  )
}

export default CertificateCard;
