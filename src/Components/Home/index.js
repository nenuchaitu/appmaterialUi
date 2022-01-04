import {Component} from 'react';

import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Row from '../Row'

const items = [
    {
        item_id: 1,
        item_name: "Idly",
        item_description: "made with rice",
        item_price: 10
    },
    {
        item_id: 2,
        item_name: "Dosa",
        item_description: "made with rice",
        item_price: 20
    }
]

class Home extends Component{
    state = {rows:[]}
    
    componentDidMount(){
        this.setState({rows:items})
    }

    addRow = () =>{
        const {rows} = this.state
        const newItem = {
        item_id: rows.length+1,
        item_name: "",
        item_description: "",
        item_price: 0
        }
        this.setState({rows:[...rows,newItem]})
    }
    
    deleteRowFromList = (id) => {
        console.log(id)
        const {rows} = this.state
        const newRows = rows.filter((row)=>(row.item_id!==id))
        console.log(newRows)
        this.setState({rows:newRows})
    }

    render(){
        const {rows} = this.state
        const columnsList = ["item_id","item_name","item_description","item_price","actions"]
    return(<>
            
                <TableContainer  component={Paper}>
                    <Table sx={{minWidth:550 ,maxWidth:700}} aria-label="simple table">
                        <TableHead>
                        <TableRow >
                            {columnsList.map((column)=>(<TableCell key={column} align="center">{column}</TableCell>))}
                        </TableRow>
                        </TableHead>
                    <TableBody>
                    {rows.map((row) => (<Row row={row} key={row.item_id} deleteRow={this.deleteRowFromList}/>))}
                    </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="outlined" onClick={this.addRow} sx={{marginTop:2}}>Add Row</Button>
            
    </>)
    }
}

export default Home
