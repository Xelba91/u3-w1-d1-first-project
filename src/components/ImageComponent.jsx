import { Component } from "react";
class ImageComponent extends Component {
  render() {
    return (
      // dovrebbe ritornare un tag ‘img’. La fonte dell’immagine ‘src’ oltre che l’attributo ‘alt’ dovrebbero essere passate tramite Props del componente e assegnate al tag  <img /> .
      <img src={this.props.src} alt={this.props.alt} style={{ borderRadius: "10px", marginBottom: "15px" }} />
    );
  }
}
export default ImageComponent;
