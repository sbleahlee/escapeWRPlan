import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


class TBL extends Component {  
  render(){
    //return this.create_table();

    var tables = [];
    var tr = this.props.data.tr;
    var td = this.props.data.td;

    for (var i = 1; i <= tr; i++){
      var cell = [];
      tables.push(<TableRow></TableRow>)
      for(var d = 1; d <= td; d++){
          cell.push(<TableCell>{d}</TableCell>);
      }        

      tables.push(<TableRow>{cell}</TableRow>);
    }

    const classes = makeStyles();

    return (
      <TableContainer component={Paper}>
        <Table className = {classes.table} aria-label = "simple table">
          <TableHead>
            <TableRow>
              {cell}
            </TableRow>
          </TableHead>
          <TableBody>
              {tables}
          </TableBody>
        </Table>
      </TableContainer>
    )

    // 

/*     for (var i = 1; i <= tr; i++){
        var cell = [];
        for(var d = 1; d <= td; d++){
            cell.push(<td></td>);
        }        

        tables.push(<tr>{cell}</tr>);
    }

    return (
      <table>
          <tbody>{tables}</tbody>
      </table>
    ) */
    
  }
} 

export default TBL;