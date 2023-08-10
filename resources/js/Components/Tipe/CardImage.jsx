export const CardImage = ({ image, title }) => {
    return (
        <div className=" flex bg-white select-none cursor-pointer h-auto w-full">
            <img
                src={`/storage/images/gallery/${image}`}
                alt={title}
                className=" object-cover w-full h-full "
            />
        </div>
    );
};
