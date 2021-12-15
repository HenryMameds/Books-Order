import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: "5%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const useStylesCard = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 400,
    marginBottom: "2%",
    marginLeft: "0.5%",
    marginRight: "0.5%",
  },
});

const ProductListContent = () => {
  const classes = useStyles();

  const classesCard = useStylesCard();

  const itens = [
    { name: "Produto1" },
    { name: "Produto2" },
    { name: "Produto3" },
    { name: "Produto4" },
    { name: "Produto5" },
    { name: "Produto6" },
    { name: "Produto7" },
    { name: "Produto8" },
    { name: "Produto9" },
    { name: "Produto10" },
  ];

  return (
    <>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Buscar Produto"
          inputProps={{ "aria-label": "buscar produto" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {itens.map((item, i) => {
          return (
            <Card className={classesCard.root}>
              <CardActionArea
                style={{ display: "flex", flexDirection: "column" }}
              >
                <CardMedia
                  style={{ width: "50%", height: "50%", marginTop: "5%" }}
                  component="img"
                  alt="Contemplative Reptile"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Adicionar ao Carrinho
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ProductListContent;
