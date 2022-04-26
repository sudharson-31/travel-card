import Images from './../images';
export default function Header(){
    return (
      <div className="header">
        <img src={Images.globe} alt="globe"></img>
        <h3>my travel journal.</h3>
      </div>
    )
  }