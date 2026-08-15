import "./styles.css"
interface Props {
    value: string;
}

export default function color({value} : Props) {
    return <div className="colorbox" style={{ backgroundColor: value }}/> 

}