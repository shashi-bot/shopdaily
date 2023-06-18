import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "./CommonStyled";
import { productsCreate}  from "../../redux/productRedux";

const CreateProduct = () => {
  const dispatch = useDispatch();
 const {createStatus} =useSelector((state)=>state.products);

  const [img, setProductImg] = useState("");
  const [categories, setCategory]=useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [Recommendation,setRecommendation] =useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        title,
        price,
        desc,
        categories,
        Recommendation,
        img,
      })
    );
  };

  return (
    <StyledCreateProduct>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input
          type="text"
          placeholder="image url"
          onChange={(e)=> setProductImg(e.target.value)}
          required
        />
          <input
          type="text"
          placeholder="category"
          onChange={(e)=> setCategory(e.target.value)}
          required
          />
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
           <input
          type="text"
          placeholder="Recommendation"
          onChange={(e) => setRecommendation(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Short Description"
          onChange={(e) => setDesc(e.target.value)}
          required
        />

        <PrimaryButton type="submit">
          {createStatus=== "pending" ? "Submitting" : "Submit"}
        </PrimaryButton>
      </StyledForm>
      
    </StyledCreateProduct>
  );
};

export default CreateProduct;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  select,
  input {
  padding: 7px;
  min-height: 30px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(182, 182, 182);
  margin: 0.3rem 0;
  &:focus {
    border: 2px solid rgb(0, 208, 255);
  }
}
  
  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }
`;