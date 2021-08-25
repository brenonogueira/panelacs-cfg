import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// import Table from "@material-ui/core/Table";
import Table from "components/Table/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import { jogador } from "../../services/api";
import axios from "axios";

const styles2 = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles2);

export default function TableList() {
  const classes = useStyles();

  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    //how to create a async function inside the hook useEffect
    (async () => {
      const response = await axios.get(jogador);
      setJogadores(response.data);
    })();
  }, [jogadores]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader style={{ marginBottom: "-40px" }} color="primary">
            <h4 className={classes.cardTitleWhite}>Jogadores da Panela</h4>
            <p className={classes.cardCategoryWhite}>
              Tabela mostrando cfg simples de cada player da panela
            </p>
          </CardHeader>
          <CardBody>
            <Table />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
