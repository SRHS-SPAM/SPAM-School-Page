import { ArrowRight } from "lucide-react";

const EventItem = ({key, title, dateStart, dateEnd, content}) => {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-4xl font-black">{title}</p>
            <hr />
            <div className="flex items-center justify-center gap-12 text-2xl font-bold">
                <p>{dateStart}</p>
                <ArrowRight />
                <p>{dateEnd}</p>
            </div>
            <hr />
            <div className="p-4">
                {content}
            </div>
            <hr />
        </div>
    )
}

export default EventItem;