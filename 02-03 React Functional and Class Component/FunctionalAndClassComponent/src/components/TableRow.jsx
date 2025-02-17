export default function TableRow(props)
{
    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.age}</td>
            <td>{props.user.email}</td>
            <td>{props.user.contact}</td>
        </tr>
    )
}

//export default TableRow;