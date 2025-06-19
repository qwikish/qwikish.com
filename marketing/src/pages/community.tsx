import ComingSoon from "@/components/shared/dashboard/comming-soon"

const CommunityDashboard = () => {
  return (
      <ComingSoon
          title="Community & Peers"
          description="Connect with peers, share knowledge, and collaborate on projects."
          version="v2"
            onNotifyMe={() => {}}
            expectedDate="August 2025"
            progress={0}
            key={1}
            features={[
                { name: "Peer Connection", description: "Connect with peers", status: "planned" },
                { name: "Peer Sharing", description: "Share knowledge with peers", status: "planned" },
                { name: "Peer Collaboration", description: "Collaborate on projects with peers", status: "planned" },
                { name: "Peer Networking", description: "Network with peers", status: "planned" },
                { name: "Peer Mentorship", description: "Mentor peers", status: "planned" },
            ]}
          />
  )
}

export default CommunityDashboard