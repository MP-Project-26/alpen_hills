import React from "react";
import { CardImage } from "./CardImage";
import { TabPanel } from "@material-tailwind/react";

const Panel = ({ galleryByCategory }) => {
    return (
        <>
            {galleryByCategory.map((item, index) => (
                <TabPanel key={index} value={item.category_gallery.name}>
                    <div className="hover:scale-110 transform transition-all duration-500 ease-in-out w-full h-40">
                        <CardImage image={item.image} title={item.id} />
                    </div>
                </TabPanel>
            ))}
        </>
    );
};

export default Panel;
