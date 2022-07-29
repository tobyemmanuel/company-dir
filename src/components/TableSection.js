import React from 'react'
import MUIDataTable from "mui-datatables";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const muiCache = createCache({
  key: 'mui-datatables',
  prepend: true,
});
const columns = [
  {
   name: "company",
   label: "Company",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "sector",
   label: "Sector",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "address",
   label: "Address",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "stockSymbol",
   label: "Stock Symbol",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
    name: "fees",
    label: "Fees",
    options: {
     filter: true,
     sort: false,
    }
   },
 ];
 
 const data = [
  { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
 ];
 
 const options = {
   filterType: 'textField',
   download: 'false',
   print: 'false',
   responsive: 'standard',
   selectableRows: 'none',
   sortFilterList: 'true',
   viewColumns: 'false'
 };

 const theme = createTheme({
  overrides: {
    MUIDataTableSelectCell: {
      expandDisabled: {
        // Soft hide the button.
        visibility: 'hidden',
      },
    },
  },
});

export default function TableSection({companyData}) {


  var newdata = companyData.map(item => {
    var obj = {}
    for (let key in item) {
      if(key!== "location"){
        if(key === "fees"){
          obj[key] = `${item[key]['amount']} ${item[key]['currency']}`
          }else{
        obj[key] = item[key]     
        }
      }
    }
    //console.log(obj)
    return obj
  })


  console.log(newdata)
  return (
    <div>
      <section id="table-section" className="low-padding section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <h2>View the companies</h2>
            <p>Company <span>Listing</span></p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-12">
            <MUIDataTable
              data={newdata}
              columns={columns}
              options={options}
            />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
