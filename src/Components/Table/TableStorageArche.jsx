import React from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
function TableStorage(props) {
  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyRow: {
          root: {
            "&:nth-child(even)": {
              backgroundColor: "#EEEEEE",
            },
            "&:nth-child(odd)": {
              backgroundColor: "#EEEEEE",
            },
          },
        },
        MUIDataTableBodyCell: {
          root: {
            "&:nth-child(n)": {
              color: "black",
            },
            "&:hover": {
              color: "blue",
              cursor: "pointer",
            },
            width: "20em",
          },
        },
        MuiToolbar: {
          root: {
            backgroundColor: "#73ba9b",
            color: "white",
          },
        },
        MuiTableFooter: {
          root: {
            backgroundColor: "#73ba9b",
            color: "white",
          },
        },
      },
    });

 
    const columns = [
      {
        name: "id",
        label: "id",
        options: {
          display: "excluded",
          filter: false,
          sort: false,
        },
      },
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Type_of_Object",
        label: "Type d'objet",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "state",
        label: "Etat",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "description",
        label: "Description",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "quantity",
        label: "Quantité",
        options: {
          filter: false,
          sort: false,
        },
      },
    ];
  

  const options = {
    print: false,
    filter: true,
    viewColumns: false,
    filterType: 'checkbox',
  };

  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Matériel stocké dans l'arche"}
          data={props.data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
}

export default TableStorage;
