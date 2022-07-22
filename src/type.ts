export type Digimon={
    name:string;
    level:string;
    img:string;
}

export interface Props{
    open:boolean;
    handleClose:()=>void;
}