import React, { Fragment, memo, useState } from 'react';
import {
    Table, TableBody, TableCell, TableHead, TableRow, Button
} from '../../utilities/material-ui.index';
import { ModalComponent } from '../index';


const createData = (id: number, date: string, name: string, shipTo: string, paymentMethod: string, amount: number) => {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
    createData(5, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(6, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(7, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(8, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(9, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];
const title = 'date,name,shipTo,paymentMethod,amount';
console.log(rows);

export const TableComponent = memo((props: any) => {
    const [state, setState] = useState({ title: '', visible: false });

    const handleEdit = () => {
        console.log('编辑');
        setState({ title: '编辑', visible: true });
    };

    const handleDelect = () => {
        console.log('删除');
    };

    const handleModalOk = (ID?: string, content?: any) => {
        console.log(ID, content);
        setState({ ...state, visible: false });
    };

    return (
        <Fragment>
            <ModalComponent
                title={state.title}
                visible={state.visible}
                onChange={handleModalOk}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        {(title.split(',').map((v: any, i: any) => <TableCell key={i}>{v}</TableCell>))}
                        <TableCell align="right" style={{ paddingRight: 65 }}>操 作</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rows.map((row: any) => {
                        return (
                            <TableRow key={row.id}>
                                {(title.split(',').map((v: any, i: any) => <TableCell key={i}>{row[v]}</TableCell>))}
                                <TableCell align="right">
                                    <Button onClick={handleEdit}>编辑</Button>
                                    <Button onClick={handleDelect}>删除</Button>
                                </TableCell>
                            </TableRow>
                        )
                    }))}
                </TableBody>
            </Table>
        </Fragment>
    );
});
