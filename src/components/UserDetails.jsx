export function UserDetails( user) 
{ console.log(user);

    return (
    <div>
        <b>ID:</b> 
        <span>{user.user.id}</span>
        <br />
        <b>Username:</b> 
        <span>{user.user.username}</span>
        <br />
        <b>Email:</b> 
        <span>{user.user.Email}</span>
    </div>
    );
}