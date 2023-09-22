
export default function Images({imgSrc ,pt,}){
    return (
  <div className="custom-image"  style={{paddingTop:pt}}>
  <img className="abouthome_img" src={imgSrc} alt = "aboutimages" />
   
  </div>
    );

};