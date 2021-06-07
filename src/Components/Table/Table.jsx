import React from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
function Table() {
  const [refreshTable, setRefreshTable] = React.useState(true);
  const [actions, setActions] = React.useState();

  React.useEffect(() => {
    const getActions = () => {
      axios({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon",
      })
        .then((res) => {
          setActions(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (refreshTable === true) {
      getActions();
      setRefreshTable(false);
    }
  }, [refreshTable]);

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
            width: "25em",
          },
        },
        MuiToolbar: {
          root: {
            backgroundColor: "#FFDE59",
            color: "black",
          },
        },
        MuiTableFooter: {
          root: {
            backgroundColor: "#FFDE59",
            color: "black",
          },
        },
      },
    });

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
      name: "url",
      label: "URL",
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
          title={"In comming actions"}
          data={actions}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
}

export default Table;
