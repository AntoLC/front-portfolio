interface StarsProps {
    number:number;
}

export const Stars = (props:StarsProps) => {
    return (
        <>
        {
            Array.apply(0, Array(5)).map(function (item, index) {
                return <span key={"star-"+index} className={"material-icons text-sm " + ((index <= props.number - 1) ? "text-yellow-400" : "text-yellow-800")}>star</span>;
            })
        }
        </>
    );
}