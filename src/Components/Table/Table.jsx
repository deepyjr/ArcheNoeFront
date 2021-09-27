import React from "react";
import MUIDataTable from "mui-datatables";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
function Table(props) {
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
            "&:hover": {
              backgroundColor: "#73ba9b",
              color: "white"
            }
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
            width: "15em",
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
  const history = useHistory();
  const columns = [
    // {
    //   name: "id",
    //   label: "id",
    //   options: {
    //     display: "excluded",
    //     filter: false,
    //     sort: false,
    //   },
    // },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "mainAddress",
      label: "Addresse Principale",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "postalCode",
      label: "Code Postal",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "city",
      label: "Ville",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    print: false,
    filter: true,
    viewColumns: false,
    filterType: 'checkbox',
    onRowClick: (data, rowMeta) => {
      history.replace('/mesArches/idTemporaire')
    },
  };

  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Mes Arches"}
          data={props.data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
}

export default Table;
