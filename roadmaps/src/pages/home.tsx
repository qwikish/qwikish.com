import  { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Users, Clock, TrendingUp, Brain, Zap, Award, ChevronUp, ChevronDown, Sparkles, Compass, Code, BookOpen, Globe } from 'lucide-react';
import { _roadmap_data } from '@/constants';
import GradientBlobs from '@/components/shared/landing/hero-background';

const Home = () => {
    // State for expanding sections
    const [expandedSections, setExpandedSections] = useState({
        customRoadmaps: false,
        roleBasedRoadmaps: false,
        skillBasedRoadmaps: false,
        languageRoadmaps: false,
        frameworkRoadmaps: false,
        topicRoadmaps: false,
        aiGeneratedRoadmaps: false,
        communityRoadmaps: false
    });
    const {
        customRoadmaps,
        roleBasedRoadmaps,
        skillBasedRoadmaps,
        languageRoadmaps,
        frameworkRoadmaps,
        topicRoadmaps,
        communityRoadmaps        
    }  = _roadmap_data

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="flex-1  w-full min-h-screen">
            <GradientBlobs />
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Hero Section */}
                <HeroSection/>

                {/* Custom Roadmaps */}
                <section className="my-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">Featured Custom Roadmaps</h2>
                        <Button variant="ghost">View All</Button>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(expandedSections.customRoadmaps ?  customRoadmaps : customRoadmaps.slice(0, 6)).map((roadmap, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant={roadmap.difficulty === 'Beginner' ? 'secondary' : roadmap.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                                            {roadmap.difficulty}
                                        </Badge>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                                            {roadmap.rating}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg">{roadmap.title}</CardTitle>
                                    <CardDescription>{roadmap.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {roadmap.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="w-4 h-4 mr-1" />
                                            {roadmap.students.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {roadmap.tags.map((tag, tagIndex) => (
                                            <Badge key={tagIndex} variant="outline" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button className="w-full">Start Roadmap</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {customRoadmaps.length > 6 && (
                        <div className="flex justify-center mt-6">
                            <Button
                                variant="outline"
                                onClick={() => toggleSection('customRoadmaps')}
                                className="flex items-center gap-2"
                            >
                                {expandedSections.customRoadmaps ? (
                                    <>
                                        <ChevronUp className="w-4 h-4" />
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4" />
                                        Show More ({customRoadmaps.length - 6} more)
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </section>

                {/* Role Based Roadmaps */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">Role-Based Roadmaps</h2>
                        <Button variant="ghost">Explore All Roles</Button>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(expandedSections.roleBasedRoadmaps ? roleBasedRoadmaps : roleBasedRoadmaps.slice(0, 6)).map((role, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-primary/10 rounded-lg">
                                                {role.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-medium">{role.title}</h3>
                                                <p className="text-sm text-muted-foreground">{role.count} roadmaps</p>
                                            </div>
                                        </div>
                                        {role.popular && (
                                            <Badge variant="secondary">
                                                <TrendingUp className="w-3 h-3 mr-1" />
                                                Popular
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {roleBasedRoadmaps.length > 6 && (
                        <div className="flex justify-center mt-6">
                            <Button
                                variant="outline"
                                onClick={() => toggleSection('roleBasedRoadmaps')}
                                className="flex items-center gap-2"
                            >
                                {expandedSections.roleBasedRoadmaps ? (
                                    <>
                                        <ChevronUp className="w-4 h-4" />
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4" />
                                        Show More ({roleBasedRoadmaps.length - 6} more)
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </section>

                {/* Skill Based Roadmaps */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">Skill-Based Learning Paths</h2>
                        <Button variant="ghost">View All Skills</Button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {(expandedSections.skillBasedRoadmaps ? skillBasedRoadmaps : skillBasedRoadmaps.slice(0, 6)).map((skill, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                                        <Badge variant="outline">{skill.level}</Badge>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {skill.duration}
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="w-4 h-4 mr-1" />
                                            {skill.students} students
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {skillBasedRoadmaps.length > 6 && (
                        <div className="flex justify-center mt-6">
                            <Button
                                variant="outline"
                                onClick={() => toggleSection('skillBasedRoadmaps')}
                                className="flex items-center gap-2"
                            >
                                {expandedSections.skillBasedRoadmaps ? (
                                    <>
                                        <ChevronUp className="w-4 h-4" />
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4" />
                                        Show More ({skillBasedRoadmaps.length - 6} more)
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </section>

                {/* Language Based Roadmaps */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">Programming Languages</h2>
                        <Button variant="ghost">All Languages</Button>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(expandedSections.languageRoadmaps ? languageRoadmaps : languageRoadmaps.slice(0, 6)).map((lang, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-xl">{lang.lang}</h3>
                                        <Badge className={lang.color}>{lang.difficulty}</Badge>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-3">
                                        {lang.projects} projects and exercises
                                    </p>
                                    <Button variant="outline" size="sm" className="w-full">
                                        Start Learning {lang.lang}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {languageRoadmaps.length > 6 && (
                        <div className="flex justify-center mt-6">
                            <Button
                                variant="outline"
                                onClick={() => toggleSection('languageRoadmaps')}
                                className="flex items-center gap-2"
                            >
                                {expandedSections.languageRoadmaps ? (
                                    <>
                                        <ChevronUp className="w-4 h-4" />
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4" />
                                        Show More ({languageRoadmaps.length - 6} more)
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </section>

                {/* Framework Based Roadmaps */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">Framework Mastery</h2>
                        <Button variant="ghost">Browse Frameworks</Button>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(expandedSections.frameworkRoadmaps ? frameworkRoadmaps : frameworkRoadmaps.slice(0, 6)).map((framework, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="font-semibold">{framework.name}</h3>
                                            <p className="text-sm text-muted-foreground">{framework.type}</p>
                                        </div>
                                        <Badge variant="secondary">{framework.students}</Badge>
                                    </div>
                                    <div className="mb-3">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Popularity</span>
                                            <span>{framework.popularity}%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div
                                                className="bg-primary h-2 rounded-full"
                                                style={{ width: `${framework.popularity}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <Button size="sm" className="w-full">Learn {framework.name}</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {frameworkRoadmaps.length > 6 && (
                        <div className="flex justify-center mt-6">
                            <Button
                                variant="outline"
                                onClick={() => toggleSection('frameworkRoadmaps')}
                                className="flex items-center gap-2"
                            >
                                {expandedSections.frameworkRoadmaps ? (
                                    <>
                                        <ChevronUp className="w-4 h-4" />
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4" />
                                        Show More ({frameworkRoadmaps.length - 6} more)
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </section>

                {/* Topic Based Roadmaps */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">Specialized Topics</h2>
                        <Button variant="ghost">Explore Topics</Button>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topicRoadmaps.map((topic, index) => (
                            <Card key={index} className={`hover:shadow-md transition-shadow ${topic.featured ? 'ring-2 ring-primary/20' : ''}`}>
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-semibold">{topic.topic}</h3>
                                        {topic.featured && (
                                            <Badge>
                                                <Award className="w-3 h-3 mr-1" />
                                                Featured
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex justify-between">
                                            <span>Roadmaps available:</span>
                                            <span className="font-medium">{topic.roadmaps}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Total learning hours:</span>
                                            <span className="font-medium">{topic.totalHours}h</span>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm" className="w-full mt-4">
                                        Explore {topic.topic}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>



                {/* Community Roadmaps */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">Community Contributions</h2>
                        <Button variant="ghost">Join Community</Button>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {communityRoadmaps.map((community, index) => (
                            <Card key={index} className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant={community.difficulty === 'All Levels' ? 'secondary' : community.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                                            {community.difficulty}
                                        </Badge>
                                        {community.recent && (
                                            <Badge variant="outline" className="text-green-600 border-green-600">
                                                New
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-lg">{community.title}</CardTitle>
                                    <CardDescription>by {community.author}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center">
                                            <Star className="w-4 h-4 mr-1" />
                                            {community.likes} likes
                                        </div>
                                        <div className="flex items-center">
                                            <Users className="w-4 h-4 mr-1" />
                                            {community.comments} comments
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full">View Roadmap</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* AI Generated Roadmaps */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-foreground">AI-Powered Learning</h2>
                        <Button variant="ghost">Try AI Tools</Button>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {_roadmap_data.aiGeneratedRoadmaps.map((ai, index) => (
                            <div key={index} className="relative group">
                                <Card className=" pointer-events-none hover:shadow-lg transition-shadow border-dashed border-2 border-primary/30">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge variant="secondary">
                                                <Brain className="w-3 h-3 mr-1" />
                                                {ai.type}
                                            </Badge>
                                            <div className="flex items-center text-sm">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                                                {ai.avgRating}
                                            </div>
                                        </div>
                                        <CardTitle className="text-lg">{ai.title}</CardTitle>
                                        <CardDescription>{ai.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            <Zap className="w-4 h-4 inline mr-1" />
                                            {ai.generated} generated this week
                                        </p>
                                        <Button className="w-full" variant="default" disabled>
                                            <Brain className="w-4 h-4 mr-2" />
                                            Generate My Path
                                        </Button>
                                    </CardContent>
                                </Card>
                                <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg group-hover:bg-background/0 transition-colors duration-300">
                                    <span className="text-2xl font-bold text-primary opacity-90 group-hover:opacity-0 transition-opacity duration-300">
                                        Coming Soon!
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>



                {/* Call to Action */}
                <section className="text-center py-12 bg-card rounded-lg">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Join thousands of learners who are already transforming their careers with our structured learning paths.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="px-8">
                            <Zap className="w-4 h-4 mr-2" />
                            Get Started Free
                        </Button>
                        <Button variant="outline" size="lg" className="px-8">
                            <Brain className="w-4 h-4 mr-2" />
                            Explore AI Features
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;




const HeroSection = () => {
    return (
        <section
            id="qwikish-hero-section"
            data-app="Qwikish"
            className="px-4 sm:px-6 lg:px-8"
        >
            <div className="flex items-center justify-center flex-col text-center mb-16 py-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl">
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                    Qwikish Roadmap Library
                </h1>
                <p className="text-lg sm:text-xl max-w-3xl mb-8 opacity-90">
                    Transform your learning with{" "}
                    <strong>AI-powered tools</strong> and{" "}
                    <strong>structured roadmaps</strong> designed for students who want
                    to excel. Your path to mastery starts here.
                </p>
                <div className="flex gap-4">
                    <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 transition-colors duration-300 shadow-md"
                    >
                        Get Started with AI <Sparkles className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
                    >
                        Explore All Roadmaps <Compass className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>

            {/* --- */}

            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Featured Roadmaps
            </h2>
            <p className="text-muted-foreground text-center mb-10">
                Discover popular and highly-rated learning paths to kickstart your
                journey.
            </p>

            <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent className="-ml-4">
                    {_roadmap_data.customRoadmaps.slice(0, 6).map((roadmap, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                            <Card className="h-full flex flex-col justify-between">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-primary">
                                        {roadmap.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                                        {roadmap.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center text-sm text-gray-600 mb-2">
                                        <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                                        {roadmap.rating} ({roadmap.students.toLocaleString()}{" "}
                                        students)
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 mb-4">
                                        <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
                                        {roadmap.difficulty} &bull; {roadmap.duration}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {roadmap.tags.map((tag, tagIndex) => (
                                            <Badge key={tagIndex} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <Button className="w-full">View Roadmap</Button>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* --- */}

            <h2 className="text-3xl font-bold text-primary mt-16 mb-8 text-center">
                Explore by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Users className="h-8 w-8 text-white mb-2" />,
                        title: "Role-Based Roadmaps",
                        description:
                            "Pathways for specific career roles like Frontend Developer, Data Scientist, etc.",
                        subText:
                            "Designed to guide you through the essential skills and technologies needed for various industry roles.",
                        cta: "Browse Roles",
                    },
                    {
                        icon: <BookOpen className="h-8 w-8 text-white mb-2" />,
                        title: "Skill-Based Roadmaps",
                        description: "Master individual skills like React, Python, AWS.",
                        subText:
                            "Focus on deep diving into specific technical or soft skills to enhance your expertise.",
                        cta: "Explore Skills",
                    },
                    {
                        icon: <Code className="h-8 w-8 text-white mb-2" />,
                        title: "Language-Based Roadmaps",
                        description:
                            "Learn programming languages from beginner to advanced levels.",
                        subText:
                            "Comprehensive guides to mastering popular programming languages and their ecosystems.",
                        cta: "Discover Languages",
                    },
                    {
                        icon: <Sparkles className="h-8 w-8 text-white mb-2" />,
                        title: "Framework-Based Roadmaps",
                        description:
                            "Become proficient in frameworks like Next.js, Django, Spring Boot.",
                        subText:
                            "Structured learning paths to effectively utilize various development frameworks.",
                        cta: "View Frameworks",
                    },
                    {
                        icon: <Globe className="h-8 w-8 text-white mb-2" />,
                        title: "Topic-Based Roadmaps",
                        description: "Explore specific topics like Cybersecurity, Cloud.",
                        subText:
                            "Dive into broad or niche technical topics with curated learning resources.",
                        cta: "Browse Topics",
                    },
                    {
                        icon: <Brain className="h-8 w-8 text-white mb-2" />,
                        title: "AI-Generated Roadmaps",
                        description: "Get personalized learning paths tailored just for you!",
                        subText:
                            "Our intelligent system creates custom roadmaps based on your goals and current knowledge.",
                        cta: "Create My Roadmap",
                    },
                ].map((item, index) => (
                    <Card
                        key={index}
                        className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-orange-400 to-orange-600 text-white border-none"
                    >
                        <CardHeader>
                            {item.icon}
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription className="text-white/80">
                                {item.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-white/70 mb-4">{item.subText}</p>
                            <Button variant="secondary" className="bg-white text-orange-600 hover:bg-orange-100">
                                {item.cta}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

