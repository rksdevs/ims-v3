export const brandData = {
    columns: [
        { field: 'id', headerName: 'ID', width: 160 },
        { field: 'brandName', headerName: 'Brand name', width: 160 },
        { field: 'status', headerName: 'Status', width: 160 },
        // {
        //   field: 'age',
        //   headerName: 'Age',
        //   type: 'number',
        //   width: 90,
        // },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
    ],

    rows: [
        { id: 1, brandName: 'Snow', status: 'Active'},
        { id: 2, brandName: 'Lannister', status: 'Active'},
        { id: 3, brandName: 'Lannister', status: 'Active'},
        { id: 4, brandName: 'Stark', status: 'Active'},
        { id: 5, brandName: 'Targaryen', status: 'Active'},
        { id: 6, brandName: 'Melisandre', status: "Inactive"},
        { id: 7, brandName: 'Clifford', status: 'Inactive'},
        { id: 8, brandName: 'Frances', status: 'Inactive'},
        { id: 9, brandName: 'Roxie', status: 'Inactive'},
    ]
}