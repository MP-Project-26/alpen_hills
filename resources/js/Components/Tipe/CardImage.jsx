export const CardImage = ({ image, title }) => {
    return (
        <div className=" flex bg-white select-none cursor-pointer">
            <img
                src={image}
                alt={title}
                className="lg:h-[9rem] lg:w-[16rem] md:h-[7rem] md:w-[11rem] h-[5rem] w-[8rem] object-cover "
            />
        </div>
    );
};
