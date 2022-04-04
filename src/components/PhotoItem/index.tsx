import * as C from "./styles";
import * as Photos from "../../services/photos";
import { Photo } from "../../types/photo";

type Props = {
    url: string;
    name: string;
}

export const PhotoItem = ({ url, name }: Props) => {

    return(
        <C.Container>
            <img src={url} alt={name}/>
            {name}
            <input type="button" onClick={() => Photos.remove(name)} value="Excluir"/>
        </C.Container>

    )
}