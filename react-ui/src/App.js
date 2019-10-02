import React, { useState, useEffect } from 'react';
import './App.scss';
import DataGrid from "./components/data-grid"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from "axios"

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [driverInput, setDriverInput] = useState({
    name: '',
    lastName: '',
    categoryId: 1,
  });

  useEffect(() => {
    loadData();
    loadCategories();
  }, []);

  function loadData() {
    setLoading(true);
    axios(
      {
        method: "get",
        url: "/drivers",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      });
  }

  function loadCategories() {
    axios(
      {
        method: "get",
        url: "/categories",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(function (response) {
        setCategories(response.data);
      });
  }

  function insertDriver() {
    axios(
      {
        method: "post",
        url: "/drivers",
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        data: driverInput
      }
    )
      .then(function (response) {
        setDriverInput({
          name: '',
          lastName: '',
          categoryId: 1,
        });
        loadData();
      });
  }

  function refreshGrid() {
    loadData();
  }

  const handleChange = name => event => {
    debugger;
    setDriverInput({ ...driverInput, [name]: event.target.value });
  };

  return (
    <div className={classes.root + " main-app"} >
      <Grid container spacing={0}>
        <Grid item xs={12} className="header">
          <div className="title">Drivers</div>
          <TextField
            required
            label="Nombre"
            value={driverInput.name}
            onChange={handleChange('name')}
            margin="normal"
          />
          <TextField
            required
            label="Apellido"
            value={driverInput.lastName}
            onChange={handleChange('lastName')}
            margin="normal"
          />
          <TextField
            required
            select
            label="Select"
            onChange={handleChange('categoryId')}
            value={driverInput.categoryId}
            helperText="Please select a category"
            margin="normal"
          >
            {categories.map(option => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <Button onClick={insertDriver.bind(this)}>Insert</Button>
          <Button color="primary" onClick={refreshGrid.bind(this)}>Refresh</Button>
        </Grid>
        <Grid item xs={12}>
          <div className="content">
            <DataGrid data={data} loading={loading} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
