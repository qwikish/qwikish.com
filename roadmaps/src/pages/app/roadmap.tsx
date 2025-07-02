import { useState } from 'react';
import {
    Card, CardContent, CardHeader, CardTitle, CardDescription
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    ChevronDown, ChevronUp, Star, Clock, Users, Zap, Bookmark, Share2, Check,
    BookOpen,
    ExternalLink,
    PlayCircle,
    Book,
    FileQuestion
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { fullStackRoadmap, type ResourceItem } from '@/constants';
import { Link } from 'react-router-dom';

export const RoadmapDetailsPage = () => {
    const [expandedMilestones, setExpandedMilestones] = useState<Record<number, boolean>>({});
    const [userProgress, setUserProgress] = useState({
        started: false,
        completed: 0,
        currentMilestone: null as number | null,
    });

    const toggleMilestone = (index: number) => {
        setExpandedMilestones(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const startRoadmap = () => {
        setUserProgress(prev => ({
            ...prev,
            started: true,
            currentMilestone: 0
        }));
    };

    const toggleStepCompletion = (milestoneIndex: number, stepIndex: number) => {
        // In a real app, you would update this in your database/state management
        console.log(`Toggled milestone ${milestoneIndex} step ${stepIndex}`);
    };

    const calculateProgress = () => {
        if (!userProgress.started) return 0;
        const totalSteps = fullStackRoadmap.milestones.reduce(
            (sum, milestone) => sum + milestone.steps.length, 0
        );
        // This is simplified - in a real app you'd track completed steps
        return Math.round((userProgress.completed / totalSteps) * 100);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="secondary" className="text-sm">
                            {fullStackRoadmap.difficulty}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span>{fullStackRoadmap.rating}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold mb-2">{fullStackRoadmap.title}</h1>
                    <p className="text-lg text-muted-foreground mb-6">{fullStackRoadmap.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {fullStackRoadmap.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="px-3 py-1">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{fullStackRoadmap.duration}</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <Users className="w-4 h-4 mr-2" />
                            <span>10,000+ learners</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button onClick={startRoadmap} className="gap-2">
                            {userProgress.started ? 'Continue Learning' : 'Start Learning'}
                            <Zap className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" className="gap-2">
                            <Bookmark className="w-4 h-4" />
                            Save
                        </Button>
                        <Button variant="outline" className="gap-2">
                            <Share2 className="w-4 h-4" />
                            Share
                        </Button>
                    </div>
                </div>

                <div className="w-full md:w-80">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Your Progress</CardTitle>
                            {userProgress.started ? (
                                <CardDescription>
                                    {calculateProgress()}% completed
                                </CardDescription>
                            ) : (
                                <CardDescription>Not started yet</CardDescription>
                            )}
                        </CardHeader>
                        <CardContent>
                            {userProgress.started ? (
                                <>
                                    <Progress value={calculateProgress()} className="h-2 mb-4" />
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Current:</span>
                                            <span className="font-medium">
                                                {userProgress.currentMilestone !== null
                                                    ? fullStackRoadmap.milestones[userProgress.currentMilestone].title
                                                    : 'Not started'}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Started:</span>
                                            <span className="font-medium">2 weeks ago</span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-muted-foreground mb-4">
                                        Start this roadmap to track your progress
                                    </p>
                                    <Button onClick={startRoadmap} className="gap-2">
                                        Start Learning
                                        <Zap className="w-4 h-4" />
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Separator className="my-8" />

            {/* Content Tabs */}

            {/* Roadmap Content */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Learning Path</h2>

                {fullStackRoadmap.milestones.map((milestone, milestoneIndex) => (
                    <Card key={milestoneIndex} className="overflow-hidden hover:bg-muted/50 hover:scale-101 transition-transform duration-400">
                        <button
                            onClick={() => toggleMilestone(milestoneIndex)}
                            className="w-full text-left"
                        >
                            <CardHeader className="flex flex-row items-center justify-between  transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                                        {milestoneIndex + 1}
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                                        <CardDescription>
                                            {milestone.steps.length} steps
                                        </CardDescription>
                                    </div>
                                </div>
                                {expandedMilestones[milestoneIndex] ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </CardHeader>
                        </button>

                        {expandedMilestones[milestoneIndex] && (
                            <CardContent className="border-t">
                                <div className="space-y-4">
                                    {milestone.steps.map((step, stepIndex) => (
                                        <div key={stepIndex} className="flex gap-4">
                                            <div className="flex flex-col items-center pt-1">
                                                <button
                                                    onClick={() => toggleStepCompletion(milestoneIndex, stepIndex)}
                                                    className={`w-5 h-5 rounded-full border cursor-pointer flex items-center justify-center mt-1 ${step.isCompleted ? 'bg-primary text-primary-foreground' : ''}`}
                                                >
                                                    <Check className={`w-4 h-4`} />
                                                </button>
                                                {stepIndex < milestone.steps.length - 1 && (
                                                    <div className="w-px h-full bg-border" />
                                                )}
                                            </div>
                                            <div className="flex-1 py-6">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h3 className="font-medium mb-2">{step.title}</h3>
                                                        <div className="flex flex-wrap gap-2 mb-3">

                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button variant="outline" size="sm" className="cursor-pointer">
                                                                    View Resources
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="md:max-w-6xl md:w-full w-xl max-h-[80vh] overflow-y-auto">
                                                                <DialogHeader>
                                                                    <DialogTitle className="text-2xl font-bold text-primary">Learning Resources</DialogTitle>
                                                                    <DialogDescription>
                                                                        Curated materials to help you master this step
                                                                    </DialogDescription>
                                                                </DialogHeader>

                                                                <div className="space-y-6">
                                                                    {/* Free Resources Section */}
                                                                    {!step.resources?.free && !step.resources?.paid && (
                                                                        <section className="space-y-4">
                                                                            <h2 className="text-xl font-semibold text-foreground border-b pb-2">
                                                                                Free Resources
                                                                            </h2>
                                                                            <p className="text-muted-foreground">
                                                                                No free resources available for this step.
                                                                            </p>
                                                                            <h2 className="text-xl font-semibold text-foreground border-b pb-2">
                                                                                Paid Resources
                                                                            </h2>
                                                                            <p className="text-muted-foreground">
                                                                                No paid resources available for this step.
                                                                            </p>
                                                                        </section>
                                                                    )}
                                                                    {step.resources?.free && (
                                                                        <section className="space-y-4">
                                                                            <h2 className="text-xl font-semibold text-foreground border-b pb-2">
                                                                                Free Resources
                                                                            </h2>

                                                                            {/* Articles */}
                                                                            {step.resources.free.article && step.resources.free.article.length  > 0 && (
                                                                                <div className="space-y-3">
                                                                                    <h3 className="text-lg font-medium text-foreground/80 flex items-center gap-2">
                                                                                        <BookOpen className="h-5 w-5" />
                                                                                        Articles & Guides
                                                                                    </h3>
                                                                                    <div className="grid md:grid-cols-2 gap-3">
                                                                                        {step.resources.free.article.map((resource, index) => (
                                                                                            <ResourceCard key={index} resource={resource} />
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            )}

                                                                            {/* Videos */}
                                                                            { step.resources.free.video && step.resources.free.video?.length > 0 && (
                                                                                <div className="space-y-3">
                                                                                    <h3 className="text-lg font-medium text-foreground/80 flex items-center gap-2">
                                                                                        <PlayCircle className="h-5 w-5" />
                                                                                        Video Tutorials
                                                                                    </h3>
                                                                                    <div className="grid md:grid-cols-2 gap-3">
                                                                                        {step.resources.free.video.map((resource, index) => (
                                                                                            <ResourceCard key={index} resource={resource} />
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            )}

                                                                            {/* Books */}
                                                                            { step.resources.free.book && step.resources.free.book?.length > 0 && (
                                                                                <div className="space-y-3">
                                                                                    <h3 className="text-lg font-medium text-foreground/80 flex items-center gap-2">
                                                                                        <Book className="h-5 w-5" />
                                                                                        Free Books & eBooks
                                                                                    </h3>
                                                                                    <div className="grid md:grid-cols-2 gap-3">
                                                                                        {step.resources.free.book.map((resource, index) => (
                                                                                            <ResourceCard key={index} resource={resource} />
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            )}

                                                                            {/* Other */}
                                                                            { step.resources.free.other &&   step.resources.free.other?.length > 0 && (
                                                                                <div className="space-y-3">
                                                                                    <h3 className="text-lg font-medium text-foreground/80 flex items-center gap-2">
                                                                                        <FileQuestion className="h-5 w-5" />
                                                                                        Other Resources
                                                                                    </h3>
                                                                                    <div className="grid md:grid-cols-2 gap-3">
                                                                                        {step.resources.free.other.map((resource, index) => (
                                                                                            <ResourceCard key={index} resource={resource} />
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </section>
                                                                    )}

                                                                    {/* Paid Resources Section */}
                                                                    { step.resources?.paid && step.resources?.paid?.length > 0 && (
                                                                        <section className="space-y-4">
                                                                            <h2 className="text-xl font-semibold text-foreground border-b pb-2">
                                                                                Premium Resources
                                                                            </h2>
                                                                            <div className="grid md:grid-cols-2 gap-3">
                                                                                {step.resources.paid.map((resource, index) => (
                                                                                    <ResourceCard key={index} resource={resource} isPaid />
                                                                                ))}
                                                                            </div>
                                                                        </section>
                                                                    )}
                                                                </div>
                                                            </DialogContent>
                                                        </Dialog>

                                                    </div>
                                                </div>
                                                {step.project && (
                                                    <div className="bg-muted/50 p-3 rounded-md">
                                                        <p className="text-sm font-medium mb-1">Project:</p>
                                                        <p className="text-sm text-muted-foreground">{step.project}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        )}
                    </Card>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready to start your journey?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Join thousands of developers who have used this roadmap to become full-stack developers.
                </p>
                <Button size="lg" className="gap-2">
                    {userProgress.started ? 'Continue Learning' : 'Start Learning Now'}
                    <Zap className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

interface ResourceCardProps {
    resource: ResourceItem;
    isPaid?: boolean;
}

const ResourceCard = ({ resource, isPaid = false }: ResourceCardProps) => {
    return (
        <Card className="border rounded-lg p-4 hover:shadow-md hover:bg-primary/30 transition-all duration-200  cursor-pointer ">
            <div className="flex justify-between items-start gap-2">
                <div>
                    <Link
                        to={resource.url}
                        target="_blank"
                        className="font-medium text-primary hover:underline flex items-center gap-2"
                    >
                        {resource.name}
                        {isPaid && (
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                Premium
                            </span>
                        )}
                    </Link>
                    {resource.description && (
                        <p className="text-xs text-muted-foreground mt-1">
                            {resource.description}
                        </p>
                    )}
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
            {resource.author && (
                <p className="text-xs text-accent-foreground mt-2">
                    By {resource.author}
                </p>
            )}
        </Card>
    );
  };