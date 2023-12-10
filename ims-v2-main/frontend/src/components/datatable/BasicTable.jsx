import {useTable} from 'react-table';
import './basictable.scss'
import { useEffect, useState } from 'react';

const BasicTable = ({tableDataToSend}) => {

    const tableInstance = useTable({
        columns: tableDataToSend?.columns,
        data: tableDataToSend?.rows
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance

  return <div> 
    {tableDataToSend && <table {...getTableProps ()} className='basicTable'>
        <thead>
            {headerGroups?.map((headerGroup)=>(
            <tr {...headerGroup.getHeaderGroupProps()}>
                { headerGroup?.headers?.map((column)=> (
                        <th {...column.getHeaderProps()}>
                            {column.render('headerName')}
                        </th>
                    ))}
            </tr>
            ))}
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows?.map((row)=>{
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {
                            row?.cells?.map(cell=>{
                                return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                            })
                        }
                    </tr>
                )
            })}
            
        </tbody>
    </table>}

  </div>
}

export default BasicTable