import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import avatar from "assets/img/faces/marc.jpg";
import useFetch from "hooks/useFetch";
import MenuItem from "@material-ui/core/MenuItem";
import { mapas, funcao, resolucao, jogador } from "../../services/api";
import Select from "@material-ui/core/Select";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  let history = useHistory();

  const { data: mapas_list } = useFetch(mapas);
  const { data: funcoes } = useFetch(funcao);
  const { data: resolucoes } = useFetch(resolucao);
  console.log(mapas_list);
  console.log(funcoes);

  const [nome, setNome] = useState("");
  const [nickname, setNickname] = useState("");
  const [sensibilidade, setSensibilidade] = useState("");
  const [dpi, setDpi] = useState("");
  const [mira, setMira] = useState("");
  const [funcao_id, setFuncao_id] = useState(0);
  const [mapa_id, setMapa_Id] = useState(0);
  const [resolucao_id, setResolucao_id] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    //objeto com os campos que serão enviados

    axios
      .post(jogador, {
        nome: nome,
        nickname: nickname,
        sensibilidade,
        dpi: sensibilidade,
        mira: mira,
        funcao_id: funcao_id,
        mapa_id: mapa_id,
        resolucao_id: resolucao_id,
      })
      .catch((err) => {
        {
          console.log(err);
        }
      });
    toast.success("Player adicionado com sucesso!", { autoClose: 2000 });
    history.push("/admin/jogadores");
  };

  redirect ? <Redirect to="/admin/table" /> : "null";

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <GridContainer style={{ width: '90%'}}> */}
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
            <p className={classes.cardCategoryWhite}>Complete your profile</p>
          </CardHeader>
          <CardBody>
            {/* <GridContainer > */}
            <GridItem style={{ marginBottom: 20 }} xs={12} sm={12} md={12}>
              <TextField
                style={{ width: "100%" }}
                label="Nome completo"
                // variant="outlined"
                labelText="Nome completo"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                formControlProps={{
                  fullWidth: true,
                }}
                required
              />
            </GridItem>
            <GridItem style={{ marginBottom: 20 }} xs={12} sm={12} md={12}>
              <TextField
                style={{ width: "100%" }}
                // variant="outlined"
                label="Nickname"
                id="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>

            {/* </GridContainer> */}
            <GridContainer>
              <GridItem style={{ marginBottom: 20 }} xs={12} sm={12} md={3}>
                <InputLabel>Sensibilidade</InputLabel>
                <TextField
                  style={{ width: "100%" }}
                  // variant="outlined"
                  id="sensibilidade"
                  value={sensibilidade}
                  onChange={(e) => setSensibilidade(e.target.value)}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem
                style={{ marginBottom: 20 }}
                style={{ marginBottom: 20 }}
                xs={12}
                sm={12}
                md={4}
              >
                <InputLabel>DPI</InputLabel>
                <TextField
                  // variant="outlined"
                  style={{ width: "100%" }}
                  id="dpi"
                  value={dpi}
                  onChange={(e) => setDpi(e.target.value)}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem style={{ marginBottom: 20 }} xs={12} sm={12} md={4}>
                <InputLabel>Mira</InputLabel>
                <TextField
                  // variant="outlined"
                  style={{ width: "100%" }}
                  id="mira"
                  value={mira}
                  onChange={(e) => setMira(e.target.value)}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem style={{ marginBottom: 20 }} xs={12} sm={12} md={4}>
                <InputLabel>Mapa Preferido</InputLabel>
                <Select
                  // variant="outlined"
                  style={{ width: "100%" }}
                  label="mapas"
                  id="mapa_id"
                  value={mapa_id}
                  onChange={(e) => setMapa_Id(e.target.value)}
                  formControlProps={{
                    fullWidth: true,
                  }}
                >
                  {mapas_list?.map((mapa) => (
                    <MenuItem key={mapa.id} value={mapa.id}>
                      {mapa.mapa}
                    </MenuItem>
                  ))}
                </Select>
              </GridItem>
              <GridItem style={{ marginBottom: 20 }} xs={12} sm={12} md={4}>
                <InputLabel>Função</InputLabel>
                <Select
                  // variant="outlined"
                  style={{ width: "100%" }}
                  label="Função"
                  id="funcao_id"
                  value={funcao_id}
                  onChange={(e) => setFuncao_id(e.target.value)}
                  formControlProps={{
                    fullWidth: true,
                  }}
                >
                  {funcoes?.map((funcao) => (
                    <MenuItem key={funcao.id} value={funcao.id}>
                      {funcao.funcao}
                    </MenuItem>
                  ))}
                </Select>
              </GridItem>
              <GridItem style={{ marginBottom: 20 }} xs={12} sm={12} md={4}>
                <InputLabel>Resolução</InputLabel>
                <Select
                  // variant="outlined"
                  style={{ width: "100%" }}
                  id="resolucao_id"
                  value={resolucao_id}
                  onChange={(e) => setResolucao_id(e.target.value)}
                  // variant="outlined"
                  formControlProps={{
                    fullWidth: true,
                  }}
                >
                  {resolucoes?.map((resolucao) => (
                    <MenuItem key={resolucao.id} value={resolucao.id}>
                      {resolucao.resolucao}
                    </MenuItem>
                  ))}
                </Select>
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button
              disabled={resolucao_id === ""}
              onClick={submit}
              color="primary"
            >
              Cadastrar
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem> */}
      {/* </GridContainer> */}
    </div>
  );
}
