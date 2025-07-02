import { useState, useEffect } from 'react';
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
    Star, Users, Clock, Zap, Filter, Search, ChevronDown, ChevronUp
} from 'lucide-react';
import { _roadmap_data } from '@/constants';

export const RoadmapsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState<("Beginner" | "Intermediate" | "Advanced")[]>([]);
    const [selectedDuration, setSelectedDuration] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [minRating, setMinRating] = useState(0);
    const [sortBy, setSortBy] = useState<'popular' | 'rating' | 'newest' | 'duration'>('popular');
    const [filteredRoadmaps, setFilteredRoadmaps] = useState(_roadmap_data.customRoadmaps);
    const [expandedTags, setExpandedTags] = useState(false);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // Extract all unique tags
    const allTags = [...new Set(_roadmap_data.customRoadmaps.flatMap(roadmap => roadmap.tags))];
    const displayedTags = expandedTags ? allTags : allTags.slice(0, 10);

    // Extract all unique difficulties
    const allDifficulties = ["Beginner", "Intermediate", "Advanced"] as const;

    // Filter and sort roadmaps
    useEffect(() => {
        const filtered = _roadmap_data.customRoadmaps.filter(roadmap => {
            // Search term filter
            const matchesSearch =
                roadmap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                roadmap.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                roadmap.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            // Difficulty filter
            const matchesDifficulty =
                selectedDifficulty.length === 0 ||
                selectedDifficulty.includes(roadmap.difficulty as ("Beginner" | "Intermediate" | "Advanced"));

            // Duration filter
            const durationMonths = parseInt(roadmap.duration);
            const matchesDuration =
                !selectedDuration ||
                (selectedDuration === 'short' && durationMonths <= 6) ||
                (selectedDuration === 'medium' && durationMonths > 6 && durationMonths <= 12) ||
                (selectedDuration === 'long' && durationMonths > 12);

            // Tags filter
            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.some(tag => roadmap.tags.includes(tag));

            // Rating filter
            const matchesRating = roadmap.rating >= minRating;

            return matchesSearch && matchesDifficulty && matchesDuration && matchesTags && matchesRating;
        });

        // Sort filtered results
        switch (sortBy) {
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                // For demo purposes, keeping original order
                break;
            case 'duration':
                filtered.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
                break;
            case 'popular':
            default:
                filtered.sort((a, b) => b.students - a.students);
                break;
        }

        setFilteredRoadmaps(filtered);
    }, [searchTerm, selectedDifficulty, selectedDuration, selectedTags, minRating, sortBy]);

    const toggleDifficulty = (difficulty: "Beginner" | "Intermediate" | "Advanced") => {
        setSelectedDifficulty(prev =>
            prev.includes(difficulty)
                ? prev.filter(d => d !== difficulty)
                : [...prev, difficulty]
        );
    };

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedDifficulty([]);
        setSelectedDuration('');
        setSelectedTags([]);
        setMinRating(0);
        setSortBy('popular');
    };

    const getDifficultyVariant = (difficulty: "Beginner" | "Intermediate" | "Advanced") => {
        switch (difficulty) {
            case 'Beginner': return 'secondary';
            case 'Intermediate': return 'default';
            case 'Advanced': return 'destructive';
            default: return 'outline';
        }
    };

    return (
        <div className="flex flex-col w-full">
            {/* Mobile Filters Button */}
            <div className="lg:hidden p-4 border-b">
                <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                    onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                >
                    <Filter className="w-4 h-4" />
                    {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
                {/* Sidebar Filters - Mobile */}
                {mobileFiltersOpen && (
                    <div className="lg:hidden p-4 bg-muted">
                        <div className="space-y-6 bg-muted p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold flex items-center gap-2">
                                    <Filter className="w-5 h-5 text-primary" />
                                    Filters
                                </h2>
                                <Button variant="ghost" size="sm" onClick={() => setMobileFiltersOpen(false)}>
                                    Close
                                </Button>
                            </div>
                            <Separator className="my-2" />

                            {/* Search */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Search Roadmaps</Label>
                                <div className="relative ">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search..."
                                        className="pl-9 h-10 border-muted-foreground"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Difficulty */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Difficulty Level</Label>
                                <div className="space-y-2">
                                    {allDifficulties.map(difficulty => (
                                        <div key={difficulty} className="flex items-center gap-3">
                                            <Checkbox
                                                id={`mobile-difficulty-${difficulty}`}
                                                checked={selectedDifficulty.includes(difficulty)}
                                                onCheckedChange={() => toggleDifficulty(difficulty)}
                                                className="h-5 w-5 bg-background border-muted-foreground"
                                            />
                                            <Label
                                                htmlFor={`mobile-difficulty-${difficulty}`}
                                                className="font-normal text-sm cursor-pointer"
                                            >
                                                {difficulty}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Duration */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Duration</Label>
                                <Select onValueChange={setSelectedDuration} value={selectedDuration} >
                                    <SelectTrigger className="h-10 border-muted-foreground">
                                        <SelectValue placeholder="Any duration" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="any">Any duration</SelectItem>
                                        <SelectItem value="short">Short (≤6 months)</SelectItem>
                                        <SelectItem value="medium">Medium (6-12 months)</SelectItem>
                                        <SelectItem value="long">Long (12+ months)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Tags */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label className="text-sm font-medium">Technologies & Skills</Label>
                                    {allTags.length > 10 && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-6 text-xs p-0"
                                            onClick={() => setExpandedTags(!expandedTags)}
                                        >
                                            {expandedTags ? (
                                                <>
                                                    <ChevronUp className="w-3 h-3 mr-1" />
                                                    Less
                                                </>
                                            ) : (
                                                <>
                                                    <ChevronDown className="w-3 h-3 mr-1" />
                                                    More
                                                </>
                                            )}
                                        </Button>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {displayedTags.map(tag => (
                                        <Badge
                                            key={tag}
                                            variant={selectedTags.includes(tag) ? "default" : "outline"}
                                            className="cursor-pointer hover:bg-primary/20 transition-colors text-xs"
                                            onClick={() => toggleTag(tag)}
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Minimum Rating</Label>
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <Select onValueChange={(value) => setMinRating(parseFloat(value))} value={minRating.toString()}>
                                        <SelectTrigger className="h-10 border-muted-foreground">
                                            <SelectValue placeholder="Any rating" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0">Any rating</SelectItem>
                                            <SelectItem value="4">4+ stars</SelectItem>
                                            <SelectItem value="4.5">4.5+ stars</SelectItem>
                                            <SelectItem value="4.8">4.8+ stars</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Reset Filters */}
                            <Button
                                variant="outline"
                                className="w-full h-10 mt-4"
                                onClick={resetFilters}
                            >
                                Reset All Filters
                            </Button>
                        </div>
                    </div>
                )}

                {/* Sidebar Filters - Desktop */}
                <div className="hidden lg:block w-full lg:w-80 p-6 bg-muted h-fit overflow-auto sticky top-24 border-r border-border/50">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                                <Filter className="w-5 h-5 text-primary" />
                                Filters
                            </h2>
                            <Separator className="my-4" />
                        </div>

                        {/* Search */}
                        <div className="space-y-3">
                            <Label className="text-sm font-medium">Search Roadmaps</Label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground " />
                                <Input
                                    placeholder="Search by title, description, or tags..."
                                    className="pl-9 h-10 border-muted-foreground"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Difficulty */}
                        <div className="space-y-3">
                            <Label className="text-sm font-medium">Difficulty Level</Label>
                            <div className="space-y-3">
                                {allDifficulties.map(difficulty => (
                                    <div key={difficulty} className="flex items-center gap-3">
                                        <Checkbox
                                            id={`difficulty-${difficulty}`}
                                            checked={selectedDifficulty.includes(difficulty)}
                                            onCheckedChange={() => toggleDifficulty(difficulty)}
                                            className='border-muted-foreground hover:bg-muted/30'
                                        />
                                        <Label
                                            htmlFor={`difficulty-${difficulty}`}
                                            className="font-normal text-sm cursor-pointer"
                                        >
                                            {difficulty}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Duration */}
                        <div className="space-y-3">
                            <Label className="text-sm font-medium">Duration</Label>
                            <Select onValueChange={setSelectedDuration} value={selectedDuration}>
                                <SelectTrigger className="h-10 border-muted-foreground">
                                    <SelectValue placeholder="Any duration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="any">Any duration</SelectItem>
                                    <SelectItem value="short">Short (≤6 months)</SelectItem>
                                    <SelectItem value="medium">Medium (6-12 months)</SelectItem>
                                    <SelectItem value="long">Long (12+ months)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Tags */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <Label className="text-sm font-medium">Technologies & Skills</Label>
                                {allTags.length > 10 && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-6 text-xs p-0"
                                        onClick={() => setExpandedTags(!expandedTags)}
                                    >
                                        {expandedTags ? (
                                            <>
                                                <ChevronUp className="w-3 h-3 mr-1" />
                                                Less
                                            </>
                                        ) : (
                                            <>
                                                <ChevronDown className="w-3 h-3 mr-1" />
                                                More
                                            </>
                                        )}
                                    </Button>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {displayedTags.map(tag => (
                                    <Badge
                                        key={tag}
                                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                                        className="cursor-pointer hover:bg-primary/20 transition-colors text-xs"
                                        onClick={() => toggleTag(tag)}
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="space-y-3">
                            <Label className="text-sm font-medium">Minimum Rating</Label>
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <Select onValueChange={(value) => setMinRating(parseFloat(value))} value={minRating.toString()}>
                                    <SelectTrigger className="h-10 border-muted-foreground">
                                        <SelectValue placeholder="Any rating" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">Any rating</SelectItem>
                                        <SelectItem value="4">4+ stars</SelectItem>
                                        <SelectItem value="4.5">4.5+ stars</SelectItem>
                                        <SelectItem value="4.8">4.8+ stars</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Reset Filters */}
                        <Button
                            variant="outline"
                            className="w-full h-10"
                            onClick={resetFilters}
                        >
                            Reset All Filters
                        </Button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 lg:p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                                {filteredRoadmaps.length} {filteredRoadmaps.length === 1 ? 'Roadmap' : 'Roadmaps'} Found
                            </h1>
                            <p className="text-muted-foreground mt-1 text-sm lg:text-base">
                                Discover structured learning paths to achieve your goals
                            </p>
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
                            <Select
                                onValueChange={(e) => {
                                    setSortBy(e as "popular" | "rating" | "newest" | "duration")
                                }} defaultValue={sortBy} value={sortBy}>
                                <SelectTrigger className="w-full sm:w-[180px] h-10">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="popular">Most Popular</SelectItem>
                                    <SelectItem value="rating">Highest Rated</SelectItem>
                                    <SelectItem value="newest">Newest</SelectItem>
                                    <SelectItem value="duration">Shortest First</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Results */}
                    {filteredRoadmaps.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 lg:py-20 text-center">
                            <div className="p-4 bg-muted/50 rounded-full mb-4 lg:mb-6">
                                <Search className="w-8 h-8 lg:w-12 lg:h-12 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold mb-2 lg:mb-3 text-foreground">No roadmaps found</h3>
                            <p className="text-muted-foreground max-w-md mb-4 lg:mb-6 text-sm lg:text-base">
                                We couldn't find any roadmaps matching your criteria. Try adjusting your filters or search terms.
                            </p>
                            <Button onClick={resetFilters} variant="outline">
                                Clear All Filters
                            </Button>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            {filteredRoadmaps.map((roadmap, index) => (
                                <Card key={index} className="hover:shadow-md lg:hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 lg:hover:-translate-y-1">
                                    <CardHeader className="pb-3 lg:pb-4">
                                        <div className="flex justify-between items-start mb-2 lg:mb-3">
                                            <Badge variant={getDifficultyVariant(roadmap.difficulty as "Beginner" | "Intermediate" | "Advanced")}>
                                                {roadmap.difficulty}
                                            </Badge>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400 mr-1" />
                                                <span className="font-medium">{roadmap.rating}</span>
                                            </div>
                                        </div>
                                        <CardTitle className="text-lg lg:text-xl leading-tight hover:text-primary transition-colors">
                                            {roadmap.title}
                                        </CardTitle>
                                        <CardDescription className="text-xs lg:text-sm leading-relaxed line-clamp-2">
                                            {roadmap.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="flex items-center justify-between text-xs lg:text-sm text-muted-foreground mb-3 lg:mb-4">
                                            <div className="flex items-center">
                                                <Clock className="w-3 h-3 lg:w-4 lg:h-4 mr-1.5" />
                                                <span>{roadmap.duration}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Users className="w-3 h-3 lg:w-4 lg:h-4 mr-1.5" />
                                                <span>{roadmap.students.toLocaleString()}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mb-4 lg:mb-6">
                                            {roadmap.tags.slice(0, 3).map((tag, tagIndex) => (
                                                <Badge key={tagIndex} variant="outline" className="text-[10px] lg:text-xs px-1.5 py-0.5">
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {roadmap.tags.length > 3 && (
                                                <Badge variant="outline" className="text-[10px] lg:text-xs px-1.5 py-0.5">
                                                    +{roadmap.tags.length - 3} more
                                                </Badge>
                                            )}
                                        </div>
                                        <Button className="w-full h-9 lg:h-10 font-medium text-sm lg:text-base">
                                            Start Learning
                                            <Zap className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};