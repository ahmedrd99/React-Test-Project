export function UserDetails( props) 
{ console.log(props);

    return (
    <div>
        <b>ID:</b> 
        <span>{props.user.id}</span>
        <br />
        <b>Username:</b> 
        <span>{props.user.username}</span>
        <br />
        <b>Email:</b> 
        <span>{props.user.Email}</span>
    </div>
    );
}