interface StarsProps {
    number:number;
}

export const Stars = (props:StarsProps) => {
    return (
        <>
        {
            Array.apply(0, Array(5)).map(function (x, i) {
                return <span className={"material-icons text-sm " + ((i <= props.number - 1) ? "text-yellow-400" : "text-yellow-800")}>star</span>;
            })
        }
        </>
    );
}