const users = [
  {
    name: "Joe",
    email: "joe@email.com",
    age: 25,
  },
  {
    name: "Bob",
    email: "bob@email.com",
    age: 35,
  },
  {
    name: "Donald",
    email: "donald@email.com",
    age: 70,
  },
];

const Users = () => {
  return (
    <>
      <h1 style={{ color: "green" }}>Users List</h1>
      {users.map((item) => {
        return (
          <div key={item.email}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.age}</p>
          </div>
        );
      })}
    </>
  );
};

export default Users;
