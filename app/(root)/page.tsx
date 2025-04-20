import React from 'react'
import Link from "next/link";
import Image from "next/image";
import roboimg from "@/public/robot.png"
import InterviewCard from "@/components/InterviewCard";
import {getCurrentUser,} from "@/lib/actions/auth.action";
import {getInterviewsByUserId, getLatestInterviews} from "@/lib/actions/general.action";

const Page = async () => {
    const user = await getCurrentUser();
    const [userInterviews, latestInterviews] = await Promise.all([
        getInterviewsByUserId(user?.id!),
        getLatestInterviews({userId: user?.id!})
    ]);
    const hasPastInterviews = userInterviews?.length > 0;
    const hasUpcomingInterviews = latestInterviews?.length > 0;
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Get Interview-Ready with AI-Powered Practice and Feedback</h2>
                    <p className="text-lg">
                        Practice on real interview questions & get instant feedback
                    </p>
                    <button
                        className="btn-primary max-sm:w-full">
                        <Link href="/interview">Start an Interview</Link>
                    </button>
                </div>
                <Image src={roboimg} alt="robot" width={400} height={400}
                       className="max-sm:hidden"/>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>

                <div className="interviews-section">
                    {hasPastInterviews ? (
                        userInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))
                    ) : (<p>You haven&apos;t taken any interviews</p>)}
                </div>
            </section>
            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>

                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                        latestInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id}/>
                        ))
                    ) : (<p>there are no new interviews available</p>)}
                </div>

            </section>
        </>
    )
}
export default Page
