import React from "react";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
// import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
// import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
// import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardIcon from "components/Card/CardIcon.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import csgocard from "assets/img/csgocard.png";
import csgocard2 from "assets/img/csgocard2.jpg";
import Link from "@material-ui/core/Link";
// import { bugs, website, server } from "variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "variables/charts.js";

// import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// const useStyles = makeStyles(styles);

export default function Dashboard() {
  // const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia title="Contemplative Reptile" />
                <img src={csgocard} style={{ width: "100%" }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Link href="/admin/jogadores">VEJA OS PLAYERS</Link>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia title="Contemplative Reptile" />
                <img
                  src={csgocard2}
                  style={{ width: "100%", height: "190px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Link href="/admin/cadastro">CADASTRE SUA CFG</Link>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
