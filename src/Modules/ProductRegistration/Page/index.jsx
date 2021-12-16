import { InputLabel, FormControl } from "@material-ui/core";
import { useState } from "react";
import Notification from "../../../Global/Components/Notification";

import {
  ProductRegistrationContainer,
  FormSection,
  StyledTextField,
  StyledButton,
} from "./ProductRegistration_style";

const ProductRegistration = () => {
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ProductRegistrationContainer>
      <h1>Cadastro de Produtos</h1>
      <FormSection noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <h2 style={{ marginRight: 25 }}>Nome do Produto: </h2>
          <FormControl variant="outlined" style={{ width: "60%" }}>
            <InputLabel htmlFor="Product">Product</InputLabel>
            <StyledTextField
              id="product"
              fullWidth
              variant="outlined"
              label="Product"
              value={product}
              onChange={(event) => setProduct(event.target.value)}
              labelWidth={70}
            />
          </FormControl>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <h2 style={{ marginRight: 25 }}>Preço: </h2>
          <FormControl variant="outlined" style={{ width: "60%" }}>
            <InputLabel htmlFor="Price">Price</InputLabel>
            <StyledTextField
              id="price"
              fullWidth
              variant="outlined"
              label="Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              labelWidth={70}
            />
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <h2 style={{ marginRight: 25 }}>Descrição: </h2>
          <FormControl variant="outlined" style={{ width: "60%" }}>
            <InputLabel htmlFor="Description">Description</InputLabel>
            <StyledTextField
              id="description"
              fullWidth
              variant="outlined"
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              labelWidth={70}
              multiline
              rows="5"
            />
          </FormControl>
        </div>

        <StyledButton
          id="login-form-submit"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          //   disabled={Boolean(!email || !password)}
        >
          CADASTRAR
        </StyledButton>
      </FormSection>
    </ProductRegistrationContainer>
  );
};

export default ProductRegistration;
