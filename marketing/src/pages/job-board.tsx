import ComingSoon from "@/components/shared/dashboard/comming-soon"

function JobBoardDashboard() {
  return (
    <ComingSoon
      title="Job Board"
      description="An AI powered job board app with rich features"
      version="v2"
      onNotifyMe={() => {

      }}
      expectedDate="August 2025"
      progress={0}
      key={1}
      features={[
        { name: "Job Listings", description: "Access a wide range of job listings", status: "planned" },
        { name: "Job Search", description: "Search for jobs", status: "planned" },
        { name: "Job Recommendations", description: "Get personalized job recommendations", status: "planned" },
        { name: "Job Alerts", description: "Get notifications about new job postings", status: "planned" },
        { name: "Job Applications", description: "Apply for jobs", status: "planned" },
        { name: "Job Interviews", description: "Schedule interviews", status: "planned" },
        { name: "Job Offers", description: "Accept job offers", status: "planned" },
      ]}
    />
  )
}

export default JobBoardDashboard