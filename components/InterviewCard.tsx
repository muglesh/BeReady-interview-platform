import React from 'react'
import dayjs from 'dayjs'
import Image from "next/image";
import {getRandomInterviewCover} from "@/lib/utils";
import Link from "next/link";
import DisplayTechIcons from "@/components/DisplayTechIcons";

const InterviewCard = ({
                           interviewId, userId, id, role, type, techstack,
                           createdAt
                       }: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');
    return (
        <div className="cad-border w-[360px] max-sm:w-full min-h-96">
            <div className="card-interview">
                <div>
                    <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg
                    bg-light-600">
                        <p className="badge-text">{normalizedType}</p>
                    </div>
                    <Image src={getRandomInterviewCover()} alt='cover' width={90} height={90}
                           className="rounded-full object-fit size-[90px]"/>
                    <h3 className="capitalize mt-5">
                        {role} Interview
                    </h3>
                    <div className="flex flex-row gap-5 mt-3">
                        <div className="gap-2 flex flex-row">
                            <Image src="/calendar.svg" alt="calendar" width={22} height={22}/>
                            <p>{formattedDate}</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Image src='/star.svg' alt='star' width={22} height={22}/>
                            <p>{feedback?.totalScore || '---'}/100</p>
                        </div>
                    </div>
                    <p className="line-clamp-2 mt-5">
                        {feedback?.finalAssessment || "You haven't taken the interview yet. Take it" +
                            "now to improve your skills."}
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <DisplayTechIcons techStack={techstack}/>
                    <button className="btn-primary">
                        <Link href={feedback
                            ? `/interview/${id}/feedback` :
                            `/interview/${id}`}>
                            {feedback ? "Check Feedback" : "Take interview"}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default InterviewCard
