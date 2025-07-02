import ComingSoon from "@/components/shared/comming-soon"

const MindmapDashboard = () => {
  return (
    <div className="space-y-6 flex flex-col h-screen overflow-y-auto justify-center items-center pzy">
      <ComingSoon
        title="Mind Map for Notes"
        description="Visualize your notes as interconnected ideas to enhance comprehension and creativity."
        version="v2"
        onNotifyMe={() => { }}
        expectedDate="July 2025"
        progress={20}
        key={2}
        // features={[
        //   { name: "Visual Mapping", description: "Transform notes into interactive visual mind maps", status: "in-progress" },
        //   { name: "Bi-Directional Links", description: "Create links between related notes for contextual navigation", status: "planned" },
        //   { name: "Drag-and-Drop Interface", description: "Easily arrange, group, and restructure note nodes", status: "planned" },
        //   { name: "Theme & Color Coding", description: "Customize nodes with colors and tags for clarity", status: "planned" },
        //   { name: "AI Auto-Map", description: "Automatically generate mind maps from your note content", status: "planned" },
        // ]}
      />

    </div>
  )
}

export default MindmapDashboard