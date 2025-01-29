function UserList()
{
    // const users = ["Mendy", "Bob", "James", "Jeff", "Elon"]
    const users = [
        { name: "Mendy", email: "mendy@example.com", age: 25 },
        { name: "Bob", email: "bob@example.com", age: 30 },
        { name: "James", email: "james@example.com", age: 28 },
        { name: "Jeff", email: "jeff@example.com", age: 35 },
        { name: "Elon", email: "elon@example.com", age: 40 },
        { name: "Alice", email: "alice@example.com", age: 22 },
        { name: "John", email: "john@example.com", age: 27 },
        { name: "Sara", email: "sara@example.com", age: 24 },
        { name: "Michael", email: "michael@example.com", age: 32 },
        { name: "Emma", email: "emma@example.com", age: 29 }
    ];
    const age = 20;
    return (

        <>
            <div>
                {
                    age > 20 ? <p>age</p> : <p>age is less than 20</p>
                }
            </div>
            < table >
                <tbody>
                    {
                        users.map(user =>
                        {
                            if (user.age > 30)
                            {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                </tr>
                            }
                        })
                    }
                </tbody>
            </table >
        </>
    )
}

export default UserList;