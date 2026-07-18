
interface Props {
    name: string;
    description: string;
    preparationTime: number;
}


export function TopSaleCoffee({name, description}: Props) {
    return (
        <div className="top-sale-item">
            <p><b>O café queridinho do Starbucks:</b></p>
            <p> {name} {description}</p>
        </div>
    );

}