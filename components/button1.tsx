interface Ibtn {
   button: string
}

export default function Button1(props :Ibtn )
{
    return(
        <div className="button1">
            {props.button}
        </div>
    )
}