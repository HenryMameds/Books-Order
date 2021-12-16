import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const WishList = () => {
  const [wishList, setWishList] = useState([
    { order: 1, totalPrice: 50, status: "done" },
    { order: 2, totalPrice: 50, status: "done" },
    { order: 3, totalPrice: 50, status: "done" },
    { order: 4, totalPrice: 50, status: "pending" },
    { order: 5, totalPrice: 50, status: "pending" },
  ]);

  useEffect(() => {
    setWishList((wishList) => setWishList([...wishList]));
  }, []);

  return (
    <>
      <h1>Lista de Pedidos</h1>
      {wishList.map((item) => {
        return (
          <Paper
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 10,
              padding: 10,
              justifyContent: "space-between",
              alignItems: "center",
              width: "60%",
            }}
          >
            <span>Order: {item.order}</span>
            <span>Total Price: {item.totalPrice}</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Status:{"    "}
              {item.status === "done" ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </span>
          </Paper>
        );
      })}
    </>
  );
};

export default WishList;
