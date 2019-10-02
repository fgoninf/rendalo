import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'



class DataGrid extends React.Component {

    render() {
        const classes = makeStyles(theme => ({
            root: {
                width: '100%',
                marginTop: theme.spacing(3),
                overflowX: 'auto',
            },
            table: {
                minWidth: 650,
                paddingLeft: theme.spacing(50),
            }
        }));

        return (
            <LoadingOverlay active={this.props.loading} spinner={<BounceLoader />}>
                <Table className={classes.table + " grid-main"}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="left">Categoria</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map(row => (
                            <TableRow
                                hover
                                key={row.id}
                                className="grid-row">
                                <TableCell align="left" component="th" scope="row">{row.id} </TableCell>
                                <TableCell align="left" className="normal-content">{row.name} {row.lastName}</TableCell>
                                <TableCell align="left" className="normal-content">{row.category.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </LoadingOverlay>
        );
    }

}

export default DataGrid;