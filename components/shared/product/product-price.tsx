import {cn} from "@/lib/utils";


export const ProductPrice = ({value, className} :{value: number; className?: string;}) => {

    //ensure two decimal places for the cents

    const markPrice = value.toFixed(2);

    //get the int/float

    const [intValue, floatValue] = markPrice.split(".");
    return (
        <p className={ cn('text-xl', className)}>
            <span>R</span>
            {intValue}
            <span className={"text-xs align-super"}>.{floatValue}
            </span>
        </p>
    )
}
