import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import './EventsTable.css'

const defaultColProps = {
  resizable: true,
  sortable: true
};

const columns = [
  {
    name: "ID",
    key: "uid",
    width: 120
  },
  {
    name: "Name",
    key: "name",
    formatter: ({value, row}) => (
      <a className="events-link" href={`/event/${row.uid}`}>{value}</a>
    ),

  },
  {
    name: "Start Date",
    key: "start_time",
    width: 220,
    formatter: ({value}) => (
      <a>{new Date(value).toLocaleDateString()} @ {new Date(value).toLocaleTimeString()}</a>
    )
  },
  {
    name: "Published",
    key: "published",
    // width: 100,
    formatter: ({value}) => (
      <a>{value ? "PUBLISHED" : ""}</a>
    ),
    width: 100
  },
  {
    name: "Approved",
    key: "approved",
    // width: 100,
    formatter: ({value}) => (
      <a>{value ? "APPROVED" : ""}</a>
    ),
    width: 100
  }
].map(c => ({ ...defaultColProps, ...c }));


export default class EventsTable extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    // onGridSort(initialRows, sortColumn, sortDirection){
    //   const comparer = (a, b) => {
    //     if (sortDirection === "ASC") {
    //       return a[sortColumn] > b[sortColumn] ? 1 : -1;
    //     } else if (sortDirection === "DESC") {
    //       return a[sortColumn] < b[sortColumn] ? 1 : -1;
    //     }
    //   };
    //   return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
    // };


    render() {
      return (
          <div className="EventsTable">
            <ReactDataGrid
              columns={columns}
              rowGetter={i => this.props.data[i]}
              rowsCount={this.props.data.length}
              minHeight={800}
            />
          </div>
          );
    }
}
