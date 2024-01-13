import { MoveRight } from "lucide-react";

interface EventItemProps {
    title: string;
    dateStart: string;
    dateEnd: string;
    content: any; //DOM 엘리먼트 뭐임??
}

const EventItem = ({title, dateStart, dateEnd, content}:EventItemProps) => {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-4xl font-black">{title}</p>
            <hr />
            <div className="flex items-center justify-center gap-12 text-2xl font-bold">
                <p>{dateStart}</p>
                <MoveRight />
                <p>{dateEnd}</p>
            </div>
            <hr />
            <div className="px-4">
                {content}
            </div>
            <hr />
        </div>
    )
}

export default EventItem;