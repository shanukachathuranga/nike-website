interface Props{
    imgURL:any,
    changeBigShoeImg:(shoe: any) => void,
    bigShoeImg:string
}


const ShoeCard = ({imgURL, changeBigShoeImg, bigShoeImg}:Props) => {

    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){
            changeBigShoeImg(imgURL.bigShoe)
        }
    }


    return (
        <div className={`border-2 rounded-xl
            ${bigShoeImg === imgURL.bigShoe
                ? 'border-coral-red'
                : 'border-transparent'
            } cursor-pointer max-sm:flex-1 
        `}
        onClick={handleClick}
        >
            <div
            className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:py-4"
            >
                <img src={imgURL.thumbnail}
                     alt="shoe collection"
                     width={127}
                     height={103}
                     className="object-contain"
                />
            </div>
        </div>
    );
};

export default ShoeCard;