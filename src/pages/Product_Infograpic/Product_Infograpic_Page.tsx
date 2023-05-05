import "./Product_Infograpic_Page.css";


function Product_Infograpic_Page() {
    return (
        <div className="page_in_development">
        <h1 className="page_in_development_header">Page is still in development.</h1>
        <p className="page_in_development_text_product_infograpic">Here you will be able to compare the Infograpic per role between companies.</p>
        <img  src={require("../../components/images/development.gif")} alt="" className="development_pic" />
      </div>
  )
}

export default Product_Infograpic_Page